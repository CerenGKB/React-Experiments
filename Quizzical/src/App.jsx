import { useState } from 'react'
import React from 'react'
import './App.css'
import QuizPart from "./components/QuizPart"
import Button  from "./components/Button.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
    <div className="title">Quizzical</div>
    <div className="description">Quizzical is a trivia game where you try to 5 questions at a time</div>
    <Button>Start Game</Button>
    </main>
    
  )
}

export default App
