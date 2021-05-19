// Пример использования хуков для Контекста и useReducer

import { useReducer } from 'react';

import Counter from './Counter';
import Context from './counterContext';

const initialState = {
  value: 10,
};

const counterReducer = (state, { type }) => {
  switch (type) {
    case 'counter/increment': {
      return {
        ...state,
        value: state.value + 1,
      };
    }

    case 'counter/decrement': {
      return {
        ...state,
        value: state.value - 1,
      };
    }

    default:
      return state;
  }
};

const Hooks = () => {
  // const [value, setValue] = useState(12);

  // const increment = () => setValue(prev => prev + 1);
  // const decrement = () => setValue(prev => prev - 1);

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="hooks">
      <h1>Hooks</h1>

      <Context.Provider value={{ state, dispatch }}>
        <Counter a={5} b={10} />
      </Context.Provider>
    </div>
  );
};

export default Hooks;
