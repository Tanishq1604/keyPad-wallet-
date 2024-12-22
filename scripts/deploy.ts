import { ethers } from "hardhat";

async function main() {

  // Get the deployer's account details
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const Sorted = await ethers.getContractFactory("Sorted");
  const sorted = await Sorted.deploy(deployer.address);

  await sorted.waitForDeployment();

  // Log the deployed contract address
  console.log("Sorted token deployed to:", await sorted.getAddress());
}

// Catch and log any errors that might occur
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
