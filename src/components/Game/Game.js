import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function handleGuessResults(guess) {
    const nextGuessResults = [...guessResults];

    const newGuess = {
      id: crypto.randomUUID(),
      name: guess,
    };

    nextGuessResults.push(newGuess);
    setGuessResults(nextGuessResults);
  }

  return (
    <>
      <GuessResults results={guessResults} />
      <GuessInput handleGuessResults={handleGuessResults} />
    </>
  );
}

export default Game;
