// Data Interpretation, DEST Typing Rules, and Paper-II Statistics for JSO

export const DEST_STATS_SYLLABUS = {
  di: {
    subjectId: 'di',
    subjectName: 'Data Interpretation & Analysis (DI)',
    totalTopics: 3,
    totalTypesCataloged: 10,
    topics: [
      {
        id: 'pie_chart_tables',
        name: 'Pie Charts (Degree to %) & Tabular DI',
        category: 'Data Interpretation',
        highYieldRating: 5,
        avgQuestionsPerPaper: '4 to 5 Questions',
        typesCount: 2,
        overview: 'Converting degrees (360° = 100%) and percentage differences without calculating large base values.',
        types: [
          {
            typeNumber: 1,
            title: 'Degree to Percentage Conversion (3.6° Rule)',
            identificationBlueprint: 'Pie chart with sections given in degrees (°). Question asks for ratio or percentage.',
            standardMethod: 'Calculating exact numerical values for each slice first.',
            proShortcut: 'Direct Rule: 360° = 100% => 1% = 3.6° (or 18° = 5%, 36° = 10%, 72° = 20%, 90° = 25%).\nPercentage = Angle / 3.6%. Never compute absolute population or rupees when ratios or % are asked!',
            workedExample: {
              question: 'In a total budget pie chart, education is represented by 108°. What % of the budget is education?',
              options: ['30%', '25%', '35%', '28%'],
              correctIndex: 0,
              targetTime: '8 seconds',
              shortcutApplication: '108 / 3.6 = 30%.',
              examinerTrap: 'Dividing 108 by 100.'
            }
          }
        ]
      }
    ]
  },

  dest: {
    subjectId: 'dest',
    subjectName: 'Data Entry Speed Test (DEST / Typing)',
    totalTopics: 2,
    totalTypesCataloged: 6,
    topics: [
      {
        id: 'dest_official_rules',
        name: 'DEST Benchmark Rules & Error Calculation',
        category: 'Skill Test',
        highYieldRating: 5,
        avgQuestionsPerPaper: 'Mandatory Qualifying for ALL CGL & CHSL posts',
        typesCount: 2,
        overview: 'Must type 2000 keystrokes in 15 mins (~27 WPM). Full mistakes vs Half mistakes auditing.',
        types: [
          {
            typeNumber: 1,
            title: 'Full Mistake vs Half Mistake Criteria',
            identificationBlueprint: 'Auditing typing errors against SSC standard evaluation guidelines.',
            standardMethod: 'Ignoring punctuation and capitalization errors.',
            proShortcut: 'The Evaluation Matrix:\n- Full Mistake (1 Error): Word omission, word substitution, extra word added.\n- Half Mistake (0.5 Error): Spacing error, punctuation error, capitalization error, singular/plural letter typo.\nPermissible Errors: UR max 5% error (100 errors / 2000 strokes); OBC/EWS max 7%; SC/ST max 10%.',
            workedExample: {
              question: 'In a 2000 stroke test, a candidate makes 40 full mistakes and 30 half mistakes. What is the total error %?',
              options: ['2.75% (Comfortably Qualified for UR)', '3.5%', '4.0%', '2.0%'],
              correctIndex: 0,
              targetTime: '15 seconds',
              shortcutApplication: 'Total Errors = 40 + (30 × 0.5) = 40 + 15 = 55 errors.\nError % = (55 / 2000) × 100 = 2.75% (well below the 5% UR limit!).',
              examinerTrap: 'Treating half mistakes as full mistakes (giving 70 errors = 3.5%).'
            }
          }
        ]
      }
    ]
  },

  statistics: {
    subjectId: 'statistics',
    subjectName: 'Statistics (Paper-II for JSO)',
    totalTopics: 4,
    totalTypesCataloged: 12,
    topics: [
      {
        id: 'central_tendency_dispersion',
        name: 'Measures of Central Tendency & Dispersion',
        category: 'Statistics Paper-II',
        highYieldRating: 5,
        avgQuestionsPerPaper: '100 Questions | 200 Marks (Separate Merit for JSO)',
        typesCount: 2,
        overview: 'Karl Pearson’s empirical relationship, standard deviation, and variance calculations.',
        types: [
          {
            typeNumber: 1,
            title: 'Empirical Relationship: Mode = 3 Median - 2 Mean',
            identificationBlueprint: 'Given any two of (Mean, Median, Mode) in a moderately skewed distribution.',
            standardMethod: 'Re-evaluating frequency charts.',
            proShortcut: 'Karl Pearson Formula: Mode = 3 × Median - 2 × Mean.\nRearrangements: Mode - Mean = 3 × (Median - Mean).',
            workedExample: {
              question: 'In a moderately skewed distribution, Mean = 30 and Median = 32. What is the Mode?',
              options: ['36', '34', '38', '32'],
              correctIndex: 0,
              targetTime: '8 seconds',
              shortcutApplication: 'Mode = 3(32) - 2(30) = 96 - 60 = 36.',
              examinerTrap: 'Swapping coefficients to 2 Median - 3 Mean.'
            }
          }
        ]
      }
    ]
  }
};
