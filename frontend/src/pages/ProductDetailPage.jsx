// In frontend/src/pages/ProductDetailPage.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`);
            setProduct(response.data);
        } catch (error) {
            console.error("There was an error fetching the product!", error);
        }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <div className="product-detail-info">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h2>${product.price}</h2>
                {/* 3. Add the button */}
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    </div>
  );
};

export default ProductDetailPage;