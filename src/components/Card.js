import React from "react";
import { Link } from "react-router-dom";
import backUp from '../assets/no-image.png'

const Card = ({movie}) => {
  const {id,original_title : title,poster_path, overview:description}=movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : backUp;
  return (

      <div className="sm:w-1/2 lg:w-1/4 md:w-1/3 bg-white border mx-3 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/movies/${id}`}>
          <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/movies/${id}`}>
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {title}  
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description || 'No description available for this movie '}
          </p>
        </div>
      </div>
  );
};

export default Card;
