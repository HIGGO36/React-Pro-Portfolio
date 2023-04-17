import React, { useState, useEffect } from 'react';
import myFirebase from './components/myFirebase/myFirebase';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { SpaceBackground } from './components/SpaceBackground/SpaceBackground';
import Main from "./containers/Main";
import "./App.scss";

function App() {
  
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: 'https://higgo36.github.io/React-Pro-Portfolio/',
    signInOptions: [
      myFirebase.auth.GoogleAuthProvider.PROVIDER_ID,
      myFirebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const unsubscribe = myFirebase.auth().onAuthStateChanged(async (user) => {
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
          <button className="glowing-btn" onClick={() => myFirebase.auth().signOut()}>
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
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={myFirebase.auth()} />
    </div>
  );
}

export default App;