"use client";

import { useEffect, useState } from "react";

type TypingCursorProps = {
  text: string;
  speed?: number;
};

export default function TypingCursor({ text, speed = 120 }: TypingCursorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > text.length) return;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  const value = text.slice(0, index);
  const done = index > text.length;

  return (
    <h2 className="text-lg text-gray-600 w-60">
      {value}
      {!done && <span className="animate-pulse">_</span>}
    </h2>
  );
}
