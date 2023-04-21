import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, GiveConsent, CheckConsent, RevokeConsent } from './pages';

function App() {
  const [view, setView] = useState("home");
  console.log(window.web3);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/giveconsent" element={<GiveConsent />} />
          <Route path="/checkconsent" element={<CheckConsent />} />
          <Route path="/revokeconsent" element={<RevokeConsent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
