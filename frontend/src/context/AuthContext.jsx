// In frontend/src/context/AuthContext.jsx

import { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '../api/axios'; // Import our new axios instance
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Import the package we installed

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // Get token from localStorage on initial load
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem('authToken')
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authToken')
      ? jwtDecode(localStorage.getItem('authToken'))
      : null
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (username, password) => {
    setLoading(true);
    try {
      // Djoser's endpoint for logging in (creating a JWT)
      const response = await axiosInstance.post('/auth/jwt/create/', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        const token = response.data.access;
        setAuthToken(token);
        setUser(jwtDecode(token));
        localStorage.setItem('authToken', token);
        
        // Redirect to homepage after login
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed!', error);
      alert('Login Failed: Please check your username and password.');
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  // Optional: Check if token is expired on load
  useEffect(() => {
    if (authToken) {
      const decodedToken = jwtDecode(authToken);
      // Check if token is expired
      if (decodedToken.exp * 1000 < Date.now()) {
        logoutUser();
      } else {
        setUser(decodedToken);
      }
    }
    setLoading(false);
  }, [authToken, loading]);

  const value = {
    user,
    authToken,
    loginUser,
    logoutUser,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};