"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

    const handleScroll = () => {
    const start = window.scrollY;
    const end = document.documentElement.scrollHeight - window.innerHeight;
    const duration = 4000; // ⏳ increase for even slower (ms)

    let startTime: number | null = null;

    // Easing for buttery smoothness
    const easeInOut = (t: number) =>
      t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = easeInOut(progress);
      const current = start + (end - start) * eased;

      window.scrollTo(0, current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // ⚡ instantly back to top
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };

    requestAnimationFrame(animate);
  };



  return (
    <header className="relative w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">

        {/* Left: Avatar */}
        <div className="flex items-center gap-3">
          {/* <Image
            src="/avatar.png"
            alt="Profile"
            width={44}
            height={44}
            className="rounded-full border border-zinc-300 object-cover dark:border-zinc-700"
          /> */}
          <span className="font-semibold text-zinc-800 dark:text-zinc-100" onClick={handleScroll}>
            Gokul V
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {["Home", "Work Experience", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden z-50 flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-zinc-800 dark:bg-white" />
          <span className="h-0.5 w-6 bg-zinc-800 dark:bg-white" />
          <span className="h-0.5 w-6 bg-zinc-800 dark:bg-white" />
        </button>
      </div>

      {/* Overlay Menu */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Menu */}
          <div className="absolute right-4 top-full z-50 mt-2 w-48 rounded-xl bg-white shadow-xl dark:bg-zinc-900 lg:hidden">
            <nav className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
              {["Home", "Work Experience", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
