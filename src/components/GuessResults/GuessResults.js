import React from "react";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map(({ id, name }) => (
        <p className="guess" key={id}>
          {name}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
