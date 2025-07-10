import React, { useState } from "react";
import AboutComp from "../mockComponents/AboutComp";
import MediaComp from "../mockComponents/MediaComp";
import FriendsComp from "../mockComponents/FriendsComp";
import TransactComp from "../mockComponents/TransactComp";

const ProfilePage = () => {
  const [toggle, setToggle] = useState(1);
  const updateTab = (id) => {
    setToggle(id);
  };
  return (
    <div className="w-full min-h-screen bg-black text-white py-[3rem] lg:py-[4rem] px-[2rem] lg:px-[6rem]">
      <div className="flex flex-col gap-6">
        <button className="bg-white font-medium text-black w-20 rounded-full px-2 py-2 cursor-pointer">
          Edit
        </button>
        <div className="flex items-end justify-end flex-col mb-4">
          <div className="rounded-full py-6 px-6 w-[110px] h-[110px] bg-gray-400">
            {/* profile-image goes in here */}
          </div>
          <h3 className="text-2xl lg:text-3xl font-semibold pt-3">John Doe</h3>
          <p className="font-normal text-md lg:xl">
            Leed City, <span>United Kingdom</span>
          </p>
        </div>
        <div className="bg-gray-400 text-black w-full flex items-center justify-around gap-4 text-center py-3 px-1">
          <button
            onClick={() => updateTab(1)}
            className="cursor-pointer max-w-full font-semibold text-sm lg:text-xl"
          >
            About
          </button>
          <button
            onClick={() => updateTab(2)}
            className="cursor-pointer max-w-full font-semibold text-sm lg:text-xl"
          >
            Media
          </button>
          <button
            onClick={() => updateTab(3)}
            className="cursor-pointer max-w-full font-semibold text-sm lg:text-xl"
          >
            Friends
          </button>
          <button
            onClick={() => updateTab(4)}
            className="cursor-pointer max-w-full font-semibold text-sm lg:text-xl"
          >
            Transactions
          </button>
        </div>
        <div className={toggle === 1 ? "block" : "hidden"}>
          <AboutComp />
        </div>
        <div className={toggle === 2 ? "block" : "hidden"}>
          <MediaComp />
        </div>
        <div className={toggle === 3 ? "block" : "hidden"}>
          <FriendsComp />
        </div>
        <div className={toggle === 4 ? "block" : "hidden"}>
          <TransactComp />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
