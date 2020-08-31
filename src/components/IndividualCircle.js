import React from "react";
import "./IndividualCircle.css";

const IndividualCircle = ({ color, blinkDuration, solutionSequence, roundBlinkCount }) => {
  

  const redSimonButton = document.querySelector('red-circle');
  function handleButtonBlink(buttonNum) {
    if(buttonNum === 2) {
      redSimonButton.style.backgroundColor = 'rgb(230, 97, 97)';
      setTimeout(function() {
        redSimonButton.style.backgroundColor = 'rgb(163, 10, 10)'
      }, blinkDuration)
    }
  }

  function handleBlink() {
    if(solutionSequence[roundBlinkCount] === 1) {
      handleButtonBlink(1)
    }
  }


  return (
    <>
      <button className={`${color}-circle`}>{color}</button>
    </>
  );
};

export default IndividualCircle;
