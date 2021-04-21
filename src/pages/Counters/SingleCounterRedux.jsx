import { connect } from 'react-redux';
import * as actions from '../../redux/counter/actions';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  counter: {
    padding: 10,
  },
  buttons: {
    display: 'flex',
  },
});

const SingleCounterRedux = ({
  step,
  value,
  onChangeStep,
  onDecrement,
  onIncrement,
}) => {
  const classes = useStyles();

  const handleChangeStep = event => onChangeStep(Number(event.target.value));
  const handleDecrement = () => onDecrement(step);
  const handleIncrement = () => onIncrement(step);

  return (
    <div className={classes.counter}>
      <h4>Single Counter</h4>

      <label>
        <span>Step</span>
        <select value={step} onChange={handleChangeStep}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </label>

      <div className={classes.buttons}>
        <button onClick={handleDecrement}>-</button>
        <p>{value}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = ({ counter: { value, step } }) => ({
  value,
  step,
});

export default connect(mapStateToProps, actions)(SingleCounterRedux);
