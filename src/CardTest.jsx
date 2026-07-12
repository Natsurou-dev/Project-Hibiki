//you ought to know that, I think we're one and the same

import { useState } from "react";
import flashcards from "./data/flashcards";

export default function CardTest() {
  const [cards, setCards] = useState(flashcards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNextIndex = () => {
    if (index < cards.length - 1) { 
      setIndex(prev => prev + 1); 
      setFlipped(false);
    }
  };

  const handleFlip = () => { flipped ? setFlipped(false) : setFlipped(true); };

  const handleKnownClick = () => {
    if (!cards[index].learned) {cards[index].learned = true}
    handleNextIndex();
  };

  const handleUnknownClick = () => {
    if (cards[index].learned) {cards[index].learned = false}
    handleNextIndex();
  };

  const handleRestart= () => {
    setIndex(0);
    setFlipped(false);
  };

  


  return (
    <div className="h-screen border-solid border-4 border-blue-500 flex justify-center items-center">
      <div className="h-full w-200 border-solid border-4 border-red-500">
        <div onClick={handleFlip} className="font-sans text-3xl flex justify-center items-center h-3/4 w-full border-dashed border-4 border-yellow-500">
          {flipped ? cards[index].meaning : cards[index].word}
          <br/>
          {cards[index].learned ? "Learned" : "Not learned"}
        </div>
        <div className="font-sans text-3xl flex justify-around items-center h-1/4 w-full border-dashed border-4 border-green-500">
          <button onClick={handleUnknownClick}>I don't know</button>
          <button onClick={handleKnownClick}>I know</button>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </div>
  );
}