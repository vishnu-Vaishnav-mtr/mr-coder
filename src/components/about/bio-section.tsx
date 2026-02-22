"use client";

import { motion } from "framer-motion";
import { bioData } from "@/data/about";
import { TiltCard } from "@/components/tilt-card";
import Image from "next/image";

export function BioSection() {
    return (
        <section className="relative py-12 md:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        {bioData.heading}
                    </h2>
                    <h3 className="mb-8 text-xl font-medium text-cyan-400">
                        {bioData.subheading}
                    </h3>
                    <div className="space-y-6 text-lg leading-relaxed text-slate-400">
                        {bioData.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mx-auto w-full max-w-md lg:max-w-none"
                >
                    <TiltCard className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20" />

                        {/* Placeholder for Profile Image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-9xl text-white/5 font-bold">Mj</div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 p-8 opacity-50">
                            <div className="h-24 w-24 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 opacity-50">
                            <div className="h-16 w-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
                        </div>
                    </TiltCard>
                </motion.div>
            </div>
        </section>
    );
}
