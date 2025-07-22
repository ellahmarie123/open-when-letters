import React from "react";

export default function LetterList({ letters, onOpen }) {
  return (
    <div>
      {letters.map((letter) => (
        <button key={letters.id} onClick={() => onOpen(letter)}>
          {letter.title}
        </button>
      ))}
    </div>
  );
}
