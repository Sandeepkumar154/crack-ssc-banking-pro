import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TopicDetailView from './components/TopicDetailView';
import AiSolverModal from './components/AiSolverModal';
import MockTestEngine from './components/MockTestEngine';
import DestTypingModule from './components/DestTypingModule';
import FormulaVault from './components/FormulaVault';
import AiTutorChat from './components/AiTutorChat';
import SettingsModal from './components/SettingsModal';
import ExamHub from './components/ExamHub';
import ShortcutsDeck from './components/ShortcutsDeck';
import ProgressDashboard from './components/ProgressDashboard';
import StudyPlan from './components/StudyPlan';
import ErrorBoundary from './components/ErrorBoundary';

import { EXAMS_CATALOG } from './data/examsData';
import { SSC_CGL_SYLLABUS } from './data/sscCglSyllabus';
import { BANKING_SYLLABUS } from './data/bankingSyllabus';

export default function App() {
  const [selectedExamId, setSelectedExamId] = useState(() => {
    return localStorage.getItem('ssc_selected_exam') || 'ssc_cgl';
  });

  // URL Hash-based routing to support browser back/forward and direct bookmarks
  const getTabFromHash = useCallback(() => {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    const validTabs = [
      'hub', 
      'dashboard', 
      'study-plan', 
      'syllabus', 
      'shortcuts', 
      'solver', 
      'mock', 
      'mistakes',
      'typing', 
      'vault', 
      'mentor'
    ];
    if (rawHash === 'mistake-vault') return 'mistakes';
    return validTabs.includes(rawHash) ? rawHash : 'hub';
  }, []);

  const [currentTab, setCurrentTab] = useState(getTabFromHash);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [mentorInitialPrompt, setMentorInitialPrompt] = useState('');

  // Synchronize hash changes (browser back/forward button clicks)
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentTab(getTabFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [getTabFromHash]);

  const handleSetTab = (tabId) => {
    setCurrentTab(tabId);
    window.location.hash = `#/${tabId}`;
  };

  // Persist completed topics in localStorage
  const [completedTopics, setCompletedTopics] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ssc_completed_topics') || '{}');
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('ssc_selected_exam', selectedExamId);
  }, [selectedExamId]);

  useEffect(() => {
    localStorage.setItem('ssc_completed_topics', JSON.stringify(completedTopics));
  }, [completedTopics]);

  const toggleCompleteTopic = (topicId) => {
    setCompletedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  // Find active exam catalog item
  const currentExam = useMemo(() => {
    return EXAMS_CATALOG.find(e => e.id === selectedExamId) || EXAMS_CATALOG[0];
  }, [selectedExamId]);

  // Resolve syllabus dataset based on chosen exam
  const currentSyllabus = useMemo(() => {
    if (selectedExamId === 'sbi_po_clerk' || selectedExamId === 'ibps_po_clerk' || selectedExamId === 'rrb_po_clerk' || selectedExamId === 'rbi_grade_b') {
      return BANKING_SYLLABUS;
    }
    
    // For SSC exams, filter SSC_CGL_SYLLABUS by allowed subjectIds
    const filtered = {};
    if (currentExam.subjectIds) {
      currentExam.subjectIds.forEach(subId => {
        if (SSC_CGL_SYLLABUS[subId]) {
          filtered[subId] = SSC_CGL_SYLLABUS[subId];
        }
      });
    }

    return Object.keys(filtered).length > 0 ? filtered : SSC_CGL_SYLLABUS;
  }, [selectedExamId, currentExam]);

  // Selected subject & topic states
  const availableSubjectKeys = useMemo(() => Object.keys(currentSyllabus), [currentSyllabus]);
  
  const [selectedSubjectId, setSelectedSubjectId] = useState(availableSubjectKeys[0] || 'quant');
  
  // Ensure selectedSubjectId is valid for current syllabus
  useEffect(() => {
    if (!currentSyllabus[selectedSubjectId] && availableSubjectKeys.length > 0) {
      setSelectedSubjectId(availableSubjectKeys[0]);
    }
  }, [currentSyllabus, selectedSubjectId, availableSubjectKeys]);

  const activeSubject = currentSyllabus[selectedSubjectId] || currentSyllabus[availableSubjectKeys[0]];
  
  const [selectedTopicId, setSelectedTopicId] = useState(() => {
    return activeSubject?.topics?.[0]?.id || '';
  });

  // Keep topic synced when subject changes
  useEffect(() => {
    if (activeSubject?.topics && activeSubject.topics.length > 0) {
      const topicExists = activeSubject.topics.some(t => t.id === selectedTopicId);
      if (!topicExists) {
        setSelectedTopicId(activeSubject.topics[0].id);
      }
    }
  }, [activeSubject, selectedTopicId]);

  const activeTopic = useMemo(() => {
    if (!activeSubject?.topics) return null;
    return activeSubject.topics.find(t => t.id === selectedTopicId) || activeSubject.topics[0];
  }, [activeSubject, selectedTopicId]);

  // Next / Previous topic navigation handlers
  const currentTopicIndex = useMemo(() => {
    if (!activeSubject?.topics) return -1;
    return activeSubject.topics.findIndex(t => t.id === selectedTopicId);
  }, [activeSubject, selectedTopicId]);

  const handleNextTopic = () => {
    if (!activeSubject?.topics) return;
    if (currentTopicIndex < activeSubject.topics.length - 1) {
      setSelectedTopicId(activeSubject.topics[currentTopicIndex + 1].id);
    }
  };

  const handlePrevTopic = () => {
    if (!activeSubject?.topics) return;
    if (currentTopicIndex > 0) {
      setSelectedTopicId(activeSubject.topics[currentTopicIndex - 1].id);
    }
  };

  const handleAskAiAboutTopic = (topicName) => {
    setMentorInitialPrompt(`Please break down the most critical speed shortcuts and common traps for: "${topicName}" in ${currentExam.shortName}.`);
    handleSetTab('mentor');
  };

  const handleStartPlanTopic = (plan) => {
    if (!plan) {
      handleSetTab('syllabus');
      return;
    }

    const subLower = (plan.subject || '').toLowerCase();
    const topicLower = (plan.topic || '').toLowerCase();

    // Check if it's a mock, typing, or speed test
    if (subLower.includes('mock') || topicLower.includes('mock') || subLower.includes('pyq') || topicLower.includes('official paper')) {
      handleSetTab('mock');
      return;
    }
    if (subLower.includes('typing') || topicLower.includes('typing') || topicLower.includes('dest')) {
      handleSetTab('typing');
      return;
    }

    // Determine target subject
    let targetSubId = 'quant';
    if (subLower.includes('quant')) targetSubId = 'quant';
    else if (subLower.includes('reason')) targetSubId = 'reasoning';
    else if (subLower.includes('eng')) targetSubId = 'english';
    else if (subLower.includes('gk') || subLower.includes('science') || subLower.includes('polity') || subLower.includes('history') || subLower.includes('geo')) targetSubId = 'gk';
    else if (subLower.includes('comp')) targetSubId = 'computer';

    if (currentSyllabus[targetSubId]) {
      setSelectedSubjectId(targetSubId);
      const topics = currentSyllabus[targetSubId].topics || [];
      const keywords = topicLower.split(/[\s,()&:/]+/).filter(w => w.length > 3);
      const match = topics.find(t => {
        const nameLower = t.name.toLowerCase();
        return keywords.some(kw => nameLower.includes(kw));
      });
      if (match) {
        setSelectedTopicId(match.id);
      } else if (topics.length > 0) {
        setSelectedTopicId(topics[0].id);
      }
    }
    handleSetTab('syllabus');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top Navigation */}
      <Navbar
        selectedExamId={selectedExamId}
        onSelectExam={(examId) => {
          setSelectedExamId(examId);
        }}
        currentTab={currentTab}
        setCurrentTab={handleSetTab}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* VIEW 0: ALL EXAMS HUB */}
        {currentTab === 'hub' && (
          <ExamHub
            selectedExamId={selectedExamId}
            onSelectExam={(examId) => setSelectedExamId(examId)}
            onStartStudying={() => handleSetTab('syllabus')}
          />
        )}

        {/* VIEW: PROGRESS DASHBOARD */}
        {currentTab === 'dashboard' && (
          <ProgressDashboard
            syllabusData={currentSyllabus}
            completedTopics={completedTopics}
            examName={currentExam.name}
            onNavigateTab={(tab, subjectId, topicId) => {
              if (subjectId && currentSyllabus[subjectId]) {
                setSelectedSubjectId(subjectId);
                if (topicId) {
                  setSelectedTopicId(topicId);
                }
              }
              handleSetTab(tab);
            }}
          />
        )}

        {/* VIEW: 90-DAY MASTER STUDY PLAN */}
        {currentTab === 'study-plan' && (
          <StudyPlan
            examName={currentExam.shortName}
            onStartTopic={handleStartPlanTopic}
          />
        )}

        {/* VIEW 1: Syllabus, Beginner Theory & Pro Shortcuts */}
        {currentTab === 'syllabus' && (
          <div className="flex-1 flex flex-col lg:flex-row w-full">
            <Sidebar
              syllabusData={currentSyllabus}
              selectedSubjectId={selectedSubjectId}
              onSelectSubject={setSelectedSubjectId}
              selectedTopicId={selectedTopicId}
              onSelectTopic={setSelectedTopicId}
              completedTopics={completedTopics}
              onToggleCompleteTopic={toggleCompleteTopic}
            />
            <ErrorBoundary onReset={() => {
              const firstSubKey = availableSubjectKeys[0] || 'quant';
              setSelectedSubjectId(firstSubKey);
              if (currentSyllabus[firstSubKey]?.topics?.[0]) {
                setSelectedTopicId(currentSyllabus[firstSubKey].topics[0].id);
              }
            }}>
              <TopicDetailView
                topic={activeTopic}
                subjectName={activeSubject?.subjectName || 'Subject'}
                examName={currentExam.shortName}
                onAskAiAboutTopic={handleAskAiAboutTopic}
                onNextTopic={currentTopicIndex < (activeSubject?.topics?.length || 0) - 1 ? handleNextTopic : null}
                onPrevTopic={currentTopicIndex > 0 ? handlePrevTopic : null}
                hasNextTopic={currentTopicIndex < (activeSubject?.topics?.length || 0) - 1}
                hasPrevTopic={currentTopicIndex > 0}
                isCompleted={Boolean(completedTopics[activeTopic?.id])}
                onToggleComplete={() => activeTopic && toggleCompleteTopic(activeTopic.id)}
              />
            </ErrorBoundary>
          </div>
        )}

        {/* VIEW: Master Speed Shortcuts Deck */}
        {currentTab === 'shortcuts' && (
          <ShortcutsDeck />
        )}

        {/* VIEW 2: AI Doubt Solver & Pattern Classifier */}
        {currentTab === 'solver' && (
          <AiSolverModal
            examName={currentExam.name}
          />
        )}

        {/* VIEW 3: CBT Mock Test & Official PYQ Simulator / Mistake Vault */}
        {(currentTab === 'mock' || currentTab === 'mistakes') && (
          <MockTestEngine
            examName={currentExam.shortName}
            initialTab={currentTab === 'mistakes' ? 'mistakes' : 'test'}
          />
        )}

        {/* VIEW 4: DEST Typing Simulator */}
        {currentTab === 'typing' && (
          <DestTypingModule />
        )}

        {/* VIEW 5: Formula Vault & Cheat Sheets */}
        {currentTab === 'vault' && (
          <FormulaVault />
        )}

        {/* VIEW 6: AI Mentor Chat ("Inspector Sahab") */}
        {currentTab === 'mentor' && (
          <AiTutorChat
            examName={currentExam.name}
            initialPrompt={mentorInitialPrompt}
          />
        )}

      </main>

      {/* Settings Modal (API Key, Model Selector) */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onApiKeySaved={() => {
          // Re-render trigger
        }}
      />

    </div>
  );
}
