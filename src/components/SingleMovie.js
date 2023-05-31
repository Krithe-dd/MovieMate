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
      <section className="flex justify-around flex-wrap py-5">
        <div className=" max-w-lg">
          <img
            className="rounded"
            src={image}
            alt={movie.title}
          ></img>
        </div>
        <div className="max-w-5xl md:text-center my-20 flex flex-col gap-10 text-gray-700 text-xl dark:text-white">
          <div className="my-3 text-center lg:text-left">
            <div className="other:text-center text-left md:text-left text-5xl font-bold mb-5">{movie.title}</div>
            <div className="text-xl">{movie.overview}</div>
          </div>
          <div className="flex other:mx-auto">
            {genres?.map(genre=><Outline key={genre.name} name={genre.name}/>)}
          </div>
          <div className="flex-col flex gap-8 text-left other:mx-auto">
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
