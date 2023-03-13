import MovieDetails from "./MovieDetails";

function Movies({ movies }) {
  return (
    <div className='result-container d-flex flex-wrap justify-content-around'>
      {movies.map((movie) => {
        return (
          <MovieDetails
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        );
      })}
    </div>
  );
}

export default Movies;
