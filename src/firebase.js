import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPa1iJ0wq7OeWv_0cAYH8o9k_peesWrtA",
  authDomain: "opendata-1f068.firebaseapp.com",
  projectId: "opendata-1f068",
  storageBucket: "opendata-1f068.appspot.com",
  messagingSenderId: "875252402926",
  appId: "1:875252402926:web:c2295fdec5a24f857b01ff",
  measurementId: "G-3MQKJ7M8L2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;