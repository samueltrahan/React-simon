import React from 'react'
import './App.css'
import CircleButtons from './components/SimonBoard'

class App extends React.Component() {
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
  }

  render() {
    return (
      <div>
        <h1 className="simon-heading">Simon</h1>
        <CircleButtons />
      </div>
    )
  }
}

export default App
