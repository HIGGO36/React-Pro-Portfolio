import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import "firebase/compat/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  AuthProvider,
  AuthContext,
  useUser,
  useToken,
  useFirebase,
  useFirestore,
} from "./contexts/AuthProvider/AuthProvider";
import UserProfileForm from "./components/userProfile/UserProfileForm";
import Main from "./containers/Main";
import "./App.scss";

function AppContent() {
  const { loading } = useContext(AuthContext);
  const user = useUser();
  const token = useToken();
  const myFirebase = useFirebase();
  const firestore = useFirestore();
  const [showUserAuth, setShowUserAuth] = useState(false);
  const [showUserProfileForm, setShowUserProfileForm] = useState(false);
  const firebaseUserAuthRef = useRef(null);
  const [firebaseUiReady, setFirebaseUiReady] = useState(false);
  const [userData, setUserData] = useState({});
  const provider = new myFirebase.auth.GoogleAuthProvider();


  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: window.location.href,
    signInOptions: [
      {
        provider: myFirebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // Add a custom auth callback for Google sign-in
        customAuthParameters: {
          prompt: 'select_account',
        },
      },
      {
        provider: myFirebase.auth.EmailAuthProvider.PROVIDER_ID,
        // Add a custom auth callback for Email sign-in
        customAuthParameters: {
          showEmailAuthForm: true,
        },
      },
    ],
    tosUrl: "https://www.google.com/policies/terms/",
    privacyPolicyUrl: "https://www.google.com/policies/privacy/",
    callbacks: {
      signInSuccessWithAuthResult: async (authResult, redirectUrl) => {


        const isNewUser = authResult.additionalUserInfo.isNewUser;
        const user = authResult.user;
        const userRef = firestore.collection("users").doc(user.uid);

        if (isNewUser) {
          await userRef.set({
            email: user.email,
            displayName: user.displayName,
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            bio: "",
            firstVisit: new Date(),
            lastLogin: new Date(),
          });
        } else {
          await userRef.set(
            {
              displayName: user.displayName,
              lastLogin: new Date(),
            },
            { merge: true }
          );
        }

         // Check if the email auth form should be displayed
      const providerId = authResult.additionalUserInfo.providerId;
      const showEmailAuthForm = !user && providerId !== myFirebase.auth.GoogleAuthProvider.PROVIDER_ID;

      // Only show the email auth form if the user chose the email auth option and showEmailAuthForm is true
      if (showEmailAuthForm) {
      setShowUserProfileForm(true);
      }

      setShowUserAuth(false);
      return false; // Prevent redirect after sign-in.
    },
  },
};

  const handleSignIn = async () => {
    try {
      const result = await myFirebase.auth().signInWithPopup(provider);
      const user = result.user;
      if (user) {
        setShowUserAuth(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = async () => {
    try {
      setShowUserAuth(false);
      setShowUserProfileForm(false);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSignOut = async () => {
    try {
      await myFirebase.auth().signOut();
      setShowUserProfileForm(false);
      window.location.href = "https://higgo36.github.io/React-Pro-Portfolio/";
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateUserProfile = async (
    newDisplayName,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    bio
  ) => {
    try {
      await user.updateProfile({ displayName: newDisplayName });

      // Check if the user document exists
      const userRef = firestore.collection("users").doc(user.uid);
      const userDoc = await userRef.get();

      // If the user document doesn't exist, create it with the initial data
      if (!userDoc.exists) {
        await userRef.set({
          email,
          displayName: newDisplayName,
          firstName,
          lastName,
          phoneNumber,
          address,
          bio,
          firstVisit: new Date(),
          lastLogin: new Date(),
        });
      } else {
        // Otherwise, just update the display name and other fields
        await userRef.set(
          {
            displayName: newDisplayName,
            firstName,
            lastName,
            phoneNumber,
            address,
            bio,
          },

          { merge: true }
        );
      }

      setShowUserProfileForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOutside = useCallback((event) => {
    if (
      firebaseUserAuthRef.current &&
      !firebaseUserAuthRef.current.contains(event.target)
    ) {
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

   // Fetch additional user data from Firestore when the user object changes
   useEffect(() => {
    if (user) {
      const userRef = firestore.collection("users").doc(user.uid);
      const unsubscribe = userRef.onSnapshot((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
        }
      });
  
      return () => {
        unsubscribe();
      };
    }
  }, [user, firestore]);


  return (
    <div>
      {!loading && (
        <>
          <div id="firebaseAuthUi" className="firebase-user">
            {user ? (
              <>
                <h1 className="successful-auth-welcome">
                  Welcome, {user.displayName}
                </h1>
                <button className="signOut-btn" onClick={handleSignOut}>
                  <span className="signOut-txt">
                    SIGN-OUT</span>       
                </button>
                <button
                  className="userProfile-btn"
                  onClick={() => setShowUserProfileForm(!showUserProfileForm)} >
                  <span className="userProfile-txt">
                    Profile</span>
                </button>
              </>
            ) : (
              <>
                <h1 className="successful-auth-welcome">
                  Welcome to my React Web App Portfolio
                </h1>
                <button className="glowing-btn" onClick={handleSignIn}>
                  <span className="glowing-txt">
                    SIGN<span className="faulty-letter">IN</span>
                  </span>
                </button>
              </>
            )}
          </div>
          {showUserAuth && !showUserProfileForm && (
  <div ref={firebaseUserAuthRef} className="firebase-user-auth">
    <div className="firebase-user-auth-header">
      <h1 className="firebase-user-auth-h1">Get Full Access:</h1>
      <button className="auth-close-btn" onClick={handleClose}>
        <span className="auth-close-icon">×</span>
      </button>
    </div>
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={myFirebase.auth()}
      uiCallback={(ui) => {
        if (ui.isPendingRedirect()) {
          // The widget is still loading
          setFirebaseUiReady(false);
        } else {
          // The widget is fully loaded
          setFirebaseUiReady(true);
        }
      }}
      // Wait until the widget is fully loaded before displaying it
      style={{ display: firebaseUiReady ? "block" : "none" }}
    />
  </div>
)}



   {showUserProfileForm && user && (
  <UserProfileForm
    displayName={user.displayName}
    firstName={userData.firstName || ""}
    lastName={userData.lastName || ""}
    email={user.email}
    phoneNumber={userData.phoneNumber || ""}
    address={userData.address || ""}
    bio={userData.bio || ""}
    onSave={handleUpdateUserProfile}
    onCancel={() => setShowUserProfileForm(false)}
  />
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
