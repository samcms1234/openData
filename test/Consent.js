const { expect } = require('chai');
const { Contract, Wallet } = require('ethers');
const Consent = require('../artifacts/contracts/Consent.sol/Consent.json');
const { ContractFactory, JsonRpcProvider } = require('ethers');
const { ethers } = require('hardhat');


// Test suite for the Consent contract
describe('Consent', () => {
  let wallet;
  let consent;

  beforeEach(async () => {
    // Create a wallet and signer
    // wallet = Wallet.createRandom();
    // const signer = wallet.connect();

    // // Deploy the contract
    // const contractFactory = new ContractFactory(Consent.abi, Consent.bytecode, signer);
    // consent = await contractFactory.deploy();

    const Consent = await hre.ethers.getContractFactory('Consent');
    consent = await Consent.deploy();
  });

  // Test case for the giveConsent function
  it('should allow users to give consent', async () => {
    // Call the giveConsent function
    await consent.giveConsent('user1', 'location', 'recipient1');

    // Check that the consent record was added to the mapping
    expect(await consent.consentRecords(consent.getConsentKey('user1', 'recipient1')).timestamp !== 0);
  });

  // Test case for the revokeConsent function
  it('should allow users to revoke consent', async () => {
    // Give consent
    await consent.giveConsent('user1', 'location', 'recipient1');

    // Call the revokeConsent function
    await consent.revokeConsent('user1', 'recipient1');

    // Check that the consent record was removed from the mapping
    expect(await consent.consentRecords(consent.getConsentKey('user1', 'recipient1')).timestamp === 0);
  });

  // Test case for the checkConsent function
  it('should allow users to check if consent has been given', async () => {
    // Give consent
    await consent.giveConsent('user1', 'location', 'recipient1');

    // Check if consent has been given
    expect(await consent.checkConsent('user1', 'recipient1')).to.be.true;
  });
});
