import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-100 rounded-lg shadow text-lg dark:bg-gray-900 border-t-2 my-0">
      <div className="w-full mx-auto max-w-screen-xl other:flex other:justify-evenly p-4 md:flex md:items-center md:justify-between">
        <span className=" text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <span >
            MovieMate
          </span>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3  font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/Krithe-dd"
              target="_blank"
              rel='noreferrer'
              className="mr-4 hover:underline md:mr-6 "
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/krithe-kishan/"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
