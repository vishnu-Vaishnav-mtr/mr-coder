"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Burst = {
    id: number;
    x: number;
    y: number;
};

export function ClickFog() {
    const [bursts, setBursts] = useState<Burst[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const id = Date.now();
            setBursts((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
            // Clean up burst after animation
            setTimeout(() => {
                setBursts((prev) => prev.filter((b) => b.id !== id));
            }, 2000);
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
            {bursts.map((burst) => (
                <FogBurst key={burst.id} x={burst.x} y={burst.y} />
            ))}
        </div>
    );
}

function FogBurst({ x, y }: { x: number; y: number }) {
    // Generate random particles for this burst
    const [particles] = useState(() =>
        Array.from({ length: 8 }).map(() => ({
            angle: Math.random() * 360,
            dist: 60 + Math.random() * 80,
            size: 40 + Math.random() * 60,
            delay: Math.random() * 0.2,
            duration: 1 + Math.random() * 0.8,
        }))
    );

    return (
        <>
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0.3,
                        scale: 0.5,
                        x: x - p.size / 2,
                        y: y - p.size / 2,
                    }}
                    animate={{
                        opacity: 0,
                        scale: 2,
                        x: x - p.size / 2 + Math.cos((p.angle * Math.PI) / 180) * p.dist,
                        y: y - p.size / 2 + Math.sin((p.angle * Math.PI) / 180) * p.dist,
                    }}
                    transition={{
                        duration: p.duration,
                        ease: "easeOut",
                        delay: p.delay,
                    }}
                    style={{
                        width: p.size,
                        height: p.size,
                        background:
                            "radial-gradient(circle, rgba(200,200,200,0.5) 0%, transparent 70%)",
                    }}
                    className="absolute rounded-full blur-xl"
                />
            ))}
        </>
    );
}
