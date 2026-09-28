import React, { useState } from 'react';
import { Sparkles, Send, Copy, Check, RefreshCw, Zap, AlertTriangle, ArrowRight } from 'lucide-react';
import { solveAndClassifyQuestion } from '../services/geminiService';

const SAMPLE_QUESTIONS = [
  {
    label: 'Maths (Time & Work)',
    q: 'A and B can do a piece of work in 12 days and 18 days respectively. They started together, but B left 3 days before the completion of work. In how many days was the entire work completed?'
  },
  {
    label: 'Maths (Algebra)',
    q: 'If x + 1/x = 3, then find the value of (x^6 + 1/x^6).'
  },
  {
    label: 'Reasoning (Syllogism)',
    q: 'Statements: Only a few doctors are engineers. All engineers are scientists. Conclusions: I. Some doctors are not engineers. II. All scientists being doctors is a possibility.'
  },
  {
    label: 'English (Grammar Error)',
    q: 'Spot the error: No sooner did the bell rang than the students ran out of their classrooms.'
  }
];

export default function AiSolverModal({ examName = "SSC CGL (Eduquity/New Vendor Pattern)" }) {
  const [questionText, setQuestionText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSolve = async (customQ) => {
    const textToAnalyze = customQ || questionText;
    if (!textToAnalyze.trim()) {
      setErrorMsg('Please enter or paste a question to analyze.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    try {
      const response = await solveAndClassifyQuestion(textToAnalyze, examName);
      setAnalysisResult(response);
    } catch (err) {
      setErrorMsg(err.message || 'Error occurred while contacting Gemini API.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(analysisResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/40 border border-indigo-900/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white">
              AI Doubt Solver & Pattern Identifier
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Paste any exam question. Gemini AI classifies its exact archetype, unlocks the 20-second shortcut, and flags Eduquity/New Vendor examiner traps.
            </p>
          </div>
        </div>

        {/* Sample Pills */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Try High-Yield Samples:
          </span>
          {SAMPLE_QUESTIONS.map((sq, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuestionText(sq.q);
                handleSolve(sq.q);
              }}
              className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-indigo-600/30 text-indigo-300 border border-slate-700 hover:border-indigo-500/40 transition active:scale-95"
            >
              {sq.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
          Paste Exam Question / Doubt:
        </label>
        
        <textarea
          rows={4}
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Paste or type any SSC/Banking question here (Maths, Reasoning, English, GK, Computer)..."
          className="w-full px-4 py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-sans leading-relaxed"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <span className="text-[11px] text-slate-400">
            Target Exam: <b className="text-indigo-400">{examName}</b>
          </span>

          <div className="flex items-center gap-2">
            {questionText && (
              <button
                onClick={() => setQuestionText('')}
                className="px-3 py-2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => handleSolve()}
              disabled={isLoading || !questionText.trim()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Deconstructing Question...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  Classify & Solve Shortcut
                </>
              )}
            </button>
          </div>
        </div>

        {errorMsg && (
          <div className="p-3 bg-rose-950/40 border border-rose-800 text-rose-300 rounded-xl text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* Output / Results Card */}
      {analysisResult && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 animate-in fade-in duration-200">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 font-bold text-sm text-indigo-300">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Full Modern Speed Blueprint & Resolution:</span>
            </div>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs flex items-center gap-1.5 transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Solution</span>
                </>
              )}
            </button>
          </div>

          <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line">
            {analysisResult}
          </div>

        </div>
      )}

    </div>
  );
}
