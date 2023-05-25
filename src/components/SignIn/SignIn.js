import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';
import bg from '../../assets/bg.png';
import LoginContext from '../../contexts/LoginContext';
import ErrorContext from '../../contexts/ErrorContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import "./SignIn.css";

firebase.initializeApp({
  apiKey: 'AIzaSyA2zhH-kX0vhasVqTNtooKy11CsgVgeTok',
  authDomain: 'opendata-ec09d.firebaseapp.com',
  projectId: 'opendata-ec09d',
});

const SignIn = () => {

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const { credentials, setCredentials } = useContext(LoginContext);
  const { errorOccurred, setErrorOccurred } = useContext(ErrorContext);
  const { error, setError } = useContext(ErrorContext);

  const navigate = useNavigate();


  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider).then((result) => {

        const user = result.user;

        setCredentials({
          name: user.displayName,
          email: user.email
        });

        setIsLoggedIn(true);
        if(isLoggedIn) {
          navigate('/');
      }
      });
    } catch(err) {
      setErrorOccurred(true);
      setError('Failed to login');
    }
  }

  return (
    <div class="bg-cover bg-center h-screen w-screen" style={{ backgroundImage: `url(${bg})`}}>
      <div className='sign-in'>
        <GoogleButton onClick={handleGoogleLogin} />
      </div>
    </div>
  )
}

export default SignIn