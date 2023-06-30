import React from "react"

function Die(props) {

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
}

    return (
  <div className="diceContainer" style={styles} onClick={props.holdDice}>
    <h2 className="numBox">{props.value}</h2>
  </div>
    )
  }
  
  export default Die