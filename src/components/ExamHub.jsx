import React, { useState, useEffect } from 'react';
import { 
  Award, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  Flame, 
  Info, 
  Layers, 
  ArrowRight, 
  Filter,
  X,
  Coins,
  Building2,
  FileText,
  TrendingUp,
  Cpu,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { EXAMS_CATALOG, SUBJECT_METADATA } from '../data/examsData';

// Standardized post-preference codes, grade pay, and in-hand salary breakdowns
const EXAM_POST_CODES = {
  ssc_cgl: [
    { code: 'B03', title: 'Assistant Section Officer (ASO)', dept: 'Central Secretariat Service (CSS)', gradePay: 'Level 7 (₹44,900)', inHand: '₹72,000' },
    { code: 'B06', title: 'Assistant Section Officer (ASO)', dept: 'Ministry of External Affairs (MEA)', gradePay: 'Level 7 (₹44,900)', inHand: '₹72,000 + Foreign Allowances' },
    { code: 'B16', title: 'Inspector of Income Tax', dept: 'Central Board of Direct Taxes (CBDT)', gradePay: 'Level 7 (₹44,900)', inHand: '₹70,000' },
    { code: 'B17', title: 'Central Excise & GST Inspector', dept: 'Central Board of Indirect Taxes (CBIC)', gradePay: 'Level 7 (₹44,900)', inHand: '₹70,000 (Uniform Post)' },
    { code: 'B20', title: 'Preventive Officer', dept: 'CBIC (Seaports / Customs / Airports)', gradePay: 'Level 7 (₹44,900)', inHand: '₹70,000' },
    { code: 'B23', title: 'Sub-Inspector', dept: 'Central Bureau of Investigation (CBI)', gradePay: 'Level 7 (₹44,900)', inHand: '₹75,000 (13-month salary)' },
    { code: 'B28', title: 'Auditor', dept: 'Offices under C&AG', gradePay: 'Level 5 (₹29,200)', inHand: '₹44,000' },
    { code: 'B31', title: 'Tax Assistant (TA)', dept: 'CBDT / CBIC', gradePay: 'Level 4 (₹25,500)', inHand: '₹36,000' }
  ],
  ssc_chsl: [
    { code: 'L01', title: 'Lower Division Clerk (LDC)', dept: 'Central Ministries / Attached Offices', gradePay: 'Level 2 (₹19,900)', inHand: '₹28,500' },
    { code: 'J01', title: 'Junior Secretariat Assistant (JSA)', dept: 'AFHQ / Central Administrative Offices', gradePay: 'Level 2 (₹19,900)', inHand: '₹28,500' },
    { code: 'D01', title: 'Data Entry Operator (DEO Grade A)', dept: 'Ministries of Finance / Labour', gradePay: 'Level 4 (₹25,500)', inHand: '₹36,000' }
  ],
  ssc_cpo: [
    { code: 'SI-DP', title: 'Sub-Inspector (Executive)', dept: 'Delhi Police', gradePay: 'Level 6 (₹35,400)', inHand: '₹55,000' },
    { code: 'SI-CAPF', title: 'Sub-Inspector (GD)', dept: 'BSF, CISF, CRPF, ITBP, SSB', gradePay: 'Level 6 (₹35,400)', inHand: '₹52,000 + Risk Allowance' }
  ],
  sbi_po_clerk: [
    { code: 'PO', title: 'Probationary Officer (Scale I)', dept: 'State Bank of India', gradePay: 'Basic ₹41,960 (Scale I)', inHand: '₹68,000 + Leased Accommodation' },
    { code: 'JA', title: 'Junior Associate (Customer Support)', dept: 'State Bank of India', gradePay: 'Basic ₹19,900 (Clerical)', inHand: '₹34,000' }
  ],
  ibps_po_clerk: [
    { code: 'PO', title: 'Probationary Officer (Scale I)', dept: '11 Participating Nationalized Banks', gradePay: 'Scale I (Basic ₹36,000)', inHand: '₹58,000 - ₹62,000' },
    { code: 'CLK', title: 'Clerk / Customer Associate', dept: 'Participating Public Sector Banks', gradePay: 'Clerical Grade', inHand: '₹30,000 - ₹34,000' }
  ],
  rrb_po_clerk: [
    { code: 'Officer Scale I', title: 'Assistant Manager', dept: 'Regional Rural Banks (Gramin Banks)', gradePay: 'Scale I', inHand: '₹56,000 - ₹60,000' },
    { code: 'Office Assistant', title: 'Multipurpose Assistant', dept: 'Regional Rural Banks', gradePay: 'Clerical Grade', inHand: '₹30,000' }
  ],
  rbi_grade_b: [
    { code: 'Grade B (General)', title: 'Manager / Direct Recruit', dept: 'Reserve Bank of India (Central Bank)', gradePay: 'Basic ₹55,200', inHand: '₹1,16,000 + Executive Perks' }
  ]
};

// 3-Year Cutoff Trends Benchmarking
const EXAM_HISTORICAL_CUTOFFS = {
  ssc_cgl: [
    { year: '2025 (Eduquity Pattern)', ur: '136.83', obc: '130.36', ews: '127.41', sc: '114.97', st: '106.36' },
    { year: '2024 Tier 1', ur: '150.04', obc: '145.34', ews: '143.18', sc: '126.86', st: '118.16' },
    { year: '2023 Tier 1', ur: '150.04', obc: '145.93', ews: '143.44', sc: '126.68', st: '118.16' }
  ],
  ssc_chsl: [
    { year: '2024 Tier 1', ur: '153.25', obc: '152.10', ews: '150.02', sc: '136.41', st: '124.52' },
    { year: '2023 Tier 1', ur: '153.91', obc: '152.30', ews: '151.10', sc: '136.41', st: '124.52' },
    { year: '2022 Tier 1', ur: '157.72', obc: '153.25', ews: '151.02', sc: '135.46', st: '125.79' }
  ],
  sbi_po_clerk: [
    { year: '2024 Prelims', ur: '59.25', obc: '58.50', ews: '58.50', sc: '52.00', st: '47.50' },
    { year: '2023 Prelims', ur: '59.25', obc: '59.25', ews: '59.25', sc: '53.00', st: '47.50' },
    { year: '2022 Prelims', ur: '59.50', obc: '58.25', ews: '59.50', sc: '52.50', st: '47.75' }
  ]
};

export default function ExamHub({ selectedExamId, onSelectExam, onStartStudying }) {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'ssc', 'banking'
  const [filterLevel, setFilterLevel] = useState('all'); // 'all', '10th', '12th', 'graduate'
  const [drawerExam, setDrawerExam] = useState(null); // Active exam displayed in Quick Overview drawer

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDrawerExam(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredExams = EXAMS_CATALOG.filter(exam => {
    if (activeCategory !== 'all' && exam.category !== activeCategory) return false;
    if (filterLevel === '10th' && !exam.badge.toLowerCase().includes('10th') && !exam.name.includes('MTS') && !exam.name.includes('GD')) return false;
    if (filterLevel === '12th' && !exam.badge.toLowerCase().includes('10+2') && !exam.name.includes('CHSL') && !exam.name.includes('Steno')) return false;
    if (filterLevel === 'graduate' && !exam.badge.toLowerCase().includes('grad') && !exam.name.includes('CGL') && !exam.name.includes('CPO') && !exam.category.includes('banking')) return false;
    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Welcome Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950/60 border border-indigo-900/40 p-6 sm:p-8 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Targeting 2024–2026 Eduquity & IBPS Patterns</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Crack Every <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">SSC & Banking</span> Examination
          </h1>
          
          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            Choose your target exam below. Each card provides clean eligibility and structure chips; click <b>Overview & Scheme</b> for salary slips, post-preference codes (B16, B20, B23), past cutoffs, and official testing schemes.
          </p>

          {/* Quick Stat Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>8 Major SSC Exams</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span>4 Major Banking Streams</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-amber-300 flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Full Shortcuts & Traps Included</span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      </div>

      {/* Filter & Category Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-800">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Exams ({EXAMS_CATALOG.length})
          </button>
          
          <button
            onClick={() => setActiveCategory('ssc')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeCategory === 'ssc'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <span>SSC Exams (8)</span>
          </button>

          <button
            onClick={() => setActiveCategory('banking')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeCategory === 'banking'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <span>Banking Exams (4)</span>
          </button>
        </div>

        {/* Qualification Level Pills */}
        <div className="flex items-center gap-1.5 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-slate-400 font-medium mr-1">Eligibility:</span>
          {['all', '10th', '12th', 'graduate'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setFilterLevel(lvl)}
              className={`px-2.5 py-1 rounded-lg capitalize text-[11px] font-semibold transition ${
                filterLevel === lvl
                  ? 'bg-slate-800 text-indigo-300 border border-indigo-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lvl === 'all' ? 'Any' : lvl}
            </button>
          ))}
        </div>

      </div>

      {/* Grid of Progressive-Disclosure Front Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredExams.map((exam) => {
          const isSelected = selectedExamId === exam.id;
          const tier1Summary = exam.tierStructure?.[0]?.pattern || 'Computer Based Test';

          // Separate eligibility into Qualification and Age chips to avoid awkward truncation
          const eligibilityParts = exam.eligibility 
            ? exam.eligibility.split('|').map(s => s.trim()) 
            : ['Check official notification'];
          const qualification = eligibilityParts[0];
          const ageLimit = eligibilityParts[1];

          return (
            <div
              key={exam.id}
              className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between h-full p-5 relative overflow-hidden group hover:shadow-xl ${
                isSelected 
                  ? 'bg-gradient-to-b from-emerald-950/25 via-slate-900 to-slate-900 border-emerald-500/60 shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500/40' 
                  : 'bg-slate-900/70 border-slate-800 hover:bg-slate-900 hover:border-indigo-500/50'
              }`}
            >
              {/* Active Target Glowing Indicator Bar */}
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400" />
              )}

              {/* Card Body - flex-1 with space-y-3 */}
              <div className="space-y-3.5 flex-1 flex flex-col">
                
                {/* 1. Header: Category Badge, Vacancy Badge & Active Indicator */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {exam.badge}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span>Target Active</span>
                      </span>
                    )}
                  </div>
                  
                  {exam.totalVacancies2026 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                      {exam.totalVacancies2026.toLocaleString()} Vacancies
                    </span>
                  )}
                </div>

                {/* Exam Title & Roles */}
                <div>
                  <h3 className={`text-base sm:text-lg font-black leading-snug transition ${
                    isSelected ? 'text-white' : 'text-slate-100 group-hover:text-indigo-300'
                  }`}>
                    {exam.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {exam.targetRoles}
                  </p>
                </div>

                {/* 2. Meta: Distinct Qualification, Age & Scheme Chips (NO Truncation) */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-[11px] mt-1">
                  
                  {/* Qualification Chip */}
                  <div className="flex items-start gap-1.5 text-slate-300 leading-snug">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{qualification}</span>
                  </div>

                  {/* Age Limit Chip (if present) */}
                  {ageLimit && (
                    <div className="flex items-center gap-1.5 text-slate-400 leading-snug">
                      <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{ageLimit}</span>
                    </div>
                  )}

                  {/* Tier 1 Scheme Chip (Clean Multi-Line Wrapping) */}
                  <div className="flex items-start gap-1.5 text-slate-400 leading-snug pt-0.5 border-t border-slate-900">
                    <Clock className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                    <span>{tier1Summary}</span>
                  </div>
                </div>

                {/* 3. Up to 4 Key Subject Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exam.subjectIds.slice(0, 4).map((subId) => {
                    const subMeta = SUBJECT_METADATA[subId];
                    if (!subMeta) return null;
                    return (
                      <span
                        key={subId}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {subMeta.name.split('(')[0]}
                      </span>
                    );
                  })}
                  {exam.subjectIds.length > 4 && (
                    <span className="text-[10px] text-slate-500 px-1 py-0.5 font-mono">
                      +{exam.subjectIds.length - 4} more
                    </span>
                  )}
                </div>

              </div>

              {/* 4. Actions: Pinned Uniformly to Bottom Across Grid */}
              <div className="mt-auto pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2.5">
                <button
                  onClick={() => setDrawerExam(exam)}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80 transition flex items-center gap-1.5"
                  title="View Salary Slip, Post Codes, Marking Scheme & Past Cutoffs"
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Overview & Scheme</span>
                </button>

                <button
                  onClick={() => {
                    onSelectExam(exam.id);
                    if (onStartStudying) onStartStudying();
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                    isSelected
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Target Active</span>
                    </>
                  ) : (
                    <>
                      <span>Set as Target</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* QUICK OVERVIEW SLIDING DRAWER (Progressive Disclosure) */}
      {/* ========================================================================= */}
      {drawerExam && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* Backdrop click to close */}
          <div 
            className="flex-1 cursor-pointer" 
            onClick={() => setDrawerExam(null)} 
          />

          {/* Sliding Drawer Container */}
          <div className="w-full max-w-xl bg-slate-900 border-l border-slate-800 shadow-2xl p-6 sm:p-7 overflow-y-auto space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Drawer Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {drawerExam.badge}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {drawerExam.category === 'ssc' ? 'Staff Selection Commission' : 'Banking & Regulatory'}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {drawerExam.name}
                  </h2>
                </div>

                <button
                  onClick={() => setDrawerExam(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
                  aria-label="Close overview drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 1. Official Salary Slip Simulation & Grade Pay */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4.5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Coins className="w-4 h-4" />
                    <span>In-Hand Salary Slip & Grade Pay</span>
                  </h3>
                  <span className="text-[11px] font-bold text-slate-300 font-mono">
                    {drawerExam.salaryRange || '₹30,000 - ₹75,000+/mo'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Basic Pay (L7)</div>
                    <div className="font-bold text-white mt-0.5">₹44,900</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">DA (50%)</div>
                    <div className="font-bold text-emerald-400 mt-0.5">+₹22,450</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">HRA (X City 30%)</div>
                    <div className="font-bold text-emerald-400 mt-0.5">+₹12,123</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Net Take-Home</div>
                    <div className="font-bold text-indigo-400 mt-0.5">~₹72,000</div>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500">
                  * Note: Level 4 posts (Tax Assistant) start at Basic ₹25,500 (~₹36,000 take-home). Level 7 (ASO/Inspector) is ~₹72,000.
                </div>
              </div>

              {/* 2. Official Post Codes & Cadres */}
              {EXAM_POST_CODES[drawerExam.id] && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <h3 className="font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-indigo-400" />
                      <span>Official Post Preference Codes</span>
                    </h3>
                    <span className="text-[10px] text-slate-500">Tier 2 Option Form</span>
                  </div>

                  <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1 no-scrollbar">
                    {EXAM_POST_CODES[drawerExam.id].map((post) => (
                      <div 
                        key={post.code}
                        className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs"
                      >
                        <div className="min-w-0 pr-2">
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.2 rounded bg-indigo-600/20 text-indigo-300 font-mono font-bold text-[10px]">
                              {post.code}
                            </span>
                            <span className="font-semibold text-slate-200 truncate">{post.title}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 block truncate mt-0.5">{post.dept}</span>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-[11px] font-bold text-emerald-400 font-mono">{post.inHand}</div>
                          <span className="text-[9px] text-slate-500">{post.gradePay}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Tier-1 vs Tier-2 Marking Scheme Breakdown */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <h3 className="font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    <span>Tier-1 vs Tier-2 Marking Scheme & Rules</span>
                  </h3>
                  {drawerExam.sectionalTiming && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold">
                      ⏱ 15m Sectional Timers
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  {drawerExam.tierStructure.map((t, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{t.tier}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono font-bold">
                          {t.marking}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300">{t.pattern}</p>
                      
                      {t.sections && (
                        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px]">
                          {t.sections.map((sec, sIdx) => (
                            <div key={sIdx} className="p-2 rounded-lg bg-slate-900 border border-slate-800/80 text-slate-300 flex justify-between items-center">
                              <span className="truncate pr-1 font-medium">{sec.name}</span>
                              <span className="text-slate-400 font-mono shrink-0 font-semibold">{sec.q}Q • {sec.time}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Explicit Negative Marking Rules Box */}
                <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/30 text-[11px] text-rose-300 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-rose-400">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Official Negative Marking & Qualifying Rules:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                    <li><b>Tier-1:</b> -0.50 marks per wrong answer (1/4th penalty for 2-mark questions).</li>
                    <li><b>Tier-2:</b> -1.00 mark per wrong answer in Sec-I & Sec-II (1/3rd penalty for 3-mark questions).</li>
                    <li><b>Computer Module & DEST:</b> Mandatory Qualifying. No marks added to merit, but failing disqualifies candidate from all posts.</li>
                  </ul>
                </div>
              </div>

              {/* 4. Past 3-Year Cutoff Benchmarks */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-indigo-400" />
                    <span>Past 3-Year Category-Wise Cutoff Benchmarks</span>
                  </h3>
                  <span className="text-[10px] text-slate-500">Tier-1 Normalised</span>
                </div>

                {/* Historical table for selected exam if available */}
                {EXAM_HISTORICAL_CUTOFFS[drawerExam.id] ? (
                  <div className="space-y-2">
                    {EXAM_HISTORICAL_CUTOFFS[drawerExam.id].map((hCut, hIdx) => (
                      <div key={hIdx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                        <div className="text-[10px] font-bold text-slate-400 mb-1.5">{hCut.year}</div>
                        <div className="grid grid-cols-5 gap-1.5 text-center font-mono text-[11px]">
                          <div className="p-1 rounded bg-slate-950">
                            <span className="text-[9px] text-slate-500 block font-sans">UR</span>
                            <span className="font-bold text-white">{hCut.ur}</span>
                          </div>
                          <div className="p-1 rounded bg-slate-950">
                            <span className="text-[9px] text-slate-500 block font-sans">OBC</span>
                            <span className="font-bold text-emerald-400">{hCut.obc}</span>
                          </div>
                          <div className="p-1 rounded bg-slate-950">
                            <span className="text-[9px] text-slate-500 block font-sans">EWS</span>
                            <span className="font-bold text-indigo-400">{hCut.ews}</span>
                          </div>
                          <div className="p-1 rounded bg-slate-950">
                            <span className="text-[9px] text-slate-500 block font-sans">SC</span>
                            <span className="font-bold text-amber-400">{hCut.sc}</span>
                          </div>
                          <div className="p-1 rounded bg-slate-950">
                            <span className="text-[9px] text-slate-500 block font-sans">ST</span>
                            <span className="font-bold text-rose-400">{hCut.st}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center text-xs pt-1">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-bold">UR</span>
                      <span className="font-bold text-white font-mono">{drawerExam.cutoff2025?.ur || '136.83'}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-bold">OBC</span>
                      <span className="font-bold text-emerald-400 font-mono">{drawerExam.cutoff2025?.obc || '130.36'}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-bold">EWS</span>
                      <span className="font-bold text-indigo-400 font-mono">{drawerExam.cutoff2025?.ews || '127.41'}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-bold">SC</span>
                      <span className="font-bold text-amber-400 font-mono">{drawerExam.cutoff2025?.sc || '114.97'}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-bold">ST</span>
                      <span className="font-bold text-rose-400 font-mono">{drawerExam.cutoff2025?.st || '106.36'}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Testing Agency & Operational Note */}
              <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-indigo-200 flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed text-[11px]">
                  <b>ECA Logistics & Question Setting:</b> Administered under {drawerExam.vendor || 'Eduquity Career Technologies'}. Question papers are curated independently using statement-based analytical frameworks with negative marking enforced.
                </div>
              </div>

            </div>

            {/* Drawer Bottom Action */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => setDrawerExam(null)}
                className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white transition"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onSelectExam(drawerExam.id);
                  setDrawerExam(null);
                  if (onStartStudying) onStartStudying();
                }}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-indigo-600/30"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Select & Start Syllabus</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
