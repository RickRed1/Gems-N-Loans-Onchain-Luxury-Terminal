import React, { useState } from 'react';

export default function LandingTerminal() {
  const [zkpVerified, setZkpVerified] = useState(false);
  const [activeTab, setActiveTab] = useState('terminal');
  const [logs, setLogs] = useState([
    '[INIT] Hyperliquid EVM connection established.',
    '[SECURITY] 5-layer protocol safeguards armed.',
    '[READY] Awaiting ZKP identity verification...'
  ]);

  const handleZkpVerify = () => {
    setZkpVerified(true);
    setLogs(prev => [
      ...prev,
      '[ZKP] Proof generated successfully via Circom circuit.',
      '[ACCESS] ERC-721 Financial Instrument license unlocked.'
    ]);
  };

  return (
    <div className="bg-black text-green-500 font-mono p-6 min-h-screen border-4 border-green-600 selection:bg-green-700 selection:text-black">
      {/* Header */}
      <header className="border-b border-green-700 pb-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-widest text-green-400">
            [ GEMS N' LOANS ONCHAIN LUXURY TERMINAL ]
          </h1>
          <p className="text-xs text-green-600">HYPERLIQUID EVM // SECURE CLOSED-LOOP PROTOCOL</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <span className="px-3 py-1 border border-green-700 text-xs bg-green-950/40">
            STATUS: {zkpVerified ? 'SECURE / GATED' : 'PENDING ZKP'}
          </span>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-6 border-b border-green-800 pb-2">
        <button 
          onClick={() => setActiveTab('terminal')}
          className={px-4 py-1 text-sm font-bold }
        >
          // 01. TERMINAL_UI
        </button>
        <button 
          onClick={() => setActiveTab('vaults')}
          className={px-4 py-1 text-sm font-bold }
        >
          // 02. ORACLE_VAULTS
        </button>
      </div>

      {/* Main Content View */}
      {activeTab === 'terminal' ? (
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Thesis & Flywheel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="border border-green-800 p-4 bg-green-950/20">
              <h2 className="text-sm font-bold border-b border-green-800 pb-2 mb-3 text-green-400">
                &gt;&gt; THE CLOSED-LOOP FLYWHEEL
              </h2>
              <p className="text-xs leading-relaxed text-green-300 font-semibold">
                "DIGITAL → TOKENIZE → VELOCITY → YIELD → NFT → REPEAT"
              </p>
              <p className="text-[10px] text-green-600 mt-2">
                Every path within the terminal returns to ETHYS, ensuring sustained protocol velocity across loans, staking, and auctions.
              </p>
            </div>

            <div className="border border-green-800 p-4 bg-green-950/20">
              <h2 className="text-sm font-bold border-b border-green-800 pb-2 mb-3 text-green-400">
                &gt;&gt; ZKP IDENTITY GATE
              </h2>
              <p className="text-xs text-green-400 mb-4">
                Verify zero-knowledge credentials to unlock institutional or standard tier lending rights.
              </p>
              <button 
                onClick={handleZkpVerify}
                disabled={zkpVerified}
                className={w-full py-2 text-xs font-bold transition-colors }
              >
                {zkpVerified ? '[ ZKP IDENTITY VERIFIED ]' : 'EXECUTE ZKP PROOF VERIFICATION'}
              </button>
            </div>
          </div>

          {/* Right Column: Terminal Logs & Actions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="border border-green-800 p-4 bg-green-950/10 flex flex-col h-[320px]">
              <h2 className="text-sm font-bold border-b border-green-800 pb-2 mb-3 text-green-400">
                &gt;&gt; LIVE TERMINAL OUTPUT LOGS
              </h2>
              <div className="flex-1 overflow-y-auto font-mono text-xs space-y-2 bg-black p-3 border border-green-900">
                {logs.map((log, index) => (
                  <div key={index} className="text-green-400">&gt; {log}</div>
                ))}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="border border-green-800 p-6 bg-green-950/10">
          <h2 className="text-lg font-bold mb-4 text-green-400">&gt;&gt; ORACLE-BACKED LENDING VAULTS</h2>
          <p className="text-xs text-green-400 mb-6">
            Multi-tier liquidity protocol powered by Chainlink TWAP oracles and autonomous loan-to-value (LTV) limits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-green-800 p-4 bg-black">
              <h3 className="text-sm font-bold text-green-300">STANDARD TIER</h3>
              <p className="text-[11px] text-green-600 mt-1">License: 0.5 ETH</p>
              <p className="text-xs text-green-400 mt-3">Max Borrow: 50 ETH</p>
            </div>
            <div className="border border-green-800 p-4 bg-black">
              <h3 className="text-sm font-bold text-green-300">PRO TIER</h3>
              <p className="text-[11px] text-green-600 mt-1">License: 2.0 ETH</p>
              <p className="text-xs text-green-400 mt-3">Max Borrow: 250 ETH</p>
            </div>
            <div className="border border-green-800 p-4 bg-black">
              <h3 className="text-sm font-bold text-green-300">INSTITUTIONAL TIER</h3>
              <p className="text-[11px] text-green-600 mt-1">License: 10.0 ETH</p>
              <p className="text-xs text-green-400 mt-3">Max Borrow: 500+ ETH</p>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
