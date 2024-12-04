/* eslint-disable react/prop-types */
import NumberBtn from "./NumberBtn";

export default function Main({ dices, roll, hold, gameStatus }) {

    const diceElements = dices.map(dice => {
        return (
            <NumberBtn
                key={dice.id}
                id={dice.id}
                value={dice.value}
                isHeld={dice.isHeld}
                hold={() => hold(dice.id)}
            />
        )
    });

    return (
        <main className="main">
            <div className="nums">
                {diceElements}
            </div>
            <button onClick={roll} className="roll">{gameStatus ? "New Game" : "Roll"}</button>
        </main>
    )
}
