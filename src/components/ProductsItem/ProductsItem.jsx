import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
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

const ProductsItem = ({ product }) => {
  const x = 15;
  const classes = useStyles(x);

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

      <IconButton>
        <AddShoppingCartOutlinedIcon />
      </IconButton>
    </li>
  );
};

export default ProductsItem;
