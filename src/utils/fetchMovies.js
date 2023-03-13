export const fetchMovies = async (value) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${value}&apikey=${import.meta.env.VITE_API_KEY}`
  );
  const data = await response.json();
  console.log(data.Search);
  return data.Search;
};
