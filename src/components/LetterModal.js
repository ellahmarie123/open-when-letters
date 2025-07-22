import React from "react";
import "../../src/App.css";

export default function LetterModal({ letter, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{letter.title}</h2>
        <p>{letter.content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
