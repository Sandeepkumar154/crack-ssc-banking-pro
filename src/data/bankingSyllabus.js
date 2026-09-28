// Comprehensive Banking Exams (SBI PO/Clerk, IBPS PO/Clerk, RRB, RBI) Syllabus
// Covering Speed Quant, High-Level Puzzles, Coded Inequalities, Caselet DI, and Financial Awareness

export const BANKING_SYLLABUS = {
  banking_quant: {
    subjectId: 'banking_quant',
    subjectName: 'Banking Quantitative Aptitude',
    totalTopics: 5,
    totalTypesCataloged: 20,
    topics: [
      {
        id: 'quadratic_equations_speed',
        name: 'Quadratic Equations (The Sign Trick - 5Q in 90s)',
        category: 'Speed Math',
        highYieldRating: 5,
        avgQuestionsPerPaper: '5 Questions in Prelims',
        typesCount: 2,
        overview: 'In SBI/IBPS PO & Clerk, 5 questions on quadratic comparison appear in every shift. The Sign Method solves them in 15 seconds each without factorization!',
        types: [
          {
            typeNumber: 1,
            title: 'The Invariant Sign Rule (Root Signs Trick)',
            identificationBlueprint: 'Equations: ax² + bx + c = 0 and dy² + ey + f = 0.',
            standardMethod: 'Using the quadratic formula x = (-b ± √(b² - 4ac)) / 2a.',
            proShortcut: 'Sign Table Blueprint:\n1. If equation is (+, +) -> Roots are (-, -)\n2. If equation is (-, +) -> Roots are (+, +)\n3. If equation is (+, -) -> Roots are (-, +) [Larger root is negative]\n4. If equation is (-, -) -> Roots are (+, -) [Larger root is positive]\nSUPER SHORTCUT: If the constant term (c and f) is NEGATIVE in BOTH equations, the answer is ALWAYS "Relationship cannot be established (CND)" without solving a single number!',
            workedExample: {
              question: 'Equation I: x² + 5x - 24 = 0\nEquation II: y² - 7y - 18 = 0\nCompare x and y.',
              options: ['Relationship cannot be established (CND)', 'x > y', 'x < y', 'x ≥ y'],
              correctIndex: 0,
              targetTime: '3 seconds',
              shortcutApplication: 'Both constant signs are negative (-24 and -18). Both equations have 1 positive and 1 negative root => Mutual overlap!\nInstant Answer: Relationship cannot be established (CND). Zero calculation!',
              examinerTrap: 'Factoring (x+8)(x-3)=0 and wasting 60 seconds.'
            },
            practiceQuestions: [
              {
                q: 'Equation I: x² - 11x + 30 = 0\nEquation II: y² - 15y + 56 = 0\nCompare x and y.',
                options: ['x > y', 'x < y', 'x ≥ y', 'x ≤ y'],
                correctIndex: 1,
                hint: 'Roots of I: (+5, +6). Roots of II: (+7, +8). Since both 7 and 8 are strictly greater than 5 and 6, x < y.'
              },
              {
                q: 'Equation I: 2x² - 9x + 10 = 0\nEquation II: 2y² - 13y + 21 = 0\nCompare x and y.',
                options: ['x > y', 'x < y', 'x ≥ y', 'x ≤ y'],
                correctIndex: 3,
                hint: 'Eq I roots: 2x²-4x-5x+10=0 => x = 2, 2.5. Eq II roots: 2y²-6y-7y+21=0 => y = 3, 3.5. Both roots of y are > x. Hence x < y (or x ≤ y).'
              }
            ]
          }
        ]
      },

      {
        id: 'caselet_and_data_interpretation',
        name: 'Caselet DI & Missing Table Interpretation',
        category: 'Data Interpretation',
        highYieldRating: 5,
        avgQuestionsPerPaper: '10 to 15 Marks in Prelims & Mains',
        typesCount: 2,
        overview: 'Caselet DI (paragraph data) and Missing Value Tables dominate modern banking exams. Venn diagrams and cross-tabular structuring unlock all questions in one go.',
        types: [
          {
            typeNumber: 1,
            title: '3-Set Venn Diagram Caselet Formulation',
            identificationBlueprint: 'Paragraph describing overlapping preferences (e.g. 500 college students reading Hindu, Times of India, and Express).',
            standardMethod: 'Writing multiple algebraic equations with variables a, b, c, d, e, f, g.',
            proShortcut: 'In-to-Out Filling Method:\nAlways start by filling the central intersection (All 3 items) first! Then fill exactly 2 items by subtracting the central intersection. Finally, fill "Only" portions. All 5 questions can be answered in under 2 minutes.',
            workedExample: {
              question: 'In an office of 120 employees, 70 drink Tea, 60 drink Coffee, and 30 drink both. How many drink neither Tea nor Coffee?',
              options: ['20', '30', '10', '15'],
              correctIndex: 0,
              targetTime: '15 seconds',
              shortcutApplication: 'Union = T + C - Both = 70 + 60 - 30 = 100.\nNeither = Total - Union = 120 - 100 = 20.',
              examinerTrap: 'Adding 70 + 60 = 130 and getting confused when total is 120.'
            },
            practiceQuestions: [
              {
                q: 'In a survey of 200 people, 110 like Apple products, 90 like Samsung, and 40 like both. How many like ONLY Apple?',
                options: ['70', '60', '50', '80'],
                correctIndex: 0,
                hint: 'Only Apple = Total Apple - Both = 110 - 40 = 70.'
              }
            ]
          }
        ]
      },

      {
        id: 'speed_approximation_vedic',
        name: 'Approximation & Vedic Math Speed Hacks',
        category: 'Speed Math',
        highYieldRating: 5,
        avgQuestionsPerPaper: '5 to 10 Questions in Clerk & PO Prelims',
        typesCount: 2,
        overview: 'Rounding rules and Vedic multiplication eliminate decimal clutter.',
        types: [
          {
            typeNumber: 1,
            title: 'Base-100 Multiplication & Unit Digit Balancing',
            identificationBlueprint: 'Multiplying numbers close to 100 e.g. 96 × 98 or 104 × 107.',
            standardMethod: 'Three-line vertical multiplication.',
            proShortcut: 'Vedic Base-100 Method:\n- Numbers below 100: 96 (-4) × 98 (-2). Left part = 96 - 2 = 94. Right part = (-4) × (-2) = 08. Result = 9408!\n- Numbers above 100: 104 (+4) × 107 (+7). Left = 104 + 7 = 111. Right = 4 × 7 = 28. Result = 11128!',
            workedExample: {
              question: 'Calculate 94 × 97 in under 5 seconds.',
              options: ['9118', '9128', '9018', '9218'],
              correctIndex: 0,
              targetTime: '5 seconds',
              shortcutApplication: '94 is (-6), 97 is (-3).\nLeft: 94 - 3 = 91.\nRight: (-6) × (-3) = 18.\nResult = 9118.',
              examinerTrap: 'Arithmetic borrow errors.'
            }
          }
        ]
      },

      {
        id: 'number_series_banking',
        name: 'Missing & Wrong Number Series Patterns',
        category: 'Speed Math',
        highYieldRating: 5,
        avgQuestionsPerPaper: '5 Questions',
        typesCount: 2,
        overview: 'Steep climb (multiplication) vs Slow slope (difference) rules.',
        types: [
          {
            typeNumber: 1,
            title: 'Slope Rule (Difference vs Product Identifier)',
            identificationBlueprint: 'Series: 6, 13, 28, 59, 122, ?.',
            standardMethod: 'Random trial-and-error.',
            proShortcut: 'Slope Rule:\n- Steady slope (< 3x across 5 terms): Take difference.\n- Steep slope (> 5x): Multiply from 2nd last term backward (e.g. 59 to 122 is approx × 2 + 4).',
            workedExample: {
              question: 'Find the missing number in the series: 6, 13, 28, 59, 122, ?',
              options: ['249', '248', '251', '245'],
              correctIndex: 0,
              targetTime: '15 seconds',
              shortcutApplication: '6×2 + 1 = 13; 13×2 + 2 = 28; 28×2 + 3 = 59; 59×2 + 4 = 122;\nNext = 122×2 + 5 = 244 + 5 = 249.',
              examinerTrap: 'Forgetting to increment the added number (+1, +2, +3, +4, +5).'
            }
          }
        ]
      },

      {
        id: 'commercial_arithmetic_banking',
        name: 'High-Yield Commercial Arithmetic (Partnership & Alligation)',
        category: 'Arithmetic',
        highYieldRating: 5,
        avgQuestionsPerPaper: '8 to 10 Questions in Mains',
        typesCount: 2,
        overview: 'Partnership profit sharing based on investment × time period, and Alligation mixtures.',
        types: [
          {
            typeNumber: 1,
            title: 'Partnership with Active Managing Partner',
            identificationBlueprint: 'A and B invest capital for different months, and A receives an additional % as manager.',
            standardMethod: 'Setting up multi-variable equations with total profit X.',
            proShortcut: 'Ratio of Profit = (Capital_A × Time_A) : (Capital_B × Time_B). First deduct the managing fee from the total profit, then distribute the remaining profit in this capital-time ratio!',
            workedExample: {
              question: 'A invests ₹40,000 for 12 months and B invests ₹60,000 for 8 months. If total profit is ₹24,000, what is A\'s share?',
              options: ['₹12,000', '₹14,000', '₹10,000', '₹16,000'],
              correctIndex: 0,
              targetTime: '15 seconds',
              shortcutApplication: 'Ratio = (40 × 12) : (60 × 8) = 480 : 480 = 1 : 1. Both get equal shares! A\'s share = 24000 / 2 = ₹12,000.',
              examinerTrap: 'Calculating monthly products manually when 40×12 = 60×8 = 480 instantly simplifies to 1:1.'
            }
          }
        ]
      }
    ]
  },

  banking_reasoning: {
    subjectId: 'banking_reasoning',
    subjectName: 'Banking Reasoning & Puzzles',
    totalTopics: 4,
    totalTypesCataloged: 16,
    topics: [
      {
        id: 'floor_flat_puzzles',
        name: 'Floor & Flat Puzzles (Prelims & Mains)',
        category: 'Puzzles',
        highYieldRating: 5,
        avgQuestionsPerPaper: '15 to 20 Marks in every paper',
        typesCount: 2,
        overview: 'Puzzles carry 60% of marks in Banking reasoning. Multi-case parallel elimination is essential.',
        types: [
          {
            typeNumber: 1,
            title: 'Parallel Possibility Matrix (Max 2 Cases)',
            identificationBlueprint: 'Building with 4 floors and 2 flats (Flat A, Flat B) or 8 persons on numbered floors.',
            standardMethod: 'Trying 1 case, erasing everything on contradiction.',
            proShortcut: 'Parallel Multi-Case Blueprint:\nAlways draw Case 1 and Case 2 side-by-side immediately based on the primary conditional constraint (e.g., "P lives on an even numbered floor" -> Case 1: Floor 2, Case 2: Floor 4). Fill clues simultaneously. One case will eliminate automatically within 3 lines!',
            workedExample: {
              question: 'In a 4-floor building with Flats P and Q on each floor, 8 persons live. If A lives on an even-numbered floor immediately west of B, where does A live?',
              options: ['Flat P on Floor 2 or 4', 'Flat Q on Floor 2 or 4', 'Floor 3', 'Floor 1'],
              correctIndex: 0,
              targetTime: '15 seconds',
              shortcutApplication: 'Flat P is west of Flat Q. Since A is west of B, A must be in Flat P. Floor is even, hence Floor 2 or 4.',
              examinerTrap: 'Confusing "immediately above" with "immediately above in the same flat".'
            }
          }
        ]
      },

      {
        id: 'coded_inequalities',
        name: 'Coded & Direct Inequalities (King, Queen, Soldier Rule)',
        category: 'Logical Reasoning',
        highYieldRating: 5,
        avgQuestionsPerPaper: '5 Questions (5 Marks in 60s!)',
        typesCount: 1,
        overview: 'Solve 5 inequality questions in under 1 minute without using rough sheet.',
        types: [
          {
            typeNumber: 1,
            title: 'The Hierarchy Rule: King (>) > Queen (≥) > Soldier (=)',
            identificationBlueprint: 'Statements: A > B ≥ C = D > E. Conclusion: A > D or B ≥ E.',
            standardMethod: 'Writing individual equations.',
            proShortcut: 'The Hierarchy & Open Gate Rule:\n1. Open Gate: Moving from A to B requires open mouth (A > B). If gate is closed (A < B), travel STOPS!\n2. Priority Order:\n   - King (> or <): If King is present on the path at least once, King MUST appear in the conclusion!\n   - Queen (≥ or ≤): Queen can only be true if Queen or Soldier is on ALL steps of the path (no King allowed!).\n   - Soldier (=): Only true if all steps are strictly =.',
            workedExample: {
              question: 'Statements: P > Q ≥ R = S > T\nConclusions:\nI. P > S\nII. Q ≥ T',
              options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
              correctIndex: 0,
              targetTime: '10 seconds',
              shortcutApplication: '1. P to S: P > Q ≥ R = S. Path is open. King (>) is present between P and Q. Hence King "P > S" is TRUE!\n2. Q to T: Q ≥ R = S > T. King (>) is present between S and T. Queen (≥) CANNOT follow when King is present! Hence II is FALSE.\nResult: Only I follows.',
              examinerTrap: 'Marking Both follow by assuming ≥ can cover a > gate.'
            }
          }
        ]
      },

      {
        id: 'syllogism_only_a_few',
        name: 'Syllogism ("Only a Few" & "Can Never Be" Modern Trap)',
        category: 'Logical Reasoning',
        highYieldRating: 5,
        avgQuestionsPerPaper: '5 Questions in Prelims',
        typesCount: 1,
        overview: 'Modern SBI & IBPS syllogisms heavily feature "Only a few A are B". This statement ALWAYS means two things: Some A are B AND Some A are NOT B!',
        types: [
          {
            typeNumber: 1,
            title: 'Deconstruction of "Only a few"',
            identificationBlueprint: 'Statements: Only a few Laptops are Mobiles. All Mobiles are Tablets.',
            standardMethod: 'Treating "Only a few" as simple "Some".',
            proShortcut: '"Only a few A are B" = 1) Some A are B (+) AND 2) Some A are NOT B (-).\nCrucial rule: "All A can be B" is ALWAYS FALSE! However, "All B can be A" IS POSSIBLE!',
            workedExample: {
              question: 'Statements: Only a few Pens are Pencils. All Pencils are Erasers.\nConclusion I: All Pens can be Pencils.\nConclusion II: All Pencils can be Pens.',
              options: ['Only II follows', 'Only I follows', 'Both follow', 'Neither follows'],
              correctIndex: 0,
              targetTime: '10 seconds',
              shortcutApplication: '"Only a few Pens are Pencils" forbids All Pens from entering Pencils. Hence I is impossible. But Pencils can easily enter Pens. Hence only II follows.',
              examinerTrap: 'Assuming that because only a few Pens are Pencils, Pencils cannot be Pens.'
            }
          }
        ]
      }
    ]
  },

  banking_english: {
    subjectId: 'banking_english',
    subjectName: 'Banking English Language',
    totalTopics: 3,
    totalTypesCataloged: 10,
    topics: [
      {
        id: 'word_swap_column_match',
        name: 'Word Swap & Match the Column (Modern Banking Pattern)',
        category: 'Grammar & Vocab',
        highYieldRating: 5,
        avgQuestionsPerPaper: '5 Questions',
        typesCount: 1,
        overview: 'Grammatical collocation and part-of-speech matching.',
        types: [
          {
            typeNumber: 1,
            title: 'Part of Speech Contextual Locking',
            identificationBlueprint: 'Sentence with 4 highlighted words (A, B, C, D) to be swapped.',
            standardMethod: 'Trying all permutations (A-B, B-C, C-D).',
            proShortcut: 'Lock by Part of Speech: Check what part of speech is grammatically demanded by the surrounding words (e.g. an adjective before noun, or past participle after "has been"). Swap ONLY the words that fulfill the missing grammatical role!',
            workedExample: {
              question: 'Swap words: "The policy was carefully (A) designed to increase (B) inflation and foster (C) economic growth (D)."',
              options: ['No swap required', 'A-B', 'B-C', 'C-D'],
              correctIndex: 0,
              targetTime: '10 seconds',
              shortcutApplication: 'carefully (adverb) modifies designed (verb). increase (verb) inflation (noun). foster (verb) economic growth (noun). All parts of speech fit perfectly => No swap required.',
              examinerTrap: 'Swapping words arbitrarily when sentence is already correct.'
            }
          }
        ]
      }
    ]
  },

  banking_awareness: {
    subjectId: 'banking_awareness',
    subjectName: 'Banking, Economy & Financial Awareness',
    totalTopics: 4,
    totalTypesCataloged: 15,
    topics: [
      {
        id: 'rbi_monetary_policy',
        name: 'RBI Monetary Policy & Quantitative Tools',
        category: 'Financial Awareness',
        highYieldRating: 5,
        avgQuestionsPerPaper: '8 to 10 Questions in Mains',
        typesCount: 2,
        overview: 'Repo Rate, SDF, MSF, CRR, SLR, and Priority Sector Lending (PSL).',
        types: [
          {
            typeNumber: 1,
            title: 'SDF vs Reverse Repo Rate & CRR Interest Rule',
            identificationBlueprint: 'Questions on RBI tools absorbing liquidity without collateral or CRR interest.',
            standardMethod: 'Confusing SDF with Reverse Repo.',
            proShortcut: 'The Big 3 Banking Facts:\n1. SDF (Standing Deposit Facility): Absorbs liquidity from banks WITHOUT government securities collateral!\n2. Reverse Repo Rate: Liquidity absorption WITH collateral.\n3. CRR (Cash Reserve Ratio): Commercial banks earn 0% interest from RBI on CRR balances (Section 42 of RBI Act)!',
            workedExample: {
              question: 'Which instrument introduced by RBI absorbs liquidity from commercial banks WITHOUT the need for collateralized government securities?',
              options: ['Standing Deposit Facility (SDF)', 'Reverse Repo Rate', 'MSF', 'Bank Rate'],
              correctIndex: 0,
              targetTime: '5 seconds',
              shortcutApplication: 'SDF requires zero collateralized securities.',
              examinerTrap: 'Choosing Reverse Repo Rate.'
            }
          },
          {
            typeNumber: 2,
            title: 'Priority Sector Lending (PSL) Mandates',
            identificationBlueprint: 'Target percentage for Domestic Scheduled Commercial Banks or Agriculture sub-targets.',
            standardMethod: 'Mixing foreign bank targets with domestic banks.',
            proShortcut: 'PSL Quota Blueprint for Domestic Commercial Banks:\n- Total PSL Target: 40% of ANBC (Adjusted Net Bank Credit)\n- Agriculture Target: 18% of ANBC (within which Small & Marginal Farmers = 10%)\n- Micro Enterprises Target: 7.5% of ANBC\n- Weaker Sections Target: 12% of ANBC.\n(For Regional Rural Banks and Small Finance Banks, total PSL target is 75%!).',
            workedExample: {
              question: 'What is the mandatory overall Priority Sector Lending (PSL) target for Domestic Scheduled Commercial Banks in India?',
              options: ['40% of ANBC', '75% of ANBC', '50% of ANBC', '30% of ANBC'],
              correctIndex: 0,
              targetTime: '5 seconds',
              shortcutApplication: 'Domestic Scheduled Commercial Banks = 40% of ANBC.',
              examinerTrap: 'Selecting 75% (which applies to RRBs and Small Finance Banks, not commercial banks!).'
            }
          }
        ]
      },

      {
        id: 'banking_laws_npa_recovery',
        name: 'NPA Classification, SARFAESI & IBC Code',
        category: 'Banking Regulations',
        highYieldRating: 5,
        avgQuestionsPerPaper: '5 to 7 Questions in Mains',
        typesCount: 1,
        overview: 'Non-Performing Asset (NPA) timeline: SMA-0 (1-30 days), SMA-1 (31-60 days), SMA-2 (61-90 days), Sub-Standard (>90 days up to 12 months), Doubtful (>12 months), Loss asset.',
        types: [
          {
            typeNumber: 1,
            title: 'Special Mention Accounts (SMA) & NPA Cutoff',
            identificationBlueprint: 'Questions on overdue loan classification days.',
            standardMethod: 'Confusing SMA-1 with SMA-2.',
            proShortcut: 'The SMA Memory Key:\n- SMA-0: 1 to 30 days overdue\n- SMA-1: 31 to 60 days overdue\n- SMA-2: 61 to 90 days overdue\n- NPA: Overdue exceeding 90 days!\nSARFAESI Act 2002 allows banks to seize commercial collateral without court intervention if notice of 60 days is unfulfilled.',
            workedExample: {
              question: 'A loan account with principal or interest overdue between 61 and 90 days is classified as which of the following?',
              options: ['SMA-2', 'SMA-1', 'SMA-0', 'Sub-standard Asset'],
              correctIndex: 0,
              targetTime: '5 seconds',
              shortcutApplication: '61 to 90 days = SMA-2.',
              examinerTrap: 'Selecting Sub-standard Asset (which only occurs AFTER 90 days!).'
            }
          }
        ]
      }
    ]
  }
};
