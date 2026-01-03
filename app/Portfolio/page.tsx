"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import { useRef } from "react";
import SkillLine from "../components/skillLine/SkillLine";
import Profile from '../../public/profile.jpg'; 
import TypingCursor from "../components/typingCursor/TypingCursor";

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Scroll animations
  const card2Y = useTransform(scrollYProgress, [0.25, 0.4], [220, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

  const card3Y = useTransform(scrollYProgress, [0.5, 0.65], [220, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="flex justify-center items-center min-h-[calc(100vh-80px)]"
        id="home"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20">
          <div className="w-40 h-40  lg:w-80 lg:h-80 rounded-full" >
            <Image style={{objectFit: "cover"}} className="w-40 h-40  lg:w-80 lg:h-80 bg-blue-500 rounded-full" src={Profile} alt="Profile" />
            </div>

          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Gokul V</h1>
            <TypingCursor text="Senior Software Engineer" />         
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
      <section
        ref={ref}
        className="relative min-h-[180vh] lg:min-h-[240vh] bg-black text-white"
      >
        <div className="flex flex-col lg:flex-row items-center lg:sticky lg:top-0 lg:h-screen">
          {/* TITLE */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-16 py-8 lg:py-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
              Work Experience
            </h2>
          </div>

          {/* CARDS */}
          <div className="w-full lg:w-1/2 relative h-[70vh] lg:h-screen lg:sticky lg:top-0 flex items-center justify-center">
            {/* CARD 1 */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                         w-52 h-68 sm:w-56 sm:h-72 lg:w-100 lg:h-150
                         bg-blue-700 rounded-xl shadow-xl
                         flex items-center justify-center text-base lg:text-xl"
            >
              Card One
            </div>

            {/* CARD 2 */}
            <motion.div
              style={{ y: card2Y, opacity: card2Opacity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                         w-52 h-68 sm:w-56 sm:h-72 lg:w-100 lg:h-150
                         bg-green-700 rounded-xl shadow-xl
                         flex items-center justify-center text-base lg:text-xl"
            >
              Card Two
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              style={{ y: card3Y, opacity: card3Opacity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30
                         w-52 h-68 sm:w-56 sm:h-72 lg:w-100 lg:h-150
                         bg-purple-700 rounded-xl shadow-xl
                         flex items-center justify-center text-base lg:text-xl"
            >
              Card Three
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative h-dvh overflow-hidden flex items-center justify-center">
      <div className="absolute top-[20%] rotate-15 w-auto left-[-10%] z-index-3">
        <SkillLine text="HTML • CSS • SCSS • React JS • Next.js • JavaScript • TypeScript • Three.Js • Tailwind • HTML • CSS • SCSS • React JS" />
      </div>

      <div className="absolute top-[50%] -rotate-25 w-auto">
        <SkillLine text="Node.js • Express.js • Molecular.Js • MongoDB • REST APIs • Microservices• MongoDB • REST APIs • Microservices" />
      </div>

      <div className="absolute top-[70%] w-[140%] rotate-25 w-auto z-index-2">
        <SkillLine text="GIT • BitBucket • Postman • Docker • CI/CD • Kubernates • System Design • GIT • BitBucket • Postman • Docker" /> 
      </div>
      {/* LINE 1 */}
      {/* <motion.div */}
        
      {/* </motion.div> */}

      {/* LINE 2 */}
      <motion.div
        // style={{ x: rightToLeft, rotate: 6 }}
        
      >
        
      </motion.div>

      {/* LINE 3 */}
      <motion.div
        // style={{ x: leftToRight, rotate: -4 }}
       
      >
        
      </motion.div>
    </section>
    </>
  );
};

export default Page;
