import React, { useMemo } from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  Flame, 
  Target, 
  AlertTriangle, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  Layers, 
  Calendar,
  Sparkles,
  ArrowRight,
  Bookmark
} from 'lucide-react';
import { SUBJECT_METADATA } from '../data/examsData';

export default function ProgressDashboard({ 
  syllabusData, 
  completedTopics = {}, 
  examName = "SSC CGL", 
  onNavigateTab 
}) {
  // Retrieve mock history
  const mockHistory = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('ssc_mock_history') || '[]');
    } catch {
      return [];
    }
  }, []);

  // Retrieve bookmarks
  const bookmarks = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('ssc_bookmarks') || '{}');
    } catch {
      return {};
    }
  }, []);

  // Calculate subject-wise completion statistics
  const subjectStats = useMemo(() => {
    const stats = [];
    let totalAllTopics = 0;
    let totalCompletedAll = 0;

    Object.keys(syllabusData).forEach((subKey) => {
      const sub = syllabusData[subKey];
      const topics = sub.topics || [];
      const totalInSub = topics.length;
      totalAllTopics += totalInSub;

      let completedInSub = 0;
      topics.forEach(t => {
        if (completedTopics[t.id]) completedInSub++;
      });
      totalCompletedAll += completedInSub;

      const meta = SUBJECT_METADATA[subKey] || { name: sub.subjectName };
      const pct = totalInSub > 0 ? Math.round((completedInSub / totalInSub) * 100) : 0;

      stats.push({
        id: subKey,
        name: meta.name.split('(')[0],
        total: totalInSub,
        completed: completedInSub,
        percentage: pct
      });
    });

    const overallPct = totalAllTopics > 0 ? Math.round((totalCompletedAll / totalAllTopics) * 100) : 0;

    return {
      stats,
      totalAllTopics,
      totalCompletedAll,
      overallPct
    };
  }, [syllabusData, completedTopics]);

  // Mock test statistics
  const mockStats = useMemo(() => {
    if (mockHistory.length === 0) {
      return { totalTaken: 0, avgScore: 0, avgAccuracy: 0, latestTest: null };
    }
    const totalScore = mockHistory.reduce((sum, h) => sum + (h.rawScore || 0), 0);
    const totalAccuracy = mockHistory.reduce((sum, h) => sum + (h.accuracy || 0), 0);

    return {
      totalTaken: mockHistory.length,
      avgScore: Math.round(totalScore / mockHistory.length),
      avgAccuracy: Math.round(totalAccuracy / mockHistory.length),
      latestTest: mockHistory[0]
    };
  }, [mockHistory]);

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      
      {/* Hero Performance Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950/70 border border-indigo-900/40 p-6 sm:p-8 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Targeting AIR-1 Rank Mastery for {examName}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Personal Progress & <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">Readiness Dashboard</span>
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            Real-time tracking of your syllabus milestones, CBT mock test scores, time management benchmarks, and auto-detected weak areas.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                {subjectStats.overallPct}%
              </div>
              <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Syllabus Mastered</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-indigo-400">
                {mockStats.totalTaken}
              </div>
              <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Mocks & PYQs Taken</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-amber-400">
                {mockStats.avgAccuracy}%
              </div>
              <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Average Accuracy</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="text-xl sm:text-2xl font-black text-purple-400">
                {Object.keys(bookmarks).length}
              </div>
              <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Saved Bookmarks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subject-Wise Progress Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>Subject-wise Syllabus Completion</span>
          </h2>
          <span className="text-xs text-slate-400 font-semibold">
            {subjectStats.totalCompletedAll} of {subjectStats.totalAllTopics} modules completed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectStats.stats.map((sub) => (
            <div
              key={sub.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-indigo-500/40 transition"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-100">{sub.name}</span>
                <span className="text-xs font-bold text-indigo-400">{sub.percentage}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${sub.percentage}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>{sub.completed} of {sub.total} topics</span>
                <button
                  onClick={() => onNavigateTab('syllabus', sub.id)}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                >
                  Continue <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations & Weak Area Detection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Next Priority Topics */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              High-Yield Topics Recommended for Today
            </h3>
          </div>

          <div className="space-y-2.5">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-200">Time & Work (Add-Back Leaver Rule)</div>
                <div className="text-[10px] text-amber-400">Quantitative Aptitude • ★★★★★ High Yield</div>
              </div>
              <button
                onClick={() => onNavigateTab('syllabus', 'quant', 'time_and_work')}
                className="px-3 py-1 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-lg text-xs font-semibold border border-indigo-500/30"
              >
                Study
              </button>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-200">Syllogism (&quot;Only a few&quot; Dual Meaning Rule)</div>
                <div className="text-[10px] text-amber-400">Reasoning • 3 Questions Guaranteed</div>
              </div>
              <button
                onClick={() => onNavigateTab('syllabus', 'reasoning', 'syllogism')}
                className="px-3 py-1 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-lg text-xs font-semibold border border-indigo-500/30"
              >
                Study
              </button>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-200">Indian Polity (12 Schedules & Fundamental Rights)</div>
                <div className="text-[10px] text-emerald-400">General Awareness • Highest ROI</div>
              </div>
              <button
                onClick={() => onNavigateTab('syllabus', 'gk', 'indian_polity')}
                className="px-3 py-1 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-lg text-xs font-semibold border border-indigo-500/30"
              >
                Study
              </button>
            </div>
          </div>
        </div>

        {/* Mock Exam History Summary */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                Recent CBT Mock Test History
              </h3>
            </div>
            <button
              onClick={() => onNavigateTab('mock')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Take Mock Test →
            </button>
          </div>

          {mockHistory.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 bg-slate-950 rounded-xl border border-slate-800">
              No mock tests attempted yet. Take your first 100-question mock test to generate performance analytics.
            </div>
          ) : (
            <div className="space-y-2.5">
              {mockHistory.slice(0, 3).map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <div className="text-xs font-semibold text-slate-200 truncate">{item.title}</div>
                    <div className="text-[10px] text-slate-400">{item.date} • {item.accuracy}% Accuracy</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-bold text-indigo-400">{item.rawScore.toFixed(1)} / {item.maxMarks}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
