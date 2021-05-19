// Пример использования хуков useContext, хука useMemo, хука useRef

import { useContext, useEffect, useCallback, useMemo, useRef } from 'react';
import Context from './counterContext';

const sum = (a, b) => a + b;

const Counter = ({ a, b }) => {
  // const { value, increment, decrement } = useContext(Context);

  const { state, dispatch } = useContext(Context);

  // Пример использования хука useRef
  const inputRef = useRef(null);

  // Пример мемоизации значений через useMemo
  const c = useMemo(() => sum(a, b), [a, b]);

  // Пример мемоизации функций через useCallback
  const handleIncrement = useCallback(() => {
    dispatch({ type: 'counter/increment' });
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: 'counter/decrement' });
  }, [dispatch]);

  useEffect(() => {
    console.log('handleIncrement or handleDecrement is changed');
  }, [handleIncrement, handleDecrement, c]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="counter">
      <button type="button" onClick={handleDecrement}>
        -
      </button>
      <p>{state.value}</p>
      <button type="button" onClick={handleIncrement}>
        +
      </button>

      <input type="text" ref={inputRef} />
    </div>
  );
};

export default Counter;
