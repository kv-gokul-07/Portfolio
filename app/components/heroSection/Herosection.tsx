"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Profile from "../../../public/profile.jpg";
import TypingCursor from "../typingCursor/TypingCursor";

export default function HeroSection() {
  const [shadow, setShadow] = useState(30);
  const [isScrolling, setIsScrolling] = useState(false);
  const blinkRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------------- BLINK (IDLE) ---------------- */
  useEffect(() => {
    if (isScrolling) return;

    let grow = true;

    blinkRef.current = setInterval(() => {
      setShadow((prev) => {
        if (prev >= 70) grow = false;
        if (prev <= 30) grow = true;
        return grow ? prev + 2 : prev - 2;
      });
    }, 60);

    return () => {
      if (blinkRef.current) clearInterval(blinkRef.current);
    };
  }, [isScrolling]);

  /* ---------------- SCROLL CONTROL ---------------- */
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      const scrollY = window.scrollY;
      const intensity = Math.min(200, Math.max(40, scrollY * 0.5));
      setShadow(intensity);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY < 10) {
          setIsScrolling(false);
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center dark:bg-black">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* IMAGE + SHADOW */}
          <div className="relative w-40 h-40 lg:w-80 lg:h-80 flex items-center justify-center">
            <div
              className="absolute rounded-full transition-[box-shadow] duration-200 ease-out z-20"
              style={{
                width: "100%",
                height: "100%",
                boxShadow: `
                  0 0 ${shadow}px rgba(210, 185, 255, 0.9),
                  0 0 ${shadow * 2}px rgba(210, 185, 255, 0.9)
                `,
              }}
            />

            <div className="relative w-full h-full rounded-full overflow-hidden z-10">
              <Image
                src={Profile}
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Gokul V</h1>
            <TypingCursor text="Senior Software Engineer" />
          </div>
        </div>
      </section>
    </>
  );
}
