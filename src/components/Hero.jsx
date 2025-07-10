import React from "react";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.jpg";
import { motion } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";
const Hero = () => {
  const members = [
    {
      imgUrl: avatar,
      user: "User 1",
    },
    {
      imgUrl: avatar,
      user: "User 2",
    },
    {
      imgUrl: avatar,
      user: "User 3",
    },
    {
      imgUrl: avatar,
      user: "User 4",
    },
    {
      imgUrl: avatar,
      user: "User 5",
    },
    {
      imgUrl: avatar,
      user: "User 6",
    },
    {
      imgUrl: avatar,
      user: "User 7",
    },
    {
      imgUrl: avatar,
      user: "User 8",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navbar />
      <div className="py-[3rem] px-[2rem] w-full">
        <div>
          <h3 className="text-2xl font-semibold">Newly Joined!!!</h3>
          <div className="mx-auto overflow-hidden flex max-w-full py-6">
            <div className="flex items-center justify-between max-w-full">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
              >
                <ul className="flex items-start justify-between  gap-6 ">
                  {members.map((brand, index) => (
                    <li key={index} className="px-2">
                      <img
                        src={brand.imgUrl}
                        width={45}
                        className="rounded-full"
                        alt="/"
                      />
                      <p className="text-center italic">{brand.user}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-between flex-col bg-gray-600 w-full  px-2 py-2">
            <div className="flex justify-between items-center md:items-center gap-4 px-3 flex-col md:flex-row">
              <div className="flex justify-between items-center gap-4">
                <img src={avatar} className="rounded-full w-[40px]" alt="" />
                <div className="flex flex-col items-start">
                  <p className="text-lg">#Orgyworld</p>
                  <h2 className="text-2xl">
                    1000# of Orgies happening around you{" "}
                  </h2>
                </div>
              </div>
              <button className="bg-yellow-600 text-black font-bold px-2 flex items-start cursor-pointer rounded-full ">
                Connect
              </button>
            </div>
            <div className="py-6">
              <div className="flex justify-center flex-col md:flex-row py-3 gap-8">
                <div>
                  <div className="bg-gray-100 p-18"></div>
                  <h3 className="text-center italics">Your Top Songs 2021</h3>
                </div>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex items-center justify-between">
                <button className="bg-gray-300 text-black font-bold p-2 flex items-start cursor-pointer rounded-full">
                  Advertisement
                </button>
                <div>
                  <RxDotFilled />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-6">
            <h3 className="text-3xl">Members.</h3>
            <a href="#" className="underline text-white text-xl">
              See all
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-3">
            {members.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col">
                  <img className=" rounded-2xl " src={item.imgUrl} />
                  <p className="text-center text-xl">{item.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
