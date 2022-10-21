import React from "react";
import "./style.css"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

  const [dieData, setDieData] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {

      const isHeldArr = []
      dieData.forEach(element => {
        isHeldArr.push(element.isHeld)
      });

      setTenzies(isHeldArr.every(Boolean))

  },[dieData])

  function allNewDice(){
    const randomNumbers = []
    for (let index = 0; index < 10; index++) {
      randomNumbers.push(generateNewDie())
    }
    return randomNumbers
  }

  function generateNewDie() {
    return ({
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
    })
  }

  function rollDiceButton(){
    setDieData(prevdata => prevdata.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
  }

  function holdDice(diceId){
    setDieData(prevData => prevData.map(die => {
        return die.id === diceId ? {...die, isHeld: !die.isHeld} : die
      })
    )
  }

  const setDies = dieData.map(num => {
    return (
      <Die holdDice={() => holdDice(num.id)} key={num.id} value={num.value} isHeld={num.isHeld} />
    )
  })

  function restartGame(){
    setDieData(allNewDice()) 
  }

  return (
      <main>
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die-container"> 
          {setDies}
        </div>
        <button className="roleDice-btn" onClick={tenzies ? restartGame : rollDiceButton}>{tenzies ? "Restart Game" : "Roll Die"}</button>
      </main>
  )
}