"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue } from "framer-motion";
import { TiltCard } from "@/components/tilt-card";
import { SiShopify, SiWordpress } from "react-icons/si";
import { FiMonitor, FiUsers, FiBookOpen, FiBriefcase } from "react-icons/fi";

const roles = [
    "Frontend Developer",
    "Shopify & WordPress Expert",
    "UI Engineer",
    "Performance Optimizer",
];

const timelineItems = [
    {
        title: "Education",
        icon: FiBookOpen,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        description: "Graduated in Computer Science and continuously learning new frameworks, design systems, and web technologies.",
        year: "2020",
    },
    {
        title: "Experience",
        icon: FiBriefcase,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        description: "4+ years crafting websites and interfaces for agencies and freelance clients — merging creativity and precision.",
        year: "3+ Yrs",
    },
    {
        title: "Shopify Development",
        icon: SiShopify,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        description: "Custom Shopify themes, headless storefronts, and conversion-optimized eCommerce builds.",
        year: "Expert",
    },
    {
        title: "WordPress Development",
        icon: SiWordpress,
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
        description: "Developing fast, responsive WordPress sites with custom themes, plugin integrations, and SEO optimization.",
        year: "Pro",
    },
    {
        title: "Client Dealing",
        icon: FiUsers,
        color: "text-pink-400",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
        description: "Skilled in understanding client needs, effective communication, and delivering solutions that exceed expectations.",
        year: "Skill",
    },
];

function RotatingText() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-8 overflow-hidden relative">
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent absolute w-full"
                >
                    {roles[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}

function DecryptedText({ text }: { text: string }) {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

    const scramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );
            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        scramble();
    }, []);

    return (
        <motion.h2
            whileHover={{ scale: 1.02 }}
            onHoverStart={scramble}
            className="text-3xl md:text-5xl font-bold tracking-tight cursor-pointer"
        >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg">
                {display}
            </span>
        </motion.h2>
    );
}

function AmbientLight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth) - 0.5);
        mouseY.set((clientY / innerHeight) - 0.5);
    };

    useEffect(() => {
        window.addEventListener("mousemove", (e: any) => handleMouseMove(e));
        return () => window.removeEventListener("mousemove", (e: any) => handleMouseMove(e));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Cinematic Sunlight Beam */}
            <motion.div
                style={{ x: useTransform(mouseX, [-0.5, 0.5], [20, -20]), y: useTransform(mouseY, [-0.5, 0.5], [20, -20]) }}
                animate={{ opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[20%] -left-[10%] w-[150%] h-[150%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(6,182,212,0.15)_0deg,transparent_60deg,transparent_300deg,rgba(6,182,212,0.15)_360deg)] blur-[80px] rotate-45"
            />
            {/* Floating Dust Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}


export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"],
    });

    return (
        <section id="about" className="relative py-24">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-900/10 to-slate-950 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* LEFT PANEL - STICKY */}
                    <div className="lg:sticky lg:top-32 lg:h-fit flex flex-col gap-6">
                        <div className="relative group mx-auto lg:mx-0">
                            {/* Avatar Container */}
                            <motion.div
                                className="relative w-64 h-64 md:w-80 md:h-80"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-[2rem] blur-[60px] animate-pulse" />
                                <TiltCard className="relative w-full h-full rounded-[2rem] bg-slate-900/50 backdrop-blur-xl border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl group-hover:border-cyan-500/30 transition-colors">
                                    {/* Simplified geometric avatar representation */}
                                    <div className="relative z-10 flex flex-col items-center gap-4">
                                        <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/5">
                                            <FiMonitor className="text-6xl text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                                        </div>
                                        <div className="h-1 w-12 bg-white/10 rounded-full" />
                                    </div>

                                    {/* Background grid pattern in avatar */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] opacity-50" />
                                </TiltCard>
                            </motion.div>
                        </div>

                        <div className="space-y-4 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Vishnu Vaishnav</span>
                            </h2>
                            <RotatingText />
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                                I architect digital solutions that merge robust engineering with cinematic user experiences.
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Available for hire</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">Remote</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL - SCROLLABLE CARDS */}
                    <motion.div ref={containerRef} className="relative flex flex-col gap-8 pl-8 border-l border-white/5">
                        {/* Timeline Progress Line */}
                        <motion.div
                            style={{ scaleY: scrollYProgress }}
                            className="absolute left-[-1px] top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 origin-top"
                        />

                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <TiltCard className={`relative group p-6 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-300`}>
                                    <div className={`absolute -left-[41px] top-8 w-5 h-5 rounded-full border-4 border-slate-950 ${item.bg} ${item.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-125`}>
                                        <div className="w-1.5 h-1.5 bg-current rounded-full" />
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl ${item.bg} ${item.color} ${item.border} border text-2xl`}>
                                            <item.icon />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.bg} ${item.color} border ${item.border}`}>{item.year}</span>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section >
    );
}
