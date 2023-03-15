import { useState } from "react";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import SearchMovies from "./components/SearchMovies";

function App() {
  const [dark, setDark] = useState(false);
  const [movies, setMovies] = useState([]);

  function toggleTheme(e) {
    setDark(!dark);
  }

  return (
    <div className={!dark ? "App" : "dark-App"}>
      <Navbar toggleTheme={toggleTheme} />
      <SearchMovies setMovies={setMovies} />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
