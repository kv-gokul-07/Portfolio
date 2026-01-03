"use client";
import { useEffect, useState } from "react";

const SIZE = 200;
const HALF = SIZE / 2;

export default function Cube3D() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setAngle((a) => a - 90);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-start bg-black pt-5">
      <div
        className="perspective-[800px]"
        style={{ width: SIZE, height: SIZE }}
      >
        <div
          className="relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 ease-in-out"
          style={{ transform: `rotateX(${angle}deg)` }}
        >
          {/* FRONT */}
          <div
            className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center backface-hidden"
            style={{ transform: `translateZ(${HALF}px)` }}
          >
            Senior Software Engineer
          </div>

          {/* BACK */}
          <div
            className="absolute w-full h-full bg-red-500 text-white flex items-center justify-center backface-hidden"
            style={{ transform: `rotateY(180deg) translateZ(${HALF}px)` }}
          >
            Senior Software Engineer
          </div>

          {/* TOP */}
          <div
            className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center backface-hidden"
            style={{ transform: `rotateX(90deg) translateZ(${HALF}px)` }}
          >
            MERN STACK
          </div>

          {/* BOTTOM */}
          <div
            className="absolute w-full h-full bg-yellow-500 text-black flex items-center justify-center backface-hidden"
            style={{ transform: `rotateX(-90deg) translateZ(${HALF}px)` }}
          >
            MERN STACK
          </div>

          {/* LEFT ✅ */}
          <div
            className="absolute w-full h-full bg-purple-500 text-white flex items-center justify-center backface-hidden"
            style={{ transform: `rotateY(-90deg) translateZ(${HALF}px)` }}
          >
            LEFT
          </div>

          {/* RIGHT ✅ */}
          <div
            className="absolute w-full h-full bg-pink-500 text-white flex items-center justify-center backface-hidden"
            style={{ transform: `rotateY(90deg) translateZ(${HALF}px)` }}
          >
            RIGHT
          </div>
        </div>
      </div>
    </div>
  );
}
