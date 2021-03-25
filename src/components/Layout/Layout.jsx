import PropTypes from 'prop-types'

const Layout = ({ children }) => {
    return <div className="shop">{children}</div>;
}

Layout.defaultProps = {
  children: [],
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;