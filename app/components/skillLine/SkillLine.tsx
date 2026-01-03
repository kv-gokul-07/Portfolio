"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SkillLine = ({ text }: { text: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move only the text
  const x = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <div
      ref={ref}
      className="bg-gray-100 overflow-hidden py-6"
    >
      <motion.div
        style={{ x }}
        className="text-black text-xl lg:text-3xl font-semibold whitespace-nowrap"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default SkillLine;
