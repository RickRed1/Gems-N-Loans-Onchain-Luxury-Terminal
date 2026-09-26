// Deployment script for Gems N' Loans Onchain Luxury Terminal on Hyperliquid EVM (Chain ID 999)
const { ethers } = require("hardhat");

async function main() {
  console.log("[DEPLOY] Initializing deployment of LuxuryYieldVault to Hyperliquid EVM...");

  const LuxuryYieldVault = await ethers.getContractFactory("LuxuryYieldVault");
  const vault = await LuxuryYieldVault.deploy();

  await vault.waitForDeployment();

  console.log(\[SUCCESS] LuxuryYieldVault deployed to: \\);
}

main().catch((error) => {
  console.error("[ERROR] Deployment failed:", error);
  process.exitCode = 1;
});
