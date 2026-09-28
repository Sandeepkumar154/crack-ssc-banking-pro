// Comprehensive General Intelligence & Reasoning Syllabus with ALL 9 Core Chapters
// Covering Verbal, Non-Verbal, and Critical Reasoning for SSC & Banking

export const REASONING_SYLLABUS = {
  subjectId: 'reasoning',
  subjectName: 'General Intelligence & Reasoning',
  totalTopics: 14,
  totalTypesCataloged: 40,
  topics: [
    {
      id: 'syllogism',
      name: 'Syllogism (Eduquity & Venn Method)',
      category: 'Verbal Reasoning',
      highYieldRating: 5,
      avgQuestionsPerPaper: '2 to 3 Questions',
      typesCount: 3,
      overview: 'Master "Only a few", Possibilities, and the strict Either-Or complementary rules.',
      types: [
        {
          typeNumber: 1,
          title: '"Only a few" & "Some not" Dual Meaning Rule',
          identificationBlueprint: 'Statement contains: "Only a few A are B".',
          standardMethod: 'Treating "Only a few" as just "Some".',
          proShortcut: 'The Dual Meaning Rule: "Only a few A are B" ALWAYS means:\n1. Some A are B (Positive)\n2. Some A are NOT B (Negative)\nCritical: "All A can never be B" is 100% TRUE, but "All B can be A" is a valid possibility!',
          workedExample: {
            question: 'Statements: Only a few Books are Pens. All Pens are Erasers.\nConclusions: I. Some Books are not Pens. II. All Erasers being Books is a possibility.',
            options: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither follows'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: '1. "Only a few Books are Pens" means Some Books are definitely NOT Pens. Hence I is TRUE.\n2. Erasers can enter Books without violating any restriction. Hence II is a valid possibility.',
            examinerTrap: 'Assuming that "Only a few" restricts Erasers from becoming Books.'
          }
        },
        {
          typeNumber: 2,
          title: 'Complementary Pairs (Either-Or Rule)',
          identificationBlueprint: 'Two conclusions with identical Subject and Predicate where one is positive and one is negative.',
          standardMethod: 'Individually verifying without checking complementary conditions.',
          proShortcut: 'The 3 Golden Rules for Either-Or:\n1. Both conclusions must be independently doubtful (false).\n2. Subject and Predicate must match.\n3. Must form [Some + No] OR [All + Some Not]. (Note: [All + No] is NEVER an Either-Or pair!).',
          workedExample: {
            question: 'Conclusions: I. Some cars are buses. II. No car is a bus. Both are doubtful from statements.',
            options: ['Either I or II follows', 'Neither I nor II follows', 'Both follow', 'Only I follows'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: 'Both doubtful, subject/predicate match, pair is [Some + No] => Either I or II follows.',
            examinerTrap: 'Marking Either-Or on "All cars are buses" and "No car is a bus" (All + No is not complementary!).'
          }
        },
        {
          typeNumber: 3,
          title: 'Definite Negation vs Possibility Testing',
          identificationBlueprint: 'Conclusion asks: "Can never be" or "Is a possibility".',
          standardMethod: 'Drawing multiple Venn diagrams.',
          proShortcut: '- "Can never be" means "Some are definitely NOT" (Definite negative fact).\n- To test if "X being Y is a possibility": Try to draw a diagram where X is inside Y. If NO statement is violated, possibility is TRUE!',
          workedExample: {
            question: 'Statements: No Dog is Cat. All Cats are Rats.\nConclusion: Some Rats can never be Dogs.',
            options: ['Follows', 'Does not follow', 'Either follows', 'Cannot determine'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Those Rats that are Cats can NEVER touch Dogs. Hence, Some Rats can never be Dogs is 100% TRUE.',
            examinerTrap: 'Confusing "can never be" with a possibility statement.'
          }
        }
      ]
    },

    {
      id: 'coding_decoding',
      name: 'Coding-Decoding & Letter Shifts',
      category: 'Verbal Reasoning',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 Questions',
      typesCount: 3,
      overview: 'Master EJOTY (5, 10, 15, 20, 25) and reverse alphabet pairs (sum of positions = 27).',
      types: [
        {
          typeNumber: 1,
          title: 'Opposite Letter Pairing (Sum = 27 Rule)',
          identificationBlueprint: 'Letters coded as far letters (e.g., A as Z, B as Y).',
          standardMethod: 'Writing the full alphabet on scrap paper.',
          proShortcut: 'Opposite Pairs: A-Z (Amazon), B-Y (Boy), C-X (Crux), D-W (Dew), E-V (Love - EV/LO), F-U (Fun), G-T (GT Road), H-S (High School), I-R (Indian Railway), J-Q (Jungle Queen), K-P (PK), L-O (Love), M-N (Man).\nPosition of Opposite = 27 - Current Position!',
          workedExample: {
            question: 'If "KING" is coded as "PRMT", how is "ROAD" coded?',
            options: ['ILZW', 'ILZX', 'KMZW', 'IMZW'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'K<->P, I<->R, N<->M, G<->T. Applying to ROAD: R<->I, O<->L, A<->Z, D<->W => ILZW.',
            examinerTrap: 'Modern exam setters change the last letter by +1 (ILZX) to trap students who only verify the first two letters.'
          }
        },
        {
          typeNumber: 2,
          title: 'Cross-Shift / Diagonal Pattern Coding',
          identificationBlueprint: 'Letters don’t match top-to-bottom, but 1st matches last or halves are swapped.',
          standardMethod: 'Trying linear +1, +2, +3 on each letter sequentially.',
          proShortcut: 'Partitioning Hack: Divide the word into two equal halves (e.g. 6-letter word into 3 and 3). Check cross-shift within each half (1st to 3rd, 3rd to 1st).',
          workedExample: {
            question: 'If "BEAT" is coded as "YVZG", how is "SORE" coded?',
            options: ['HLIV', 'HLJW', 'GLIV', 'HMIV'],
            correctIndex: 0,
            targetTime: '12 seconds',
            shortcutApplication: 'B<->Y, E<->V, A<->Z, T<->G. Direct opposites applied. S->H, O->L, R->I, E->V => HLIV.',
            examinerTrap: 'Mixing letter positions.'
          }
        },
        {
          typeNumber: 3,
          title: 'Direct Fictitious Word Substitution (Chinese Coding)',
          identificationBlueprint: '"pit dar na" means "you are good", "dar tok pa" means "good and bad". Find code for "good".',
          standardMethod: 'Writing all sentences and drawing arrows.',
          proShortcut: 'Common Word Elimination: Find the common word between Sentence 1 and Sentence 2. The ONLY code word repeating in both is its direct code! Takes 5 seconds.',
          workedExample: {
            question: '"ski rps tri" means "nice Sunday morning", "teh sti rps" means "every Tuesday morning". What is the code for "morning"?',
            options: ['rps', 'ski', 'tri', 'teh'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Common English word in both sentences is "morning". Common code in both is "rps". Result: rps.',
            examinerTrap: 'Wasting time decoding the other words that were not asked.'
          }
        }
      ]
    },

    {
      id: 'blood_relations',
      name: 'Blood Relations (Family Tree & Coded)',
      category: 'Verbal Reasoning',
      highYieldRating: 5,
      avgQuestionsPerPaper: '2 to 3 Questions',
      typesCount: 3,
      overview: 'Use generation levels (+1 for parents, 0 for siblings/spouse, -1 for children) and gender signs (+ for male, - for female).',
      types: [
        {
          typeNumber: 1,
          title: 'Pointing to a Photograph / Person ("Self-Projection" Trick)',
          identificationBlueprint: 'Statement: "Pointing to a man, a woman said: He is the only son of my father’s father...".',
          standardMethod: 'Drawing complex family charts.',
          proShortcut: 'Backward Self-Projection: Start reading backwards from "my":\n1. "My father’s father" = My Grandfather.\n2. "Only son of my grandfather" = My Father!\n3. "He is my father" => Man is her father.',
          workedExample: {
            question: 'Pointing to a gentleman, Deepak said, "His only brother is the father of my daughter’s father." How is the gentleman related to Deepak?',
            options: ['Uncle', 'Father', 'Brother', 'Grandfather'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: '1. "My daughter’s father" = Deepak himself.\n2. "Father of Deepak" = Deepak’s father.\n3. "His only brother is Deepak’s father" => The gentleman is the brother of Deepak’s father = Deepak’s Uncle!',
            examinerTrap: 'Selecting "Father" by missing that the man’s BROTHER is Deepak’s father.'
          }
        },
        {
          typeNumber: 2,
          title: 'Coded Blood Relations (A + B means A is father of B)',
          identificationBlueprint: 'Expression: P + Q × R - S. Which option shows "P is maternal uncle of S"?',
          standardMethod: 'Drawing the full family tree for every single option A, B, C, D (takes 3 minutes!).',
          proShortcut: 'Gender and Generation Elimination Hack:\n1. Check Gender: If P must be Uncle, P MUST be Male (+). Immediately eliminate any option where P is female or at the end without gender defined!\n2. Check Generation Gap: Uncle is at generation +1. Calculate net generation from symbols.',
          workedExample: {
            question: 'If A + B means A is sister of B; A - B means A is brother of B; A × B means A is daughter of B. Which shows E is brother of F?',
            options: ['E - G + F', 'E + G - F', 'E × G + F', 'F - E + G'],
            correctIndex: 0,
            targetTime: '12 seconds',
            shortcutApplication: 'E must be brother (Male). In option A: E - G means E is brother of G (Male). In Option B: E + G means E is sister (Female - Eliminate!). In Option C: E × G means E is daughter (Female - Eliminate!). Instant Answer: A.',
            examinerTrap: 'Drawing all 4 options instead of checking gender of E first.'
          }
        }
      ]
    },

    {
      id: 'direction_and_distance',
      name: 'Direction and Distance & Shadow Rules',
      category: 'Verbal Reasoning',
      highYieldRating: 4,
      avgQuestionsPerPaper: '2 Questions',
      typesCount: 3,
      overview: 'Pythagorean triplets (3-4-5, 5-12-13, 8-15-17) and shadow positions eliminate drawing diagrams.',
      types: [
        {
          typeNumber: 1,
          title: 'Sunrise & Sunset Shadow Rules',
          identificationBlueprint: 'Two friends talking face-to-face in the morning/evening, and shadow falls to the right/left.',
          standardMethod: 'Guessing sun rays and shadow angles.',
          proShortcut: 'The Invariant Shadow Matrix:\n- Sunrise (Morning - Sun in East): Shadow is ALWAYS in the WEST.\n  * If shadow is to someone’s LEFT => That person faces NORTH.\n  * If shadow is to someone’s RIGHT => That person faces SOUTH.\n- Sunset (Evening - Sun in West): Shadow is ALWAYS in the EAST.\n  * If shadow is to someone’s LEFT => That person faces SOUTH.\n  * If shadow is to someone’s RIGHT => That person faces NORTH.',
          workedExample: {
            question: 'One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was Suresh facing?',
            options: ['South', 'North', 'East', 'West'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: 'Morning => Shadow is in the WEST. Suresh’s RIGHT is West. If right is West, Suresh MUST be facing SOUTH.',
            examinerTrap: 'Selecting North by reversing right and left.'
          }
        },
        {
          typeNumber: 2,
          title: 'Final Facing Direction without Distance (L/R Cancellation)',
          identificationBlueprint: 'Person walks 50m, turns Right, then Left, then Left, then Right. Which direction is he facing?',
          standardMethod: 'Drawing a winding path with ruler.',
          proShortcut: 'Turn Cancellation Rule: Every 1 Right turn CANCELS 1 Left turn! Net direction = Initial Direction + remaining net turns. (4 Lefts or 4 Rights = 360° = Same Direction; 2 Rights = 180° = Opposite Direction).',
          workedExample: {
            question: 'A man starts walking North. He turns Right, then Left, then Right, then Right. Which direction is he facing now?',
            options: ['South', 'East', 'West', 'North'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Turns: R, L, R, R.\nCancel 1 R and 1 L => Remaining: 2 Rights.\n2 Rights from North = 180° turn = SOUTH.',
            examinerTrap: 'Plotting every distance when distance values are completely irrelevant to facing direction!'
          }
        }
      ]
    },

    {
      id: 'order_and_ranking',
      name: 'Order, Ranking & Interchanging Positions',
      category: 'Verbal Reasoning',
      highYieldRating: 4,
      avgQuestionsPerPaper: '2 Questions',
      typesCount: 2,
      overview: 'Total = Left + Right - 1. Interchanging positions directly yields total row count.',
      types: [
        {
          typeNumber: 1,
          title: 'Basic Row Total and Overlapping Case',
          identificationBlueprint: 'Person’s rank from Left is L and from Right is R. Find Total persons.',
          standardMethod: 'Counting on fingers.',
          proShortcut: 'Total = Left + Right - 1.\nOverlapping Case (Between persons M): Total = L + R - (Between + 2).',
          workedExample: {
            question: 'Raman is 7th from top and 28th from bottom in a class. How many students are there in the class?',
            options: ['34', '35', '33', '36'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Total = 7 + 28 - 1 = 35 - 1 = 34.',
            examinerTrap: 'Adding 7 + 28 = 35 without subtracting 1 (Raman was counted twice!).'
          }
        },
        {
          typeNumber: 2,
          title: 'Position Interchanging in a Row',
          identificationBlueprint: 'A is 10th from Left, B is 15th from Right. They interchange places. A becomes 18th from Left.',
          standardMethod: 'Drawing dots and shifting.',
          proShortcut: 'Master Formula: Total Persons = (New rank of A) + (Old rank of B) - 1!\nPersons between them = |New rank of A - Old rank of A| - 1.',
          workedExample: {
            question: 'In a row of boys, A is 10th from left and B is 9th from right. If they interchange positions, A becomes 15th from left. How many boys in the row?',
            options: ['23', '24', '22', '25'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: 'Total = New rank of A (15) + Old rank of B (9) - 1 = 24 - 1 = 23 boys.',
            examinerTrap: 'Subtracting old rank of A from total.'
          }
        }
      ]
    },

    {
      id: 'dice_and_cube',
      name: 'Dice & Cube (Standard, General & Unfolded)',
      category: 'Non-Verbal / Visual',
      highYieldRating: 5,
      avgQuestionsPerPaper: '2 Questions',
      typesCount: 2,
      overview: 'One common face clockwise rule and alternate face open dice rule crack 100% of dice problems.',
      types: [
        {
          typeNumber: 1,
          title: 'Clockwise Rotation Rule (One Common Face)',
          identificationBlueprint: 'Two views of same dice have ONE number common.',
          standardMethod: 'Trying to imagine 3D spatial rotation in mind.',
          proShortcut: 'Clockwise Roll: Write the numbers in clockwise order starting from the common face for both dice:\nDice 1: Common -> X -> Y\nDice 2: Common -> A -> B\nOpposite pairs are: X opposite A, Y opposite B, and Common opposite remaining unseen number!',
          workedExample: {
            question: 'Two positions of a dice are shown. Dice 1 has faces 3, 5, 2. Dice 2 has faces 3, 1, 6. Which number is opposite 5?',
            options: ['1', '6', '4', '2'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: 'Common face is 3.\nClockwise from 3 in Dice 1: 3 -> 5 -> 2\nClockwise from 3 in Dice 2: 3 -> 1 -> 6\nOpposites: 5 is opposite 1; 2 is opposite 6; 3 is opposite 4.\nAnswer for opposite 5: 1.',
            examinerTrap: 'Rotating counter-clockwise on one dice and clockwise on the other.'
          }
        },
        {
          typeNumber: 2,
          title: 'Unfolded / Open Dice (Alternate Face Rule)',
          identificationBlueprint: 'Flat cross-shaped open sheet of dice with 6 labeled boxes.',
          standardMethod: 'Mentally folding paper into 3D box.',
          proShortcut: 'Alternate Face Rule: In any straight line (horizontal or vertical), ALTERNATE faces are ALWAYS opposite to each other! (Skip one box). Adjacent faces can NEVER be opposite.',
          workedExample: {
            question: 'In an open dice strip, the vertical column has 1, 2, 3, 4. Which face is opposite 1?',
            options: ['3', '2', '4', '5'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'In vertical line 1, 2, 3, 4: Alternate of 1 is 3. Alternate of 2 is 4. Hence 1 is opposite 3.',
            examinerTrap: 'Selecting adjacent face 2.'
          }
        }
      ]
    },

    {
      id: 'number_letter_series',
      name: 'Number & Alphabet Series & Analogies',
      category: 'Verbal Reasoning',
      highYieldRating: 5,
      avgQuestionsPerPaper: '4 to 5 Questions',
      typesCount: 2,
      overview: 'Step differences, prime numbers, squares plus/minus, and digit sums.',
      types: [
        {
          typeNumber: 1,
          title: 'Step Difference & Polynomial Series',
          identificationBlueprint: 'Series grows steadily: 5, 11, 19, 29, 41, ?.',
          standardMethod: 'Trying random multiplication formulas.',
          proShortcut: 'Difference Ladder: Take 1st differences. If not constant, take 2nd difference (difference of differences). If 2nd difference is constant, it is a quadratic progression.',
          workedExample: {
            question: 'What is the next number: 5, 11, 19, 29, 41, ?',
            options: ['55', '53', '56', '54'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: '1st differences: 11-5=6, 19-11=8, 29-19=10, 41-29=12.\nPattern: +6, +8, +10, +12, so next is +14.\nNext term = 41 + 14 = 55.',
            examinerTrap: 'Adding 12 instead of 14.'
          }
        }
      ]
    },

    {
      id: 'non_verbal_reasoning',
      name: 'Non-Verbal (Paper Folding, Mirror Images & Embedded Figures)',
      category: 'Non-Verbal / Visual',
      highYieldRating: 5,
      avgQuestionsPerPaper: '4 to 5 Questions',
      typesCount: 2,
      overview: 'Elimination by unique corner asymmetry solves visual questions in 5 seconds.',
      types: [
        {
          typeNumber: 1,
          title: 'Paper Folding and Punch Hole Symmetry',
          identificationBlueprint: 'Circular or square paper folded twice and punched with triangle/dots.',
          standardMethod: 'Drawing unfold stages on paper.',
          proShortcut: 'Quadrant Reflection Rule: Each unfold is a MIRROR IMAGE across the fold line! If folded into 4 quadrants, the punch must appear in ALL 4 quadrants identically reflected.',
          workedExample: {
            question: 'A square paper is folded diagonally into a triangle and punched at the apex. How many holes appear when unfolded?',
            options: ['2 holes', '4 holes', '1 hole', '3 holes'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Folded once across diagonal = 2 layers. 1 punch = 2 holes upon unfold.',
            examinerTrap: 'Confusing 1 diagonal fold (2 layers) with 2 folds (4 layers).'
          }
        }
      ]
    },

    {
      id: 'critical_analytical_reasoning',
      name: 'Critical Reasoning (Statement & Assumptions / Arguments)',
      category: 'Analytical (Mains Weightage)',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 to 4 Questions in Tier 2',
      typesCount: 2,
      overview: 'Crucial for Tier 2 merit. Never bring outside knowledge; test implicit assumptions.',
      types: [
        {
          typeNumber: 1,
          title: 'Statement & Implicit Assumption (Negative Test)',
          identificationBlueprint: 'Statement given, followed by Assumptions I and II. Which is implicit?',
          standardMethod: 'Treating assumptions as consequences or conclusions.',
          proShortcut: 'The Negation Test: An assumption is what the speaker took for granted BEFORE making the statement. Negate the assumption: If the statement falls apart or becomes absurd, the assumption is 100% IMPLICIT!',
          workedExample: {
            question: 'Statement: "Please do not use mobile phones while driving - Traffic Police."\nAssumptions:\nI. People usually ignore traffic signs.\nII. It is possible for drivers to avoid using mobile phones while driving.',
            options: ['Only II is implicit', 'Only I is implicit', 'Both are implicit', 'Neither is implicit'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'Notice issued assuming people CAN follow it (II is implicit). If they assumed everyone ignores signs, they wouldn’t bother putting the board (I is invalid). Result: Only II is implicit.',
            examinerTrap: 'Thinking cynical real-world thoughts ("people ignore signs anyway"). Always assume public notices are issued in good faith!'
          }
        }
      ]
    },
    {
      id: 'word_number_letter_analogy',
      name: 'Analogy (Word, Number & Letter)',
      avgQuestionsInPaper: '2-4',
      types: [
        {
          typeNumber: 1,
          title: 'Word Analogy (Semantic Relationship)',
          identificationBlueprint: 'Given A : B :: C : ? — Find the relationship between A and B, apply same to C.',
          standardMethod: 'Identify the relationship: Part:Whole, Tool:Worker, Product:Raw Material, Male:Female, Young:Adult, etc.',
          proShortcut: 'Common relationships: Doctor:Stethoscope (Tool), Cub:Bear (Young:Adult), Pen:Ink (Uses), Carpenter:Wood (Worker:Material). Learn 20 standard pairs.',
          workedExample: 'Cobbler : Leather :: Tailor : ? → Cobbler works with Leather, Tailor works with Cloth. Answer: Cloth',
          examinerTrap: 'Modern exam setters give close options like "Thread" and "Cloth". Tailor\'s PRIMARY material is Cloth, not Thread!',
          practiceQuestions: [
            { question: 'Marathon : Race :: Hibernation : ?', options: ['Sleep', 'Winter', 'Bear', 'Dream'], correctIndex: 0, explanation: 'Marathon is a long race. Hibernation is a long sleep.' },
            { question: 'Ornithology : Birds :: Entomology : ?', options: ['Insects', 'Plants', 'Rocks', 'Fish'], correctIndex: 0, explanation: 'Ornithology is study of Birds. Entomology is study of Insects.' },
            { question: 'Archipelago : Islands :: Constellation : ?', options: ['Stars', 'Planets', 'Galaxies', 'Moons'], correctIndex: 0, explanation: 'An archipelago is a group of islands. A constellation is a group of stars.' }
          ]
        },
        {
          typeNumber: 2,
          title: 'Number Analogy',
          identificationBlueprint: 'Given number pairs with a hidden mathematical relationship. Find the pattern.',
          standardMethod: 'Check: squares, cubes, sum of digits, prime check, factorial, product of digits.',
          proShortcut: 'Common patterns: n² (4:16, 5:25), n³ (2:8, 3:27), n²+1 (3:10, 5:26), n²-1 (4:15, 6:35). Always check squares first!',
          workedExample: '8 : 64 :: 11 : ? → 8² = 64, so 11² = 121. Answer: 121',
          examinerTrap: 'Trap option will be 11×8=88 or 11+64=75. Always verify the PATTERN from the first pair!',
          practiceQuestions: [
            { question: '6 : 36 :: 9 : ?', options: ['18', '72', '81', '54'], correctIndex: 2, explanation: '6² = 36, so 9² = 81.' },
            { question: '3 : 28 :: 5 : ?', options: ['124', '126', '130', '120'], correctIndex: 1, explanation: '3³ + 1 = 28, so 5³ + 1 = 126.' },
            { question: '7 : 56 :: 9 : ?', options: ['72', '90', '81', '63'], correctIndex: 1, explanation: '7 × 8 = 56 (n × (n+1)), so 9 × 10 = 90.' }
          ]
        }
      ]
    },
    {
      id: 'classification_odd_one_out',
      name: 'Classification (Odd One Out)',
      avgQuestionsInPaper: '2-3',
      types: [
        {
          typeNumber: 1,
          title: 'Word Classification',
          identificationBlueprint: 'Find the odd word that does not belong to the group.',
          standardMethod: 'Identify what 3 items have in common (same category) and which one is different.',
          proShortcut: 'Common categories tested: Fruits/Vegetables, Rivers/Mountains, Planets, Organs, Metals, Dances, Languages. The odd one is always from a DIFFERENT category.',
          workedExample: 'Mercury, Venus, Moon, Mars → Moon is the odd one (satellite, not a planet).',
          examinerTrap: 'All four might seem related at first glance. Example: Carrot, Potato, Ginger, Tomato — all are vegetables but Tomato grows above ground (fruit technically)!',
          practiceQuestions: [
            { question: 'Which is the odd one out? Flute, Sitar, Veena, Guitar', options: ['Flute', 'Sitar', 'Veena', 'Guitar'], correctIndex: 0, explanation: 'Sitar, Veena, Guitar are string instruments. Flute is a wind instrument.' },
            { question: 'Which is the odd one out? Nile, Amazon, Everest, Ganges', options: ['Nile', 'Amazon', 'Everest', 'Ganges'], correctIndex: 2, explanation: 'Nile, Amazon, Ganges are rivers. Everest is a mountain.' },
            { question: 'Which is the odd one out? Rajya Sabha, Lok Sabha, Vidhan Sabha, Supreme Court', options: ['Rajya Sabha', 'Lok Sabha', 'Vidhan Sabha', 'Supreme Court'], correctIndex: 3, explanation: 'First three are legislative bodies. Supreme Court is judiciary.' }
          ]
        },
        {
          typeNumber: 2,
          title: 'Number Classification',
          identificationBlueprint: 'Find the odd number from a group based on a mathematical property.',
          standardMethod: 'Check: primes, squares, cubes, even/odd, divisibility, sum of digits.',
          proShortcut: 'Quick checks in order: 1) Is it prime vs composite? 2) Is it a perfect square/cube? 3) Sum of digits pattern? 4) Divisibility by a specific number?',
          workedExample: '8, 27, 64, 100, 125 → 100 is odd one (10², not a perfect cube. Others are 2³, 3³, 4³, 5³)',
          examinerTrap: '64 could be both 4³ AND 8². Exam setters use numbers that fit multiple categories to confuse!',
          practiceQuestions: [
            { question: 'Find the odd one: 2, 3, 5, 9, 11', options: ['2', '3', '9', '11'], correctIndex: 2, explanation: '2, 3, 5, 11 are prime numbers. 9 = 3×3 is not prime.' },
            { question: 'Find the odd one: 1, 4, 9, 15, 25', options: ['1', '4', '15', '25'], correctIndex: 2, explanation: '1, 4, 9, 25 are perfect squares (1², 2², 3², 5²). 15 is not a perfect square.' },
            { question: 'Find the odd one: 121, 144, 169, __(select)__, __(196)__ — Which does NOT belong: 121, 144, 196, __(225)__?\nActually: 121, 144, 169, __(189)__, 225', options: ['121', '144', '189', '225'], correctIndex: 2, explanation: '121=11², 144=12², 169=13², 225=15². 189 is not a perfect square.' }
          ]
        }
      ]
    },
    {
      id: 'logical_venn_diagrams',
      name: 'Logical Venn Diagrams',
      avgQuestionsInPaper: '1-2',
      types: [
        {
          typeNumber: 1,
          title: 'Three-Set Relationship Identification',
          identificationBlueprint: 'Given 3 items/categories, identify the correct Venn diagram showing their relationship.',
          standardMethod: 'Ask: Are A and B related? Are B and C related? Are A and C related? Is any set a subset of another?',
          proShortcut: '5 standard patterns: 1) All separate (Dog, Table, Pen), 2) Two overlap, one separate (Mothers, Doctors, Women), 3) All overlap (Indians, Doctors, Women), 4) One inside another (Delhi, India, Asia), 5) Two inside one (Men, Women, Humans).',
          workedExample: 'Dog, Animal, Cat → Dog and Cat are both inside Animal, but Dog and Cat do not overlap. Two separate circles inside one big circle.',
          examinerTrap: 'Tricky: "Teachers, Mothers, Women" — some teachers are mothers, some mothers are women, some teachers are women, and some are all three. This is ALL-OVERLAP pattern!',
          practiceQuestions: [
            { question: 'Which Venn diagram best represents: Pen, Stationery, Pencil?', options: ['Two separate circles inside one big circle', 'Three overlapping circles', 'Three separate circles', 'Two overlapping inside one big circle'], correctIndex: 0, explanation: 'Pen and Pencil are both types of Stationery (inside), but Pen ≠ Pencil (separate from each other).' },
            { question: 'Which Venn diagram best represents: India, Maharashtra, Asia?', options: ['Three concentric circles (one inside another)', 'Three overlapping circles', 'Three separate circles', 'Two separate inside one big'], correctIndex: 0, explanation: 'Maharashtra is inside India, India is inside Asia. Nested/concentric circles.' },
            { question: 'Which Venn diagram best represents: Dogs, Cats, Animals?', options: ['Two separate circles inside one big circle', 'Three overlapping circles', 'Three separate circles', 'All same circle'], correctIndex: 0, explanation: 'Dogs and Cats are both Animals but different from each other.' }
          ]
        }
      ]
    },
    {
      id: 'clock_and_calendar',
      name: 'Clock & Calendar',
      avgQuestionsInPaper: '1-2',
      types: [
        {
          typeNumber: 1,
          title: 'Clock Angle Problems',
          identificationBlueprint: 'Find the angle between hour and minute hands, or time when hands overlap/are at right angle.',
          standardMethod: 'Angle = |30H - 5.5M| where H = hour, M = minutes.',
          proShortcut: 'Shortcut: Minute hand moves 6°/min, Hour hand moves 0.5°/min. Relative speed = 5.5°/min. Hands overlap every 65 5/11 minutes. In 12 hours, hands overlap 11 times (NOT 12!).',
          workedExample: 'Angle at 3:20? = |30×3 - 5.5×20| = |90 - 110| = 20°. Answer: 20°',
          examinerTrap: 'At 6:00 the angle is 180°, NOT 0°! At 12:00 the angle is 0°. Students mix these up.',
          practiceQuestions: [
            { question: 'What is the angle between the hour and minute hand at 4:30?', options: ['30°', '45°', '60°', '75°'], correctIndex: 1, explanation: 'Angle = |30×4 - 5.5×30| = |120 - 165| = 45°' },
            { question: 'How many times do clock hands overlap in 24 hours?', options: ['24', '22', '23', '20'], correctIndex: 1, explanation: 'In 12 hours, hands overlap 11 times (not 12, because the 12th overlap is at 12:00 which starts the next cycle). In 24 hours = 22 times.' },
            { question: 'At what angle are the hands at 9:00?', options: ['90°', '180°', '270°', '0°'], correctIndex: 0, explanation: 'At 9:00, minute hand at 12 (0°), hour hand at 9 (270°). Angle = 360-270 = 90° (taking the smaller angle).' }
          ]
        },
        {
          typeNumber: 2,
          title: 'Calendar Problems (Day Finding)',
          identificationBlueprint: 'Find the day of the week for a given date, or how many odd days between dates.',
          standardMethod: 'Count odd days: Normal year = 1 odd day, Leap year = 2 odd days. Century odd days: 400yr = 0, 300yr = 1, 200yr = 3, 100yr = 5.',
          proShortcut: 'Odd Day codes: Sun=0, Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6. Leap year rule: Divisible by 4 BUT not 100, UNLESS also divisible by 400.',
          workedExample: 'What day was 15 Aug 1947? Count odd days from 1 Jan 0001 to 15 Aug 1947. 1946 years = 4 centuries(0) + 3 centuries(1) + 46 years. 46 years = 11 leap + 35 normal = 22+35 = 57 odd days = 1. Jan(3)+Feb(0)+Mar(3)+Apr(2)+May(3)+Jun(2)+Jul(3)+Aug(15)=31 odd days=3. Total=1+1+3=5=Friday.',
          examinerTrap: 'Century years (1900, 2100) are NOT leap years unless divisible by 400. 2000 IS a leap year, 1900 is NOT!',
          practiceQuestions: [
            { question: 'If January 1 of a year is Monday, what day is March 1 of the same non-leap year?', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], correctIndex: 3, explanation: 'Jan has 31 days (3 odd days), Feb has 28 days (0 odd days). Total odd days = 3. Monday + 3 = Thursday.' },
            { question: 'Which of the following is NOT a leap year?', options: ['2000', '1900', '2400', '2024'], correctIndex: 1, explanation: '1900 is divisible by 100 but NOT by 400, so it is NOT a leap year.' },
            { question: 'How many odd days are in a normal (non-leap) year?', options: ['0', '1', '2', '3'], correctIndex: 1, explanation: '365 ÷ 7 = 52 weeks + 1 day. So 1 odd day.' }
          ]
        }
      ]
    },
    {
      id: 'mirror_water_image',
      name: 'Mirror & Water Image',
      avgQuestionsInPaper: '1-2',
      types: [
        {
          typeNumber: 1,
          title: 'Mirror Image (Left-Right Reversal)',
          identificationBlueprint: 'Find the mirror image of a word, number, figure, or clock time.',
          standardMethod: 'In a mirror image, left and right sides are reversed. Top and bottom stay the same.',
          proShortcut: 'For clock mirror: Mirror time = 11:60 - Given time. Example: Mirror of 3:20 = 11:60 - 3:20 = 8:40. For letters: Symmetric letters that look same in mirror: A, H, I, M, O, T, U, V, W, X, Y.',
          workedExample: 'Mirror image of clock showing 4:45? = 11:60 - 4:45 = 7:15. Answer: 7:15',
          examinerTrap: 'For 12:00 mirror formula gives 11:60 - 12:00 = -0:60? NO! 12:00 mirror = 12:00. Special case!',
          practiceQuestions: [
            { question: 'If a clock shows 2:30, what time does its mirror image show?', options: ['9:30', '8:30', '10:30', '7:30'], correctIndex: 0, explanation: 'Mirror time = 11:60 - 2:30 = 9:30.' },
            { question: 'Which word reads the SAME in a mirror?', options: ['BOOK', 'TOOT', 'COOL', 'FOOD'], correctIndex: 1, explanation: 'TOOT uses symmetric letters (T, O) and is a palindrome, so its mirror image looks the same.' },
            { question: 'Mirror image of 3:50 on a clock?', options: ['8:10', '7:10', '9:10', '8:50'], correctIndex: 0, explanation: 'Mirror time = 11:60 - 3:50 = 8:10.' }
          ]
        }
      ]
    }
  ]
};
