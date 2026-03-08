"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    useInView,
    useSpring,
    useTransform,
    useMotionTemplate,
    useMotionValue,
    Variants,
} from "framer-motion";
import { TiltCard } from "@/components/tilt-card";
import { StatsBackground } from "@/components/stats-background"; // Import 3D Background

function Counter({ value, play }: { value: number; play: boolean }) {
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        if (play) {
            spring.set(0);
            setTimeout(() => spring.set(value), 50);
        } else {
            spring.set(value);
        }
    }, [play, value, spring]);

    return <motion.span>{display}</motion.span>;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.3 }
    },
};

export function ExperienceStats() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* 3D Background Layer */}
            <StatsBackground />

            {/* Background Decorations (Legacy/Fallback) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent pointer-events-none" />

            <div className="relative mx-auto max-w-6xl px-5 z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-rows-[auto]"
                >
                    {/* Left Feature Card - Years of Experience */}
                    <motion.div variants={itemVariants} className="h-full">
                        <TiltCard className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[#020617] p-8 md:p-12 shadow-2xl min-h-[400px]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.1),transparent_70%)]" />

                            {/* Decoration */}
                            <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                                <div className="w-32 h-32 rounded-full border-2 border-cyan-500/30 border-dashed animate-spin-slow" />
                            </div>

                            <div className="relative z-10 flex h-full flex-col justify-center gap-8 text-white min-h-[300px]">
                                <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-6 md:gap-8">
                                    {/* Number */}
                                    <span className="text-[8rem] md:text-[10rem] font-bold tracking-tighter drop-shadow-[0_0_25px_rgba(34,211,238,0.4)] text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-slate-400 leading-none">
                                        <Counter value={5} play={true} />
                                    </span>

                                    {/* Text */}
                                    <div className="flex flex-col justify-center">
                                        <span className="text-4xl md:text-5xl font-light text-slate-300 uppercase tracking-widest leading-tight">
                                            Years
                                        </span>
                                        <span className="text-4xl md:text-5xl font-bold text-cyan-400 uppercase tracking-widest leading-tight">
                                            Of Exp.
                                        </span>
                                    </div>
                                </div>

                                <p className="max-w-md mx-auto text-lg text-slate-400 leading-relaxed font-light text-center border-t border-cyan-500/20 pt-6">
                                    With 5 years of experience in web development, I’ve worked on a wide range of projects from business websites to full ecommerce and real estate platforms.
                                </p>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Right Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-center">
                        <StatsCard value={400} suffix="+" label="Projects Completed" />
                        <StatsCard value={100} suffix="+" label="Shopify Stores Built" />
                        <StatsCard value={250} suffix="+" label="WordPress Sites Developed" />
                        <StatsCard value={390} suffix="+" label="Satisfied Clients" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function StatsCard({
    value,
    suffix,
    label,
}: {
    value: number;
    suffix: string;
    label: string;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div variants={itemVariants} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onMouseMove={handleMouseMove} className="h-full">
            <TiltCard className="group relative flex flex-col justify-center rounded-[32px] border border-white/10 bg-[#020617] p-6 xl:p-8 text-center overflow-hidden min-h-[180px] hover:border-white/20 transition-colors">
                {/* Spotlight Border Effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                    radial-gradient(
                    300px circle at ${mouseX}px ${mouseY}px,
                    rgba(34, 211, 238, 0.4),
                    transparent 80%
                    )
                `,
                    }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
                    <div className="text-4xl font-bold text-white md:text-5xl drop-shadow-sm flex justify-center items-center gap-1">
                        <Counter value={value} play={isHovered} />
                        <span className="text-cyan-400 text-3xl md:text-4xl">{suffix}</span>
                    </div>
                    <div className="h-px w-12 bg-white/10 group-hover:bg-cyan-500/50 transition-colors duration-500 my-2" />
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 group-hover:text-cyan-300 transition-colors duration-300">
                        {label}
                    </p>
                </div>
            </TiltCard>
        </motion.div>
    );
}
