import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  useEffect(() => {
    document.title = `Results for ${query}`;
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=` +
          query
      );
      const data = await response.json();
      setSearchedMovies(data.results);
    }
    fetchMovies();
  }, [query]);
  return (
    <div>
      <div className="text-2xl ">
        {searchedMovies.length > 0 && (
          <p>
            Showing results for <strong>"{query}"</strong>
          </p>
        )}
        {searchedMovies.length === 0 && (
          <p>
            No results found for <strong>"{query}"</strong>
          </p>
        )}
      </div>
      <section className="max-w-7xl mx-auto py-5">
        <div className="flex flex-wrap gap-8 justify-evenly">
          {searchedMovies.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Search;
