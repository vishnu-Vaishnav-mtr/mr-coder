"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CursorSpotlight() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 30, mass: 0.6 };
  const xSmooth = useSpring(x, springConfig);
  const ySmooth = useSpring(y, springConfig);

  const rotateX = useTransform(ySmooth, (value) => {
    if (typeof window === "undefined") return 0;
    return (value / window.innerHeight - 0.5) * 12;
  });
  const rotateY = useTransform(xSmooth, (value) => {
    if (typeof window === "undefined") return 0;
    return (value / window.innerWidth - 0.5) * -12;
  });

  useEffect(() => {
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    setIsPointer(hasPointer);
    if (!hasPointer) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    let frame: number;
    const handler = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
          x.set(event.clientX);
          y.set(event.clientY);
      });
    };
    window.addEventListener("pointermove", handler);
    return () => {
        window.removeEventListener("pointermove", handler);
        cancelAnimationFrame(frame);
    };
  }, [x, y]);

  if (!mounted || !isPointer) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] h-12 w-12 md:h-16 md:w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/60 via-blue-500/60 to-purple-500/60 blur-xl md:blur-2xl"
        style={{ x: xSmooth, y: ySmooth, rotateX, rotateY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[61] h-4 w-4 md:h-6 md:w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.45)] md:shadow-[0_0_30px_rgba(255,255,255,0.45)]"
        style={{ x: xSmooth, y: ySmooth, rotateX, rotateY }}
      />
    </>
  );
}

