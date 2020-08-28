import React from "react";
import "./IndividualCircle.css";

const IndividualCircle = ({ color }) => {
  return (
    <div className="simon-btn-board">
      <button className={`${color}-circle`}>{color}</button>
    </div>
  );
};

export default IndividualCircle;
