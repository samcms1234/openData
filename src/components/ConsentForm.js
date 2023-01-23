import React, { useState } from 'react';
import { useWeb3Context } from 'web3-react';
import { abi, bytecode } from '~/contracts/Consent.json';

function ConsentForm() {
const [recipientId, setRecipientId] = useState('');
const { account, library } = useWeb3Context();

const handleSubmit = async (event) => {
event.preventDefault();

// Create contract object
const contract = new library.eth.Contract(abi);

// Deploy contract
const deployedContract = await contract
  .deploy({ data: bytecode, arguments: [recipientId] })
  .send({ from: account });

// Call giveConsent function on deployed contract
await deployedContract.methods.giveConsent().send({ from: account });

};

return (
    <form onSubmit={handleSubmit}>
        <label>
        Recipient ID:
        <input type="text" value={recipientId} onChange={(event) => setRecipientId(event.target.value)} />
        </label>
        <input type="submit" value="Give Consent" />
    </form>
);
}

export default ConsentForm;