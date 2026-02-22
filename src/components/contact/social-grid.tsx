"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/contact";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export function SocialGrid() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                    <Link key={link.id} href={link.url} target="_blank">
                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors ${link.color}`}
                        >
                            <div className="mb-4 flex items-start justify-between">
                                <Icon className="h-6 w-6 text-slate-300 transition-colors group-hover:text-inherit" />
                                <FiArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-white">{link.platform}</h3>
                                <p className="text-xs text-slate-400">{link.username}</p>
                            </div>
                        </motion.div>
                    </Link>
                );
            })}
        </div>
    );
}
