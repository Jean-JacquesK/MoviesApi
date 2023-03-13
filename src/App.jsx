import { useState } from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import SearchMovies from "./components/SearchMovies";

function App() {
  const [movies, setMovies] = useState();

  return (
    <div className='App'>
      <Navbar />
      <SearchMovies />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
