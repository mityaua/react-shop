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
  fieldset: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  error: {
    color: 'red',
  },
});

const initialState = {
  name: '',
  price: '',
  count: '',
  color: 'white',
  insurance: false,
  software: false,
  image: 'phone',
};

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();

  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const { name, price, count, color, insurance, software, image } = state;

  const handleSubmit = e => {
    e.preventDefault();

    // const hasEmptyField = Object.values(state).some(item => !item);
    // if (hasEmptyField) {
    //   setError('Fields are required');
    //   return;
    // }

    const newItem = {
      // id: Date.now(),
      name,
      price: Number(price),
      count: Number(count),
      color,
      insurance,
      software,
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

  const handleCheckboxChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <form className={classes.productForm} onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          className={classes.input}
          value={name}
          onChange={handleChanges}
        />
      </label>

      <label className={classes.label}>
        <span>Price:</span>
        <input
          type="number"
          name="price"
          className={classes.input}
          value={price}
          onChange={handleChanges}
        />
      </label>

      <label className={classes.label}>
        <span>Count:</span>
        <input
          type="number"
          name="count"
          className={classes.input}
          value={count}
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

      <fieldset className={classes.color}>
        <legend>color</legend>

        <label>
          <span>white</span>
          <input
            type="radio"
            name="color"
            value="white"
            checked={color === 'white'}
            onChange={handleChanges}
          />
        </label>

        <label>
          <span>gray</span>
          <input
            type="radio"
            name="color"
            value="gray"
            checked={color === 'gray'}
            onChange={handleChanges}
          />
        </label>

        <label>
          <span>black</span>
          <input
            type="radio"
            name="color"
            value="black"
            checked={color === 'black'}
            onChange={handleChanges}
          />
        </label>
      </fieldset>

      <fieldset className={classes.fieldset}>
        <legend>options</legend>

        <label>
          <span>Anvanced insurance (12m)</span>

          <input
            type="checkbox"
            name="insurance"
            checked={insurance}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          <span>Install software</span>

          <input
            type="checkbox"
            name="software"
            checked={software}
            onChange={handleCheckboxChange}
          />
        </label>
      </fieldset>

      {error && <p className={classes.error}>{error}</p>}

      <button type="submit">Add product</button>
    </form>
  );
};

export default ProductForm;
