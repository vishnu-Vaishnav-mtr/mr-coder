"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

function Typewriter({ text, speed = 70 }: { text: string; speed?: number }) {
    const [content, setContent] = useState("");
    useEffect(() => {
        let i = 0;
        const id = setInterval(() => {
            setContent(text.slice(0, i + 1));
            i += 1;
            if (i >= text.length) clearInterval(id);
        }, speed);
        return () => clearInterval(id);
    }, [text, speed]);
    return (
        <span className="border-r-2 border-cyan-400 pr-1 text-lg text-foreground/80">
            {content}
        </span>
    );
}

export function Hero() {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

    return (
        <section
            id="home"
            ref={ref}
            className="relative flex min-h-screen flex-col justify-center overflow-hidden"
        >
            <div className="absolute inset-0 grid-lines opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-black/60 dark:via-white/0" />
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pt-24 md:grid-cols-[1.1fr_0.9fr]"
            >
                <div className="space-y-6">
                    <div className="pill inline-flex items-center gap-2 bg-white/10 text-xs uppercase tracking-[0.2em] text-cyan-300">
                        Shopify & WordPress Developer
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl"
                    >
                        Hi, I&apos;m{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                            Mr. Coder
                        </span>
                        — Shopify & WordPress Developer
                    </motion.h1>
                    <Typewriter text="I build fast and stunning digital experiences." />
                    <p className="max-w-xl text-base text-foreground/70 md:text-lg">
                        I design, develop, and improve eCommerce websites that are built to sell. From the first line of code, I focus on speed, a smooth user experience, and clear brand messaging.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-center gap-4 sm:gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                        <Link href="#projects" className="button-primary w-full sm:w-auto text-center">
                            View My Work
                        </Link>
                        <Link href="#contact" className="button-ghost w-full sm:w-auto text-center">
                            Hire Me
                        </Link>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4 sm:mt-0 text-sm text-foreground/70 w-full sm:w-auto">
                            <span className="pill whitespace-nowrap">Testing</span>
                            <span className="pill whitespace-nowrap">SEO Ready</span>
                            <span className="pill whitespace-nowrap">Performance First</span>
                        </div>
                    </div>
                </div>

                <div className="relative h-[300px] sm:h-[400px] md:h-[480px] w-full mt-8 md:mt-0">
                    <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-r from-blue-500/20 via-cyan-400/15 to-purple-500/15 blur-3xl opacity-50" />
                    <motion.div
                        animate={{
                            background: [
                                "radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.15), transparent 60%)",
                                "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15), transparent 60%)",
                                "radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.15), transparent 60%)"
                            ]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="relative h-full w-full  overflow-hidden"
                    >
                        <Image
                            src="/hero-banner-vishnu.png"
                            alt="Digital Experience"
                            fill
                            className="object-contain p-4 drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
