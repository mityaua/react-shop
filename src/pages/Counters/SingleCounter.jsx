import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  counter: {
    padding: 10,
  },
  buttons: {
    display: 'flex',
  },
});

const SingleCounter = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const handleDecrement = () => setValue(prevState => prevState - step);
  const handleIncrement = () => setValue(prevState => prevState + step);

  const handleChangeStep = event =>
    setStep(Number(event.target.value));

  useEffect(() => {
    console.log('value', value);
  }, [value]);

  return (
    <div className={classes.counter}>
      <h4>Single Counter</h4>

      <label>
        <span>Step</span>
        <select
          value={step}
          onChange={handleChangeStep}
        >
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

export default SingleCounter;
