import React from "react";

function GuessInput({ handleGuessResults, gameResult }) {
  const [input, setInput] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleGuessResults(input);
    setInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={gameResult != "running"}
        value={input}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
