// Comprehensive General Awareness & Static GK Syllabus (Covering all 11 Core Subjects & Modules)
// Covering Polity, Ancient & Medieval History, Modern History, Geography, Economy, Physics, Chemistry, Biology, Static GK, and Current Affairs

export const GK_SYLLABUS = {
  subjectId: 'gk',
  subjectName: 'General Awareness & Static GK',
  totalTopics: 11,
  totalTypesCataloged: 35,
  topics: [
    {
      id: 'indian_polity',
      name: 'Indian Polity & Constitution (High-Yield Articles)',
      category: 'Polity',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 to 4 Questions',
      typesCount: 3,
      overview: 'Highest ROI in General Awareness. Fundamental Rights, DPSP, Writs, Emergency, and the 12 Schedules.',
      types: [
        {
          typeNumber: 1,
          title: 'The 12 Schedules Mnemonic ("TEARS OF OLD PM")',
          identificationBlueprint: 'Question asks: "Which schedule of the Indian Constitution deals with..."',
          standardMethod: 'Memorizing disconnected schedule numbers.',
          proShortcut: 'Universal Mnemonic: "TEARS OF OLD PM":\n- T: Territories & States (Schedule 1)\n- E: Emoluments & Salaries (Schedule 2)\n- A: Affirmations & Oaths (Schedule 3)\n- R: Rajya Sabha seat allocation (Schedule 4)\n- S: Scheduled Areas administration (Schedule 5)\n- O: Other Tribal Areas - Assam, Meghalaya, Tripura, Mizoram (Schedule 6 - "AMTM")\n- F: Federal Lists - Union, State, Concurrent (Schedule 7)\n- O: Official Languages - 22 languages (Schedule 8)\n- L: Land Reforms & Validation of Acts (Schedule 9 - 1st Amendment 1951)\n- D: Defection Anti-Defection Law (Schedule 10 - 52nd Amendment 1985)\n- P: Panchayats (Schedule 11 - 73rd Amendment 1992, 29 subjects)\n- M: Municipalities (Schedule 12 - 74th Amendment 1992, 18 subjects).',
          workedExample: {
            question: 'The Anti-Defection Law was incorporated into which Schedule of the Indian Constitution by the 52nd Constitutional Amendment Act, 1985?',
            options: ['10th Schedule', '9th Schedule', '11th Schedule', '8th Schedule'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'In TEARS OF OLD PM: Letter "D" (Defection) corresponds to position 10 = 10th Schedule.',
            examinerTrap: 'Confusing 9th Schedule (Land Reforms) with 10th Schedule.'
          },
          practiceQuestions: [
            {
              q: 'Which Schedule of the Indian Constitution contains provisions regarding the administration of tribal areas in Assam, Meghalaya, Tripura, and Mizoram?',
              options: ['6th Schedule', '5th Schedule', '4th Schedule', '7th Schedule'],
              correctIndex: 0,
              hint: 'In TEARS OF OLD PM: 6th letter is O (Other Tribal areas - AMTM states).'
            },
            {
              q: 'The division of legislative powers between the Union and the States into three lists is specified in which Schedule?',
              options: ['7th Schedule', '8th Schedule', '6th Schedule', '9th Schedule'],
              correctIndex: 0,
              hint: '7th letter is F (Federal lists: Union, State, Concurrent).'
            }
          ]
        },
        {
          typeNumber: 2,
          title: 'Fundamental Rights & Writs (Articles 14 to 32)',
          identificationBlueprint: 'Matching Article to Right or Writ to meaning.',
          standardMethod: 'Reading full articles without groupings.',
          proShortcut: 'Classification:\n- Art 14: Equality before law\n- Art 15: Non-discrimination (religion, race, caste, sex, place of birth)\n- Art 16: Equal opportunity in public employment\n- Art 17: Abolition of Untouchability ("17 = Khatra")\n- Art 18: Abolition of Titles\n- Art 19: 6 Freedoms\n- Art 21: Right to Life and Personal Liberty (cannot be suspended during emergency!)\n- Art 32: Constitutional Remedies (Heart & Soul - Dr. Ambedkar).\nWrits Mnemonic "HPMCQ":\n- Habeas Corpus: "To have the body"\n- Mandamus: "We Command"\n- Prohibition: "To forbid (higher court to lower court)"\n- Certiorari: "To be certified / quash order"\n- Quo-Warranto: "By what authority/warrant".',
          workedExample: {
            question: 'Which writ is issued by the Supreme Court to a public official who has failed to perform a mandatory statutory duty?',
            options: ['Mandamus', 'Habeas Corpus', 'Quo-Warranto', 'Certiorari'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Mandamus = "We Command" (issued to compel public duty).',
            examinerTrap: 'Choosing Quo-Warranto (which is to inquire into the legality of holding public office, not performing duty).'
          },
          practiceQuestions: [
            {
              q: 'Which Article of the Indian Constitution guarantees protection against arrest and detention in certain cases?',
              options: ['Article 22', 'Article 20', 'Article 21', 'Article 19'],
              correctIndex: 0,
              hint: 'Article 20 is protection in respect of conviction for offences, Article 22 is protection against arrest.'
            }
          ]
        }
      ]
    },

    {
      id: 'ancient_medieval_history',
      name: 'Ancient & Medieval History (Harappa to Mughals)',
      category: 'History',
      highYieldRating: 5,
      avgQuestionsPerPaper: '2 to 3 Questions',
      typesCount: 3,
      overview: 'Indus Valley civilization, Buddhist Councils, Mauryan/Gupta emperors, Delhi Sultanate dynasties, and Mughal rulers.',
      types: [
        {
          typeNumber: 1,
          title: 'The 4 Buddhist Councils (Venues & Patrons Mnemonic: "RAVA PAKA / AKAK")',
          identificationBlueprint: 'Questions asking for Chairman, Patron King, or Venue of Buddhist Councils.',
          standardMethod: 'Rote memorization leading to council confusion.',
          proShortcut: 'Double Mnemonic:\n- Places ("RAVA PAKA"): 1st: Rajgriha, 2nd: Vaishali, 3rd: Pataliputra, 4th: Kundalvana (Kashmir).\n- Kings ("AKAK"): 1st: Ajatashatru (Haryanka), 2nd: Kalashoka (Shishunaga), 3rd: Ashoka (Maurya), 4th: Kanishka (Kushan).\n- Note: In 4th Council (Kashmir), Buddhism split into Hinayana and Mahayana under Vasumitra & Ashvaghosha.',
          workedExample: {
            question: 'Under whose royal patronage was the Third Buddhist Council convened at Pataliputra in 250 BCE?',
            options: ['Ashoka', 'Kanishka', 'Ajatashatru', 'Kalashoka'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Places = RAVA PAKA (3rd is P = Pataliputra); Kings = AKAK (3rd is A = Ashoka).',
            examinerTrap: 'Selecting Kanishka (who patronized the 4th Council in Kashmir).'
          },
          practiceQuestions: [
            {
              q: 'In which Buddhist Council did the formal split of Buddhism into Hinayana and Mahayana take place?',
              options: ['Fourth Council (Kashmir)', 'Third Council (Pataliputra)', 'Second Council (Vaishali)', 'First Council (Rajgriha)'],
              correctIndex: 0,
              hint: '4th Council under Kanishka at Kundalvana.'
            }
          ]
        },
        {
          typeNumber: 2,
          title: 'Delhi Sultanate Dynasties Chronology ("GUL KHIL-TO SAYA")',
          identificationBlueprint: 'Arranging Slave, Khalji, Tughlaq, Sayyid, Lodi dynasties or founders in order.',
          standardMethod: 'Confusing Khilji and Tughlaq order.',
          proShortcut: 'Universal Chronology Mnemonic: "GUL KHIL TO SA LO":\n1. Ghulam / Mamluk (1206–1290) - Founder: Qutb-ud-din Aibak\n2. Khilji (1290–1320) - Founder: Jalal-ud-din Khilji; Famous: Alauddin Khilji (Market reforms)\n3. Tughlaq (1320–1414) - Founder: Ghiyasuddin Tughlaq; Longest reigning dynasty!\n4. Sayyid (1414–1451) - Founder: Khizr Khan\n5. Lodi (1451–1526) - Founder: Bahlul Lodi; Ibrahim Lodi defeated in 1st Battle of Panipat (1526).',
          workedExample: {
            question: 'Which dynasty ruled the Delhi Sultanate for the longest duration?',
            options: ['Tughlaq Dynasty (94 years)', 'Mamluk Dynasty', 'Khilji Dynasty', 'Lodi Dynasty'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Tughlaq dynasty ruled 1320-1414 (~94 years), the longest of all 5 dynasties.',
            examinerTrap: 'Selecting Slave dynasty (ruled 84 years).'
          },
          practiceQuestions: [
            {
              q: 'Who among the following Sultanate rulers introduced the Market Control Regulations (Dakhil-i-Mandi)?',
              options: ['Alauddin Khilji', 'Muhammad bin Tughlaq', 'Balban', 'Feroz Shah Tughlaq'],
              correctIndex: 0,
              hint: 'Alauddin Khilji established strict price controls for commodities and army upkeep.'
            }
          ]
        }
      ]
    },

    {
      id: 'modern_history',
      name: 'Modern Indian History & National Movement (1857–1947)',
      category: 'History',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 Questions',
      typesCount: 2,
      overview: 'Governor-Generals/Viceroys, Social reform movements, and Gandhian mass movements.',
      types: [
        {
          typeNumber: 1,
          title: 'Chronology of Major Gandhian Movements (1917–1942)',
          identificationBlueprint: 'Arranging historical events in chronological sequence.',
          standardMethod: 'Memorizing unrelated dates.',
          proShortcut: 'The Invariant Gandhian Timeline:\n1. 1917: Champaran Satyagraha (1st Civil Disobedience - Indigo farmers in Bihar)\n2. 1918: Ahmedabad Mill Strike (1st Hunger Strike)\n3. 1918: Kheda Satyagraha (1st Non-Cooperation)\n4. 1919: Rowlatt Act & Jallianwala Bagh Massacre (13 April 1919)\n5. 1920: Non-Cooperation & Khilafat Movement (Withdrawn after Chauri Chaura in Feb 1922)\n6. 1930: Dandi Salt March & Civil Disobedience Movement\n7. 1931: Gandhi-Irwin Pact & 2nd Round Table Conference\n8. 1932: Poona Pact (Gandhi & Dr. Ambedkar)\n9. 1942: Quit India Movement ("Do or Die" at Gowalia Tank, Mumbai).',
          workedExample: {
            question: 'Which was Mahatma Gandhi’s first Satyagraha in India?',
            options: ['Champaran Satyagraha (1917)', 'Kheda Satyagraha (1918)', 'Ahmedabad Mill Strike (1918)', 'Non-Cooperation Movement (1920)'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Champaran (1917) invited by Rajkumar Shukla was Gandhi’s very first Satyagraha on Indian soil.',
            examinerTrap: 'Selecting Kheda or Ahmedabad mill strike.'
          },
          practiceQuestions: [
            {
              q: 'The Chauri Chaura incident in Gorakhpur led directly to the withdrawal of which movement by Mahatma Gandhi?',
              options: ['Non-Cooperation Movement', 'Civil Disobedience Movement', 'Quit India Movement', 'Rowlatt Satyagraha'],
              correctIndex: 0,
              hint: 'Occurred in February 1922, prompting Gandhi to halt the 1920 Non-Cooperation Movement.'
            }
          ]
        }
      ]
    },

    {
      id: 'indian_geography',
      name: 'Indian Geography (Rivers, Passes & National Parks)',
      category: 'Geography',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 Questions',
      typesCount: 2,
      overview: 'East-flowing vs West-flowing rivers and major Himalayan mountain passes.',
      types: [
        {
          typeNumber: 1,
          title: 'West-Flowing Rivers into Arabian Sea ("NAMASTE SL")',
          identificationBlueprint: 'Which river flows westward or does NOT form a delta (forms estuary)?',
          standardMethod: 'Confusing Bay of Bengal rivers with Arabian sea rivers.',
          proShortcut: 'Mnemonic for West-Flowing Rivers: "NAMASTE SL":\n- N: Narmada (Rift valley, Dhuandhar falls, MP)\n- MA: Mahi (Crosses Tropic of Cancer TWICE!)\n- S: Sabarmati (Gujarat)\n- T: Tapti / Tapi (Parallel to Narmada, Surat)\n- S: Sharavati (Jog / Gersoppa Falls, Karnataka)\n- L: Luni (Endorheic river, disappears in Rann of Kutch).\nAll other major peninsular rivers (Godavari, Krishna, Cauvery, Mahanadi) flow EAST into Bay of Bengal and form deltas!',
          workedExample: {
            question: 'Which of the following rivers flows through a rift valley into the Arabian Sea and does NOT form a delta?',
            options: ['Narmada', 'Godavari', 'Krishna', 'Mahanadi'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Narmada flows westward in a rift valley between Vindhya and Satpura ranges, forming an estuary instead of a delta.',
            examinerTrap: 'Selecting Godavari (which flows east and forms a large delta).'
          },
          practiceQuestions: [
            {
              q: 'Which Indian river cuts across the Tropic of Cancer twice during its flow?',
              options: ['Mahi River', 'Narmada River', 'Chambal River', 'Betwa River'],
              correctIndex: 0,
              hint: 'In NAMASTE SL: MA = Mahi River (originates in MP, flows into Gujarat).'
            }
          ]
        }
      ]
    },

    {
      id: 'indian_economy',
      name: 'Indian Economy & Macroeconomics',
      category: 'Economy',
      highYieldRating: 5,
      avgQuestionsPerPaper: '2 to 3 Questions',
      typesCount: 2,
      overview: 'National income, Inflation types, Monetary vs Fiscal Policy, Five-Year Plans & NITI Aayog.',
      types: [
        {
          typeNumber: 1,
          title: 'Five Year Plans (FYP) Models & Milestones',
          identificationBlueprint: 'Which FYP was based on Harrod-Domar or Mahalanobis model, or when was Garibi Hatao launched?',
          standardMethod: 'Mixing up plan objectives.',
          proShortcut: 'High-Yield Key Plans:\n- 1st Plan (1951–56): Harrod-Domar Model (Focus on Agriculture & Irrigation - Bhakra Nangal, Hirakud dams).\n- 2nd Plan (1956–61): P.C. Mahalanobis Model (Rapid Heavy Industrialization - Bhilai, Durgapur, Rourkela steel plants).\n- 3rd Plan (1961–66): Gadgil Yojana (Failed due to 1962 China War, 1965 Pak War & severe drought -> Plan Holiday 1966-69).\n- 4th Plan (1969–74): Growth with stability, 14 Banks nationalized in 1969.\n- 5th Plan (1974–79): "Garibi Hatao" (Poverty Alleviation) slogan.\n- 12th Plan (2012–17): Last FYP before NITI Aayog replaced Planning Commission on 1 January 2015.',
          workedExample: {
            question: 'The Second Five-Year Plan of India was based on which economic model?',
            options: ['Mahalanobis Model', 'Harrod-Domar Model', 'Gadgil Strategy', 'Rao-Manmohan Model'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: '1st = Harrod-Domar; 2nd = P.C. Mahalanobis (father of Indian statistics).',
            examinerTrap: 'Selecting Harrod-Domar for the 2nd plan.'
          },
          practiceQuestions: [
            {
              q: 'When was NITI Aayog (National Institution for Transforming India) officially established, replacing the Planning Commission?',
              options: ['1 January 2015', '15 August 2014', '1 April 2015', '26 January 2015'],
              correctIndex: 0,
              hint: 'Established on New Year’s Day 2015 by Union Cabinet resolution.'
            }
          ]
        },
        {
          typeNumber: 2,
          title: 'Monetary Policy Tools (Repo, Reverse Repo, CRR, SLR)',
          identificationBlueprint: 'Definitions of Repo Rate, Bank Rate, Cash Reserve Ratio, Statutory Liquidity Ratio.',
          standardMethod: 'Confusing CRR (cash with RBI) with SLR (liquid assets with bank itself).',
          proShortcut: 'Core Distinctions:\n- Repo Rate: Rate at which RBI lends short-term money to commercial banks against government securities.\n- CRR: Percentage of Net Demand and Time Liabilities (NDTL) banks MUST keep in CASH with RBI (no interest paid).\n- SLR: Percentage of NDTL banks MUST maintain with THEMSELVES in liquid form (Cash, Gold, Approved Govt Securities).\n- Inflation Control: To curb inflation, RBI INCREASES Repo/CRR/SLR to suck liquidity from the market.',
          workedExample: {
            question: 'What happens to money supply in the economy when the Reserve Bank of India increases the Cash Reserve Ratio (CRR)?',
            options: ['Money supply decreases', 'Money supply increases', 'Money supply remains unchanged', 'Inflation increases immediately'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Higher CRR means banks must park more cash with RBI, leaving less loanable funds => Money supply contracts.',
            examinerTrap: 'Thinking an increase in reserve ratio increases money supply in the public market.'
          },
          practiceQuestions: [
            {
              q: 'Under which section is the Annual Financial Statement (popularly known as Union Budget) presented in Parliament?',
              options: ['Article 112', 'Article 110', 'Article 114', 'Article 280'],
              correctIndex: 0,
              hint: 'Article 110 is Money Bill; Article 112 is Annual Financial Statement.'
            }
          ]
        }
      ]
    },

    {
      id: 'physics_mechanics_optics',
      name: 'Physics (Optics, Mechanics & SI Units)',
      category: 'Science',
      highYieldRating: 5,
      avgQuestionsPerPaper: '2 Questions',
      typesCount: 2,
      overview: 'Convex vs Concave lenses/mirrors, eye defects, Newton’s laws, and fundamental SI units.',
      types: [
        {
          typeNumber: 1,
          title: 'Eye Defects & Corrective Lenses ("MY CONCAVE - HYPER CONVEX")',
          identificationBlueprint: 'Correction for Myopia (Short-sightedness) or Hypermetropia (Far-sightedness).',
          standardMethod: 'Confusing concave and convex lens applications.',
          proShortcut: 'Memory Key:\n- Myopia (Near-sightedness: cannot see distant objects): Corrected by CONCAVE lens (Negative power).\n- Hypermetropia (Far-sightedness: cannot see near objects): Corrected by CONVEX lens (Positive power).\n- Presbyopia (Old age vision loss): Corrected by BIFOCAL lens.\n- Astigmatism: Corrected by CYLINDRICAL lens.\nMirrors in Vehicles: Rear-view mirror is CONVEX mirror (always forms erect, virtual, diminished image with wide field of view). Shaving mirror/dentist mirror is CONCAVE mirror (magnified virtual image).',
          workedExample: {
            question: 'Which type of lens is used to correct Myopia (short-sightedness)?',
            options: ['Concave Lens', 'Convex Lens', 'Bifocal Lens', 'Cylindrical Lens'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Myopia = Concave (diverging) lens to push image back onto retina.',
            examinerTrap: 'Selecting Convex lens.'
          },
          practiceQuestions: [
            {
              q: 'Why are convex mirrors preferred as rear-view mirrors in automobiles?',
              options: ['They provide an erect image and wider field of view', 'They form real magnified images', 'They invert images', 'They absorb glares'],
              correctIndex: 0,
              hint: 'Convex mirrors always produce an erect, diminished image giving a wide panorama.'
            }
          ]
        }
      ]
    },

    {
      id: 'chemistry_periodic_salts',
      name: 'Chemistry (Periodic Table & Common Chemicals)',
      category: 'Science',
      highYieldRating: 5,
      avgQuestionsPerPaper: '2 Questions',
      typesCount: 2,
      overview: 'Common chemical names, pH scale values, and modern periodic table periodic trends.',
      types: [
        {
          typeNumber: 1,
          title: 'Chemical Common Names & Formulas (Modern Exam Guarantee)',
          identificationBlueprint: 'What is the chemical name/formula of Baking Soda, Washing Soda, Bleaching Powder, Plaster of Paris?',
          standardMethod: 'Confusing carbonate with bicarbonate.',
          proShortcut: 'Memory Keys:\n- Baking Soda (You BAKE with it): Sodium Bicarbonate (NaHCO3)\n- Washing Soda (WASH with 10 buckets of water): Sodium Carbonate decahydrate (Na2CO3·10H2O)\n- Bleaching Powder: Calcium Hypochlorite (CaOCl2)\n- Plaster of Paris (POP has HALF water): Calcium Sulphate Hemihydrate (CaSO4·½H2O)\n- Gypsum (Full 2 waters): CaSO4·2H2O\n- Quicklime: Calcium Oxide (CaO)\n- Slaked Lime / Lime water: Calcium Hydroxide [Ca(OH)2].',
          workedExample: {
            question: 'What is the chemical formula of Baking Soda?',
            options: ['NaHCO3', 'Na2CO3·10H2O', 'CaOCl2', 'CaSO4·½H2O'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Baking = Bicarbonate = NaHCO3.',
            examinerTrap: 'Confusing Baking Soda (NaHCO3) with Washing Soda (Na2CO3).'
          },
          practiceQuestions: [
            {
              q: 'Heating Gypsum (CaSO4·2H2O) at 373 K (100°C) produces which compound?',
              options: ['Plaster of Paris (CaSO4·½H2O)', 'Bleaching Powder', 'Slaked Lime', 'Quicklime'],
              correctIndex: 0,
              hint: 'Loses 1.5 molecules of water to become hemihydrate.'
            }
          ]
        }
      ]
    },

    {
      id: 'biology_human_diseases',
      name: 'Biology (Human Anatomy & Deficiency Diseases)',
      category: 'Science',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 Questions',
      typesCount: 2,
      overview: 'Vitamins, Blood groups, Human digestive/nervous system, and viral vs bacterial pathogens.',
      types: [
        {
          typeNumber: 1,
          title: 'Vitamins Scientific Names & Deficiencies ("KEDA vs BC")',
          identificationBlueprint: 'Scientific name of Vitamin C, or deficiency causing Scurvy, Rickets, Beri-beri.',
          standardMethod: 'Guessing vitamins.',
          proShortcut: 'Master Table:\n- Vitamin A (Retinol): Night Blindness, Xerophthalmia\n- Vitamin B1 (Thiamine): Beri-Beri\n- Vitamin B3 (Niacin): Pellagra\n- Vitamin B12 (Cyanocobalamin - contains Cobalt!): Pernicious Anemia\n- Vitamin C (Ascorbic Acid): Scurvy (bleeding gums)\n- Vitamin D (Calciferol - Sunshine): Rickets (children), Osteomalacia (adults)\n- Vitamin E (Tocopherol): Infertility / muscle weakness\n- Vitamin K (Phylloquinone): Defective blood clotting / hemorrhage.\nWater Soluble: B and C. Fat Soluble: K, E, D, A ("KEDA").',
          workedExample: {
            question: 'Deficiency of which vitamin causes the disease Rickets in children?',
            options: ['Vitamin D', 'Vitamin C', 'Vitamin A', 'Vitamin B1'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Vitamin D (Calciferol) deficiency impairs bone mineralization leading to Rickets.',
            examinerTrap: 'Selecting Vitamin C (which causes Scurvy).'
          },
          practiceQuestions: [
            {
              q: 'Which vitamin contains the metallic element Cobalt in its molecular structure?',
              options: ['Vitamin B12 (Cyanocobalamin)', 'Vitamin B1 (Thiamine)', 'Vitamin B6 (Pyridoxine)', 'Vitamin B2 (Riboflavin)'],
              correctIndex: 0,
              hint: 'Cyanocobalamin contains Cobalt.'
            }
          ]
        }
      ]
    },

    {
      id: 'static_gk',
      name: 'Static GK (Classical Dances, Maestros & UNESCO Sites)',
      category: 'Static GK',
      highYieldRating: 5,
      avgQuestionsPerPaper: '4 to 5 Questions',
      typesCount: 2,
      overview: 'Eduquity/New Vendor Pattern heavily tests the 8 Classical Dances and legendary instrument exponents.',
      types: [
        {
          typeNumber: 1,
          title: 'The 8 Classical Dances & State Pairs',
          identificationBlueprint: 'Matching dance to state or distinguishing classical from folk.',
          standardMethod: 'Confusing folk dance with classical dance.',
          proShortcut: '8 Classical Dances:\n1. Bharatanatyam -> Tamil Nadu\n2. Kathak -> Uttar Pradesh / North India\n3. Kathakali -> Kerala (Face paint)\n4. Mohiniyattam -> Kerala (Dance of Enchantress)\n5. Kuchipudi -> Andhra Pradesh\n6. Odissi -> Odisha\n7. Manipuri -> Manipur\n8. Sattriya -> Assam (by Mahapurusha Sankaradeva in 15th century).',
          workedExample: {
            question: 'Kuchipudi, a major Indian classical dance, originated in which state?',
            options: ['Andhra Pradesh', 'Tamil Nadu', 'Kerala', 'Karnataka'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Kuchipudi originated in the village of Kuchelapuram in Andhra Pradesh.',
            examinerTrap: 'Confusing Kuchipudi with Kathakali.'
          },
          practiceQuestions: [
            {
              q: 'Sattriya, one of the eight classical dance forms, was founded by which 15th-century Vaishnavite saint in Assam?',
              options: ['Mahapurusha Sankaradeva', 'Chaitanya Mahaprabhu', 'Ramanuja', 'Tulsidas'],
              correctIndex: 0,
              hint: 'Founded as part of the Neo-Vaishnavite movement in Assam.'
            }
          ]
        },
        {
          typeNumber: 2,
          title: 'Musical Instruments & Legendary Exponents',
          identificationBlueprint: 'Bismillah Khan, Pandit Ravi Shankar, Hariprasad Chaurasia, Zakir Hussain play which instrument?',
          standardMethod: 'Random guessing of musicians.',
          proShortcut: 'The Big 6 Exponents:\n- Shehnai: Ustad Bismillah Khan (Bharat Ratna 2001)\n- Sitar: Pandit Ravi Shankar (Bharat Ratna 1999)\n- Sarod: Ustad Amjad Ali Khan\n- Flute (Bansuri): Pandit Hariprasad Chaurasia\n- Tabla: Ustad Zakir Hussain, Ustad Allah Rakha\n- Santoor: Pandit Shivkumar Sharma.',
          workedExample: {
            question: 'Pandit Hariprasad Chaurasia is a world-renowned maestro of which instrument?',
            options: ['Flute (Bansuri)', 'Sitar', 'Tabla', 'Sarod'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Hariprasad Chaurasia = Flute.',
            examinerTrap: 'Confusing Chaurasia (Flute) with Shivkumar Sharma (Santoor).'
          },
          practiceQuestions: [
            {
              q: 'Pandit Shivkumar Sharma is famously associated with reviving and popularizing which classical Kashmiri string instrument?',
              options: ['Santoor', 'Sarangi', 'Sitar', 'Rudra Veena'],
              correctIndex: 0,
              hint: 'Santoor is a 100-string trapezoidal hammered dulcimer.'
            }
          ]
        }
      ]
    },

    {
      id: 'current_affairs_schemes',
      name: 'Current Affairs & High-Yield Government Schemes',
      category: 'Current Affairs',
      highYieldRating: 5,
      avgQuestionsPerPaper: '5 to 6 Questions',
      typesCount: 2,
      overview: 'Flagship Central Government Schemes, Grand Slam Tennis Champions, Olympic/Asian Games, and international summits.',
      types: [
        {
          typeNumber: 1,
          title: 'Flagship Welfare Schemes (Year, Ministry & Target)',
          identificationBlueprint: 'Questions on PM-KISAN, PM Jan Dhan Yojana, Jal Jeevan Mission, Ayushman Bharat.',
          standardMethod: 'Mixing up financial caps and launched years.',
          proShortcut: 'Top 5 Flagship Central Schemes:\n- PM-KISAN (Launched 2019): ₹6,000 per year to eligible farmer families in 3 equal installments of ₹2,000.\n- PM Jan Dhan Yojana (PMJDY - 2014): Slogan "Mera Khata, Bhagya Vidhata". Zero balance savings accounts with RuPay debit card & overdraft up to ₹10,000.\n- Ayushman Bharat PM-JAY (2018): World’s largest health insurance scheme providing ₹5 Lakh per family per year for secondary & tertiary hospital care.\n- Jal Jeevan Mission (2019): Target to provide Functional Household Tap Connection (FHTC) of 55 liters per capita per day to every rural home by 2024.\n- PM Awas Yojana (PMAY - 2015): "Housing for All" with pucca houses.',
          workedExample: {
            question: 'What is the annual financial benefit provided per eligible farmer family under the PM-KISAN scheme?',
            options: ['₹6,000 in three equal installments', '₹5,000 in two installments', '₹10,000 in one lump sum', '₹4,000 in four installments'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'PM-KISAN provides ₹6,000 per year transferred directly into bank accounts via DBT in 3 installments of ₹2,000 each.',
            examinerTrap: 'Selecting ₹5,000 or ₹10,000.'
          },
          practiceQuestions: [
            {
              q: 'Under the Ayushman Bharat PM-JAY scheme, what is the maximum health cover provided per eligible family per year?',
              options: ['₹5 Lakh', '₹3 Lakh', '₹10 Lakh', '₹2 Lakh'],
              correctIndex: 0,
              hint: '₹5,00,000 cashless insurance per family per annum.'
            }
          ]
        }
      ]
    }
  ]
};
