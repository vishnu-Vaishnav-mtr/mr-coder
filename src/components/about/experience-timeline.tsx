"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/about";
import { FaBriefcase } from "react-icons/fa";

export function ExperienceTimeline() {
    return (
        <section className="relative py-24">
            <div className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl text-center">
                    Professional Journey
                </h2>
            </div>

            <div className="relative mx-auto max-w-3xl">
                {/* Vertical Line */}
                <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 md:left-1/2 md:-ml-px" />

                <div className="space-y-12">
                    {experienceData.map((item, index) => (
                        <div key={item.id} className={`relative flex items-center justify-between md:justify-normal md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                            {/* Dot on Line */}
                            <div className="absolute left-[11px] h-5 w-5 rounded-full border-2 border-cyan-500 bg-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.4)] md:left-1/2 md:-ml-2.5 z-10" />

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="ml-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 p-6 backdrop-blur-md hover:border-cyan-500/30 transition-colors md:ml-0 md:w-[calc(50%-2rem)]"
                            >
                                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                                        {item.period}
                                    </span>
                                </div>

                                <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
                                    <FaBriefcase className="text-slate-500" />
                                    <span>{item.company}</span>
                                </div>

                                <p className="mb-4 text-sm leading-relaxed text-slate-300">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map(skill => (
                                        <span key={skill} className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
