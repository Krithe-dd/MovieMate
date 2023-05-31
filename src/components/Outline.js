import React from "react";

const Outline = ({name}) => {
  return (
    <div>
      <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg  bg-gradient-to-br from-slate-300 to-slate-700   dark:text-white  ">
        <span className="relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md ">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Outline;
