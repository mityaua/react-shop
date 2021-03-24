import ProductsItem from '../ProductsItem';

const ProductsList = ({ products }) => (
  <ul>
    {products.map(
      product =>
        !!product.count && <ProductsItem key={product.id} product={product} />
    )}
  </ul>
);

export default ProductsList;
