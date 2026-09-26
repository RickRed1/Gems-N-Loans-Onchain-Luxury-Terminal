import React, { useState } from 'react';

export default function CourtyardCollateralModule({ userTier }) {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [loanTerm, setLoanTerm] = useState('30');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [lockedAssets, setLockedAssets] = useState([]);

  // Mocked user portfolio of Courtyard.io Pokémon/TCG NFTs
  const availableCourtyardAssets = [
    { id: 'CY-1999-CHARIZARD', name: '1999 Pokémon Base Set Holo Charizard (PSA 9)', floorPrice: '15.0 ETH', maxBorrow: '11.25 ETH' },
    { id: 'CY-2000-PIKACHU', name: '2000 Pokémon 1st Ed Illustrator Pikachu (BGS 9.5)', floorPrice: '8.5 ETH', maxBorrow: '6.37 ETH' },
    { id: 'CY-2002-BLUE-EYES', name: '2002 Yu-Gi-Oh! Blue-Eyes White Dragon (PSA 10)', floorPrice: '12.0 ETH', maxBorrow: '9.00 ETH' }
  ];

  const handleLockCollateral = () => {
    if (!selectedAsset || !borrowAmount) return;
    
    const newPosition = {
      asset: selectedAsset.name,
      borrowed: borrowAmount,
      term: loanTerm,
      timestamp: new Date().toLocaleDateString()
    };

    setLockedAssets([...lockedAssets, newPosition]);
    setSelectedAsset(null);
    setBorrowAmount('');
  };

  return (
    <div className="border border-green-800 p-6 bg-green-950/10 space-y-6 font-mono">
      <div>
        <h2 className="text-lg font-bold text-green-400">&gt;&gt; COURTYARD.IO COLLATERAL DEPOSIT &amp; LOAN TERMINAL</h2>
        <p className="text-xs text-green-600 mt-1">
          Lock OpenSea-verified physical asset tokens as zero-physical-movement collateral. Maintain liquidity while assets remain secured in Courtyard vaults.
        </p>
      </div>

      {userTier === 'NONE' ? (
        <div className="p-4 border border-red-900 bg-red-950/10 text-center">
          <p className="text-red-400 text-xs font-bold">[ ACCESS RESTRICTED: ZKP LICENSE GATED ]</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Available Courtyard Assets in Wallet */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-green-300">&gt;&gt; DETECTED COURTYARD NFTS (OPENSEA)</h3>
            <div className="space-y-3">
              {availableCourtyardAssets.map((asset) => (
                <div 
                  key={asset.id}
                  onClick={() => setSelectedAsset(asset)}
                  className={p-3 border cursor-pointer transition-colors }
                >
                  <p className="text-xs font-bold">{asset.name}</p>
                  <div className="flex justify-between text-[11px] text-green-600 mt-2">
                    <span>Floor: {asset.floorPrice}</span>
                    <span>Max LTV (75%): {asset.maxBorrow}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Loan Configuration & Execution */}
          <div className="border border-green-800 p-4 bg-black space-y-4">
            <h3 className="text-sm font-bold text-green-300">&gt;&gt; LOAN ORIGINATION PARAMS</h3>
            {selectedAsset ? (
              <div className="space-y-3 text-xs">
                <div className="p-2 border border-green-900 bg-green-950/20 text-green-300">
                  Selected: {selectedAsset.name}
                </div>
                <div>
                  <label className="block text-[11px] text-green-600 mb-1">Select Term Duration:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['30', '60', '90'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setLoanTerm(term)}
                        className={py-1 border text-center font-bold }
                      >
                        {term} DAYS
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] text-green-600 mb-1">Borrow Amount (ETH):</label>
                  <input 
                    type="number"
                    value={borrowAmount}
                    onChange={(e) => setBorrowAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-black border border-green-800 p-2 text-green-400 focus:outline-none focus:border-green-400"
                  />
                </div>
                <button 
                  onClick={handleLockCollateral}
                  className="w-full py-2 bg-green-700 text-black font-bold hover:bg-green-500 transition-colors mt-2"
                >
                  LOCK COLLATERAL &amp; MINT LOAN
                </button>
              </div>
            ) : (
              <p className="text-xs text-green-700 italic text-center py-12">
                Select an OpenSea Courtyard asset from your portfolio to configure loan parameters.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Active Loan Positions List */}
      {lockedAssets.length > 0 && (
        <div className="border-t border-green-800 pt-4 mt-6">
          <h3 className="text-sm font-bold text-green-300 mb-3">&gt;&gt; ACTIVE COLLATERALIZED LOAN POSITIONS</h3>
          <div className="space-y-2">
            {lockedAssets.map((pos, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 border border-green-900 bg-black text-xs">
                <span className="text-green-300">{pos.asset}</span>
                <span className="text-green-500">Borrowed: {pos.borrowed} ETH ({pos.term} Days)</span>
                <span className="text-green-700">[ LOCKED ]</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
