import React, { useState } from "react";
import "./App.css";
import IndividualCircle from "./components/IndividualCircle";
import Score from "./components/Score";

export default function App() {
  const [solutionSequence, setSolutionSequence] = useState([]);
  const [solutionSequenceIndex, setSolutionSequenceIndex] = useState(0);
  let [roundBlinkCount, setRoundBlinkCount] = useState(0);
  let [roundInterval, setRoundInterval] = useState(0);
  const [blinkDuration, setBlinkDuration] = useState(1000);
  const [blinkGapDuration, setBlinkGapDuration] = useState(1500);
  const [currentRound, setCurrentRound] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [isWinner, setIsWinner] = useState(false);

  function generateSolutionSequence() {
    for (let i = 0; i < 1; i++) {
      solutionSequence.push(Math.floor(Math.random() * 4) + 1);
    }
  }

  function startGameSequence() {
    if (currentRound === 1) {
      generateSolutionSequence();
    }
    roundInterval = setInterval(playGameBlink, blinkGapDuration);
  }

  function playGameBlink() {
    handleBlink();
    setRoundBlinkCount++;
  }

  function resetGame() {
    setSolutionSequence({ solutionSequence: [] });
    setSolutionSequenceIndex({ solutionSequenceIndex: 0 });
    setRoundBlinkCount({ roundBlinkCount: 0 });
    setIsWinner({ isWinner: false });
    setCurrentRound({ currentScore: 1 });
    setCurrentScore({ currentScore: 0 });
    clearInterval(roundInterval);
  }

  function handleButtonBlink(buttonNum) {
    if (buttonNum === 1) {
      
    }
  }

  function handleBlink() {
    if (solutionSequence[roundBlinkCount] === 1) {
      handleButtonBlink(1);
    } else if (solutionSequence[roundBlinkCount] === 2) {
      handleButtonBlink(2)
    } else if(solutionSequence[roundBlinkCount] === 3) {
      handleButtonBlink(3)
    } else {
      handleButtonBlink(4)
    }
  }

  return (
    <div>
      <h1 className="simon-heading">Simon</h1>
      <div className="simon-btn-board">
        <IndividualCircle
          color={"red"}
          blinkDuration={blinkDuration}
          solutionSequence={solutionSequence}
          roundBlinkCount={roundBlinkCount}
        />

        <IndividualCircle
          color={"blue"}
          blinkDuration={blinkDuration}
          solutionSequence={solutionSequence}
          roundBlinkCount={roundBlinkCount}
        />

        <IndividualCircle
          color={"green"}
          blinkDuration={blinkDuration}
          solutionSequence={solutionSequence}
          roundBlinkCount={roundBlinkCount}
        />

        <IndividualCircle
          color={"yellow"}
          blinkDuration={blinkDuration}
          solutionSequence={solutionSequence}
          roundBlinkCount={roundBlinkCount}
        />
      </div>
      <button onClick={() => startGameSequence()}>Start Game</button>
      <button onClick={() => resetGame()}>Reset</button>

      <Score />
    </div>
  );
}
