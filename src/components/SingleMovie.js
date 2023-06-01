import React from "react";
import backUp from "../assets/no-image.png";
import Outline from "./Outline";

const SingleMovie = ({ movie }) => {
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : backUp;
  const rating = movie.vote_average;
  const {genres}=movie
  return (
    <div>
      <section className="max-w-full flex other:items-center other:flex-col gap-10 justify-center p-5">
        <div className="w-2/5 other:w-80">
          <img
            className="rounded"
            src={image}
            alt={movie.title}
          ></img>
        </div>
        <div className="w-2/4 other:w-3/4 md:text-center my-20 flex flex-col gap-10 text-gray-700 dark:text-white">
          <div className="my-3 text-center lg:text-left">
            <div className="other:text-center text-left md:text-left text-4xl font-bold mb-5">{movie.title}</div>
            <div className="text-lg">{movie.overview}</div>
          </div>
          <div className="flex other:flex-wrap other:justify-center other:mx-auto">
            {genres?.map(genre=><Outline key={genre.name} name={genre.name}/>)}
          </div>
          <div className="flex-col flex gap-6 text-left other:mx-auto">
            <div className="font-bold">
              ⭐{rating && rating.toFixed(1)}- {movie.vote_count} votes
            </div>
            <div>
              <span className="font-bold">Budget:</span>{" "}
              {movie.budget ? `$${movie.budget}` : "NA"}
            </div>
            <div>
              <span className="font-bold">Revenue:</span>{" "}
              {movie.revenue ? `$${movie.revenue}` : "NA"}
            </div>
            <div>
              <span className="font-bold">Release date:</span>{" "}
              {movie.release_date ? `${movie.release_date}` : "NA"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleMovie;
