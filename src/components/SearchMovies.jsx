import { useState } from "react";
import { fetchMovies } from "../utils/fetchMovies";

function SearchMovies({ setMovies }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchMovies(search).then((res) => {
      setMovies(res);
    });
  }

  return (
    <form
      className='search-container d-flex justify-content-center'
      onSubmit={handleSubmit}
    >
      <input
        className='search-inp rounded'
        type='text'
        placeholder='Search Movies Title ...'
        value={search}
        onChange={handleChange}
      />
      <button className='btn btn-outline-light'>Search</button>
    </form>
  );
}
export default SearchMovies;
