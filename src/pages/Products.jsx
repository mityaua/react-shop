import { useState, useEffect } from 'react';
import ProductsList from '../components/ProductsList';
import ProductForm from '../components/ProductForm';

import { getProducts, addProduct, deleteProduct } from '../utils/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [Loading, setLoading] = useState(false);

  // Добавление нового продукта
  const handleProduct = newItem => {
    // setProducts(prev => [...prev, newItem]);

    setLoading(true);

    addProduct(newItem)
      .then(data => setProducts(prev => [...prev, data]))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  };

  // Удаление продукта
  const handleDeleteProduct = id => {
    setLoading(true);

    deleteProduct(id)
      .then(() => setProducts(prev => prev.filter(item => item.id !== id)))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  };

  // Запрос за продуктами при маунте
  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('products'));

    setLoading(true);

    getProducts()
      .then(data => setProducts(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('products', JSON.stringify(products));
  // }, [products]);

  return (
    <div className="products">
      <ProductForm onSubmit={handleProduct} />

      {error && (
        <p>
          {error} <button onClick={() => setError(null)}>X</button>{' '}
        </p>
      )}

      {Loading && <p>Loading...</p>}

      <ProductsList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default Products;
