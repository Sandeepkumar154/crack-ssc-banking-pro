// Comprehensive Beginner Theory & Concept Foundations for SSC & Banking Topics
// Explains the fundamental concepts, basic formulas, step-by-step logic, and bilingual explanations BEFORE speed shortcuts

export const TOPIC_THEORY = {
  // ==========================================
  // QUANTITATIVE APTITUDE
  // ==========================================
  time_and_work: {
    topicId: 'time_and_work',
    title: 'Time, Work, Pipes and Cisterns - Foundation',
    conceptOverview: 'Work is defined as the amount of effort required to complete a designated task. The speed at which a person or machine accomplishes this work is called Efficiency.',
    coreFormulae: [
      { name: 'Fundamental Relation', formula: 'Total Work = Efficiency × Time', explanation: 'If you work for 5 days with an efficiency of 4 units/day, Total Work = 20 units.' },
      { name: 'Efficiency Inversion', formula: 'Efficiency ∝ 1 / Time', explanation: 'If Person A takes half the time of Person B to do the same task, Person A is TWICE as efficient.' },
      { name: 'Combined Work Rate', formula: '1/T_total = 1/T_A + 1/T_B', explanation: 'Traditional fraction method. In speed math, we avoid fractions by assuming Total Work = LCM of individual times.' },
      { name: 'Pipes & Cisterns Inflow/Outflow', formula: 'Net Efficiency = (Eff_Inlet1 + Eff_Inlet2) - Eff_Leak', explanation: 'Inlet pipes do positive work; leak/outlet pipes do negative work.' }
    ],
    stepByStepGuide: [
      'Step 1: Identify individual times taken by all people or pipes.',
      'Step 2: Take the LCM (Lowest Common Multiple) of all times. This LCM is assumed as the "Total Work Units" (e.g. making 60 toy chairs).',
      'Step 3: Calculate each person’s Daily Efficiency = Total Work Units ÷ Individual Days.',
      'Step 4: Add or subtract efficiencies according to who is working together or who is leaking.',
      'Step 5: Divide Remaining Work by the Current Working Group’s Combined Efficiency.'
    ],
    beginnerExample: {
      question: 'Rahul can build a wall in 10 days, while Suresh can build the same wall in 15 days. If both work together, in how many days will the wall be completed?',
      step1: 'Assume Total Work = LCM(10, 15) = 30 bricks.',
      step2: 'Rahul’s 1-day work (Efficiency) = 30 / 10 = 3 bricks/day.',
      step3: 'Suresh’s 1-day work (Efficiency) = 30 / 15 = 2 bricks/day.',
      step4: 'Together in 1 day they lay = 3 + 2 = 5 bricks.',
      step5: 'Total days required = 30 bricks ÷ 5 bricks/day = 6 days. (Clean, zero fractions!)'
    },
    commonBeginnerMistakes: [
      'Adding days directly: "10 days + 15 days = 25 days" — Working together ALWAYS takes LESS time than the fastest individual!',
      'Forgetting that a leak or outlet does NEGATIVE work and must be subtracted.',
      'When a person leaves, forgetting to subtract the work already done before computing the remaining days.'
    ],
    bilingualNote: 'हिंदी समझ: कार्य (Work) = क्षमता (Efficiency) × समय (Time)। यदि A किसी काम को 10 दिन में और B 15 दिन में करता है, तो कुल कार्य को 10 और 15 का LCM यानी 30 मान लें। A रोज़ 3 यूनिट और B 2 यूनिट बनाएगा। दोनों मिलकर रोज़ 5 यूनिट बनाएंगे, तो 30 यूनिट 6 दिन में पूरी होगी।'
  },

  percentage_profit_loss: {
    topicId: 'percentage_profit_loss',
    title: 'Percentage, Profit, Loss & Discount - Foundation',
    conceptOverview: 'Percentage literally means "per hundred" (out of 100). Profit and Loss deal with the relationship between Cost Price (CP), Selling Price (SP), and Marked Price (MP).',
    coreFormulae: [
      { name: 'Percentage Fraction Equivalence', formula: 'Fraction × 100 = Percentage', explanation: '1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16.66%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%.' },
      { name: 'Profit & Loss Base', formula: 'Profit % = (SP - CP)/CP × 100% | Loss % = (CP - SP)/CP × 100%', explanation: 'Profit and Loss are ALWAYS calculated on Cost Price (CP) unless specifically stated on SP.' },
      { name: 'Discount Base', formula: 'Discount = MP - SP | Discount % = (Discount / MP) × 100%', explanation: 'Discount is ALWAYS calculated on Marked Price (MRP).' },
      { name: 'Successive Change', formula: 'Net Change = a + b + (ab)/100', explanation: 'Use + for increase/profit and - for decrease/discount/loss.' }
    ],
    stepByStepGuide: [
      'Step 1: Always fix Cost Price (CP) = 100% or 100 units if actual values are missing.',
      'Step 2: Convert common percentages to fractions instantly (e.g. 25% profit means ratio CP : SP = 4 : 5).',
      'Step 3: If discount is given, Marked Price (MP) is the base (100%). If 20% discount is offered, SP = 80% of MP.',
      'Step 4: For dishonest dealers, profit arises because the merchant pays for less weight while charging for more.'
    ],
    beginnerExample: {
      question: 'A shopkeeper marks an article 30% above CP and offers a discount of 10%. What is his net profit percentage?',
      step1: 'Let Cost Price (CP) = ₹100.',
      step2: 'Marked Price (MP) = 100 + 30 = ₹130.',
      step3: 'Discount = 10% of ₹130 = ₹13.',
      step4: 'Selling Price (SP) = 130 - 13 = ₹117.',
      step5: 'Profit = SP - CP = 117 - 100 = ₹17 on ₹100 CP = 17% Profit.'
    },
    commonBeginnerMistakes: [
      'Calculating discount on CP instead of MP.',
      'Assuming consecutive discounts of 20% and 10% equal 30% (actual net discount is 20 + 10 - 2 = 28%).',
      'Confusing Profit on Selling Price with Profit on Cost Price.'
    ],
    bilingualNote: 'हिंदी समझ: लाभ या हानि हमेशा क्रय मूल्य (CP) पर निकाली जाती है, जबकि छूट (Discount) हमेशा अंकित मूल्य (Marked Price / MRP) पर दी जाती है। 100 मानकर हल करना सबसे सरल तरीका है।'
  },

  simple_compound_interest: {
    topicId: 'simple_compound_interest',
    title: 'Simple & Compound Interest - Foundation',
    conceptOverview: 'Simple Interest (SI) is calculated solely on the principal sum borrowed. Compound Interest (CI) is "interest on interest", where previous interest is added to the principal for subsequent compounding periods.',
    coreFormulae: [
      { name: 'Simple Interest', formula: 'SI = (P × R × T) / 100', explanation: 'SI remains constant every year for a fixed principal.' },
      { name: 'Compound Amount', formula: 'A = P(1 + R/100)^T', explanation: 'Amount after T years compounded annually.' },
      { name: '2-Year CI - SI Difference', formula: 'Diff_2yr = P × (R / 100)²', explanation: 'Difference between CI and SI for 2 years.' },
      { name: '3-Year CI - SI Difference', formula: 'Diff_3yr = P × (R / 100)² × (3 + R / 100)', explanation: 'High-frequency formula asked repeatedly in SSC CGL.' }
    ],
    stepByStepGuide: [
      'Step 1: In SI, if interest is 10% per annum, in 3 years total interest is simply 3 × 10% = 30%.',
      'Step 2: In CI, use the Tree / Ratio Method instead of $(1 + R/100)^n$ to save 60 seconds.',
      'Step 3: For 2 years CI: Use ratio 2 : 1. For 3 years CI: Use ratio 3 : 3 : 1.',
      'Step 4: If compounding is half-yearly, halve the rate (R/2) and double the time (2T).'
    ],
    beginnerExample: {
      question: 'Find the CI on ₹10,000 for 2 years at 10% per annum compounded annually.',
      step1: '1st Year Interest = 10% of 10,000 = ₹1,000.',
      step2: '2nd Year Interest = ₹1,000 + 10% of ₹1,000 = 1,000 + 100 = ₹1,100.',
      step3: 'Total CI = 1,000 + 1,100 = ₹2,100. (Or 2(1000) + 1(100) = ₹2,100).'
    },
    commonBeginnerMistakes: [
      'Using the full textbook formula $(1 + R/100)^T$ for 3 or 4 years, which wastes 2 minutes in calculations.',
      'Forgetting to halve the rate when interest is compounded half-yearly or quarterly.'
    ],
    bilingualNote: 'हिंदी समझ: साधारण ब्याज (SI) हर साल बराबर रहता है। चक्रवृद्धि ब्याज (CI) में ब्याज पर भी ब्याज लगता है। 2 वर्ष के लिए गोल्डन रेश्यो 2 : 1 और 3 वर्ष के लिए 3 : 3 : 1 याद रखें।'
  },

  algebra_advanced: {
    topicId: 'algebra_advanced',
    title: 'Algebra, Polynomials & Symmetrical Functions - Foundation',
    conceptOverview: 'Algebra in SSC CGL focuses heavily on algebraic identities, symmetrical functions, and relations involving $x + 1/x$.',
    coreFormulae: [
      { name: 'Square Identity', formula: 'If x + 1/x = k, then x² + 1/x² = k² - 2', explanation: 'Since (x + 1/x)² = x² + 1/x² + 2.' },
      { name: 'Cube Identity', formula: 'If x + 1/x = k, then x³ + 1/x³ = k³ - 3k', explanation: 'Since (x + 1/x)³ = x³ + 1/x³ + 3(x + 1/x).' },
      { name: 'Minus Cube Identity', formula: 'If x - 1/x = k, then x³ - 1/x³ = k³ + 3k', explanation: 'Notice the positive sign +3k.' },
      { name: 'Cubic Zero Sum', formula: 'If a + b + c = 0, then a³ + b³ + c³ = 3abc', explanation: 'The single most tested algebraic identity in SSC CGL Tier 1 & Tier 2.' }
    ],
    stepByStepGuide: [
      'Step 1: Check if the question is symmetrical in variables (a, b, c). If symmetrical, you can substitute values like a = b = c = 1.',
      'Step 2: Look for the $x + 1/x$ form. Often equations like $x² - 5x + 1 = 0$ can be divided by $x$ to get $x + 1/x = 5$.',
      'Step 3: Verify the conditions before assuming values (e.g. denominators must not become zero).'
    ],
    beginnerExample: {
      question: 'If x + 1/x = 4, find the value of x² + 1/x² and x³ + 1/x³.',
      step1: 'For x² + 1/x²: Formula is k² - 2 = 4² - 2 = 16 - 2 = 14.',
      step2: 'For x³ + 1/x³: Formula is k³ - 3k = 4³ - 3(4) = 64 - 12 = 52. (Takes only 5 seconds!)'
    },
    commonBeginnerMistakes: [
      'Mixing up signs: using $k³ - 3k$ for $x - 1/x$ instead of $k³ + 3k$.',
      'Expanding long polynomials by hand instead of testing variable values (Value Putting method).'
    ],
    bilingualNote: 'हिंदी समझ: बीजगणित में सबसे महत्वपूर्ण फॉर्मूला $x + 1/x = k$ है। वर्ग के लिए $k^2 - 2$ और घन के लिए $k^3 - 3k$ होता है। यदि $a+b+c=0$ हो तो $a^3+b^3+c^3 = 3abc$ होता है।'
  },

  // ==========================================
  // GENERAL INTELLIGENCE & REASONING
  // ==========================================
  syllogism: {
    topicId: 'syllogism',
    title: 'Syllogism (Deductive Logic) - Foundation',
    conceptOverview: 'Syllogism tests logical deduction from given statements. You must accept statements as 100% TRUE even if they conflict with known real-world facts (e.g., "All dogs are cats").',
    coreFormulae: [
      { name: 'Definite vs Possibility', formula: 'Definite Conclusion: Must hold in ALL possible Venn diagrams.', explanation: 'If it fails in even one diagram, the conclusion does not follow.' },
      { name: '"Only a few A are B"', formula: 'Means BOTH: 1. Some A are B (Positive) AND 2. Some A are NOT B (Negative).', explanation: 'Eduquity/New Vendor favorite trick. "All A being B" is IMPOSSIBLE, but "All B being A" IS possible.' },
      { name: 'Either-Or Complementary Rules', formula: 'Pair 1: [Some + No] | Pair 2: [All + Some Not]', explanation: 'Both must be independently false and have identical Subject & Predicate.' }
    ],
    stepByStepGuide: [
      'Step 1: Draw the minimal, most conservative basic Venn diagram representing the statements.',
      'Step 2: For a definite positive conclusion ("Some A are B"), check if overlap is visible in the basic diagram.',
      'Step 3: For a definite negative conclusion ("No A is B"), verify if any possible valid diagram allows them to meet.',
      'Step 4: For possibility conclusions ("can be / is a possibility"), check if you can draw a diagram without violating statement rules.'
    ],
    beginnerExample: {
      question: 'Statements: All Mangoes are Fruits. Some Fruits are Sweet.\nConclusions: I. Some Mangoes are Sweet. II. Some Sweet can be Mangoes.',
      step1: 'Basic Diagram: Mango is inside Fruit. Sweet overlaps Fruit, but does not necessarily touch Mango.',
      step2: 'Conclusion I: "Some Mangoes are Sweet" is not guaranteed to touch, so it is NOT definitely true.',
      step3: 'Conclusion II: Sweet CAN touch Mango without violating any rule, so possibility is TRUE.',
      step4: 'Answer: Only Conclusion II follows.'
    },
    commonBeginnerMistakes: [
      'Assuming that "Some A are B" implies "Some A are not B" in standard logic (in pure logic, "Some" includes "All").',
      'Marking Either-Or on [All + No] (All + No is a contrary pair, NOT complementary!).'
    ],
    bilingualNote: 'हिंदी समझ: सिलोगिज्म में कथनों को शत-प्रतिशत सत्य मानना होता है। "केवल कुछ A, B हैं" का अर्थ है कि कुछ A, B हैं और साथ ही कुछ A, B नहीं हैं। संभावना (Possibility) वाले प्रश्नों में बस यह देखना होता है कि क्या कोई नियम टूटे बिना ऐसा हो सकता है।'
  },

  // ==========================================
  // ENGLISH LANGUAGE & COMPREHENSION
  // ==========================================
  grammar_rules: {
    topicId: 'grammar_rules',
    title: '120 Golden Rules of Grammar - Foundation',
    conceptOverview: 'SSC English grammar tests rule-based sentence mechanics: Subject-Verb Agreement, Pronoun Antecedents, Tense Consistency, Prepositions, and Conditional Clauses.',
    coreFormulae: [
      { name: 'Subject-Verb Agreement', formula: 'Singular Subject → Singular Verb | Plural Subject → Plural Verb', explanation: 'The dog barkS (singular), The dogs bark (plural).' },
      { name: 'Along With / As Well As Rule', formula: 'Subject 1 + along with/as well as + Subject 2 → Verb agrees with Subject 1', explanation: 'The Director along with his actors IS (not are) arriving.' },
      { name: 'Neither... Nor / Either... Or', formula: 'Neither S1 nor S2 → Verb agrees with the NEAREST subject (S2)', explanation: 'Neither the teacher nor the students WERE present.' },
      { name: 'Conditional Trio', formula: 'If + had + V3 → would have + V3', explanation: 'If I had studied, I would have passed.' }
    ],
    stepByStepGuide: [
      'Step 1: Always identify the TRUE subject of the clause first (strip away prepositional phrases).',
      'Step 2: Check whether the subject is singular or plural (words ending in -body, -one like "Everyone", "Nobody" are singular).',
      'Step 3: Check tense harmony across dependent and independent clauses.',
      'Step 4: Check pronoun cases: Subjective (I, he, she, they) vs Objective (me, him, her, them).'
    ],
    beginnerExample: {
      question: 'Identify the error: "Each of the participants (A) / have brought their own (B) / identity card (C) / to the examination hall (D)."',
      step1: 'The true subject is "Each", which is an indefinite singular pronoun.',
      step2: '"of the participants" is merely a modifying prepositional phrase.',
      step3: 'Therefore, the verb must be singular "has", not "have". Also "their" becomes "his/her".',
      step4: 'Error is in Part B: "have brought" → "has brought".'
    },
    commonBeginnerMistakes: [
      'Matching the verb with the nearest noun instead of the true subject.',
      'Using double negatives (e.g. "Hardly did he not come").',
      'Using "then" instead of "than" after "No sooner".'
    ],
    bilingualNote: 'हिंदी समझ: वाक्य का असली कर्ता (Subject) पहचानें। जब दो कर्ता "as well as", "along with", "together with" से जुड़े हों, तो क्रिया पहले कर्ता के अनुसार आती है। "Each", "Every", "Neither" के साथ हमेशा एकवचन (singular) क्रिया आती है।'
  },

  // ==========================================
  // GENERAL AWARENESS & STATIC GK
  // ==========================================
  indian_polity: {
    topicId: 'indian_polity',
    title: 'Indian Polity & Constitution - Foundation',
    conceptOverview: 'The Constitution of India is the supreme legal document adopted on 26 November 1949 and enacted on 26 January 1950. It establishes a federal parliamentary republic with a unitary bias.',
    coreFormulae: [
      { name: 'Fundamental Rights (Part III)', formula: 'Articles 12 to 35 (Justiciable in court)', explanation: 'Art 14 (Equality), Art 19 (6 Freedoms), Art 21 (Life & Liberty - cannot be suspended during Emergency!), Art 32 (Constitutional Remedies).' },
      { name: 'DPSP (Part IV)', formula: 'Articles 36 to 51 (Non-justiciable ideals)', explanation: 'Art 40 (Gram Panchayats), Art 44 (Uniform Civil Code), Art 45 (Early childhood care), Art 50 (Separation of Judiciary from Executive).' },
      { name: 'Fundamental Duties (Part IV-A)', formula: 'Article 51A (11 Duties)', explanation: 'Added by 42nd Amendment 1976 on recommendation of Swaran Singh Committee. 11th duty added by 86th Amendment 2002 (Education 6-14 yrs).' }
    ],
    stepByStepGuide: [
      'Step 1: Master the 12 Schedules using mnemonic "TEARS OF OLD PM".',
      'Step 2: Memorize high-yield Articles: Art 52-62 (President), Art 72 (Pardoning Power), Art 110 (Money Bill), Art 112 (Annual Financial Statement/Budget), Art 123 (Ordinance), Art 324 (Election Commission), Art 352/356/360 (Emergencies).',
      'Step 3: Learn the Landmark Amendments: 42nd (Mini Constitution 1976), 44th (Right to Property removed from FR 1978), 73rd & 74th (Panchayats & Municipalities 1992), 101st (GST 2016).'
    ],
    beginnerExample: {
      question: 'Which Constitutional Amendment Act reduced the voting age from 21 years to 18 years in India?',
      step1: 'Identify the landmark electoral reform.',
      step2: 'The 61st Constitutional Amendment Act, 1988 amended Article 326.',
      step3: 'It came into force in 1989 under the Rajiv Gandhi government.',
      step4: 'Answer: 61st Amendment Act, 1988.'
    },
    commonBeginnerMistakes: [
      'Confusing Fundamental Rights (justiciable, borrowed from USA) with DPSPs (non-justiciable, borrowed from Ireland).',
      'Confusing Money Bill (Art 110 - certified by Lok Sabha Speaker) with Finance Bill.'
    ],
    bilingualNote: 'हिंदी समझ: भारतीय संविधान 26 जनवरी 1950 को लागू हुआ था। मौलिक अधिकार (भाग 3, अनुच्छेद 12-35) अमेरिका से लिए गए हैं। अनुच्छेद 32 को डॉ. भीमराव अंबेडकर ने "संविधान का हृदय और आत्मा" कहा था। 61वें संशोधन द्वारा मतदान की आयु 21 से घटाकर 18 वर्ष की गई थी।'
  },

  ratio_proportion_mixture: {
    topicId: 'ratio_proportion_mixture',
    title: 'Ratio, Proportion & Mixture - Foundation',
    conceptOverview: 'Ratio is a way to compare two or more quantities of the same kind. Proportion states that two ratios are equal. Mixture involves combining two or more ingredients in a certain ratio.',
    coreFormulae: [
      { name: 'Mean Proportional', formula: 'Mean Proportional of a and b = √(ab)', explanation: 'Used when three numbers are in continued proportion a:x :: x:b.' },
      { name: 'Third Proportional', formula: 'Third Proportional of a and b = b²/a', explanation: 'If a, b, c are in continued proportion, c is the third proportional.' },
      { name: 'Fourth Proportional', formula: 'Fourth Proportional of a, b, c = (b×c)/a', explanation: 'If a:b :: c:d, then d is the fourth proportional.' },
      { name: 'Rule of Alligation', formula: '(Cheaper Qty) / (Dearer Qty) = (d - m) / (m - c)', explanation: 'Used to find the ratio in which two ingredients must be mixed to get a mixture of a desired price (m).' }
    ],
    stepByStepGuide: [
      'Step 1: Simplify ratios to their lowest terms (e.g., 4:6 becomes 2:3).',
      'Step 2: To combine ratios like A:B and B:C, make the value of B equal in both.',
      'Step 3: For mixture problems, identify the cost/concentration of the two parts and the mean mixture.',
      'Step 4: Draw the cross-alligation diagram to easily find the required mixing ratio.'
    ],
    beginnerExample: {
      question: 'Two varieties of rice at ₹40/kg and ₹60/kg are mixed to get a mixture worth ₹55/kg. In what ratio were they mixed?',
      step1: 'Identify cheaper price (c) = 40, dearer price (d) = 60, mean price (m) = 55.',
      step2: 'Apply alligation: (d - m) = 60 - 55 = 5.',
      step3: 'Apply alligation: (m - c) = 55 - 40 = 15.',
      step4: 'The ratio is (d - m) : (m - c) = 5 : 15.',
      step5: 'Final answer: 1 : 3.'
    },
    commonBeginnerMistakes: [
      'Not converting quantities to the same unit before taking a ratio.',
      'In alligation, confusing which ratio side corresponds to which ingredient (left difference goes to right, right difference to left).',
      'Forgetting that mean price (m) must always be strictly between cheaper and dearer prices.'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: अनुपात (Ratio) दो समान चीजों की तुलना है। समानुपात (Proportion) तब होता है जब दो अनुपात बराबर हों। मिश्रण (Mixture/Alligation) में हम दो अलग-अलग मूल्य या गुणवत्ता वाली चीजों को मिलाते हैं। यदि ₹40 और ₹60 की चाय को मिलाकर ₹55 की चाय बनानी है, तो Alligation क्रॉस मेथड से 5 और 15 का अंतर निकालकर 1:3 का अनुपात मिलेगा।'
  },

  time_speed_distance_trains: {
    topicId: 'time_speed_distance_trains',
    title: 'Time, Speed, Distance & Trains - Foundation',
    conceptOverview: 'This topic relates how fast an object moves, how far it travels, and how long it takes. Train problems often involve considering the length of the train as part of the total distance.',
    coreFormulae: [
      { name: 'Basic Formula', formula: 'Distance = Speed × Time', explanation: 'The fundamental equation governing all moving objects.' },
      { name: 'Average Speed', formula: 'Avg Speed = (2ab) / (a + b)', explanation: 'Used when a person goes at speed a and returns at speed b over the EXACT SAME distance.' },
      { name: 'Relative Speed (Same Direction)', formula: 'Relative Speed = S1 - S2', explanation: 'When two objects move in the same direction, subtract their speeds.' },
      { name: 'Relative Speed (Opposite Direction)', formula: 'Relative Speed = S1 + S2', explanation: 'When two objects move towards each other, add their speeds.' }
    ],
    stepByStepGuide: [
      'Step 1: Check units carefully! Convert km/hr to m/s by multiplying by 5/18.',
      'Step 2: Convert m/s to km/hr by multiplying by 18/5.',
      'Step 3: For a train crossing a pole or standing man, Distance = Length of Train.',
      'Step 4: For a train crossing a platform or bridge, Distance = Length of Train + Length of Platform.'
    ],
    beginnerExample: {
      question: 'A train 200m long is running at a speed of 72 km/hr. How much time will it take to cross a pole?',
      step1: 'Identify given: Distance (train length) = 200m, Speed = 72 km/hr.',
      step2: 'Convert speed to m/s: 72 × (5/18) = 4 × 5 = 20 m/s.',
      step3: 'Apply formula: Time = Distance / Speed.',
      step4: 'Calculate: Time = 200 / 20.',
      step5: 'Final answer: 10 seconds.'
    },
    commonBeginnerMistakes: [
      'Forgetting to convert km/hr to m/s before dividing with a distance given in meters.',
      'Averaging speeds by simple addition (a+b)/2 instead of using Total Distance / Total Time.',
      'Not adding the length of the bridge/platform to the train\'s length.'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: दूरी = गति × समय। यदि ट्रेन किसी खंभे या आदमी को पार करती है, तो वह केवल अपनी लंबाई के बराबर दूरी तय करती है। यदि वह किसी प्लेटफॉर्म को पार करती है, तो कुल दूरी (ट्रेन + प्लेटफॉर्म) की लंबाई होती है। km/hr को m/s में बदलने के लिए 5/18 से गुणा करें।'
  },

  number_system_simplification: {
    topicId: 'number_system_simplification',
    title: 'Number System & Simplification - Foundation',
    conceptOverview: 'Number system forms the bedrock of arithmetic, dealing with properties of numbers, divisibility, factors, and remainders. Simplification relies on BODMAS rules and basic algebraic identities.',
    coreFormulae: [
      { name: 'BODMAS Rule', formula: 'Brackets, Of, Division, Multiplication, Addition, Subtraction', explanation: 'The strict order of operations for any mathematical expression.' },
      { name: 'Divisibility by 3 and 9', formula: 'Sum of digits must be divisible by 3 or 9', explanation: 'Example: 729 -> 7+2+9=18 (Divisible by 9).' },
      { name: 'Number of Factors', formula: 'If N = p^a × q^b, Factors = (a+1)(b+1)', explanation: 'Where p and q are prime factors.' },
      { name: 'LCM & HCF Relation', formula: 'LCM × HCF = Product of two numbers', explanation: 'Valid only for TWO numbers.' }
    ],
    stepByStepGuide: [
      'Step 1: Always solve expressions strictly following BODMAS. Deal with "Of" before division.',
      'Step 2: For unit digit problems, find the cycle of the last digit (powers usually cycle every 4 steps).',
      'Step 3: To find LCM, take the highest powers of all prime factors present.',
      'Step 4: To find HCF, take the lowest powers of common prime factors.'
    ],
    beginnerExample: {
      question: 'Find the unit digit of 7^45.',
      step1: 'The powers of 7 repeat in a cycle of 4: (7, 9, 3, 1).',
      step2: 'Divide the exponent 45 by 4 to find the remainder.',
      step3: '45 ÷ 4 gives a remainder of 1.',
      step4: 'The unit digit is the 1st number in the cycle.',
      step5: 'Final answer: 7.'
    },
    commonBeginnerMistakes: [
      'Doing Addition before Multiplication if they appear out of order without brackets.',
      'Confusing "Of" (which acts like multiplication but has higher precedence) with regular multiplication.',
      'Assuming the LCM × HCF rule works for three or more numbers (it doesn\'t).'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: सरलीकरण में हमेशा BODMAS का पालन करें। किसी भी संख्या की घात (power) का इकाई अंक (unit digit) निकालने के लिए घात को 4 से भाग दें और शेषफल (remainder) का उपयोग करें। दो संख्याओं का गुणनफल हमेशा उनके HCF और LCM के गुणनफल के बराबर होता है।'
  },

  average_and_ages: {
    topicId: 'average_and_ages',
    title: 'Average & Problem on Ages - Foundation',
    conceptOverview: 'Average represents the central or middle value of a dataset. Problems on ages are basically linear equations based on time gaps between past, present, and future.',
    coreFormulae: [
      { name: 'Basic Average', formula: 'Average = Sum of Observations / Number of Observations', explanation: 'The foundational definition of average/mean.' },
      { name: 'Sum Calculation', formula: 'Sum = Average × Number of Observations', explanation: 'Very useful when an item is added or removed from a group.' },
      { name: 'Weighted Average', formula: 'Aw = (N1×A1 + N2×A2) / (N1 + N2)', explanation: 'Used when mixing two groups with different averages.' },
      { name: 'Age Gap Constant', formula: 'Difference in ages of two people is always constant', explanation: 'If A is 5 years older than B today, A will be 5 years older than B 10 years later.' }
    ],
    stepByStepGuide: [
      'Step 1: In average replacement problems, if new person > old person, average increases.',
      'Step 2: In age problems, assign the present age as "x" and "y".',
      'Step 3: For "5 years ago", subtract 5 (x-5). For "5 years later", add 5 (x+5).',
      'Step 4: Equate the given ratio or condition to solve for x.'
    ],
    beginnerExample: {
      question: 'The average age of 10 students is 15 years. If the teacher is included, the average becomes 16. What is the teacher\'s age?',
      step1: 'Total age of 10 students = 10 × 15 = 150 years.',
      step2: 'Total people now = 11. New average = 16.',
      step3: 'Total age of 11 people = 11 × 16 = 176 years.',
      step4: 'Teacher\'s age = New total - Old total.',
      step5: 'Final answer: 176 - 150 = 26 years.'
    },
    commonBeginnerMistakes: [
      'Forgetting to multiply the new average by the NEW total number of people.',
      'In age problems, adding years to only one person\'s age instead of both (e.g., in 5 years, both A and B get 5 years older).',
      'Assuming the ratio of ages remains the same over time (it changes!).'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: औसत (Average) का अर्थ है सबको बराबर-बराबर बांटना। आयु (Ages) के सवालों में ध्यान रखें कि दो लोगों की उम्र का अंतर हमेशा समान रहता है। यदि 5 साल बाद की बात हो रही है, तो दोनों की उम्र में 5-5 साल जुड़ेंगे।'
  },

  coding_decoding: {
    topicId: 'coding_decoding',
    title: 'Coding-Decoding - Foundation',
    conceptOverview: 'Coding-Decoding tests your ability to recognize patterns in letters and numbers. It relies heavily on knowing the alphabetical order of English letters both forwards and backwards.',
    coreFormulae: [
      { name: 'EJOTY Trick', formula: 'E=5, J=10, O=15, T=20, Y=25', explanation: 'A quick way to remember letter positions.' },
      { name: 'Opposite Pairs (Sum=27)', formula: 'A-Z, B-Y, C-X... M-N', explanation: 'The sum of the numerical values of opposite letters is always 27 (e.g., A(1) + Z(26) = 27).' },
      { name: 'Shift Coding', formula: '+n or -n to each letter', explanation: 'Adding or subtracting a fixed number to letter positions (e.g., +2, +3, +4).' },
      { name: 'Reverse Pattern', formula: 'First letter becomes last', explanation: 'The word is reversed before or after shifting letters.' }
    ],
    stepByStepGuide: [
      'Step 1: Always write the numerical value of the given word’s letters above them.',
      'Step 2: Check for a direct shift: +1, -1, +2, etc.',
      'Step 3: If direct shift doesn\'t work, check if opposite pairs (Sum = 27) are used.',
      'Step 4: Check if the word pattern is reversed or divided into halves and crossed.'
    ],
    beginnerExample: {
      question: 'If "APPLE" is coded as "BQQMF", how is "MANGO" coded?',
      step1: 'Analyze APPLE -> BQQMF.',
      step2: 'A(+1)=B, P(+1)=Q, P(+1)=Q, L(+1)=M, E(+1)=F.',
      step3: 'The rule is +1 for every letter.',
      step4: 'Apply to MANGO: M(+1)=N, A(+1)=B, N(+1)=O, G(+1)=H, O(+1)=P.',
      step5: 'Final answer: NBOHP.'
    },
    commonBeginnerMistakes: [
      'Counting on fingers instead of memorizing the numerical values (EJOTY).',
      'Missing the crossing/reverse pattern and assuming the code is random.',
      'Forgetting that opposite pairs always add up to 27.'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: कोडिंग-डिकोडिंग के लिए A से Z तक के नंबर याद होना बहुत जरूरी है। EJOTY (5, 10, 15, 20, 25) याद रखें। विपरीत अक्षरों (Opposite letters) का जोड़ हमेशा 27 होता है (जैसे A=1, Z=26, 1+26=27)। पहले सीधा (+1, +2) पैटर्न चेक करें, फिर क्रॉस पैटर्न।'
  },

  blood_relations: {
    topicId: 'blood_relations',
    title: 'Blood Relations - Foundation',
    conceptOverview: 'Blood relations evaluate your ability to trace family lineage. Drawing a clear family tree using specific symbols is crucial to avoid confusion between genders and generations.',
    coreFormulae: [
      { name: 'Gender Symbols', formula: 'Box (□) = Male, Circle (○) = Female', explanation: 'Always use distinct shapes (or + / -) to mark gender.' },
      { name: 'Generation Lines', formula: 'Vertical line = Parent/Child, Horizontal line = Sibling', explanation: 'Keeps generations clear (Grandparents top, parents middle, children bottom).' },
      { name: 'Marriage Symbol', formula: 'Double line (=) or overlapping rings', explanation: 'Distinguishes a married couple from siblings.' },
      { name: 'Pointing Trick', formula: 'Break the sentence at "my"', explanation: 'Start solving from the speaker\'s perspective backwards.' }
    ],
    stepByStepGuide: [
      'Step 1: Read the statement piece by piece and draw the tree.',
      'Step 2: Assign gender immediately. If gender is unknown (e.g., "A is the child of B"), leave it blank.',
      'Step 3: Connect family members using the standard lines (vertical/horizontal/double).',
      'Step 4: Carefully read the final question: "How is A related to B?" means what B calls A.'
    ],
    beginnerExample: {
      question: 'A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?',
      step1: 'A is male (brother), draw a box for A, horizontal line to B.',
      step2: 'B is female (sister), draw a circle for B, horizontal line to C.',
      step3: 'C is male (father), draw a box for C, vertical line down to D.',
      step4: 'A, B, and C are siblings. C is D\'s father. Therefore, A is the father\'s brother.',
      step5: 'Final answer: A is the Uncle (Paternal) of D.'
    },
    commonBeginnerMistakes: [
      'Assuming gender based on names (e.g., assuming "Kamal" is male without evidence).',
      'Answering the reverse relation (e.g., saying Nephew instead of Uncle).',
      'Getting confused in "Pointing to a photograph" questions by not starting at "my".'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: रक्त संबंध (Blood Relation) में हमेशा Family Tree बनाएं। पुरुषों के लिए बॉक्स (□) और महिलाओं के लिए वृत्त (○) का उपयोग करें। भाई-बहन के लिए सिंगल लाइन (—) और पति-पत्नी के लिए डबल लाइन (=) बनाएं। कभी भी सिर्फ नाम से किसी का जेंडर (Gender) तय न करें।'
  },

  vocabulary_roots_mnemonics: {
    topicId: 'vocabulary_roots_mnemonics',
    title: 'Vocabulary, Roots & Mnemonics - Foundation',
    conceptOverview: 'Memorizing thousands of English words is impossible. The root word method and mnemonics (memory tricks) help deduce the meaning of unfamiliar words logically.',
    coreFormulae: [
      { name: 'Root Words (Etymology)', formula: 'Prefix + Root + Suffix', explanation: 'E.g., In- (not) + cred (believe) + -ible (able) = Incredible (unbelievable).' },
      { name: 'Phonetic Mnemonics', formula: 'Sound-alike associations', explanation: 'E.g., "Assiduous" sounds like "Ass" (donkey) - hardworking.' },
      { name: 'Visual Association', formula: 'Create a bizarre mental image', explanation: 'E.g., "Gregarious" -> "Greg" is having a party; meaning sociable.' },
      { name: 'Tone Analysis', formula: 'Positive / Negative / Neutral', explanation: 'Helps in elimination. Words with "Mal-" are negative; "Bene-" are positive.' }
    ],
    stepByStepGuide: [
      'Step 1: When seeing a new word, look for familiar prefixes (un-, dis-, pro-, anti-).',
      'Step 2: Identify the core root (e.g., "dict" = speak, "phil" = love, "phobia" = fear).',
      'Step 3: Look at the suffix to determine the part of speech (-tion = noun, -ous = adjective).',
      'Step 4: Use the word in a simple sentence or associate it with a funny Hindi/English phonetic trick.'
    ],
    beginnerExample: {
      question: 'Find the meaning of the word "Somnambulist".',
      step1: 'Break it down: "Somn" (root) means sleep.',
      step2: '"Ambul" (root) means walk (like ambulance moves around).',
      step3: '"-ist" (suffix) means a person who does something.',
      step4: 'Combine them: A person who walks in their sleep.',
      step5: 'Final answer: Sleepwalker.'
    },
    commonBeginnerMistakes: [
      'Trying to rote-memorize the dictionary (A-Z) without understanding word roots.',
      'Ignoring the tone of the word when stuck between two options in a test.',
      'Not paying attention to the suffix, leading to confusing a noun with an adjective.'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: रट्टा मारने के बजाय Root Words (मूल शब्द) समझें। जैसे "Cide" का अर्थ हत्या होता है, तो Suicide, Homicide, Patricide का अर्थ आसानी से समझ आ जाएगा। शब्दों को मजाकिया ट्रिक (Mnemonics) बनाकर याद करें, जैसे "Diligent" (Dilli के Gent) = मेहनती (Hardworking)।'
  },

  trigonometry_heights: {
    topicId: 'trigonometry_heights',
    title: 'Trigonometry & Heights/Distances - Foundation',
    conceptOverview: 'Trigonometry deals with the relationship between angles and sides of a right-angled triangle. Height & Distance applies these ratios to solve real-world problems involving elevation and depression.',
    coreFormulae: [
      { name: 'Basic Ratios (SOH CAH TOA)', formula: 'sin=P/H, cos=B/H, tan=P/B', explanation: 'Pandit Badri Prasad / Har Har Bole.' },
      { name: 'Pythagorean Identities', formula: 'sin²θ + cos²θ = 1', explanation: 'Also sec²θ - tan²θ = 1, and cosec²θ - cot²θ = 1.' },
      { name: 'Complementary Angles', formula: 'sin(90-θ) = cosθ, tan(90-θ) = cotθ', explanation: 'Very common in SSC exams.' },
      { name: 'Standard H&D Ratios', formula: '30°-60°-90° Triangle Ratio -> 1 : √3 : 2', explanation: 'Opposite 30° is 1, opposite 60° is √3, opposite 90° is 2.' }
    ],
    stepByStepGuide: [
      'Step 1: For Heights and Distances, always draw a clear right-angled triangle first.',
      'Step 2: Identify the given angle of elevation (looking up) or depression (looking down - equal to elevation by alternate angles).',
      'Step 3: Decide which trig ratio connects the known side to the unknown side (usually tanθ is used).',
      'Step 4: Use the 30-60-90 or 45-45-90 standard ratios to avoid long calculations.'
    ],
    beginnerExample: {
      question: 'A ladder leaning against a wall makes an angle of 60° with the ground. If the foot of the ladder is 5m away from the wall, find the length of the ladder.',
      step1: 'Draw triangle: Base (B) = 5m, Angle = 60°, Hypotenuse (H, ladder length) = ?',
      step2: 'We need the relation between Base and Hypotenuse -> use cosθ.',
      step3: 'cos(60°) = B / H.',
      step4: '1/2 = 5 / H.',
      step5: 'Final answer: H = 10m.'
    },
    commonBeginnerMistakes: [
      'Confusing the Perpendicular and Base (Perpendicular is always OPPOSITE the angle in question).',
      'Not memorizing the standard trigonometric table for 0, 30, 45, 60, and 90 degrees.',
      'In Height & Distance, drawing the angle of depression inside the triangle incorrectly.'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: त्रिकोणमिति समकोण त्रिभुज (Right-angled triangle) पर आधारित है। लंब (Perpendicular), आधार (Base) और कर्ण (Hypotenuse) को पहचानना सीखें। "लाल बटे कक्का" (LAL/KKA) ट्रिक से sin, cos, tan याद रखें। ऊंचाई और दूरी (Height & Distance) के सवालों में चित्र बनाना सबसे अहम है।'
  },

  geometry_triangles_circles: {
    topicId: 'geometry_triangles_circles',
    title: 'Geometry: Triangles & Circles - Foundation',
    conceptOverview: 'Geometry heavily features theorems about triangles (similarity, congruency, centers) and circles (chords, tangents, cyclic quadrilaterals). Visualization is key.',
    coreFormulae: [
      { name: 'Triangle Centers', formula: 'Incenter (Angle bisectors), Centroid (Medians), Orthocenter (Altitudes), Circumcenter (Perpendicular bisectors)', explanation: 'Centroid divides median in 2:1 ratio.' },
      { name: 'Similarity Property', formula: 'Ratio of Areas = (Ratio of corresponding sides)²', explanation: 'If ∆ABC ~ ∆PQR and sides are 1:2, areas are 1:4.' },
      { name: 'Circle Tangent-Secant', formula: 'PT² = PA × PB', explanation: 'Where PT is tangent and PAB is a secant line.' },
      { name: 'Cyclic Quadrilateral', formula: 'Opposite angles sum to 180°', explanation: 'A quadrilateral with all 4 vertices on a circle.' }
    ],
    stepByStepGuide: [
      'Step 1: Always draw a neat diagram based on the question.',
      'Step 2: Check for Alternate Segment Theorem when a tangent and a triangle are present.',
      'Step 3: Look for right angles (angle in a semicircle is 90°, tangent is perpendicular to radius).',
      'Step 4: Use Pythagoras theorem whenever a right triangle is formed (e.g., chord and distance from center).'
    ],
    beginnerExample: {
      question: 'In a circle, a chord of length 16 cm is at a distance of 6 cm from the center. Find the radius of the circle.',
      step1: 'Draw a circle with center O, chord AB = 16, and perpendicular drop OM = 6.',
      step2: 'The perpendicular from the center bisects the chord. So, AM = MB = 8 cm.',
      step3: 'Triangle OMA is a right-angled triangle. OM = 6, AM = 8, OA = Radius.',
      step4: 'Apply Pythagoras: OA² = OM² + AM² = 6² + 8² = 36 + 64 = 100.',
      step5: 'Final answer: Radius OA = 10 cm.'
    },
    commonBeginnerMistakes: [
      'Confusing the Incenter formula (90 + A/2) with the Circumcenter formula (2A).',
      'Forgetting that the perpendicular from the center BISECTS the chord.',
      'Assuming the diagonals of any standard quadrilateral (like rectangle) bisect at 90° (only square and rhombus do).'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: ज्यामिति में प्रमेय (Theorems) सबसे महत्वपूर्ण हैं। त्रिभुज के चार केंद्र (Centroid, Incenter, Orthocenter, Circumcenter) के गुण याद रखें। वृत्त में, केंद्र से जीवा (Chord) पर डाला गया लंब जीवा को दो बराबर भागों में बांटता है। चक्रीय चतुर्भुज (Cyclic Quadrilateral) के आमने-सामने के कोणों का योग 180° होता है।'
  },

  indian_geography: {
    topicId: 'indian_geography',
    title: 'Indian Geography - Foundation',
    conceptOverview: 'Indian Geography covers the physical features (Himalayas, plains, plateaus), river systems, climate (monsoon), and natural resources (soils, vegetation) of India.',
    coreFormulae: [
      { name: 'Himalayan Divisions', formula: 'North to South: Trans, Greater (Himadri), Lesser (Himachal), Shiwaliks', explanation: 'Important for mountain passes and peaks.' },
      { name: 'River Systems', formula: 'Himalayan (Perennial) vs Peninsular (Seasonal)', explanation: 'Ganga, Indus, Brahmaputra vs Godavari, Krishna, Cauvery, Narmada.' },
      { name: 'Indian Monsoons', formula: 'South-West Monsoon (Summer) vs North-East Monsoon (Winter)', explanation: 'SW brings rain to most of India; NE brings rain mainly to Coromandel Coast (Tamil Nadu).' },
      { name: 'Major Soils', formula: 'Alluvial (Most fertile, plains), Black (Cotton, Deccan), Red (Iron-rich), Laterite (Leached, bricks)', explanation: 'Soil types dictate agriculture.' }
    ],
    stepByStepGuide: [
      'Step 1: Memorize India\'s neighbors, states, and coastlines using a blank political map.',
      'Step 2: Trace river paths. Know their origin (e.g., Godavari from Trimbakeshwar) and tributaries (e.g., Yamuna is Ganga\'s longest).',
      'Step 3: Understand the difference between West-flowing (Narmada, Tapi - form estuaries) and East-flowing (Mahanadi, Godavari - form deltas) peninsular rivers.',
      'Step 4: Correlate soils with crops (e.g., Black soil = Regur = Cotton).'
    ],
    beginnerExample: {
      question: 'Which river is known as the "Sorrow of Bihar" and why?',
      step1: 'Identify rivers flowing through Bihar (Ganga, Kosi, Son).',
      step2: 'Recall which river changes its course frequently, causing massive floods.',
      step3: 'The Kosi river originates in Nepal and brings huge sediment loads.',
      step4: 'This causes blockages and frequent shifting of its path.',
      step5: 'Final answer: Kosi River.'
    },
    commonBeginnerMistakes: [
      'Confusing West-flowing rivers with East-flowing rivers in South India.',
      'Thinking the Himalayas are old mountains (they are young fold mountains, Aravalis are the old ones).',
      'Forgetting that Tamil Nadu receives most of its rainfall during winter (Retreating Monsoon).'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: भारत का भूगोल मैप (Map) के जरिए पढ़ें। हिमालय की चोटियां, प्रमुख नदियां (गंगा, ब्रह्मपुत्र, गोदावरी) और उनके उद्गम स्थल याद रखें। पश्चिमी घाट और पूर्वी घाट का मिलन नीलगिरि पहाड़ियों पर होता है। काली मिट्टी (Black soil) कपास (Cotton) के लिए सर्वोत्तम है और जलोढ़ मिट्टी (Alluvial) सबसे उपजाऊ है।'
  },

  modern_history: {
    topicId: 'modern_history',
    title: 'Modern Indian History - Foundation',
    conceptOverview: 'Modern History for SSC focuses on the timeline from the decline of Mughals/Advent of Europeans (1757) to India\'s Independence (1947), with heavy emphasis on the Gandhian Era and Indian National Congress.',
    coreFormulae: [
      { name: 'Revolt of 1857', formula: 'Centers and Leaders', explanation: 'Delhi (Bahadur Shah II), Kanpur (Nana Saheb), Lucknow (Begum Hazrat Mahal), Jhansi (Rani Laxmibai).' },
      { name: 'INC Sessions', formula: 'Important Congress Sessions', explanation: '1885 (1st Bombay), 1907 (Surat Split), 1916 (Lucknow Pact), 1924 (Belgaum - Gandhi), 1929 (Lahore - Purna Swaraj).' },
      { name: 'Gandhian Movements', formula: 'NCM (1920) -> CDM (1930) -> QIM (1942)', explanation: 'Non-Cooperation, Civil Disobedience (Salt March), Quit India.' },
      { name: 'Key Acts/Reforms', formula: '1909 (Minto-Morley), 1919 (Montagu-Chelmsford), 1935 (Govt of India Act)', explanation: '1909 introduced separate electorates, 1919 introduced diarchy.' }
    ],
    stepByStepGuide: [
      'Step 1: Build a mental timeline. Never memorize dates randomly. Link events causally (e.g., Jallianwala Bagh led to Non-Cooperation Movement).',
      'Step 2: Focus on Governor-Generals and Viceroys (Dalhousie - Railways/Doctrine of Lapse; Curzon - Partition of Bengal).',
      'Step 3: Memorize socio-religious reform movements (Brahmo Samaj - Raja Ram Mohan Roy; Arya Samaj - Dayanand Saraswati).',
      'Step 4: Learn famous slogans and who gave them ("Do or Die", "Inquilab Zindabad").'
    ],
    beginnerExample: {
      question: 'In which year did the partition of Bengal take place, and who was the Viceroy?',
      step1: 'Recall the early nationalist phase events.',
      step2: 'The partition was announced to divide the Hindu-Muslim unity in Bengal.',
      step3: 'The Viceroy responsible was Lord Curzon.',
      step4: 'The Swadeshi movement was started in protest.',
      step5: 'Final answer: 1905, Lord Curzon.'
    },
    commonBeginnerMistakes: [
      'Mixing up the dates of the three Round Table Conferences (1930, 1931, 1932).',
      'Confusing the founders of various organizations (e.g., Forward Bloc by Subhas Chandra Bose, Swaraj Party by CR Das & Motilal Nehru).',
      'Thinking Gandhi attended all Round Table Conferences (He only attended the Second one in 1931).'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: आधुनिक इतिहास को एक कहानी की तरह समझें। 1857 की क्रांति के मुख्य केंद्र और नेता याद करें। भारतीय राष्ट्रीय कांग्रेस (INC) के महत्वपूर्ण अधिवेशन (जैसे 1929 लाहौर अधिवेशन - पूर्ण स्वराज) परीक्षा में बार-बार आते हैं। गांधीजी के तीन प्रमुख आंदोलन (असहयोग, सविनय अवज्ञा, भारत छोड़ो) का क्रम और वर्ष (1920, 1930, 1942) याद रखें।'
  },

  indian_economy: {
    topicId: 'indian_economy',
    title: 'Indian Economy & Basics - Foundation',
    conceptOverview: 'Indian Economy questions focus on macroeconomic indicators (GDP, Inflation), banking systems (RBI, Repo Rate), Five Year Plans, and budget terminology.',
    coreFormulae: [
      { name: 'National Income', formula: 'GDP, GNP, NNP', explanation: 'GDP is domestic production. GNP includes net income from abroad. NNP = GNP - Depreciation.' },
      { name: 'RBI Monetary Policy', formula: 'Repo Rate, Reverse Repo, CRR, SLR', explanation: 'Repo Rate: RBI lends to banks. CRR: Cash banks must keep with RBI. Increasing rates controls inflation.' },
      { name: 'Fiscal Policy', formula: 'Government Receipts and Expenditure', explanation: 'Fiscal Deficit = Total Expenditure - Total Receipts (excluding borrowings).' },
      { name: 'Inflation', formula: 'WPI vs CPI', explanation: 'Wholesale Price Index (goods only) vs Consumer Price Index (goods + services). RBI targets CPI.' }
    ],
    stepByStepGuide: [
      'Step 1: Understand sectors of economy: Primary (Agriculture/Mining), Secondary (Manufacturing), Tertiary (Services).',
      'Step 2: Memorize the objectives of major Five Year Plans (1st: Agriculture, 2nd: Heavy Industry, 5th: Poverty Eradication/Garibi Hatao).',
      'Step 3: Understand how RBI controls inflation: By increasing repo rate, loans become expensive, money supply falls, inflation decreases.',
      'Step 4: Learn basic budget terms like Revenue Deficit, Primary Deficit, and Direct vs Indirect Taxes (GST).'
    ],
    beginnerExample: {
      question: 'If the RBI increases the Cash Reserve Ratio (CRR), what happens to the money supply in the economy?',
      step1: 'CRR is the portion of deposits banks must keep with RBI.',
      step2: 'If CRR increases, banks have to lock up more cash.',
      step3: 'Banks will have less money left to give out as loans to the public.',
      step4: 'Fewer loans mean less spending power in the market.',
      step5: 'Final answer: The money supply in the economy decreases (helps control inflation).'
    },
    commonBeginnerMistakes: [
      'Confusing Fiscal Policy (handled by Government/Ministry of Finance) with Monetary Policy (handled by RBI).',
      'Thinking GDP and GNP are the same thing (GNP accounts for international income).',
      'Assuming high inflation is good (it reduces purchasing power, though mild inflation is healthy).'
    ],
    bilingualNote: 'सरल हिंदी में अवधारणा: अर्थशास्त्र में RBI की भूमिका बहुत अहम है। यदि महंगाई (Inflation) बढ़ती है, तो RBI रेपो रेट (Repo Rate) बढ़ा देता है जिससे लोन महंगे हो जाते हैं। जीडीपी (GDP) का मतलब देश की सीमा के अंदर उत्पादित सभी चीजों का मूल्य है। पंचवर्षीय योजनाओं (Five Year Plans) के मुख्य उद्देश्य जरूर याद करें, जैसे पहली योजना कृषि और दूसरी भारी उद्योगों पर थी।'
  }
};
