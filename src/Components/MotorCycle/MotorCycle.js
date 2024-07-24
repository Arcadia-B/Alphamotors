import React from 'react';
import MotorCard from './MotorCard';
import srk_1 from "../../assets/motorcycle/srk125r.png"; 
import srk_2 from "../../assets/motorcycle/srk250rs.png"
import srk_3 from "../../assets/motorcycle/r250.png"
import srk_4 from "../../assets/motorcycle/srk250rr.png"
import srk_5 from "../../assets/motorcycle/srk400rr.png"
import srk_6 from "../../assets/motorcycle/srk550rs.png"

const motors = [
  {
    id: 1,
    name: 'SRK125R',
    description: '125cc Tek silindir sıvı soğutma ile maksimum 14.75 HP güç ve maksimum 12.10 Nm tork üretmektedir.',
    image: srk_1,
  },
  {
    id: 2,
    name: 'SRK250RS',
    description: '249cc Tek silindir sıvı soğutmalı motoru ile maksimum 25.47 HP güç ve maksimum 21.50 Nm tork üretmektedir.',
    image: srk_2, 
  },
  {
    id: 3,
    name: 'R250',
    description: '248cc Çift silindir sıvı soğutmalı motoru ile maksimum 25.60 HP güç ve maksimum 23.00 Nm tork üretmektedir.',
    image: srk_3, 
  },
  {
    id: 4,
    name: 'SRK250RR',
    description: '249cc Çift silindir sıvı soğutmalı motoru ile maksimum 25.75 HP güç ve maksimum 24.10 Nm tork üretmektedir.',
    image: srk_4, 
  },
  {
    id: 5,
    name: 'SRK400RR',
    description: '400cc Çift silindir sıvı soğutmalı motoru ile maksimum 40.90 HP güç ve maksimum 37.00 Nm tork üretmektedir.',
    image: srk_5, 
  },
  {
    id: 6,
    name: 'SRK550RS',
    description: '554cc Çift silindir sıvı soğutmalı motoru ile maksimum 55.25 HP güç ve maksimum 54.00 Nm tork üretmektedir.',
    image: srk_6, 
  },
];

const MotorCycle = () => {
  return (
    <div className="motorcycle container mx-auto py-16">
      <div className="flex flex-wrap justify-center">
        {motors.map((motor) => (
          <MotorCard key={motor.id} motor={motor} />
        ))}
      </div>
    </div>
  );
};

export default MotorCycle;
