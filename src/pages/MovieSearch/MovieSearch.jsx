import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import _ from 'lodash';
import { searchMovies } from '../../utils/movie-api';

const MovieSearch = () => {
  const location = useLocation();
  const { pathname, search } = location;
  const initialQuerySearch = queryString.parse(search);
  const { push } = useHistory();

  const [query, setQuery] = useState(initialQuerySearch.query || '');
  const [list, setList] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    setQuery(e.target.value);
    push({
      ...location,
      search: `?query=${e.target.value}`,
    });
  };

  // eslint-disable-next-line
  const movieSearch = useCallback(
    _.debounce(
      query => searchMovies(query).then(({ results }) => setList(results)),
      300,
    ),
    [],
  );

  useEffect(() => {
    if (!query) return;

    movieSearch(query);
  }, [query, movieSearch]);

  return (
    <div className="movie-search">
      <input type="text" value={query} ref={inputRef} onChange={handleChange} />

      <ul>
        {list.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: `${pathname}/${id}`,
                  state: {
                    query,
                  },
                }}
              >
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieSearch;
