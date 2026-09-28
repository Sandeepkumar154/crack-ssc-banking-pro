// Formula Vault & Shortcut Cheat-Sheets for SSC & Banking Aspirants
// Exhaustive mathematical formulas, Golden Grammar Rules, Computer Protocols, Static GK, and Banking Awareness

export const FORMULA_VAULT = {
  maths: [
    {
      category: 'Algebra & Identities',
      title: 'Cubic & Symmetrical Identities',
      formulas: [
        'a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)',
        'a³ + b³ + c³ - 3abc = ½(a + b + c)[(a - b)² + (b - c)² + (c - a)²]',
        'If a + b + c = 0, then a³ + b³ + c³ = 3abc',
        'x + 1/x = k  =>  x² + 1/x² = k² - 2',
        'x + 1/x = k  =>  x³ + 1/x³ = k³ - 3k',
        'x - 1/x = k  =>  x² + 1/x² = k² + 2',
        'x - 1/x = k  =>  x³ - 1/x³ = k³ + 3k',
        'If x + 1/x = 1  =>  x³ = -1',
        'If x + 1/x = 2  =>  x = 1',
        'If x + 1/x = -2 =>  x = -1'
      ]
    },
    {
      category: 'Trigonometry',
      title: 'Crucial Values & Product Shortcuts',
      formulas: [
        'sin²θ + cos²θ = 1,  sec²θ - tan²θ = 1,  cosec²θ - cot²θ = 1',
        'If A + B = 90°, then tan A × tan B = 1, cot A × cot B = 1, sin²A + sin²B = 1',
        'If sec θ + tan θ = x, then sec θ - tan θ = 1/x, sec θ = (x² + 1)/(2x)',
        'If cosec θ + cot θ = x, then cosec θ - cot θ = 1/x, cosec θ = (x² + 1)/(2x)',
        'Max/Min of a sin θ + b cos θ: Range is [-√(a² + b²), +√(a² + b²)]',
        'Heights & Distances: 30°-60°-90° Triangle sides are in ratio 1 : √3 : 2',
        'Heights & Distances: 45°-45°-90° Triangle sides are in ratio 1 : 1 : √2'
      ]
    },
    {
      category: 'Geometry & Mensuration',
      title: 'Circles, Triangles & 3D Solids',
      formulas: [
        'Inradius of Right Triangle: r = (a + b - c) / 2',
        'Circumradius of Right Triangle: R = Hypotenuse / 2',
        'Angle at Incenter: ∠BIC = 90° + ∠A / 2',
        'Angle at Circumcenter: ∠BOC = 2 × ∠A',
        'Angle at Orthocenter: ∠BHC = 180° - ∠A',
        'Direct Common Tangent (DCT) = √(d² - (r1 - r2)²)',
        'Transverse Common Tangent (TCT) = √(d² - (r1 + r2)²)',
        'Volume of Cylinder = πr²h,  Total Surface Area = 2πr(r + h)',
        'Volume of Cone = ⅓πr²h,  Slant height l = √(r² + h²)',
        'Volume of Sphere = 4/3 πr³,  Surface Area = 4πr²',
        'Volume of Hemisphere = ⅔ πr³,  Total Surface Area = 3πr²'
      ]
    },
    {
      category: 'Speed Arithmetic & Commercial Math',
      title: 'Time, Work, Speed & Interest',
      formulas: [
        'Average Speed (equal distance, speeds x and y): 2xy / (x + y)',
        'Relative Speed: (S1 + S2) opposite directions; (S1 - S2) same direction',
        'Speed Conversion: 1 km/h = 5/18 m/s; 1 m/s = 18/5 km/h',
        'Pipes & Cistern: Time = Tank Capacity / (Eff_Inlet - Eff_Leak)',
        'Compound vs Simple Interest (2 years difference): D = P × (R / 100)²',
        'Compound vs Simple Interest (3 years difference): D = P × (R / 100)² × (3 + R/100)',
        'Alligation Rule: (Cheaper / Dearer) Ratio = (Price_Dearer - Mean) / (Mean - Price_Cheaper)',
        'Faulty Weight Profit % = [Error / (True Weight - Error)] × 100',
        'Successive Discount: Net Discount = D1 + D2 - (D1 × D2 / 100)'
      ]
    },
    {
      category: 'Banking Speed Math',
      title: 'Quadratic & Approximation Rules',
      formulas: [
        'Sign Rule (+, +) in ax²+bx+c=0  => Roots are (-, -)',
        'Sign Rule (-, +) in ax²+bx+c=0  => Roots are (+, +)',
        'Sign Rule (+, -) in ax²+bx+c=0  => Roots are (-, +) [Larger root is negative]',
        'Sign Rule (-, -) in ax²+bx+c=0  => Roots are (+, -) [Larger root is positive]',
        'Both constants negative in comparison => Always "Cannot be Determined (CND)"',
        'Vedic Base-100: (100+a)(100+b) = (100+a+b) | (a×b)',
        'Vedic Fraction to %: 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/13 = 7.69%'
      ]
    }
  ],

  grammarRules: [
    {
      ruleNumber: 1,
      title: 'First Subject Rule (Along with / As well as)',
      description: 'When two subjects are joined by along with, as well as, together with, with, in addition to, accompanied by, or rather than, the verb agrees STRICTLY with the first subject.',
      example: 'The Captain (singular), along with all his players, WAS awarded the gold medal.'
    },
    {
      ruleNumber: 2,
      title: 'Nearest Subject Rule (Either...Or / Neither...Nor)',
      description: 'When two subjects are connected by Either...or, Neither...nor, or Not only...but also, the verb agrees with the NEAREST subject.',
      example: 'Neither the teacher nor the students (plural) WERE present in the auditorium.'
    },
    {
      ruleNumber: 3,
      title: 'Conditional Sentences (Type 3)',
      description: 'In past unreal conditionals: If + had + V3 requires "would have + V3" in the result clause.',
      example: 'If he HAD worked diligently, he WOULD HAVE cleared the examination.'
    },
    {
      ruleNumber: 4,
      title: 'Negative Inversion (No Sooner / Hardly)',
      description: 'Hardly/Scarcely is paired with WHEN; No sooner is paired with THAN (never then!). Inverted word order (Auxiliary verb before Subject) applies.',
      example: 'No sooner DID the bell ring THAN the children rushed outside.'
    },
    {
      ruleNumber: 5,
      title: 'Lest with "Should"',
      description: '"Lest" means "for fear that" and is inherently negative. Never use "not" with lest; always use modal "should" or base V1.',
      example: 'Walk slowly lest you SHOULD stumble on the rocks.'
    },
    {
      ruleNumber: 6,
      title: 'Indefinite Pronouns Singular Rule',
      description: 'Each, Every, Either, Neither, Everyone, Somebody, Nobody, Anybody take singular verbs and singular possessive adjectives (his/her, not their).',
      example: 'Each of the participants was given HIS certificate.'
    },
    {
      ruleNumber: 7,
      title: 'One of the + Plural Noun + Singular Verb',
      description: '"One of the" is followed by a plural noun but a singular verb unless preceded by a relative pronoun (who/which/that).',
      example: 'One of the books IS missing. BUT: He is one of those players who ARE always on time.'
    },
    {
      ruleNumber: 8,
      title: 'Uncountable Nouns Never Pluralized',
      description: 'Furniture, Information, Advice, Scenery, Luggage, Baggage, Hair, Machinery, Equipment are uncountable and never take plural "s" or "a/an".',
      example: 'The scenery of Kashmir is breathtaking (not sceneries).'
    },
    {
      ruleNumber: 9,
      title: 'Prepositions after "Discuss", "Describe", "Order"',
      description: 'Transitive verbs like Discuss, Describe, Order, Attack, Reach do NOT take a preposition when followed by their direct object.',
      example: 'We discussed the proposal (not discussed about the proposal).'
    },
    {
      ruleNumber: 10,
      title: 'Since vs For (Point of Time vs Duration)',
      description: '"Since" is used for a specific starting point of time (Since 1995, Since Monday); "For" is used for a duration/period (For 5 years, For 2 hours).',
      example: 'He has been studying FOR three hours SINCE 8:00 AM.'
    },
    {
      ruleNumber: 11,
      title: 'Bare Infinitive after Make / Let / Bid',
      description: 'Verbs like Make, Let, Bid, Hear, Watch take a bare infinitive (V1 without "to") in the active voice.',
      example: 'The teacher made him WRITE (not to write) the essay again.'
    },
    {
      ruleNumber: 12,
      title: 'Avail of / Adapt oneself (Reflexive Pronouns)',
      description: 'Certain verbs like Avail, Adapt, Reconcile, Exert, Introduce take a reflexive pronoun (myself, himself, themselves) when used without a direct object.',
      example: 'You must avail YOURSELF of this golden opportunity.'
    }
  ],

  computer: [
    {
      category: 'Standard Network Ports & Protocols',
      items: [
        { label: 'Port 80 (HTTP)', value: 'Hypertext Transfer Protocol (unencrypted web)' },
        { label: 'Port 443 (HTTPS)', value: 'Encrypted Secure Web Traffic (SSL/TLS)' },
        { label: 'Port 21 (FTP)', value: 'File Transfer Protocol (control connection)' },
        { label: 'Port 22 (SSH / SFTP)', value: 'Secure Shell remote login & file transfer' },
        { label: 'Port 25 (SMTP)', value: 'Simple Mail Transfer Protocol (sending mail)' },
        { label: 'Port 110 (POP3)', value: 'Post Office Protocol (receiving mail, 995 SSL)' },
        { label: 'Port 143 (IMAP)', value: 'Internet Message Access Protocol (sync mail)' },
        { label: 'Port 53 (DNS)', value: 'Domain Name System name resolution' }
      ]
    },
    {
      category: 'High-Frequency Excel Shortcuts',
      items: [
        { label: 'F4', value: 'Toggles absolute/relative reference ($A$1) or repeats last action' },
        { label: 'Ctrl + ;', value: 'Inserts current date into active cell' },
        { label: 'Ctrl + Shift + :', value: 'Inserts current time into active cell' },
        { label: 'Ctrl + ` (Backtick)', value: 'Toggles between showing formulas and calculated values' },
        { label: 'Alt + =', value: 'AutoSum shortcut for selected column or row' },
        { label: 'Ctrl + Arrow Keys', value: 'Jumps to edge of data region in worksheet' }
      ]
    },
    {
      category: 'Memory Hierarchy & Hardware',
      items: [
        { label: 'Fastest Memory', value: 'CPU Registers > L1 Cache > L2 Cache > L3 Cache > RAM > SSD' },
        { label: 'Volatile Memory', value: 'RAM (SRAM, DRAM) - loses contents on power down' },
        { label: 'Non-Volatile Memory', value: 'ROM, Flash Memory, EEPROM, Hard Drives, SSD' },
        { label: 'SRAM vs DRAM', value: 'SRAM is faster and uses flip-flops; DRAM is slower, uses capacitors, needs refresh' },
        { label: 'Nibble / Byte', value: '1 Nibble = 4 bits; 1 Byte = 8 bits; 1 KB = 1024 Bytes' }
      ]
    },
    {
      category: 'Operating Systems & Security',
      items: [
        { label: 'Kernel', value: 'Core of operating system managing CPU, memory, and hardware' },
        { label: 'Phishing', value: 'Social engineering attack using fraudulent emails to steal credentials' },
        { label: 'Ransomware', value: 'Malware encrypting user files demanding payment (e.g. WannaCry)' },
        { label: 'Trojan Horse', value: 'Malware disguised as legitimate software' },
        { label: 'Firewall', value: 'Monitors and filters incoming/outgoing network traffic based on security rules' }
      ]
    }
  ],

  staticGk: [
    {
      category: 'Indian Constitution & Polity Articles',
      items: [
        { label: 'Article 14', value: 'Equality before Law & Equal Protection of Laws' },
        { label: 'Article 17', value: 'Abolition of Untouchability (Absolute Fundamental Right)' },
        { label: 'Article 21', value: 'Protection of Life & Personal Liberty (including Right to Privacy)' },
        { label: 'Article 21A', value: 'Right to Free & Compulsory Elementary Education (86th Amendment 2002)' },
        { label: 'Article 32', value: 'Right to Constitutional Remedies ("Heart & Soul of Constitution" - Dr. Ambedkar)' },
        { label: 'Article 40', value: 'Organization of Village Panchayats (Gandhian DPSP)' },
        { label: 'Article 44', value: 'Uniform Civil Code for Citizens (DPSP)' },
        { label: 'Article 51A', value: 'Fundamental Duties (Part IV-A, 42nd Amendment 1976 on Swaran Singh Committee)' },
        { label: 'Article 110', value: 'Definition of Money Bill (Speaker certifies; Rajya Sabha has 14-day limit)' },
        { label: 'Article 280', value: 'Finance Commission constituted every 5 years by the President' },
        { label: 'Article 324', value: 'Superintendence, direction & control of elections by Election Commission' },
        { label: 'Article 352 / 356 / 360', value: 'National Emergency (352) / President Rule (356) / Financial Emergency (360)' }
      ]
    },
    {
      category: 'Classical Dances & Folk Traditions',
      items: [
        { label: 'Bharatanatyam', value: 'Tamil Nadu (Oldest classical dance, formerly Sadir/Dasiattam)' },
        { label: 'Kathakali', value: 'Kerala (Dramatic storytelling, elaborate facial makeup and green masks)' },
        { label: 'Kathak', value: 'Uttar Pradesh / North India (Gharanas: Lucknow, Jaipur, Banaras; footwork/tatkar)' },
        { label: 'Kuchipudi', value: 'Andhra Pradesh (Tarangam brass plate dance, Bhagavata Mela)' },
        { label: 'Odissi', value: 'Odisha (Tribhanga posture, sensuous lyrical style)' },
        { label: 'Mohiniyattam', value: 'Kerala ("Dance of the enchantress", graceful feminine movements)' },
        { label: 'Manipuri', value: 'Manipur (Raas Leela themes of Radha-Krishna, Pung drum playing)' },
        { label: 'Sattriya', value: 'Assam (Introduced by saint Srimanta Sankardev in 15th century)' }
      ]
    },
    {
      category: 'Important Biosphere Reserves & National Parks',
      items: [
        { label: 'Nilgiri Biosphere', value: 'First Biosphere Reserve of India (1986) - Tamil Nadu, Kerala, Karnataka' },
        { label: 'Jim Corbett National Park', value: 'Oldest National Park in India (1936, formerly Hailey NP) - Uttarakhand' },
        { label: 'Kaziranga National Park', value: 'Assam - Famous for Great Indian One-Horned Rhinoceros' },
        { label: 'Keibul Lamjao', value: 'Loktak Lake, Manipur - World\'s only floating national park (Sangai deer)' },
        { label: 'Sundarbans', value: 'West Bengal - World\'s largest mangrove forest (Royal Bengal Tiger)' },
        { label: 'Hemis National Park', value: 'Ladakh - Largest National Park in India (Snow Leopard refuge)' }
      ]
    }
  ],

  bankingAwareness: [
    {
      category: 'RBI Policy Rates & Monetary Framework',
      items: [
        { label: 'Repo Rate', value: 'Rate at which RBI lends short-term liquidity to commercial banks against G-Secs' },
        { label: 'Standing Deposit Facility (SDF)', value: 'Absorbs excess liquidity from banks WITHOUT requiring collateral (Introduced 2022)' },
        { label: 'Marginal Standing Facility (MSF)', value: 'Overnight borrowing window for banks dipping into SLR quota during severe liquidity crunch' },
        { label: 'Cash Reserve Ratio (CRR)', value: 'Percentage of Net Demand & Time Liabilities (NDTL) kept as cash with RBI. RBI pays 0% interest!' },
        { label: 'Statutory Liquidity Ratio (SLR)', value: 'Percentage of NDTL invested in approved liquid assets (G-Secs, Treasury Bills, Gold, Cash)' },
        { label: 'Monetary Policy Committee (MPC)', value: '6 members (3 RBI + 3 Govt nominees). Governor has casting vote. Targets 4% ± 2% CPI inflation' }
      ]
    },
    {
      category: 'Priority Sector Lending (PSL) Mandates',
      items: [
        { label: 'Domestic Commercial Banks', value: 'Overall PSL Target: 40% of Adjusted Net Bank Credit (ANBC)' },
        { label: 'Agriculture Target', value: '18% of ANBC (within which 10% is earmarked for Small & Marginal Farmers)' },
        { label: 'Micro Enterprises', value: '7.5% of ANBC' },
        { label: 'Weaker Sections', value: '12% of ANBC' },
        { label: 'RRBs & Small Finance Banks', value: 'Special PSL Target: 75% of ANBC due to rural financial inclusion mandate' }
      ]
    },
    {
      category: 'Negotiable Instruments & Banking Laws',
      items: [
        { label: 'Negotiable Instruments Act, 1881', value: 'Governs Promissory Notes (Sec 4), Bills of Exchange (Sec 5), Cheques (Sec 6)' },
        { label: 'Section 138 (NI Act)', value: 'Dishonour of cheque for insufficiency of funds is a criminal offence' },
        { label: 'Cheque Truncation System (CTS)', value: 'Electronic image-based cheque clearing replacing physical movement of paper cheques' },
        { label: 'Basel III Capital Adequacy', value: 'Minimum Capital to Risk-Weighted Assets Ratio (CRAR): RBI mandates 9% (11.5% with CCB)' },
        { label: 'DICGC Insurance Cover', value: 'Insures bank deposits up to ₹5 Lakh per depositor per bank (Principal + Interest)' }
      ]
    }
  ]
};
