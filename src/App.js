import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, GiveConsent, CheckConsent, RevokeConsent } from './pages';

import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Protected from './Routes/Protected';
import { LoginProvider } from './contexts/LoginContext'

function App() {
  const [view, setView] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(window.web3);

  return (
    <div>
      <LoginProvider>
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/giveconsent" element={<Protected Component={GiveConsent} />} />
              <Route path="/checkconsent" element={<Protected Component={CheckConsent} />} />
              <Route path="/revokeconsent" element={<Protected Component={RevokeConsent} />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </LoginProvider>
    </div>
  );
}

export default App;
