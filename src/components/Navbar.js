import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import logo from '../assets/logo.svg'
import Web3 from 'web3'
import { Link } from 'react-router-dom';


firebase.initializeApp({
  apiKey: 'AIzaSyA2zhH-kX0vhasVqTNtooKy11CsgVgeTok',
  authDomain: 'opendata-ec09d.firebaseapp.com',
  projectId: 'opendata-ec09d',
});

function Navbar( props ) {
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

  <nav class="bg-white fixed top-0 left-0 right-0 z-10 py-2 px-6 flex justify-between items-center">
    <a href="#" class="text-lg font-medium text-gray-900">
      <img src={logo} width='150px' height='250px'/>
    </a>
  <div class="flex justify-center md:justify-start">
    <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 mr-3" onClick={props.setView("giveconsent")}>
      Give Consent
    </a>
    <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900" onClick={props.setView("checkconsent")}>
      Check Consent
    </a>
    <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900" onClick={() => {props.setView("revokeconsent")}}>
      Revoke Consent
    </a>
  </div>
  <div class="flex items-center justify-center md:justify-end">
    {isConnected ? <a href="#" class="px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-3" onClick={handleDisconnect}>Disconnect</a> 
    :
    <a href="#" class="px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-3" onClick={handleConnect}>Connect</a>
    }

    {isUserLoggedIn ?
      <a href="#" class="px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={() => firebase.auth().signOut().then(() => setIsUserLoggedIn(false))}>Logout</a>
      :
      <a href="#" class="px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleGoogleLogin}>Login</a>
    }

  </div>
</nav>
  );
}

export default Navbar;
