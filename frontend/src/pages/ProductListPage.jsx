// In frontend/src/pages/ProductListPage.jsx
import { useState, useEffect } from 'react';
import axiosInstance from '../api/axios'; // <-- Import our instance
import { Link } from 'react-router-dom';
import '../App.css';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use the instance, just provide the path
        const response = await axiosInstance.get('/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('There was an error fetching the products!', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="App"><h1>Loading Products...</h1></div>;
  }

  return (
    <div className="App">
      <h1>BERRY GADGETS</h1>
      <div className="product-list">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="product-card"
          >
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