"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/services";

export function ProcessTimeline() {
    return (
        <section className="relative py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        How I Work
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-400">
                        A structured approach to ensure your project arrives on time and exceeds expectations.
                    </p>
                </div>

                <div className="relative mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-12 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent lg:block" />

                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* Step Number & Icon */}
                                <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.15)] ring-4 ring-slate-950">
                                    <Icon className="h-8 w-8 text-cyan-400" />
                                    <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-slate-950 ring-4 ring-slate-950">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-white">
                                    {step.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-400">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
