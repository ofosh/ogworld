import React from "react";
import { CgSearch } from "react-icons/cg";

const Searchtabs = () => {
  const tabs = [
    {
      category: "All Girls",
    },
    {
      category: "Everyday Orgy",
    },
    {
      category: "AnalAnal",
    },
    {
      category: "No Boys",
    },
    {
      category: "BBC Freaks",
    },
    {
      category: "Nasty Gal",
    },
    {
      category: "Amargerdon",
    },
    {
      category: "All you can fuck",
    },
  ];
  return (
    <section className=" w-full py-[3rem] px-[2rem] ">
      <div
        className="
       text-white"
      >
        <div className="flex justify-start items-start gap-4 flex-col md:flex-row md:items-center md:justify-between py-4">
          <p>Now choose one or more houses that interest you.</p>
          <div className="bg-white text-black items-center flex md:w-[350px] w-full">
            <CgSearch className="p-4 text-5xl  text-black" />
            <input
              className="text-black outline-none p-3 rounded-xl w-[250px]"
              type="text"
              placeholder="Search Here..."
            />
          </div>
        </div>

        {/* search options */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-3">
          {tabs.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <div className=" rounded-2xl bg-gray-200 py-14"></div>
                <p className="text-center text-xl">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Searchtabs;
