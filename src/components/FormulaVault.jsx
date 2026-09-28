import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  BookOpen, 
  Calculator, 
  Cpu, 
  Copy, 
  Check, 
  Globe, 
  Coins, 
  Sparkles 
} from 'lucide-react';
import { FORMULA_VAULT } from '../data/formulaVaultData';

export default function FormulaVault() {
  const [activeTab, setActiveTab] = useState('maths');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 1500);
  };

  const tabs = [
    { id: 'maths', label: 'Maths Formulas & Identities', icon: Calculator },
    { id: 'grammar', label: '120 Golden Grammar Rules', icon: BookOpen },
    { id: 'computer', label: 'Computer Cheat Sheet', icon: Cpu },
    { id: 'staticGk', label: 'Static GK & Constitution Vault', icon: Globe },
    { id: 'bankingAwareness', label: 'Banking & Financial Awareness', icon: Coins }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white">
                Formula & Static GK Vault
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                High-yield revision repository: Mathematical Identities, 120 Invariant Grammar Rules, Network Ports, Constitutional Articles, and RBI Banking Regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Buttons & Search */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition ${
                    isActive 
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20' 
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search in active vault..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Maths Section */}
      {activeTab === 'maths' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FORMULA_VAULT.maths
            .filter(cat => 
              cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cat.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cat.formulas.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
            )
            .map((cat, cIdx) => (
              <div key={cIdx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {cat.category}
                  </span>
                  <h3 className="text-sm font-bold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-2 pt-1">
                  {cat.formulas
                    .filter(f => !searchQuery || f.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((form, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 text-xs font-mono text-slate-200 flex items-center justify-between group hover:border-indigo-500/40 transition"
                      >
                        <span className="break-all">{form}</span>
                        <button
                          onClick={() => handleCopy(form)}
                          className="opacity-0 group-hover:opacity-100 transition p-1 hover:text-indigo-400 ml-2 shrink-0"
                          title="Copy formula"
                        >
                          {copiedText === form ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                          )}
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Grammar Section */}
      {activeTab === 'grammar' && (
        <div className="space-y-4">
          {FORMULA_VAULT.grammarRules
            .filter(r => 
              r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              r.example.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((r) => (
              <div key={r.ruleNumber} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-bold shrink-0">
                    #{r.ruleNumber}
                  </span>
                  <h3 className="text-sm font-bold text-white">{r.title}</h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pl-8">
                  {r.description}
                </p>

                <div className="mt-2 ml-8 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300 flex items-center justify-between">
                  <div>
                    <b className="text-emerald-400">Exemplar:</b> {r.example}
                  </div>
                  <button
                    onClick={() => handleCopy(r.example)}
                    className="p-1 hover:text-indigo-400 text-slate-500 transition"
                    title="Copy example"
                  >
                    {copiedText === r.example ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Computer Section */}
      {activeTab === 'computer' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FORMULA_VAULT.computer
            .filter(sec => 
              sec.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
              sec.items.some(item => 
                item.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.value.toLowerCase().includes(searchQuery.toLowerCase())
              )
            )
            .map((sec, sIdx) => (
              <div key={sIdx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-indigo-300 border-b border-slate-800 pb-2">
                  {sec.category}
                </h3>
                <div className="space-y-2">
                  {sec.items
                    .filter(item => 
                      !searchQuery ||
                      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      item.value.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item, iIdx) => (
                      <div key={iIdx} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs group hover:border-slate-700 transition">
                        <span className="font-mono font-bold text-amber-300 mr-2 shrink-0">{item.label}</span>
                        <div className="flex items-center gap-2 text-right">
                          <span className="text-slate-300">{item.value}</span>
                          <button
                            onClick={() => handleCopy(`${item.label}: ${item.value}`)}
                            className="opacity-0 group-hover:opacity-100 transition p-1 hover:text-indigo-400 text-slate-500 shrink-0"
                            title="Copy item"
                          >
                            {copiedText === `${item.label}: ${item.value}` ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Static GK Section */}
      {activeTab === 'staticGk' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FORMULA_VAULT.staticGk
            .filter(sec => 
              sec.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
              sec.items.some(item => 
                item.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.value.toLowerCase().includes(searchQuery.toLowerCase())
              )
            )
            .map((sec, sIdx) => (
              <div key={sIdx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-emerald-400 border-b border-slate-800 pb-2">
                  {sec.category}
                </h3>
                <div className="space-y-2">
                  {sec.items
                    .filter(item => 
                      !searchQuery ||
                      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      item.value.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item, iIdx) => (
                      <div key={iIdx} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs group hover:border-slate-700 transition">
                        <span className="font-semibold text-indigo-300 mr-2 shrink-0">{item.label}</span>
                        <div className="flex items-center gap-2 text-right">
                          <span className="text-slate-300">{item.value}</span>
                          <button
                            onClick={() => handleCopy(`${item.label}: ${item.value}`)}
                            className="opacity-0 group-hover:opacity-100 transition p-1 hover:text-indigo-400 text-slate-500 shrink-0"
                            title="Copy item"
                          >
                            {copiedText === `${item.label}: ${item.value}` ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Banking Awareness Section */}
      {activeTab === 'bankingAwareness' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FORMULA_VAULT.bankingAwareness
            .filter(sec => 
              sec.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
              sec.items.some(item => 
                item.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.value.toLowerCase().includes(searchQuery.toLowerCase())
              )
            )
            .map((sec, sIdx) => (
              <div key={sIdx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-amber-400 border-b border-slate-800 pb-2">
                  {sec.category}
                </h3>
                <div className="space-y-2">
                  {sec.items
                    .filter(item => 
                      !searchQuery ||
                      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      item.value.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item, iIdx) => (
                      <div key={iIdx} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs group hover:border-slate-700 transition">
                        <span className="font-semibold text-amber-300 mr-2 shrink-0">{item.label}</span>
                        <div className="flex items-center gap-2 text-right">
                          <span className="text-slate-300">{item.value}</span>
                          <button
                            onClick={() => handleCopy(`${item.label}: ${item.value}`)}
                            className="opacity-0 group-hover:opacity-100 transition p-1 hover:text-indigo-400 text-slate-500 shrink-0"
                            title="Copy item"
                          >
                            {copiedText === `${item.label}: ${item.value}` ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}

    </div>
  );
}
