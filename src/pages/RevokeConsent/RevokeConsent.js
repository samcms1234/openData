import React, { useContext, useState } from 'react';
import { ethers } from 'ethers';
// import { abi, } from './Consent.json';

import abi from '../../abi/Consent.json';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import LoginContext from '../../contexts/LoginContext';

import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';


import './RevokeConsent.css';

import { contractAddress } from "../../utils/contracts-config";

const { ContractFactory, Wallet, providers } = require('ethers');


const RevokeConsent = () => {
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
      const response = await consent.revokeConsent(credentials.name, receipientId);

      if(response.hash != "")
      toast.success("Consent Revoked");
      else
      toast.warn("Failed to Revoke Consent");
      
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
          <label>Recipient ID:</label>
          <select
            className="recipient-select"
            value={receipientId}
            onChange={(event) => setReceipientId(event.target.value)}
          >
            <option value="Microsoft">Microsoft</option>
            <option value="Google">Google</option>
            <option value="Oracle">Oracle</option>
            <option value="Bing">Bing</option>
            <option value="Tesla">Tesla</option>
          </select>
          </div>
          <div>
            {
              loading ? 
              <button type="submit" disabled={loading}><TailSpin color='#fff' height={24} /></button>
              :
              <button type="submit" disabled={loading}>Revoke Consent</button>
            }
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RevokeConsent;
