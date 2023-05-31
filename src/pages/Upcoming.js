import React from "react";
import { useLoaderData, json } from "react-router-dom";
import Card from "../components/Card";
import { loader } from "../components/loader";
const Upcoming = () => {
  const data = useLoaderData();
  const upcomingMovies = data.results;
  return (
    <section className="max-w-screen-2xl mx-auto py-5">
      <div className="flex flex-wrap gap-20  justify-evenly">
      
        { upcomingMovies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
};

export const loaderFn = () => {
  const res= loader(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`,'Upcoming'
  );
  return res
};
export default Upcoming;
