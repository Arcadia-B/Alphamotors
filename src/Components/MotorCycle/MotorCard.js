import React, { useState } from 'react';

const MotorCard = ({ motor }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-24 mx-6">
      <img className="w-full" src={motor.image} alt={motor.name} />
      <div className="p-4">
        <div className="font-bold text-xl mb-2 text-center">{motor.name}</div>
        <p className="text-gray-700 text-base mb-2 text-center">
          {showMore ? motor.description : `${motor.description.substring(0, 50)}...`}
        </p>
        <div className="text-center">
          <button
            className="text-blue-500 hover:text-blue-700 text-sm"
            onClick={toggleShowMore}>
            {showMore ? 'Daha az göster' : 'Daha fazla göster'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotorCard;
