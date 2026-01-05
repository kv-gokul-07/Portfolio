"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import { useRef, useState } from "react";
import SkillLine from "../components/skillLine/SkillLine";
import Profile from '../../public/profile.jpg'; 
import TypingCursor from "../components/typingCursor/TypingCursor";

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 🔗 Later connect API / EmailJS here
    console.log("Form Data:", formData);

    setTimeout(() => {
      setLoading(false);
      setFormData({ name: "", email: "", comments: "" });
    }, 1000);
  };

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
        id="Work Experience"
        className="relative min-h-[180vh] lg:min-h-[240vh] bg-black text-white"
      >
        <div className="flex flex-col lg:flex-row items-center lg:sticky lg:top-0 lg:h-screen">
          {/* TITLE */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-16 py-8 lg:py-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
              Work Experience
            </h2>
          </div>

          {/* MOBILE VIEW */}
          <div className="flex flex-col gap-6 px-4 lg:hidden w-full">
            <div className="w-full h-72 bg-blue-700 rounded-xl shadow-xl flex items-center justify-center text-lg">
              Card One
            </div>

            <div className="w-full h-72 bg-green-700 rounded-xl shadow-xl flex items-center justify-center text-lg">
              Card Two
            </div>

            <div className="w-full h-72 bg-purple-700 rounded-xl shadow-xl flex items-center justify-center text-lg">
              Card Three
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden lg:flex w-full sm:w-1/2 relative h-screen sticky top-0 items-center justify-center">
            
            {/* CARD 1 */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                        w-100 h-150 bg-blue-700 rounded-xl shadow-xl
                        flex items-center justify-center text-xl"
            >
              Card One
            </div>

            {/* CARD 2 */}
            <motion.div
              style={{ y: card2Y, opacity: card2Opacity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                        w-100 h-150 bg-green-700 rounded-xl shadow-xl
                        flex items-center justify-center text-xl"
            >
              Card Two
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              style={{ y: card3Y, opacity: card3Opacity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30
                        w-100 h-150 bg-purple-700 rounded-xl shadow-xl
                        flex items-center justify-center text-xl"
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

      {/* CONTACT SECTION */}
      <section id="Contact" className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md sm:max-w-lg bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full rounded-lg bg-black/40 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg bg-black/40 border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm mb-1 text-gray-300">Comments</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                placeholder="Write your message..."
                required
                className="w-full rounded-lg bg-black/40 border border-gray-700 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg py-2 font-semibold disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;
