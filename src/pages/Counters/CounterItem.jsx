import React from 'react';

// shoudComponentUpdate (проверяет изменение значения и решает обновлять ли)
// Ручная проверка если сложный обьект
const areEqual = (prevProps, nextProps) =>
  prevProps.counter.value === nextProps.counter.value;

// Memo или PureComponent
const CounterItem = React.memo(
  ({ counter, onIncrement, onDecrement, onDelete }) => {
    const handleIncrement = () => onIncrement(counter.id);
    const handleDecrement = () => onDecrement(counter.id);
    const handleDelete = () => onDelete(counter.id);

    return (
      <li className="counter-item">
        <button onClick={handleDecrement}>-</button>
        <span>{counter.value}</span>
        <button onClick={handleIncrement}>+</button>

        <button onClick={handleDelete}>X</button>
      </li>
    );
  },
  areEqual,
);

export default CounterItem;
