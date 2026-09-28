import React, { useState, useMemo } from 'react';
import { 
  Zap, 
  Eye, 
  AlertOctagon, 
  CheckCircle, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HelpCircle, 
  Sparkles, 
  Clock, 
  Target, 
  ChevronDown, 
  ChevronUp, 
  RefreshCw, 
  BookOpen, 
  ArrowRight, 
  Bookmark, 
  Star, 
  Globe, 
  FileText, 
  Lightbulb 
} from 'lucide-react';
import { generateTypeQuestions } from '../services/geminiService';
import { TOPIC_THEORY } from '../data/topicTheoryData';
import confetti from 'canvas-confetti';

export default function TopicDetailView({ 
  topic, 
  subjectName, 
  examName = "SSC CGL", 
  onAskAiAboutTopic,
  onNextTopic,
  onPrevTopic,
  hasNextTopic = false,
  hasPrevTopic = false,
  isCompleted = false,
  onToggleComplete
}) {
  const [activeViewMode, setActiveViewMode] = useState('theory'); // 'theory', 'shortcuts', 'drill'
  const [languageMode, setLanguageMode] = useState('bilingual'); // 'en', 'hi', 'bilingual'
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [userSelectedOptions, setUserSelectedOptions] = useState({});
  
  // Bookmarks stored in localStorage
  const [isBookmarked, setIsBookmarked] = useState(() => {
    try {
      const bmarks = JSON.parse(localStorage.getItem('ssc_bookmarks') || '{}');
      return Boolean(bmarks[topic?.id]);
    } catch {
      return false;
    }
  });

  // AI generation state
  const [aiQuestions, setAiQuestions] = useState([]);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiDifficulty, setAiDifficulty] = useState('New Vendor Mains Level');
  const [aiError, setAiError] = useState('');

  // Fetch theory data for this topic
  const theoryData = useMemo(() => {
    if (!topic?.id) return null;
    return TOPIC_THEORY[topic.id] || topic.theory || null;
  }, [topic]);

  if (!topic) {
    return (
      <div className="flex-1 p-8 flex items-center justify-center text-slate-500">
        Select a topic from the sidebar to view full theory, types, blueprints, and shortcuts.
      </div>
    );
  }

  const types = topic.types || [];
  const safeSelectedIdx = (selectedTypeIndex >= 0 && selectedTypeIndex < types.length) ? selectedTypeIndex : 0;
  const activeType = types[safeSelectedIdx] || types[0] || null;

  const toggleBookmark = () => {
    try {
      const bmarks = JSON.parse(localStorage.getItem('ssc_bookmarks') || '{}');
      const updated = { ...bmarks };
      if (updated[topic.id]) {
        delete updated[topic.id];
        setIsBookmarked(false);
      } else {
        updated[topic.id] = {
          id: topic.id,
          name: topic.name,
          subject: subjectName,
          typesCount: types.length,
          savedAt: new Date().toLocaleDateString()
        };
        setIsBookmarked(true);
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.2 } });
      }
      localStorage.setItem('ssc_bookmarks', JSON.stringify(updated));
    } catch (e) {
      console.error("Bookmark error", e);
    }
  };

  const toggleSolution = (key) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSelectOption = (questionKey, optionIdx, correctIdx) => {
    setUserSelectedOptions(prev => ({
      ...prev,
      [questionKey]: optionIdx
    }));

    if (optionIdx === correctIdx) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const handleGenerateAiQuestions = async () => {
    if (!activeType) return;
    setIsGeneratingAi(true);
    setAiError('');
    try {
      const generated = await generateTypeQuestions(
        topic.name,
        activeType.title,
        3,
        aiDifficulty,
        examName
      );
      setAiQuestions(generated);
    } catch (err) {
      setAiError(err.message || 'Failed to generate questions. Ensure your Gemini API Key is configured.');
    } finally {
      setIsGeneratingAi(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Topic Header Card */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {subjectName}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {topic.category || 'Core Syllabus'}
            </span>
            {topic.avgQuestionsPerPaper && (
              <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-indigo-400" />
                Weightage: {topic.avgQuestionsPerPaper}
              </span>
            )}
          </div>

          {/* Bookmark & Language Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleBookmark}
              title={isBookmarked ? "Remove Bookmark" : "Bookmark this Topic"}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                isBookmarked
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => onAskAiAboutTopic(topic.name)}
              className="px-3 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ask Inspector Sahab</span>
            </button>
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          {topic.name}
        </h1>

        <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {topic.overview}
        </p>

        {/* 3-Mode Sub Navigation: Foundation vs Shortcuts vs Drills */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveViewMode('theory')}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition ${
                activeViewMode === 'theory'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. Beginner Foundation</span>
            </button>

            <button
              onClick={() => setActiveViewMode('shortcuts')}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition ${
                activeViewMode === 'shortcuts'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>2. Speed Shortcuts ({types.length} Types)</span>
            </button>

            <button
              onClick={() => setActiveViewMode('drill')}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition ${
                activeViewMode === 'drill'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span>3. Rapid Practice Drill</span>
            </button>
          </div>

          <div className="text-xs text-slate-400 font-semibold hidden md:block">
            Target Solving Time: <span className="text-amber-400 font-bold">20-30s per question</span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* VIEW 1: BEGINNER FOUNDATION & THEORY (Concept First) */}
      {/* ============================================================== */}
      {activeViewMode === 'theory' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          
          {/* Concept Overview Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">
                  Conceptual Foundation
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  What is {topic.name}? (Intuitive Understanding)
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {theoryData?.conceptOverview || topic.overview}
            </p>

            {/* Bilingual Hindi Explainer Note */}
            {theoryData?.bilingualNote && (
              <div className="p-4 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1">
                <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>सरल हिंदी में अवधारणा (Hindi Conceptual Summary):</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">
                  {theoryData.bilingualNote}
                </p>
              </div>
            )}
          </div>

          {/* Core Formulas & Laws */}
          {theoryData?.coreFormulae && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Fundamental Formulas & Invariant Relations</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {theoryData.coreFormulae.map((f, fIdx) => (
                  <div key={fIdx} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                    <div className="text-xs font-bold text-indigo-300">{f.name}</div>
                    <div className="p-2 rounded-lg bg-indigo-950/40 text-emerald-400 font-mono text-xs font-bold border border-indigo-900/30">
                      {f.formula}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">
                      {f.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step-by-Step Beginner Method */}
          {theoryData?.stepByStepGuide && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>The Step-by-Step Fundamental Approach (Zero Guesswork)</span>
              </h3>

              <div className="space-y-2 pt-1">
                {theoryData.stepByStepGuide.map((step, sIdx) => (
                  <div key={sIdx} className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-indigo-600/30 text-indigo-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Worked Beginner Example */}
          {theoryData?.beginnerExample && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Beginner Walkthrough Example
                </span>
                <span className="text-[11px] text-slate-400">Step-by-step reasoning</span>
              </div>

              <div className="text-sm font-semibold text-slate-100 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                {theoryData.beginnerExample.question}
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 font-mono">
                  {theoryData.beginnerExample.step1}
                </div>
                <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 font-mono">
                  {theoryData.beginnerExample.step2}
                </div>
                {theoryData.beginnerExample.step3 && (
                  <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 font-mono">
                    {theoryData.beginnerExample.step3}
                  </div>
                )}
                {theoryData.beginnerExample.step4 && (
                  <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 font-mono">
                    {theoryData.beginnerExample.step4}
                  </div>
                )}
                {theoryData.beginnerExample.step5 && (
                  <div className="p-2.5 bg-emerald-950/30 text-emerald-300 rounded-lg border border-emerald-900/40 font-mono font-bold">
                    ✓ Final Answer: {theoryData.beginnerExample.step5}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Common Beginner Traps */}
          {theoryData?.commonBeginnerMistakes && (
            <div className="bg-rose-950/15 border border-rose-900/30 rounded-2xl p-5 space-y-3">
              <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                <span>Beginner Traps to Avoid in this Topic</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300 list-disc pl-5">
                {theoryData.commonBeginnerMistakes.map((mistake, mIdx) => (
                  <li key={mIdx}>{mistake}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Jump to Shortcuts Banner */}
          <div className="p-5 bg-gradient-to-r from-indigo-900/40 to-purple-900/30 border border-indigo-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white">Now that your concepts are clear:</div>
              <div className="text-xs text-slate-300">Master the 20-second pro shortcuts and examiner traps for all {types.length} question types.</div>
            </div>
            <button
              onClick={() => setActiveViewMode('shortcuts')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition shrink-0 shadow-md shadow-indigo-600/30"
            >
              <span>Unlock Speed Shortcuts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* VIEW 2: EXAM TYPES & PRO SHORTCUTS */}
      {/* ============================================================== */}
      {activeViewMode === 'shortcuts' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          
          {/* Question Types Navigation Pills */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>Types Breakdown ({types.length} Archetypes)</span>
              </h2>
              <span className="text-[11px] text-slate-500">
                Click archetype to inspect shortcuts
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {types.map((t, idx) => {
                const isActive = idx === selectedTypeIndex;
                return (
                  <button
                    key={t.typeNumber || idx}
                    onClick={() => setSelectedTypeIndex(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-2 border shrink-0 ${
                      isActive 
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20' 
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                      isActive ? 'bg-white text-indigo-700' : 'bg-slate-800 text-slate-300'
                    }`}>
                      T{t.typeNumber}
                    </span>
                    <span className="truncate max-w-[200px] sm:max-w-xs">{t.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Type Deep-Dive Container */}
          {activeType && (
            <div className="space-y-5">
              
              {/* Blueprint & Identification Box */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                        2-Second Identification Blueprint
                      </div>
                      <h3 className="text-base font-bold text-white">
                        Type {activeType.typeNumber}: {activeType.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* How to Spot in 2 Seconds */}
                <div className="p-3.5 bg-slate-950/70 border border-slate-800/80 rounded-xl">
                  <div className="text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>How to Spot this Type in 2 Seconds (Keywords / Clues):</span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono leading-relaxed">
                    {activeType.identificationBlueprint}
                  </p>
                </div>

                {/* Grid: Slow Method vs Exam Pro Shortcut */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  
                  {/* Slow Method (To Avoid) */}
                  <div className="p-4 bg-rose-950/15 border border-rose-900/30 rounded-xl space-y-1.5">
                    <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                      <AlertOctagon className="w-4 h-4 text-rose-400" />
                      <span>Slow Traditional Method (Avoid in Exam)</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeType.standardMethod}
                    </p>
                  </div>

                  {/* Pro Exam Shortcut (To Use) */}
                  <div className="p-4 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1.5">
                    <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-emerald-400" />
                      <span>Pro Exam Shortcut & 20-Second Hack</span>
                    </div>
                    <div className="text-xs text-slate-200 font-mono whitespace-pre-line leading-relaxed">
                      {activeType.proShortcut}
                    </div>
                  </div>

                </div>

              </div>

              {/* Worked Exemplar Card */}
              {activeType.workedExample && (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="p-1 px-2 rounded-md bg-indigo-600/20 text-indigo-400 text-xs font-bold border border-indigo-500/30">
                        Exam Exemplar (New Vendor Pattern)
                      </span>
                      {typeof activeType.workedExample === 'object' && activeType.workedExample.targetTime && (
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          Target Time: <span className="text-amber-300 font-bold">{activeType.workedExample.targetTime}</span>
                        </span>
                      )}
                    </div>

                    {typeof activeType.workedExample === 'object' && Array.isArray(activeType.workedExample.options) && (
                      <button
                        onClick={() => toggleSolution(`ex-${selectedTypeIndex}`)}
                        className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                      >
                        {revealedSolutions[`ex-${selectedTypeIndex}`] ? (
                          <>Hide Solution <ChevronUp className="w-3.5 h-3.5" /></>
                        ) : (
                          <>Reveal Shortcut Steps <ChevronDown className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    )}
                  </div>

                  {/* If workedExample is a simple string */}
                  {typeof activeType.workedExample === 'string' ? (
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-slate-100 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-indigo-900/30 font-sans">
                        {activeType.workedExample}
                      </div>
                      {activeType.examinerTrap && (
                        <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-xl flex items-start gap-2.5">
                          <AlertOctagon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-bold text-amber-300 block mb-0.5">
                              Modern Examiner Trap Alert:
                            </span>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {activeType.examinerTrap}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* If workedExample is an object */
                    <>
                      {/* Question Text */}
                      {(activeType.workedExample.question || activeType.workedExample.q) && (
                        <div className="text-sm font-medium text-slate-100 leading-relaxed bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
                          {activeType.workedExample.question || activeType.workedExample.q}
                        </div>
                      )}

                      {/* Options */}
                      {Array.isArray(activeType.workedExample.options) && activeType.workedExample.options.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {activeType.workedExample.options.map((opt, oIdx) => {
                            const qKey = `ex-${selectedTypeIndex}`;
                            const userChoice = userSelectedOptions[qKey];
                            const isSelected = userChoice === oIdx;
                            const isCorrect = oIdx === activeType.workedExample.correctIndex;
                            const isRevealed = revealedSolutions[qKey];

                            let btnStyle = 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300';
                            if (userChoice !== undefined) {
                              if (isSelected && isCorrect) {
                                btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
                              } else if (isSelected && !isCorrect) {
                                btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                              } else if (isCorrect) {
                                btnStyle = 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300';
                              }
                            } else if (isRevealed && isCorrect) {
                              btnStyle = 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 font-bold';
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleSelectOption(qKey, oIdx, activeType.workedExample.correctIndex)}
                                className={`p-3 rounded-xl border text-left text-xs transition flex items-center justify-between ${btnStyle}`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                    {String.fromCharCode(65 + oIdx)}
                                  </span>
                                  <span>{opt}</span>
                                </div>
                                {userChoice !== undefined && isCorrect && (
                                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Collapsible Solution & Trap Warning */}
                      {(revealedSolutions[`ex-${selectedTypeIndex}`] || userSelectedOptions[`ex-${selectedTypeIndex}`] !== undefined || !Array.isArray(activeType.workedExample.options)) && (
                        <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-3 animate-in fade-in duration-150">
                          
                          {/* Step by step shortcut */}
                          {(activeType.workedExample.shortcutApplication || activeType.workedExample.solution || activeType.workedExample.hint) && (
                            <div className="p-3.5 bg-slate-950 rounded-xl border border-indigo-900/30">
                              <div className="text-xs font-bold text-indigo-400 mb-1.5 flex items-center gap-1.5">
                                <Zap className="w-3.5 h-3.5" />
                                <span>Speed Shortcut Breakdown:</span>
                              </div>
                              <div className="text-xs text-slate-200 font-mono whitespace-pre-line leading-relaxed">
                                {activeType.workedExample.shortcutApplication || activeType.workedExample.solution || activeType.workedExample.hint}
                              </div>
                            </div>
                          )}

                          {/* Trap Warning Box */}
                          {(activeType.workedExample.examinerTrap || activeType.examinerTrap) && (
                            <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-xl flex items-start gap-2.5">
                              <AlertOctagon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <div>
                                <span className="text-xs font-bold text-amber-300 block mb-0.5">
                                  Modern Examiner Trap Alert:
                                </span>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                  {activeType.workedExample.examinerTrap || activeType.examinerTrap}
                                </p>
                              </div>
                            </div>
                          )}

                        </div>
                      )}
                    </>
                  )}

                </div>
              )}

              {/* AI Practice Generator Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <h4 className="text-xs uppercase font-extrabold text-slate-200">
                      Generate Fresh AI Practice Drill for this Type
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={aiDifficulty}
                      onChange={(e) => setAiDifficulty(e.target.value)}
                      className="px-2.5 py-1 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Tier 1 Speed Pattern">Tier 1 Speed Pattern</option>
                      <option value="New Vendor Mains Level">New Vendor Mains Level (Eduquity)</option>
                      <option value="Hardest Traps & Decimals">Hardest Traps & Decimals</option>
                    </select>

                    <button
                      onClick={handleGenerateAiQuestions}
                      disabled={isGeneratingAi}
                      className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-md shadow-indigo-600/20"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingAi ? 'animate-spin' : ''}`} />
                      <span>{isGeneratingAi ? 'Generating...' : 'Generate 3 Questions'}</span>
                    </button>
                  </div>
                </div>

                {aiError && (
                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/40 text-xs text-amber-300">
                    {aiError}
                  </div>
                )}

                {/* AI Questions List */}
                {aiQuestions.length > 0 && (
                  <div className="space-y-3 pt-2">
                    {aiQuestions.map((aiQ, qIdx) => (
                      <div key={qIdx} className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3">
                        <div className="text-xs font-semibold text-slate-200">
                          Q{qIdx + 1}. {aiQ.question}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {aiQ.options?.map((opt, oIdx) => (
                            <div key={oIdx} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                              {opt}
                            </div>
                          ))}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono pt-1">
                          💡 <b>Detailed Solution:</b> {aiQ.detailedSolution || aiQ.trap}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

        </div>
      )}

      {/* ============================================================== */}
      {/* VIEW 3: RAPID PRACTICE DRILL */}
      {/* ============================================================== */}
      {activeViewMode === 'drill' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>Interactive Practice Drills for {topic.name}</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Solve with target speed and verify answers immediately
                </p>
              </div>
            </div>

            {/* Check if activeType has practiceQuestions */}
            {activeType?.practiceQuestions && activeType.practiceQuestions.length > 0 ? (
              <div className="space-y-4">
                {activeType.practiceQuestions.map((pq, pIdx) => {
                  const qKey = `pq-${selectedTypeIndex}-${pIdx}`;
                  const userChoice = userSelectedOptions[qKey];
                  return (
                    <div key={pIdx} className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-3">
                      <div className="text-xs sm:text-sm font-semibold text-slate-200">
                        Q{pIdx + 1}. {pq.q || pq.question}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(pq.options || []).map((opt, oIdx) => {
                          const isSelected = userChoice === oIdx;
                          const isCorrect = oIdx === pq.correctIndex;
                          let btnStyle = 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300';
                          if (userChoice !== undefined) {
                            if (isSelected && isCorrect) btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
                            else if (isSelected && !isCorrect) btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                            else if (isCorrect) btnStyle = 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300';
                          }
                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectOption(qKey, oIdx, pq.correctIndex)}
                              className={`p-2.5 rounded-lg border text-left text-xs transition flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {userChoice !== undefined && isCorrect && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                            </button>
                          );
                        })}
                      </div>

                      {userChoice !== undefined && (pq.hint || pq.explanation) && (
                        <div className="text-[11px] text-slate-300 pt-1 font-mono bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                          💡 <b>Speed Solution & Hint:</b> {pq.hint || pq.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center space-y-3 bg-slate-950/60 rounded-xl border border-slate-800">
                <Target className="w-8 h-8 text-indigo-400 mx-auto" />
                <div className="text-sm font-semibold text-slate-300">
                  Ready to practice questions for Type {activeType?.typeNumber}?
                </div>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Click the button below to generate 3 AI-curated practice problems with real-time solutions and hints for this specific archetype.
                </p>
                <button
                  onClick={handleGenerateAiQuestions}
                  disabled={isGeneratingAi}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
                  <span>Generate Practice Drill Now</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sticky Bottom Topic Navigation Footer */}
      <div className="sticky bottom-0 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 sm:p-4 rounded-b-3xl flex items-center justify-between gap-3 z-10 shadow-2xl">
        <button
          onClick={onPrevTopic}
          disabled={!hasPrevTopic}
          className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
            hasPrevTopic
              ? 'bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white'
              : 'opacity-40 cursor-not-allowed bg-slate-950 text-slate-600 border border-slate-900'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous Topic</span>
        </button>

        <button
          onClick={onToggleComplete}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition ${
            isCompleted
              ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
              : 'bg-indigo-600 hover:bg-indigo-500 border-indigo-500 text-white shadow-md'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isCompleted ? 'Completed ✓' : 'Mark Topic Complete'}</span>
        </button>

        <button
          onClick={onNextTopic}
          disabled={!hasNextTopic}
          className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
            hasNextTopic
              ? 'bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600/30'
              : 'opacity-40 cursor-not-allowed bg-slate-950 text-slate-600 border border-slate-900'
          }`}
        >
          <span className="hidden sm:inline">Next Topic</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
