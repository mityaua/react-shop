import PropTypes from 'prop-types'

const Container = ({ children }) => {
  return <div className="body">{children}</div>;
};

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;