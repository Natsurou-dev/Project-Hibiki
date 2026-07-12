import { useState } from "react";
import flashcards from "./data/flashcards";

export default function CardTest() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const handleNextIndex = () => {
    if (index < flashcards.length - 1) { 
      setIndex(prev => prev + 1); 
      setFlipped(false);
    }
  };
  const handleFlip = () => { flipped ? setFlipped(false) : setFlipped(true); };


  


  return (
    <div className="h-screen border-solid border-4 border-blue-500 flex justify-center items-center">
      <div className="h-full w-200 border-solid border-4 border-red-500">
        <div onClick={handleFlip} className="font-sans text-3xl flex justify-center items-center h-3/4 w-full border-dashed border-4 border-yellow-500">
          {flipped ? flashcards[index].meaning : flashcards[index].word}
        </div>
        <div className="font-sans text-3xl flex justify-around items-center h-1/4 w-full border-dashed border-4 border-green-500">
          <button onClick={handleNextIndex}>Next</button>
        </div>
      </div>
    </div>
  );
}