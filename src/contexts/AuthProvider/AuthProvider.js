import React, { createContext, useState, useEffect, useContext } from 'react';
import { myFirebase, db } from '../../components/myFirebase/myFirebase'; // Update this line

// The AuthProvider component sets up a context provider, which provides the authentication state to all the child components using the useContext hook.
export const AuthContext = createContext();

//  The loading, user, token, setUser, and myFirebase states are passed as a value to the AuthContext.Provider component, which can be accessed by the child components via the useContext hook.

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // The useUser, useToken, and useFirebase functions are used to access the values stored in the context provider for the user, token, and myFirebase respectively, allowing other components to access this information without needing to pass it down through props.


  // The useEffect function in this AuthProvider component is used to manage the state of the authentication information of the user. The function subscribes to the Firebase authentication state change event, which gets called whenever there is a change in the authentication state of the user (i.e., user logs in or logs out).

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

  // The unsubscribe function is returned from the useEffect hook, which will be called whenever the component unmounts, and it will detach the listener from the Firebase authentication state change event. This will prevent memory leaks and ensure that the listener is only active when the component is mounted.

  return (
    <AuthContext.Provider value={{ loading, user, token, setUser, myFirebase, db }}>
      {children}
    </AuthContext.Provider>
  );
};

// hooks from this Auth Provider to be used throughout rest of the app :))
export const useUser = () => useContext(AuthContext).user;
export const useToken = () => useContext(AuthContext).token;
export const useFirebase = () => useContext(AuthContext).myFirebase;
// new hook to access Firestore
export const useFirestore = () => useContext(AuthContext).db;