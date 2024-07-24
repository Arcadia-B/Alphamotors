import React from 'react';
import MotorCard from '../MotorCycle/MotorCard';
import vps from "../../assets/scooter/vps125pro.png";
import ltm from "../../assets/scooter/ltm125.png";
import vrs from "../../assets/scooter/vrs125.png";
import ltr from "../../assets/scooter/ltr125.png";
import neon from "../../assets/scooter/neon125.png";
import spontini from "../../assets/scooter/spontini110.png";

const scooters = [
  {
    id: 1,
    name: 'VPS125PRO',
    description: '124cc Tek silindir hava soğutmalı motoru ile maksimum 8.71 HP güç ve maksimum 10.00 Nm tork üretmektedir.',
    image: vps,
  },
  {
    id: 2,
    name: 'LTM125',
    description: '125cc Tek silindir hava soğutmalı motoru ile maksimum 11.00 HP güç ve maksimum 10.50 Nm tork üretmektedir.',
    image: ltm,
  },
  {
    id: 3,
    name: 'VRS125',
    description: '124cc Tek silindir hava soğutmalı motoru ile maksimum 7.00 HP güç ve maksimum 8.50 Nm tork üretmektedir.',
    image: vrs,
  },
  {
    id: 4,
    name: 'LTR125',
    description: '125cc Tek silindir hava soğutmalı motoru ile maksimum 11.00 HP güç ve maksimum 10.50 Nm tork üretmektedir.',
    image: ltr,
  },
  {
    id: 5,
    name: 'NEON125',
    description: '125cc Tek silindir hava soğutmalı motoru ile maksimum 8.5 HP güç ve maksimum 8.5 Nm tork üretmektedir.',
    image: neon,
  },
  {
    id: 6,
    name: 'SPONTINI110',
    description: '110cc Tek silindir hava soğutmalı motoru ile maksimum 7.00 HP güç ve maksimum 8.50 Nm tork üretmektedir.',
    image: spontini,
  },
];

const Scooter = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex flex-wrap justify-center">
        {scooters.map((scooter) => (
          <MotorCard key={scooter.id} motor={scooter} />
        ))}
      </div>
    </div>
  );
};

export default Scooter;
