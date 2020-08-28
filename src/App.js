import React, {useState} from "react";
import "./App.css";
import IndividualCircle from "./components/IndividualCircle";
import Score from "./components/Score";

export default function App() {
    const [solutionSequence, setSolutionSequence] = useState([]);
    const [solutionSequenceIndex, setSolutionSequenceIndex] = useState(0);
    const [roundBlinkCount, setRoundBlinkCount] = useState(0);
    const [roundInterval, setRoundInterval] = useState(0);
    const [blinkDuration, setBlinkDuration] = useState(0); 
    const [blinkGapDuration, setBlinkGapDuration] = useState(0); 
    const [currentRound, setCurrentRound] = useState(1);
    const [currentScore, setCurrentScore] = useState(0);
    const [isWinner, setIsWinner] = useState(false);

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

