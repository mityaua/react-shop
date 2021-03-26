import PropTypes from 'prop-types'
import ProductsItem from '../ProductsItem';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 10,
  },
});

const ProductsList = ({ products }) => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {products.map(
        product =>
          !!product.count && (
            <ProductsItem key={product.id} product={product} />
          ),
      )}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductsList;
