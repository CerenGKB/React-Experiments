import React, { useRef, useEffect } from "react";
import Die from "./components/Die";
import "./App.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import swal from 'sweetalert'


function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [isFirstSelection, setIsFirstSelection] = React.useState(true);

 

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld === true);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
    } 
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => (die.isHeld ? die : generateNewDie()))
      );
    } else {
      restartGame();
    }
  }

  function hold(id) {
    const selectedDie = dice.find(die => die.id === id);
    
    if (!isFirstSelection) {
      if (selectedValue !== selectedDie.value) {
       swal("Your selection does not match the original selection. The game will restart.");
        restartGame();
      } else {
        const updatedList = dice.map(die => {
          if (die.id === id) {
            return {
              ...die,
              isHeld: true
            };
          }
          return die;
        });
  
        setDice(updatedList);
      }
    } else {
      const updatedList = dice.map(die => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: true
          };
        }
        return die;
      });
  
      setSelectedValue(selectedDie.value);
      setDice(updatedList);
      setIsFirstSelection(false);
    }
  }

  const diceElements = dice.map((die) => (
    <Die
      isHeld={die.isHeld}
      key={die.id}
      value={die.value}
      id={die.id}
      holdDice={() => hold(die.id)}
    />
  ));


  const width = document.getElementsByClassName('game').clientWidth
  const height = document.getElementsByClassName('game').clientHeight


  function restartGame() {
    setTenzies(false);
    setSelectedValue(null);
    setIsFirstSelection(true);
    setDice(allNewDice());
  }


  return (
    <main>
       {tenzies && <Confetti
     width={width}
     height={height}
     />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls. You can't undo your selection. If you press a different number from your first selection, the game will restart.
      </p>
      <div className="game" >
        {diceElements}
      </div>
      <button onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;