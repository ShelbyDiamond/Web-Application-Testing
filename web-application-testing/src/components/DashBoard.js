import React, { useState } from "react"
import Display from "./Display"

const DashBoard = () => {
  const [strike, setStrike] = useState(0)
  const [ball, setBall] = useState(0)

  function Strike() {
    if (strike < 3) {
      setStrike(strike + 1)
    }
    if (strike === 3) {
      setStrike(0)
      setBall(0)
    }
  }

  function Balls(){
    if (ball < 4) {
      setBall(ball + 1)
    }
    if (ball === 4) {
      setBall(0)
      setStrike(0)
    }
  }
  function Foul() {
    if (strike < 2) {
      setStrike(strike + 1)
    }
  }

  function Hit() {
    setBall(0);
    setStrike(0);
  }
  return (
    <div>
      <Display strike={strike} ball={ball} />
      <button onClick={Strike}>Strike</button>
      <button onClick={Balls}>Ball</button>
      <button onClick={Foul}>Foul</button>
      <button onClick={Hit}>Hit</button>
    </div>
  )
}

export default DashBoard
