"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, PropsWithChildren, useRef } from "react";

type TiltCardProps = PropsWithChildren<{
    className?: string;
    onClick?: () => void;
}>;

export function TiltCard({ children, className, onClick }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);

    // Glare effect movement
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        // Disable tilt on touch devices or if user prefers reduced motion
        if (window.matchMedia("(hover: none)").matches) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate mouse position relative to card center (-0.5 to 0.5)
        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative transform-gpu transition-all duration-200 ease-out will-change-transform ${className}`}
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
                <motion.div
                    style={{
                        background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.3) 0%, transparent 80%)`
                    }}
                    className="h-full w-full"
                />
            </div>
            {children}
        </motion.div>
    );
}
