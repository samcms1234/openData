import React, { useContext, useState } from 'react';
import { ethers } from 'ethers';
// import { abi, } from './Consent.json';

import abi from '../../abi/Consent.json';

import './CheckConsent.css'

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LoginContext from '../../contexts/LoginContext';

import { TailSpin } from 'react-loader-spinner';

import { contractAddress } from "../../utils/contracts-config";

const { ContractFactory, Wallet, providers } = require('ethers');

const CheckConsent = () => {
  const [value, setValue] = useState(false);
  const [receipientId, setReceipientId] = useState('');
  const [dataType, setDataType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');

  const { credentials, setCredentials } = useContext(LoginContext);




  

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
        contractAddress,
        abi,
        signer
      );

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });;
      window.alert(await consent.checkConsent(credentials.name, receipientId));
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
                  type="text-prefetched"
                  placeholder={credentials.name}
                  disabled
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
              {
                loading ? 
                <button type="submit" disabled={loading}><TailSpin color='#fff' height={24} /></button>
                :
                <button type="submit" disabled={loading}>Check Consent</button>
              }
                {value && <p>{value}</p>}
            </div>
          </form>
        </div>
        <Footer />
    </div>
  );
};

export default CheckConsent;
