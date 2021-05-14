import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import Layout from './components/Layout';
import Header from './components/Header/';
import Container from './components/Container';
import Menu from './components/Menu/';
import Content from './components/Content/';
import Footer from './components/Footer/';

import { getCurrentUser } from './redux/user/operations';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();
  const isAuthorizing = useSelector(state => state.user.isAuthorizing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Layout>
      <Header />

      {isAuthorizing ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <Menu />
          <Content />
        </Container>
      )}

      <Footer />

      <ToastContainer />
    </Layout>
  );
};

export default App;
