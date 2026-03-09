"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";
import { floatIn } from "@/lib/utils";

export function Skills() {
    return (
        <section id="skills" className="relative py-0 md:py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="relative mx-auto max-w-6xl space-y-10 px-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="pill inline-flex">Core stack</p>
                        <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
                            Skills that power launch & growth
                        </h2>
                        <p className="text-foreground/70">
                            Frontend craft, CMS mastery, and the ops that keep sites fast.
                        </p>
                    </div>
                    <div className="glass glow flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm text-foreground/80">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Available for sprints & retainers
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-12">
                    <div className="glass neon-border md:col-span-4 flex flex-col justify-center rounded-3xl border border-white/10 p-6">
                        <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
                            Focus
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-foreground">
                            Conversion-ready builds
                        </h3>
                        <p className="mt-2 text-foreground/70">
                            Every website I build is focused on conversions from day one, with proper structure, smart layouts, and performance in mind.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs">
                            <span className="pill">Pixel-perfect Design</span>
                            <span className="pill">Analytics</span>
                            <span className="pill">SEO</span>
                            <span className="pill">A/B testing</span>
                        </div>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={skill.label}
                                    variants={floatIn}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, margin: "-40px" }}
                                    custom={index}
                                    className="glass glow group flex flex-col items-center gap-3 rounded-2xl border border-white/10 p-4 text-center hover:-translate-y-1.5 hover:scale-[1.03] transition-transform duration-300 ease-out"
                                >
                                    <span
                                        className={`text-2xl drop-shadow-md transition duration-300 group-hover:scale-110 ${skill.color}`}
                                    >
                                        <Icon />
                                    </span>
                                    <p className="text-sm font-medium">{skill.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
