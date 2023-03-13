function MovieDetails({ title, year, poster }) {
  return (
    <div className='d-flex flex-column align-items-center w-50 p-3 '>
      <h2 className='align-self-center'>
        {" "}
        {title} ( {year} ){" "}
      </h2>
      <img className='w-25 ' src={poster} alt={title} />
    </div>
  );
}

export default MovieDetails;
