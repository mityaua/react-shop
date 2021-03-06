import { connect } from 'react-redux';
import * as actions from '../../redux/counter/actions';

import SingleCounter from './SingleCounter';

const mapStateToProps = ({ counter: { value, step } }) => ({
  value,
  step,
});

export default connect(mapStateToProps, actions)(SingleCounter);
