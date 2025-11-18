"use client";
import { useState } from "react";

export default function Accordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-redorange pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-bold flex justify-between items-center py-4"
      >
        {question}
        <span className="text-2xl">{open ? "▴" : "▾"}</span>
      </button>

      {open && <p>{answer}</p>}
    </div>
  );
}
