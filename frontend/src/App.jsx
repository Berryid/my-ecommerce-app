// In frontend/src/App.jsx

import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';  
import Navbar from './components/Navbar';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Navbar /> {/* 2. Add Navbar here */}
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />  {/* 3. Add CartPage route */}
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;