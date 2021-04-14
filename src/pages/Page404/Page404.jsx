// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Page404 = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push({
      pathname: '/'
    });
  };

  return (
    <div className="404">
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>

      <h2>Page 404</h2>
      <p>: (</p>
    </div>
  );
};

export default Page404;
