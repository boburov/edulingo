"use client";
import { useState } from "react";

export default function ValidationForm() {
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  return (
    <div className="space-y-5 flex flex-col items-center">
      <form className="space-y-2">
        <label htmlFor="password">Paro'lni kiriting*</label>
        <div className="flex gap-3">
          <input
            type={show ? "text" : "password"}
            className="basic_field"
            placeholder="Paro'l"
            autoFocus
          />
          <button type="submit" className="basic_button">
            Submit
          </button>
        </div>
      </form>
      <button
        className="cursor-pointer base_text"
        onClick={() => setShow(!show)}
      >
        {show ? "Paro'lni yashirish" : "Paro'lni korsatish"}
      </button>
    </div>
  );
}
