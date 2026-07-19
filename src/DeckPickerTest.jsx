import { use, useState } from "react";
import flashcards from "./data/flashcards";

export default function DeckPickerTest() {

  return (
   <div className="bg-[rgb(143,139,139)] flex h-screen p-4 ">
    <div className="mt-14 flex grow max-w-full border border-2-black">
      <div className="flex w-52 border border-2-black">
        <ul className="grow flex flex-col border border-2-black">
          <li className="active:bg-green-700 hover:bg-red-700 p-4 odd:bg-red-100 even:bg-white">Main Japanese</li>
          <li className="active:bg-green-700 hover:bg-red-700 p-4 odd:bg-red-100 even:bg-white">JLPT 3</li>
          <li className="active:bg-green-700 hover:bg-red-700 p-4 odd:bg-red-100 even:bg-white">Manga Words</li>
          <li className="active:bg-green-700 hover:bg-red-700 p-4 odd:bg-red-100 even:bg-white">French 2</li>
          <li className="active:bg-green-700 hover:bg-red-700 p-4 odd:bg-red-100 even:bg-white">Japanese slang</li>
          <li className="active:bg-green-700 hover:bg-red-700 p-4 odd:bg-red-100 even:bg-white">Spanish class</li>
        </ul>
      </div>
      <div className="grow max-w-full">right display dash</div>
    </div>
   </div>
  );
}