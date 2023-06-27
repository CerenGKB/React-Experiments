import React from "react"

function Die(props) {
    return (
  <div className="diceContainer">
    <h2 className="numBox">{props.value}</h2>
  </div>
    )
  }
  
  export default Die