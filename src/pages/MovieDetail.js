import React, { Suspense } from "react";
import {  Await, useLoaderData, json} from "react-router-dom";
import SingleMovie from "../components/SingleMovie";
import Spinner from "../components/Spinner";

const MovieDetail = () => {
  const { movie } = useLoaderData();
  return (
    <>
       <Suspense fallback={<Spinner/>}>
       <Await resolve={movie}>{(e) => <SingleMovie movie={e} />}</Await>
      </Suspense>
    </>
  );
};

export const loaderEvents =async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
  if(!response.ok){
    throw new Error ('Cant find this page')
  }else{
    const data = await response.json();
    document.title=data.title   
    return data;
  }
};
export const loader = async ({ params }) => {
  try{
    const movie = await loaderEvents(params.moviedetail)
    return ( {movie})
  }catch(er){
    throw json(er)
  }
 
};
export default MovieDetail;
