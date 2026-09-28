// Comprehensive English Language & Comprehension Syllabus (135 Marks in Tier 2)
// Covering Grammar Rules, Active/Passive Voice, Direct/Indirect Speech, Vocab Roots, Para Jumbles, Idioms & Phrases, and Reading Comprehension/Cloze Test

export const ENGLISH_SYLLABUS = {
  subjectId: 'english',
  subjectName: 'English Language & Comprehension',
  totalTopics: 7,
  totalTypesCataloged: 24,
  topics: [
    {
      id: 'grammar_rules',
      name: '120 Golden Rules of Grammar (Spotting Errors)',
      category: 'Grammar',
      highYieldRating: 5,
      avgQuestionsPerPaper: '6 to 8 Questions (Tier 1 & Tier 2)',
      typesCount: 4,
      overview: 'Grammar in SSC CGL is 100% rule-based. 5 golden rules cover 60% of all error spotting questions asked in the Eduquity/New Vendor Pattern.',
      types: [
        {
          typeNumber: 1,
          title: 'First Subject Dominance Rule (Along with / As well as)',
          identificationBlueprint: 'Two nouns joined by "along with", "as well as", "together with", "with", "in addition to", "accompanied by".',
          standardMethod: 'Assuming the plural noun closest to the verb determines the verb.',
          proShortcut: 'First Subject Rule: The verb agrees STRICTLY with the 1st subject! Ignore everything in between.\nExample: "The Captain (singular), along with 10 players, WAS (not were) awarded."',
          workedExample: {
            question: 'Spot the error: "The Minister (A) / accompanied by his security personnel (B) / were entering the parliament (C) / amidst slogans (D)."',
            options: ['Part C: were -> was', 'Part B', 'Part A', 'No error'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: '1st Subject is "The Minister" (Singular). Joined by "accompanied by". Verb in C is "were". Must be "was".',
            examinerTrap: 'The ear test: "personnel were" sounds correct to the ear, trapping candidates into selecting No error!'
          },
          practiceQuestions: [
            {
              q: 'Find the error: "The teacher (A) / as well as the students (B) / was excited (C) / about the upcoming trip (D)."',
              options: ['No error (was agrees with The teacher)', 'Part B', 'Part C', 'Part A'],
              correctIndex: 0,
              hint: '"as well as" connects "The teacher" (singular) and "students". Singular verb "was" is correct.'
            }
          ]
        },
        {
          typeNumber: 2,
          title: 'Conditional Sentences (The Invariant Conditional Trio)',
          identificationBlueprint: 'If clause starting with "If + Subject + had + V3".',
          standardMethod: 'Mixing tenses and writing "would had".',
          proShortcut: 'The Invariant Trio:\n- Type 1: If + V1 (Present) -> will + V1\n- Type 2: If + V2 (Past) -> would + V1\n- Type 3: If + had + V3 -> would have + V3! (Never put "would have" in the If-clause!).',
          workedExample: {
            question: 'Sentence Improvement: "If he had informed me earlier, I would attend the summit."',
            options: ['would have attended', 'will have attended', 'would attend', 'had attended'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: 'If clause has "had informed" (had + V3). Main clause MUST have "would have + V3" => "would have attended".',
            examinerTrap: 'Selecting "would had attended" (grammatically impossible).'
          },
          practiceQuestions: [
            {
              q: 'Correct the sentence: "If she had worked hard, she would have cleared the exam."',
              options: ['Sentence is grammatically correct', 'would clear', 'will clear', 'had cleared'],
              correctIndex: 0,
              hint: 'Matches Type 3: had + V3 followed by would have + V3.'
            }
          ]
        },
        {
          typeNumber: 3,
          title: 'Negative Adverb Inversion (Hardly/Scarcely & No Sooner)',
          identificationBlueprint: 'Sentence begins with "Hardly", "Scarcely", "Seldom", "Barely", or "No sooner".',
          standardMethod: 'Writing subject before auxiliary verb.',
          proShortcut: 'Inversion & Conjunction Pairing:\n- Hardly / Scarcely + had/did + Subject + V3 ... WHEN\n- No sooner + had/did + Subject + V3 ... THAN (not then!)',
          workedExample: {
            question: 'Find the error: "No sooner did the train arrived (A) / at the platform (B) / then the passengers rushed (C) / towards the doors (D)."',
            options: ['Part A & C errors (did + arrive, than)', 'Part B', 'Part D', 'No error'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Two classic exam traps:\n1. "did" must be followed by bare V1 "arrive", not "arrived"!\n2. "No sooner" takes "than", not "then"!',
            examinerTrap: 'Modern exam setters spell "then" instead of "than" in 80% of No Sooner questions.'
          },
          practiceQuestions: [
            {
              q: 'Spot the error: "Hardly had the bell rung (A) / then all the students (B) / ran out into the playground (C) / with joy (D)."',
              options: ['Part B: then -> when', 'Part A', 'Part C', 'Part D'],
              correctIndex: 0,
              hint: 'Hardly/Scarcely is always paired with "when", never "then".'
            }
          ]
        },
        {
          typeNumber: 4,
          title: 'Lest with "Should" or Bare Subjunctive',
          identificationBlueprint: 'Sentence contains the conjunction "lest" (meaning for fear that).',
          standardMethod: 'Using "lest you will not" or "lest you do not".',
          proShortcut: 'Lest Rules:\n1. "Lest" is already inherently negative; NEVER use "not" with lest!\n2. Always followed by modal "should" or base verb V1.\nExample: "Run fast lest you SHOULD miss the train."',
          workedExample: {
            question: 'Spot the error: "Work hard (A) / lest you do not fail (B) / in the upcoming (C) / examination (D)."',
            options: ['Part B: should fail (remove not)', 'Part A', 'Part C', 'No error'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: '"Lest" cannot take "do not". Correct form: "lest you should fail".',
            examinerTrap: 'Keeping "not" because failure is negative.'
          },
          practiceQuestions: [
            {
              q: 'Fill in the blank: "Walk carefully lest you _______ slip on the wet floor."',
              options: ['should', 'will', 'must not', 'might not'],
              correctIndex: 0,
              hint: '"Lest" strictly takes modal "should" without "not".'
            }
          ]
        }
      ]
    },

    {
      id: 'voice_active_passive',
      name: 'Active & Passive Voice (Tense-Invariance Elimination)',
      category: 'Grammar',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 to 5 Questions',
      typesCount: 1,
      overview: 'In voice transformation, the TENSE NEVER CHANGES! Cross off options with altered tenses in 5 seconds.',
      types: [
        {
          typeNumber: 1,
          title: 'The Tense Invariance & "Be + V3" Elimination Hack',
          identificationBlueprint: 'Convert sentence from Active to Passive or Passive to Active.',
          standardMethod: 'Re-translating the entire sentence from scratch.',
          proShortcut: 'Rule 1: Tense NEVER changes in Voice (unlike Narration!). Present stays Present; Past stays Past.\nRule 2: Every passive sentence MUST have form: [Form of "BE" (is/am/are/was/were/being/been) + V3].\nRule 3: Continuous tenses MUST have "being + V3". Perfect tenses MUST have "been + V3".',
          workedExample: {
            question: 'Active: "The chef is preparing a delicious dessert."',
            options: [
              'A delicious dessert is being prepared by the chef.',
              'A delicious dessert was being prepared by the chef.',
              'A delicious dessert has been prepared by the chef.',
              'A delicious dessert is prepared by the chef.'
            ],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: '"is preparing" is Present Continuous. Passive MUST have "is/are being prepared". Option A is the only match!',
            examinerTrap: 'Option B changes tense to Past ("was being prepared").'
          },
          practiceQuestions: [
            {
              q: 'Passive: "The novel was written by Charles Dickens." Convert to Active:',
              options: ['Charles Dickens wrote the novel.', 'Charles Dickens writes the novel.', 'Charles Dickens had written the novel.', 'Charles Dickens was writing the novel.'],
              correctIndex: 0,
              hint: '"was written" (Past Simple Passive) converts back to Past Simple Active: "wrote".'
            }
          ]
        }
      ]
    },

    {
      id: 'narration_direct_indirect',
      name: 'Direct & Indirect Speech (Narration Backshifts)',
      category: 'Grammar',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 to 5 Questions in Tier 2',
      typesCount: 1,
      overview: 'Reporting verb in past triggers one step back in time. Universal truths never change.',
      types: [
        {
          typeNumber: 1,
          title: 'Tense Backshift & Universal Truth Immunity',
          identificationBlueprint: 'Change Direct speech ("...") into Indirect.',
          standardMethod: 'Memorizing long translation lists.',
          proShortcut: 'Backshift Rules:\n- Present Simple -> Past Simple\n- Present Continuous -> Past Continuous\n- Past Simple (V2) -> Past Perfect (had + V3)\n- will -> would, can -> could\nIMMUNITY EXCEPTION: If the reported speech is a UNIVERSAL TRUTH, SCIENTIFIC FACT, or HABITUAL ACTION, the tense NEVER changes! ("The teacher said, the earth rotates on its axis").',
          workedExample: {
            question: 'Direct: He said, "I finished my work yesterday."',
            options: [
              'He said that he had finished his work the previous day.',
              'He said that he finished his work yesterday.',
              'He said that he has finished his work the previous day.',
              'He said that he had finished his work yesterday.'
            ],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: '1. "finished" (Past Simple) backshifts to "had finished" (Past Perfect).\n2. "yesterday" changes to "the previous day". Option A satisfies both.',
            examinerTrap: 'Forgetting to change time words (yesterday -> previous day).'
          },
          practiceQuestions: [
            {
              q: 'Direct: The teacher said, "The Sun rises in the East." Convert to Indirect:',
              options: [
                'The teacher said that the Sun rises in the East.',
                'The teacher said that the Sun rose in the East.',
                'The teacher told that the Sun had risen in the East.',
                'The teacher said that the Sun would rise in the East.'
              ],
              correctIndex: 0,
              hint: 'Universal truths are immune to tense backshifts.'
            }
          ]
        }
      ]
    },

    {
      id: 'vocabulary_roots_mnemonics',
      name: 'High-Frequency Vocab & Root Words',
      category: 'Vocabulary',
      highYieldRating: 5,
      avgQuestionsPerPaper: '6 to 10 Questions',
      typesCount: 1,
      overview: '1 root word unlocks 20 vocabulary words without rote memorization.',
      types: [
        {
          typeNumber: 1,
          title: 'Root Word Decoders (Mal, Bene, Chron, Bell, Omni)',
          identificationBlueprint: 'Unknown word in Synonyms, Antonyms, or One Word Substitution.',
          standardMethod: 'Trying to recall isolated definitions from dictionary.',
          proShortcut: 'Top 8 Master Roots:\n- MAL- (Bad/Harmful): Malice, Malign, Malevolent, Malfunction\n- BENE- (Good/Kind): Benevolent, Benefactor, Beneficent, Benign\n- CHRON- (Time): Chronic, Chronological, Anachronism, Synchronize\n- BELL- (War/Fight): Bellicose, Belligerent, Rebellion\n- OMNI- (All): Omnipotent (all-powerful), Omnipresent, Omniscient (all-knowing)\n- LOQU- / LOC- (Speech): Loquacious, Eloquent, Soliloquy, Circumlocution\n- GREG- (Flock/Group): Gregarious, Segregate, Aggregate, Egregious\n- VOR- (Eat): Carnivore, Herbivore, Voracious.',
          workedExample: {
            question: 'What is the meaning of the word "MALEVOLENT"?',
            options: ['Wishing evil or harm to others', 'Generous and charitable', 'Extremely talkative', 'Lasting for a long time'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Root MAL = Bad/Evil + VOL = Will/Wish. Malevolent = Wishing evil to others.',
            examinerTrap: 'Confusing malevolent (evil) with benevolent (kind).'
          },
          practiceQuestions: [
            {
              q: 'What is a person who talks excessively described as?',
              options: ['Loquacious', 'Taciturn', 'Reticent', 'Laconic'],
              correctIndex: 0,
              hint: 'Root LOQU = Speech.'
            }
          ]
        }
      ]
    },

    {
      id: 'para_jumbles_sentence_rearrangement',
      name: 'Para Jumbles (P-Q-R-S Mandatory Pairs)',
      category: 'Comprehension',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 to 4 Questions in Tier 2',
      typesCount: 1,
      overview: 'Never read all 24 permutations! Find 1 mandatory pair (Noun-Pronoun) and check options.',
      types: [
        {
          typeNumber: 1,
          title: 'Noun-Pronoun & Acronym Mandatory Pair Link',
          identificationBlueprint: 'Four sentences P, Q, R, S to be arranged into a coherent paragraph.',
          standardMethod: 'Reading all 4 options P-Q-R-S, Q-P-S-R, R-S-P-Q, S-R-Q-P sequentially.',
          proShortcut: 'Mandatory Pair Elimination:\n1. Find the Opening Sentence: An opening sentence NEVER begins with "However", "Therefore", "Moreover", "He", "She", or "They".\n2. Noun-Pronoun Rule: The full noun (e.g. "Dr. APJ Abdul Kalam") MUST precede the pronoun ("he")! If P has the noun and R has "he", P MUST come before R (P...R).\n3. Match against options: Instantly knocks out 3 options in 15 seconds!',
          workedExample: {
            question: 'Arrange:\nP. He worked tirelessly to develop India’s missile capability.\nQ. Dr. APJ Abdul Kalam was known as the Missile Man of India.\nR. His vision inspired millions of young students across the nation.\nS. Because of these monumental contributions, he was elected President.',
            options: ['Q - P - S - R', 'P - Q - R - S', 'R - P - Q - S', 'S - Q - P - R'],
            correctIndex: 0,
            targetTime: '12 seconds',
            shortcutApplication: '1. P starts with "He", R starts with "His vision", S starts with "Because". None can open!\n2. Only Q ("Dr. APJ Abdul Kalam") introduces the person by name. Q MUST be opening sentence!\n3. Looking at options: ONLY Option A starts with Q. Solved in 10 seconds flat!',
            examinerTrap: 'Reading the full sentences repeatedly without checking which sentence can introduce the subject.'
          },
          practiceQuestions: [
            {
              q: 'Which sentence CANNOT serve as the opening sentence of a paragraph?',
              options: [
                '"Therefore, the global economy faced unprecedented inflation."',
                '"In 1947, India gained independence from British rule."',
                '"Solar energy is one of the most promising renewable resources."',
                '"William Shakespeare was an English playwright."'
              ],
              correctIndex: 0,
              hint: 'Connectors like "Therefore", "However", "Thus" express conclusions and cannot initiate a paragraph.'
            }
          ]
        }
      ]
    },

    {
      id: 'idioms_and_phrases',
      name: 'High-Yield Idioms & Phrases',
      category: 'Vocabulary',
      highYieldRating: 5,
      avgQuestionsPerPaper: '4 to 6 Questions',
      typesCount: 1,
      overview: 'Top recurring idioms asked across 10 years of SSC CGL, CHSL, and CPO examinations.',
      types: [
        {
          typeNumber: 1,
          title: 'Color & Animal Idiom Imagery',
          identificationBlueprint: 'Questions asking for meaning of "Bolt from the blue", "Burn the midnight oil", "Once in a blue moon".',
          standardMethod: 'Literal word-by-word interpretation.',
          proShortcut: 'Top Recurring Modern Exam Idioms:\n- Bolt from the blue: A sudden, unexpected shock/event.\n- Once in a blue moon: Very rarely / infrequently.\n- Bite the bullet: Face a grim situation with fortitude.\n- Burn the midnight oil: Study or work late into the night.\n- Cast pearls before swine: Offer valuable things to someone who does not appreciate them.\n- Dark horse: An unexpected winner.\n- Achilles’ heel: A fatal or vulnerable weakness.',
          workedExample: {
            question: 'What is the meaning of the idiom "A bolt from the blue"?',
            options: ['A complete surprise and unexpected event', 'A stormy weather forecast', 'An expensive luxury item', 'A fierce argument'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'A sudden lightning bolt out of a clear blue sky represents a total unexpected shock.',
            examinerTrap: 'Choosing a weather-related literal option.'
          },
          practiceQuestions: [
            {
              q: 'What is the meaning of "To beat around the bush"?',
              options: ['To avoid coming to the main point', 'To clean the garden', 'To win a competition easily', 'To speak rudely'],
              correctIndex: 0,
              hint: 'Focus on circumlocution / delay in addressing the core subject.'
            }
          ]
        }
      ]
    },

    {
      id: 'reading_comprehension_cloze',
      name: 'Reading Comprehension & Cloze Test',
      category: 'Comprehension',
      highYieldRating: 5,
      avgQuestionsPerPaper: '15 to 25 Questions in Mains',
      typesCount: 1,
      overview: 'Elimination tactics for Cloze blanks using prepositional collocations and tone indicators.',
      types: [
        {
          typeNumber: 1,
          title: 'Prepositional Collocations in Cloze Test',
          identificationBlueprint: 'Filling blanks that have a preposition immediately following the blank (e.g. blank + of, to, in, with).',
          standardMethod: 'Trying every option by voice reading.',
          proShortcut: 'Fixed Preposition Collocations:\n- Abide BY, Abstain FROM, Accused OF, Adhere TO, Agree WITH (person) / TO (proposal)\n- Congratulate ON (not for!), Cope WITH (not cope up with!), Devoid OF, Differ FROM\n- Interested IN, Insist ON, Prevent FROM, Rely ON, Senior TO (not than!).',
          workedExample: {
            question: 'Fill in the blank: "The candidate was fully confident _______ passing the Tier-2 examination."',
            options: ['of', 'for', 'about', 'to'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'The adjective "confident" takes the fixed preposition "OF". "Confidence" takes "IN".',
            examinerTrap: 'Choosing "about" or "for" which sound natural in colloquial speech.'
          },
          practiceQuestions: [
            {
              q: 'Fill in the blank: "He congratulated his friend _______ securing Rank 1 in SSC CGL."',
              options: ['on', 'for', 'about', 'with'],
              correctIndex: 0,
              hint: '"Congratulate" is strictly followed by "ON", never "for".'
            }
          ]
        }
      ]
    }
  ]
};
