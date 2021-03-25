// import PropTypes from 'prop-types'
import Products from '../../pages/Products';
// import Contacts from '../../pages/Contacts';

const Content = () => {
  // const { pathname } = window.location;
  //       {
  //         pathname === '/products' && <Products />;
  //       }
  //       {
  //         pathname === '/contacts' && <Contacts />;
  //       }

  return (
    <main className="content">
<Products />
    </main>
  );
};

export default Content;
