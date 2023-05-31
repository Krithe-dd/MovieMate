import React from "react";
import { Link } from "react-router-dom";
const PagenotFound = () => {
 
  return (
    <section className="flex bg-slate-800 text-lg justify-center items-center  text-white text-center h-screen ">
      <div className="">
        <h1 className="mb-5 text-9xl font-black">404,Oops</h1>
        <p className="mb-5 text-2xl">There was an error</p>
        <p className="text-2xl">Get back to <Link to='/' className="text-teal-500">Home</Link></p>
      </div>
    </section>
  );
};

export default PagenotFound;
