import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom';
import Body from './components/Body'
import Navbar from './components/Navbar'
import GiveConsent from './components/GiveConsent';
import CheckConsent from './components/CheckConsent';
import RevokeConsent from './components/RevokeConsent';
// import CheckConsent from './components/CheckConsent';
// import RevokeConsent from './components/RevokeConsent';

function App() {
  const [view, setView] = useState("home");
  console.log(window.web3);

  return (
    <div>
      <Navbar setView={setView} />
      {/* {view === "home" && <Body setView={setView} />} */}
      {/* {view === "giveConsent" && <GiveConsent />} */}
      {/* {view === "checkConsent" && <CheckConsent />} */}
      {/* {view === "revokeConsent" && <RevokeConsent />} */}
      <GiveConsent />
      <CheckConsent />
      <RevokeConsent />
    </div>
  );
}

export default App;
