// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// import { getCart } from '../../utils/api';

import styles from './Header.module.css';

const getTodosCount = state => state.todos.items.length;

const Header = () => {
  // const [cart, setCart] = useState([]);
  const count = useSelector(getTodosCount);

  // // При маунте
  // useEffect(() => {
  //   getCart().then(data => setCart(data));
  // }, []);

  return (
    <header className={styles.header}>
      <p>header</p>
      <IconButton>
        <Badge badgeContent={count} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </header>
  );
};

export default Header;
