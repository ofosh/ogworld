import React from "react";

const AboutComp = () => {
  return (
    <div className="py-3 px-2">
      <div className="flex flex-col ">
        <h2 className="text-2xl mb-4">Interest</h2>
        <div className="flex flex-row gap-3">
          <button className="bg-white font-medium text-black w-20 rounded-full px-2 py-1 cursor-pointer">
            Edit
          </button>
          <button className="bg-white font-medium text-black w-20 rounded-full px-2 py-1 cursor-pointer">
            Edit
          </button>
          <button className="bg-white font-medium text-black w-20 rounded-full px-2 py-1 cursor-pointer">
            Edit
          </button>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl mb-4">Houses</h2>
          <div className="flex flex-row gap-2">
            <div className="h-20 w-20 rounded-lg bg-gray-400"></div>
            <div className="h-20 w-20 rounded-lg bg-gray-400"></div>
            <div className="h-20 w-20 rounded-lg bg-gray-400"></div>
            <div className="h-20 w-20 rounded-lg bg-gray-400"></div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl mb-4">About</h2>
          <div className="bg-gray-400 h-40 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
