import { useState } from 'react'
import React from 'react'
import './App.css'
import QuizPart from "./components/QuizPart"
import Button  from "./components/Button.jsx"


function App() {
  
  const [displayComponent, setDisplayComponent] = useState(false)

  function handleState(newState){
    setDisplayComponent(newState)
  }

  return (
    <div>
    {!displayComponent && <main>
    
    <div className="title">Quizzical</div>
   <div className="description">Quizzical is a trivia game where you try to 5 questions at a time</div>
    <Button onStateChange={handleState}>Start</Button>
      
    
    </main>}
    <div className='questions'>
    {displayComponent && <QuizPart/>}
    </div>
    </div>
  )
}

export default App
