import ProductsList from '../components/ProductsList';
import products from '../data/products.json';

const Products = () => (
  <div className="products">
    <ProductsList products={products} />
  </div>
);

export default Products;
