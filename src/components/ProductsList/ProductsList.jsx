import PropTypes from 'prop-types'
import ProductsItem from '../ProductsItem';

const ProductsList = ({ products }) => (
  <ul>
    {products.map(
      product =>
        !!product.count && <ProductsItem key={product.id} product={product} />
    )}
  </ul>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductsList;
