import { connect } from 'react-redux';
import * as actions from '../../redux/counter-toolkit/actions';

import SingleCounter from './SingleCounter';

const mapStateToProps = ({ counterToolkit: { value, step } }) => ({
  value,
  step,
});

export default connect(mapStateToProps, actions)(SingleCounter);
