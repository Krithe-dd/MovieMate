import React from "react";
import { useLoaderData } from "react-router-dom";
import { loader } from "../components/loader";

import Card from "../components/Card";
const MoviesList = () => {
  const data = useLoaderData();
  const moviesList = data.results;

  return (
    <section className=" max-w-screen-2xl mx-auto py-5">
      <div className="flex flex-wrap gap-20  justify-evenly">
        {moviesList.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export const loaderFn = () => {
  const res= loader(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`,'Now Playing'
  );
  return res
};

export default MoviesList;
