import React, { useState, useMemo } from 'react';
import { Zap, Search, Calculator, Brain, BookOpen, Globe, Cpu, Copy, Check, Clock, AlertTriangle } from 'lucide-react';

export const MASTER_SHORTCUTS = [
  // MATHS SHORTCUTS
  {
    subject: 'Maths',
    topic: 'Time & Work',
    title: 'The Add-Back Rule for Person Leaving BEFORE Completion',
    formula: 'Total Days = (Total Work + Leaver’s hypothetical work in left days) / (Eff_A + Eff_B)',
    timeToSolve: '15 seconds',
    explanation: 'Never write algebraic equations! If someone leaves 3 days BEFORE completion, force them to stay by ADDING 3 days of their work to Total Work, then divide by combined efficiency.',
    example: 'A in 10d, B in 15d. Work = 30. A leaves 2d before end. Add 2×3 = 6. Total = 36/5 = 7.2 days.'
  },
  {
    subject: 'Maths',
    topic: 'Percentage & Profit',
    title: 'Marked Price to Cost Price (MP / CP) Golden Ratio',
    formula: 'MP / CP = (100 + Profit%) / (100 - Discount%)',
    timeToSolve: '10 seconds',
    explanation: 'Directly links MP and CP without calculating Selling Price (SP).',
    example: 'Discount = 10%, Profit = 17% => MP/CP = 117/90 = 13/10. If CP=500, MP=650.'
  },
  {
    subject: 'Maths',
    topic: 'Percentage & Profit',
    title: 'Dishonest Dealer / False Weight Profit Formula',
    formula: 'Profit % = [ (True Weight - False Weight) / False Weight ] × 100%',
    timeToSolve: '8 seconds',
    explanation: 'Always put the FALSE weight in the denominator because cost is incurred only on goods actually given.',
    example: 'Uses 900g instead of 1000g => Profit % = (100/900) × 100% = 11.11%.'
  },
  {
    subject: 'Maths',
    topic: 'Compound Interest',
    title: 'CI vs SI Difference for 2 and 3 Years',
    formula: '2 Years: D = P × (R / 100)² | 3 Years: D = P × (R / 100)² × (3 + R/100)',
    timeToSolve: '10 seconds',
    explanation: 'Solves directly for Principal or Rate without expanding (1+R/100)^3.',
    example: 'R = 10%, 2-yr Diff = ₹65 => P = 65 × 100 = ₹6,500.'
  },
  {
    subject: 'Maths',
    topic: 'Speed & Distance',
    title: 'Harmonic Average Speed for Equal Distances',
    formula: 'Avg Speed = (2 × S1 × S2) / (S1 + S2)',
    timeToSolve: '8 seconds',
    explanation: 'Never take arithmetic average (S1+S2)/2! For 2 equal distances, average speed is always the harmonic mean.',
    example: 'Goes at 20 km/h, returns at 30 km/h => (2×20×30)/50 = 24 km/h.'
  },
  {
    subject: 'Maths',
    topic: 'Number System',
    title: 'Divisibility by 72, 88, and 99',
    formula: '72 = 8 × 9 (Check last 3 digits for 8, Digital Sum for 9) | 88 = 8 × 11',
    timeToSolve: '20 seconds',
    explanation: 'Find the unit/tens digit using divisibility by 8 first, then solve for the other digit using digital sum for 9.',
    example: 'In 789x531y div by 72: 31y div by 8 => y=2. Sum 35+x div by 9 => x=1.'
  },
  {
    subject: 'Maths',
    topic: 'Trigonometry',
    title: 'Angle Putting Hack (Theta = 0°, 45°, 90°)',
    formula: 'Only sin & cos -> Put θ = 0° or 90° | Contains tan, cot, sec, cosec -> Put θ = 45°',
    timeToSolve: '12 seconds',
    explanation: 'Replaces complex identity expansions with immediate scalar arithmetic. Never put θ=0° when cot/cosec is present to avoid division by zero.',
    example: '(sec45 - cos45)(cosec45 - sin45)(tan45 + cot45) = (1/√2)(1/√2)(2) = 1.'
  },
  {
    subject: 'Maths',
    topic: 'Mensuration',
    title: 'Divisibility by 11 Rule for Pi (π = 22/7) Volumes',
    formula: '(Sum of Odd digits - Sum of Even digits) = 0 or 11k',
    timeToSolve: '5 seconds',
    explanation: 'Since π = 22/7 contains factor 11, any volume or surface area containing π MUST be divisible by 11. Eliminates 90% of options without computing!',
    example: 'Options: 1540 vs 1520 vs 1480. In 1540: (1+4) - (5+0) = 0 => Option A is correct.'
  },
  {
    subject: 'Maths',
    topic: 'Geometry',
    title: 'Incenter and Circumcenter Angles',
    formula: 'Incenter: ∠BIC = 90° + ∠A / 2 | Circumcenter: ∠BOC = 2 × ∠A',
    timeToSolve: '5 seconds',
    explanation: 'Directly relates apex angle A to center angles formed by angle bisectors (incenter) or perpendicular bisectors (circumcenter).',
    example: 'If ∠A = 70°, Incenter ∠BIC = 90° + 35° = 125°. Circumcenter ∠BOC = 140°.'
  },
  {
    subject: 'Maths',
    topic: 'Coordinate Geometry',
    title: 'Shoelace Area Shift to Origin (0, 0)',
    formula: 'Area = ½ |X1·Y2 - X2·Y1| (after shifting one point to 0,0)',
    timeToSolve: '15 seconds',
    explanation: 'Subtract the coordinates of the first point from all 3 points. Eliminates 3×3 matrix expansion completely.',
    example: 'Points (1,2), (4,6), (3,8) shift by -(1,2) -> (0,0), (3,4), (2,6). Area = ½|3(6) - 2(4)| = 5.'
  },

  // REASONING SHORTCUTS
  {
    subject: 'Reasoning',
    topic: 'Coding-Decoding',
    title: 'Opposite Alphabet Pairs (Sum = 27 Rule)',
    formula: 'Letter Position + Opposite Letter Position = 27',
    timeToSolve: '5 seconds',
    explanation: 'Memory Hooks: A-Z (Amazon), B-Y (Boy), C-X (Crux), D-W (Dew), E-V (Love), F-U (Fun), G-T (GT Road), H-S (High School), I-R (Indian Railway), J-Q (Jungle Queen), K-P (PK), L-O (Love), M-N (Man).',
    example: 'Opposite of K (11) = 27 - 11 = 16 (P).'
  },
  {
    subject: 'Reasoning',
    topic: 'Direction & Distance',
    title: 'The Sunrise & Sunset Shadow Matrix',
    formula: 'Sunrise (Sun in East): Shadow in WEST | Sunset (Sun in West): Shadow in EAST',
    timeToSolve: '8 seconds',
    explanation: 'Morning shadow is WEST. If shadow is on someone’s right, that person faces SOUTH. If on left, faces NORTH.',
    example: 'Morning shadow falls to Suresh’s right => Right is West => Suresh faces South.'
  },
  {
    subject: 'Reasoning',
    topic: 'Order & Ranking',
    title: 'Total Persons and Interchanging Rule',
    formula: 'Total = (New Rank of A) + (Old Rank of B) - 1',
    timeToSolve: '6 seconds',
    explanation: 'When two persons swap places, add the newly stated rank of the 1st person to the original rank of the other person and subtract 1.',
    example: 'A is 10th L, B is 9th R. Swap: A becomes 15th L. Total = 15 + 9 - 1 = 23.'
  },
  {
    subject: 'Reasoning',
    topic: 'Dice & Cube',
    title: 'Clockwise Roll Rule for 1 Common Face',
    formula: 'Roll clockwise starting from common face on both dice views',
    timeToSolve: '8 seconds',
    explanation: 'Write numbers in clockwise order from the common face. Corresponding positions are guaranteed opposite pairs.',
    example: 'Dice 1: 3->5->2. Dice 2: 3->1->6 => 5 is opposite 1, 2 is opposite 6, 3 is opposite 4.'
  },
  {
    subject: 'Reasoning',
    topic: 'Coded Inequalities',
    title: 'Hierarchy Order: King (>) > Queen (≥) > Soldier (=)',
    formula: 'If King (>) is on the open path, King MUST be in the conclusion!',
    timeToSolve: '5 seconds',
    explanation: 'Queen (≥) can only be true if ALL steps have Queen or Soldier (no King permitted on path).',
    example: 'A > B ≥ C = D. Path from A to D has King (>). Hence A > D is true; A ≥ D is false.'
  },

  // ENGLISH SHORTCUTS
  {
    subject: 'English',
    topic: 'Subject-Verb Agreement',
    title: 'First Subject Dominance Rule',
    formula: 'Subject 1 + (along with / as well as / together with / with) + Subject 2 => Verb agrees with Subject 1',
    timeToSolve: '5 seconds',
    explanation: 'Ignore Subject 2 and everything inside commas. Match the verb strictly with Subject 1.',
    example: 'The captain (singular), along with 10 players, was (not were) awarded.'
  },
  {
    subject: 'English',
    topic: 'Active & Passive Voice',
    title: 'Tense Invariance & "Be + V3" Elimination',
    formula: 'Voice NEVER changes tense! V1 -> is/am/are + V3 | V2 -> was/were + V3 | -ing -> being + V3',
    timeToSolve: '5 seconds',
    explanation: 'Never translate sentences! Check verb form. If original is Past (V2), eliminate any option with is/has/will.',
    example: '"He wrote a letter" (Past) -> "A letter was written" (Past). Eliminate "is written" and "has been written".'
  },
  {
    subject: 'English',
    topic: 'Conditionals',
    title: 'The Invariant Conditional Trio',
    formula: 'If + had + V3 requires "would have + V3" in the result clause',
    timeToSolve: '6 seconds',
    explanation: 'Never put "would have" in the if-clause itself. Pair "had + V3" strictly with "would have + V3".',
    example: 'If he had worked hard, he would have passed (not would had passed).'
  },

  // GENERAL AWARENESS SHORTCUTS
  {
    subject: 'General Awareness',
    topic: 'Indian Polity',
    title: 'The 12 Schedules Mnemonic ("TEARS OF OLD PM")',
    formula: 'T-E-A-R-S  O-F  O-L-D  P-M (Schedules 1 to 12)',
    timeToSolve: '5 seconds',
    explanation: 'T: Territories, E: Emoluments, A: Affirmations, R: Rajya Sabha, S: Scheduled Areas, O: Other Tribal, F: Federal Lists, O: Official Languages, L: Land Reforms, D: Defection (10th), P: Panchayats (11th), M: Municipalities (12th).',
    example: 'Anti-defection is letter D (10th letter) = 10th Schedule.'
  },
  {
    subject: 'General Awareness',
    topic: 'Indian Geography',
    title: 'West-Flowing Rivers into Arabian Sea ("NAMASTE SL")',
    formula: 'N-A-MA-S-T-E  S-L',
    timeToSolve: '5 seconds',
    explanation: 'Narmada, Mahi (crosses Tropic of Cancer twice), Sabarmati, Tapti, Sharavati, Luni. All others flow East into Bay of Bengal and form deltas!',
    example: 'Narmada and Tapti flow through rift valleys into Arabian Sea without forming deltas.'
  },
  {
    subject: 'General Awareness',
    topic: 'General Science',
    title: 'Baking Soda vs Washing Soda vs POP Formulas',
    formula: 'Baking = Bicarbonate (NaHCO3) | Washing = 10 Waters (Na2CO3·10H2O) | POP = Half Water (CaSO4·½H2O)',
    timeToSolve: '5 seconds',
    explanation: 'You BAKE with Bicarbonate. You WASH with 10 buckets of water. Plaster of Paris has HALF water.',
    example: 'Baking Soda: NaHCO3. Washing Soda: Na2CO3·10H2O. Plaster of Paris: CaSO4·½H2O.'
  },

  // BANKING SHORTCUTS
  {
    subject: 'Banking',
    topic: 'Quadratic Equations',
    title: 'The -c Constant Instant CND Shortcut',
    formula: 'If constant term (c and f) is NEGATIVE in BOTH equations => Answer is ALWAYS CND!',
    timeToSolve: '2 seconds',
    explanation: 'Both equations produce 1 positive and 1 negative root. A positive is > negative, but mutual cross-comparison creates overlap. Mark CND in 2 seconds without solving!',
    example: 'x² + 7x - 18 = 0 and y² - 4y - 21 = 0 => Both constants negative => Relationship Cannot Be Established (CND)!'
  },
  {
    subject: 'Banking',
    topic: 'Financial Awareness',
    title: 'SDF vs Reverse Repo Rate Distinguisher',
    formula: 'SDF absorbs liquidity WITHOUT government securities collateral | Reverse Repo WITH collateral',
    timeToSolve: '5 seconds',
    explanation: 'Standing Deposit Facility (SDF) empowers RBI to absorb surplus liquidity without having to pledge government bonds.',
    example: 'RBI absorbs ₹2 Lakh Crore via SDF without locking up sovereign securities.'
  }
];

export default function ShortcutsDeck() {
  const [activeSubject, setActiveSubject] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const subjects = ['All', 'Maths', 'Reasoning', 'English', 'General Awareness', 'Banking'];

  const filteredShortcuts = useMemo(() => {
    return MASTER_SHORTCUTS.filter(s => {
      const matchSubject = activeSubject === 'All' || s.subject === activeSubject;
      const matchSearch = 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.explanation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSubject && matchSearch;
    });
  }, [activeSubject, searchQuery]);

  const handleCopy = (formula, idx) => {
    navigator.clipboard.writeText(formula);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/40 border border-amber-900/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400 border border-amber-500/20">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl font-black text-white">
              Modern Exam & Banking Speed Shortcuts Deck
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Every exam-tested speed hack in one place. Replace 90-second algebraic equations with 15-second visual tricks.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubject(sub)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeSubject === sub
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search shortcuts, formulas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Grid of Shortcut Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredShortcuts.map((s, idx) => (
          <div
            key={idx}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-3.5 flex flex-col justify-between hover:border-amber-500/40 transition group"
          >
            <div>
              {/* Badges */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-indigo-300 border border-slate-700">
                  {s.subject} • {s.topic}
                </span>

                <span className="text-[10px] font-bold text-amber-300 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {s.timeToSolve}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition">
                {s.title}
              </h3>

              {/* Formula / Rule Box */}
              <div className="mt-2.5 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300 flex items-center justify-between group-hover:border-emerald-500/30 transition">
                <span className="break-all">{s.formula}</span>
                <button
                  onClick={() => handleCopy(s.formula, idx)}
                  className="p-1 hover:text-white text-slate-500 ml-2 shrink-0 transition"
                  title="Copy formula"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Explanation */}
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                {s.explanation}
              </p>
            </div>

            {/* Example */}
            {s.example && (
              <div className="pt-2.5 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                <span className="text-amber-400 font-bold">Applied:</span> {s.example}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
