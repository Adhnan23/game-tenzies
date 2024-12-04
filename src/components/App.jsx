import { useState } from "react";
import { nanoid } from "nanoid";
//import Confetti from 'react-confetti'
import Header from "./Header";
import Main from "./Main";

export default function App() {

  const [allDice, setAllDice] = useState(() => generateAllNewDice()) //if i provide in function i will run once
  const gameWon = allDice.every(dice => dice.isHeld) && 
  allDice.every(dice => dice.value === allDice[0].value)

  function hold(id){
    setAllDice(prev => 
      prev.map(dice => 
        dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
      )
    )
  }

  function rollDice() {
    if(!gameWon){
      setAllDice(prev =>
        prev.map(dice => 
          dice.isHeld ? dice : {...dice, value: Math.ceil(Math.random() * 6)}
        )
      )
    } else{
      setAllDice(generateAllNewDice);
    }
    
  }

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6), 
        isHeld: false
      }))
  }

  return (
    <div className="app">
      {/* {gameWon && <Confetti />} */}
      <Header />
      <Main
        dices={allDice}
        roll={rollDice}
        hold={hold}
        gameStatus={gameWon}
      />
    </div>
  )
}
