import React from 'react';

export default function LandingTerminal() {
  return (
    <div className="bg-black text-green-500 font-mono p-6 min-h-screen border-4 border-green-600">
      <header className="border-b border-green-700 pb-4 mb-6">
        <h1 className="text-2xl font-bold tracking-widest">[ GEMS N' LOANS ONCHAIN LUXURY TERMINAL ]</h1>
        <p className="text-xs text-green-400">HYPERLIQUID EVM // 5-LAYER SECURE PROTOCOL</p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-green-800 p-4 bg-green-950/20">
          <h2 className="text-lg mb-2">&gt;&gt; CLOSED-LOOP FLYWHEEL</h2>
          <p className="text-sm font-semibold text-green-300">"DIGITAL → TOKENIZE → VELOCITY → YIELD → NFT → REPEAT"</p>
        </div>
        <div className="border border-green-800 p-4 bg-green-950/20">
          <h2 className="text-lg mb-2">&gt;&gt; SYSTEM GATEWAY</h2>
          <button className="bg-green-700 text-black px-4 py-2 font-bold hover:bg-green-500 transition-colors">
            CONNECT SECURE TERMINAL
          </button>
        </div>
      </main>
    </div>
  );
}
