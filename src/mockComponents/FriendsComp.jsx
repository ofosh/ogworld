import React from "react";
import { CgSearch } from "react-icons/cg";
import { MdOutlineMessage } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const FriendsComp = () => {
  return (
    <div className="py-3 px-2">
      <div className="bg-white text-black items-center flex md:w-[350px] w-full mb-5">
        <CgSearch className="p-4 text-5xl  text-black" />
        <input
          className="text-black outline-none p-3 rounded-xl w-[250px]"
          type="text"
          placeholder="Search Here..."
        />
      </div>
      <div className="flex items-center justify-between flex-row w-full bg-gray-400 mt-3 px-3 py-1.5 ">
        <div className="flex items-center justify-center gap-2">
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          <h2 className="text-xl">Username</h2>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineMessage className="cursor-pointer text-2xl" />
          <RiDeleteBin6Line className="cursor-pointer text-2xl" />
        </div>
      </div>
      <div className="flex items-center justify-between flex-row w-full bg-gray-400 mt-3 px-3 py-1.5 ">
        <div className="flex items-center justify-center gap-2">
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          <h2 className="text-xl">Username</h2>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineMessage className="cursor-pointer text-2xl" />
          <RiDeleteBin6Line className="cursor-pointer text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default FriendsComp;
