import React from "react";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.jpg";
import { motion } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";
import Bg from "../assets/bg.jpg";
import imgGroup from "../assets/imgGroup.png";
import Footer from "./Footer";
import Member from "./Member";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
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
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Hero = () => {
  return (
    <>
      <div className="max-w-full container">
        <Navbar />
        <div
          className="bg-[url(../assets/bg.jpg)] bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url(${Bg})`,
          }}
        >
          <div className="flex justify-between items-center gap-3 flex-col lg:flex-row px-6 w-full">
            <div className="flex items-center justify-center lg:items-start lg:justify-start flex-col mt-20 py-4">
              <h2 className="text-3xl lg:text-5xl text-white font-bold">
                Pleasure Without Limits
              </h2>
              <p className="text-white font-extralight leading-6 py-3">
                Authentic pleasure, real people, real connection. Discover
                content that feels less staged and more like your wildest, most
                intimate moments.
              </p>
              <button className="text-black bg-green-400 outline-none font-bold px-4 py-2 cursor-pointer rounded-xl">
                Explore More
              </button>
            </div>
            <img src={imgGroup} className="max-w-full lg:w-[55%]" alt="" />
          </div>
        </div>
        {/* Horizontal Scroll */}
        <div className="bg-black w-full ">
          <div className="w-3/4 m-auto">
            <div className="py-3 ">
              <Slider {...settings}>
                {members.map((d, id) => (
                  <div key={id} className="flex  rounded-xl">
                    <img
                      src={d.imgUrl}
                      alt=""
                      className="outline-none h-64 w-54 p-3"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll ends here */}
        <div className="py-[3rem] px-[2rem] w-full bg-black">
          <div>
            <div className="flex justify-between flex-col bg-green-50 rounded-xl w-full px-2 py-2">
              <div className="py-6">
                {/* <div className="flex justify-center flex-col md:flex-row py-3 gap-8">
                  <div>
                    <div className="bg-gray-900 rounded-xl p-18"></div>
                    <h3 className="text-center italics">Your Top Models</h3>
                  </div>
                </div> */}
                <h1 className="text-center text-5xl italic font-extrabold text-[#ffd700] shadow-md tracking-[20px] ">
                  Coming Soon...
                </h1>
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
          </div>
        </div>
        <div className="py-[3rem] px-[2rem] w-full bg-green-900">
          <div className="flex justify-between items-center py-6 ">
            <h3 className="text-3xl text-white">Members</h3>
            <a href="#" className=" text-white hover:text-gray-300 text-xl">
              See all
            </a>
          </div>
          <Member />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
