import React, { useState, useRef, useEffect } from 'react';
import { 
  Award, 
  Sparkles, 
  Timer, 
  Keyboard, 
  BookOpen, 
  MessageSquare, 
  Settings, 
  CheckCircle2, 
  AlertCircle,
  Trophy,
  Calendar,
  Layers,
  ChevronDown,
  Compass,
  Search,
  Zap,
  Menu,
  X,
  Target
} from 'lucide-react';
import { EXAMS_CATALOG } from '../data/examsData';
import { getStoredApiKey } from '../services/geminiService';

const NAV_CATEGORIES = [
  {
    id: 'learn',
    label: 'Learn & Tools',
    icon: BookOpen,
    tabIds: ['syllabus', 'vault', 'shortcuts'],
    items: [
      { id: 'syllabus', label: 'Topics & Detailed Syllabus', sub: 'Foundational theory, patterns & tricks', icon: BookOpen, badge: 'Core' },
      { id: 'vault', label: 'Formula & Static GK Vault', sub: '20+ Grammar rules, identities & ports', icon: Layers, badge: 'Vault' },
      { id: 'shortcuts', label: 'Speed Shortcuts & Trap Alerts', sub: '20-second coaching hacks & exam traps', icon: Zap, badge: 'Hacks' },
    ]
  },
  {
    id: 'exam',
    label: 'Exam Engine',
    icon: Timer,
    tabIds: ['mock', 'typing'],
    items: [
      { id: 'mock', label: 'CBT Mocks & PYQs', sub: 'Eduquity & TCS dual-mode CBT simulation', icon: Timer, badge: 'New Pattern' },
      { id: 'typing', label: 'DEST Typing Engine', sub: 'SSC 2,000 depression model with mistake rules', icon: Keyboard, badge: 'Qualifying' },
    ]
  },
  {
    id: 'ai',
    label: 'AI Study Suite',
    icon: Sparkles,
    tabIds: ['solver', 'mentor'],
    items: [
      { id: 'solver', label: 'AI Doubt Solver', sub: 'Step-by-step resolution & trap classifier', icon: Sparkles, badge: 'Gemini' },
      { id: 'mentor', label: 'AI Personal Mentor', sub: 'Inspector Sahab AIR-1 coaching advice', icon: MessageSquare, badge: 'AIR-1' },
    ]
  },
  {
    id: 'prep',
    label: 'My Prep',
    icon: Trophy,
    tabIds: ['study-plan', 'mistakes', 'dashboard'],
    items: [
      { id: 'study-plan', label: '90-Day Master Planner', sub: 'Curated 3-phase roadmap with daily drills', icon: Calendar, badge: '90 Days' },
      { id: 'mistakes', label: 'The Mistake Vault', sub: 'Auto-saved errors with root cause tagging & 15Q re-test', icon: Target, badge: 'Re-Test' },
      { id: 'dashboard', label: 'Diagnostic Dashboard', sub: 'Syllabus mastery & mock analytics', icon: Trophy, badge: 'Analytics' },
    ]
  }
];

export function Navbar({ 
  selectedExamId, 
  onSelectExam, 
  currentTab, 
  setCurrentTab, 
  onOpenSettings 
}) {
  const [openCategory, setOpenCategory] = useState(null);
  const [isExamDropdownOpen, setIsExamDropdownOpen] = useState(false);
  const [dropdownSearch, setDropdownSearch] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navRef = useRef(null);
  const hasApiKey = Boolean(getStoredApiKey());
  const currentExam = EXAMS_CATALOG.find(e => e.id === selectedExamId) || EXAMS_CATALOG[0];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenCategory(null);
        setIsExamDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredExams = EXAMS_CATALOG.filter(e => 
    e.name.toLowerCase().includes(dropdownSearch.toLowerCase()) ||
    e.shortName.toLowerCase().includes(dropdownSearch.toLowerCase()) ||
    e.targetRoles.toLowerCase().includes(dropdownSearch.toLowerCase())
  );

  const handleSelectNavTab = (tabId) => {
    setCurrentTab(tabId);
    setOpenCategory(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header ref={navRef} className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Brand Logo & Target Exam Switcher */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div 
              onClick={() => handleSelectNavTab('hub')}
              className="flex items-center gap-2.5 cursor-pointer group shrink-0"
              title="Return to All Exams Hub"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Award className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition" />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                  CrackSSC <span className="text-indigo-400">& Banking</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                  All 12 Exams Pro Suite
                </span>
              </div>
            </div>

            {/* Smart Exam Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsExamDropdownOpen(!isExamDropdownOpen);
                  setOpenCategory(null);
                }}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/90 border border-slate-700/80 rounded-xl text-xs font-semibold text-slate-100 hover:border-indigo-500/50 hover:bg-slate-800 transition shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-slate-400 hidden md:inline text-[11px]">Target:</span>
                <span className="truncate max-w-[110px] sm:max-w-[160px] font-bold">{currentExam.shortName}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isExamDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Exam Selector Dropdown Menu */}
              {isExamDropdownOpen && (
                <div className="absolute left-0 mt-2 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="relative mb-2">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search SSC or Banking exam..."
                      value={dropdownSearch}
                      onChange={(e) => setDropdownSearch(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      autoFocus
                    />
                  </div>

                  <div className="max-h-72 overflow-y-auto space-y-1 pr-1 no-scrollbar">
                    {filteredExams.map((exam) => {
                      const isChosen = selectedExamId === exam.id;
                      return (
                        <button
                          key={exam.id}
                          onClick={() => {
                            onSelectExam(exam.id);
                            setIsExamDropdownOpen(false);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl text-xs flex flex-col transition ${
                            isChosen 
                              ? 'bg-indigo-600/20 text-indigo-300 font-bold border border-indigo-500/40' 
                              : 'text-slate-300 hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white">{exam.name}</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                              {exam.badge}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 truncate mt-0.5">
                            {exam.targetRoles}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 mt-1 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 px-1">
                    <span>12 Target Exams Catalog</span>
                    <button
                      onClick={() => {
                        handleSelectNavTab('hub');
                        setIsExamDropdownOpen(false);
                      }}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold"
                    >
                      View All Hub
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center: Consolidated 4-Category Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isCategoryActive = cat.tabIds.includes(currentTab);
              const isOpen = openCategory === cat.id;

              return (
                <div key={cat.id} className="relative">
                  <button
                    onClick={() => {
                      setOpenCategory(isOpen ? null : cat.id);
                      setIsExamDropdownOpen(false);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                      isCategoryActive
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 font-bold'
                        : isOpen
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Contextual Category Dropdown */}
                  {isOpen && (
                    <div className="absolute left-0 mt-2 w-72 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-2 py-1 mb-1">
                        {cat.label}
                      </div>
                      <div className="space-y-1">
                        {cat.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isItemActive = currentTab === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => handleSelectNavTab(item.id)}
                              className={`w-full text-left p-2.5 rounded-xl transition flex items-start gap-3 ${
                                isItemActive
                                  ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30'
                                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                              }`}
                            >
                              <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                                isItemActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-indigo-400'
                              }`}>
                                <ItemIcon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-bold leading-tight">{item.label}</span>
                                  {item.badge && (
                                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                                      isItemActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-indigo-300 border border-slate-700'
                                    }`}>
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className={`text-[10px] mt-0.5 line-clamp-1 ${
                                  isItemActive ? 'text-indigo-100' : 'text-slate-400'
                                }`}>
                                  {item.sub}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct All Exams Hub Button */}
            <button
              onClick={() => handleSelectNavTab('hub')}
              className={`px-2.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                currentTab === 'hub'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
              title="All 12 Exams Directory"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Directory</span>
            </button>
          </nav>

          {/* Right: AI Copilot Status & Settings */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSettings}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition ${
                hasApiKey 
                  ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50' 
                  : 'bg-indigo-950/40 border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/50'
              }`}
              title={hasApiKey ? "Gemini AI Connected" : "Optional: Add free Gemini key for unlimited AI doubts"}
            >
              {hasApiKey ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">AI Active</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>AI Copilot</span>
                  <span className="hidden md:inline text-[10px] px-1 rounded bg-indigo-500/20 text-indigo-300">Free</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenSettings}
              title="Settings & API Key"
              className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 rounded-xl transition"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-xl border border-slate-700 transition"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Categorized Drawer / Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 py-3 space-y-3 animate-in fade-in duration-150">
            {NAV_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.id} className="space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400 px-2 flex items-center gap-1.5">
                    <Icon className="w-3 h-3 text-indigo-400" />
                    <span>{cat.label}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 px-1">
                    {cat.items.map((item) => {
                      const isActive = currentTab === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelectNavTab(item.id)}
                          className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between transition ${
                            isActive
                              ? 'bg-indigo-600 text-white font-bold'
                              : 'bg-slate-950/60 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className="pt-2 border-t border-slate-800 px-1">
              <button
                onClick={() => handleSelectNavTab('hub')}
                className="w-full text-center p-2 rounded-xl text-xs font-bold text-indigo-400 bg-indigo-950/30 border border-indigo-500/30"
              >
                Browse All 12 Exams Directory
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

export default React.memo(Navbar);
