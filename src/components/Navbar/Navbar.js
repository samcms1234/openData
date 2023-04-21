import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import logo from '../../assets/logo.svg';
import Web3 from 'web3'
import { Link } from 'react-router-dom';

import './Navbar.css';

firebase.initializeApp({
  apiKey: 'AIzaSyA2zhH-kX0vhasVqTNtooKy11CsgVgeTok',
  authDomain: 'opendata-ec09d.firebaseapp.com',
  projectId: 'opendata-ec09d',
});

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      setIsUserLoggedIn(true);
    });
  }

  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
    setIsUserLoggedIn(false);
    });
    }

    const handleConnect = async () => {
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
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
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
        {isConnected ? 
          <a href="#" className="navbar-action mr-3" onClick={handleDisconnect}>Disconnect</a> 
          :
          <a href="#" className="navbar-action mr-3" onClick={handleConnect}>Connect</a>
        }
        {isUserLoggedIn ?
          <a href="#" className="navbar-action" onClick={() => firebase.auth().signOut().then(() => setIsUserLoggedIn(false))}>Logout</a>
          :
          <a href="#" className="navbar-action" onClick={handleGoogleLogin}>Login</a>
        }
      </div>
    </div>
  )
}

export default Navbar