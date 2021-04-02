import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  productForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  error: {
    color: 'red',
  },
});

const initialState = {
  name: '',
  price: '',
  count: '',
  image: 'phone',
};

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();

  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const { name, price, count, image } = state;

  const handleSubmit = e => {
    e.preventDefault();

    const hasEmptyField = Object.values(state).some(item => !item);
    if (hasEmptyField) {
      setError('Fields are required');
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      price: Number(price),
      count: Number(count),
      img: image,
    };

    onSubmit(newItem);
    setState(initialState);
    setError('');
  };

  const handleChanges = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className={classes.productForm} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Name:</span>
        <input
          type="text"
          className={classes.input}
          value={name}
          name="name"
          onChange={handleChanges}
        />
      </label>

      <label className={classes.label}>
        <span>Price:</span>
        <input
          type="number"
          className={classes.input}
          value={price}
          name="price"
          onChange={handleChanges}
        />
      </label>

      <label className={classes.label}>
        <span>Count:</span>
        <input
          type="number"
          className={classes.input}
          value={count}
          name="count"
          onChange={handleChanges}
        />
      </label>

      <label className={classes.label}>
        <span>Image:</span>
        <select
          className={classes.input}
          value={image}
          name="image"
          onChange={handleChanges}
        >
          <option value="phone">phone</option>
          <option value="notebook">notebook</option>
        </select>
      </label>

      {error && <p className={classes.error}>{error}</p>}

      <button type="submit">Add product</button>
    </form>
  );
};

export default ProductForm;
