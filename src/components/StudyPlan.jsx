import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Target, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Zap, 
  Trophy,
  ChevronRight,
  Flame
} from 'lucide-react';

export default function StudyPlan({ examName = "SSC CGL", onStartTopic }) {
  const [activePhase, setActivePhase] = useState(1); // Phase 1: Days 1-30, Phase 2: Days 31-60, Phase 3: Days 61-90
  const [completedDays, setCompletedDays] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ssc_study_plan_days') || '{}');
    } catch {
      return {};
    }
  });

  const toggleDayComplete = (dayNum) => {
    setCompletedDays(prev => {
      const updated = { ...prev, [dayNum]: !prev[dayNum] };
      localStorage.setItem('ssc_study_plan_days', JSON.stringify(updated));
      return updated;
    });
  };

  const phases = [
    {
      phase: 1,
      title: 'Phase 1: Foundation & Core Concepts',
      days: 'Days 1 to 30',
      description: 'Master core arithmetic, grammar fundamentals, static GK frameworks, and verbal reasoning logic.',
      target: 'Complete 60% of syllabus topics with beginner theory'
    },
    {
      phase: 2,
      title: 'Phase 2: Speed Shortcuts & Advanced Math',
      days: 'Days 31 to 60',
      description: 'Master 20-second shortcuts in Algebra, Geometry, Trigonometry, Puzzles, and Cloze Test elimination.',
      target: 'Reduce solving time to under 35 seconds per question'
    },
    {
      phase: 3,
      title: 'Phase 3: CBT Mocks & PYQ Mastery',
      days: 'Days 61 to 90',
      description: 'Daily full-length 100-question mock tests, 5-year PYQ shifts, and DEST typing speed drills.',
      target: 'Hit 150+ / 200 marks consistently in CBT simulation'
    }
  ];

  // Daily schedules for each phase
  const dailyPlans = {
    1: [
      { day: 1, subject: 'Quant', topic: 'Time & Work (Basics & LCM Unitary Method)', duration: '2 Hours', targetQ: '30 Questions' },
      { day: 2, subject: 'Quant', topic: 'Percentage (Fractions to % table & Successive changes)', duration: '2 Hours', targetQ: '30 Questions' },
      { day: 3, subject: 'Quant', topic: 'Profit & Loss (Dishonest Dealer, MP/CP ratio)', duration: '2 Hours', targetQ: '30 Questions' },
      { day: 4, subject: 'Quant', topic: 'SI & CI (Tree Method & Effective Rate)', duration: '2 Hours', targetQ: '30 Questions' },
      { day: 5, subject: 'Quant', topic: 'Ratio & Proportion (Income/Expenditure & Coins)', duration: '2 Hours', targetQ: '30 Questions' },
      { day: 6, subject: 'Revision', topic: 'Quant Week 1 Formula Revision', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 7, subject: 'Mini Mock', topic: 'Quant Sectional Mini Mock (Eduquity Pattern)', duration: '1 Hour', targetQ: '25 Questions' },
      { day: 8, subject: 'English', topic: '120 Golden Rules: Subject-Verb Agreement', duration: '1.5 Hours', targetQ: '40 Questions' },
      { day: 9, subject: 'English', topic: 'Active & Passive Voice (Tense-Invariance elimination)', duration: '1.5 Hours', targetQ: '30 Questions' },
      { day: 10, subject: 'English', topic: 'Direct & Indirect Speech (Narration Rules)', duration: '1.5 Hours', targetQ: '30 Questions' },
      { day: 11, subject: 'English', topic: 'Vocabulary Root Words & Daily The Hindu Reading', duration: '1.5 Hours', targetQ: '50 Words' },
      { day: 12, subject: 'English', topic: 'Para Jumbles (Connector linking strategy)', duration: '1.5 Hours', targetQ: '20 Questions' },
      { day: 13, subject: 'Revision', topic: 'English Grammar Rules Revision', duration: '1 Hour', targetQ: 'Notes' },
      { day: 14, subject: 'Mini Mock', topic: 'English Sectional Mini Mock', duration: '1 Hour', targetQ: '25 Questions' },
      { day: 15, subject: 'Reasoning', topic: 'Syllogism (Venn diagram & "Only a few" cases)', duration: '1.5 Hours', targetQ: '30 Questions' },
      { day: 16, subject: 'Reasoning', topic: 'Coding-Decoding (Opposite pairs & place values)', duration: '1.5 Hours', targetQ: '40 Questions' },
      { day: 17, subject: 'Reasoning', topic: 'Analogy (Number, Letter & Word based)', duration: '1.5 Hours', targetQ: '40 Questions' },
      { day: 18, subject: 'Reasoning', topic: 'Number & Letter Series (Prime logic & difference)', duration: '1.5 Hours', targetQ: '40 Questions' },
      { day: 19, subject: 'Reasoning', topic: 'Blood Relations (Coded & Pointing form)', duration: '1.5 Hours', targetQ: '30 Questions' },
      { day: 20, subject: 'Revision', topic: 'Reasoning Logic & Patterns Revision', duration: '1 Hour', targetQ: 'Notes' },
      { day: 21, subject: 'Mini Mock', topic: 'Reasoning Sectional Mini Mock', duration: '1 Hour', targetQ: '25 Questions' },
      { day: 22, subject: 'GK', topic: 'Indian Polity (Articles, Amendments, Schedules)', duration: '2 Hours', targetQ: '50 Questions' },
      { day: 23, subject: 'GK', topic: 'Ancient History (Indus Valley, Buddhism/Jainism)', duration: '1.5 Hours', targetQ: '40 Questions' },
      { day: 24, subject: 'GK', topic: 'Modern History (Gandhian Era, INC Sessions)', duration: '1.5 Hours', targetQ: '50 Questions' },
      { day: 25, subject: 'GK', topic: 'Geography (Rivers, Mountains, Passes, Climate)', duration: '1.5 Hours', targetQ: '50 Questions' },
      { day: 26, subject: 'GK', topic: 'Economy (Five Year Plans, RBI, Inflation)', duration: '1.5 Hours', targetQ: '40 Questions' },
      { day: 27, subject: 'Revision', topic: 'GK Fact-sheet & Timeline Revision', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 28, subject: 'Full Mock', topic: 'Full Mock Test 1 (Eduquity Base Level)', duration: '2.5 Hours', targetQ: '100 Questions' },
      { day: 29, subject: 'Science', topic: 'Physics & Chemistry (Units, Light, Acids/Bases)', duration: '2 Hours', targetQ: '50 Questions' },
      { day: 30, subject: 'Science', topic: 'Biology (Vitamins, Diseases, Human Body) + Static GK', duration: '2 Hours', targetQ: '50 Questions' }
    ],
    2: [
      { day: 31, subject: 'Quant', topic: 'Algebra (x + 1/x progression & Value putting)', duration: '2 Hours', targetQ: '40 Questions' },
      { day: 32, subject: 'Quant', topic: 'Geometry (Triangles, Centers, Tangents)', duration: '2.5 Hours', targetQ: '40 Questions' },
      { day: 33, subject: 'Quant', topic: 'Geometry (Circles & Quadrilaterals)', duration: '2 Hours', targetQ: '40 Questions' },
      { day: 34, subject: 'Quant', topic: 'Trigonometry & Heights/Distances', duration: '2 Hours', targetQ: '40 Questions' },
      { day: 35, subject: 'Quant', topic: 'Mensuration 2D & 3D + Data Interpretation', duration: '2 Hours', targetQ: '40 Questions' },
      { day: 36, subject: 'Revision', topic: 'Advanced Quant Formulas Revision', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 37, subject: 'Speed Test', topic: 'Sectional Speed Test: Quant (15 Mins Strict)', duration: '1 Hour', targetQ: '25 Questions' },
      { day: 38, subject: 'Reasoning', topic: 'Direction & Distance (Shadow & Angles)', duration: '1.5 Hours', targetQ: '40 Questions' },
      { day: 39, subject: 'Reasoning', topic: 'Ranking & Order (Overlapping cases)', duration: '1.5 Hours', targetQ: '30 Questions' },
      { day: 40, subject: 'Reasoning', topic: 'Dice & Cubes (Open/Closed Dice tricks)', duration: '1.5 Hours', targetQ: '40 Questions' },
      { day: 41, subject: 'Reasoning', topic: 'Non-Verbal (Paper folding, Mirror Image, Hidden)', duration: '1.5 Hours', targetQ: '50 Questions' },
      { day: 42, subject: 'Reasoning', topic: 'Seating Arrangement (Linear & Circular basics)', duration: '2 Hours', targetQ: '30 Questions' },
      { day: 43, subject: 'Revision', topic: 'Advanced Reasoning Tricks Revision', duration: '1 Hour', targetQ: 'Notes' },
      { day: 44, subject: 'Speed Test', topic: 'Sectional Speed Test: Reasoning (15 Mins Strict)', duration: '1 Hour', targetQ: '25 Questions' },
      { day: 45, subject: 'English', topic: 'Reading Comprehension (Skimming & Scanning)', duration: '1.5 Hours', targetQ: '5 Passages' },
      { day: 46, subject: 'English', topic: 'Cloze Test (Tone analysis & Grammar clues)', duration: '1.5 Hours', targetQ: '5 Tests' },
      { day: 47, subject: 'English', topic: 'One Word Substitution (Frequent SSC words)', duration: '1.5 Hours', targetQ: '100 Words' },
      { day: 48, subject: 'English', topic: 'Idioms & Phrases (Context-based meanings)', duration: '1.5 Hours', targetQ: '100 Idioms' },
      { day: 49, subject: 'English', topic: 'Error Spotting (Mixed Grammar Application)', duration: '1.5 Hours', targetQ: '50 Questions' },
      { day: 50, subject: 'Revision', topic: 'Vocab & Grammar Exceptions Revision', duration: '1 Hour', targetQ: 'Notes' },
      { day: 51, subject: 'Speed Test', topic: 'Sectional Speed Test: English (15 Mins Strict)', duration: '1 Hour', targetQ: '25 Questions' },
      { day: 52, subject: 'GK', topic: 'Current Affairs (Months 1-2) + Important Days', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 53, subject: 'GK', topic: 'Current Affairs (Months 3-4) + Awards/Honors', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 54, subject: 'GK', topic: 'Current Affairs (Months 5-6) + Sports/Appointments', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 55, subject: 'Computer', topic: 'Architecture, Memory & MS Office/Excel Basics', duration: '1.5 Hours', targetQ: '50 Questions' },
      { day: 56, subject: 'Computer & Science', topic: 'Internet, Cyber Security & Science Formula sheet', duration: '1.5 Hours', targetQ: '50 Questions' },
      { day: 57, subject: 'Revision', topic: 'CA & Computer Notes Revision', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 58, subject: 'Full Mock', topic: 'Full Mock Test 2 (Eduquity Intermediate Level)', duration: '2.5 Hours', targetQ: '100 Questions' },
      { day: 59, subject: 'Analysis', topic: 'Weak Area Identification & Concept Brush-up', duration: '2 Hours', targetQ: 'Analysis' },
      { day: 60, subject: 'Practice', topic: 'Targeted Practice on Top 3 Weak Topics', duration: '2 Hours', targetQ: '60 Questions' }
    ],
    3: [
      { day: 61, subject: 'Full Mock', topic: 'CBT Mock 3 (Eduquity Pattern) + Deep Analysis', duration: '3 Hours', targetQ: '100 Questions' },
      { day: 62, subject: 'Error Correction', topic: 'Solve Mock 3 wrong attempts & note new concepts', duration: '2 Hours', targetQ: 'Notes' },
      { day: 63, subject: 'Practice', topic: 'Targeted Practice based on Mock 3 errors', duration: '2 Hours', targetQ: '50 Questions' },
      { day: 64, subject: 'Full Mock', topic: 'CBT Mock 4 (Eduquity Statement-based Questions)', duration: '3 Hours', targetQ: '100 Questions' },
      { day: 65, subject: 'Analysis', topic: 'Mock 4 Analysis & Time Management Review', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 66, subject: 'Revision', topic: 'Weak Area Revision & Typing Practice', duration: '2 Hours', targetQ: 'Typing' },
      { day: 67, subject: 'PYQ Drill', topic: 'SSC CGL 2025 Tier-1 Official Paper 1 (Eduquity)', duration: '3 Hours', targetQ: '100 Questions' },
      { day: 68, subject: 'Analysis', topic: '2025 Pattern Analysis & Keyword Triggers', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 69, subject: 'Pattern Study', topic: 'Conceptual Math & Statement-based GK Practice', duration: '2 Hours', targetQ: '50 Questions' },
      { day: 70, subject: 'PYQ Drill', topic: 'SSC CGL 2024 Tier-1 Official Paper Shift 1', duration: '3 Hours', targetQ: '100 Questions' },
      { day: 71, subject: 'Analysis', topic: '2024 vs 2025/Eduquity Pattern Comparison', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 72, subject: 'PYQ Drill', topic: 'SSC CGL 2024 Tier-1 Official Paper Shift 2', duration: '3 Hours', targetQ: '100 Questions' },
      { day: 73, subject: 'Speed Test', topic: 'Sectional Speed Test: Quant & Reasoning (15m each)', duration: '1.5 Hours', targetQ: '50 Questions' },
      { day: 74, subject: 'Speed Test', topic: 'Sectional Speed Test: English & GK (15m each)', duration: '1.5 Hours', targetQ: '50 Questions' },
      { day: 75, subject: 'Speed Test', topic: 'All 4 Sections Back-to-Back (15m strict sections)', duration: '2 Hours', targetQ: '100 Questions' },
      { day: 76, subject: 'Full Mock', topic: 'Full Mock Test 5 + Advanced Analysis', duration: '3 Hours', targetQ: '100 Questions' },
      { day: 77, subject: 'Marathon', topic: 'GK & Current Affairs 6-Month Marathon', duration: '2.5 Hours', targetQ: 'Notes' },
      { day: 78, subject: 'Marathon', topic: 'Computer Basics & DEST Typing Drill', duration: '2 Hours', targetQ: 'Typing' },
      { day: 79, subject: 'Full Mock', topic: 'Full Mock Test 6 (High Competition level)', duration: '3 Hours', targetQ: '100 Questions' },
      { day: 80, subject: 'Revision', topic: 'Formula Vault & Short Trick Notes Revision', duration: '2 Hours', targetQ: 'Notes' },
      { day: 81, subject: 'Revision', topic: 'Vocab, Idioms, & Grammar Rules Complete Scan', duration: '2 Hours', targetQ: 'Notes' },
      { day: 82, subject: 'Targeted Practice', topic: 'Mini Mocks for Bottom 2 Weak Subjects', duration: '2 Hours', targetQ: '50 Questions' },
      { day: 83, subject: 'Targeted Practice', topic: 'Statement-based Reasoning & Conceptual Math', duration: '2 Hours', targetQ: '50 Questions' },
      { day: 84, subject: 'Targeted Practice', topic: 'Current Affairs specific brush-up (Govt Schemes)', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 85, subject: 'Final Mock', topic: 'Full Mock Test 7 (Exam Timing Simulation)', duration: '3 Hours', targetQ: '100 Questions' },
      { day: 86, subject: 'Review', topic: 'Complete Error Notebook / Mistake Review', duration: '2 Hours', targetQ: 'Notes' },
      { day: 87, subject: 'Review', topic: 'Final Review of Static GK & Formulas', duration: '2 Hours', targetQ: 'Notes' },
      { day: 88, subject: 'Light Revision', topic: 'Scan all cheat sheets & short notes', duration: '1.5 Hours', targetQ: 'Notes' },
      { day: 89, subject: 'Light Revision', topic: 'Mental Calculation practice & Calm reading', duration: '1 Hour', targetQ: 'Relax' },
      { day: 90, subject: 'Rest Day', topic: 'REST DAY — Verify Admit Card, Sleep Early, Trust Prep', duration: '0 Hours', targetQ: 'Admit Card' }
    ]
  };

  const currentList = dailyPlans[activePhase] || dailyPlans[1];

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>Proven AIR-1 Rank Study Blueprint</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          90-Day Master Study Plan for {examName}
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Structured day-by-day roadmap designed for complete beginners to systematically build foundation, learn speed shortcuts, and achieve exam readiness.
        </p>
      </div>

      {/* Phase Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((p) => {
          const isActive = activePhase === p.phase;
          return (
            <button
              key={p.phase}
              onClick={() => setActivePhase(p.phase)}
              className={`p-5 rounded-2xl border text-left transition flex flex-col justify-between ${
                isActive
                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
              }`}
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400">
                  {p.days}
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-300 font-semibold flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                <span>{p.target}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Daily Checklist Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>Phase {activePhase} Daily Action Plan</span>
            </h2>
            <p className="text-xs text-slate-400">Tick off tasks as you complete them to track consistency</p>
          </div>

          <div className="text-xs font-bold text-emerald-400">
            {Object.values(completedDays).filter(Boolean).length} Days Completed
          </div>
        </div>

        <div className="space-y-2.5">
          {currentList.map((plan) => {
            const isDone = completedDays[plan.day];
            return (
              <div
                key={plan.day}
                className={`p-4 rounded-2xl border transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isDone
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-400'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start sm:items-center gap-3">
                  <button
                    onClick={() => toggleDayComplete(plan.day)}
                    className={`mt-0.5 sm:mt-0 w-6 h-6 rounded-lg flex items-center justify-center border transition ${
                      isDone
                        ? 'bg-emerald-500 border-emerald-500 text-white'
                        : 'border-slate-700 hover:border-slate-500 text-transparent'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-indigo-400">
                        Day {plan.day}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-semibold">
                        {plan.subject}
                      </span>
                    </div>

                    <div className={`text-sm font-semibold mt-0.5 ${isDone ? 'line-through text-slate-500' : 'text-slate-100'}`}>
                      {plan.topic}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs pl-9 sm:pl-0">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {plan.duration}
                  </span>
                  <span className="text-amber-400 font-semibold">
                    {plan.targetQ}
                  </span>

                  <button
                    onClick={() => onStartTopic && onStartTopic(plan)}
                    className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-xl text-xs font-bold border border-indigo-500/30 transition flex items-center gap-1"
                  >
                    <span>Start</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
