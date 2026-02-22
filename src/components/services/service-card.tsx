"use client";

import { motion } from "framer-motion";
import { Service } from "@/data/services";
import { TiltCard } from "@/components/tilt-card";
import { FaCheck } from "react-icons/fa";

export function ServiceCard({ service }: { service: Service }) {
    const Icon = service.icon;

    return (
        <TiltCard className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-8 backdrop-blur-md transition-colors hover:border-cyan-500/30 h-full">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 ${service.accent.replace("text-", "to-")}/10`} />

            <div>
                <motion.div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-3xl ${service.accent} ring-1 ring-white/10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    <Icon />
                </motion.div>

                <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                </h3>

                <p className="mb-8 text-base leading-relaxed text-slate-400">
                    {service.description}
                </p>
            </div>

            <ul className="space-y-3">
                {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                        <FaCheck className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-cyan-500" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </TiltCard>
    );
}
