"use client";

import { motion } from "framer-motion";
import { techStackData } from "@/data/about";

export function TechStack() {
    return (
        <section className="relative py-24">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Technical Arsenal
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                    The tools and technologies I use to build world-class digital products.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {techStackData.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-2xl border border-white/10 bg-slate-950/30 p-8 backdrop-blur-sm"
                    >
                        <h3 className="mb-6 text-xl font-bold text-white border-b border-white/10 pb-4">
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {category.skills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <div key={skill.name} className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                                        <Icon className="h-5 w-5 opacity-70" />
                                        <span className="text-sm font-medium">{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
