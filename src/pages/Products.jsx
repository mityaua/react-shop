import { useState } from 'react';

import ProductsList from '../components/ProductsList';
// import products from '../data/products.json';

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

  return (
    <div className="products">
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
