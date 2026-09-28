import React, { useState, useEffect, useMemo } from 'react';
import { 
  Timer, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  RotateCcw, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  Bookmark,
  Sparkles,
  Layers,
  History,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Globe,
  SlidersHorizontal,
  Flame,
  Tag,
  Target,
  FileQuestion,
  Lock
} from 'lucide-react';
import { MOCK_TESTS } from '../data/mockQuestionsData';
import confetti from 'canvas-confetti';

const ERROR_CAUSES = [
  { id: 'calc', label: 'Calculation Slip', icon: '🧮', color: 'border-amber-500/40 text-amber-300 bg-amber-950/30' },
  { id: 'trap', label: 'Vendor Trap / Misread', icon: '⚠️', color: 'border-purple-500/40 text-purple-300 bg-purple-950/30' },
  { id: 'concept', label: 'Concept Gap', icon: '📖', color: 'border-blue-500/40 text-blue-300 bg-blue-950/30' },
  { id: 'panic', label: 'Time Panic / Guess', icon: '⏱️', color: 'border-rose-500/40 text-rose-300 bg-rose-950/30' }
];

export default function MockTestEngine({ examName = "SSC CGL", initialTab = "test" }) {
  const [selectedTestId, setSelectedTestId] = useState(MOCK_TESTS[0].id);
  const [isTestSelectorOpen, setIsTestSelectorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(initialTab); // 'test', 'mistakes', 'history'
  const [selectedCauseFilter, setSelectedCauseFilter] = useState('all'); // 'all', 'calc', 'trap', 'concept', 'panic'

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);
  
  // Dual UI Simulator Mode: 'eduquity' vs 'tcs'
  const [uiMode, setUiMode] = useState('eduquity'); // 'eduquity' (left palette, top triggers) | 'tcs' (right palette, bottom bar)
  
  // Sectional Timing Mode (New 2026 Eduquity Pattern: 15 min per section)
  const [isSectionalMode, setIsSectionalMode] = useState(true);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [sectionTimeLeft, setSectionTimeLeft] = useState(15 * 60);
  const [lockedSections, setLockedSections] = useState([]);

  // Per-Question Language Toggle Simulation
  const [questionLang, setQuestionLang] = useState('en'); // 'en' | 'hi'

  // History stored in localStorage
  const [mockHistory, setMockHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ssc_mock_history') || '[]');
    } catch {
      return [];
    }
  });

  // Mistake Vault stored in localStorage
  const [mistakeVault, setMistakeVault] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ssc_mistake_vault') || '[]');
    } catch {
      return [];
    }
  });

  const [taggedMistakes, setTaggedMistakes] = useState({});

  // Active Test Object (or custom mistake re-test)
  const [customMistakeTest, setCustomMistakeTest] = useState(null);

  const activeTest = useMemo(() => {
    if (customMistakeTest) return customMistakeTest;
    return MOCK_TESTS.find(t => t.id === selectedTestId) || MOCK_TESTS[0];
  }, [selectedTestId, customMistakeTest]);

  const questions = activeTest.questions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [timeLeft, setTimeLeft] = useState(activeTest.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Reset state when switching test
  useEffect(() => {
    setSelectedAnswers({});
    setMarkedForReview({});
    setTimeLeft(activeTest.durationMinutes * 60);
    setSectionTimeLeft(15 * 60);
    setActiveSectionIdx(0);
    setLockedSections([]);
    setCurrentIndex(0);
    setIsSubmitted(false);
  }, [selectedTestId, activeTest]);

  // Overall & Sectional Timer Countdown
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0 || activeTab !== 'test') return;

    const interval = setInterval(() => {
      // Overall global timer decrement
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });

      // Sectional timer decrement (if enabled and test has sections)
      if (isSectionalMode && activeTest.sections && activeTest.sections.length > 1) {
        setSectionTimeLeft(prevSec => {
          if (prevSec <= 1) {
            handleAdvanceSectionAuto();
            return 15 * 60;
          }
          return prevSec - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted, timeLeft, sectionTimeLeft, isSectionalMode, activeTab, activeSectionIdx, activeTest]);

  // Auto-advance section when 15 minutes expire in Sectional Mode
  const handleAdvanceSectionAuto = () => {
    if (!activeTest.sections) return;
    const nextSec = activeSectionIdx + 1;
    if (nextSec < activeTest.sections.length) {
      setLockedSections(prev => [...prev, activeSectionIdx]);
      setActiveSectionIdx(nextSec);
      setCurrentIndex(activeTest.sections[nextSec].startIndex);
      setSectionTimeLeft(15 * 60);
    } else {
      handleSubmitTest();
    }
  };

  // Manual section advance in Sectional Mode
  const handleManualSectionAdvance = () => {
    if (!activeTest.sections) return;
    const nextSec = activeSectionIdx + 1;
    if (nextSec < activeTest.sections.length) {
      if (confirm(`Submit ${activeTest.sections[activeSectionIdx].name} and advance to next section? Unused time cannot be carried forward.`)) {
        setLockedSections(prev => [...prev, activeSectionIdx]);
        setActiveSectionIdx(nextSec);
        setCurrentIndex(activeTest.sections[nextSec].startIndex);
        setSectionTimeLeft(15 * 60);
      }
    } else {
      setShowSubmitModal(true);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optIdx) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: optIdx
    }));
  };

  const handleClearResponse = () => {
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculations for results
  const scoreStats = useMemo(() => {
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;
    const wrongQuestionsList = [];

    questions.forEach((q, idx) => {
      const userAns = selectedAnswers[idx];
      if (userAns === undefined) {
        unattemptedCount++;
      } else if (userAns === q.correctIndex) {
        correctCount++;
      } else {
        wrongCount++;
        wrongQuestionsList.push({
          ...q,
          userSelectedIdx: userAns,
          testTitle: activeTest.title,
          testId: activeTest.id,
          dateSaved: new Date().toLocaleDateString('en-IN')
        });
      }
    });

    const marksPerCorrect = activeTest.marksPerCorrect || 2;
    const negativeMarks = activeTest.negativeMarks || 0.5;
    const rawScore = (correctCount * marksPerCorrect) - (wrongCount * negativeMarks);
    const maxMarks = questions.length * marksPerCorrect;
    const accuracy = (correctCount + wrongCount) > 0 
      ? Math.round((correctCount / (correctCount + wrongCount)) * 100) 
      : 0;

    return {
      correctCount,
      wrongCount,
      unattemptedCount,
      rawScore: Math.max(0, rawScore),
      maxMarks,
      accuracy,
      wrongQuestionsList
    };
  }, [questions, selectedAnswers, activeTest]);

  const handleSubmitTest = () => {
    setShowSubmitModal(false);
    setIsSubmitted(true);

    // Save to localStorage history
    const record = {
      testId: activeTest.id,
      title: activeTest.title,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      timeStr: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      timestamp: Date.now(),
      rawScore: scoreStats.rawScore,
      maxMarks: scoreStats.maxMarks,
      accuracy: scoreStats.accuracy,
      correctCount: scoreStats.correctCount,
      wrongCount: scoreStats.wrongCount,
      unattemptedCount: scoreStats.unattemptedCount,
      totalQuestions: questions.length
    };

    setMockHistory(prev => {
      const updated = [record, ...prev];
      localStorage.setItem('ssc_mock_history', JSON.stringify(updated));
      return updated;
    });

    // Auto-save wrong questions to Mistake Vault
    if (scoreStats.wrongQuestionsList.length > 0) {
      setMistakeVault(prevVault => {
        const existingIds = new Set(prevVault.map(m => m.id));
        const newMistakes = scoreStats.wrongQuestionsList.filter(q => !existingIds.has(q.id));
        const combined = [...newMistakes, ...prevVault];
        localStorage.setItem('ssc_mistake_vault', JSON.stringify(combined));
        return combined;
      });
    }

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setMarkedForReview({});
    setTimeLeft(activeTest.durationMinutes * 60);
    setSectionTimeLeft(15 * 60);
    setActiveSectionIdx(0);
    setLockedSections([]);
    setCurrentIndex(0);
    setIsSubmitted(false);
    setCustomMistakeTest(null);
  };

  // Tag an error in the Mistake Vault
  const handleTagErrorCause = (questionId, causeId) => {
    setTaggedMistakes(prev => ({
      ...prev,
      [questionId]: causeId
    }));

    setMistakeVault(prevVault => {
      const updated = prevVault.map(m => {
        if (m.id === questionId) {
          return { ...m, errorCause: causeId };
        }
        return m;
      });
      localStorage.setItem('ssc_mistake_vault', JSON.stringify(updated));
      return updated;
    });
  };

  const filteredMistakes = useMemo(() => {
    if (selectedCauseFilter === 'all') return mistakeVault;
    return mistakeVault.filter(m => (taggedMistakes[m.id] || m.errorCause) === selectedCauseFilter);
  }, [mistakeVault, selectedCauseFilter, taggedMistakes]);

  // Launch a 15-question Re-Test from Mistake Vault (respecting root cause filter)
  const handleLaunchMistakeReTest = () => {
    const pool = filteredMistakes.length > 0 ? filteredMistakes : mistakeVault;
    if (pool.length === 0) return;
    const testQs = pool.slice(0, 15);
    const filterLabel = selectedCauseFilter === 'all' 
      ? 'All Errors' 
      : ERROR_CAUSES.find(c => c.id === selectedCauseFilter)?.label || 'Filtered';
    const customTest = {
      id: `mistake_drill_${Date.now()}`,
      title: `Mistake Re-Test (${filterLabel} - ${testQs.length}Q)`,
      durationMinutes: Math.max(10, Math.round(testQs.length * 0.75)),
      totalQuestions: testQs.length,
      marksPerCorrect: 2,
      negativeMarks: 0.5,
      questions: testQs
    };
    setCustomMistakeTest(customTest);
    setActiveTab('test');
    handleRestart();
  };

  const currentQ = questions[currentIndex] || questions[0];

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] overflow-hidden bg-slate-950 font-sans">
      
      {/* Top Test Navigation & Configuration Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
        
        {/* Left: Test Selector & Simulator Mode Toggles */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative">
            <button
              onClick={() => setIsTestSelectorOpen(!isTestSelectorOpen)}
              className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-slate-100 flex items-center gap-2 hover:border-indigo-500 transition shadow-sm"
            >
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span className="truncate max-w-[160px] sm:max-w-xs">{activeTest.title}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {isTestSelectorOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsTestSelectorOpen(false)}
                />
                <div className="absolute left-0 mt-2 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 max-h-80 overflow-y-auto no-scrollbar">
                  <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">
                    Available Mocks & Official PYQs ({MOCK_TESTS.length})
                  </div>
                  {MOCK_TESTS.map((test) => (
                    <button
                      key={test.id}
                      onClick={() => {
                        setSelectedTestId(test.id);
                        setCustomMistakeTest(null);
                        setIsTestSelectorOpen(false);
                        setActiveTab('test');
                      }}
                      className={`w-full text-left p-2.5 rounded-xl text-xs flex flex-col transition mb-1 ${
                        selectedTestId === test.id && !customMistakeTest
                          ? 'bg-indigo-600/20 text-indigo-300 font-bold border border-indigo-500/40'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="font-semibold">{test.title}</div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                        <span>{test.totalQuestions} Questions</span>
                        <span>•</span>
                        <span>{test.durationMinutes} Minutes</span>
                        {test.id.includes('pyq') && (
                          <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                            Official PYQ
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mode Switcher Tabs: CBT Test | Mistake Vault | History */}
          <div className="flex items-center bg-slate-950 p-0.5 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('test')}
              className={`px-3 py-1 rounded-lg font-semibold transition ${
                activeTab === 'test' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              CBT Test
            </button>
            <button
              onClick={() => setActiveTab('mistakes')}
              className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'mistakes' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileQuestion className="w-3 h-3 text-amber-400" />
              <span>Mistakes ({mistakeVault.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'history' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <History className="w-3 h-3" />
              <span>History ({mockHistory.length})</span>
            </button>
          </div>

          {/* Simulator Interface Toggle: Eduquity vs TCS */}
          {activeTab === 'test' && !isSubmitted && (
            <div className="hidden md:flex items-center gap-1 bg-slate-950 p-0.5 rounded-xl border border-slate-800 text-[11px]">
              <button
                onClick={() => setUiMode('eduquity')}
                className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1 ${
                  uiMode === 'eduquity'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Eduquity 2026 Layout: Left Question Palette & Top Action Triggers"
              >
                <span>Eduquity UI</span>
              </button>
              <button
                onClick={() => setUiMode('tcs')}
                className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1 ${
                  uiMode === 'tcs'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="TCS iON Classic Layout: Right Question Palette & Bottom Action Bar"
              >
                <span>TCS iON UI</span>
              </button>
            </div>
          )}
        </div>

        {/* Right: Sectional Timing Indicator & Test Action */}
        {activeTab === 'test' && !isSubmitted && (
          <div className="flex items-center gap-2.5">
            
            {/* Sectional Timer Display */}
            {isSectionalMode && activeTest.sections && activeTest.sections.length > 1 ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 font-mono text-xs font-bold">
                <Timer className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span>Sec: {formatTime(sectionTimeLeft)}</span>
                <span className="text-[10px] text-slate-400 font-normal">| Total: {formatTime(timeLeft)}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-indigo-400 font-mono text-xs font-bold">
                <Timer className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}

            {/* Advance Section or Submit Test */}
            {isSectionalMode && activeTest.sections && activeSectionIdx < activeTest.sections.length - 1 ? (
              <button
                onClick={handleManualSectionAdvance}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                Next Section →
              </button>
            ) : (
              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md shadow-emerald-600/20"
              >
                Submit Test
              </button>
            )}
          </div>
        )}
      </div>

      {/* Main Content View Switcher */}
      {activeTab === 'mistakes' ? (
        /* ========================================================================= */
        /* VIEW: THE MISTAKE VAULT & ERROR CATEGORIZATION */
        /* ========================================================================= */
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-amber-400" />
                <span>The Mistake Vault & Error Taxonomy</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Every incorrect response is automatically cataloged here. Tag root causes to eliminate unforced errors.
              </p>
            </div>

            {mistakeVault.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleLaunchMistakeReTest}
                  disabled={filteredMistakes.length === 0}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-indigo-600 hover:opacity-90 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Re-Test {selectedCauseFilter === 'all' ? 'Mistakes' : ERROR_CAUSES.find(c => c.id === selectedCauseFilter)?.label} ({Math.min(15, filteredMistakes.length)}Q)</span>
                </button>

                <button
                  onClick={() => {
                    if (confirm("Clear all questions in your Mistake Vault?")) {
                      localStorage.removeItem('ssc_mistake_vault');
                      setMistakeVault([]);
                    }
                  }}
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold px-2 py-1"
                >
                  Clear Vault
                </button>
              </div>
            )}
          </div>

          {mistakeVault.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
              <div className="text-base font-bold text-white">Your Mistake Vault is Empty!</div>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Whenever you take a CBT mock test and answer a question incorrectly, it will be automatically captured here for targeted error revision and re-testing.
              </p>
              <button
                onClick={() => setActiveTab('test')}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-md"
              >
                Attempt a Full CBT Mock Now
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Error Distribution Stats (Clickable to Filter) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {ERROR_CAUSES.map((cause) => {
                  const count = mistakeVault.filter(m => (taggedMistakes[m.id] || m.errorCause) === cause.id).length;
                  const isSelected = selectedCauseFilter === cause.id;
                  return (
                    <div 
                      key={cause.id} 
                      onClick={() => setSelectedCauseFilter(isSelected ? 'all' : cause.id)}
                      className={`p-3.5 rounded-2xl border ${cause.color} flex items-center justify-between cursor-pointer hover:scale-[1.02] transition ${
                        isSelected ? 'ring-2 ring-white/40 shadow-lg' : ''
                      }`}
                    >
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider">{cause.label}</div>
                        <div className="text-lg font-black mt-0.5">{count} Questions</div>
                      </div>
                      <span className="text-xl">{cause.icon}</span>
                    </div>
                  );
                })}
              </div>

              {/* Cause Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 pb-2 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-400">Filter by Cause:</span>
                <button
                  onClick={() => setSelectedCauseFilter('all')}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition border ${
                    selectedCauseFilter === 'all'
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  All ({mistakeVault.length})
                </button>
                {ERROR_CAUSES.map((cause) => {
                  const count = mistakeVault.filter(m => (taggedMistakes[m.id] || m.errorCause) === cause.id).length;
                  return (
                    <button
                      key={cause.id}
                      onClick={() => setSelectedCauseFilter(cause.id)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold transition border flex items-center gap-1.5 ${
                        selectedCauseFilter === cause.id
                          ? `${cause.color} ring-1 ring-white/30 font-bold`
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{cause.icon}</span>
                      <span>{cause.label} ({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* List of Captured Mistakes */}
              {filteredMistakes.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400 bg-slate-900/60 rounded-2xl border border-slate-800">
                  No questions currently tagged under this error cause.
                </div>
              ) : (
                <div className="space-y-3 pt-1">
                  {filteredMistakes.map((item, idx) => {
                  const activeCause = taggedMistakes[item.id] || item.errorCause;
                  return (
                    <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-bold uppercase text-[10px]">
                            {item.subject}
                          </span>
                          <span className="font-semibold text-slate-300">{item.topic}</span>
                        </div>
                        <span className="text-[10px] text-slate-500">{item.testTitle}</span>
                      </div>

                      <div className="text-xs sm:text-sm font-semibold text-slate-100 whitespace-pre-line leading-relaxed">
                        {item.question}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {item.options?.map((opt, oIdx) => {
                          const isCorrect = oIdx === item.correctIndex;
                          const wasUserChoice = oIdx === item.userSelectedIdx;
                          return (
                            <div 
                              key={oIdx} 
                              className={`p-2 rounded-xl border flex items-center justify-between ${
                                isCorrect 
                                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 font-bold' 
                                  : wasUserChoice 
                                  ? 'bg-rose-950/40 border-rose-500/50 text-rose-300' 
                                  : 'bg-slate-950/60 border-slate-800 text-slate-400'
                              }`}
                            >
                              <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                              {isCorrect && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                              {wasUserChoice && !isCorrect && <XCircle className="w-3.5 h-3.5 text-rose-400" />}
                            </div>
                          );
                        })}
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono">
                        💡 <b>Speed Solution:</b> {item.explanation}
                      </div>

                      {/* Root Cause Tagging Chips */}
                      <div className="pt-2 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] uppercase font-bold text-slate-500 flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          Tag Cause:
                        </span>
                        {ERROR_CAUSES.map((cause) => {
                          const isSelected = activeCause === cause.id;
                          return (
                            <button
                              key={cause.id}
                              onClick={() => handleTagErrorCause(item.id, cause.id)}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition border flex items-center gap-1 ${
                                isSelected
                                  ? `${cause.color} font-bold ring-1 ring-white/20`
                                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                              }`}
                            >
                              <span>{cause.icon}</span>
                              <span>{cause.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
      ) : activeTab === 'history' ? (
        /* ========================================================================= */
        /* VIEW: TEST ATTEMPT HISTORY */
        /* ========================================================================= */
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Attempt History & Analytics
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Past attempts and scores saved automatically to your device
              </p>
            </div>
            {mockHistory.length > 0 && (
              <button
                onClick={() => {
                  if (confirm("Clear all mock test history?")) {
                    localStorage.removeItem('ssc_mock_history');
                    setMockHistory([]);
                  }
                }}
                className="text-xs text-rose-400 hover:text-rose-300 font-semibold"
              >
                Clear History
              </button>
            )}
          </div>

          {mockHistory.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
              <History className="w-10 h-10 text-slate-600 mx-auto" />
              <div className="text-sm font-semibold text-slate-300">No Mock Tests Taken Yet</div>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Complete any full-length mock test, PYQ paper, or sectional test to view your scores, accuracy trends, and detailed performance breakdown here.
              </p>
              <button
                onClick={() => setActiveTab('test')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition"
              >
                Start a Mock Test Now
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {mockHistory.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-indigo-400">
                      Attempted: {item.date} at {item.timeStr}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      {item.title}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>Questions: {item.totalQuestions}</span>
                      <span>•</span>
                      <span className="text-emerald-400">✓ {item.correctCount} Correct</span>
                      <span>•</span>
                      <span className="text-rose-400">✗ {item.wrongCount} Wrong</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-right">
                      <div className="text-lg font-black text-indigo-400">
                        {item.rawScore.toFixed(1)} / {item.maxMarks}
                      </div>
                      <div className="text-[11px] font-bold text-emerald-400">
                        Accuracy: {item.accuracy}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : isSubmitted ? (
        /* ========================================================================= */
        /* VIEW: SCORECARD & PERFORMANCE WITH CUTOFF BENCHMARKS */
        /* ========================================================================= */
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-widest text-emerald-400">
                  Test Completed & Result Saved
                </span>
                <h2 className="text-2xl font-black text-white mt-1">
                  Performance Scorecard
                </h2>
                <p className="text-xs text-slate-400">
                  {activeTest.title}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('mistakes')}
                  className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Tag className="w-3.5 h-3.5" />
                  <span>Review {scoreStats.wrongCount} Mistakes in Vault</span>
                </button>

                <button
                  onClick={handleRestart}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Test
                </button>
              </div>
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl font-black text-indigo-400">
                  {scoreStats.rawScore.toFixed(1)} / {scoreStats.maxMarks}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Total Score</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl font-black text-emerald-400">
                  {scoreStats.accuracy}%
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Accuracy</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl font-black text-emerald-400">
                  {scoreStats.correctCount}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Correct (+{activeTest.marksPerCorrect})</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl font-black text-rose-400">
                  {scoreStats.wrongCount}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Incorrect (-{activeTest.negativeMarks})</div>
              </div>
            </div>

            {/* Official Tier-1 Cutoff Benchmarking Card */}
            {scoreStats.maxMarks === 200 && (
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center justify-between">
                  <span>Official SSC CGL Tier-1 Cutoff Benchmarking (2025 Standard)</span>
                  <span className="text-[10px] text-slate-500 font-normal">UR: 136.83 • OBC: 130.36 • EWS: 127.41 • SC: 114.97</span>
                </div>

                {scoreStats.rawScore >= 136.83 ? (
                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-emerald-200">
                        🎯 Tier-1 Qualified! (Projected Clear for All Posts)
                      </div>
                      <p className="text-xs text-emerald-300/80 mt-0.5 leading-relaxed">
                        Your score of <b>{scoreStats.rawScore.toFixed(1)} / 200</b> comfortably clears the official UR Cutoff (136.83). You are on track for Tier-2 Mains. Keep maintaining this accuracy!
                      </p>
                    </div>
                  </div>
                ) : scoreStats.rawScore >= 115 ? (
                  <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-amber-300 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-amber-200">
                        ⚡ Borderline / Reserved Category Range
                      </div>
                      <p className="text-xs text-amber-300/80 mt-0.5 leading-relaxed">
                        Your score of <b>{scoreStats.rawScore.toFixed(1)} / 200</b> is within SC/ST range (114.97 SC), but { (136.83 - scoreStats.rawScore).toFixed(1) } marks short of the UR cutoff (136.83). Eliminating silly negative marks in English and GK will get you safely across the line!
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-300 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-rose-200">
                        📚 Needs Concept Consolidation (Below Qualifying Cutoff)
                      </div>
                      <p className="text-xs text-rose-300/80 mt-0.5 leading-relaxed">
                        Your score of <b>{scoreStats.rawScore.toFixed(1)} / 200</b> is below the cutoff threshold. Focus on high-weightage topics like Coding-Decoding, Time & Work, Golden Grammar Rules, and Indian Polity in the syllabus section before retaking the mock.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Question by Question Review */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Detailed Question Review & Shortcut Explanations</span>
            </h3>

            {questions.map((q, idx) => {
              const userAns = selectedAnswers[idx];
              const isCorrect = userAns === q.correctIndex;
              const isUnattempted = userAns === undefined;

              return (
                <div
                  key={idx}
                  className={`bg-slate-900 border rounded-2xl p-5 space-y-3 ${
                    isCorrect
                      ? 'border-emerald-500/30'
                      : isUnattempted
                      ? 'border-slate-800'
                      : 'border-rose-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-400 uppercase">
                      Q{idx + 1} • {q.subject.toUpperCase()} • {q.topic}
                    </span>

                    {isCorrect ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" /> Correct (+{activeTest.marksPerCorrect})
                      </span>
                    ) : isUnattempted ? (
                      <span className="text-slate-400">Unattempted</span>
                    ) : (
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Incorrect (-{activeTest.negativeMarks})
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-slate-100 whitespace-pre-line leading-relaxed">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.correctIndex;
                      const wasSelected = userAns === optIdx;

                      let optClass = "p-2.5 rounded-xl border border-slate-800 text-slate-400 bg-slate-950";
                      if (isOptionCorrect) {
                        optClass = "p-2.5 rounded-xl border border-emerald-500/50 text-emerald-300 bg-emerald-950/40 font-bold";
                      } else if (wasSelected && !isOptionCorrect) {
                        optClass = "p-2.5 rounded-xl border border-rose-500/50 text-rose-300 bg-rose-950/40";
                      }

                      return (
                        <div key={optIdx} className={optClass}>
                          <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation && (
                    <div className="text-xs text-slate-300 font-mono bg-slate-950 p-3 rounded-xl border border-slate-800">
                      💡 <b>Speed Solution:</b> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* VIEW: ACTIVE CBT TEST SIMULATOR (DUAL INTERFACE: EDUQUITY vs TCS) */
        /* ========================================================================= */
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Main Question Display */}
          <div className={`flex-1 flex flex-col p-4 sm:p-6 overflow-y-auto space-y-4 ${
            uiMode === 'eduquity' ? 'order-last lg:order-last' : 'order-first'
          }`}>
            
            {/* Section Switcher Tabs */}
            {activeTest.sections && (
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
                {activeTest.sections.map((sec, sIdx) => {
                  const isCurrentSection = currentIndex >= sec.startIndex && currentIndex < (sec.startIndex + sec.count);
                  const isLocked = isSectionalMode && lockedSections.includes(sIdx);
                  const isFutureLocked = isSectionalMode && sIdx > activeSectionIdx;

                  return (
                    <button
                      key={sIdx}
                      disabled={isLocked || isFutureLocked}
                      onClick={() => {
                        if (!isSectionalMode) {
                          setCurrentIndex(sec.startIndex);
                        }
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border flex items-center gap-1.5 ${
                        isCurrentSection
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                          : isLocked
                          ? 'bg-slate-950 border-slate-900 text-slate-600 cursor-not-allowed'
                          : isFutureLocked
                          ? 'bg-slate-950 border-slate-800 text-slate-500 cursor-not-allowed'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {(isLocked || isFutureLocked) && <Lock className="w-3 h-3 text-slate-600" />}
                      <span>{sec.name} ({sec.count}Q)</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Question Card Container */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 flex-1 flex flex-col justify-between shadow-sm">
              <div>
                
                {/* Eduquity Top-Mounted Action Trigger Bar */}
                {uiMode === 'eduquity' && (
                  <div className="pb-3 mb-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleToggleReview}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 border transition ${
                          markedForReview[currentIndex]
                            ? 'bg-purple-950/60 border-purple-500 text-purple-300'
                            : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                        }`}
                      >
                        <Bookmark className="w-3 h-3" />
                        <span>{markedForReview[currentIndex] ? 'Review Marked' : 'Mark for Review'}</span>
                      </button>

                      <button
                        onClick={handleClearResponse}
                        className="px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      >
                        Clear
                      </button>
                    </div>

                    {/* Per-Question Language Toggle placed directly above statement */}
                    <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[11px]">
                      <button
                        onClick={() => setQuestionLang('en')}
                        className={`px-2 py-0.5 rounded font-bold transition ${
                          questionLang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setQuestionLang('hi')}
                        className={`px-2 py-0.5 rounded font-bold transition ${
                          questionLang === 'hi' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                        }`}
                      >
                        हिन्दी
                      </button>
                    </div>
                  </div>
                )}

                {/* Question Header Meta */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    Question {currentIndex + 1} of {questions.length} • {currentQ?.topic}
                  </span>

                  <span className="text-xs text-slate-400">
                    Marks: <b className="text-emerald-400">+{activeTest.marksPerCorrect}</b> | Negative: <b className="text-rose-400">-{activeTest.negativeMarks}</b>
                  </span>
                </div>

                {/* Question Statement */}
                <h3 className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed mb-6 whitespace-pre-line">
                  {currentQ?.question}
                </h3>

                {/* Options List */}
                <div className="space-y-3">
                  {currentQ?.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[currentIndex] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition flex items-center gap-3 ${
                          isSelected
                            ? 'bg-indigo-600/20 border-indigo-500 text-white font-bold shadow-sm'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Question Controls (TCS Style or Navigation) */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                
                {/* TCS-style bottom controls */}
                {uiMode === 'tcs' ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleToggleReview}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition ${
                        markedForReview[currentIndex]
                          ? 'bg-purple-950/60 border-purple-500 text-purple-300'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>{markedForReview[currentIndex] ? 'Marked for Review' : 'Mark for Review'}</span>
                    </button>

                    <button
                      onClick={handleClearResponse}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent transition"
                    >
                      Clear Response
                    </button>
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 font-mono">
                    Eduquity CBT Active
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 flex items-center gap-1 transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1 transition shadow-md shadow-indigo-600/20"
                  >
                    Save & Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Question Palette Panel (Left for Eduquity, Right for TCS) */}
          <div className={`w-full lg:w-72 bg-slate-900/60 border-slate-800 p-4 overflow-y-auto flex flex-col justify-between shrink-0 ${
            uiMode === 'eduquity'
              ? 'border-r order-first lg:order-first'
              : 'border-l order-last lg:order-last'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {uiMode === 'eduquity' ? 'Eduquity Question Index' : 'TCS Question Palette'}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  {currentIndex + 1} / {questions.length}
                </span>
              </div>

              {/* Status Legend */}
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-emerald-500 shrink-0"></span>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-purple-500 shrink-0"></span>
                  <span>For Review</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-slate-800 shrink-0"></span>
                  <span>Unattempted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-indigo-600 shrink-0"></span>
                  <span>Current</span>
                </div>
              </div>

              {/* Palette Grid */}
              <div className="grid grid-cols-5 gap-2 max-h-80 lg:max-h-96 overflow-y-auto pr-1 no-scrollbar">
                {questions.map((_, qIdx) => {
                  const isCurrent = qIdx === currentIndex;
                  const isAnswered = selectedAnswers[qIdx] !== undefined;
                  const isReview = markedForReview[qIdx];

                  let btnColor = 'bg-slate-800 text-slate-400 hover:bg-slate-700';
                  if (isCurrent) btnColor = 'bg-indigo-600 text-white font-bold ring-2 ring-indigo-400';
                  else if (isReview) btnColor = 'bg-purple-600 text-white font-bold';
                  else if (isAnswered) btnColor = 'bg-emerald-600 text-white font-bold';

                  return (
                    <button
                      key={qIdx}
                      onClick={() => setCurrentIndex(qIdx)}
                      className={`h-9 rounded-lg text-xs transition flex items-center justify-center ${btnColor}`}
                    >
                      {qIdx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Test Summary Box in Drawer */}
            <div className="mt-4 pt-3 border-t border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Attempted:</span>
                <span className="font-bold text-emerald-400">{Object.keys(selectedAnswers).length}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Unattempted:</span>
                <span className="font-bold text-slate-300">{questions.length - Object.keys(selectedAnswers).length}</span>
              </div>

              {isSectionalMode && activeTest.sections && activeSectionIdx < activeTest.sections.length - 1 ? (
                <button
                  onClick={handleManualSectionAdvance}
                  className="w-full mt-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-sm"
                >
                  Submit Section & Next →
                </button>
              ) : (
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="w-full mt-3 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md shadow-emerald-600/20"
                >
                  Submit Mock Test
                </button>
              )}
            </div>
          </div>

        </div>
      )}

      {/* Confirmation Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white">Ready to Submit Test?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              You have answered <b>{Object.keys(selectedAnswers).length}</b> of <b>{questions.length}</b> questions. 
              Submitting now will finalize your score, evaluate your official cutoff status, and auto-catalog mistakes into your Mistake Vault.
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
              >
                Back to Test
              </button>
              <button
                onClick={handleSubmitTest}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md shadow-emerald-600/20"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
