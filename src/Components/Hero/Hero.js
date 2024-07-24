import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg";
import arrow from "../../assets/white-arrow.png";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero relative flex items-center justify-center">
      <img src={hero} alt="" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 md:px-0 absolute inset-0 flex flex-col items-start justify-center text-left">
        <h1 className="text-white text-lg md:text-xl lg:text-2xl xl:text-5xl font-bold z-10 mb-4">
        Tecrübemizle Seçilmiş En İyi Motorlar
        </h1>
        <div className="flex z-10">
          <Link to="/models">
            <button className="bg-slate-400 text-white py-2 px-4 md:py-3 md:px-6 rounded-md text-xs md:text-sm hover:bg-gray-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
             KEŞFET{" "}
              <img
                src={arrow}
                alt=""
                className="inline-block h-3 md:h-4 ml-2 "
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
