import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { LoginContext } from './contexts/LoginContext';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, GiveConsent, CheckConsent, RevokeConsent } from './pages';

import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  const [view, setView] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(window.web3);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/giveconsent" element={<GiveConsent />} />
          <Route path="/checkconsent" element={<CheckConsent />} />
          <Route path="/revokeconsent" element={<RevokeConsent />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
