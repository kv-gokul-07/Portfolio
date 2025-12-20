"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CarScroller: React.FC = () => {
  const wheelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isDraggingRef = useRef(false);
  const carRef = useRef<HTMLDivElement | null>(null);

  const startX = useRef(0);
  const rotation = useRef(0);
  const lastScrollY = useRef(0);

  const [dragging, setDragging] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [carX, setCarX] = useState(0);
  const [maxMove, setMaxMove] = useState(0); // 🔑 dynamic

  /* 🔑 Calculate available horizontal space */
  useEffect(() => {
    const calculateMaxMove = () => {
      if (!carRef.current) return;

      const viewportWidth = window.innerWidth;
      const carWidth = carRef.current.offsetWidth;
      const leftOffset = 24; // bottom-6 → 24px

      setMaxMove(Math.max(0, viewportWidth - carWidth - leftOffset));
    };

    calculateMaxMove();
    window.addEventListener("resize", calculateMaxMove);
    return () => window.removeEventListener("resize", calculateMaxMove);
  }, []);

  /* ✅ Scroll → move car fully left ↔ right */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollY > lastScrollY.current) setDirection("right");
      if (scrollY < lastScrollY.current) setDirection("left");
      lastScrollY.current = scrollY;

      if (maxScroll > 0) {
        const progress = scrollY / maxScroll;
        setCarX(progress * maxMove);
      }

      // subtle wheel motion
      rotation.current += 1.2;
      wheelRefs.current.forEach((wheel) => {
        if (wheel) {
          wheel.style.transform = `rotate(${rotation.current}deg)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [maxMove]);

  /* ✅ Drag logic */
  useEffect(() => {
    const move = (clientX: number) => {
      if (!isDraggingRef.current) return;

      const deltaX = clientX - startX.current;
      if (deltaX === 0) return;

      setCarX((prev) => {
        const next = prev + deltaX * 0.7;
        return Math.max(0, Math.min(maxMove, next));
      });

      window.scrollBy({ top: deltaX * 1.6 });

      rotation.current += Math.abs(deltaX) * 1.6;
      wheelRefs.current.forEach((wheel) => {
        if (wheel) {
          wheel.style.transform = `rotate(${rotation.current}deg)`;
        }
      });

      startX.current = clientX;
    };

    const stop = () => {
      isDraggingRef.current = false;
      setDragging(false);
      document.body.style.cursor = "default";
    };

    window.addEventListener("mousemove", (e) => move(e.clientX));
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", (e) =>
      move(e.touches[0].clientX)
    );
    window.addEventListener("touchend", stop);

    return () => {
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [maxMove]);

  const startDrag = (x: number) => {
    isDraggingRef.current = true;
    setDragging(true);
    startX.current = x;
    document.body.style.cursor = "grabbing";
  };

  return (
    <div
      ref={carRef}
      onMouseDown={(e) => startDrag(e.clientX)}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      className="fixed bottom-6 left-6 z-50 cursor-grab select-none"
      style={{
        transform: `translateX(${carX}px)`,
        transition: dragging ? "none" : "transform 0.25s ease-out",
      }}
    >
      <div className="relative w-[320px]">
        {/* 🚗 Car body */}
        <Image
          src={direction === "right" ? "/right-car.png" : "/left-car.png"}
          alt="Car"
          width={320}
          height={180}
          draggable={false}
          priority
        />

        {/* 🛞 Back wheel */}
        <div
          ref={(el) => {wheelRefs.current[0] = el}}
            className="absolute w-[45px] h-[45px]"
            style={{
              left: "13%",  // 🔑 tuned for your car image
              bottom: "31%"// 🔑 aligns with tire contact
            }}
        >
          <Image src="/wheel-rotation.png" alt="Wheel" width={55} height={55} style={{ maxWidth: "none"}} />
        </div>

        {/* 🛞 Front wheel */}
        <div
          ref={(el) => {wheelRefs.current[1] = el}}
           className="absolute w-[45px] h-[45px]"
            style={{
              right: "18%",  // 🔑 symmetric to back wheel
              bottom: "6%",
            }}
        >
          <Image src="/wheel-rotation.png" alt="Wheel" width={44} height={44} />
        </div>
      </div>
    </div>
  );
};

export default CarScroller;
