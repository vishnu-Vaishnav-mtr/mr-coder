"use client";

import { motion } from "framer-motion";

import { testimonials } from "@/data";
import { InfiniteTestimonials } from "@/components/testimonials/infinite-testimonials";

export function Testimonials() {
    return (
        <section className="relative py-0 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

            <div className="relative mx-auto space-y-16 px-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Stories</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Real feedback from founders and brands who transformed their digital presence.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <InfiniteTestimonials testimonials={testimonials} speed={60} />
                </motion.div>
            </div>
        </section>
    );
}
