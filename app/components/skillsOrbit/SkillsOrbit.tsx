"use client";

import { useEffect, useState } from "react";

/* ---------------- DATA ---------------- */

const skills = {
  frontend: [
    "HTML", "CSS", "SCSS", "JavaScript", "TypeScript",
    "React JS", "Next.js", "Three.js",
    "Tailwind CSS", "Material UI", "Bootstrap"
  ],
  backend: [
    "Node.js", "Express.js", "Moleculer.js",
    "REST APIs", "MongoDB", "Microservices",
  ],
  other: [
    "Git", "Bitbucket", "Postman",
    "Docker", "CI/CD", "System Design",
  ],
};

/* ---------------- HOOK ---------------- */

function useWindowWidth() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

/* ---------------- MAIN ---------------- */

export default function SkillsOrbit() {
  const [scrollY, setScrollY] = useState(0);
  const width = useWindowWidth();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------- Responsive radii -------- */
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const radii = {
    outer: isMobile ? 130 : isTablet ? 200 : 350,
    middle: isMobile ? 95 : isTablet ? 150 : 250,
    inner: isMobile ? 60 : isTablet ? 100 : 150,
  };

  return (
      <div className="
        relative 
        overflow-hidden
        sm:overflow-visible
        w-[300px] h-[300px]
        sm:w-[420px] sm:h-[420px]
        lg:w-[520px] lg:h-[520px]
      ">

        {/* CENTER */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="
            px-4 py-2 sm:px-6 sm:py-3
            rounded-full bg-black text-white
            text-lg sm:text-2xl lg:text-3xl
            font-semibold
          ">
            Skills
          </div>
        </div>

        <Orbit
          radius={radii.outer}
          rotate={scrollY * (isMobile ? 0.08 : 0.15)}
          items={skills.frontend}
        />

        <Orbit
          radius={radii.middle}
          rotate={-scrollY * (isMobile ? 0.1 : 0.2)}
          items={skills.backend}
        />

        <Orbit
          radius={radii.inner}
          rotate={scrollY * (isMobile ? 0.06 : 0.1)}
          items={skills.other}
        />
      </div>
  );
}

/* ---------------- ORBIT ---------------- */

function Orbit({
  radius,
  rotate,
  items,
}: {
  radius: number;
  rotate: number;
  items: string[];
}) {
  const step = 360 / items.length;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ transform: `rotate(${rotate}deg)` }}
    >

      {/* SKILLS */}
      {items.map((skill, i) => {
        const angle = step * i;

        return (
          <div
            key={skill}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `
                translate(-50%, -50%)
                rotate(${angle}deg)
                translate(${radius}px)
                rotate(90deg)
              `,
            }}
          >
            <span className="
              px-1 py-1 sm:px-4 sm:py-2
              text-[9px] sm:text-xs lg:text-sm
              text-black bg-white
              rounded-full border shadow-sm
              whitespace-nowrap
            ">
              {skill}
            </span>
          </div>
        );
      })}
    </div>
  );
}