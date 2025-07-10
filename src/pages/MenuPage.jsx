import React from "react";
import { CgSearch } from "react-icons/cg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();
  const tabs = [
    {
      category: "Account",
    },
    {
      category: "Store",
    },
    {
      category: "Settings",
    },
    {
      category: "Houses",
    },
    {
      category: "Naughty Flix",
    },
    {
      category: "Go Live",
    },
    {
      category: "Made for you",
    },
    {
      category: "Funds",
    },
  ];
  return (
    <section className="bg-black min-h-screen py-[3rem] px-[2rem] ">
      <div
        className="
       text-white"
      >
        <div className="flex justify-start items-start gap-4 flex-col md:flex-row md:items-center md:justify-between py-4">
          <div className="flex items-center gap-3">
            <FaArrowLeftLong
              onClick={() => navigate("/")}
              className="cursor-pointer text-4xl rounded-full px-1 border-2"
            />

            <p>Your Top Genres</p>
          </div>
          {/* <div className="bg-white text-black items-center flex md:w-[350px] w-full">
            
          </div> */}
        </div>

        {/* search options */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-3">
          {tabs.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <div className=" rounded-2xl bg-gray-200 py-14">
                  <p className="text-black text-center text-xl">{item.category}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
