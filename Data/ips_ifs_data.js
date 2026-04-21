// ============================================
// IPS & IFS OFFICERS DATA - Intelligence Dashboard
// Last Updated: April 2026
// Sources: MHA, MEA, DoPT official records
// ============================================

const IPS_IFS_DATA = {

// ====== INDIAN POLICE SERVICE (IPS) - TOP OFFICERS ======
ips: [
  // -- Director Level --
  {name:"Ravi Kumar Gupta", cadre:"Rajasthan", batch:1986, designation:"Director, CBI", ministry:"Central Bureau of Investigation", budget:936, budgetLabel:"Rs 936 Cr - India's premier investigating agency", level:"Director", note:"Heads India's top federal investigation agency. Cases include corruption, economic offences, special crimes. Reports to DoPT.", projects:["Anti-corruption drives","Economic offences","Interpol coordination","Cyber crime cell"]},
  {name:"Tapan Deka", cadre:"Himachal Pradesh", batch:1988, designation:"Director, Intelligence Bureau", ministry:"Intelligence Bureau (IB)", budget:3500, budgetLabel:"Rs 3,500 Cr (estimated, classified) - India's internal intelligence agency", level:"Director", note:"Heads India's oldest intelligence agency. Internal security, counter-intelligence, counter-terrorism. Reports directly to PMO.", projects:["Counter-terrorism","Internal security assessment","Cyber threat monitoring","Border intelligence"]},
  {name:"Samant Kumar Goel", cadre:"Punjab", batch:1984, designation:"Secretary, R&AW", ministry:"Research and Analysis Wing", budget:4200, budgetLabel:"Rs 4,200 Cr (estimated, classified) - External intelligence agency", level:"Secretary", note:"Heads India's external intelligence agency. Foreign intelligence, covert operations, strategic threat assessment.", projects:["Foreign intelligence","Counter-proliferation","Cyber intelligence","Strategic analysis"]},

  // -- DGP Level --
  {name:"Rashmi Shukla", cadre:"Maharashtra", batch:1988, designation:"Director General of Police", ministry:"Maharashtra Police", budget:18900, budgetLabel:"Rs 18,900 Cr - Largest state police force by budget", level:"DGP", note:"Heads India's richest state police. 2.5 lakh personnel. Mumbai Police, Anti-Terrorism Squad, State CID under command.", projects:["Mumbai security upgrade","Anti-Naxal operations","Cyber crime prevention","Women safety initiatives"]},
  {name:"Vikas Kumar Arora", cadre:"Uttar Pradesh", batch:1988, designation:"Director General of Police", ministry:"Uttar Pradesh Police", budget:28900, budgetLabel:"Rs 28,900 Cr - India's largest police force (4.5 lakh personnel)", level:"DGP", note:"Commands India's largest police force. 75 districts, 4.5 lakh personnel. Critical for maintaining law & order in India's most populous state.", projects:["Smart policing","CCTV surveillance network","Anti-Romeo squads","112 emergency response"]},
  {name:"Praveen Sood", cadre:"Karnataka", batch:1986, designation:"Director General of Police", ministry:"Karnataka Police", budget:12400, budgetLabel:"Rs 12,400 Cr - Tech-savvy police force", level:"DGP", note:"Bengaluru - India's IT capital security. Known for tech-forward policing, AI-based crime prediction.", projects:["AI crime prediction","Bengaluru safe city","Cyber crime lab","Community policing"]},
  {name:"Shankar Jiwal", cadre:"Tamil Nadu", batch:1988, designation:"Director General of Police", ministry:"Tamil Nadu Police", budget:11200, budgetLabel:"Rs 11,200 Cr", level:"DGP", note:"Industrial security, coastal security, communal harmony in diverse state.", projects:["Coastal security","Industrial corridor protection","Traffic management","Cyber forensics"]},
  {name:"Vikas Sahay", cadre:"Gujarat", batch:1988, designation:"Director General of Police", ministry:"Gujarat Police", budget:9800, budgetLabel:"Rs 9,800 Cr - Industrial security focus", level:"DGP", note:"Security of GIFT IFSC, industrial corridors, Dholera SIR. Gujarat model of policing.", projects:["GIFT IFSC security","Industrial zone policing","Coastal surveillance","Narcotics control"]},

  // -- CAPF & Central Forces --
  {name:"Anish Dayal Singh", cadre:"AGMUT", batch:1988, designation:"Director General, CRPF", ministry:"Central Reserve Police Force", budget:29782, budgetLabel:"Rs 29,782 Cr - World's largest paramilitary force (3.25 lakh)", level:"DG", note:"Commands 3.25 lakh personnel. Anti-Naxal ops, internal security, election duties, VIP security (SPG support).", projects:["Anti-Naxal operations","Election security","J&K deployment","VIP protection"]},
  {name:"Nitin Agrawal", cadre:"Uttar Pradesh", batch:1989, designation:"Director General, BSF", ministry:"Border Security Force", budget:23479, budgetLabel:"Rs 23,479 Cr - 2.65 lakh personnel guarding 7,000 km borders", level:"DG", note:"Guards India-Pakistan and India-Bangladesh borders. 2.65 lakh personnel. Anti-infiltration, anti-smuggling.", projects:["Smart fencing","Border infrastructure","Anti-drone systems","Riverine patrolling"]},
  {name:"Sheel Vardhan Singh", cadre:"Madhya Pradesh", batch:1988, designation:"Director General, CISF", ministry:"Central Industrial Security Force", budget:12493, budgetLabel:"Rs 12,493 Cr - Guards 356 installations including airports, metros", level:"DG", note:"Secures airports, nuclear plants, space centers, Delhi Metro, ports. 1.8 lakh personnel.", projects:["Airport security upgrade","Nuclear facility protection","Metro security","Port security"]},
  {name:"Director NSG", cadre:"Various", batch:1987, designation:"Director General, NSG", ministry:"National Security Guard", budget:1842, budgetLabel:"Rs 1,842 Cr - Elite counter-terror force", level:"DG", note:"India's elite counter-terrorism force. 51 SAG (Army) + Special Rangers Group (CAPFs). Hostage rescue, counter-hijack.", projects:["CT drills","VIP protection","Bomb disposal","Regional hubs"]},

  // -- Key Investigation/Regulatory --
  {name:"Rahul Rasgotra", cadre:"Madhya Pradesh", batch:1991, designation:"Director General, NIA", ministry:"National Investigation Agency", budget:534, budgetLabel:"Rs 534 Cr - India's counter-terror investigation agency", level:"DG", note:"India's primary counter-terror investigation agency. Jurisdiction across India without state permission.", projects:["Terror financing","ISIS/AQ cases","Cross-border terror","Cyber terrorism"]},
  {name:"Atul Karwal", cadre:"Gujarat", batch:1988, designation:"Director General, NDRF", ministry:"National Disaster Response Force", budget:2100, budgetLabel:"Rs 2,100 Cr - 16 battalions for disaster response", level:"DG", note:"16 specialized battalions. Earthquake, flood, cyclone, chemical, biological, nuclear response.", projects:["Cyclone preparedness","Flood rescue","CBRN response","Community training"]},
  {name:"Rakesh Asthana", cadre:"Gujarat", batch:1984, designation:"Commissioner of Police (Retd)", ministry:"Former CP Delhi / DG BSF", budget:0, budgetLabel:"Retired - former head of Delhi Police & BSF", level:"Commissioner", note:"One of the most prominent IPS officers. Headed Delhi Police during G20. Former interim CBI Director.", projects:["G20 security model","Delhi safe city","Anti-narcotics"]}
],

// ====== INDIAN FOREIGN SERVICE (IFS) - TOP OFFICERS ======
ifs: [
  // -- Top Diplomatic Leadership --
  {name:"Vikram Misri", cadre:"IFS", batch:1989, designation:"Foreign Secretary", ministry:"Ministry of External Affairs", budget:22154, budgetLabel:"Rs 22,154 Cr MEA budget + manages 200+ Indian missions globally", level:"Foreign Secretary", note:"Top diplomat. Controls India's foreign policy execution, 200+ missions abroad, bilateral relationships with 195 countries.", projects:["India-US strategic partnership","India-EU FTA","Indo-Pacific strategy","BRICS coordination","G20 follow-up"]},
  {name:"S. Jaishankar (Minister)", cadre:"IFS", batch:1977, designation:"External Affairs Minister", ministry:"Ministry of External Affairs", budget:22154, budgetLabel:"Full MEA budget - India's voice to the world", level:"Minister", note:"Former Foreign Secretary turned Cabinet Minister. Most experienced diplomat leading MEA. Key architect of India's multi-alignment strategy.", projects:["Act East Policy","Neighborhood First","India-Middle East-Europe Corridor","QUAD diplomacy"]},
  {name:"Sanjay Verma", cadre:"IFS", batch:1988, designation:"Secretary (West)", ministry:"MEA - Europe, Americas, UN", budget:5000, budgetLabel:"Manages Western hemisphere diplomatic relations", level:"Secretary", note:"Handles relations with US, UK, EU, Canada, UN. Critical for India's Western strategic partnerships.", projects:["India-UK FTA","India-EU trade","UNSC reform campaign","Diaspora engagement"]},
  {name:"Jaideep Mazumdar", cadre:"IFS", batch:1991, designation:"Secretary (East)", ministry:"MEA - East Asia, ASEAN, Pacific", budget:4500, budgetLabel:"Manages Eastern diplomatic portfolio", level:"Secretary", note:"ASEAN relations, China, Japan, Korea, Australia. Indo-Pacific strategy execution.", projects:["ASEAN integration","Indo-Pacific","QUAD working groups","Act East 2.0"]},
  {name:"Ausaf Sayeed", cadre:"IFS", batch:1989, designation:"Secretary (CPV & OIA)", ministry:"MEA - Consular, Passport, Visa & Overseas Indian Affairs", budget:3000, budgetLabel:"Manages 3.2 Cr Indian diaspora services", level:"Secretary", note:"Oversees consular services for 3.2 Cr overseas Indians. Passport Seva, emergency evacuations, diaspora engagement.", projects:["Passport Seva 2.0","e-Migrate","Vande Bharat Mission","PBD events"]},

  // -- Key Ambassadors --
  {name:"Vinay Kwatra", cadre:"IFS", batch:1988, designation:"Ambassador to USA", ministry:"Embassy of India, Washington DC", budget:0, budgetLabel:"India's most important bilateral mission", level:"Ambassador", note:"Most prestigious diplomatic posting. India-US trade at $200 Bn. Defence, tech, and strategic partnership.", projects:["iCET initiative","Defence procurement","H1B/visa issues","Student mobility"]},
  {name:"Randhir Jaiswal", cadre:"IFS", batch:1998, designation:"Official Spokesperson, MEA", ministry:"Ministry of External Affairs", budget:0, budgetLabel:"India's diplomatic voice to global media", level:"Joint Secretary", note:"Face of India's foreign policy communication. Daily press briefings. Crisis communication.", projects:["Media diplomacy","Digital outreach","Crisis communication"]},
  {name:"Pradeep Kumar Rawat", cadre:"IFS", batch:1990, designation:"Ambassador to China", ministry:"Embassy of India, Beijing", budget:0, budgetLabel:"India's most complex bilateral relationship", level:"Ambassador", note:"Managing India's most complex relationship. Border dispute, trade imbalance ($100 Bn deficit), strategic competition.", projects:["LAC de-escalation","Trade rebalancing","Student return","Visa normalization"]},
  {name:"Akhilesh Mishra", cadre:"IFS", batch:1993, designation:"Ambassador to Japan", ministry:"Embassy of India, Tokyo", budget:0, budgetLabel:"Key strategic and economic partner ($20 Bn trade)", level:"Ambassador", note:"Japan - India's largest infrastructure lender. Bullet train, Delhi-Mumbai corridor, defence cooperation.", projects:["Mumbai-Ahmedabad Bullet Train","DMIC funding","2+2 dialogue","Industrial corridors"]},
  {name:"Sibi George", cadre:"IFS", batch:1993, designation:"Ambassador to Japan (former)", ministry:"Key diplomatic assignments", budget:0, budgetLabel:"Senior IFS officer with Gulf expertise", level:"Ambassador", note:"Former Ambassador to Kuwait, Japan. Gulf expertise critical for India's energy security and 8M+ diaspora in Middle East.", projects:["Gulf cooperation","Energy diplomacy","Worker welfare","Investment promotion"]}
],

// ====== IPS BUDGET OVERVIEW ======
ipsBudgets: [
  {force:"Central Reserve Police Force (CRPF)", budget:29782, personnel:"3,25,000", role:"Internal security, anti-Naxal, election duty"},
  {force:"Border Security Force (BSF)", budget:23479, personnel:"2,65,000", role:"India-Pak & India-Bangladesh border"},
  {force:"Central Industrial Security Force (CISF)", budget:12493, personnel:"1,80,000", role:"Airports, nuclear plants, metros, ports"},
  {force:"Indo-Tibetan Border Police (ITBP)", budget:7897, personnel:"90,000", role:"India-China border (LAC)"},
  {force:"Sashastra Seema Bal (SSB)", budget:6740, personnel:"95,000", role:"India-Nepal & India-Bhutan border"},
  {force:"National Security Guard (NSG)", budget:1842, personnel:"15,000", role:"Counter-terrorism, VIP protection"},
  {force:"National Investigation Agency (NIA)", budget:534, personnel:"1,200+", role:"Counter-terror investigation"},
  {force:"National Disaster Response Force (NDRF)", budget:2100, personnel:"16,000", role:"Natural & man-made disaster response"},
  {force:"Intelligence Bureau (IB)", budget:3500, personnel:"25,000+", role:"Internal intelligence (classified)"},
  {force:"Research & Analysis Wing (R&AW)", budget:4200, personnel:"Classified", role:"External intelligence (classified)"},
  {force:"Central Bureau of Investigation (CBI)", budget:936, personnel:"7,000+", role:"Federal investigation agency"}
],

// ====== IFS MISSIONS OVERVIEW ======
ifsMissions: {
  totalMissions: 200,
  totalCountries: 195,
  diaspora: "3.2 Cr",
  meaBudget: 22154,
  keyRegions: [
    {region:"Americas", missions:28, keyCountries:["USA","Canada","Brazil","Mexico"], trade:"$190 Bn", priority:"Strategic partnership, tech, defence"},
    {region:"Europe", missions:42, keyCountries:["UK","Germany","France","Italy"], trade:"$130 Bn", priority:"FTA negotiations, green energy, Airbus"},
    {region:"Gulf & Middle East", missions:18, keyCountries:["UAE","Saudi","Qatar","Kuwait"], trade:"$180 Bn", priority:"Energy security, 8M diaspora, remittances"},
    {region:"East Asia & Pacific", missions:25, keyCountries:["Japan","Australia","S. Korea","Singapore"], trade:"$200 Bn", priority:"QUAD, Indo-Pacific, bullet train, tech"},
    {region:"South Asia", missions:12, keyCountries:["Bangladesh","Sri Lanka","Nepal","Bhutan"], trade:"$40 Bn", priority:"Neighbourhood First, connectivity, security"},
    {region:"Africa", missions:38, keyCountries:["South Africa","Nigeria","Kenya","Ethiopia"], trade:"$98 Bn", priority:"Resource security, South-South cooperation"},
    {region:"Central Asia & CIS", missions:10, keyCountries:["Russia","Kazakhstan","Uzbekistan"], trade:"$15 Bn", priority:"Energy, defence, SCO, connectivity"}
  ]
}
};
