import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Brain, 
  BookOpen, 
  Globe, 
  Cpu, 
  BarChart3, 
  Keyboard, 
  Activity, 
  Search, 
  ChevronRight, 
  CheckCircle,
  Flame,
  Coins
} from 'lucide-react';
import { SUBJECT_METADATA } from '../data/examsData';

// Map icon string names to Lucide icons
const ICON_MAP = {
  Calculator,
  Brain,
  BookOpen,
  Globe,
  Cpu,
  BarChart3,
  Keyboard,
  Activity,
  Flame,
  Coins
};

function Sidebar({ 
  syllabusData, 
  selectedSubjectId, 
  onSelectSubject, 
  selectedTopicId, 
  onSelectTopic,
  completedTopics = {},
  onToggleCompleteTopic
}) {
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all subjects present in current syllabusData
  const subjectList = useMemo(() => {
    return Object.keys(syllabusData || {}).map((subKey) => {
      const subData = syllabusData[subKey] || {};
      const meta = SUBJECT_METADATA[subKey] || {
        id: subKey,
        name: subData.subjectName || subKey,
        icon: 'BookOpen',
        weightage: 'High'
      };
      return {
        ...meta,
        name: meta.name || subData.subjectName || subKey,
        data: subData
      };
    });
  }, [syllabusData]);

  // Active subject data
  const activeSubject = syllabusData?.[selectedSubjectId] || subjectList[0]?.data;

  // Filtered topics based on search
  const filteredTopics = useMemo(() => {
    if (!activeSubject?.topics) return [];
    if (!searchQuery.trim()) return activeSubject.topics;

    const q = searchQuery.toLowerCase();
    return (activeSubject.topics || []).filter(t => 
      (t.name || '').toLowerCase().includes(q) ||
      t.types?.some(type => 
        (type?.title || '').toLowerCase().includes(q) || 
        (type?.identificationBlueprint || '').toLowerCase().includes(q) ||
        (type?.proShortcut || '').toLowerCase().includes(q)
      )
    );
  }, [activeSubject, searchQuery]);

  return (
    <aside className="w-full lg:w-80 shrink-0 bg-slate-900/60 border-r border-slate-800 flex flex-col max-h-64 sm:max-h-80 lg:max-h-none lg:h-[calc(100vh-4rem)] sticky top-16 z-20">
      
      {/* Subject Selector Bar */}
      <div className="p-3.5 border-b border-slate-800">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
          Exam Subjects & Modules ({subjectList.length})
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-1.5 max-h-48 lg:max-h-56 overflow-y-auto pr-1">
          {subjectList.map((sub) => {
            const Icon = ICON_MAP[sub.icon] || BookOpen;
            const isSelected = selectedSubjectId === sub.id;
            const topicCount = sub.data?.topics?.length || 0;
            return (
              <button
                key={sub.id}
                onClick={() => {
                  onSelectSubject(sub.id);
                  if (sub.data?.topics?.[0]) {
                    onSelectTopic(sub.data.topics[0].id);
                  }
                }}
                className={`p-2 rounded-xl text-left transition flex items-center gap-2 border ${
                  isSelected 
                    ? 'bg-indigo-600/20 border-indigo-500/50 text-white shadow-sm' 
                    : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className={`p-1.5 rounded-lg shrink-0 ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-700/60 text-indigo-400'
                }`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold truncate leading-tight">
                    {(sub.name || sub.id || 'Subject').split('(')[0]}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {topicCount} Topics
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Topic Search Box */}
      <div className="p-3 border-b border-slate-800 bg-slate-900/40">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={`Search ${activeSubject?.subjectName || 'topics'}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950/80 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Topics List with Completion Checkbox & Type Count */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 px-1 pb-1">
          <span>Topics in {(activeSubject?.subjectName || 'Subject').split('(')[0]}</span>
          <span>{filteredTopics.length} available</span>
        </div>

        {filteredTopics.length === 0 ? (
          <div className="p-4 text-center text-xs text-slate-500">
            No topics found matching &quot;{searchQuery}&quot;
          </div>
        ) : (
          filteredTopics.map((topic) => {
            const isSelected = selectedTopicId === topic.id;
            const isCompleted = completedTopics[topic.id];
            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className={`group p-2.5 rounded-xl border text-xs cursor-pointer transition flex items-center justify-between gap-2 ${
                  isSelected 
                    ? 'bg-indigo-950/40 border-indigo-500/60 text-white shadow-md' 
                    : 'bg-slate-800/30 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleCompleteTopic(topic.id);
                    }}
                    title={isCompleted ? "Mark incomplete" : "Mark completed"}
                    className={`shrink-0 transition ${
                      isCompleted ? 'text-emerald-400' : 'text-slate-600 hover:text-slate-400'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                  </button>

                  <div className="min-w-0">
                    <div className={`font-semibold truncate ${
                      isSelected ? 'text-indigo-300' : 'text-slate-200'
                    } ${isCompleted ? 'line-through opacity-70' : ''}`}>
                      {topic.name}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                      <span className="px-1.5 py-0.2 rounded bg-slate-800 border border-slate-700/80 text-amber-300 font-medium">
                        {topic.types?.length || 1} Types
                      </span>
                      {topic.highYieldRating >= 5 && (
                        <span className="text-amber-400 flex items-center gap-0.5">
                          ★ High Yield
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition ${
                  isSelected ? 'text-indigo-400 translate-x-0.5' : 'text-slate-500 group-hover:text-slate-300'
                }`} />
              </div>
            );
          })
        )}
      </div>

      {/* Footer subject summary */}
      {activeSubject && (
        <div className="p-3 bg-slate-950/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>{activeSubject.topics?.reduce((sum, t) => sum + (t.types?.length || 0), 0) || 0} Pattern Types</span>
          <span className="text-indigo-400 font-medium">{activeSubject.topics?.length || 0} Modules</span>
        </div>
      )}

    </aside>
  );
}

export default React.memo(Sidebar);
