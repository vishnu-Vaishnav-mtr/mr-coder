"use client";

import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function LetsWorkTogether() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 text-center backdrop-blur-md md:p-16">
            {/* Ambient Background */}
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 mx-auto max-w-2xl"
            >
                <div className="mb-6 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                        Available for new projects
                    </span>
                </div>

                <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Ready to scale your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        digital presence?
                    </span>
                </h2>

                <p className="mb-10 text-lg text-slate-400 md:text-xl">
                    From high-conversion Shopify stores to custom web applications,
                    let's build something extraordinary together.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Link
                        href="https://wa.me/9675159209?text=Hi 👋Thank you for reaching out!I’m Vishnu Vaishnav specializing in creating E-commerce websites, Real Estate websites, Fast , and user-friendly websites.Let me know what you’re looking for — new website, redesign, bug fixes, or custom features — and I’ll be happy to help" // Replace with actual number
                        target="_blank"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                    >
                        <FaWhatsapp className="text-xl" />
                        <span>Chat on WhatsApp</span>
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="mailto:vishnuvaishnavmtr@gmail.com" // Replace with actual email
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:scale-105"
                    >
                        <FiMail className="text-xl" />
                        <span>Send Email</span>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
