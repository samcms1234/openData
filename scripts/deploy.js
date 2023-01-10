// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const { ContractFactory, Wallet, providers } = require('ethers');
const path = require('path');
const { readJsonSync } = require('fs-extra');
require('dotenv').config();

async function main() {
  // Load the contract artifact
  const contractJson = readJsonSync(path.resolve(__dirname, '../artifacts/contracts/Consent.sol', 'Consent.json'));

  // Create a provider and wallet
  const provider = new providers.JsonRpcProvider(process.env.REACT_APP_URL.toString());
  const privateKey = process.env.REACT_APP_PRIVATE_KEY.toString();
  const wallet = new Wallet(privateKey, provider);

  // Create a contract factory
  const contractFactory = new ContractFactory(
    contractJson.abi,
    contractJson.bytecode,
    wallet
  );

  // Deploy the contract
  const contract = await contractFactory.deploy();

  console.log(`Contract deployed at address: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });