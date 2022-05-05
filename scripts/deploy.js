// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');


  const SimulateTx = await hre.ethers.getContractFactory("SimulateTxAccessor");
  const simulateTx = await SimulateTx.deploy();
  await simulateTx.deployed();
  console.log("simulateTx to:", simulateTx.address);

  const Factory = await hre.ethers.getContractFactory("GnosisSafeProxyFactory");
  const factory = await Factory.deploy();
  await factory.deployed();
  console.log("GnosisSafeProxyFactory to:", factory.address);

  const CB = await hre.ethers.getContractFactory("DefaultCallbackHandler");
  const cb = await CB.deploy();
  await cb.deployed();
  console.log("DefaultCallbackHandler to:", cb.address);

  const FB = await hre.ethers.getContractFactory("CompatibilityFallbackHandler");
  const fb = await FB.deploy();
  await fb.deployed();
  console.log("CompatibilityFallbackHandler to:", fb.address);

  const CC = await hre.ethers.getContractFactory("CreateCall");
  const cc = await CC.deploy();
  await cc.deployed();
  console.log("CreateCall to:", cc.address);

  const MultiSend = await hre.ethers.getContractFactory("MultiSend");
  const multiSend = await MultiSend.deploy();
  await multiSend.deployed();
  console.log("MultiSend to:", multiSend.address);

  const MultiSendCO = await hre.ethers.getContractFactory("MultiSendCallOnly");
  const multiSendCO = await MultiSendCO.deploy();
  await multiSendCO.deployed();
  console.log("MultiSendCallOnly to:", multiSendCO.address);

  const SML = await hre.ethers.getContractFactory("SignMessageLib");
  const sml = await SML.deploy();
  await sml.deployed();
  console.log("SignMessageLib to:", sml.address);

  const gSafe = await hre.ethers.getContractFactory("GnosisSafeL2");
  const gsafe = await gSafe.deploy();
  await gsafe.deployed();
  console.log("GnosisSafeL2 to:", gsafe.address);

  const Safe = await hre.ethers.getContractFactory("GnosisSafe");
  const safe = await Safe.deploy();
  await safe.deployed();
  console.log("GnosisSafe to:", safe.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
