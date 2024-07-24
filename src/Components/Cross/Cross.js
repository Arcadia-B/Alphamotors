import React from 'react';
import MotorCard from '../MotorCycle/MotorCard';
import xvr250 from '../../assets/cross/XVR250.png';
import blackwolf from '../../assets/cross/BLACKWOLF.png';

const cros = [
  {
    id: 1,
    name: 'XVR250',
    description:
      '250cc Tek silindir hava soğutmalı motoru ile maksimum 16.62 HP güç ve maksimum 18.40 Nm tork üretmektedir.',
    image: xvr250,
  },
  {
    id: 2, 
    name: 'BLACKWOLF',
    description:
      '249.45cc Tek silindir hava soğutmalı motoru ile maksimum 18.24 HP güç ve maksimum 18 Nm tork üretmektedir.',
    image: blackwolf,
  },
];

const Cross = () => {
  return (
    <div className="motorcycle container mx-auto py-16 min-h-screen">
      <div className="flex flex-wrap justify-center">
        {cros.map((motor) => (
          <MotorCard key={motor.id} motor={motor} /> 
        ))}
      </div>
    </div>
  );
};

export default Cross;
