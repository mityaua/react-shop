import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import { search } from '../../utils/movie-api';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);

  const handleChange = e => setQuery(e.target.value);

  const movieSearch = useCallback(
    _.debounce(
      query => search(query).then(({ results }) => setList(results)),
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
      <input type="text" value={query} onChange={handleChange} />

      <ul>
        {list.map(({ id, original_title }) => {
          return <li key={id}>{original_title}</li>;
        })}
      </ul>
    </div>
  );
};

export default MovieSearch;
