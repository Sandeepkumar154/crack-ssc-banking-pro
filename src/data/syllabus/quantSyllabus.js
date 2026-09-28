// Comprehensive Quantitative Aptitude Syllabus with ALL 12 Core Chapters
// Each chapter contains recurring types, 2-sec identification blueprints, slow traditional vs pro shortcuts, exemplars, and examiner traps

export const QUANT_SYLLABUS = {
  subjectId: 'quant',
  subjectName: 'Quantitative Aptitude (Maths)',
  totalTopics: 12,
  totalTypesCataloged: 52,
  topics: [
    {
      id: 'time_and_work',
      name: 'Time & Work, Pipes & Cisterns',
      category: 'Arithmetic',
      highYieldRating: 5,
      avgQuestionsPerPaper: '2 to 3 Questions (Tier 1 & Tier 2)',
      typesCount: 5,
      overview: 'Predictable and high scoring. Master LCM unitary, cycle-blocks, and the add-back leaving trick.',
      types: [
        {
          typeNumber: 1,
          title: 'Basic Individual & Combined Efficiency',
          identificationBlueprint: 'Given individual times (A in X days, B in Y days). Asked: Combined completion time.',
          standardMethod: 'Writing fractions (1/X + 1/Y) = 1/T. Prone to arithmetic errors.',
          proShortcut: 'LCM Unitary Method: Total Work = LCM(X, Y). Eff_A = Work/X, Eff_B = Work/Y. Time = Total Work / (Eff_A + Eff_B). Direct for two: (X × Y) / (X + Y).',
          workedExample: {
            question: 'A can finish a task in 15 days, and B can finish the same task in 20 days. In how many days will both working together finish the task?',
            options: ['8 4/7 days', '8 2/7 days', '9 1/3 days', '7 1/2 days'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'Total Work = LCM(15, 20) = 60.\nEff_A = 60/15 = 4, Eff_B = 60/20 = 3.\nCombined Eff = 4 + 3 = 7.\nDays = 60 / 7 = 8 4/7 days.',
            examinerTrap: 'Modern exam setters ask: "How much work is left after 4 days?". Do not mark total days completed!'
          },
          practiceQuestions: [
            {
              q: 'X can do a piece of work in 20 days and Y can do it in 30 days. How long will they take working together?',
              options: ['10 days', '12 days', '15 days', '18 days'],
              correctIndex: 1,
              hint: 'LCM(20, 30) = 60. Eff_X = 3, Eff_Y = 2. Total Eff = 5. Days = 60 / 5 = 12.'
            },
            {
              q: 'A can paint a wall in 24 hours, B can paint it in 16 hours. Together, they will finish in?',
              options: ['9.6 hours', '10.5 hours', '8.4 hours', '9.2 hours'],
              correctIndex: 0,
              hint: 'LCM(24, 16) = 48. Eff_A = 2, Eff_B = 3. Total Eff = 5. Time = 48 / 5 = 9.6 hours.'
            }
          ]
        },
        {
          typeNumber: 2,
          title: 'Alternate Days Working Pattern',
          identificationBlueprint: 'Keywords: "work on alternate days", "starting with A on day 1".',
          standardMethod: 'Manually summing work day 1, day 2, day 3... very slow (takes 90s).',
          proShortcut: 'Cycle Block Method: 1 Cycle = 2 days. Work per cycle = Eff_A + Eff_B. Divide Total Work by cycle work for quotient (full cycles). For remainder, assign to odd-day starter.',
          workedExample: {
            question: 'A in 12 days, B in 18 days. They work on alternate days starting with A. How many days to complete?',
            options: ['14 1/3 days', '14 2/3 days', '15 days', '13 1/2 days'],
            correctIndex: 0,
            targetTime: '25 seconds',
            shortcutApplication: 'Work = LCM(12, 18) = 36. Eff_A = 3, Eff_B = 2. Cycle (2 days) = 5 units.\n7 cycles (14 days) = 35 units.\nLeft = 36 - 35 = 1 unit. Turn: A (eff 3). Time = 1/3 day.\nTotal = 14 1/3 days.',
            examinerTrap: 'Giving remaining work to B instead of A on day 15!'
          },
          practiceQuestions: [
            {
              q: 'P can finish a job in 10 days, Q in 15 days. They work on alternate days starting with P. How many days?',
              options: ['11 days', '12 days', '13 days', '14 days'],
              correctIndex: 1,
              hint: 'LCM = 30. P=3, Q=2. Cycle=5 units in 2 days. 30/5 = 6 cycles = 12 days.'
            },
            {
              q: 'A in 16 days, B in 24 days. Alternate days starting with B. Days?',
              options: ['18.5 days', '19 1/3 days', '19 1/2 days', '20 days'],
              correctIndex: 1,
              hint: 'LCM=48. A=3, B=2. Cycle=5 in 2 days. 9 cycles (18 days)=45. Left=3. Turn: B (eff 2). B does 2 units in 1 day (19 days). Left=1. Turn: A (eff 3) = 1/3 day. Total 19 1/3.'
            }
          ]
        },
        {
          typeNumber: 3,
          title: 'Person Leaving BEFORE Completion (Add-Back Trick)',
          identificationBlueprint: 'Phrases: "A left 3 days BEFORE completion", "prior to finish".',
          standardMethod: 'Setting linear equation (T - 3)*Eff_A + T*Eff_B = Work.',
          proShortcut: 'Add-Back Trick: Never let the person leave! Force them to work by ADDING their hypothetical work to Total Work: Total Days = (Total Work + Leaver’s work in left days) / (Eff_A + Eff_B).',
          workedExample: {
            question: 'A in 10 days, B in 15 days. They began together, but A left 2 days before completion. Find total days.',
            options: ['7.2 days', '6.8 days', '8 days', '7 days'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'Work = LCM(10, 15) = 30. Eff_A = 3, Eff_B = 2. Combined = 5.\nA left 2 days before finish -> Add A’s 2 days: 2 × 3 = 6.\nAdjusted Work = 30 + 6 = 36.\nTotal Days = 36 / 5 = 7.2 days!',
            examinerTrap: 'Subtracting the 6 units instead of adding. Left AFTER -> subtract. Left BEFORE -> add!'
          },
          practiceQuestions: [
            {
              q: 'A in 20 days, B in 30 days. A left 5 days before completion. Total time?',
              options: ['12 days', '15 days', '18 days', '14 days'],
              correctIndex: 1,
              hint: 'LCM=60. A=3, B=2. Add back A\'s 5 days (15). Total=75. Days=75/5=15.'
            },
            {
              q: 'P in 15 days, Q in 25 days. Q leaves 3 days before finish. Total days?',
              options: ['10 5/8 days', '11 1/4 days', '10.25 days', '10.5 days'],
              correctIndex: 0,
              hint: 'LCM=75. P=5, Q=3. Add back Q\'s 3 days (9). Total=84. Days=84/8 = 10 5/8.'
            }
          ]
        },
        {
          typeNumber: 4,
          title: 'Men-Women-Children MDH Equivalence',
          identificationBlueprint: 'Statement: "X men OR Y women take D days". Asked for "A men AND B women".',
          standardMethod: 'Converting everything to decimal fractions of 1 man.',
          proShortcut: 'Ratio Inversion: "x Men = y Women" => Efficiency Ratio M : W = y : x. Total Work = x × Eff_M × Days. Divide by target group’s daily efficiency.',
          workedExample: {
            question: '4 men or 6 women can reap a field in 50 days. In how many days can 6 men and 9 women reap it?',
            options: ['16 2/3 days', '20 days', '15 days', '18 days'],
            correctIndex: 0,
            targetTime: '25 seconds',
            shortcutApplication: '4M = 6W => M/W = 6/4 = 3/2.\nTotal Work = 4(3) × 50 = 600.\nTarget Group: 6M + 9W = 6(3) + 9(2) = 18 + 18 = 36.\nDays = 600 / 36 = 16 2/3 days.',
            examinerTrap: 'Confusing "OR" (equality) with "AND" (sum).'
          },
          practiceQuestions: [
            {
              q: '3 men or 4 women do a work in 43 days. 7 men and 5 women will do it in?',
              options: ['12 days', '15 days', '14 days', '16 days'],
              correctIndex: 0,
              hint: 'M/W = 4/3. Work = 3(4)×43 = 516. Target: 7(4)+5(3)=43. Days = 516/43 = 12.'
            },
            {
              q: '5 men or 8 boys in 30 days. 2 men and 4 boys will do it in?',
              options: ['30 days', '33 1/3 days', '35 days', '40 days'],
              correctIndex: 1,
              hint: 'M/B = 8/5. Work = 5(8)×30 = 1200. Target: 2(8)+4(5)=36. Days = 1200/36 = 100/3 = 33 1/3.'
            }
          ]
        },
        {
          typeNumber: 5,
          title: 'Pipes with Leaks (Negative Work)',
          identificationBlueprint: 'Inlet filling and bottom leak emptying.',
          standardMethod: 'Fractions with negative signs.',
          proShortcut: 'Net Efficiency = Sum of Inlets - Leak. Time = Tank Capacity / Net Efficiency.',
          workedExample: {
            question: 'Pipe A fills in 12h, B in 15h. Leak C empties in 20h. If all open, how long to fill?',
            options: ['10 hours', '12 hours', '8 hours', '15 hours'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'Capacity = LCM(12, 15, 20) = 60.\nEff_A = +5, Eff_B = +4, Eff_C = -3.\nNet = 5 + 4 - 3 = +6.\nTime = 60 / 6 = 10 hours.',
            examinerTrap: 'New Vendor trap: "The tank was already half full" (calculate for 30 units, not 60!).'
          },
          practiceQuestions: [
            {
              q: 'Pipe X fills in 10h, Y fills in 12h. Leak Z empties in 20h. All open, time to fill?',
              options: ['7.5 h', '8 h', '6.5 h', '9 h'],
              correctIndex: 0,
              hint: 'LCM=60. X=6, Y=5, Z=-3. Net=8. Time = 60/8 = 7.5h.'
            },
            {
              q: 'A fills in 20 min, B fills in 30 min. Leak C empties in 40 min. All open, time to fill?',
              options: ['17 1/7 min', '15 min', '20 min', '16 2/3 min'],
              correctIndex: 0,
              hint: 'LCM=120. A=6, B=4, C=-3. Net=7. Time=120/7 = 17 1/7 min.'
            }
          ]
        }
      ]
    },

    {
      id: 'percentage_profit_loss',
      name: 'Percentage, Profit & Loss and Discount',
      category: 'Arithmetic',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 to 4 Questions',
      typesCount: 5,
      overview: 'Master fractional values (1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%), AB successive rule, and dishonest dealer formula.',
      types: [
        {
          typeNumber: 1,
          title: 'Successive Change (AB Formula)',
          identificationBlueprint: 'Consecutive % increases/decreases, or 2D area expansion.',
          standardMethod: '100 × (1 + a/100) × (1 + b/100).',
          proShortcut: 'Net % Change = a + b + (ab)/100. (Apply sign: + for profit/increase, - for discount/decrease).',
          workedExample: {
            question: 'Price of sugar increases by 20% and consumption decreases by 10%. Net expenditure change?',
            options: ['8% increase', '10% increase', '8% decrease', '2% increase'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'a = +20, b = -10.\nNet = 20 - 10 + (20 × -10)/100 = 10 - 2 = +8% (8% increase).',
            examinerTrap: 'Directly subtracting 20 - 10 = 10% without subtracting the compounded product.'
          },
          practiceQuestions: [
            {
              q: 'Price of a shirt drops by 15% but sales increase by 20%. Net effect on revenue?',
              options: ['5% increase', '2% increase', '3% decrease', '2% decrease'],
              correctIndex: 1,
              hint: '-15 + 20 + (-15*20)/100 = 5 - 3 = 2% increase.'
            },
            {
              q: 'Rectangle length +30%, width -20%. Area change?',
              options: ['4% increase', '10% increase', '4% decrease', '6% increase'],
              correctIndex: 0,
              hint: '+30 - 20 + (30*-20)/100 = 10 - 6 = 4% increase.'
            }
          ]
        },
        {
          typeNumber: 2,
          title: 'Dishonest Dealer / False Weights',
          identificationBlueprint: 'Claims to sell at CP but uses X grams instead of 1 kg.',
          standardMethod: 'Setting CP of 1g = Re 1.',
          proShortcut: 'Profit % = [ (True Weight - False Weight) / False Weight ] × 100%. (Always put False Weight in denominator!)',
          workedExample: {
            question: 'A dealer claims to sell at CP but gives 900g instead of 1000g. Profit %?',
            options: ['11 1/9%', '10%', '11 1/2%', '12%'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Profit % = [(1000 - 900) / 900] × 100% = 100/900 = 1/9 = 11 1/9%.',
            examinerTrap: 'Dividing by 1000 (gives 10%), which is Option B in Modern Exam Pattern!'
          },
          practiceQuestions: [
            {
              q: 'Dishonest grocer sells at CP but uses 800g weight instead of 1kg. Profit %?',
              options: ['20%', '25%', '15%', '10%'],
              correctIndex: 1,
              hint: '(1000-800)/800 * 100 = 200/800 = 1/4 = 25%.'
            },
            {
              q: 'A dealer claims 10% loss on CP but gives 800g instead of 1kg. Real profit/loss?',
              options: ['12.5% gain', '10% loss', '5% gain', '12.5% loss'],
              correctIndex: 0,
              hint: 'SP = 900. CP = 800. Profit = 100/800 * 100 = 12.5% gain.'
            }
          ]
        },
        {
          typeNumber: 3,
          title: 'Marked Price to Cost Price (MP / CP) Ratio',
          identificationBlueprint: 'Problem mentions both Discount % and Profit %.',
          standardMethod: 'Finding SP first from CP, then equating SP to MP*(1 - D/100).',
          proShortcut: 'MP / CP = (100 + Profit%) / (100 - Discount%). Instant 1-line ratio!',
          workedExample: {
            question: 'After giving 10% discount, trader earns 17% profit. If CP = ₹500, find MP.',
            options: ['₹650', '₹620', '₹600', '₹700'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'MP / CP = (100 + 17) / (100 - 10) = 117 / 90 = 13 / 10.\n10 units = 500 => 1 unit = 50.\nMP = 13 × 50 = ₹650.',
            examinerTrap: 'Applying discount on CP instead of MP.'
          },
          practiceQuestions: [
            {
              q: 'Discount 20%, Profit 20%. If MP = ₹900, find CP.',
              options: ['₹600', '₹500', '₹700', '₹650'],
              correctIndex: 0,
              hint: 'MP/CP = (100+20)/(100-20) = 120/80 = 3/2. 3 units = 900 -> 2 units = 600.'
            },
            {
              q: 'Trader allows 15% discount and gains 19%. If CP = ₹170, MP is?',
              options: ['₹238', '₹250', '₹240', '₹220'],
              correctIndex: 0,
              hint: 'MP/CP = 119/85 = 7/5. 5 units = 170 -> 1 unit = 34. 7 units = 238.'
            }
          ]
        },
        {
          typeNumber: 4,
          title: 'Buy X, Get Y Free (Scheme Discount)',
          identificationBlueprint: 'Shops offering "Buy 4 Get 1 Free" or "Buy 5 Get 3 Free".',
          standardMethod: 'Setting price per item, calculating free goods value.',
          proShortcut: 'Discount % = [ Free Items / Total Items Taken ] × 100%. (Total Items = Buy + Free).',
          workedExample: {
            question: 'What is the effective discount % in the scheme: "Buy 5, Get 3 Free"?',
            options: ['37.5%', '60%', '33.33%', '40%'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: 'Free = 3. Total items customer receives = 5 + 3 = 8.\nDiscount % = (3 / 8) × 100% = 37.5%.',
            examinerTrap: 'Dividing by 5 (giving 60%). The customer walks away with 8 articles!'
          },
          practiceQuestions: [
            {
              q: 'Buy 3, Get 1 Free. Effective discount %?',
              options: ['33.33%', '25%', '20%', '30%'],
              correctIndex: 1,
              hint: 'Free=1, Total=4. 1/4 * 100 = 25%.'
            },
            {
              q: 'Buy 2 Get 1 Free + additional 10% discount. Total discount?',
              options: ['40%', '33.3%', '35%', '43.3%'],
              correctIndex: 0,
              hint: 'First discount = 1/3 = 33.33%. Net = -33.33 - 10 + (33.33*10)/100 = -40%.'
            }
          ]
        },
        {
          typeNumber: 5,
          title: 'Two Articles Sold at Same SP (One at +x%, Other at -x%)',
          identificationBlueprint: 'Two items sold at identical Selling Price; one at x% gain, other at x% loss.',
          standardMethod: 'Calculating CP1 and CP2 individually, then finding total CP and total SP.',
          proShortcut: 'Always a Loss: Net Loss % = (x / 10)² = x² / 100%. Loss in Rupees = (2 × Total SP × x²) / (100² - x²).',
          workedExample: {
            question: 'A man sells two horses for ₹990 each, one at 10% gain and other at 10% loss. What is his net gain or loss %?',
            options: ['1% loss', '1% gain', 'No loss no gain', '2% loss'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: 'Loss % = x² / 100 = 10² / 100 = 1% loss.',
            examinerTrap: 'Selecting "No loss no gain" by assuming +10% and -10% cancel out!'
          },
          practiceQuestions: [
            {
              q: 'Two TVs sold for ₹4000 each. One at 20% gain, other at 20% loss. Net loss %?',
              options: ['4% loss', '2% loss', 'No loss no gain', '8% loss'],
              correctIndex: 0,
              hint: 'Loss = 20^2 / 100 = 400/100 = 4% loss.'
            },
            {
              q: 'Two bikes sold at ₹12000 each. One at 25% profit, other 25% loss. Overall result?',
              options: ['6.25% gain', '6.25% loss', '5% loss', '10% loss'],
              correctIndex: 1,
              hint: 'Loss = 25^2 / 100 = 625/100 = 6.25% loss.'
            }
          ]
        }
      ]
    },

    {
      id: 'simple_compound_interest',
      name: 'Simple & Compound Interest (CI & SI)',
      category: 'Arithmetic',
      highYieldRating: 5,
      avgQuestionsPerPaper: '2 to 3 Questions',
      typesCount: 4,
      overview: 'Golden multipliers (2:1 for 2 yrs, 3:3:1 for 3 yrs) eliminate 90% of tedious binomial expansion.',
      types: [
        {
          typeNumber: 1,
          title: 'Difference between CI and SI for 2 & 3 Years',
          identificationBlueprint: 'Given difference between CI and SI for 2 years or 3 years. Asked for Principal or Rate.',
          standardMethod: 'Calculating P(1+R/100)^2 - P - P*R*2/100.',
          proShortcut: 'Instant Formulas:\n- 2 Years Difference: D = P × (R / 100)²\n- 3 Years Difference: D = P × (R / 100)² × (3 + R/100).',
          workedExample: {
            question: 'The difference between CI and SI on a sum at 10% p.a. for 2 years is ₹65. What is the sum?',
            options: ['₹6,500', '₹6,000', '₹7,000', '₹5,500'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'D = P × (R / 100)²\n65 = P × (10/100)² = P × (1/100)\nP = 65 × 100 = ₹6,500.',
            examinerTrap: 'Mixing 2-year difference formula with 3-year formula.'
          },
          practiceQuestions: [
            {
              q: 'Diff between CI and SI on a sum at 5% for 2 years is ₹25. Sum?',
              options: ['₹10000', '₹8000', '₹15000', '₹5000'],
              correctIndex: 0,
              hint: '25 = P * (5/100)^2 = P/400. P = 25*400 = 10000.'
            },
            {
              q: 'Diff between CI and SI for 3 years at 10% is ₹31. Sum?',
              options: ['₹1000', '₹2000', '₹3100', '₹1500'],
              correctIndex: 0,
              hint: '31 = P * (10/100)^2 * (3 + 10/100) = P * 1/100 * 3.1. P = 1000.'
            }
          ]
        },
        {
          typeNumber: 2,
          title: 'Pascal’s Golden Multipliers for CI (2:1 and 3:3:1)',
          identificationBlueprint: 'Calculating Compound Interest on principal P at rate R for 2 or 3 years.',
          standardMethod: 'Multiplying large 3-digit decimals e.g. 1.12 × 1.12 × 1.12.',
          proShortcut: 'Golden Multipliers:\n- For 2 Years: 2A + B (where A = R% of P, B = R% of A)\n- For 3 Years: 3A + 3B + C (where A = R% of P, B = R% of A, C = R% of B).',
          workedExample: {
            question: 'Find the CI on ₹10,000 for 3 years at 10% per annum compounded annually.',
            options: ['₹3,310', '₹3,300', '₹3,100', '₹3,250'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'A = 10% of 10,000 = 1000\nB = 10% of 1000 = 100\nC = 10% of 100 = 10\nCI = 3A + 3B + C = 3(1000) + 3(100) + 10 = 3000 + 300 + 10 = ₹3,310.',
            examinerTrap: 'Calculating Total Amount instead of Compound Interest.'
          },
          practiceQuestions: [
            {
              q: 'CI on ₹5000 at 20% for 2 years?',
              options: ['₹2200', '₹2000', '₹2400', '₹2100'],
              correctIndex: 0,
              hint: 'A = 1000, B = 200. CI = 2A + B = 2000 + 200 = 2200.'
            },
            {
              q: 'CI on ₹8000 at 5% for 3 years?',
              options: ['₹1250', '₹1261', '₹1260', '₹1300'],
              correctIndex: 1,
              hint: 'A=400, B=20, C=1. CI = 3(400) + 3(20) + 1 = 1200+60+1 = 1261.'
            }
          ]
        },
        {
          typeNumber: 3,
          title: 'Sum Becoming "N Times" in T Years',
          identificationBlueprint: 'Sum doubles in 4 years, in how many years will it become 8 times?',
          standardMethod: 'Equating powers using logarithms.',
          proShortcut: 'The Power Rule for CI: If sum becomes P^x in T years, it becomes P^(n·x) in n × T years! (Powers multiply the time). For SI: (N1 - 1)/T1 = (N2 - 1)/T2.',
          workedExample: {
            question: 'A sum of money placed at CI doubles itself in 5 years. In how many years will it become 8 times itself?',
            options: ['15 years', '20 years', '25 years', '10 years'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: '2¹ times = 5 years.\n8 times = 2³ times.\nTime = 3 × 5 = 15 years.',
            examinerTrap: 'Treating CI as SI and calculating 5 × 4 = 20 years!'
          },
          practiceQuestions: [
            {
              q: 'Sum doubles in 3 years at CI. When will it become 16 times?',
              options: ['9 years', '12 years', '15 years', '8 years'],
              correctIndex: 1,
              hint: '16 = 2^4. Time = 4 * 3 = 12 years.'
            },
            {
              q: 'At CI, a sum triples in 4 years. 27 times in?',
              options: ['12 years', '16 years', '9 years', '8 years'],
              correctIndex: 0,
              hint: '27 = 3^3. Time = 3 * 4 = 12 years.'
            }
          ]
        },
        {
          typeNumber: 4,
          title: 'Equal Annual Installments in CI',
          identificationBlueprint: 'Loan repaid in 2 equal annual installments at R% per annum.',
          standardMethod: 'Setting present value equations with fractions.',
          proShortcut: 'Ratio Method: At R% = 1/x, 1st year ratio = x : (x+1). 2nd year ratio = x² : (x+1)². Multiply 1st year by (x+1) to equalize installments. Total Principal = sum of adjusted left side; Each installment = (x+1)².',
          workedExample: {
            question: 'A loan of ₹2,100 is repaid in 2 equal annual installments at 10% CI. What is each installment?',
            options: ['₹1,210', '₹1,150', '₹1,200', '₹1,100'],
            correctIndex: 0,
            targetTime: '25 seconds',
            shortcutApplication: '10% = 1/10. Principal : Installment\nYear 1: 10 : 11  (multiply by 11) -> 110 : 121\nYear 2: 100 : 121 -> 100 : 121\nTotal Principal = 110 + 100 = 210 units.\n210 units = ₹2,100 => 1 unit = ₹10.\nEach installment = 121 × 10 = ₹1,210.',
            examinerTrap: 'Dividing ₹2100 by 2 and adding 10%.'
          },
          practiceQuestions: [
            {
              q: 'Loan of ₹6800 repaid in 2 equal annual installments at 12.5% CI. Installment?',
              options: ['₹4050', '₹4000', '₹4100', '₹3800'],
              correctIndex: 0,
              hint: '12.5% = 1/8. 8:9 -> 72:81 (mult 9). Yr 2: 64:81. Total P=136 units=6800 -> 1u=50. Inst=81*50=4050.'
            },
            {
              q: '₹2550 loan at 4% CI in 2 installments. Each installment?',
              options: ['₹1300', '₹1350', '₹1352', '₹1400'],
              correctIndex: 2,
              hint: '4%=1/25. 25:26 -> 650:676. Yr 2: 625:676. P=1275=2550 -> 1u=2. Inst=676*2=1352.'
            }
          ]
        }
      ]
    },

    {
      id: 'ratio_proportion_mixture',
      name: 'Ratio, Proportion, Mixture & Alligation',
      category: 'Arithmetic',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 Questions',
      typesCount: 4,
      overview: 'Alligation is a master calculation tool applicable across Averages, Profit/Loss, Interest, and Mixtures.',
      types: [
        {
          typeNumber: 1,
          title: 'Cross-Multiplication Method for Ratio Alteration',
          identificationBlueprint: 'Ratio of A and B is given. After adding/subtracting values X and Y, ratio becomes C:D.',
          standardMethod: 'Setting linear equations (ax + X) / (bx + Y) = c/d.',
          proShortcut: 'Cross-Multiplication Pattern:\nOriginal: a : b\nNew:      c : d\nChange:  +x  +y\n1 unit = |(c·y - d·x)| / |(a·d - b·c)|. Instant result without writing variables!',
          workedExample: {
            question: 'The ratio of income of A and B is 5:3, and their expenditure is 9:5. If they save ₹1,300 and ₹900 respectively, find A’s income.',
            options: ['₹4,000', '₹3,500', '₹4,500', '₹5,000'],
            correctIndex: 0,
            targetTime: '20 seconds',
            shortcutApplication: 'Top cross: 5×5 - 9×3 = 25 - 27 = 2 units.\nBottom cross: 9×900 - 5×1300 = 8100 - 6500 = 1600.\n2 units = 1600 => 1 unit = 800.\nA’s income = 5 × 800 = ₹4,000.',
            examinerTrap: 'Applying unit value to expenditure ratio (9:5). Cross multiplication solves ONLY for the top ratio!'
          }
        },
        {
          typeNumber: 2,
          title: 'Mean, Third, and Fourth Proportional',
          identificationBlueprint: 'Asked to find Mean Proportional of a, b or Third Proportional of a, b.',
          standardMethod: 'Setting a/b = b/c.',
          proShortcut: 'Key Formulas:\n- Mean Proportional = √(a × b)\n- Third Proportional = b² / a\n- Fourth Proportional of a, b, c = (b × c) / a.',
          workedExample: {
            question: 'What is the third proportional to 16 and 24?',
            options: ['36', '32', '40', '28'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Third Proportional = b² / a = 24² / 16 = 576 / 16 = 36.',
            examinerTrap: 'Calculating mean proportional instead of third.'
          }
        },
        {
          typeNumber: 3,
          title: 'Alligation Cross Rule',
          identificationBlueprint: 'Two quantities of different prices/percentages mixed to form an intermediate price/percentage.',
          standardMethod: 'Setting weighted average equations w1·x1 + w2·x2 = (w1+w2)·M.',
          proShortcut: 'Cross Diagram:\n[Cheaper Value]       [Dearer Value]\n            \\       /\n           [Mean Value]\n            /       \\\n[Dearer - Mean]   :  [Mean - Cheaper]\nRatio of Quantities = (d - m) : (m - c).',
          workedExample: {
            question: 'In what ratio must rice at ₹45/kg be mixed with rice at ₹60/kg so that the mixture is worth ₹50/kg?',
            options: ['2 : 1', '1 : 2', '3 : 2', '2 : 3'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Cheaper = 45, Dearer = 60, Mean = 50.\nRatio = (60 - 50) : (50 - 45) = 10 : 5 = 2 : 1.',
            examinerTrap: 'Inverting ratio to 1:2. Left column corresponds to left ingredient!'
          }
        },
        {
          typeNumber: 4,
          title: 'Repeated Liquid Replacement Formula',
          identificationBlueprint: 'Vessel full of liquid. Y litres drawn out and replaced with water, repeated N times.',
          standardMethod: 'Calculating liquid left step by step after each replacement.',
          proShortcut: 'Remaining Pure Liquid = Initial Liquid × [ 1 - (Drawn / Total) ]ⁿ.',
          workedExample: {
            question: 'A container contains 40 litres of milk. 4 litres are taken out and replaced with water. This process is repeated 2 more times (total 3 times). How much milk remains?',
            options: ['29.16 litres', '28.5 litres', '30.2 litres', '27.8 litres'],
            correctIndex: 0,
            targetTime: '20 seconds',
            shortcutApplication: 'Remaining = 40 × [1 - 4/40]³ = 40 × (9/10)³ = 40 × 729/1000 = 29.16 litres.',
            examinerTrap: 'New Vendor questions ask: "What is the ratio of milk to water left?". Milk = 29.16, Water = 40 - 29.16 = 10.84!'
          }
        }
      ]
    },

    {
      id: 'time_speed_distance_trains',
      name: 'Time, Speed & Distance, Trains and Boats',
      category: 'Arithmetic',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 Questions',
      typesCount: 4,
      overview: 'Distance = Speed × Time. Master average speed harmonic mean, train lengths addition, and upstream/downstream speed decoupling.',
      types: [
        {
          typeNumber: 1,
          title: 'Average Speed for Equal Distance (Harmonic Mean)',
          identificationBlueprint: 'Goes at speed x and returns at speed y over the exact same distance.',
          standardMethod: 'Assuming distance = D, calculating Total Distance / Total Time.',
          proShortcut: 'Formula for 2 Speeds: Average Speed = (2xy) / (x + y). For 3 equal distances: (3xyz) / (xy + yz + zx) or LCM distance method.',
          workedExample: {
            question: 'A boy goes to school at 20 km/h and returns at 30 km/h. What is his average speed for the whole journey?',
            options: ['24 km/h', '25 km/h', '26 km/h', '22.5 km/h'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Avg Speed = (2 × 20 × 30) / (20 + 30) = 1200 / 50 = 24 km/h.',
            examinerTrap: 'Taking arithmetic average (20+30)/2 = 25 km/h (Option B)! Average speed is weighted toward the slower speed.'
          }
        },
        {
          typeNumber: 2,
          title: 'Early and Late Time-Speed Rule',
          identificationBlueprint: 'If travels at speed S1, arrives t1 minutes late; if at S2, arrives t2 minutes early.',
          standardMethod: 'Setting equations D/S1 - D/S2 = Δt.',
          proShortcut: 'Direct Distance Formula: Distance = [ (S1 × S2) / |S1 - S2| ] × (Total Time Difference in Hours). (Late + Early => ADD times; Late + Late or Early + Early => SUBTRACT times).',
          workedExample: {
            question: 'Walking at 4 km/h, a student is 10 mins late. At 5 km/h, he is 5 mins early. Find distance to school.',
            options: ['5 km', '6 km', '4 km', '7.5 km'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'S1 = 4, S2 = 5, |S1 - S2| = 1.\nTime difference = 10 mins late + 5 mins early = 15 mins = 15/60 = 1/4 hr.\nDistance = (4 × 5 / 1) × (1/4) = 20 × 1/4 = 5 km.',
            examinerTrap: 'Forgetting to convert 15 minutes to hours by dividing by 60.'
          }
        },
        {
          typeNumber: 3,
          title: 'Train Crossing Moving Objects & Bridges',
          identificationBlueprint: 'Train crossing a platform, another train, or a person running in same/opposite direction.',
          standardMethod: 'Setting separate equations without accounting for length and relative speed simultaneously.',
          proShortcut: 'Master Train Rule:\n- Distance = Length of Train + Length of Object (Length of pole/man = 0).\n- Speed = (S1 + S2) if OPPOSITE direction; |S1 - S2| if SAME direction.\n- Conversion: km/h × (5/18) = m/s.',
          workedExample: {
            question: 'A train 150m long moving at 54 km/h crosses a platform 250m long. Find time taken.',
            options: ['26.67 seconds', '25 seconds', '30 seconds', '20 seconds'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'Total Distance = 150 + 250 = 400 m.\nSpeed = 54 × (5/18) = 15 m/s.\nTime = 400 / 15 = 80 / 3 = 26.67 seconds.',
            examinerTrap: 'Forgetting to add platform length to train length.'
          }
        },
        {
          typeNumber: 4,
          title: 'Boats & Streams Decoupling Formula',
          identificationBlueprint: 'Given Upstream speed (U) and Downstream speed (D).',
          standardMethod: 'Solving B - S = U and B + S = D algebraically.',
          proShortcut: 'Decoupling:\n- Speed of Boat in Still Water (B) = (Downstream + Upstream) / 2 = (D + U) / 2\n- Speed of Stream / Current (C) = (Downstream - Upstream) / 2 = (D - U) / 2.',
          workedExample: {
            question: 'A boat moves 18 km/h downstream and 12 km/h upstream. What is the speed of the current?',
            options: ['3 km/h', '15 km/h', '6 km/h', '2.5 km/h'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: 'Speed of Current = (D - U) / 2 = (18 - 12) / 2 = 6 / 2 = 3 km/h.',
            examinerTrap: 'Marking 15 km/h (which is the speed of the boat in still water!).'
          }
        }
      ]
    },

    {
      id: 'number_system_simplification',
      name: 'Number System, Divisibility & Surds',
      category: 'Arithmetic',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 to 4 Questions',
      typesCount: 5,
      overview: 'Modern Exam Pattern tests Divisibility by 72 (8 & 9) and 88 (8 & 11), Unit Digits, and Remainder Theorem.',
      types: [
        {
          typeNumber: 1,
          title: 'Divisibility by 72, 88, and 99 (Two-Digit Missing Variables)',
          identificationBlueprint: 'Number like 7x5432y is divisible by 72 (or 88). Find value of 2x + 3y.',
          standardMethod: 'Testing all combinations 0-9 for both x and y.',
          proShortcut: 'Decomposition Technique:\n- Divisible by 72: Must be divisible by 8 AND 9. (Test last 3 digits for 8 to find y; then digital sum for 9 to find x).\n- Divisible by 88: Must be divisible by 8 AND 11.',
          workedExample: {
            question: 'If the 8-digit number 789x531y is divisible by 72, find the value of (5x - 3y) for the largest value of y.',
            options: ['-1', '2', '0', '5'],
            correctIndex: 0,
            targetTime: '30 seconds',
            shortcutApplication: '1. Divisible by 8: Last 3 digits 31y must be div by 8. 312 / 8 = 39. So y = 2 (only value since next is 312+8=320).\n2. Divisible by 9: Sum of digits = 7 + 8 + 9 + x + 5 + 3 + 1 + 2 = 35 + x. For div by 9, 35 + x = 36 => x = 1.\n3. Value = 5(1) - 3(2) = 5 - 6 = -1.',
            examinerTrap: 'Missing that y must satisfy 3-digit divisibility by 8 first.'
          }
        },
        {
          typeNumber: 2,
          title: 'Unit Digit Cyclicity Rule (Power mod 4)',
          identificationBlueprint: 'Large base raised to large power e.g. (2467)¹⁵³ × (341)⁷².',
          standardMethod: 'Long calculations.',
          proShortcut: 'Cyclicity of 4: Divide power by 4.\n- If remainder is 1, 2, 3: Unit digit = base^rem.\n- If remainder is 0: Unit digit = base⁴.\n- Invariant digits: 0, 1, 5, 6 ALWAYS end in themselves!',
          workedExample: {
            question: 'Find the unit digit of (7)⁹⁵ - (3)⁵⁸.',
            options: ['4', '6', '7', '3'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: '1. 7⁹⁵: 95 mod 4 = 3 => 7³ = 343 => unit digit = 3.\n2. 3⁵⁸: 58 mod 4 = 2 => 3² = 9 => unit digit = 9.\n3. Subtract: 3 - 9 => Borrow 1: 13 - 9 = 4.',
            examinerTrap: 'Doing 9 - 3 = 6! Remember it is 3 - 9, so you must borrow from tens place: 13 - 9 = 4!'
          }
        },
        {
          typeNumber: 3,
          title: 'Number of Trailing Zeroes',
          identificationBlueprint: 'Number of zeroes at the end of N! (factorial) or product.',
          standardMethod: 'Factoring every single number.',
          proShortcut: 'Legendre’s Formula: Zeroes are created by factor 5 (since 2s are abundant). Number of zeroes in N! = [N/5] + [N/25] + [N/125] + ... (integer parts only).',
          workedExample: {
            question: 'Find the number of trailing zeroes at the end of 100!.',
            options: ['24', '20', '25', '22'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: '[100 / 5] = 20\n[100 / 25] = 4\nTotal zeroes = 20 + 4 = 24.',
            examinerTrap: 'Stopping at 100/5 = 20 and forgetting to divide by 25!'
          }
        },
        {
          typeNumber: 4,
          title: 'HCF and LCM Fundamental Identity',
          identificationBlueprint: 'Product of two numbers, their HCF and LCM.',
          standardMethod: 'Factoring polynomials.',
          proShortcut: 'First Number × Second Number = HCF × LCM. If ratio of numbers is a:b, numbers are (H·a) and (H·b), and LCM = H × a × b.',
          workedExample: {
            question: 'The HCF of two numbers is 11 and their LCM is 693. If one number is 77, find the other.',
            options: ['99', '88', '108', '95'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: '77 × N = 11 × 693 => N = (11 × 693) / 77 = 693 / 7 = 99.',
            examinerTrap: 'Arithmetic division errors.'
          }
        },
        {
          typeNumber: 5,
          title: 'Surds Rationalization & Square Root of a + 2√b',
          identificationBlueprint: 'Expression: √(a + 2√b) or √(a - 2√b).',
          standardMethod: 'Squaring options.',
          proShortcut: 'Two Factor Rule: Find two numbers x and y such that (x + y = a) and (x × y = b). Then √(a ± 2√b) = √x ± √y!',
          workedExample: {
            question: 'Find the value of √(7 + 4√3).',
            options: ['2 + √3', '2 - √3', '√5 + √2', '3 + √2'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Rewrite as √(7 + 2√12). Find x, y: x + y = 7 and x × y = 12 => x = 4, y = 3.\nResult = √4 + √3 = 2 + √3.',
            examinerTrap: 'Missing the factor 2 outside the inner square root.'
          }
        }
      ]
    },

    {
      id: 'average_and_ages',
      name: 'Averages & Age Calculations',
      category: 'Arithmetic',
      highYieldRating: 4,
      avgQuestionsPerPaper: '2 Questions',
      typesCount: 3,
      overview: 'Net deviation method solves average questions without calculating massive totals.',
      types: [
        {
          typeNumber: 1,
          title: 'Net Deviation Method (Balance Scale)',
          identificationBlueprint: 'Average of 25 numbers is X. 1st 12 numbers avg is Y, last 12 is Z. Find 13th number.',
          standardMethod: 'Multiplying 25 × X - (12 × Y + 12 × Z). Long multi-digit calculations.',
          proShortcut: 'Deviation Shortcut: 13th number = Overall Average - (Sum of Deviations). Let deviations be d1 = (Y - X) × 12 and d2 = (Z - X) × 12.',
          workedExample: {
            question: 'The average of 11 numbers is 50. The average of first 6 is 49 and that of last 6 is 52. Find the 6th number.',
            options: ['56', '54', '52', '58'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'Deviations from 50:\nFirst 6: 49 - 50 = -1 × 6 = -6\nLast 6: 52 - 50 = +2 × 6 = +12\nNet Deviation = -6 + 12 = +6.\nSince 6th number is counted twice: 6th number = 50 + 6 = 56.',
            examinerTrap: 'Subtracting +6 instead of adding when an element is counted twice.'
          }
        },
        {
          typeNumber: 2,
          title: 'Inclusion & Exclusion of a Member (Teacher/Student Weight)',
          identificationBlueprint: 'A group of N people has average A. When teacher joins, average increases by k.',
          standardMethod: 'Calculating (N + 1)*(A + k) - N*A.',
          proShortcut: 'Formula:\n- New Member’s Value = Old Average + (New Total Count × Increase in Average)\n- If average decreases: Old Average - (New Total Count × Decrease).',
          workedExample: {
            question: 'The average weight of 24 students in a class is 40 kg. If the teacher’s weight is included, average increases by 1 kg. What is teacher’s weight?',
            options: ['65 kg', '64 kg', '60 kg', '62 kg'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Teacher’s weight = 40 + (25 × 1) = 40 + 25 = 65 kg.',
            examinerTrap: 'Multiplying 1 by 24 instead of the new total count 25!'
          }
        },
        {
          typeNumber: 3,
          title: 'Age Ratio Differences (Equal Gap Normalization)',
          identificationBlueprint: 'Ratio of ages of A and B is given today, and given after N years.',
          standardMethod: 'Setting (a·x + N) / (b·x + N) = c/d.',
          proShortcut: 'Gap Equalization: The age difference between two people NEVER changes! Make the difference between ratio terms equal by cross-multiplying, then equate 1 ratio unit to N years.',
          workedExample: {
            question: 'Present age ratio of A and B is 3:4. 5 years ago, the ratio was 2:3. Find A’s present age.',
            options: ['15 years', '20 years', '18 years', '12 years'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Difference in 3:4 is 1. Difference in 2:3 is 1 (already equal!).\nRatio jump from 2 to 3 is 1 unit.\n1 unit = 5 years.\nA’s present age = 3 units = 3 × 5 = 15 years.',
            examinerTrap: 'Calculating B’s age when A’s was asked.'
          }
        }
      ]
    },

    {
      id: 'algebra_advanced',
      name: 'Algebra, Polynomials & Symmetrical Functions',
      category: 'Advanced Maths',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 to 4 Questions',
      typesCount: 4,
      overview: 'Value putting and identity pattern recognition eliminates writing quadratic expansions.',
      types: [
        {
          typeNumber: 1,
          title: 'x + 1/x Power Progressions',
          identificationBlueprint: 'Given: x + 1/x = k. Asked for squares, cubes, 4th, 5th, or 6th powers.',
          standardMethod: 'Manual squaring and factoring.',
          proShortcut: 'Direct formulas:\n- x² + 1/x² = k² - 2\n- x³ + 1/x³ = k³ - 3k\n- x⁴ + 1/x⁴ = (k² - 2)² - 2\n- x⁵ + 1/x⁵ = (x² + 1/x²)(x³ + 1/x³) - (x + 1/x)\n- x⁶ + 1/x⁶ = (x³ + 1/x³)² - 2\nFor x - 1/x = k: x² + 1/x² = k² + 2, x³ - 1/x³ = k³ + 3k.',
          workedExample: {
            question: 'If x + 1/x = 3, find x⁶ + 1/x⁶.',
            options: ['322', '324', '320', '326'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'x³ + 1/x³ = 3³ - 3(3) = 27 - 9 = 18.\nx⁶ + 1/x⁶ = 18² - 2 = 324 - 2 = 322.',
            examinerTrap: 'Marking 18² = 324 without subtracting 2.'
          }
        },
        {
          typeNumber: 2,
          title: 'Value Putting in Symmetrical Expressions',
          identificationBlueprint: 'Variables (a, b, c) in question and constant numbers in options.',
          standardMethod: 'Factorizing 2 pages of polynomials.',
          proShortcut: 'Substitute convenient small numbers: a = 1, b = 1, c = 1 (or 0 if denominator != 0).',
          workedExample: {
            question: 'If a + b + c = 0, find (a²)/(bc) + (b²)/(ca) + (c²)/(ab).',
            options: ['3', '0', '1', '-3'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'Put a = 1, b = 1, c = -2 (sum = 0).\n(1)/(-2) + (1)/(-2) + (4)/(1) = -1/2 - 1/2 + 4 = 3.',
            examinerTrap: 'Putting c = 0 which causes division by zero.'
          }
        },
        {
          typeNumber: 3,
          title: 'Cubic Identity a³ + b³ + c³ - 3abc Forms',
          identificationBlueprint: 'Given (a + b + c) and (ab + bc + ca) or (a² + b² + c²).',
          standardMethod: 'Expanding step by step.',
          proShortcut: 'Two master forms:\n1. (a + b + c) × [ (a + b + c)² - 3(ab + bc + ca) ]\n2. (a + b + c) × [ (a² + b² + c²) - (ab + bc + ca) ].',
          workedExample: {
            question: 'If a + b + c = 6 and ab + bc + ca = 11, find a³ + b³ + c³ - 3abc.',
            options: ['18', '24', '36', '12'],
            correctIndex: 0,
            targetTime: '12 seconds',
            shortcutApplication: 'Formula: 6 × [ 6² - 3(11) ] = 6 × [ 36 - 33 ] = 6 × 3 = 18.',
            examinerTrap: 'Multiplying 33 by 6 directly.'
          }
        },
        {
          typeNumber: 4,
          title: 'Minimum / Maximum of Quadratic Function',
          identificationBlueprint: 'Find the minimum or maximum value of ax² + bx + c.',
          standardMethod: 'Completing the square.',
          proShortcut: 'Extremum Value = c - (b² / 4a) = (4ac - b²) / 4a.\n- If a > 0: Minimum exists.\n- If a < 0: Maximum exists.',
          workedExample: {
            question: 'Find the minimum value of 2x² - 8x + 11.',
            options: ['3', '5', '1', '4'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'a = 2, b = -8, c = 11.\nMin = c - b²/4a = 11 - (-8)²/(4×2) = 11 - 64/8 = 11 - 8 = 3.',
            examinerTrap: 'Providing x = 2 (the point where min occurs) instead of the minimum value 3.'
          }
        }
      ]
    },

    {
      id: 'trigonometry_heights',
      name: 'Trigonometry & Heights and Distances',
      category: 'Advanced Maths',
      highYieldRating: 5,
      avgQuestionsPerPaper: '3 Questions',
      typesCount: 3,
      overview: 'Angle putting (0, 45, 90) solves 80% of identities; 30-60-90 ratios solve heights & distances in 15 seconds.',
      types: [
        {
          typeNumber: 1,
          title: 'Angle Putting Hack (Theta = 0, 45, or 90)',
          identificationBlueprint: 'Complicated trigonometric identity with constant numbers as options.',
          standardMethod: 'Converting everything to sin/cos.',
          proShortcut: 'Rule:\n- Only sin and cos: Put θ = 0° or 90°.\n- Contains tan, cot, sec, cosec: Put θ = 45° (avoids infinity).',
          workedExample: {
            question: 'Value of (sec θ - cos θ)(cosec θ - sin θ)(tan θ + cot θ)?',
            options: ['1', '0', '2', '-1'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'Put θ = 45°: (√2 - 1/√2)(√2 - 1/√2)(1 + 1) = (1/√2)(1/√2)(2) = (1/2)(2) = 1.',
            examinerTrap: 'Putting θ = 0° when cot is present.'
          }
        },
        {
          typeNumber: 2,
          title: 'Complementary Angle Product Rules (A + B = 90°)',
          identificationBlueprint: 'Angles adding to 90° e.g. tan 10° × tan 80°.',
          standardMethod: 'Converting each term using complementary angles.',
          proShortcut: 'If A + B = 90°:\n- tan A × tan B = 1\n- cot A × cot B = 1\n- sin²A + sin²B = 1\n- cos²A + cos²B = 1.',
          workedExample: {
            question: 'Find tan 15° · tan 25° · tan 45° · tan 65° · tan 75°.',
            options: ['1', '0', '√3', '1/√3'],
            correctIndex: 0,
            targetTime: '5 seconds',
            shortcutApplication: '(tan 15° · tan 75°) = 1\n(tan 25° · tan 65°) = 1\ntan 45° = 1\nProduct = 1 × 1 × 1 = 1.',
            examinerTrap: 'Attempting to calculate tan 15° = 2 - √3.'
          }
        },
        {
          typeNumber: 3,
          title: 'Standard Triangles for Heights & Distances',
          identificationBlueprint: 'Elevation/depression angles: 30°, 45°, 60°.',
          standardMethod: 'Writing tan equations and solving simultaneous equations.',
          proShortcut: 'Ratio Rules:\n- 30°-60°-90°: Opposite sides are 1 : √3 : 2\n- 45°-45°-90°: Opposite sides are 1 : 1 : √2.',
          workedExample: {
            question: 'A pole 50√3 m high casts a shadow. Angle of elevation is 60°. Find shadow length.',
            options: ['50 m', '100 m', '75 m', '25√3 m'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Opposite to 60° is √3 = 50√3 => 1 unit = 50.\nBase (opposite to 30°) = 1 unit = 50 m.',
            examinerTrap: 'Multiplying by √3 instead of dividing.'
          }
        }
      ]
    },

    {
      id: 'geometry_triangles_circles',
      name: 'Geometry (Triangles & Circles)',
      category: 'Advanced Maths',
      highYieldRating: 5,
      avgQuestionsPerPaper: '4 to 5 Questions',
      typesCount: 4,
      overview: 'Modern Exam Pattern favorites: Incenter/Circumcenter angles, Tangent-Secant theorem, Cyclic Quadrilaterals.',
      types: [
        {
          typeNumber: 1,
          title: 'Incenter and Circumcenter Angle Formulas',
          identificationBlueprint: 'I is the incenter or O is the circumcenter of ΔABC.',
          standardMethod: 'Using angle bisectors and drawing construction lines.',
          proShortcut: 'Incenter: ∠BIC = 90° + ∠A / 2. (Excenter: 90° - ∠A/2).\nCircumcenter: ∠BOC = 2 × ∠A.',
          workedExample: {
            question: 'In ΔABC, I is the incenter. If ∠BAC = 70°, find ∠BIC.',
            options: ['125°', '140°', '110°', '135°'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: '∠BIC = 90° + 70°/2 = 90° + 35° = 125°.',
            examinerTrap: 'Confusing Incenter (90° + A/2 = 125°) with Circumcenter (2A = 140°, which is Option B!).'
          }
        },
        {
          typeNumber: 2,
          title: 'Tangent-Secant Theorem (PT² = PA × PB)',
          identificationBlueprint: 'Tangent PT from P to circle, and secant PAB intersecting at A and B.',
          standardMethod: 'Similar triangle proofs.',
          proShortcut: 'PT² = PA × PB (where PA is external segment and PB is total secant). Chord AB = PB - PA.',
          workedExample: {
            question: 'From P, tangent PT = 12 cm. Secant PAB has PA = 8 cm. Find chord AB.',
            options: ['10 cm', '18 cm', '8 cm', '12 cm'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: '12² = 8 × PB => 144 = 8 × PB => PB = 18 cm.\nChord AB = PB - PA = 18 - 8 = 10 cm.',
            examinerTrap: 'Marking PB = 18 cm directly without subtracting PA!'
          }
        },
        {
          typeNumber: 3,
          title: 'Direct and Transverse Common Tangents (DCT & TCT)',
          identificationBlueprint: 'Length of direct or transverse common tangent between two circles with radii r1, r2 and distance d.',
          standardMethod: 'Constructing right triangles and Pythagorean theorem.',
          proShortcut: 'Formulas:\n- DCT = √[ d² - (r1 - r2)² ]\n- TCT = √[ d² - (r1 + r2)² ]. (TCT is always shorter than DCT).',
          workedExample: {
            question: 'Two circles of radii 8 cm and 3 cm have centres 13 cm apart. Find length of Direct Common Tangent.',
            options: ['12 cm', '11 cm', '10 cm', '12.5 cm'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'DCT = √[ 13² - (8 - 3)² ] = √[ 169 - 25 ] = √144 = 12 cm.',
            examinerTrap: 'Using (r1 + r2) instead of (r1 - r2).'
          }
        },
        {
          typeNumber: 4,
          title: 'Cyclic Quadrilateral Opposite Angles and Ptolemy’s Theorem',
          identificationBlueprint: 'Four vertices lie on a circle. Given angles or diagonals.',
          standardMethod: 'Summing interior angles.',
          proShortcut: 'Properties:\n- Opposite angles sum to 180°: ∠A + ∠C = 180°, ∠B + ∠D = 180°.\n- Ptolemy’s Theorem: Product of diagonals = sum of products of opposite sides (d1 × d2 = a·c + b·d).',
          workedExample: {
            question: 'In a cyclic quadrilateral ABCD, ∠A = 2x + 4 and ∠C = 3x - 14. Find x.',
            options: ['38°', '36°', '40°', '34°'],
            correctIndex: 0,
            targetTime: '12 seconds',
            shortcutApplication: '(2x + 4) + (3x - 14) = 180 => 5x - 10 = 180 => 5x = 190 => x = 38°.',
            examinerTrap: 'Equating ∠A = ∠C instead of ∠A + ∠C = 180°.'
          }
        }
      ]
    },

    {
      id: 'mensuration_2d_3d',
      name: 'Mensuration 2D & 3D Solids',
      category: 'Advanced Maths',
      highYieldRating: 5,
      avgQuestionsPerPaper: '4 Questions',
      typesCount: 3,
      overview: 'Formula mastery for Cylinder, Cone, Sphere, and the Divisibility by 11 elimination trick.',
      types: [
        {
          typeNumber: 1,
          title: 'Divisibility by 11 Hack for Pi (π) Volumes & Areas',
          identificationBlueprint: 'Question asks for Volume or Surface Area of cylinder, cone, sphere, hemisphere where π = 22/7.',
          standardMethod: 'Manual calculation 22/7 × r² × h with decimals.',
          proShortcut: 'Since 22 contains 11, the numerical answer MUST be a multiple of 11! Test options: (Sum of odd digits - Sum of even digits) = 0 or 11k. Eliminates 90% of options in 5 seconds!',
          workedExample: {
            question: 'Find the volume of a cylinder with radius 7 cm and height 10 cm.',
            options: ['1540 cm³', '1520 cm³', '1480 cm³', '1560 cm³'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: 'Test 11 on 1540: (1 + 4) - (5 + 0) = 5 - 5 = 0. Multiple of 11!\nNo other option is divisible by 11. Instant answer: 1540 cm³.',
            examinerTrap: 'If two options are divisible by 11, check divisibility by 7.'
          }
        },
        {
          typeNumber: 2,
          title: 'Melting and Recasting Conservation of Volume',
          identificationBlueprint: 'A metal solid (e.g. sphere) is melted to recast into smaller cones/spheres. Find count N.',
          standardMethod: 'Computing full volume of large solid, then dividing by small solid volume.',
          proShortcut: 'Number of small solids N = Volume of Large Solid / Volume of 1 Small Solid. Cancel constants (like π, 4/3) BEFORE computing numbers!',
          workedExample: {
            question: 'A metallic sphere of radius 6 cm is melted and recast into small spheres of radius 2 cm. How many small spheres are formed?',
            options: ['27', '18', '9', '36'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'N = (4/3 π R³) / (4/3 π r³) = (R / r)³ = (6 / 2)³ = 3³ = 27.',
            examinerTrap: 'Squaring (6/2)² = 9 instead of cubing.'
          }
        },
        {
          typeNumber: 3,
          title: 'Cutting a Cone Parallel to Base (Frustum Ratios)',
          identificationBlueprint: 'A cone is cut by a plane parallel to base at height h.',
          standardMethod: 'Setting similarity ratios for r, h, l and recalculating volumes.',
          proShortcut: 'Volume Ratio = (Height Ratio)³ = (Radius Ratio)³.\nIf cut at midpoint of height: Height ratio is 1:2 => Volume ratio of small cone to full cone is 1³ : 2³ = 1 : 8. Volume of frustum = 8 - 1 = 7 units!',
          workedExample: {
            question: 'A cone is cut into two parts by a plane parallel to its base through the midpoint of its axis. Find ratio of volume of upper small cone to lower frustum.',
            options: ['1 : 7', '1 : 8', '1 : 4', '1 : 3'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'Upper cone : Full cone = 1³ : 2³ = 1 : 8.\nLower frustum = 8 - 1 = 7.\nRatio of upper cone to frustum = 1 : 7.',
            examinerTrap: 'Selecting 1:8 (which is upper cone to TOTAL cone, not frustum!).'
          }
        }
      ]
    },

    {
      id: 'coordinate_geometry',
      name: 'Coordinate Geometry (Lines, Distance & Reflections)',
      category: 'Advanced Maths',
      highYieldRating: 4,
      avgQuestionsPerPaper: '1 to 2 Questions',
      typesCount: 3,
      overview: 'Straightforward marks in Tier 2. Key concepts: Reflection in axes, slope condition, and shoelace area formula.',
      types: [
        {
          typeNumber: 1,
          title: 'Reflection of Point in Line x = a or y = b',
          identificationBlueprint: 'Find the reflection of point (x, y) in the line x = a or y = b.',
          standardMethod: 'Drawing Cartesian plane and measuring distances.',
          proShortcut: 'Formulas:\n- Reflection in x = a: (2a - x, y)\n- Reflection in y = b: (x, 2b - y)\n- Reflection in origin: (-x, -y)\n- Reflection in line y = x: (y, x).',
          workedExample: {
            question: 'What is the reflection of the point (3, -5) in the line x = -1?',
            options: ['(-5, -5)', '(-4, -5)', '(-5, 5)', '(-3, -5)'],
            correctIndex: 0,
            targetTime: '10 seconds',
            shortcutApplication: 'x’ = 2(-1) - 3 = -2 - 3 = -5. y remains -5.\nReflected point = (-5, -5).',
            examinerTrap: 'Changing the sign of y coordinate when reflecting across vertical line x = a.'
          }
        },
        {
          typeNumber: 2,
          title: 'Parallel and Perpendicular Lines Slopes',
          identificationBlueprint: 'Line parallel or perpendicular to ax + by + c = 0.',
          standardMethod: 'Converting to y = mx + c.',
          proShortcut: 'Slope m = -a/b.\n- Parallel Line: Same slope m1 = m2 (Equation: ax + by + k = 0)\n- Perpendicular Line: m1 × m2 = -1 (Equation: bx - ay + k = 0).',
          workedExample: {
            question: 'What is the slope of a line perpendicular to 3x + 4y - 12 = 0?',
            options: ['4/3', '-3/4', '-4/3', '3/4'],
            correctIndex: 0,
            targetTime: '8 seconds',
            shortcutApplication: 'Given slope m1 = -3/4.\nPerpendicular slope m2 = -1 / (-3/4) = +4/3.',
            examinerTrap: 'Forgetting the negative reciprocal sign.'
          }
        },
        {
          typeNumber: 3,
          title: 'Area of Triangle by Shoelace Formula',
          identificationBlueprint: 'Vertices of triangle given as (x1, y1), (x2, y2), (x3, y3).',
          standardMethod: 'Evaluating 3×3 matrix determinants.',
          proShortcut: 'Shoelace Shift Hack: Shift one vertex to (0, 0) by subtracting its coordinates from all 3 points! If points become (0, 0), (X1, Y1), (X2, Y2), then Area = ½ |X1·Y2 - X2·Y1|!',
          workedExample: {
            question: 'Find the area of triangle with vertices (1, 2), (4, 6), and (3, 8).',
            options: ['5 sq units', '6 sq units', '4 sq units', '7 sq units'],
            correctIndex: 0,
            targetTime: '15 seconds',
            shortcutApplication: 'Shift (1, 2) to (0, 0) by subtracting (1, 2):\n(1, 2) -> (0, 0)\n(4, 6) -> (3, 4)\n(3, 8) -> (2, 6)\nArea = ½ |3(6) - 2(4)| = ½ |18 - 8| = ½(10) = 5 sq units!',
            examinerTrap: 'Matrix sign errors.'
          }
        }
      ]
    }
  ]
};
