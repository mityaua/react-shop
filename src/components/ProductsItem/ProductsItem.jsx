import PropTypes from 'prop-types';

import phone from '../../assets/phone.jpg';
import notebook from '../../assets/notebook.jpg';
import placeholder from '../../assets/placeholder.jpg';

const images = {
  phone,
  notebook,
};

const ProductsItem = ({ product }) => (
  <li className="item">
    <p>Name: {product.name}</p>
    <img className="item__img" src={images[product.img]} alt={product.name} />
    <p>Price: {product.price}</p>
    <p>Count: {product.count}</p>
  </li>
);

ProductsItem.defaultProps = {
  img: placeholder,
};

ProductsItem.propTypes = {
  product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string,
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductsItem;
