import React from "react"

const Display = (props) => {
  return (
    <div>
      <div>Strike: {props.strike}</div>
      <div>Balls: {props.ball}</div>
    </div>
  )
}

export default Display
