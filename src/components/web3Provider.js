import { ethers } from 'ethers';

// Hyperliquid EVM Network Parameters
export const HYPERLIQUID_EVM_PARAMS = {
  chainId: '0x3e7', // 999 in hex
  chainName: 'Hyperliquid EVM',
  nativeCurrency: { name: 'HYPE', symbol: 'HYPE', decimals: 18 },
  rpcUrls: ['https://rpc.hyperliquid.xyz/evm'],
  blockExplorerUrls: ['https://hyperevmscan.io']
};

export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error("No crypto wallet detected. Please install MetaMask or Rabby.");
  }
  
  // Request account connection
  const provider = new ethers.BrowserProvider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  
  // Check/Switch Network to Hyperliquid EVM
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: HYPERLIQUID_EVM_PARAMS.chainId }],
    });
  } catch (switchError) {
    // If the chain hasn't been added to the wallet, add it
    if (switchError.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [HYPERLIQUID_EVM_PARAMS],
      });
    } else {
      throw switchError;
    }
  }

  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
}
