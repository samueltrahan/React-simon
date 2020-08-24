import React from "react";
import './IndividualCircle.css';

const IndividualCircle = () => {
  return (
    <div className="simon-btn-board">
      <button className="red-circle">Red</button>
      <button className="blue-circle">Blue</button>
      <button className="green-circle">Green</button>
      <button className="yellow-circle">Yellow</button>
    </div>
  )
};

export default IndividualCircle;
