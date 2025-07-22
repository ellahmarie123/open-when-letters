import React from "react";
import "../../src/App.css";

export default function LetterList({ letters, onOpen }) {
  return (
    <div className="letter-grid">
      {letters.map((letter) => (
        <button
          key={letters.id}
          className="letter-button"
          onClick={() => onOpen(letter)}
        >
          {letter.title}
        </button>
      ))}
    </div>
  );
}
