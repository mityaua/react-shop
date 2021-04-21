import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/todos/actions';

const getTodoItem = id => state =>
  state.todos.items.find(todo => todo.id === id);

const TodosItem = ({ id }) => {
  const { text, created, isDone } = useSelector(getTodoItem(id));
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleTodo(id));
  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <li>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>

      <p>Text: {text}</p>
      <p>Created:{moment(created).format('DD MMMM YYYY, HH:MM:SS')}</p>
      <label>
        <span>Is done </span>
        <input type="checkbox" checked={isDone} onChange={handleToggle} />
      </label>
    </li>
  );
};

export default TodosItem;
