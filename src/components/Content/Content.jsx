// import PropTypes from 'prop-types'
import Products from '../../pages/Products';
import Contacts from '../../pages/Contacts';
import Todos from '../../pages/Todos';

const Content = () => {
  const { pathname } = window.location;

  return (
    <main className="content">
      {pathname === '/products' && <Products />}
      {pathname === '/contacts' && <Contacts />}
      {pathname === '/todos' && <Todos />}
    </main>
  );
};

export default Content;
