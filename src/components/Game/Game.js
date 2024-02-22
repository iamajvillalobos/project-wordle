import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [gameResult, setGameResult] = React.useState("running");
  const [guessResults, setGuessResults] = React.useState([]);

  function handleGuessResults(guess) {
    const nextGuessResults = [...guessResults, guess];
    setGuessResults(nextGuessResults);

    if (guess.toUpperCase() === answer) {
      setGameResult("won");
    } else if (nextGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameResult("lost");
    }
  }

  return (
    <>
      <GuessResults results={guessResults} answer={answer} />
      <GuessInput
        gameResult={gameResult}
        handleGuessResults={handleGuessResults}
      />
      {gameResult === "won" && <WonBanner numOfGuesses={guessResults.length} />}
      {gameResult === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
