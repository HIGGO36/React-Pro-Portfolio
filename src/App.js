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
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
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
  const [token, setToken] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setToken(token);
      }
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
            <span className='glowing-txt'>SIGN<span className='faulty-letter'>OUT</span></span>
          </button>
        </div>
        <Main user={user} token={token} />
      </div>
    );
  }

  return (
    <div className="firebase-user-auth">
      <div className="space-background-container">
        <SpaceBackground />
      </div>
      <h1 className="firebase-user-auth-h1">Welcome to - John D Higgins - Web Developer React Web App Portfolio</h1>
      <p className="user-notice">Login using email address to access my portfolio.</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default App;
