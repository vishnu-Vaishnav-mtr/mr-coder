"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useInView } from "framer-motion";
import { TiltCard } from "@/components/tilt-card";
import { SiShopify, SiWordpress } from "react-icons/si";
import { FiMonitor, FiUsers, FiBookOpen, FiBriefcase } from "react-icons/fi";
import Image from "next/image";

const roles = [
    "Frontend Developer",
    "Shopify & WordPress Expert",
    "UI Engineer",
    "Performance Optimizer",
];

const timelineItems = [
    {
        title: "What I Do",
        icon: FiBookOpen,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        description: "I build modern eCommerce and real estate websites that are fast, easy to manage, and built to generate results",
        year: "Specialist",
    },
    {
        title: "Experience",
        icon: FiBriefcase,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        description: "5+ years designing and developing high-quality websites, Themes, Plugins with a strong focus on performance and user experience.",
        year: "5+ Yrs",
    },
    {
        title: "Shopify Development",
        icon: SiShopify,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        description: "I build custom Shopify themes and complete Shopify websites, with strong knowledge of store setup and management.",
        year: "Expert",
    },
    {
        title: "WordPress Development",
        icon: SiWordpress,
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
        description: "I develop WooCommerce and real estate websites, with strong knowledge of building custom WordPress plugins.",
        year: "Pro",
    },
    // {
    //     title: "Client Dealing",
    //     icon: FiUsers,
    //     color: "text-pink-400",
    //     bg: "bg-pink-500/10",
    //     border: "border-pink-500/20",
    //     description: "Skilled in understanding client needs, effective communication, and delivering solutions that exceed expectations.",
    //     year: "Skill",
    // },
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
        <div className="h-10 sm:h-8 overflow-hidden relative flex justify-center lg:justify-start bg-slate-900/0">
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent absolute w-full text-center lg:text-left leading-tight"
                >
                    {roles[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}

// Removed AmbientLight and DecryptedText unused functions


export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"],
    });

    // Extremely tight spring to just smooth out the mouse wheel steps without floating
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 60,
        mass: 0.1,
        restDelta: 0.001
    });

    const videoRef = useRef<HTMLVideoElement>(null);
    const isVideoInView = useInView(videoRef, { margin: "-100px", once: false });

    useEffect(() => {
        if (videoRef.current) {
            if (isVideoInView) {
                // Browsers may block unmuted autoplay if the user hasn't interacted with the page yet.
                videoRef.current.play().catch(error => console.log("Autoplay prevented by browser strictly requiring user interaction first:", error));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isVideoInView]);

    return (
        <section id="about" className="relative py-24">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-900/10 to-slate-950 pointer-events-none" />

            <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">

                    {/* LEFT PANEL - STICKY */}
                    <div className="lg:sticky lg:top-32 lg:h-fit flex flex-col gap-6">
                        {/* Video Player Card for AI Intro */}
                        <div className="relative mx-auto group rounded-[2rem] p-1.5 sm:p-2 bg-slate-900/80 border border-white/10 shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] flex-shrink-0">
                            {/* Decorative glowing background behind video */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-[2rem] blur-xl transform-gpu" />

                            {/* Video Container */}
                            <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] bg-slate-950 border border-white/5">
                                {/* <video
                                    ref={videoRef}
                                    src="/bio.mp4"
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                /> */}
                                <TiltCard className="relative ">
                                    <Image
                                        src="/technolgies.webp"
                                        alt="Vishnu Vaishnav"
                                        width={500}
                                        height={600}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="rounded-2xl border border-white/10 shadow-2xl object-cover w-full h-full"
                                    />
                                </TiltCard>
                            </div>
                        </div>

                        <div className="space-y-4 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Vishnu Vaishnav</span>
                            </h2>
                            <RotatingText />
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                                I create digital products that balance solid engineering with thoughtful design.
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Available for hire</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">Remote</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL - SCROLLABLE CARDS */}
                    <motion.div ref={containerRef} className="relative flex flex-col gap-6 md:gap-8 pl-6 lg:pl-10 border-l border-white/5 mx-2 md:mx-0">
                        {/* Timeline Progress Line */}
                        <motion.div
                            style={{ scaleY: scrollYProgress, originY: 0 }}
                            className="absolute left-[-1px] top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"
                        />

                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    delay: index * 0.05 // Slight stagger effect
                                }}
                                className="transform-gpu will-change-transform will-change-opacity"
                            >
                                <TiltCard className="relative group p-5 lg:p-6 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
                                    <div className={`absolute -left-[33px] lg:-left-[49px] top-8 w-5 h-5 rounded-full border-4 border-slate-950 ${item.bg} ${item.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-125`}>
                                        <div className="w-1.5 h-1.5 bg-current rounded-full" />
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-5">
                                        <div className="flex items-center justify-between w-full sm:w-auto">
                                            <div className={`p-3 rounded-xl ${item.bg} ${item.color} ${item.border} border text-2xl`}>
                                                <item.icon />
                                            </div>
                                            <span className={`sm:hidden text-xs font-bold px-2 py-1 rounded-full ${item.bg} ${item.color} border ${item.border}`}>{item.year}</span>
                                        </div>
                                        <div className="flex-1 w-full text-left">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors pr-2 leading-tight">{item.title}</h3>
                                                <span className={`hidden sm:inline-block text-xs font-bold px-2 py-1 rounded-full ${item.bg} ${item.color} border ${item.border}`}>{item.year}</span>
                                            </div>
                                            <p className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors">
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
