import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CgSearch } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

const SearchFilter = () => {
  const navigate = useNavigate();
  const [show, setIsShow] = useState(false);
  return (
    <section className="bg-black min-h-screen py-[3rem] px-[2rem] overflow-hidden ">
      <div
        className="
       text-white"
      >
        <div className="flex justify-between items-center gap-2 md:flex-row md:items-center md:justify-between py-4">
          <div className="bg-[#282828] text-black items-center flex justify-start w-[250px]  lg:w-full py-1">
            <CgSearch className="p-4 text-5xl  text-white" />
            <input
              className="outline-none p-3 rounded-xl w-[300px] text-white"
              type="text"
              placeholder="Search Here..."
            />
          </div>
          <CiFilter
            onClick={() => setIsShow(true)}
            className="cursor-pointer text-4xl font-semibold rounded-full px-1 text-white bg-gray-400 relative group"
          />
          <div
            onClick={() => setIsShow(false)}
            className={` ${
              show ? "block" : "hidden"
            } absolute top-20 right-5 z-10 text-black rounded cursor-pointer pt-12`}
          >
            <ul className="list-none m-0 p-2 bg-gray-400 rounded-md border-0 text-sm">
              <li className="hover:bg-gray-200  py-1 px-2 cursor-pointer pr-10">
                Age
              </li>
              <li className="hover:bg-gray-200  py-1 px-2 cursor-pointer pr-10">
                State
              </li>
              <li className="hover:bg-gray-200  py-1 px-2 cursor-pointer pr-10">
                City
              </li>
              <li className="hover:bg-gray-200  py-1 px-2 cursor-pointer pr-10">
                Body Type
              </li>
              <li className="hover:bg-gray-200  py-1 px-2 cursor-pointer pr-10">
                Kink Status
              </li>
            </ul>
          </div>
          <IoIosCloseCircle className="outline-none cursor-pointer text-4xl text-white ml-1 lg:ml-4" />
        </div>

        {/* search Results */}
        <h3>Recent Searches</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-3"></div>
      </div>
    </section>
  );
};

export default SearchFilter;
