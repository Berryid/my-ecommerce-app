// In frontend/src/pages/ProductListPage.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // This fetches ALL products
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className='App'>
      <h1>BERRY GADGETS</h1>
      <div className="product-list">
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;