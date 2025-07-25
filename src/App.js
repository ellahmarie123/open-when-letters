import React, { useState, useRef, useEffect } from "react";
import LetterList from "./components/LetterList";
import LetterModal from "./components/LetterModal";
import letters from "./data/letters";
import "./App.css";
import Login from "./components/Login";

export default function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.6;
        audioRef.current.play().catch((err) => {
          console.log("Autoplay blocked by browser", err);
        });
      }
    };
    playAudio();
  }, []);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <h1>Open When Letters</h1>
          <LetterList letters={letters} onOpen={setSelectedLetter} />
          {selectedLetter && (
            <LetterModal
              letter={selectedLetter}
              onClose={() => setSelectedLetter(null)}
            />
          )}
          <audio ref={audioRef} src="/open-when-bg.mp3" loop />
        </>
      )}
    </div>
  );
}
