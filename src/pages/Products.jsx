import { useState, useEffect } from 'react';
import ProductsList from '../components/ProductsList';
import ProductForm from '../components/ProductForm';

const Products = () => {
  const [products, setProducts] = useState([]);

  const handleProduct = newItem => {
    setProducts(prev => [...prev, newItem]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('products')) || null;

    setProducts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div className="products">
      <ProductForm onSubmit={handleProduct} />
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
