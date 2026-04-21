"""
Process IAS CSV data to generate:
1. relationship_data.js - Officer connections (shared office/time) + District Collector data
2. pattern_data.js - Career pattern analysis
"""

import csv
import json
from collections import defaultdict, Counter
from datetime import datetime
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXP_CSV = os.path.join(BASE, "ias-experience.csv")
PROF_CSV = os.path.join(BASE, "ias-profile.csv")
OUT_DIR = os.path.dirname(os.path.abspath(__file__))

# ---------- helpers ----------

def parse_date(s):
    """Parse date string, return datetime or None."""
    if not s or s.strip() == "":
        return None
    s = s.strip()
    for fmt in ("%Y-%m-%d", "%d-%m-%Y", "%d/%m/%Y", "%Y/%m/%d"):
        try:
            return datetime.strptime(s, fmt)
        except ValueError:
            continue
    return None

def overlap_days(s1, e1, s2, e2):
    """Return overlap in days between two date ranges. Negative means no overlap."""
    latest_start = max(s1, s2)
    earliest_end = min(e1, e2)
    delta = (earliest_end - latest_start).days
    return max(0, delta)

# ---------- Step 1: Load profiles ----------
print("Loading profiles...")
profiles = {}  # ID -> profile dict
gender_map = {}  # ID -> gender
cadre_map = {}   # ID -> cadre
batch_map = {}   # ID -> allotment year
name_map = {}    # ID -> name

with open(PROF_CSV, "r", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        oid = row["ID"].strip()
        profiles[oid] = row
        gender_map[oid] = row.get("Gender", "").strip()
        cadre_map[oid] = row.get("Cadre", "").strip()
        batch_map[oid] = row.get("Allotment_Year", "").strip()
        name_map[oid] = row.get("Name", "").strip()

print(f"  Loaded {len(profiles)} profiles")

# ---------- Step 2: Load experience records ----------
print("Loading experience records...")
exp_records = []  # list of dicts
office_index = defaultdict(list)  # office -> [(id, name, start, end)]

# For pattern analysis
level_durations = defaultdict(list)  # level -> [days]
officer_levels = defaultdict(list)   # id -> [(level, start, end)]
collector_records = []

COLLECTOR_KEYWORDS = ["collector", "district magistrate", "deputy commissioner"]
LEVEL_ORDER = [
    "Junior Scale", "Senior Scale", "Junior Administrative Grade",
    "Selection Grade", "Under Secretary", "Deputy Secretary",
    "Director", "Joint Secretary", "Additional Secretary", "Secretary",
    "Secretary Equivalent", "Additional Secretary Equivalent"
]
# Canonical level mapping for analysis
CANONICAL_LEVELS = {
    "Junior Scale": "Junior Scale",
    "Senior Scale": "Senior Scale",
    "Junior Administrative Grade": "Junior Administrative Grade",
    "Selection Grade": "Selection Grade",
    "Under Secretary": "Under Secretary",
    "Deputy Secretary": "Deputy Secretary",
    "Director": "Director",
    "Joint Secretary": "Joint Secretary",
    "Additional Secretary": "Additional Secretary",
    "Additional Secretary Equivalent": "Additional Secretary",
    "Secretary": "Secretary",
    "Secretary Equivalent": "Secretary",
}

row_count = 0
skipped = 0

with open(EXP_CSV, "r", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        row_count += 1
        oid = row["ID"].strip()
        name = row["Name"].strip()
        cadre = row["Cadre"].strip()
        designation = row.get("Designation", "").strip()
        level = row.get("Level", "").strip()
        office = row.get("Office", "").strip()
        start_d = parse_date(row.get("Start_Date", ""))
        end_d = parse_date(row.get("End_Date", ""))

        if not name_map.get(oid):
            name_map[oid] = name
        if not cadre_map.get(oid):
            cadre_map[oid] = cadre

        # Skip records with bad dates
        if not start_d or not end_d:
            skipped += 1
            continue
        if end_d < start_d:
            # swap
            start_d, end_d = end_d, start_d

        # Build office index for relationship graph
        if office and office.strip() != "" and office.lower() not in ("", "n.a.", "details awaited", "on leave"):
            office_index[office].append((oid, name, start_d, end_d))

        # Check for District Collector designation
        desig_lower = designation.lower()
        if any(kw in desig_lower for kw in COLLECTOR_KEYWORDS):
            prof = profiles.get(oid, {})
            retired = prof.get("Retired", "").strip()
            is_active = retired == "0" or retired == ""
            collector_records.append({
                "id": oid,
                "name": name,
                "cadre": cadre,
                "batch": batch_map.get(oid, ""),
                "designation": designation,
                "office": office,
                "start": start_d.strftime("%Y-%m-%d") if start_d else "",
                "end": end_d.strftime("%Y-%m-%d") if end_d else "",
                "active": is_active,
                "gender": gender_map.get(oid, "")
            })

        # Level durations
        canonical = CANONICAL_LEVELS.get(level)
        if canonical:
            days = (end_d - start_d).days
            if 0 < days < 20000:  # sanity check: less than ~55 years
                level_durations[canonical].append(days)
                officer_levels[oid].append((canonical, start_d, end_d))

print(f"  Processed {row_count} experience rows ({skipped} skipped for bad dates)")

# ---------- Step 3: Relationship Graph (top 200 connections) ----------
print("Computing relationship graph (shared office overlaps)...")

# For efficiency, only process offices with 2+ officers and reasonable size
connection_strength = defaultdict(int)  # (id1, id2) -> total overlap days
connection_office = defaultdict(set)     # (id1, id2) -> set of shared offices

offices_processed = 0
large_skipped = 0

for office, entries in office_index.items():
    n = len(entries)
    if n < 2:
        continue
    # Skip very large offices (>500 entries) to avoid O(n^2) blowup
    if n > 500:
        large_skipped += 1
        continue
    offices_processed += 1
    # Pairwise overlap
    for i in range(n):
        id1, name1, s1, e1 = entries[i]
        for j in range(i + 1, n):
            id2, name2, s2, e2 = entries[j]
            if id1 == id2:
                continue
            days = overlap_days(s1, e1, s2, e2)
            if days > 30:  # minimum 30 days overlap to count
                pair = tuple(sorted([id1, id2]))
                connection_strength[pair] += days
                connection_office[pair].add(office)

print(f"  Processed {offices_processed} offices ({large_skipped} large offices skipped)")
print(f"  Found {len(connection_strength)} unique officer pairs with overlaps")

# Top 200 by strength
top_connections = sorted(connection_strength.items(), key=lambda x: -x[1])[:200]

connections_list = []
for (id1, id2), days in top_connections:
    offices_shared = list(connection_office[(id1, id2)])[:5]  # max 5 offices
    connections_list.append({
        "source": id1,
        "sourceName": name_map.get(id1, id1),
        "sourceCadre": cadre_map.get(id1, ""),
        "target": id2,
        "targetName": name_map.get(id2, id2),
        "targetCadre": cadre_map.get(id2, ""),
        "sharedDays": days,
        "sharedYears": round(days / 365.25, 1),
        "offices": offices_shared
    })

# Deduplicate collector records (same officer may have multiple postings)
seen_collectors = {}
for rec in collector_records:
    key = (rec["id"], rec["designation"], rec["office"], rec["start"])
    if key not in seen_collectors:
        seen_collectors[key] = rec

dc_officers = list(seen_collectors.values())
print(f"  District Collector/DM/DC records: {len(dc_officers)}")

# ---------- Step 4: Pattern Analysis ----------
print("Computing career pattern analysis...")

# 4a: Average time at each level
avg_time_at_level = {}
for level_name in ["Junior Scale", "Under Secretary", "Deputy Secretary",
                    "Director", "Joint Secretary", "Additional Secretary", "Secretary"]:
    durations = level_durations.get(level_name, [])
    if durations:
        avg_days = sum(durations) / len(durations)
        avg_time_at_level[level_name] = {
            "avgYears": round(avg_days / 365.25, 2),
            "avgDays": round(avg_days),
            "count": len(durations),
            "medianYears": round(sorted(durations)[len(durations) // 2] / 365.25, 2)
        }

# 4b: Which cadres produce the most Secretaries?
secretary_cadres = Counter()
secretary_ids_by_cadre = defaultdict(set)
for oid, levels in officer_levels.items():
    for (lvl, s, e) in levels:
        if lvl == "Secretary":
            cad = cadre_map.get(oid, "Unknown")
            secretary_ids_by_cadre[cad].add(oid)

# Count unique officers per cadre who reached Secretary level
cadre_to_secretary = {}
for cad, ids in sorted(secretary_ids_by_cadre.items(), key=lambda x: -len(x[1])):
    cadre_to_secretary[cad] = len(ids)

# Top 20 cadres
cadre_to_sec_top = dict(sorted(cadre_to_secretary.items(), key=lambda x: -x[1])[:20])

# 4c: Most common career paths (level sequences)
path_counter = Counter()
for oid, levels in officer_levels.items():
    # Sort by start date
    sorted_levels = sorted(levels, key=lambda x: x[1])
    # Deduplicate consecutive same levels
    path = []
    for (lvl, s, e) in sorted_levels:
        if not path or path[-1] != lvl:
            path.append(lvl)
    if len(path) >= 2:
        path_str = " -> ".join(path)
        path_counter[path_str] += 1

common_paths = [
    {"path": p, "count": c}
    for p, c in path_counter.most_common(30)
]

# 4d: Gender differences in promotion speed
print("  Computing gender-based promotion analysis...")
gender_level_durations = {"Male": defaultdict(list), "Female": defaultdict(list)}

for oid, levels in officer_levels.items():
    g = gender_map.get(oid, "").strip()
    if g not in ("Male", "Female"):
        continue
    for (lvl, s, e) in levels:
        days = (e - s).days
        if 0 < days < 20000:
            gender_level_durations[g][lvl].append(days)

# Also: time to reach each level from career start (proxy: first recorded entry)
gender_time_to_level = {"Male": defaultdict(list), "Female": defaultdict(list)}
for oid, levels in officer_levels.items():
    g = gender_map.get(oid, "").strip()
    if g not in ("Male", "Female"):
        continue
    sorted_levels = sorted(levels, key=lambda x: x[1])
    if not sorted_levels:
        continue
    career_start = sorted_levels[0][1]
    seen_levels = set()
    for (lvl, s, e) in sorted_levels:
        if lvl not in seen_levels:
            years_to_reach = (s - career_start).days / 365.25
            if 0 <= years_to_reach < 50:
                gender_time_to_level[g][lvl].append(years_to_reach)
                seen_levels.add(lvl)

gender_gap = {}
for lvl in ["Junior Scale", "Under Secretary", "Deputy Secretary",
            "Director", "Joint Secretary", "Additional Secretary", "Secretary"]:
    male_durations = gender_level_durations["Male"].get(lvl, [])
    female_durations = gender_level_durations["Female"].get(lvl, [])
    male_time_to = gender_time_to_level["Male"].get(lvl, [])
    female_time_to = gender_time_to_level["Female"].get(lvl, [])

    entry = {}
    if male_durations:
        entry["maleAvgYearsAtLevel"] = round(sum(male_durations) / len(male_durations) / 365.25, 2)
        entry["maleCount"] = len(male_durations)
    if female_durations:
        entry["femaleAvgYearsAtLevel"] = round(sum(female_durations) / len(female_durations) / 365.25, 2)
        entry["femaleCount"] = len(female_durations)
    if male_time_to:
        entry["maleAvgYearsToReach"] = round(sum(male_time_to) / len(male_time_to), 2)
    if female_time_to:
        entry["femaleAvgYearsToReach"] = round(sum(female_time_to) / len(female_time_to), 2)
    if entry:
        gender_gap[lvl] = entry

# ---------- Step 5: Write output files ----------
print("\nWriting output files...")

# relationship_data.js
rel_data = {
    "connections": connections_list,
    "dcOfficers": dc_officers
}
rel_path = os.path.join(OUT_DIR, "relationship_data.js")
with open(rel_path, "w", encoding="utf-8") as f:
    f.write("const REL_DATA = ")
    json.dump(rel_data, f, indent=2, ensure_ascii=False)
    f.write(";\n")
print(f"  Written: {rel_path}")

# pattern_data.js
pattern_data = {
    "avgTimeAtLevel": avg_time_at_level,
    "cadreToSecretary": cadre_to_sec_top,
    "commonPaths": common_paths,
    "genderGap": gender_gap
}
pat_path = os.path.join(OUT_DIR, "pattern_data.js")
with open(pat_path, "w", encoding="utf-8") as f:
    f.write("const PATTERN_DATA = ")
    json.dump(pattern_data, f, indent=2, ensure_ascii=False)
    f.write(";\n")
print(f"  Written: {pat_path}")

# ---------- Summary Stats ----------
print("\n" + "=" * 60)
print("SUMMARY STATISTICS")
print("=" * 60)
print(f"Profiles loaded:           {len(profiles)}")
print(f"Experience rows processed: {row_count}")
print(f"Rows skipped (bad dates):  {skipped}")
print(f"\n--- Relationship Graph ---")
print(f"Unique offices with 2+ officers: {offices_processed}")
print(f"Large offices skipped (>500):    {large_skipped}")
print(f"Unique officer pairs found:      {len(connection_strength)}")
print(f"Top connection: {connections_list[0]['sourceName']} <-> {connections_list[0]['targetName']} "
      f"({connections_list[0]['sharedDays']} days / {connections_list[0]['sharedYears']} yrs)")
print(f"Connections exported (top 200):  {len(connections_list)}")
print(f"\n--- District Collectors ---")
print(f"Total DC/DM/DepComm records:     {len(dc_officers)}")
unique_dc_ids = len(set(r['id'] for r in dc_officers))
print(f"Unique officers:                 {unique_dc_ids}")
print(f"\n--- Career Patterns ---")
print(f"Average time at level:")
for lvl in ["Junior Scale", "Under Secretary", "Deputy Secretary",
            "Director", "Joint Secretary", "Additional Secretary", "Secretary"]:
    info = avg_time_at_level.get(lvl)
    if info:
        print(f"  {lvl:30s}: {info['avgYears']:5.1f} yrs (median {info['medianYears']:.1f} yrs, n={info['count']})")
print(f"\nTop 10 cadres producing Secretaries:")
for cad, count in list(cadre_to_sec_top.items())[:10]:
    print(f"  {cad:30s}: {count} officers")
print(f"\nTop 5 career paths:")
for p in common_paths[:5]:
    print(f"  [{p['count']:4d}] {p['path']}")
print(f"\n--- Gender Gap ---")
for lvl in ["Joint Secretary", "Additional Secretary", "Secretary"]:
    g = gender_gap.get(lvl, {})
    m_reach = g.get("maleAvgYearsToReach", "N/A")
    f_reach = g.get("femaleAvgYearsToReach", "N/A")
    m_count = g.get("maleCount", 0)
    f_count = g.get("femaleCount", 0)
    print(f"  {lvl}: Male avg {m_reach} yrs to reach (n={m_count}), Female avg {f_reach} yrs (n={f_count})")

print(f"\nOutput files:")
print(f"  {rel_path} ({os.path.getsize(rel_path) / 1024:.0f} KB)")
print(f"  {pat_path} ({os.path.getsize(pat_path) / 1024:.0f} KB)")
print("Done!")
