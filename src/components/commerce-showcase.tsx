"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { projectsData } from "@/data/projects";

export function CommerceShowcase({
    onHireClick,
}: {
    onHireClick: () => void;
}) {
    const [activeCategory, setActiveCategory] = useState<"shopify" | "wordpress">("shopify");

    const filteredProjects = projectsData.filter(
        (project) => project.category === activeCategory
    );

    return (
        <section className="relative py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/4 to-transparent" />
            <div className="relative mx-auto max-w-6xl space-y-8 px-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="pill inline-flex">
                            {activeCategory === "shopify" ? "Performance + CRO" : "Marketing + Publishing"}
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
                            {activeCategory === "shopify" ? "Shopify" : "WordPress"} Snapshots
                        </h2>
                        <p className="text-foreground/70">
                            Toggle between stacks to see tailored builds for commerce and content.
                        </p>
                    </div>
                    <div className="flex rounded-full border border-white/10 bg-white/5 p-1 text-sm">
                        <button
                            onClick={() => setActiveCategory("shopify")}
                            className={`rounded-full px-4 py-2 transition ${activeCategory === "shopify"
                                ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-500/30"
                                : "text-foreground/70 hover:text-foreground"
                                }`}
                        >
                            Shopify
                        </button>
                        <button
                            onClick={() => setActiveCategory("wordpress")}
                            className={`rounded-full px-4 py-2 transition ${activeCategory === "wordpress"
                                ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-500/30"
                                : "text-foreground/70 hover:text-foreground"
                                }`}
                        >
                            WordPress
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {filteredProjects.slice(0, 2).map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                        View All Projects
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
