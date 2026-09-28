import React, { useState, useEffect } from 'react';
import { Key, CheckCircle, AlertTriangle, ExternalLink, X, RefreshCw } from 'lucide-react';
import { getStoredApiKey, setStoredApiKey, getStoredModel, setStoredModel, testApiKey } from '../services/geminiService';

export default function SettingsModal({ isOpen, onClose, onApiKeySaved }) {
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('gemini-3.8-flash');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  useEffect(() => {
    if (isOpen) {
      setApiKey(getStoredApiKey());
      const stored = getStoredModel();
      setModel(stored === 'gemini-2.5-flash' ? 'gemini-3.8-flash' : stored);
      setStatus({ state: 'idle', message: '' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTestAndSave = async () => {
    if (!apiKey.trim()) {
      setStatus({ state: 'error', message: 'Please enter a valid Gemini API Key' });
      return;
    }

    setStatus({ state: 'testing', message: 'Testing API key with Google Gemini...' });
    try {
      await testApiKey(apiKey, model);
      setStoredApiKey(apiKey);
      setStoredModel(model);
      setStatus({ state: 'success', message: 'Key validated successfully! AI Copilot is fully active.' });
      if (onApiKeySaved) onApiKeySaved();
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Validation failed. Check key & connection.' });
    }
  };

  const handleClear = () => {
    setStoredApiKey('');
    setApiKey('');
    setStatus({ state: 'idle', message: 'API key cleared.' });
    if (onApiKeySaved) onApiKeySaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Gemini AI Configuration</h2>
              <p className="text-xs text-slate-400">Power up AI Question Solver, Tutor & Type Generator</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="mt-5 space-y-4">
          
          {/* Free Tier Reassurance Banner */}
          <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 leading-relaxed">
            <span className="font-bold text-white block mb-0.5">📚 100% Free Preparation:</span>
            All 12 exam syllabi, speed shortcuts, foundational theory, formula vault, and full CBT mock tests work completely free without any API key. Entering a key below is strictly optional — it unlocks unlimited AI-generated custom drills and real-time doubt solving with Inspector Sahab.
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Google Gemini API Key (Optional)
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Gemini Model
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            >
              <option value="gemini-2.0-flash">Gemini 2.0 Flash (Recommended - Highest Speed & No Congestion)</option>
              <option value="gemini-1.5-flash">Gemini 1.5 Flash (Ultra Stable)</option>
              <option value="gemini-3.8-flash">Gemini 3.8 Flash</option>
              <option value="gemini-1.5-pro">Gemini 1.5 Pro (Deep Reasoning)</option>
            </select>
          </div>

          {/* Key status banner */}
          {status.message && (
            <div className={`p-3 rounded-xl text-xs flex items-center gap-2 border ${
              status.state === 'success' ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300' :
              status.state === 'error' ? 'bg-rose-950/60 border-rose-500/40 text-rose-300' :
              'bg-blue-950/60 border-blue-500/40 text-blue-300'
            }`}>
              {status.state === 'success' && <CheckCircle className="w-4 h-4 shrink-0" />}
              {status.state === 'error' && <AlertTriangle className="w-4 h-4 shrink-0" />}
              {status.state === 'testing' && <RefreshCw className="w-4 h-4 shrink-0 animate-spin" />}
              <span>{status.message}</span>
            </div>
          )}

          {/* Guide link */}
          <div className="p-3.5 bg-indigo-950/30 border border-indigo-800/40 rounded-xl text-xs text-slate-300 space-y-1.5">
            <div className="flex items-center justify-between font-semibold text-indigo-300">
              <span>How to get a Free Gemini API Key?</span>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 underline"
              >
                Get Key at Google AI Studio <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-slate-400 leading-relaxed">
              1. Sign in to Google AI Studio with your Google account.<br/>
              2. Click <b>"Create API Key"</b> (completely free with generous tier limits).<br/>
              3. Copy and paste it above. It is stored securely in your browser&apos;s local storage.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={handleClear}
            className="text-xs text-rose-400 hover:text-rose-300 underline"
          >
            Clear Stored Key
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800 rounded-xl transition"
            >
              Cancel
            </button>
            <button
              onClick={handleTestAndSave}
              disabled={status.state === 'testing'}
              className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 disabled:opacity-50 rounded-xl shadow-lg shadow-indigo-600/20 transition flex items-center gap-1.5"
            >
              {status.state === 'testing' ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Validating...
                </>
              ) : (
                'Save & Verify Key'
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
