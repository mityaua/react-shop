const CounterItem = ({ counter, onIncrement, onDecrement, onDelete }) => {
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
};

export default CounterItem;
