import React from 'react'
import './App.css'
import CircleButtons from './components/SimonBoard'

export default function App() {
  return (
    <div>
      <h1 className="simon-heading">Simon</h1>
      <CircleButtons />
    </div>
  )
}
