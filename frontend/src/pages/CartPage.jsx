// In frontend/src/pages/CartPage.jsx

import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);

  if (cartItems.length === 0) {
    return (
      <div className="App">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Your Cart</h1>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              {/* Display the quantity */}
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartPage;