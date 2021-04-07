import { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = () => {
  const [date, setDate] = useState();
  const formattedDate = moment(date).format('DD-MM-YYYY hh:mm:ss');

  // componentDidMount
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    console.log('mount');

    // componentWillUnmount
    return () => {
      console.log('will unmount');
      clearInterval(intervalId);
    };
  }, []);

  // componentDidUpdate (к примеру для локального хранилища)
  useEffect(() => {
    console.log('did update');

    localStorage.setItem('date', JSON.stringify(formattedDate));
  });

  console.log('render');

  return (
    <div className="timer">
      <fieldset>
        <legend>Timer</legend>
        <p>current date: {formattedDate}</p>
      </fieldset>
    </div>
  );
};

export default Timer;
