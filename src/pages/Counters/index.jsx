import { useState, useEffect } from 'react';
import CounterList from './CounterList';
import SingleCounter from './SingleCounter';

const Counters = () => {
  const [counters, setCounters] = useState([
    {
      id: 1,
      value: 12,
    },
    {
      id: 2,
      value: 87,
    },
  ]);

  // componentDidMount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('counters'));

    setCounters(data);
  }, []);

  // componentDidUpdate (после обновления даты)
  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  // componentDidUpdate (после рендера)
  useEffect(() => {
    console.log('Третий useEffect');
  });

  const addCounter = () =>
    setCounters(prevState => [
      ...prevState,
      {
        id: Date.now(),
        value: 0,
      },
    ]);

  const handledeleteCounter = id =>
    setCounters(prevState => prevState.filter(counter => counter.id !== id));

  const hanleIncrement = id =>
    setCounters(prevState =>
      prevState.map(counter =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value + 1,
            }
          : counter,
      ),
    );

  const hanleDecrement = id =>
    setCounters(prevState =>
      prevState.map(counter =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value - 1,
            }
          : counter,
      ),
    );

  return (
    <div className="counters">
      <h2>Counters</h2>
      <SingleCounter />

      <button onClick={addCounter}>Add counter</button>

      <CounterList
        counters={counters}
        onIncrement={hanleIncrement}
        onDecrement={hanleDecrement}
        onDelete={handledeleteCounter}
      />
    </div>
  );
};

export default Counters;
