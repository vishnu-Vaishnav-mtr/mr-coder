"use client";

import { motion } from "framer-motion";
import { ProjectTabs } from "@/components/projects/project-tabs";
import { LetsConnect } from "@/components/projects/lets-connect";
import { ViewportLoader } from "@/components/viewport-loader";

export default function ProjectsPage() {
    return (
        <main className="relative min-h-screen pt-40 pb-12">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                    >
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Works</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-slate-400"
                    >
                        A selection of Shopify and WordPress projects I have built for businesses and brands.
                    </motion.p>
                </div>

                {/* Tabs & Grid */}
                <ProjectTabs />

                {/* CTA */}
                <ViewportLoader minHeight="300px">
                    <LetsConnect />
                </ViewportLoader>
            </div>
        </main>
    );
}
