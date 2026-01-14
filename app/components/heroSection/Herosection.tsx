"use client";

import Image from "next/image";
import Profile from "../../../public/profile.jpg";
import TypingCursor from "../typingCursor/TypingCursor";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [flipped, setFlipped] = useState(false);

  // Detect scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (prev === undefined) return;

    if (latest > prev) setFlipped(true);    // scrolling down
    else setFlipped(false);                 // scrolling up
  });

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-[100vh] flex items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* PROFILE FLIP */}
        <div className="perspective">
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-40 h-40 lg:w-80 lg:h-80 preserve-3d"
          >
            {/* FRONT */}
            <div className="absolute inset-0 backface rounded-full overflow-hidden">
              <Image
                src={Profile}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            {/* BACK */}
            <div
              className="
                absolute inset-0 backface rotate-y-180 rounded-full
                bg-gradient-to-br from-gray-900 via-gray-800 to-black
                border-2 border-emerald-400
                flex flex-col items-center justify-center
                text-emerald-300
                shadow-[0_0_30px_rgba(16,185,129,0.35)]
              "
            >
              <span className="text-sm lg:text-base tracking-wide">
                Dont worry its Me
              </span>
            </div>
          </motion.div>
        </div>

        {/* TEXT */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Gokul V</h1>
          <TypingCursor text="Senior Software Engineer" />
        </div>
      </div>
    </section>
  );
}
