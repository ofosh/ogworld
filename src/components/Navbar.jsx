import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full md:h-12 sm:h-14 h-18 flex justify-center items-center xl:px-36 lg:px-24 md:px-12 sm:6 fixed bottom-0 bg-black text-white sm:6">
      <div className="flex flex-row gap-6">
        <div className="flex justify-center items-center sm:gap-x-4 gap-x-2 flex-col">
          <IoHomeSharp />
          <Link to={"/"} className="font-semibold">
            Home
          </Link>
        </div>
        <div className="flex justify-center items-center sm:gap-x-4 gap-x-2 flex-col">
          <CgWebsite />
          <Link to={"/"} className="font-semibold">
            Orgyworld
          </Link>
        </div>
        <div className="flex justify-center items-center sm:gap-x-4 gap-x-2 flex-col">
          <FaSearch />
          <Link to={"/search"} className="font-semibold">
            Search
          </Link>
        </div>
        <div className="flex justify-center items-center sm:gap-x-4 gap-x-2 flex-col">
          <IoMenu />
          <Link to={"/menu"} className="font-semibold">
            Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
