// Comprehensive Catalog for ALL SSC and Banking Examinations
// Covering: SSC CGL, CHSL, CPO, MTS & Havaldar, GD Constable, Stenographer C&D, Selection Post, JE, and Banking (SBI, IBPS, RRB, RBI)

export const EXAM_CATEGORIES = [
  { id: 'ssc', name: 'SSC Central Exams', count: 8 },
  { id: 'banking', name: 'Banking & Regulatory', count: 4 }
];

export const EXAMS_CATALOG = [
  // ==========================================
  // SSC EXAMS (ALL MAJOR RECRUITMENTS)
  // ==========================================
  {
    id: 'ssc_cgl',
    category: 'ssc',
    name: 'SSC CGL (Combined Graduate Level)',
    shortName: 'SSC CGL',
    badge: 'Graduation Level',
    targetRoles: 'ASO (CSS/MEA/Railways), Income Tax Inspector, Central Excise & GST Inspector, ED, CBI, Auditor, JSO',
    eligibility: 'Bachelor’s Degree in any discipline | Age: 18–30/32 years',
    vendor: 'Eduquity Career Technologies (since July 2025)',
    sectionalTiming: true,
    salaryRange: '₹30,000 - ₹75,000+ per month',
    cutoff2025: { ur: 136.83, obc: 130.36, ews: 127.41, sc: 114.97, st: 106.36 },
    totalVacancies2026: 10731,
    tierStructure: [
      {
        tier: 'Tier 1 (Screening Objective CBT with Sectional Timing)',
        pattern: '100 Questions | 200 Marks | 60 Minutes (15 mins per section, no switching)',
        marking: '+2 for Correct | -0.50 for Wrong',
        sections: [
          { name: 'General Intelligence & Reasoning', q: 25, marks: 50, time: '15 mins' },
          { name: 'General Awareness', q: 25, marks: 50, time: '15 mins' },
          { name: 'Quantitative Aptitude', q: 25, marks: 50, time: '15 mins' },
          { name: 'English Comprehension', q: 25, marks: 50, time: '15 mins' }
        ]
      },
      {
        tier: 'Tier 2 (Mains - Decides Merit)',
        pattern: 'Session 1 (2h 15m) + Session 2 (15m DEST Typing)',
        marking: '+3 for Correct | -1.00 for Wrong (Section I & II)',
        sections: [
          { name: 'Sec I: Mathematical Abilities (30Q) + Reasoning (30Q)', q: 60, marks: 180, time: '60 mins' },
          { name: 'Sec II: English Language (45Q) + General Awareness (25Q)', q: 70, marks: 210, time: '60 mins' },
          { name: 'Sec III: Computer Knowledge Module (20Q)', q: 20, marks: 60, time: '15 mins (Qualifying)' },
          { name: 'Sec IV: Data Entry Speed Test (DEST)', q: '2000 strokes', marks: 'Qualifying', time: '15 mins (~27 WPM)' }
        ]
      }
    ],
    subjectIds: ['quant', 'reasoning', 'english', 'gk', 'computer', 'di', 'dest', 'statistics']
  },
  {
    id: 'ssc_chsl',
    category: 'ssc',
    name: 'SSC CHSL (Combined Higher Secondary 10+2)',
    shortName: 'SSC CHSL',
    badge: '10+2 Level',
    targetRoles: 'Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Data Entry Operator (DEO)',
    eligibility: '12th Standard or equivalent passed | Age: 18–27 years',
    tierStructure: [
      {
        tier: 'Tier 1 (Objective CBT)',
        pattern: '100 Questions | 200 Marks | 60 Minutes',
        marking: '+2 for Correct | -0.50 for Wrong',
        sections: [
          { name: 'Reasoning', q: 25, marks: 50 },
          { name: 'General Awareness', q: 25, marks: 50 },
          { name: 'Quantitative Aptitude', q: 25, marks: 50 },
          { name: 'English Language', q: 25, marks: 50 }
        ]
      },
      {
        tier: 'Tier 2 (Mains CBT + Typing Test)',
        pattern: 'Maths, Reasoning, English, GA, Computer (15Q qualifying) + Skill/Typing (35 WPM Eng / 30 WPM Hindi)',
        marking: '+3 for Correct | -1.00 for Wrong',
        sections: [
          { name: 'Maths (30) + Reasoning (30)', q: 60, marks: 180 },
          { name: 'English (40) + GA (20)', q: 60, marks: 180 },
          { name: 'Computer Knowledge', q: 15, marks: 45, time: '15 mins (Qualifying)' },
          { name: 'Typing Test / Skill Test', q: '35 WPM (Eng) / 30 WPM (Hin)', marks: 'Qualifying' }
        ]
      }
    ],
    subjectIds: ['quant', 'reasoning', 'english', 'gk', 'computer', 'dest']
  },
  {
    id: 'ssc_cpo',
    category: 'ssc',
    name: 'SSC CPO (Sub-Inspector in Delhi Police & CAPF)',
    shortName: 'SSC CPO (SI)',
    badge: 'Uniform Officer Post',
    targetRoles: 'Sub-Inspector in Delhi Police, BSF, CISF, CRPF, ITBP, SSB (2 Stars Uniform Post)',
    eligibility: 'Bachelor’s Degree in any discipline + Driving License (for DP) | Age: 20–25 years',
    tierStructure: [
      {
        tier: 'Paper 1 (CBT Written Exam)',
        pattern: '200 Questions | 200 Marks | 2 Hours (120 Minutes)',
        marking: '+1 for Correct | -0.25 for Wrong',
        sections: [
          { name: 'General Intelligence & Reasoning', q: 50, marks: 50 },
          { name: 'General Awareness', q: 50, marks: 50 },
          { name: 'Quantitative Aptitude', q: 50, marks: 50 },
          { name: 'English Comprehension', q: 50, marks: 50 }
        ]
      },
      {
        tier: 'Physical Standard & Endurance Test (PST/PET)',
        pattern: 'Qualifying Nature',
        marking: '1600m in 6.5 mins, 100m sprint, Long jump (3.65m), High jump (1.2m), Shot put',
        sections: [
          { name: 'PST: Height (170cm Male, 157cm Female) & Chest (80-85cm)', q: 'Physical', marks: 'Pass/Fail' },
          { name: 'PET: Running, Long Jump, High Jump', q: 'Physical', marks: 'Pass/Fail' }
        ]
      },
      {
        tier: 'Paper 2 (Mains - Pure English Language)',
        pattern: '200 Questions | 200 Marks | 2 Hours',
        marking: '+1 for Correct | -0.25 for Wrong',
        sections: [
          { name: 'English Language & Comprehension', q: 200, marks: 200 }
        ]
      }
    ],
    subjectIds: ['reasoning', 'gk', 'quant', 'english']
  },
  {
    id: 'ssc_mts',
    category: 'ssc',
    name: 'SSC MTS & Havaldar (Multi-Tasking Staff)',
    shortName: 'SSC MTS',
    badge: '10th (Matric) Pass',
    targetRoles: 'General Assistant, Peon, Daftary, Jamadar, Chowkidar, Havaldar in CBIC & CBN',
    eligibility: '10th Standard (Matriculation) passed | Age: 18–25 / 18–27 years',
    tierStructure: [
      {
        tier: 'Session 1 (Qualifying - NO Negative Marking!)',
        pattern: '40 Questions | 120 Marks | 45 Minutes',
        marking: '+3 for Correct | 0 for Wrong (NO Negative!)',
        sections: [
          { name: 'Numerical and Mathematical Ability', q: 20, marks: 60 },
          { name: 'Reasoning Ability and Problem Solving', q: 20, marks: 60 }
        ]
      },
      {
        tier: 'Session 2 (Merit Deciding - Negative Marking Applies)',
        pattern: '50 Questions | 150 Marks | 45 Minutes (Final Merit based ONLY on this!)',
        marking: '+3 for Correct | -1.00 for Wrong',
        sections: [
          { name: 'General Awareness', q: 25, marks: 75 },
          { name: 'English Language and Comprehension', q: 25, marks: 75 }
        ]
      },
      {
        tier: 'PET/PST (Only for Havaldar in CBIC/CBN)',
        pattern: 'Walking 1600m in 15 mins (Male), 1km in 20 mins (Female)',
        marking: 'Qualifying',
        sections: [{ name: 'Physical Walking & Height Check', q: 'Physical', marks: 'Pass/Fail' }]
      }
    ],
    subjectIds: ['quant', 'reasoning', 'gk', 'english']
  },
  {
    id: 'ssc_gd',
    category: 'ssc',
    name: 'SSC GD Constable (Paramilitary & CAPFs)',
    shortName: 'SSC GD',
    badge: '10th Pass Force Uniform',
    targetRoles: 'Constable (General Duty) in BSF, CISF, CRPF, ITBP, SSB, SSF, Rifleman in Assam Rifles',
    eligibility: '10th Standard passed | Age: 18–23 years',
    tierStructure: [
      {
        tier: 'Computer Based Examination (CBT)',
        pattern: '80 Questions | 160 Marks | 60 Minutes',
        marking: '+2 for Correct | -0.25 for Wrong (or -0.50 as per latest notice)',
        sections: [
          { name: 'Part A: General Intelligence and Reasoning', q: 20, marks: 40 },
          { name: 'Part B: General Knowledge and General Awareness', q: 20, marks: 40 },
          { name: 'Part C: Elementary Mathematics', q: 20, marks: 40 },
          { name: 'Part D: English OR Hindi (Candidate’s Choice)', q: 20, marks: 40 }
        ]
      },
      {
        tier: 'Physical Efficiency Test (PET)',
        pattern: 'Male: 5 km in 24 minutes | Female: 1.6 km in 8.5 minutes',
        marking: 'Qualifying',
        sections: [{ name: 'Running / Physical Endurance', q: 'Running', marks: 'Pass/Fail' }]
      }
    ],
    subjectIds: ['quant', 'reasoning', 'gk', 'english']
  },
  {
    id: 'ssc_steno',
    category: 'ssc',
    name: 'SSC Stenographer (Grade C & Grade D)',
    shortName: 'SSC Steno',
    badge: 'NO MATHS Exam!',
    targetRoles: 'Stenographer in Central Ministries, Armed Forces HQ, Election Commission, Courts',
    eligibility: '12th Standard passed + Shorthand/Typing knowledge | Age: 18–30 (Gr C), 18–27 (Gr D)',
    tierStructure: [
      {
        tier: 'Written CBT Exam (Zero Mathematics!)',
        pattern: '200 Questions | 200 Marks | 2 Hours (120 Minutes)',
        marking: '+1 for Correct | -0.25 for Wrong',
        sections: [
          { name: 'English Language & Comprehension (Huge 50% Weightage!)', q: 100, marks: 100 },
          { name: 'General Intelligence & Reasoning', q: 50, marks: 50 },
          { name: 'General Awareness', q: 50, marks: 50 }
        ]
      },
      {
        tier: 'Skill Test in Stenography (Shorthand Dictation & Transcription)',
        pattern: 'Dictation for 10 minutes (100 WPM for Grade C, 80 WPM for Grade D)',
        marking: 'Permissible errors: 5% to 7%',
        sections: [
          { name: 'Grade C: 100 WPM Shorthand Dictation', q: '10 mins', marks: 'Qualifying' },
          { name: 'Grade D: 80 WPM Shorthand Dictation', q: '10 mins', marks: 'Qualifying' }
        ]
      }
    ],
    subjectIds: ['english', 'reasoning', 'gk', 'dest']
  },
  {
    id: 'ssc_selection_post',
    category: 'ssc',
    name: 'SSC Selection Post (Phase XII / XIII)',
    shortName: 'SSC Selection Post',
    badge: 'Matric / Inter / Degree Levels',
    targetRoles: 'Technical Superintendent, Lab Assistant, Store Keeper, Library Attendant, Field Investigator',
    eligibility: 'Varies by Post: 10th Pass, 12th Pass, or Graduate Degree',
    tierStructure: [
      {
        tier: 'CBT Exam (Separate exams for Matric, Higher Sec, Graduation)',
        pattern: '100 Questions | 200 Marks | 60 Minutes',
        marking: '+2 for Correct | -0.50 for Wrong',
        sections: [
          { name: 'General Intelligence', q: 25, marks: 50 },
          { name: 'General Awareness', q: 25, marks: 50 },
          { name: 'Quantitative Aptitude', q: 25, marks: 50 },
          { name: 'English Language (Basic Knowledge)', q: 25, marks: 50 }
        ]
      },
      {
        tier: 'Skill Test / Scrutiny of Documents',
        pattern: 'Typing / Data Entry / Computer Proficiency where specified',
        marking: 'Qualifying',
        sections: [{ name: 'Document Verification & Skill Test', q: 'Scrutiny', marks: 'Pass/Fail' }]
      }
    ],
    subjectIds: ['quant', 'reasoning', 'english', 'gk', 'computer', 'dest']
  },
  {
    id: 'ssc_je',
    category: 'ssc',
    name: 'SSC JE (Junior Engineer - Civil, Electrical, Mechanical)',
    shortName: 'SSC JE',
    badge: 'Diploma / Degree in Engg',
    targetRoles: 'Junior Engineer in CPWD, MES, Border Roads Organization (BRO), Central Water Commission',
    eligibility: 'Degree or Diploma in Civil, Electrical, or Mechanical Engineering | Age: Up to 30/32 years',
    tierStructure: [
      {
        tier: 'Paper 1 (CBT Objective Non-Tech + Tech)',
        pattern: '200 Questions | 200 Marks | 2 Hours',
        marking: '+1 for Correct | -0.25 for Wrong',
        sections: [
          { name: 'General Intelligence and Reasoning', q: 50, marks: 50 },
          { name: 'General Awareness', q: 50, marks: 50 },
          { name: 'Engineering Core (Civil/Electrical/Mechanical)', q: 100, marks: 100 }
        ]
      },
      {
        tier: 'Paper 2 (CBT Core Engineering Technical Paper)',
        pattern: '100 Questions | 300 Marks | 2 Hours',
        marking: '+3 for Correct | -1.00 for Wrong',
        sections: [
          { name: 'General Engineering Technical Specialization', q: 100, marks: 300 }
        ]
      }
    ],
    subjectIds: ['reasoning', 'gk', 'quant']
  },

  // ==========================================
  // BANKING EXAMS
  // ==========================================
  {
    id: 'sbi_po_clerk',
    category: 'banking',
    name: 'SBI PO & SBI Clerk (Junior Associates)',
    shortName: 'SBI PO / Clerk',
    badge: 'Premier Bank Post',
    targetRoles: 'Probationary Officer (Scale-I), Junior Associate (Customer Support & Sales)',
    eligibility: 'Graduation in any discipline | Age: 21–30 (PO), 20–28 (Clerk)',
    tierStructure: [
      {
        tier: 'Prelims (Strict 20-Min Sectional Timer!)',
        pattern: '100 Questions | 100 Marks | 60 Minutes',
        marking: '+1 for Correct | -0.25 for Wrong',
        sections: [
          { name: 'English Language', q: 30, marks: 30, time: '20 mins' },
          { name: 'Quantitative Aptitude', q: 35, marks: 35, time: '20 mins' },
          { name: 'Reasoning Ability', q: 35, marks: 35, time: '20 mins' }
        ]
      },
      {
        tier: 'Mains (High-Level Puzzles, Caselet DI & General/Banking GA)',
        pattern: '155 Questions | 200 Marks + 50 Marks Descriptive (PO)',
        marking: 'Negative marking 0.25 of marks assigned',
        sections: [
          { name: 'Reasoning & Computer Aptitude', q: 40, marks: 50 },
          { name: 'Data Analysis & Interpretation', q: 30, marks: 50 },
          { name: 'General/Economy/Banking Awareness', q: 50, marks: 60 },
          { name: 'English Language', q: 35, marks: 40 }
        ]
      }
    ],
    subjectIds: ['banking_quant', 'banking_reasoning', 'banking_english', 'banking_awareness', 'di', 'computer']
  },
  {
    id: 'ibps_po_clerk',
    category: 'banking',
    name: 'IBPS PO & IBPS Clerk (Public Sector Banks)',
    shortName: 'IBPS PO / Clerk',
    badge: '11 Public Sector Banks',
    targetRoles: 'PO & Clerk in PNB, Bank of Baroda, Canara Bank, Union Bank, etc.',
    eligibility: 'Graduation in any stream | Age: 20–30 (PO), 20–28 (Clerk)',
    tierStructure: [
      {
        tier: 'Prelims Exam (Sectional Cutoffs Apply!)',
        pattern: '100 Questions | 100 Marks | 60 Minutes (20 mins per section)',
        marking: '+1 for Correct | -0.25 for Wrong',
        sections: [
          { name: 'English Language', q: 30, marks: 30, time: '20 mins' },
          { name: 'Quantitative Aptitude', q: 35, marks: 35, time: '20 mins' },
          { name: 'Reasoning Ability', q: 35, marks: 35, time: '20 mins' }
        ]
      },
      {
        tier: 'Mains Exam',
        pattern: 'Objective (200 Marks) + Descriptive (25 Marks)',
        marking: '+1 or +2 with 0.25 penalty',
        sections: [
          { name: 'Reasoning & Computer Aptitude', q: 45, marks: 60 },
          { name: 'General/Economy/Banking Awareness', q: 40, marks: 40 },
          { name: 'English Language', q: 35, marks: 40 },
          { name: 'Data Analysis & Interpretation', q: 35, marks: 60 }
        ]
      }
    ],
    subjectIds: ['banking_quant', 'banking_reasoning', 'banking_english', 'banking_awareness', 'di', 'computer']
  },
  {
    id: 'rrb_po_clerk',
    category: 'banking',
    name: 'IBPS RRB Officer Scale-I & Office Assistant (Gramin Bank)',
    shortName: 'IBPS RRB (Gramin Banks)',
    badge: 'NO English in Prelims!',
    targetRoles: 'Officer Scale-I (Assistant Manager) & Office Assistant (Multipurpose) in 43 Regional Rural Banks',
    eligibility: 'Degree in any discipline + Local State Language proficiency | Age: 18–30 (PO), 18–28 (Clerk)',
    tierStructure: [
      {
        tier: 'Prelims (Only Reasoning + Maths - Composite 45 Mins)',
        pattern: '80 Questions | 80 Marks | 45 Minutes (NO Sectional Timer!)',
        marking: '+1 for Correct | -0.25 for Wrong',
        sections: [
          { name: 'Reasoning Ability', q: 40, marks: 40 },
          { name: 'Quantitative Aptitude / Numerical Ability', q: 40, marks: 40 }
        ]
      },
      {
        tier: 'Mains (Choice between English OR Hindi!)',
        pattern: '200 Questions | 200 Marks | 2 Hours',
        marking: '+1 to +1.25 per question with 0.25 penalty',
        sections: [
          { name: 'Reasoning', q: 40, marks: 50 },
          { name: 'Computer Knowledge', q: 40, marks: 20 },
          { name: 'General Awareness', q: 40, marks: 40 },
          { name: 'English OR Hindi Language (Optional)', q: 40, marks: 40 },
          { name: 'Quantitative Aptitude', q: 40, marks: 50 }
        ]
      }
    ],
    subjectIds: ['banking_quant', 'banking_reasoning', 'banking_awareness', 'computer', 'banking_english']
  },
  {
    id: 'rbi_grade_b',
    category: 'banking',
    name: 'RBI Grade B & RBI Assistant (Reserve Bank of India)',
    shortName: 'RBI Grade B / Asst',
    badge: 'Apex Central Bank',
    targetRoles: 'Grade ‘B’ (General) Direct Officer, RBI Assistant in regional RBI offices',
    eligibility: 'Minimum 60% in Graduation (50% for SC/ST) | Age: 21–30 years',
    tierStructure: [
      {
        tier: 'Phase 1 (Prelims Objective)',
        pattern: '200 Questions | 200 Marks | 120 Minutes',
        marking: '+1 for Correct | -0.25 for Wrong',
        sections: [
          { name: 'General Awareness (Crucial 80 Questions!)', q: 80, marks: 80, time: '25 mins' },
          { name: 'Reasoning Ability', q: 60, marks: 60, time: '45 mins' },
          { name: 'English Language', q: 30, marks: 30, time: '25 mins' },
          { name: 'Quantitative Aptitude', q: 30, marks: 30, time: '25 mins' }
        ]
      },
      {
        tier: 'Phase 2 (Mains - Economic & Social Issues + Finance & Management)',
        pattern: 'Paper 1 (ESI), Paper 2 (English Writing), Paper 3 (Finance & Management)',
        marking: '300 Total Marks (Objective + Descriptive typing)',
        sections: [
          { name: 'Paper I: Economic and Social Issues (ESI)', q: '50% Obj + 50% Desc', marks: 100 },
          { name: 'Paper II: English (Writing Skills)', q: '3 Questions Essay/Précis', marks: 100 },
          { name: 'Paper III: Finance and Management (FM)', q: '50% Obj + 50% Desc', marks: 100 }
        ]
      }
    ],
    subjectIds: ['banking_awareness', 'banking_reasoning', 'banking_quant', 'banking_english', 'di']
  }
];

export const SUBJECT_METADATA = {
  quant: {
    id: 'quant',
    name: 'Quantitative Aptitude (Maths)',
    icon: 'Calculator',
    color: 'from-amber-500 to-orange-600',
    description: 'Arithmetic & Advanced Maths. Target: 25/25 in Tier-1, 85+/90 in Tier-2.',
    weightage: 'Tier-1: 50 Marks | Tier-2: 90 Marks',
    speedBenchmark: '35-45 seconds per question'
  },
  reasoning: {
    id: 'reasoning',
    name: 'General Intelligence & Reasoning',
    icon: 'Brain',
    color: 'from-purple-500 to-indigo-600',
    description: 'Verbal, Non-Verbal & Analytical Reasoning. The highest scoring subject.',
    weightage: 'Tier-1: 50 Marks | Tier-2: 90 Marks',
    speedBenchmark: '25-35 seconds per question'
  },
  english: {
    id: 'english',
    name: 'English Language & Comprehension',
    icon: 'BookOpen',
    color: 'from-blue-500 to-cyan-600',
    description: '120 Rules of Grammar, High-frequency Vocab, Cloze Test & Reading passages.',
    weightage: 'Tier-1: 50 Marks | Tier-2: 135 Marks (Biggest single weightage in Mains!)',
    speedBenchmark: '15-25 seconds per question'
  },
  gk: {
    id: 'gk',
    name: 'General Awareness & Static GK',
    icon: 'Globe',
    color: 'from-emerald-500 to-teal-600',
    description: 'Polity, History, Geography, Economy, General Science & High-Yield Static GK.',
    weightage: 'Tier-1: 50 Marks | Tier-2: 75 Marks',
    speedBenchmark: '10-15 seconds per question'
  },
  computer: {
    id: 'computer',
    name: 'Computer Knowledge Module (CKM)',
    icon: 'Cpu',
    color: 'from-rose-500 to-pink-600',
    description: 'Hardware, Windows, MS Excel/Word shortcuts, Networking, Cyber Security. Mandatory Qualifying.',
    weightage: 'Tier-2: 60 Marks (20Q - Minimum 18/27 marks to qualify)',
    speedBenchmark: '20 seconds per question'
  },
  di: {
    id: 'di',
    name: 'Data Interpretation & Analysis (DI)',
    icon: 'BarChart3',
    color: 'from-violet-500 to-purple-600',
    description: 'Bar, Line, Pie, Radar charts, Tables, Mixed DI & Caselets.',
    weightage: 'Common across SSC & Banking Mains',
    speedBenchmark: '1.5 - 2 mins per set of 4-5 questions'
  },
  dest: {
    id: 'dest',
    name: 'Data Entry Speed Test (DEST / Typing)',
    icon: 'Keyboard',
    color: 'from-yellow-500 to-amber-600',
    description: '2000 keystrokes in 15 mins (~27 WPM). Mandatory qualifying module for all SSC CGL posts.',
    weightage: 'Qualifying (Errors permitted: UR <= 5%, OBC/EWS <= 7%, SC/ST <= 10%)',
    speedBenchmark: 'Minimum 27-30 WPM with 95%+ accuracy'
  },
  statistics: {
    id: 'statistics',
    name: 'Statistics (Paper-II for JSO)',
    icon: 'Activity',
    color: 'from-sky-500 to-blue-600',
    description: 'Measures of Central Tendency, Dispersion, Moments, Skewness, Sampling, Probability for JSO post.',
    weightage: 'Paper-II: 100 Questions | 200 Marks (Separate Merit for JSO)',
    speedBenchmark: '45-60 seconds per question'
  },
  banking_quant: {
    id: 'banking_quant',
    name: 'Banking Quantitative Aptitude',
    icon: 'Calculator',
    color: 'from-orange-500 to-red-600',
    description: 'Speed Approximation, Vedic Math, Sign Rule Quadratic Equations, Number Series, Caselets.',
    weightage: 'Prelims: 35 Marks (20 mins) | Mains: 60 Marks',
    speedBenchmark: 'Speed hacks: 20-30 seconds'
  },
  banking_reasoning: {
    id: 'banking_reasoning',
    name: 'Banking Reasoning & Puzzles',
    icon: 'Brain',
    color: 'from-indigo-500 to-blue-700',
    description: 'Floor-Flat Puzzles, Box Puzzles, Circular Seating with variables, Machine Input-Output, Coded Inequality.',
    weightage: 'Prelims: 35 Marks (20 mins) | Mains: 60 Marks',
    speedBenchmark: 'Puzzles: 2.5 - 3.5 mins per set'
  },
  banking_english: {
    id: 'banking_english',
    name: 'Banking English Language',
    icon: 'BookOpen',
    color: 'from-teal-500 to-emerald-700',
    description: 'Word Swap, Column Matching, Double Fillers, Para Jumbles, Editorial RC.',
    weightage: 'Prelims: 30 Marks | Mains: 40 Marks + 25 Marks Descriptive',
    speedBenchmark: '20 seconds per question'
  },
  banking_awareness: {
    id: 'banking_awareness',
    name: 'Banking, Economy & Financial Awareness',
    icon: 'Coins',
    color: 'from-amber-600 to-yellow-600',
    description: 'RBI Monetary Policy, CRR, SLR, Repo, PSL, Basel-III, Money Market, KYC, Current Financial Affairs.',
    weightage: 'Mains: 40-50 Marks (Game changer for final cutoff)',
    speedBenchmark: '10 seconds per question'
  },
  cpo_pet: {
    id: 'cpo_pet',
    name: 'CPO Physical Endurance (PET/PST)',
    icon: 'Flame',
    color: 'from-red-500 to-rose-700',
    description: 'Heights, Chest norms, 1600m Race (6.5 min), 100m sprint, Long Jump (3.65m), High Jump (1.2m), Shot Put.',
    weightage: 'Mandatory Qualifying for Delhi Police & CAPF SI',
    speedBenchmark: 'Physical conditioning standards'
  }
};
