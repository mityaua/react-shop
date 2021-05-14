import { useDispatch } from 'react-redux';

import { logout } from '../../redux/user/operations';

const LogOutPage = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logout());

  return (
    <div className="logout">
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default LogOutPage;
