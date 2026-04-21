const PATTERN_DATA = {
  "avgTimeAtLevel": {
    "Junior Scale": {
      "avgYears": 1.71,
      "avgDays": 625,
      "count": 19064,
      "medianYears": 1.39
    },
    "Under Secretary": {
      "avgYears": 1.42,
      "avgDays": 518,
      "count": 28200,
      "medianYears": 1.17
    },
    "Deputy Secretary": {
      "avgYears": 1.41,
      "avgDays": 516,
      "count": 24905,
      "medianYears": 1.1
    },
    "Director": {
      "avgYears": 1.4,
      "avgDays": 511,
      "count": 17041,
      "medianYears": 1.08
    },
    "Joint Secretary": {
      "avgYears": 1.55,
      "avgDays": 565,
      "count": 29246,
      "medianYears": 1.16
    },
    "Additional Secretary": {
      "avgYears": 1.5,
      "avgDays": 548,
      "count": 12002,
      "medianYears": 1.17
    },
    "Secretary": {
      "avgYears": 1.37,
      "avgDays": 500,
      "count": 5638,
      "medianYears": 1.08
    }
  },
  "cadreToSecretary": {
    "Uttar Pradesh": 212,
    "Madhya Pradesh": 152,
    "Andhra Pradesh": 143,
    "Bihar": 134,
    "Tamil Nadu": 125,
    "Gujarat": 122,
    "Karnataka": 118,
    "West Bengal": 118,
    "Maharashtra": 111,
    "Rajasthan": 95,
    "Odisha": 93,
    "Punjab": 92,
    "Haryana": 89,
    "A G M U T": 86,
    "Assam Meghalya": 84,
    "Kerala": 78,
    "Himachal Pradesh": 64,
    "Jharkhand": 42,
    "Jammu & Kashmir": 35,
    "Manipur-Tripura": 27
  },
  "commonPaths": [
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Additional Secretary -> Secretary",
      "count": 1371
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary",
      "count": 1042
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Additional Secretary",
      "count": 908
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary",
      "count": 870
    },
    {
      "path": "Junior Scale -> Under Secretary",
      "count": 583
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director",
      "count": 532
    },
    {
      "path": "Under Secretary -> Deputy Secretary",
      "count": 494
    },
    {
      "path": "Under Secretary -> Deputy Secretary -> Director -> Joint Secretary",
      "count": 459
    },
    {
      "path": "Under Secretary -> Deputy Secretary -> Director",
      "count": 407
    },
    {
      "path": "Deputy Secretary -> Director",
      "count": 210
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Joint Secretary -> Additional Secretary -> Secretary",
      "count": 134
    },
    {
      "path": "Deputy Secretary -> Director -> Joint Secretary",
      "count": 128
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Additional Secretary -> Joint Secretary -> Additional Secretary -> Secretary",
      "count": 118
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Joint Secretary",
      "count": 86
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Joint Secretary -> Additional Secretary",
      "count": 62
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Secretary",
      "count": 62
    },
    {
      "path": "Junior Scale -> Deputy Secretary",
      "count": 57
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Additional Secretary -> Joint Secretary -> Additional Secretary",
      "count": 51
    },
    {
      "path": "Director -> Joint Secretary",
      "count": 49
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Director -> Joint Secretary",
      "count": 48
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Director -> Joint Secretary -> Additional Secretary -> Secretary",
      "count": 41
    },
    {
      "path": "Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Additional Secretary",
      "count": 38
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Director -> Joint Secretary -> Additional Secretary",
      "count": 36
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Additional Secretary -> Joint Secretary",
      "count": 34
    },
    {
      "path": "Junior Scale -> Deputy Secretary -> Director",
      "count": 34
    },
    {
      "path": "Under Secretary -> Deputy Secretary -> Joint Secretary",
      "count": 33
    },
    {
      "path": "Junior Scale -> Under Secretary -> Director -> Joint Secretary -> Additional Secretary -> Secretary",
      "count": 32
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Joint Secretary -> Additional Secretary -> Secretary -> Additional Secretary -> Secretary",
      "count": 32
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Deputy Secretary -> Director -> Joint Secretary -> Additional Secretary",
      "count": 29
    },
    {
      "path": "Junior Scale -> Under Secretary -> Deputy Secretary -> Director -> Deputy Secretary -> Director -> Joint Secretary -> Additional Secretary -> Secretary",
      "count": 28
    }
  ],
  "genderGap": {
    "Junior Scale": {
      "maleAvgYearsAtLevel": 1.76,
      "maleCount": 16867,
      "femaleAvgYearsAtLevel": 1.32,
      "femaleCount": 2197,
      "maleAvgYearsToReach": 0.01,
      "femaleAvgYearsToReach": 0.01
    },
    "Under Secretary": {
      "maleAvgYearsAtLevel": 1.43,
      "maleCount": 25218,
      "femaleAvgYearsAtLevel": 1.35,
      "femaleCount": 2982,
      "maleAvgYearsToReach": 3.43,
      "femaleAvgYearsToReach": 2.67
    },
    "Deputy Secretary": {
      "maleAvgYearsAtLevel": 1.41,
      "maleCount": 22527,
      "femaleAvgYearsAtLevel": 1.39,
      "femaleCount": 2378,
      "maleAvgYearsToReach": 7.22,
      "femaleAvgYearsToReach": 6.93
    },
    "Director": {
      "maleAvgYearsAtLevel": 1.39,
      "maleCount": 15381,
      "femaleAvgYearsAtLevel": 1.44,
      "femaleCount": 1660,
      "maleAvgYearsToReach": 11.22,
      "femaleAvgYearsToReach": 11.13
    },
    "Joint Secretary": {
      "maleAvgYearsAtLevel": 1.54,
      "maleCount": 26351,
      "femaleAvgYearsAtLevel": 1.56,
      "femaleCount": 2895,
      "maleAvgYearsToReach": 15.33,
      "femaleAvgYearsToReach": 15.51
    },
    "Additional Secretary": {
      "maleAvgYearsAtLevel": 1.5,
      "maleCount": 10639,
      "femaleAvgYearsAtLevel": 1.48,
      "femaleCount": 1363,
      "maleAvgYearsToReach": 25.09,
      "femaleAvgYearsToReach": 25.33
    },
    "Secretary": {
      "maleAvgYearsAtLevel": 1.38,
      "maleCount": 5000,
      "femaleAvgYearsAtLevel": 1.3,
      "femaleCount": 638,
      "maleAvgYearsToReach": 29.94,
      "femaleAvgYearsToReach": 30.25
    }
  }
};
