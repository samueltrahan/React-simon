import React, { useState } from "react";
import "./App.css";
import IndividualCircle from "./components/IndividualCircle";
import Score from "./components/Score";

export default function App() {
  const [solutionSequence, setSolutionSequence] = useState([]);
  const [solutionSequenceIndex, setSolutionSequenceIndex] = useState(0);
  const [roundBlinkCount, setRoundBlinkCount] = useState(0);
  const [roundInterval, setRoundInterval] = useState(0);
  const [blinkDuration, setBlinkDuration] = useState(1000);
  const [blinkGapDuration, setBlinkGapDuration] = useState(1500);
  const [currentRound, setCurrentRound] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [isWinner, setIsWinner] = useState(false);

  function generateSolutionSequence() {
    for (let i = 0; i < 20; i++) {
      setSolutionSequence({
        solutionSequence: Math.floor(Math.random() * 4) + 1,
      });
    }
  }

  function startGameSequence() {
    if (currentRound === 1) {
      generateSolutionSequence();
    }
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

  return (
    <div>
      <h1 className="simon-heading">Simon</h1>
      <div className="simon-btn-board">
        <IndividualCircle color={"red"} blinkDuration={blinkDuration} solutionSequence={solutionSequence} roundBlinkCount={roundBlinkCount}/>

        <IndividualCircle color={"blue"} />

        <IndividualCircle color={"green"} />

        <IndividualCircle color={"yellow"} />
      </div>
      <button onClick={() => startGameSequence()}>Start Game</button>
      <button onClick={() => resetGame()}>Reset</button>

      <Score />
    </div>
  );
}
