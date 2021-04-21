import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
  return (
    <div className="todos">
      <h2>Todos</h2>
      <TodoForm />

      <TodoList />
    </div>
  );
};

export default Todos;
