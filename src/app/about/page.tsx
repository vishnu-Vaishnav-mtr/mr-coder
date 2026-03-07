"use client";

import { motion } from "framer-motion";
import { BioSection } from "@/components/about/bio-section";
import { ExperienceTimeline } from "@/components/about/experience-timeline";
import { TechStack } from "@/components/about/tech-stack";
import { LetsConnect } from "@/components/projects/lets-connect";
import { ViewportLoader } from "@/components/viewport-loader";

export default function AboutPage() {
    return (
        <main className="relative min-h-screen pt-40 pb-12">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mr. Coder</span>
                    </motion.h1>
                </div>

                {/* Sections */}
                <BioSection />
                
                <ViewportLoader minHeight="600px">
                    <ExperienceTimeline />
                </ViewportLoader>

                <ViewportLoader minHeight="400px">
                    <TechStack />
                </ViewportLoader>

                {/* CTA */}
                <ViewportLoader minHeight="300px">
                    <LetsConnect />
                </ViewportLoader>
            </div>
        </main>
    );
}
