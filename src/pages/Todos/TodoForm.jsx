import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todos/actions';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newToDo = {
      id: Date.now(),
      text: value,
      created: Date.now(),
      isDone: false,
    };

    dispatch(addTodo(newToDo));

    setValue('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>create new todo</legend>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </fieldset>
    </form>
  );
};

export default TodoForm;
