import React, { createContext, useState, useEffect } from 'react';
import myFirebase from '../../components/myFirebase/myFirebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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

  return (
    <AuthContext.Provider value={{ loading, user, token, setUser, myFirebase }}>
      {children}
    </AuthContext.Provider>
  );
};
