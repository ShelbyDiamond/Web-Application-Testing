import React, {useState} from "react"

const DashBoard = () => {
  const [strike, setStrike] = useState(0)
  const [ball, setBall] = useState(0)

  function Foul() {
    if (ball < 2 ){
      setStrike(strike + 1)
    }
  }
  
  function Hit(){
    setBall(ball ===0);
    setStrike(strike === 0);
  }
  return (
    <div>Foul: {strike}</div>
    <div>Hit: {ball}</div>
    <button onclick={() => setStrike[strike + 1]}>Strike</button>
    <button onclick={() => setBall[ball + 1]}>Ball</button>
    <button onclick={() => setFoul[foul + 2]}></button>
    <button onclick={() => setHit[hit + 3]}>Hit</button>
    )

}

export default DashBoard
