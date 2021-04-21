import { useState, useEffect } from 'react';
// import CounterList from './CounterList';
// import SingleCounter from './SingleCounter';
import SingleCounterRedux from './SingleCounterRedux';

const Counters = () => {
  const [counters, setCounters] = useState([]);

  // componentDidMount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('counters'));

    if (data) {
      setCounters(data);
    }
  }, []);

  // componentDidUpdate (после обновления counters)
  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  // componentDidUpdate (всегда после рендера)
  useEffect(() => {
    // console.log('Третий useEffect');
  });

  // const addCounter = () =>
  //   setCounters(prevState => [
  //     ...prevState,
  //     {
  //       id: Date.now(),
  //       value: 0,
  //     },
  //   ]);

  // const handledeleteCounter = id =>
  //   setCounters(prevState => prevState.filter(counter => counter.id !== id));

  // const hanleIncrement = id =>
  //   setCounters(prevState =>
  //     prevState.map(counter =>
  //       counter.id === id
  //         ? {
  //             ...counter,
  //             value: counter.value + 1,
  //           }
  //         : counter,
  //     ),
  //   );

  // const hanleDecrement = id =>
  //   setCounters(prevState =>
  //     prevState.map(counter =>
  //       counter.id === id
  //         ? {
  //             ...counter,
  //             value: counter.value - 1,
  //           }
  //         : counter,
  //     ),
  //   );

  return (
    <div className="counters">
      <h2>Counters</h2>
      <SingleCounterRedux />

      {/* <button onClick={addCounter}>Add counter</button>

      <CounterList
        counters={counters}
        onIncrement={hanleIncrement}
        onDecrement={hanleDecrement}
        onDelete={handledeleteCounter}
      /> */}
    </div>
  );
};

export default Counters;
