// In frontend/src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  // Make sure this says 'item.quantity'
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* The text goes INSIDE the Link tags */}
      <Link to="/" className="navbar-brand">
        BERRY GADGETS
      </Link>
      
      {/* The comment should not be inside a tag */}
      <div className="navbar-links">
        <Link to="/login" className="navbar-link">Login</Link>
        <Link to="/signup" className="navbar-link">
          Sign Up
        </Link>
        <Link to="/cart" className="navbar-cart">
          🛒 Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;