import React from "react";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map((name, index) => (
        <p key={index} className="guess">
          {name}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
