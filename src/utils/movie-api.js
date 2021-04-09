import axios from 'axios'

const apiKey = '249f222afb1002186f4d88b2b5418b55';

export const search = query =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
  ).then(({data}) => data)