import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { login } from '../../redux/user/operations';

const useStyles = createUseStyles({
  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(state => state.user.isLoading);

  const handleChangeEmail = e => setEmail(e.target.value);

  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    console.log(payload);

    dispatch(login(payload));
  };

  return (
    <div className={classes.login}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form className={classes.form} onSubmit={handleSubmit}>
          <label className={classes.label}>
            <span>Email</span>
            <input type="email" value={email} onChange={handleChangeEmail} />
          </label>

          <label className={classes.label}>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
