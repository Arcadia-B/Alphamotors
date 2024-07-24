import React from 'react';
import offroad from "../../assets/offroad.jpg";
import arrow from "../../assets/white-arrow.png"
import { Link } from "react-router-dom";


const Offroad = () => {
  return (
    <div className='offroad relative h-60 mt-24'>
      <img src={offroad} alt="Offroad" className='object-cover w-full h-full' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-white  text-center'>
          <h1 className='text-4xl font-bold'>Offroad araçlarımızla vahşi doğayı keşfedin</h1>
          <div className="flex z-10">
          <Link to="/cross">
            <button className="bg-slate-400 text-white py-2 px-4 md:py-3 md:px-6 rounded-md text-xs md:text-sm hover:bg-gray-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 ">
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
    </div>
  );
}

export default Offroad;
