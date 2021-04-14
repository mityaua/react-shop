import axios from 'axios';
import { apiKey } from './apiKey';

export const searchMovies = query =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    )
    .then(({ data }) => data);
