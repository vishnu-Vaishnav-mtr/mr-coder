"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/services/service-card";
import { ProcessTimeline } from "@/components/services/process-timeline";
import { LetsConnect } from "@/components/projects/lets-connect";

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen pt-40 pb-12">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                    >
                        Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-slate-400"
                    >
                        Detailed engineering and strategic design to help you dominate your market.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-32">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </div>

                {/* Process Section */}
                <ProcessTimeline />

                {/* CTA */}
                <LetsConnect />
            </div>
        </main>
    );
}
