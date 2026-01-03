"use client";

import { useEffect, useState } from "react";

type TypingCursorProps = {
  text: string;
  speed?: number; // ms per letter
};

export default function TypingCursor({ text, speed = 120 }: TypingCursorProps) {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);


    useEffect(() => {
    if (index > text.length) return;

    const timeout = setTimeout(() => {
      setValue(text.slice(0, index));
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return (
        <h2 className="text-lg text-gray-600">
            {value}
            <span className="animate-pulse">_</span>
         </h2>
  );
}
