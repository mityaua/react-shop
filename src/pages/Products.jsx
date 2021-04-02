import { useState } from 'react';
import ProductsList from '../components/ProductsList';
import ProductForm from '../components/ProductForm';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'phone 1',
      price: 5000,
      count: 10,
      img: 'phone1',
    },
  ]);

  const handleProduct = newItem => {
    setProducts(prev => [...prev, newItem]);
  };

  return (
    <div className="products">
      <ProductForm onSubmit={handleProduct} />
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
