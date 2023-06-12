import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import logo from '../../assets/logo.svg';
import Web3 from 'web3'
import { Link } from 'react-router-dom';
import WalletConnectContext from '../../contexts/WalletConnectContext';
import LoginContext from '../../contexts/LoginContext';
import ErrorContext from '../../contexts/ErrorContext';

import { TailSpin } from 'react-loader-spinner';


import './Navbar.css';

firebase.initializeApp({
  apiKey: 'AIzaSyA2zhH-kX0vhasVqTNtooKy11CsgVgeTok',
  authDomain: 'opendata-ec09d.firebaseapp.com',
  projectId: 'opendata-ec09d',
});

const Navbar = () => {
  const { isConnected, setIsConnected } = useContext(WalletConnectContext);
  const { publicKey, setPublicKey } = useContext(WalletConnectContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  const { credentials, setCredentials } = useContext(LoginContext);
  const { errorOccurred, setErrorOccurred } = useContext(ErrorContext);
  const { error, setError } = useContext(ErrorContext);

  const fetchPublicKey = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setPublicKey(accounts[0]);
    console.log(publicKey);
  }

  useEffect(() => {
    fetchPublicKey();
  })

  const handleGoogleLogin = async () => {

    setLoading(true);
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider).then((result) => {

        const user = result.user;

        console.log(result);

        setCredentials({
          name: user.displayName,
          email: user.email
        });
        
        setIsLoggedIn(true);
      });
    } catch(err) {
      setErrorOccurred(true);
      setError('Failed to login');
    }
    setLoading(false);
  }

  const handleLogout = async () => {
    setLoading(true);
    try {
      await firebase.auth().signOut().then(() => {
        setIsLoggedIn(false);
        setCredentials(null);
      });
    } catch(err) {
      setErrorOccurred(true);
      setError('Failed to logout');
    }
    setLoading(false);
  }

    const handleConnect = async () => {
      try {
        if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
        await window.ethereum.enable();
        setIsConnected(true);
        } catch (error) {
        console.log(error);
        }
        } else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        setIsConnected(true);
        } else {
        setErrorOccurred(true);
        setError('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
      } catch(err) {
        setErrorOccurred(true);
        setError('Failed to connect to metamask');
      }
    }
      
      const handleDisconnect = () => {
        setIsConnected(false);
      }
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="text-lg font-medium text-gray-900">
          <img src={logo} width='150px' height='250px'/>
        </Link>
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/giveconsent">
          Give Consent
        </Link>
        <Link className="navbar-link" to="/checkconsent">
          Check Consent
        </Link>
        <Link className="navbar-link" to="/revokeconsent">
          Revoke Consent
        </Link>
      </div>
      <div className="navbar-actions">
        {isLoggedIn 
        ?
          isConnected ? 
          <a href="#" className="navbar-action mr-3" onClick={handleDisconnect}>Disconnect</a> 
          :
          <a href="#" className="navbar-action mr-3" onClick={handleConnect}>Connect</a>
        :
        <button className="navbar-action-disabled-state mr-3" disabled><a onClick={handleConnect}>Connect</a></button>
        }
        {loading ? 
        <a href="#" className="navbar-action"><TailSpin color='#fff' height={24} /></a>
        :
        isLoggedIn ?
          <a href="#" className="navbar-action" onClick={() => firebase.auth().signOut().then(() => setIsLoggedIn(false))}>Logout</a>
          :
          <a href="#" className="navbar-action" onClick={handleGoogleLogin}>Login</a>
        }

      </div>
    </div>
  )
}

export default Navbar