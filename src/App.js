import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import logo from './assets/logo.svg'
import { Link, Router, Routes } from 'react-router-dom';
import Body from './components/Body'
import GiveConsent from './pages/GiveConsent';
import CheckConsent from './pages/CheckConsent';
import RevokeConsent from './pages/RevokeConsent';

function App() {
  const [view, setView] = useState("home");
  console.log(window.web3);

  return (
    <Router>
      <Routes>
        <Router exact path="/" element={<Body />} />
        <Router exact path="/giveconsent" element={<GiveConsent />} />
        <Router exact path="/checkconsent" element={<CheckConsent />} />
        <Router exact path="/revokeconsent" element={<RevokeConsent />} />
      </Routes>
    </Router>
  );
}

export default App;
