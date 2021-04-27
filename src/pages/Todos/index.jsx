import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from '../../redux/todos/operations';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="todos">
      <h2>Todos</h2>

      <TodoForm />

      <TodoList />
    </div>
  );
};

export default Todos;
