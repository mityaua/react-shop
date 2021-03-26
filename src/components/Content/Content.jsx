// import PropTypes from 'prop-types'
import Products from '../../pages/Products';
import Contacts from '../../pages/Contacts';

const Content = () => {
  const { pathname } = window.location;

  return (
    <main className="content">
      {pathname === '/products' && <Products />}
      {pathname === '/contacts' && <Contacts />}
    </main>
  );
};

export default Content;
