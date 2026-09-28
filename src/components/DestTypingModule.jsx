import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Keyboard, 
  Timer, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  Award, 
  FileText, 
  BarChart2, 
  ShieldCheck, 
  XCircle, 
  Info, 
  HelpCircle,
  Zap,
  ArrowRight,
  TrendingUp,
  Sliders,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

// 4 Official-grade SSC CGL DEST Passages (~2,000 Key Depressions each)
const OFFICIAL_DEST_PASSAGES = [
  {
    id: 'gov_digital',
    title: 'Administrative Digital Governance & Public Service Delivery',
    category: 'E-Governance',
    keyDepressionsTarget: 2045,
    text: `The digital transformation in public administration has fundamentally reshaped governance and citizen service delivery across India. Over the last decade, direct benefit transfers have eliminated leakages in welfare subsidies, ensuring that financial assistance reaches vulnerable households with high transparency. Central and state departments now deploy advanced data analytics and unified cloud portals to streamline bureaucratic workflows, public procurement, and direct tax collections. In this changing environment, civil servants must display high technological aptitude, swift keyboard dexterity, and diligent records supervision. Effective document management prevents data duplication and procedural bottlenecks. Modern departments operate enterprise resource systems and real-time project management dashboards to supervise major infrastructure initiatives. To qualify for positions in central ministries, aspirants must cultivate cognitive agility, typing stamina, and rigorous adherence to data accuracy. Systematic entry of administrative registers, public grievance tracking, and statutory compliance demands error-free transcription. Precision in typing and thorough data processing are indispensable skills for modern public administration.`
  },
  {
    id: 'econ_finance',
    title: 'Economic Growth, Capital Markets & Fiscal Prudence',
    category: 'Economics & Banking',
    keyDepressionsTarget: 2038,
    text: `Sustained economic growth in developing countries depends upon capital formation, sound macroeconomic governance, and disciplined fiscal management. The industrial ecosystem flourishes when supported by efficient supply chain networks, dedicated logistics corridors, and stable interest rate regimes. Scheduled commercial banks and non-banking financial companies act as essential conduits for channelizing domestic household savings into productive commercial ventures. At the same time, regulatory authorities enforce stringent capital adequacy norms, asset quality reviews, and risk containment measures to preserve systemic solvency. The expansion of digital payment rails and microfinance networks has accelerated institutional credit availability for small enterprises and rural artisans. Long-term macroeconomic resilience necessitates steady export promotion, prudent sovereign debt supervision, and proactive policy measures to navigate fluctuating global commodity prices. Diligent computational data handling and accurate monetary reporting remain vital for executing budgetary allocations across government programs.`
  },
  {
    id: 'green_infra',
    title: 'Renewable Energy Transition & Infrastructure Modernization',
    category: 'Environment & Tech',
    keyDepressionsTarget: 2025,
    text: `Transitioning toward renewable energy sources constitutes an urgent imperative for national energy security and sustainable environmental conservation. Massive investments in utility-scale solar installations, off-shore wind power generation, and green hydrogen technology are reshaping the national power grid. Coordinated modernization of transmission corridors reduces aggregate technical and commercial losses while accommodating intermittent clean power supplies. Parallel initiatives in urban transport, including high-speed mass transit networks and electric mobility corridors, significantly curb urban carbon footprints. Sustainable urban expansion demands resilient civil engineering, decentralized municipal wastewater treatment, and intelligent traffic management systems. Successful implementation of nationwide infrastructure blueprints requires collaborative governance between municipal bodies, state authorities, and private stakeholders. Comprehensive project monitoring through geographic information systems guarantees time-bound execution without cost overruns. Public officials managing these initiatives must ensure impeccable documentation and data verification.`
  },
  {
    id: 'judicial_legal',
    title: 'Constitutional Governance, Legal Frameworks & Rule of Law',
    category: 'Polity & Law',
    keyDepressionsTarget: 2018,
    text: `Constitutional democracy thrives when the rule of law is safeguarded through an independent judiciary, responsible legislature, and vigilant civil institutions. Fundamental rights enshrined in the Constitution serve as an enduring bulwark protecting individual liberty, equality of opportunity, and social justice. The higher judiciary continuously interprets statutory enactments to align administrative practices with constitutional morality and public interest. Legal reforms and fast-track adjudicatory tribunals expedite dispute resolution, enhancing ease of doing business and protecting investor confidence. Digitization of court records and the launch of virtual hearings have democratized justice delivery for remote citizens. Transparent judicial record-keeping ensures accountability across civil and criminal proceedings. Court administrative staff and ministerial executives bear the crucial responsibility of cataloging depositions, preserving evidence registers, and drafting official orders with exceptional typographical precision. Impeccable textual accuracy upholds judicial integrity.`
  }
];

// Levenshtein distance for spelling error detection
function getCharDistance(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

// Official SSC Mistake Evaluation Engine
function evaluateSscDestErrors(targetText, userText) {
  const targetTokens = targetText.trim().split(/\s+/).filter(Boolean);
  const userTokens = userText.trim().split(/\s+/).filter(Boolean);

  const totalWords = targetTokens.length;
  if (totalWords === 0 || userTokens.length === 0) {
    return {
      fullMistakes: 0,
      halfMistakes: 0,
      totalMistakeValue: 0,
      errorPercentage: 0,
      fullDetails: [],
      halfDetails: [],
      omissions: 0,
      substitutions: 0,
      additions: 0,
      spellingErrors: 0,
      caseErrors: 0,
      punctuationErrors: 0,
      alignedPairs: []
    };
  }

  // Word-level Needleman-Wunsch / Levenshtein alignment
  const n = targetTokens.length;
  const m = userTokens.length;

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (let i = 0; i <= n; i++) dp[i][0] = i * 2;
  for (let j = 0; j <= m; j++) dp[0][j] = j * 2;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const tw = targetTokens[i - 1];
      const uw = userTokens[j - 1];
      
      let cost = 0;
      if (tw === uw) {
        cost = 0;
      } else if (tw.toLowerCase() === uw.toLowerCase()) {
        cost = 1; // case or punctuation difference
      } else {
        const cleanT = tw.replace(/[^\w]/g, '').toLowerCase();
        const cleanU = uw.replace(/[^\w]/g, '').toLowerCase();
        if (cleanT === cleanU) {
          cost = 1; // punctuation only
        } else {
          const charDist = getCharDistance(cleanT, cleanU);
          if (charDist === 1 && cleanT.length > 2) {
            cost = 1; // 1-character typo
          } else {
            cost = 2; // full substitution
          }
        }
      }

      dp[i][j] = Math.min(
        dp[i - 1][j - 1] + cost,     // match / sub
        dp[i - 1][j] + 2,             // deletion (omission)
        dp[i][j - 1] + 2              // insertion (addition)
      );
    }
  }

  // Backtrack to extract aligned sequence
  let i = n;
  let j = m;
  const alignment = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0) {
      const tw = targetTokens[i - 1];
      const uw = userTokens[j - 1];
      let cost = 2;
      if (tw === uw) cost = 0;
      else if (tw.toLowerCase() === uw.toLowerCase()) cost = 1;
      else {
        const cleanT = tw.replace(/[^\w]/g, '').toLowerCase();
        const cleanU = uw.replace(/[^\w]/g, '').toLowerCase();
        if (cleanT === cleanU) cost = 1;
        else if (getCharDistance(cleanT, cleanU) === 1 && cleanT.length > 2) cost = 1;
      }

      if (dp[i][j] === dp[i - 1][j - 1] + cost) {
        alignment.unshift({ targetWord: tw, userWord: uw, status: cost === 0 ? 'correct' : cost === 1 ? 'half' : 'sub' });
        i--;
        j--;
        continue;
      }
    }
    if (i > 0 && dp[i][j] === dp[i - 1][j] + 2) {
      alignment.unshift({ targetWord: targetTokens[i - 1], userWord: null, status: 'omission' });
      i--;
    } else {
      alignment.unshift({ targetWord: null, userWord: userTokens[j - 1], status: 'addition' });
      j--;
    }
  }

  let omissions = 0;
  let substitutions = 0;
  let additions = 0;
  let spellingErrors = 0;
  let caseErrors = 0;
  let punctuationErrors = 0;

  const fullDetails = [];
  const halfDetails = [];

  alignment.forEach(item => {
    if (item.status === 'omission') {
      omissions++;
      fullDetails.push({ type: 'Omission', detail: `Omitted target word: "${item.targetWord}"` });
    } else if (item.status === 'addition') {
      additions++;
      fullDetails.push({ type: 'Addition', detail: `Added extra word: "${item.userWord}"` });
    } else if (item.status === 'sub') {
      substitutions++;
      fullDetails.push({ type: 'Substitution', detail: `Expected "${item.targetWord}", typed "${item.userWord}"` });
    } else if (item.status === 'half') {
      const cleanT = item.targetWord.replace(/[^\w]/g, '');
      const cleanU = item.userWord.replace(/[^\w]/g, '');
      
      if (cleanT.toLowerCase() === cleanU.toLowerCase() && cleanT !== cleanU) {
        caseErrors++;
        halfDetails.push({ type: 'Capitalization', detail: `Case mismatch: "${item.targetWord}" vs "${item.userWord}"` });
      } else if (cleanT.toLowerCase() === cleanU.toLowerCase()) {
        punctuationErrors++;
        halfDetails.push({ type: 'Punctuation', detail: `Punctuation mismatch: "${item.targetWord}" vs "${item.userWord}"` });
      } else {
        spellingErrors++;
        halfDetails.push({ type: 'Spelling', detail: `Single character typo: "${item.targetWord}" vs "${item.userWord}"` });
      }
    }
  });

  const fullMistakes = omissions + substitutions + additions;
  const halfMistakes = spellingErrors + caseErrors + punctuationErrors;
  const totalMistakeValue = fullMistakes + (0.5 * halfMistakes);
  const errorPercentage = parseFloat(((totalMistakeValue / totalWords) * 100).toFixed(2));

  return {
    fullMistakes,
    halfMistakes,
    totalMistakeValue,
    errorPercentage,
    fullDetails: fullDetails.slice(0, 10),
    halfDetails: halfDetails.slice(0, 10),
    omissions,
    substitutions,
    additions,
    spellingErrors,
    caseErrors,
    punctuationErrors,
    alignedPairs: alignment
  };
}

export default function DestTypingModule() {
  const [selectedPassageId, setSelectedPassageId] = useState(OFFICIAL_DEST_PASSAGES[0].id);
  const activePassage = useMemo(() => {
    return OFFICIAL_DEST_PASSAGES.find(p => p.id === selectedPassageId) || OFFICIAL_DEST_PASSAGES[0];
  }, [selectedPassageId]);

  const [userInput, setUserInput] = useState('');
  const [testDurationMins, setTestDurationMins] = useState(15); // 15 mins default
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [backspaceCount, setBackspaceCount] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  const inputRef = useRef(null);
  const passageScrollRef = useRef(null);
  const activeWordRef = useRef(null);

  const targetWords = useMemo(() => {
    return activePassage.text.trim().split(/\s+/).filter(Boolean);
  }, [activePassage.text]);

  const userWords = useMemo(() => {
    return userInput.trim().split(/\s+/).filter(Boolean);
  }, [userInput]);

  // Keep active word in sync and auto-scroll target passage box
  useEffect(() => {
    const currentWordIdx = userWords.length > 0 ? (userInput.endsWith(' ') ? userWords.length : userWords.length - 1) : 0;
    setActiveWordIndex(currentWordIdx);

    // Auto-scroll active word into center view
    if (activeWordRef.current && passageScrollRef.current) {
      activeWordRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [userInput, userWords]);

  // Timer Interval
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(interval);
            setIsActive(false);
            setIsCompleted(true);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      setIsCompleted(true);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  // Handle Input Changes & Key Depressions
  const handleInputChange = (e) => {
    const val = e.target.value;
    if (!isActive && !isCompleted && val.length > 0) {
      setIsActive(true);
    }
    setUserInput(val);

    // If candidate finished entire passage
    if (val.length >= activePassage.text.length && !userInput.endsWith(' ')) {
      const cleanUser = val.replace(/\s+/g, ' ').trim();
      const cleanTarget = activePassage.text.replace(/\s+/g, ' ').trim();
      if (cleanUser.length >= cleanTarget.length * 0.95) {
        setIsActive(false);
        setIsCompleted(true);
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      setBackspaceCount(prev => prev + 1);
    }
  };

  const handleReset = (durationMins = 15) => {
    setUserInput('');
    setTestDurationMins(durationMins);
    setTimeLeft(durationMins * 60);
    setIsActive(false);
    setIsCompleted(false);
    setBackspaceCount(0);
    setActiveWordIndex(0);
    if (inputRef.current) inputRef.current.focus();
  };

  // Comprehensive Live Evaluation
  const evalMetrics = useMemo(() => {
    const totalKeyDepressions = userInput.length;
    const timeSpentSeconds = (testDurationMins * 60) - timeLeft;
    const timeSpentMinutes = Math.max(0.1, timeSpentSeconds / 60);

    // Official SSC Gross WPM = Key Depressions / (5 * Minutes)
    const grossWpm = Math.round(totalKeyDepressions / (5 * timeSpentMinutes));
    const kdm = Math.round(totalKeyDepressions / timeSpentMinutes); // Key depressions per minute

    // Detailed error calculation
    const errorStats = evaluateSscDestErrors(activePassage.text, userInput);

    // Net WPM = max(0, (Key Depressions - (Mistakes * 5)) / (5 * Minutes))
    const netWpm = Math.max(0, Math.round((totalKeyDepressions - (errorStats.totalMistakeValue * 5)) / (5 * timeSpentMinutes)));

    // SSC Qualifying Status
    // UR: Error <= 5.0% AND Key Depressions >= 1800 (for 15-min)
    const minDepressionsForPass = testDurationMins === 15 ? 1800 : Math.round((testDurationMins / 15) * 1800);
    const hasEnoughKeystrokes = totalKeyDepressions >= minDepressionsForPass;
    const isQualifiedUr = hasEnoughKeystrokes && errorStats.errorPercentage <= 5.0;
    const isQualifiedReserved = hasEnoughKeystrokes && errorStats.errorPercentage <= 7.0;

    return {
      totalKeyDepressions,
      timeSpentSeconds,
      timeSpentMinutes,
      grossWpm,
      netWpm,
      kdm,
      errorStats,
      hasEnoughKeystrokes,
      isQualifiedUr,
      isQualifiedReserved,
      minDepressionsForPass
    };
  }, [userInput, activePassage.text, testDurationMins, timeLeft]);

  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/60 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400 border border-amber-500/20">
              <Keyboard className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  SSC CGL DEST Typing Simulator
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  Tier-2 Qualifying (Paper 1, Session 2)
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Official Benchmark: <b className="text-slate-200">2000 Key Depressions in 15 Minutes</b> (~27 WPM) | Max Errors: <b className="text-emerald-400">UR ≤ 5.0%</b>, <b className="text-amber-300">OBC/EWS/SC/ST ≤ 7.0%</b>
              </p>
            </div>
          </div>

          {/* Test Mode Selector */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleReset(5)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
                testDurationMins === 5
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              5 Min Sprint
            </button>
            <button
              onClick={() => handleReset(15)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition border shadow-sm ${
                testDurationMins === 15
                  ? 'bg-indigo-600 text-white border-indigo-500'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              15 Min Official Exam
            </button>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5 mt-5 pt-5 border-t border-slate-800">
          
          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 text-center">
            <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-center gap-1">
              <Timer className="w-3 h-3 text-indigo-400" />
              <span>Time Left</span>
            </div>
            <div className={`text-xl font-black font-mono mt-1 ${
              timeLeft < 120 && isActive ? 'text-rose-400 animate-pulse' : 'text-indigo-400'
            }`}>
              {formatTimer(timeLeft)}
            </div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 text-center">
            <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-center gap-1">
              <Keyboard className="w-3 h-3 text-amber-400" />
              <span>Depressions</span>
            </div>
            <div className="text-xl font-black text-white font-mono mt-1">
              {evalMetrics.totalKeyDepressions} 
              <span className="text-[10px] text-slate-500 font-normal"> / {activePassage.keyDepressionsTarget}</span>
            </div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 text-center">
            <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-center gap-1">
              <Zap className="w-3 h-3 text-emerald-400" />
              <span>Gross WPM</span>
            </div>
            <div className="text-xl font-black text-emerald-400 font-mono mt-1">
              {evalMetrics.grossWpm}
            </div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 text-center">
            <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-center gap-1">
              <TrendingUp className="w-3 h-3 text-cyan-400" />
              <span>Net Speed</span>
            </div>
            <div className="text-xl font-black text-cyan-400 font-mono mt-1">
              {evalMetrics.netWpm} <span className="text-[10px] text-slate-500 font-normal">WPM</span>
            </div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 text-center">
            <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-center gap-1">
              <AlertTriangle className="w-3 h-3 text-rose-400" />
              <span>Error Rate</span>
            </div>
            <div className={`text-xl font-black font-mono mt-1 ${
              evalMetrics.errorStats.errorPercentage <= 5.0
                ? 'text-emerald-400'
                : evalMetrics.errorStats.errorPercentage <= 7.0
                ? 'text-amber-400'
                : 'text-rose-400'
            }`}>
              {evalMetrics.errorStats.errorPercentage}%
            </div>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80 text-center col-span-2 sm:col-span-1">
            <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-indigo-400" />
              <span>UR Status</span>
            </div>
            <div className="text-xs font-bold mt-1.5 flex items-center justify-center gap-1">
              {evalMetrics.isQualifiedUr ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Qualified
                </span>
              ) : evalMetrics.isQualifiedReserved ? (
                <span className="text-amber-400 flex items-center gap-1">
                  OBC/EWS Pass
                </span>
              ) : (
                <span className="text-slate-400 flex items-center gap-1">
                  {evalMetrics.totalKeyDepressions < evalMetrics.minDepressionsForPass ? 'In Progress' : 'Unqualified'}
                </span>
              )}
            </div>
          </div>

        </div>

        {/* Live Keystroke Progress Bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>Official SSC 2,000 Key Depressions Target</span>
            <span className="font-mono text-slate-300">
              {Math.min(100, Math.round((evalMetrics.totalKeyDepressions / 2000) * 100))}% Completed
            </span>
          </div>
          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div 
              className={`h-full transition-all duration-300 ${
                evalMetrics.totalKeyDepressions >= 2000
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                  : 'bg-gradient-to-r from-indigo-500 to-amber-500'
              }`}
              style={{ width: `${Math.min(100, (evalMetrics.totalKeyDepressions / 2000) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Passage Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-3 rounded-2xl">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-semibold">Select Passage:</span>
          <div className="flex flex-wrap gap-1.5">
            {OFFICIAL_DEST_PASSAGES.map((pass, idx) => (
              <button
                key={pass.id}
                onClick={() => {
                  if (pass.id !== selectedPassageId) {
                    setSelectedPassageId(pass.id);
                    handleReset(testDurationMins);
                  }
                }}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition ${
                  selectedPassageId === pass.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                Passage #{idx + 1} ({pass.category})
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-400 flex items-center gap-3">
          <span>Target Words: <b className="text-white">{targetWords.length}</b></span>
          <span>Backspaces: <b className="text-amber-400 font-mono">{backspaceCount}</b></span>
        </div>
      </div>

      {/* Synchronized Display: Target Passage on Top with Active Word Tracking */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-lg space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider pb-1">
          <span className="flex items-center gap-2 text-indigo-400">
            <FileText className="w-4 h-4" />
            Official Target Text ({activePassage.title}):
          </span>
          <span className="text-slate-500 text-[11px] font-normal lowercase">
            (active word highlighted in real-time)
          </span>
        </div>

        <div 
          ref={passageScrollRef}
          className="p-5 bg-slate-950 rounded-2xl border border-slate-800 text-sm text-slate-300 font-mono leading-relaxed max-h-48 overflow-y-auto select-none space-x-1.5"
        >
          {targetWords.map((word, wIdx) => {
            const isCurrent = wIdx === activeWordIndex;
            const isCompletedWord = wIdx < activeWordIndex;
            const typedWord = userWords[wIdx];
            const hasError = isCompletedWord && typedWord && typedWord !== word;

            return (
              <span
                key={wIdx}
                ref={isCurrent ? activeWordRef : null}
                className={`inline-block px-1 py-0.5 rounded transition ${
                  isCurrent
                    ? 'bg-indigo-600 text-white font-bold ring-2 ring-indigo-400/50 shadow-sm'
                    : hasError
                    ? 'text-rose-400 underline decoration-rose-500 font-semibold'
                    : isCompletedWord
                    ? 'text-emerald-400/90'
                    : 'text-slate-300'
                }`}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>

      {/* Candidate Typing Box */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <span>Candidate Typing Workspace:</span>
            {!isActive && !isCompleted && userInput.length === 0 && (
              <span className="text-indigo-400 font-normal animate-pulse text-[11px]">
                (Timer activates upon 1st keystroke)
              </span>
            )}
          </label>
          
          <button
            onClick={() => handleReset(testDurationMins)}
            className="px-3 py-1 rounded-xl text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 flex items-center gap-1.5 font-semibold transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Session
          </button>
        </div>

        <textarea
          ref={inputRef}
          rows={7}
          disabled={isCompleted}
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Click here and begin typing the official passage above. Ensure punctuation and capitalization are exact..."
          className="w-full p-4 sm:p-5 bg-slate-950 border border-slate-700/80 rounded-2xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 font-mono leading-relaxed resize-none shadow-inner"
        />

        <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-1">
          <div className="flex items-center gap-4">
            <span>Typed Words: <b className="text-white font-mono">{userWords.length}</b> / {targetWords.length}</span>
            <span>Key Depressions: <b className="text-indigo-400 font-mono">{evalMetrics.totalKeyDepressions}</b></span>
          </div>
          <div className="text-slate-500">
            Formula: Gross WPM = Keystrokes ÷ (5 × Minutes)
          </div>
        </div>
      </div>

      {/* Post-Test Scorecard Modal / Diagnostic Breakdown */}
      {isCompleted && (
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400 border border-amber-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">
                  Official DEST Diagnostic Scorecard
                </h3>
                <p className="text-xs text-slate-400">
                  Evaluated strictly per Staff Selection Commission (SSC) Examination Manual
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleReset(testDurationMins)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition flex items-center gap-2 shadow-md"
              >
                <RotateCcw className="w-4 h-4" /> Retake Test
              </button>
            </div>
          </div>

          {/* SSC Qualifying Result Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* UR General Card */}
            <div className={`p-5 rounded-2xl border ${
              evalMetrics.isQualifiedUr 
                ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/20 border-rose-500/40 text-rose-300'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Unreserved (UR) Benchmark
                </span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-black border ${
                  evalMetrics.isQualifiedUr 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : 'bg-rose-500/20 text-rose-400 border-rose-500/30'
                }`}>
                  {evalMetrics.isQualifiedUr ? 'QUALIFIED' : 'NOT QUALIFIED'}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Max Allowed Error: <b>5.0%</b> | Your Error: <b className="font-mono text-white">{evalMetrics.errorStats.errorPercentage}%</b>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                {evalMetrics.isQualifiedUr 
                  ? '✓ Met speed and permissible error thresholds for UR posts.'
                  : evalMetrics.totalKeyDepressions < evalMetrics.minDepressionsForPass 
                  ? '✗ Keystrokes fell short of minimum 2,000 depressions required.'
                  : '✗ Error rate exceeds the 5% maximum permissible ceiling for UR.'}
              </p>
            </div>

            {/* Reserved Category Card */}
            <div className={`p-5 rounded-2xl border ${
              evalMetrics.isQualifiedReserved 
                ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/20 border-rose-500/40 text-rose-300'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  OBC / EWS / SC / ST / ESM / PwD
                </span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-black border ${
                  evalMetrics.isQualifiedReserved 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : 'bg-rose-500/20 text-rose-400 border-rose-500/30'
                }`}>
                  {evalMetrics.isQualifiedReserved ? 'QUALIFIED' : 'NOT QUALIFIED'}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Max Allowed Error: <b>7.0%</b> | Your Error: <b className="font-mono text-white">{evalMetrics.errorStats.errorPercentage}%</b>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                {evalMetrics.isQualifiedReserved 
                  ? '✓ Qualified under relaxed 7% error ceiling for reserved quotas.'
                  : '✗ Error rate exceeds the 7% maximum permissible relaxation.'}
              </p>
            </div>

          </div>

          {/* Official SSC Mistake Taxonomy Breakdown */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-indigo-400" />
              <span>SSC Mistake Evaluation Breakdown</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 font-semibold">Full Mistakes</div>
                <div className="text-lg font-black text-rose-400 font-mono mt-0.5">
                  {evalMetrics.errorStats.fullMistakes}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  (Omission / Sub / Add)
                </div>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 font-semibold">Half Mistakes</div>
                <div className="text-lg font-black text-amber-400 font-mono mt-0.5">
                  {evalMetrics.errorStats.halfMistakes}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  (Typo / Punctuation / Case)
                </div>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 font-semibold">Net Penalty Value</div>
                <div className="text-lg font-black text-indigo-400 font-mono mt-0.5">
                  {evalMetrics.errorStats.totalMistakeValue}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Full + (0.5 × Half)
                </div>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 font-semibold">Official Error %</div>
                <div className={`text-lg font-black font-mono mt-0.5 ${
                  evalMetrics.errorStats.errorPercentage <= 5.0 ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {evalMetrics.errorStats.errorPercentage}%
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  (Penalty ÷ Total Words) × 100
                </div>
              </div>
            </div>

            {/* Error Details Log */}
            {(evalMetrics.errorStats.fullDetails.length > 0 || evalMetrics.errorStats.halfDetails.length > 0) && (
              <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                <div className="text-[11px] font-bold text-slate-400">
                  Sample Logged Transcription Discrepancies:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {evalMetrics.errorStats.fullDetails.map((f, idx) => (
                    <div key={idx} className="p-2 bg-rose-950/20 border border-rose-900/40 rounded-lg text-rose-300 flex items-start gap-1.5">
                      <span className="font-bold shrink-0 text-rose-400">[{f.type}]:</span>
                      <span className="truncate">{f.detail}</span>
                    </div>
                  ))}
                  {evalMetrics.errorStats.halfDetails.map((h, idx) => (
                    <div key={idx} className="p-2 bg-amber-950/20 border border-amber-900/40 rounded-lg text-amber-300 flex items-start gap-1.5">
                      <span className="font-bold shrink-0 text-amber-400">[{h.type}]:</span>
                      <span className="truncate">{h.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      )}

      {/* Official Guidelines Info Callout */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-400 flex items-start gap-3">
        <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-bold text-slate-200">
            Important SSC CGL Tier-2 Typing Rules:
          </div>
          <ul className="list-disc list-inside space-y-0.5 text-slate-400">
            <li>DEST is mandatory for all posts in SSC CGL (AEO, Inspector, ASO, Postal Assistant, Tax Assistant).</li>
            <li>Typing is conducted in a single test session of 15 minutes immediately following Paper-I Session-2.</li>
            <li>Total required depressions is <b>2,000 key depressions</b> with standard space count.</li>
            <li>Backspaces are allowed in the test, but excessive backspacing lowers gross depressions.</li>
            <li>Candidates with physical disability (orthopedically handicapped) are eligible for 20 minutes with scribe assistance.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
