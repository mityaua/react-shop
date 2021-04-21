import { useSelector } from 'react-redux';
import TodosItem from './TodosItem';

export const TodoList = () => {
  const getItems = (state) => state.todos.items

  const todos = useSelector(getItems);

  return (
    <div className="todos-list">
      <ul>
        {todos.map(({ id }) => (
          <TodosItem key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
