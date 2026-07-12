//you ought to know that, I think we're one and the same

import { use, useState } from "react";
import flashcards from "./data/flashcards";

export default function CardTest() {
  const [cards, setCards] = useState(flashcards);
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const handleNextIndex = () => {
    let nextIndex = index + 1;
    if (nextIndex < cards.length) {
      for (nextIndex; nextIndex < cards.length; nextIndex++) {
        if (!cards[nextIndex].learned) { 
          setIndex(nextIndex); 
          break;
        }
      }
      setFlip(false);
    }
  }

  const handleFlip = () => { flip ? setFlip(false) : setFlip(true); }

  const handleRestart = () => { 
    for (let i = 0; i < cards.length - 1; i++) {
      if (!cards[i].learned) { 
        setIndex(i); 
        break;
      }
    }
    setFlip(false);
  }

  const handleKnow = () => { 
    cards[index].learned = true; 
    handleNextIndex();
  }

  const handleDontKnow = () => { 
    cards[index].learned = false; 
    handleNextIndex();
  }


  return (
    <div className="h-screen border-solid border-4 border-blue-500 flex justify-center items-center">
      <div className="h-full w-200 border-solid border-4 border-red-500">
        <div onClick={handleFlip} className="font-sans text-3xl flex justify-center items-center h-3/4 w-full border-dashed border-4 border-yellow-500">
          {flip ? cards[index].meaning : cards[index].word}
          <br />
          {cards[index].learned ? "Learned" : "Not learned"}
          <br />
          {cards[index].id}
        </div>
        <div className="font-sans text-3xl flex justify-around items-center h-1/4 w-full border-dashed border-4 border-green-500">
          <button onClick={handleDontKnow}>I don't know</button>
          <button onClick={handleKnow}>I know</button>
          <button onClick={handleRestart}>Restart Cards</button>
        </div>
      </div>
    </div>
  );
}