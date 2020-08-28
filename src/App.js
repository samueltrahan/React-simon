import React from "react";
import "./App.css";
import SimonBoard from "./components/SimonBoard";

class App extends React.Component {
  state = {
    solutionSequence: [],
    solutionSequenceIndex: 0,
    roundBlinkCount: 0,
    roundInterval: 0,
    blinkDuration: 0,
    blinkGapDuration: 0,
    currentRound: 1,
    currentScore: 0,
    isWinner: false,
  };

  generateSolutionSequence() {
    for (let i = 0; i < 20; i++) {
      this.state.solutionSequence.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log(this.state.solutionSequence)
  }

  render() {
    return (
      <div>
        <h1 className="simon-heading">Simon</h1>
        <SimonBoard />
      </div>
    );
  }
}

export default App;
