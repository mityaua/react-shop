import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

import { createUseStyles } from 'react-jss';
import { loadImage } from '../../utils/loadImage/index';

const useStyles = createUseStyles({
  item: {
    display: 'flex',
    marginBottom: 10,
    alignItems: 'flex-start',
  },

  card: {
    padding: 10,
  },

  image: {
    height: 100,
  },
});

const ProductsItem = ({ product, onDelete }) => {
  const x = 15;
  const classes = useStyles(x);

  const handleDelete = () => onDelete(product.id);

  return (
    <li className={classes.item}>
      <CardActionArea>
        <Card className={classes.card}>
          <p>Name: {product.name}</p>
          <img
            className={classes.image}
            src={loadImage(product.img)}
            alt={product.name}
          />
          <p>Price: {product.price}</p>
          <p>Count: {product.count}</p>
          <p>Color: {product.color || '--'}</p>
          <p>Insurance: {product?.insurance?.toString() || '--'}</p>
          <p>Software: {product?.software?.toString() || '--'}</p>
        </Card>
      </CardActionArea>

      <div className="icons">
        <IconButton>
          <AddShoppingCartOutlinedIcon />
        </IconButton>

        <IconButton onClick={handleDelete}>
          <HighlightOffOutlinedIcon />
        </IconButton>
      </div>
    </li>
  );
};

ProductsItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    color: PropTypes.string,
    insurance: PropTypes.bool,
    software: PropTypes.bool,
    img: PropTypes.string,
  }),
};

export default ProductsItem;
