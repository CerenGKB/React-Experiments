import React from "react"


function Die(value) {
    
    const dice = [1,2,3,4,5,6,5,4,3,4]
    const listDice = dice.map(num => <div class ="numBox">{num}</div>)

    return (
  <div class="diceContainer">
    {listDice}
  </div>
    )
  }
  
  export default Die