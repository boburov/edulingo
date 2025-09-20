"use client";
import { useState } from "react";

export default function NewVocForm() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");

  return (
    <form className="w-full space-y-5">
      <div className="flex justify-between items-center gap-5">
        <div className="space-y-1 flex flex-col flex-1">
          <label htmlFor="word">So'z</label>
          <input
            type="text"
            name="word"
            id="word"
            required
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="global_input"
          />
        </div>
        <div className="space-y-1 flex flex-col flex-1">
          <label htmlFor="translation">Tarjimasi</label>
          <input
            type="text"
            name="translation"
            id="translation"
            required
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            className="global_input"
          />
        </div>
      </div>
      <button className="basic_button">So'zni qo'shish</button>
    </form>
  );
}
