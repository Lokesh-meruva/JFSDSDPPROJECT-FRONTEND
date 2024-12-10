import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = useState({
    isLoggedIn: false,
    role: null,
  });

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth) {
      setAuthState(storedAuth);
    }
  }, []);

  // Save auth state to localStorage whenever it changes
  const setAuth = (newAuth) => {
    setAuthState(newAuth);
    localStorage.setItem('auth', JSON.stringify(newAuth));
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
