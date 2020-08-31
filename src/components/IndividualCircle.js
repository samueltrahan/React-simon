import React from "react";
import "./IndividualCircle.css";

const IndividualCircle = ({ color, blinkDuration, solutionSequence, roundBlinkCount }) => {
  


  return (
    <>
      <button className={`${color}-circle`}>{color}</button>
    </>
  );
};

export default IndividualCircle;
