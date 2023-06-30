import React from "react"
import Die from "/src/components/Die.jsx"
import './App.css'
import {nanoid} from "nanoid"

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  
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
  
/*   if there is specific number with isHeld:true state roll other
boxes' numbers
     We need to reach their id property
     var olan array i map 
     eger isheld varsa skip 

   */

  function rollDice(){
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
      die:
      generateNewDie()
    }))
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
  
 

  return (
  <main>
    <div className="game">
    {diceElements}
    </div>
    <button onClick={rollDice}>Roll</button>
   </main>
  )
}

export default App
