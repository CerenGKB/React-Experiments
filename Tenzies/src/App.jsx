import React from "react"
import Die from "/src/components/Die.jsx"
import './App.css'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'



function App() {

  const [dice, setDice] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState(false)
   

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld ===true)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
  }
  }


  function allNewDice(){
    const newDice = []
    for(let i= 0 ; i < 10 ; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }
  
  function rollDice(){
    if(!tenzies){
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
      die:
      generateNewDie()
    }))
  }else {
    setTenzies(false)
    setDice(allNewDice)
  }
  }
  
  function hold(id){
    const updatedList = dice.map((dice) => {
      if(dice.id === id){
        return {
          ...dice,
          isHeld :true
        }
      }
      return dice
    })
    setDice(updatedList)

  }

  const diceElements = dice.map(die => 
  <Die 
  isHeld={die.isHeld} 
  key={die.id} 
  value={die.value}
  id={die.id}
  holdDice={() => hold(die.id)}
  />)
  
  const width = document.getElementsByClassName('game').clientWidth
  const height = document.getElementsByClassName('game').clientHeight


  return (
  <main>
     {tenzies && <Confetti
     width={width}
     height={height}
     />}
      <h1 className="title">Tenzies</h1>
    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className="game">
    {diceElements}
    </div>
    <button onClick={rollDice}>
     {tenzies ? "New Game" : "Roll"}
      </button>
   </main>
  )
}

export default App
