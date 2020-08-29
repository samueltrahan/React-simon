import React from "react";
import "./IndividualCircle.css";

const IndividualCircle = ({ color }) => {
  return (
    <>
      <button className={`${color}-circle`}>{color}</button>
    </>
  );
};

export default IndividualCircle;
