import React from 'react';
import MotorCycle from "../MotorCycle/MotorCycle"
import Scooter from "../Scooter/Scooter"

const About = () => {
  return (
    <div className="about-container">
      <MotorCycle /> 
      <Scooter />
    </div>
  );
};

export default About;
