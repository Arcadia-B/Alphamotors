import React from 'react';
import { Link } from 'react-router-dom';
import motor from "../../assets/motorcycle/motor.png";
import scooter from "../../assets/scooter/scooter.png";
import ekipman from "../../assets/costume/ekipman.png";
import aksesuar from "../../assets/accessory/aksesuar.png";

const Category = () => {
  return (
    <div className='category container mx-auto'>
      <h1 className='text-4xl font-bold my-8 text-center'>AlphaMotors'u Keşfedin</h1>
      <div className='flex flex-wrap justify-center'>
        <Link to="/motorcycle" className='flex flex-col items-center justify-center m-4'>
          <img src={motor} alt="Motor" className='w-60 h-40 object-contain' />
          <p className='mt-2 text-center'>Motosiklet</p>
        </Link>
        <Link to="/scooter" className='flex flex-col items-center justify-center m-4'>
          <img src={scooter} alt="Scooter" className='w-60 h-40 object-contain' />
          <p className='mt-2 text-center'>Scooter</p>
        </Link>
        <Link to="/costume" className='flex flex-col items-center justify-center m-4'>
          <img src={ekipman} alt="Ekipman" className='w-60 h-40 object-contain' />
          <p className='mt-2 text-center'>Kıyafet</p>
        </Link>
        <Link to="/accessory" className='flex flex-col items-center justify-center m-4'>
          <img src={aksesuar} alt="Aksesuar" className='w-60 h-40 object-contain' />
          <p className='mt-2 text-center'>Aksesuar</p>
        </Link>
      </div>
    </div>
  );
}

export default Category;
