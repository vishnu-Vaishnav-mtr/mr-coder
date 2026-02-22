"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectCategory, ProjectSubCategory } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

const categories: { id: ProjectCategory; label: string }[] = [
    { id: "shopify", label: "Shopify" },
    { id: "wordpress", label: "WordPress" },
];

const subCategories: Record<ProjectCategory, { id: ProjectSubCategory; label: string }[]> = {
    shopify: [
        { id: "ecommerce", label: "E-Commerce Sites" },
        { id: "themes", label: "Theme Implementation" },
    ],
    wordpress: [
        { id: "websites", label: "Websites" },
        { id: "plugins", label: "Plugins" },
    ],
};

export function ProjectTabs() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("shopify");
    const [activeSubCategory, setActiveSubCategory] = useState<ProjectSubCategory>("ecommerce");

    const filteredProjects = projectsData.filter(
        (p) => p.category === activeCategory && p.subCategory === activeSubCategory
    );

    const handleCategoryChange = (cat: ProjectCategory) => {
        setActiveCategory(cat);
        setActiveSubCategory(subCategories[cat][0].id);
    };

    return (
        <div className="w-full space-y-12">
            {/* Main Category Tabs */}
            <div className="flex justify-center">
                <div className="inline-flex rounded-full bg-white/5 p-1 backdrop-blur-3xl ring-1 ring-white/10">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.id)}
                            className={cn(
                                "relative rounded-full px-8 py-3 text-sm font-medium transition-all duration-300",
                                activeCategory === cat.id ? "text-white" : "text-slate-400 hover:text-white"
                            )}
                        >
                            {activeCategory === cat.id && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className="absolute inset-0 z-[-1] rounded-full bg-cyan-500/20 ring-1 ring-cyan-500/50"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sub Category Tabs */}
            <div className="flex justify-center">
                <div className="flex gap-8 border-b border-white/10 px-8">
                    {subCategories[activeCategory].map((sub) => (
                        <button
                            key={sub.id}
                            onClick={() => setActiveSubCategory(sub.id)}
                            className={cn(
                                "relative pb-4 text-sm font-medium transition-colors",
                                activeSubCategory === sub.id ? "text-cyan-400" : "text-slate-500 hover:text-slate-300"
                            )}
                        >
                            {sub.label}
                            {activeSubCategory === sub.id && (
                                <motion.div
                                    layoutId="activeSubCategory"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid with Layout Animation */}
            <motion.div
                layout
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                <AnimatePresence mode="popLayout" initial={false}>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            transition={{
                                layout: { type: "spring", bounce: 0, duration: 0.4 },
                                opacity: { duration: 0.3 }
                            }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-20 text-center text-slate-500"
                >
                    <p>No projects found in this category yet.</p>
                </motion.div>
            )}
        </div>
    );
}
