import React from 'react'
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiMessage2Line } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { GoVideo } from "react-icons/go";
import { AiOutlinePicture } from "react-icons/ai";
import { FaHand } from "react-icons/fa6";

const CategoryPage = () => {
  return (
    <div className="bg-gradient-to-t from-black from-45% to-red-800 w-full min-h-screen text-white py-[3rem] px-[2rem] ">
      <div className="flex flex-col">
        {/* image div */}
        <div className="flex items-center flex-col justify-center text-center">
          <div className="rounded-full py-6 px-6 w-[150px] h-[150px] bg-gray-400"></div>
          <h3 className="text-2xl font-semibold pt-3">John Doe</h3>
          <p className="font-light">Beatles</p>
        </div>
        <div className="flex items-start justify-start  py-3">
          <ul className="list-style-none py-3 w-full">
            <li className="flex items-center cursor-pointer px-3 py-3 font-semibold hover:bg-gray-300 hover:text-black">
              <RiMessage2Line className="mr-2 text-xl" />
              Message
            </li>

            <Link to={"/profile"}>
              <li className="flex items-center cursor-pointer px-3 py-3 font-semibold hover:bg-gray-300 hover:text-black">
                <CgProfile className="mr-2 text-xl" />
                Profile
              </li>
            </Link>

            <li className="flex items-center cursor-pointer px-3 py-3 font-semibold hover:bg-gray-300 hover:text-black">
              <FaUserFriends className="mr-2 text-xl" />
              Send Friend Request
            </li>
            <li className="flex items-center cursor-pointer px-3 py-3 font-semibold hover:bg-gray-300 hover:text-black">
              <GrMoney className="mr-2 text-xl" />
              Tip
            </li>
            <li className="flex items-center cursor-pointer px-3 py-3 font-semibold hover:bg-gray-300 hover:text-black">
              <GoVideo className="mr-2 text-xl" />
              Naughty Videos
            </li>
            <li className="flex items-center cursor-pointer px-3 py-3 font-semibold hover:bg-gray-300 hover:text-black">
              <AiOutlinePicture className="mr-2 text-xl" />
              Pictures
            </li>
            <li className="flex items-center cursor-pointer px-3 py-3 font-semibold hover:bg-gray-300 hover:text-black">
              <FaHand className="mr-2 text-xl" />
              Block
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <button className="cursor-pointer">Close</button>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage