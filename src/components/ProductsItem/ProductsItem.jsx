import phone from '../../assets/phone.jpg';
import notebook from '../../assets/notebook.jpg';

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

export default ProductsItem;
