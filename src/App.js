import React, { useContext, useState } from 'react';
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

  // used as a configuration object for the StyledFirebaseAuth component from the react-firebaseui library.
  const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: window.location.href,
    signInOptions: [
      myFirebase.auth.GoogleAuthProvider.PROVIDER_ID,
      myFirebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: 'https://www.google.com/policies/terms/',
    privacyPolicyUrl: 'https://www.google.com/policies/privacy/',
  };  

  const handleSignOut = async () => {
    try {
      await myFirebase.auth().signOut();
      // Redirect user to the homepage after signout
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

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
                <button className="glowing-btn" onClick={handleSignOut}>
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
              <h1 className="firebase-user-auth-h1">Get Full Access :</h1>
              <p className="user-notice">
                Sign-in using an email address and password. </p>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={myFirebase.auth()}
              />
              <p>Provided by: John Higgins</p>
              <p> - Web Developer Portfolio -- using a React Framework</p>
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
