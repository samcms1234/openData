import React, { useState } from 'react';
import { ethers } from 'ethers';
// import { abi, } from './Consent.json';

import abi from '../../abi/Consent.json';

import './CheckConsent.css'

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const { ContractFactory, Wallet, providers } = require('ethers');

const CheckConsent = () => {
  const [value, setValue] = useState(false);
  const [receipientId, setReceipientId] = useState('');
  const [dataType, setDataType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');



  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {

      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );

      const signer = provider.getSigner();

      const consent = new ethers.Contract(
        '0xd283a18f5Ef2f55Eb6464EEA0F9f06C8a6DFDCF6',
        abi,
        signer
      );
      
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });;
      window.alert(await consent.checkConsent(userId, receipientId));
      setValue(true);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  }

  return (
    <div>
        <Navbar />

        <div className='border-2 bodyCheckConsent'>
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
                <button type="submit" disabled={loading}>Check Consent</button>
                {value && <p>{value}</p>}
            </div>
          </form>
        </div>
        <Footer />
    </div>
  );
};

export default CheckConsent;
