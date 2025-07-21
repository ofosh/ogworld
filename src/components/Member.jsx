import React from "react";

import avatar from "../assets/avatar.jpg";
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

const Member = () => {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-3 px-3  w-full">
        {members.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col">
              <img className=" rounded-2xl " src={item.imgUrl} />
              <p className="text-center text-xl font-semibold text-white">
                {item.user}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
