function SearchMovies() {
  return (
    <div className='search-container d-flex justify-content-center '>
      <input
        className='search-inp rounded'
        type='text'
        placeholder='Search Movies Title ...'
      />
      <button className='btn btn-outline-light'>Search</button>
    </div>
  );
}
export default SearchMovies;
