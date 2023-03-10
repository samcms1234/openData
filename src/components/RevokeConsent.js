import React, { useState } from 'react';
import Consent from './Consent';
import { ethers } from 'ethers';
// import { abi, } from './Consent.json';
const { ContractFactory, Wallet, providers } = require('ethers');


const RevokeConsent = () => {
  const [receipientId, setReceipientId] = useState('');
  const [dataType, setDataType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      let abi = [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "userId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "recipientId",
              "type": "string"
            }
          ],
          "name": "checkConsent",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "consentRecords",
          "outputs": [
            {
              "internalType": "string",
              "name": "userId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "dataType",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "recipientId",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "userId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "recipientId",
              "type": "string"
            }
          ],
          "name": "getConsentKey",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "userId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "dataType",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "recipientId",
              "type": "string"
            }
          ],
          "name": "giveConsent",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "userId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "recipientId",
              "type": "string"
            }
          ],
          "name": "revokeConsent",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]

      const privateKey = '0x3fb72fdfbed0a7a2ee3bd0b6118aa3f6274c59984ea845cb5d533841aaab582e';
      const provider = new providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/0_RwFQIXZCNnjLsyuUP5Ly4AH9bFHVeC');
      const wallet = new Wallet(privateKey, provider);


      const Consent = new ethers.ContractFactory(abi, '0x608060405234801561001057600080fd5b506107bc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80635865e3d81461005c5780636a81f84214610071578063d2e7e1de14610084578063e7068861146100b0578063f096de50146100d3575b600080fd5b61006f61006a3660046105db565b6100f4565b005b61006f61007f36600461057a565b610191565b610097610092366004610562565b6101e7565b6040516100a794939291906106ba565b60405180910390f35b6100c36100be36600461057a565b6103a7565b60405190151581526020016100a7565b6100e66100e136600461057a565b6103d2565b6040519081526020016100a7565b60408051608081018252848152602081018490529081018290524260608201528060008061012287866103d2565b815260208082019290925260400160002082518051919261014892849290910190610405565b5060208281015180516101619260018501920190610405565b506040820151805161017d916002840191602090910190610405565b506060820151816003015590505050505050565b60008061019e84846103d2565b8152602001908152602001600020600080820160006101bd9190610489565b6101cb600183016000610489565b6101d9600283016000610489565b600382016000905550505050565b60006020819052908152604090208054819061020290610735565b80601f016020809104026020016040519081016040528092919081815260200182805461022e90610735565b801561027b5780601f106102505761010080835404028352916020019161027b565b820191906000526020600020905b81548152906001019060200180831161025e57829003601f168201915b50505050509080600101805461029090610735565b80601f01602080910402602001604051908101604052809291908181526020018280546102bc90610735565b80156103095780601f106102de57610100808354040283529160200191610309565b820191906000526020600020905b8154815290600101906020018083116102ec57829003601f168201915b50505050509080600201805461031e90610735565b80601f016020809104026020016040519081016040528092919081815260200182805461034a90610735565b80156103975780601f1061036c57610100808354040283529160200191610397565b820191906000526020600020905b81548152906001019060200180831161037a57829003601f168201915b5050505050908060030154905084565b6000806000806103b786866103d2565b81526020019081526020016000206003015411905092915050565b600082826040516020016103e792919061068b565b60405160208183030381529060405280519060200120905092915050565b82805461041190610735565b90600052602060002090601f0160209004810192826104335760008555610479565b82601f1061044c57805160ff1916838001178555610479565b82800160010185558215610479579182015b8281111561047957825182559160200191906001019061045e565b506104859291506104c6565b5090565b50805461049590610735565b6000825580601f106104a5575050565b601f0160209004906000526020600020908101906104c391906104c6565b50565b5b8082111561048557600081556001016104c7565b600082601f8301126104eb578081fd5b813567ffffffffffffffff8082111561050657610506610770565b604051601f8301601f19908116603f0116810190828211818310171561052e5761052e610770565b81604052838152866020858801011115610546578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215610573578081fd5b5035919050565b6000806040838503121561058c578081fd5b823567ffffffffffffffff808211156105a3578283fd5b6105af868387016104db565b935060208501359150808211156105c4578283fd5b506105d1858286016104db565b9150509250929050565b6000806000606084860312156105ef578081fd5b833567ffffffffffffffff80821115610606578283fd5b610612878388016104db565b94506020860135915080821115610627578283fd5b610633878388016104db565b93506040860135915080821115610648578283fd5b50610655868287016104db565b9150509250925092565b60008151808452610677816020860160208601610705565b601f01601f19169290920160200192915050565b6000835161069d818460208801610705565b8351908301906106b1818360208801610705565b01949350505050565b6080815260006106cd608083018761065f565b82810360208401526106df818761065f565b905082810360408401526106f3818661065f565b91505082606083015295945050505050565b60005b83811015610720578181015183820152602001610708565b8381111561072f576000848401525b50505050565b600181811c9082168061074957607f821691505b6020821081141561076a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220eb3e7f2f744dc301749438158566d03b7b12051c25e8f55176c4d228325c141564736f6c63430008040033', wallet);

      const address = '0x3CB55C12be9F73Eee4Ba65556Bd11B3292C1b1EA'
      const consent = await Consent.attach(address);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });;
      await consent.revokeConsent(userId, receipientId);
      await window.alert("Consent Revoked");
      setErrorMessage('');
    } catch (err) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  }

  return (
    <div className='border-2 mt-40'>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </div>
        <div>
          <label>Receipient ID:</label>
          <input
            type="text"
            value={receipientId}
            onChange={(event) => setReceipientId(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>Revoke Consent</button>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default RevokeConsent;
