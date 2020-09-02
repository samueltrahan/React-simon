import React from "react";
import "./IndividualCircle.css";

const IndividualCircle = ({ color, blinkDuration, solutionSequence, roundBlinkCount }) => {
  


  return (
    <>
      <button type="submit" className={`${color}-circle`}>{color}</button>
    </>
  );
};

export default IndividualCircle;
