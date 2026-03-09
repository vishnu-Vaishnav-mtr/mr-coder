"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { TiltCard } from "@/components/tilt-card";
import { projects, Project } from "@/data";
import { floatIn } from "@/lib/utils";

export function FeaturedProjects() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section id="projects" className="relative py-0 md:py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="relative mx-auto max-w-6xl space-y-10 px-5">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                            Featured projects
                        </h2>
                        <p className="text-foreground/70">
                            Conversion-led builds with performance and polish.
                        </p>
                    </div>
                    <span className="pill hidden md:inline-flex">See details</span>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            variants={floatIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            custom={index}
                        >
                            <TiltCard
                                onClick={() => setSelected(project)}
                                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-[1px] shadow-lg shadow-blue-900/20"
                            >
                                <div
                                    className={`relative flex h-full flex-col gap-4 rounded-[28px] bg-gradient-to-br ${project.accent} p-5`}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold text-white">
                                            {project.title}
                                        </h3>
                                        <motion.span
                                            initial={{ scale: 0.9 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                                        >
                                            Tap to open
                                        </motion.span>
                                    </div>
                                    <p className="text-sm text-white/80">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-full bg-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-white/80"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.article>
                    ))}
                </div>
                <AnimatePresence>
                    {selected && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 180, damping: 22 }}
                                className="glass neon-border relative w-full max-w-2xl space-y-5 rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-white"
                            >
                                <button
                                    className="absolute right-4 top-4 rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 hover:border-white/30"
                                    onClick={() => setSelected(null)}
                                >
                                    Close
                                </button>
                                <h3 className="text-2xl font-semibold">{selected.title}</h3>
                                <p className="text-white/80">{selected.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {selected.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <Link
                                        href={selected.link}
                                        className="button-primary flex items-center gap-2 text-sm"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live <FiExternalLink />
                                    </Link>
                                    {selected.repo && (
                                        <Link
                                            href={selected.repo}
                                            className="button-ghost flex items-center gap-2 text-sm text-white"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Repo <FiGithub />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
