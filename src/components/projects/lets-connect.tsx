"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function LetsConnect() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-12 backdrop-blur-xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none" />

                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Ready to start a project?
                    </h2>
                    <p className="mb-8 text-lg text-slate-400 max-w-2xl mx-auto">
                        Whether it's a custom Shopify theme, a high-performance WordPress site, or a complex web app, I'm just a message away.
                    </p>

                    <Link
                        href="https://wa.me/9675159209?text=Hi 👋Thank you for reaching out!I’m Vishnu Vaishnav specializing in creating E-commerce websites, Real Estate websites, Fast , and user-friendly websites.Let me know what you’re looking for — new website, redesign, bug fixes, or custom features — and I’ll be happy to help." // Replace with actual number
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-[#20bd5a] hover:scale-105 active:scale-95"
                    >
                        <FaWhatsapp className="h-6 w-6" />
                        <span>Chat on WhatsApp</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
