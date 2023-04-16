import React, { useState, useEffect } from 'react';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import './components/FirebaseAuth/FirebaseAuth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { SpaceBackground } from './components/SpaceBackground/SpaceBackground';
import Main from "./containers/Main";
import "./App.scss";

function App() {

  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // paste your Firebase configuration object here
  apiKey: "AIzaSyBBFtMgyPUohXOIc2oTLiFJl8JYRMr3wI4",
  authDomain: "react-pro-portfolio.firebaseapp.com",
  projectId: "react-pro-portfolio",
  storageBucket: "react-pro-portfolio.appspot.com",
  messagingSenderId: "130439653552",
  appId: "1:130439653552:web:ccc83476e91ac3d1c77375",
  measurementId: "G-ZG5PVDK9KX"
}; 

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: 'https://higgo36.github.io/React-Pro-Portfolio/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

const [loading, setLoading] = useState(true);
const [user, setUser] = useState(null);

useEffect(() => {
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
    setLoading(false);
  });

  return () => unsubscribe();
}, []);

if (loading) {
  return null;
}

if (user) {
  return (
    <div>
      <div className="firebase-user">
        <h1 className="successful-auth-welcome">
          Welcome, <span className="firebase-email">{user.email}</span>
        </h1>
        <button className="glowing-btn" onClick={() => firebase.auth().signOut()}>
        <span class='glowing-txt'>SIGN<span class='faulty-letter'>OUT</span></span>
        </button>
      </div>
      <Main />
    </div>
  );
}

return (
  <div className="firebase-user-auth">
    <div className="space-background-container">
        <SpaceBackground />
      </div>
    <h1 className="firebase-user-auth-h1">Welcome to my Web Developer React web app portfolio</h1>
    <p className="user-notice">Login my site using email address.</p>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
);
}

export default App;