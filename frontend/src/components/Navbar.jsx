// In frontend/src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; // 1. Import useAuth

const Navbar = () => {
  const { cartItems } = useCart();
  const { user, logoutUser } = useAuth(); // 2. Get user and logout function

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        BERRY GADGETS
      </Link>
      
      <div className="navbar-links">
        {/* 3. Add conditional logic */}
        {user ? (
          <>
            {/* Display username (if available in token) */}
            <span className="navbar-link">Hello, {user.username}!</span> 
            <button onClick={logoutUser} className="navbar-link">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/signup" className="navbar-link">
              Sign Up
            </Link>
          </>
        )}
        
        <Link to="/cart" className="navbar-cart">
          🛒 Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;