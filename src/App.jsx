import { ToastContainer } from 'react-toastify';

import Layout from './components/Layout';
import Header from './components/Header/';
import Container from './components/Container';
import Menu from './components/Menu/';
import Content from './components/Content/';
import Footer from './components/Footer/';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Layout>
    <Header />

    <Container>
      <Menu />
      <Content />
    </Container>

    <Footer />

    <ToastContainer />
  </Layout>
);

export default App;
