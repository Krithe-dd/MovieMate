import React from "react";
import { useLoaderData } from "react-router-dom";
import { loader } from "../components/loader";

import Card from "../components/Card";
const Popular = () => {
  const data = useLoaderData();
  const popularMovies = data.results;
  return (
    <section className="max-w-screen-2xl mx-auto py-5">
      <div className="flex flex-wrap gap-20  justify-evenly">
        {popularMovies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export const loaderFn = () => {
  const res= loader(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,'Popular'
  );
  return res
};
export default Popular;
