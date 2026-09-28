import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  Sparkles, 
  User, 
  Bot, 
  RefreshCw, 
  Lightbulb, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { askAiTutor } from '../services/geminiService';

const SUGGESTED_PROMPTS = [
  "Create a realistic 60-day daily revision timetable for SSC CGL Tier 1",
  "Which 3 types of questions should I strictly skip in the first 40 minutes of Quant?",
  "Give me a Hindi mnemonic to memorize the 12 Schedules of Indian Constitution",
  "What is the exact difference between SDF (Standing Deposit Facility) and Reverse Repo Rate in Banking?",
  "How can I increase my DEST typing speed from 20 WPM to 32 WPM in 14 days?"
];

export default function AiTutorChat({ examName = "SSC CGL", initialPrompt = "" }) {
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('ssc_mentor_chat');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return [
      {
        sender: 'ai',
        text: `Namaste Aspirant! I am **Inspector Sahab**, your AIR-1 exam mentor. 🇮🇳\n\nAsk me anything: strategic study plans, topic shortcuts, whether to skip a question, or memorable mnemonics for static GK and vocabulary. What are we tackling today?`
      }
    ];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    try {
      localStorage.setItem('ssc_mentor_chat', JSON.stringify(messages));
    } catch {}
  }, [messages]);

  const handleClearChat = () => {
    const initial = [
      {
        sender: 'ai',
        text: `Namaste Aspirant! I am **Inspector Sahab**, your AIR-1 exam mentor. 🇮🇳\n\nChat history cleared. What topic or exam query are we working on now?`
      }
    ];
    setMessages(initial);
    try {
      localStorage.setItem('ssc_mentor_chat', JSON.stringify(initial));
    } catch {}
  };

  useEffect(() => {
    if (initialPrompt) {
      sendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const sendMessage = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await askAiTutor(newMessages, '', examName);
      setMessages([...newMessages, { sender: 'ai', text: response }]);
    } catch (err) {
      setMessages([
        ...newMessages, 
        { 
          sender: 'ai', 
          text: `⚠️ **Error:** ${err.message || 'Failed to contact Gemini API. Please check your API key in Settings.'}` 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      
      {/* Top Mentor Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 mb-4 shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-indigo-600 p-0.5 shadow-lg shadow-indigo-600/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Bot className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-white">Inspector Sahab AI</h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                AIR-1 Mentor
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Targeting: <b className="text-slate-200">{examName}</b> | Eduquity & Banking Exam Strategy Coach
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-amber-400 bg-amber-950/30 border border-amber-900/40 px-3 py-1.5 rounded-xl font-medium">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>No-Fluff Shortcuts & Timetables</span>
          </div>

          {messages.length > 1 && (
            <button
              onClick={handleClearChat}
              className="px-2.5 py-1.5 text-xs text-slate-400 hover:text-rose-300 hover:bg-slate-800/80 rounded-xl transition flex items-center gap-1 border border-slate-800"
              title="Clear chat history"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Suggested Prompts Pills */}
      <div className="flex gap-2 overflow-x-auto pb-3 shrink-0 no-scrollbar">
        {SUGGESTED_PROMPTS.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => sendMessage(prompt)}
            className="text-xs px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl whitespace-nowrap transition shrink-0 flex items-center gap-1.5"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span className="truncate max-w-xs">{prompt}</span>
          </button>
        ))}
      </div>

      {/* Messages Scroll Container */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4">
        {messages.map((msg, index) => {
          const isAi = msg.sender === 'ai';
          return (
            <div
              key={index}
              className={`flex gap-3 text-xs sm:text-sm ${isAi ? 'justify-start' : 'justify-end'}`}
            >
              {isAi && (
                <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl whitespace-pre-line leading-relaxed shadow-sm ${
                  isAi 
                    ? 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-sm' 
                    : 'bg-indigo-600 text-white rounded-tr-sm'
                }`}
              >
                {msg.text}
              </div>

              {!isAi && (
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-3 text-xs sm:text-sm items-center text-slate-400">
            <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <RefreshCw className="w-4 h-4 animate-spin" />
            </div>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 text-xs">
              Inspector Sahab is analyzing and formulating your response...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="shrink-0 bg-slate-900 border border-slate-800 rounded-2xl p-2.5 flex items-center gap-2 shadow-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
          placeholder="Ask for revision plan, difficult concept shortcut, or exam advice..."
          className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
        />
        <button
          onClick={() => sendMessage()}
          disabled={!input.trim() || isLoading}
          className="p-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 disabled:opacity-50 text-white rounded-xl shadow-md transition"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
