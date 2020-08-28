import React from "react";
import "./App.css";
import IndividualCircle from "./components/IndividualCircle";
import Score from "./components/Score";

export default function App() {
    // solutionSequence: [],
    // solutionSequenceIndex: 0,
    // roundBlinkCount: 0,
    // roundInterval: 0,
    // blinkDuration: 0,
    // blinkGapDuration: 0,
    // currentRound: 1,
    // currentScore: 0,
    // isWinner: false,


    return (
      <div>
        <h1 className="simon-heading">Simon</h1>

        <IndividualCircle color={"red"} />

        <IndividualCircle color={"blue"} />

        <IndividualCircle color={"yellow"} />

        <IndividualCircle color={"green"} />

        <Score />
      </div>
    );
  }

