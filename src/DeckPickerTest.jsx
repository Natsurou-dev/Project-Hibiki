import { use, useState } from "react";
import flashcards from "./data/flashcards";
import flashcards_2 from "./data/flashcards_2";

export default function DeckPickerTest() {

  return (
    <div className="font-sans text-lg p-6 bg-linear-to-r from-blue-500 via-blue-300 to-blue-600 flex flex-col h-screen">
      <div className="bg-white rounded-2xl w-full h-full border-2 border-black flex flex-col">
        <div className="flex justify-left items-center  p-2 pl-4 border-b-2 border-black">
          <img src="src/assets/arrow-left.svg" className="h-8" />
        </div>
        <div className="grow flex">
          <div className="w-50 border-r-2 border-black">
            <div className="p-2 text-xl text-center border-b-2 border-black">Decks</div>
            <div className="border-b-2 border-black">
              <ul className="text-base">
                <li className="hover:bg-blue-400 p-2 active:bg-blue-200">Main Japanese</li>
                <li className="hover:bg-blue-400 p-2 active:bg-blue-200">JLPT 3</li>
                <li className="hover:bg-blue-400 p-2 active:bg-blue-200">Japanese Slang</li>
                <li className="hover:bg-blue-400 p-2 active:bg-blue-200">Anime words</li>
                <li className="hover:bg-blue-400 p-2 active:bg-blue-200">Spanish 3</li>
                <li className="hover:bg-blue-400 p-2 active:bg-blue-200">French import Deck</li>
              </ul>
            </div>
            <div className="text-base border-b-2 border-black hover:text-blue-400 p-2 active:text-blue-200">
              Create deck +
            </div>
          </div>
          <div className="grow">Card Viewer</div>
        </div>
      </div>
    </div>
  );
}