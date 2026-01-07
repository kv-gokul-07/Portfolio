"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Profile from "../../public/profile.jpg";
import TypingCursor from "../components/typingCursor/TypingCursor";
import ExperienceCard from "../components/experienceCard/ExperienceCard";

const Page = () => {
  /* -------------------- REFS -------------------- */
  const workRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  /* -------------------- FORM STATE -------------------- */
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form Data:", formData);

    setTimeout(() => {
      setLoading(false);
      setFormData({ name: "", email: "", comments: "" });
    }, 1000);
  };

  /* -------------------- WORK EXPERIENCE SCROLL -------------------- */
  const { scrollYProgress } = useScroll({
    target: workRef,
    offset: ["start start", "end end"],
  });

  const card2Y = useTransform(scrollYProgress, [0.25, 0.4], [220, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

  const card3Y = useTransform(scrollYProgress, [0.5, 0.65], [220, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  /* -------------------- SKILLS SCROLL -------------------- */
  const { scrollYProgress: skillsScroll } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"],
  });

  const skillsBgPosition = useTransform(
    skillsScroll,
    [0, 1],
    ["100% 100%", "0% 0%"]
  );

  const skillsTextColor = useTransform(
    skillsScroll,
    [0.4, 0.8],
    ["#ffffff", "#000000"]
  );

  /* -------------------- RENDER -------------------- */
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="flex items-center justify-center min-h-[calc(100vh-80px)]"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-40 h-40 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            <Image
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Gokul V</h1>
            <TypingCursor text="Senior Software Engineer" />
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section
        ref={workRef}
        id="work"
        className="relative min-h-[180vh] lg:min-h-[240vh] bg-black text-white"
      >
        <div className="flex flex-col lg:flex-row items-center lg:sticky lg:top-0 lg:h-screen">
          <div className="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-16 py-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Work Experience</h2>
          </div>

          {/* MOBILE */}
          <div className="flex flex-col gap-6 px-4 lg:hidden w-full">
            <div className="h-auto bg-blue-700 rounded-xl">
              <ExperienceCard
                role="Senior Software Engineer"
                company="Reverie Language Technologies"
                duration="Dec 2024 – Present"
                location="Bengaluru · On-site"
                responsibilities={[
                  "Contributed to core feature development for the document translation product (Prabandhak)",
                  "Built scalable language translation features with high accuracy and performance",
                  "Collaborated with PMs, QA, and developers to meet business requirements",
                  "Improved workflows and enhanced document translation capabilities",
                ]}
                tech={["MERN", "Microservices", "REST APIs"]}
              />
            </div>

            <div className="h-auto bg-green-700 rounded-xl">
              <ExperienceCard
                role="Software Engineer"
                company="Gloify"
                duration="Sep 2022 – Nov 2024"
                location="Bangalore · On-site"
                responsibilities={[
                  "Led end-to-end development of scalable web applications across fintech and B2B/B2C domains",
                  "Owned the full development lifecycle from requirements to production delivery",
                  "Worked closely with clients and business analysts on-site",
                  "Mentored junior developers and enforced code quality standards",
                ]}
                 tech={[
                  "React",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Microservices",
                ]}
              />
            </div>

            <div className="h-auto bg-purple-700 rounded-xl">
              <ExperienceCard
                role="Software Engineer"
                company="good userxperience"
                duration="Aug 2020 – Sep 2022"
                location="Bangalore Urban · On-site"
                responsibilities={[
                  "Started career as a frontend developer building responsive UIs",
                  "Developed applications using React, Angular, JavaScript, and jQuery",
                  "Worked closely with internal teams to deliver pixel-perfect UI",
                  "Interacted with clients to gather feedback and refine UI",
                ]}
                tech={["React", "Angular", "JavaScript", "HTML", "CSS"]}
              />
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex w-1/2 relative h-screen sticky top-0 items-center justify-center">
            {/* CARD 1 */}
            <div className="absolute z-10 w-100 h-150 bg-blue-700 rounded-xl overflow-y-auto">
              <ExperienceCard
                role="Senior Software Engineer"
                company="Reverie Language Technologies"
                duration="Dec 2024 – Present"
                location="Bengaluru · On-site"
                highlight="Currently Working"
                responsibilities={[
                  "Built core features for the document translation product Prabandhak",
                  "Developed scalable language translation tools with high accuracy",
                  "Worked closely with PMs, QA, and engineers for feature delivery",
                  "Improved workflows and document translation performance",
                ]}
                tech={["MERN", "Microservices", "REST APIs"]}
              />
            </div>

            <motion.div
              style={{ y: card2Y, opacity: card2Opacity }}
              className="absolute z-20 w-100 h-150 bg-green-700 rounded-xl overflow-y-auto"
            >
              <ExperienceCard
                role="Software Engineer"
                company="Gloify"
                duration="Sep 2022 – Nov 2024"
                location="Bangalore · On-site"
                highlight="Team Lead Role"
                responsibilities={[
                  "Led end-to-end development of fintech and B2B/B2C platforms",
                  "Owned complete development lifecycle from requirements to production",
                  "Collaborated with clients and business analysts on-site",
                  "Mentored junior developers and enforced coding standards",
                ]}
                tech={[
                  "React",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Microservices",
                ]}
              />
            </motion.div>

            <motion.div
              style={{ y: card3Y, opacity: card3Opacity }}
              className="absolute z-30 w-100 h-150 bg-purple-700 rounded-xl overflow-y-auto"
            >
              <ExperienceCard
                role="Software Engineer"
                company="good userxperience"
                duration="Aug 2020 – Sep 2022"
                location="Bangalore Urban · On-site"
                highlight="Career Foundation"
                responsibilities={[
                  "Started career as a frontend developer building responsive UIs",
                  "Worked with React, Angular, JavaScript, and jQuery",
                  "Delivered pixel-perfect UI components with design teams",
                  "Interacted with clients to refine UX based on feedback",
                ]}
                tech={["React", "Angular", "JavaScript", "HTML", "CSS"]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        ref={skillsRef}
        id="skills"
        className="
          bg-black
          px-4
          py-10          /* controls top & bottom spacing */
          h-[70vh]       /* desktop height */
          sm:h-[65vh]
          md:h-[60vh]
          lg:h-[65vh]
          xl:h-[200]
          flex
          flex-column
          justify-center
          items-center
        "
      >
        <div className="max-w-6xl w-full flex flex-wrap justify-center gap-4">
          {[
            "HTML",
            "CSS",
            "SCSS",
            "JavaScript",
            "TypeScript",
            "React JS",
            "Next.js",
            "Three.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "Moleculer.js",
            "MongoDB",
            "REST APIs",
            "Microservices",
            "Git",
            "Bitbucket",
            "Postman",
            "Docker",
            "CI/CD",
            "Kubernetes",
            "System Design",
          ].map((skill, index) => (
            <motion.div
              key={index}
              style={{
                backgroundImage:
                  "linear-gradient(135deg, white 0%, white 50%, transparent 50%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "200% 200%",
                backgroundPosition: skillsBgPosition,
                color: skillsTextColor,
              }}
              className="
    px-5 py-3
    border border-current
    rounded-[20%]
    text-center
    text-sm sm:text-base
    overflow-hidden
  "
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 bg-black"
      >
        <div className="w-full max-w-lg bg-white/5 backdrop-blur-md rounded-2xl p-6 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-black/40 border border-gray-700 px-4 py-2 rounded-lg"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-black/40 border border-gray-700 px-4 py-2 rounded-lg"
            />

            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={4}
              placeholder="Comments"
              className="bg-black/40 border border-gray-700 px-4 py-2 rounded-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
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
