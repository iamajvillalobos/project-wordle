import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const guessResult = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={guessResult ? guessResult[num].letter : undefined}
          status={guessResult ? guessResult[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
