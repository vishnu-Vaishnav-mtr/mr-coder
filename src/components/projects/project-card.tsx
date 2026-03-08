"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { TiltCard } from "@/components/tilt-card";
import { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <TiltCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-md transition-colors hover:border-cyan-500/30">
            {/* Image Placeholder / Gradient */}
            {/* Image or Gradient Placeholder */}
            <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${project.category === 'shopify'
                ? 'from-green-500/20 via-emerald-500/5 to-cyan-500/20'
                : 'from-blue-500/20 via-indigo-500/5 to-purple-500/20'
                }`}>
                {project.image ? (
                    <div className="relative h-full w-full">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                ) : (
                    <>
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                            {project.title.charAt(0)}
                        </div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    </>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-medium text-slate-400 ring-1 ring-white/10">
                            {tech}
                        </span>
                    ))}
                </div>

                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                </p>

                <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                    View Project <FiExternalLink />
                </Link>
            </div>
        </TiltCard>
    );
}
