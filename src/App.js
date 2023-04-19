import React, { useContext, useState, useEffect } from 'react';
import 'firebase/compat/auth';
import { SpaceBackground } from './components/SpaceBackground/SpaceBackground';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Main from './containers/Main';
import { AuthProvider, AuthContext } from './contexts/AuthProvider/AuthProvider';
import './App.scss';

function AppContent() {
  const { loading, user, token, myFirebase } = useContext(AuthContext);
  const [showUserAuth, setShowUserAuth] = useState(false);

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: window.location.href,
    signInOptions: [
      myFirebase.auth.GoogleAuthProvider.PROVIDER_ID,
      myFirebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  useEffect(() => {
    // Listen for messages from the service worker
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data.type === "CACHE_SUCCESS") {
        console.log("All images cached successfully!");
      }
    });
  }, []);

  return (
    <div>
      {!loading && (
        <>
          {user ? (
            <>
              <div className="firebase-user">
                <h1 className="successful-auth-welcome">
                  Access approved:{' '}
                  <span className="firebase-email">{user.email}</span>
                </h1>
                <button
                  className="glowing-btn"
                  onClick={() => myFirebase.auth().signOut()}
                >
                  <span className="glowing-txt">
                    SIGN<span className="faulty-letter">OUT</span>
                  </span>
                </button>
              </div>
              <Main
                user={user}
                token={token}
                myFirebase={myFirebase}
                onWorkExperienceClick={() => setShowUserAuth(true)}
              />
            </>
          ) : showUserAuth ? (
            <div className="firebase-user-auth">
              <div className="space-background-container">
                <SpaceBackground />
              </div>
              <h1 className="firebase-user-auth-h1">Get Full Access :</h1>
              <p className="user-notice">
                Sign-in using an email address and password.
              </p>
              <p>
                This way i can stop majority of malicious bots from obtaining
                this data as easily.
              </p>{' '}
              <p>Provided by: John Higgins</p>
              <p> - Web Developer Portfolio -- using a React Framework</p>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={myFirebase.auth()}
              />
            </div>
          ) : (
            <Main
              user={null}
              token={null}
              myFirebase={myFirebase}
              onWorkExperienceClick={() => setShowUserAuth(true)}
            />
          )}
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
