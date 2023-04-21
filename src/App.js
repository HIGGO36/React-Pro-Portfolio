import React, { useContext, useState, useEffect, useRef, useCallback } from 'react';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Main from './containers/Main';
import { AuthProvider, AuthContext, useUser, useToken, useFirebase } from './contexts/AuthProvider/AuthProvider';
import './App.scss';

function AppContent() {
  const { loading } = useContext(AuthContext);
  const user = useUser();
  const token = useToken();
  const myFirebase = useFirebase();
  const [showUserAuth, setShowUserAuth] = useState(false);
  const firebaseUserAuthRef = useRef(null);

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: window.location.href,
    signInOptions: [
      myFirebase.auth.GoogleAuthProvider.PROVIDER_ID,
      myFirebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: 'https://www.google.com/policies/terms/',
    privacyPolicyUrl: 'https://www.google.com/policies/privacy/',
  };

  const handleSignIn = () => {
    setShowUserAuth(true);
  };

  const handleClose = () => {
    setShowUserAuth(false);
  };

  const handleSignOut = async () => {
    try {
      await myFirebase.auth().signOut();
      window.location.href = 'https://higgo36.github.io/React-Pro-Portfolio/';
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOutside = useCallback((event) => {
    if (firebaseUserAuthRef.current && !firebaseUserAuthRef.current.contains(event.target)) {
      handleClose();
    }
  }, []);

  useEffect(() => {
    if (showUserAuth) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserAuth, handleClickOutside]);

  return (
    <div>
      {!loading && (
        <>
          <div id="firebaseAuthUi" className="firebase-user">
            {user ? (
              <>
                <h1 className="successful-auth-welcome">
                  Access approved:
                  <span className="firebase-email">{user.email}</span>
                </h1>
                <button className="glowing-btn" onClick={handleSignOut}>
                  <span className="glowing-txt">
                    SIGN<span className="faulty-letter">OUT</span>
                  </span>
                </button>
              </>
            ) : (
              <>
                <h1 className="successful-auth-welcome">
                  Get Full Access:
                </h1>
                <button className="glowing-btn" onClick={handleSignIn}>
                  <span className="glowing-txt">
                    SIGN<span className="faulty-letter">IN</span>
                  </span>
                </button>
              </>
            )}
          </div>
          {showUserAuth && (
            <div ref={firebaseUserAuthRef} className="firebase-user-auth">
              <div className="firebase-user-auth-header">
                <h1 className="firebase-user-auth-h1">Get Full Access:</h1>
                <button className="auth-close-btn" onClick={handleClose}>
                  <span className="auth-close-icon">&times;</span>
                </button>
              </div>
              <p className="user-notice">
                Sign in using an email address and password.
              </p>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={myFirebase.auth()} />
          <p>
            Provided by: John Higgins
            <br />- Web Developer Portfolio - using a React Framework
          </p>
        </div>
      )}
      <Main user={user} token={token} handleSignIn={handleSignIn} />
    </>
  )}
</div>
);
}

function App() {
return (
<AuthProvider>
<AppContent />
</AuthProvider>
);
}

export default App;

