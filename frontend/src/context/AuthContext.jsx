// In frontend/src/context/AuthContext.jsx

import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    // We will build these functions out later
    const loginUser = async (username, password) => {
        console.log("Login user function called");
    };

    const logoutUser = () => {
        console.log("Logout user function called");
    };

    const value = {
        user,
        authToken,
        loginUser,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};