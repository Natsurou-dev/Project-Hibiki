import { useState } from "react";
import flashcards from "./data/flashcards";

export default function CardTest() {
  const [card, setCard] = useState(flashcards[0].word);
  const handleCardFlip = () => {
    setCard(flashcards[0].meaning);
  };

  return (
    <div className="h-screen border-solid border-4 border-blue-500 flex justify-center items-center">
      <div className="h-full w-200 border-solid border-4 border-red-500">
        <div onClick={handleCardFlip} className="font-sans text-3xl flex justify-center items-center h-3/4 w-full border-dashed border-4 border-yellow-500">
          {card}
        </div>
        <div className="font-sans text-3xl flex justify-around items-center h-1/4 w-full border-dashed border-4 border-green-500">
          <button >Don't Know</button>
          <button>Know</button>
          <button>Skip</button>
        </div>
      </div>
    </div>
  );
}