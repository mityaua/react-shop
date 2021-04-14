const MovieDetails = ({
  match: {
    params: { movieId },
  },
  history: { push },
  location: { state },
}) => {
  return (
    <div className="movie-details">
      <button
        type="button"
        onClick={() =>
          push({
            pathname: '/movie-search',
            search: `?query=${state.query}`,
          })
        }
      >
        Go back
      </button>

      <h1>Movie Details {movieId}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus saepe,
        ratione tempore ad ea totam.{' '}
      </p>
    </div>
  );
};

export default MovieDetails;
