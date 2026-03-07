"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function LetsConnect() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="mx-auto max-w-4xl px-0 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 sm:p-12 backdrop-blur-xl mx-2 sm:mx-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none" />

                    <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
                        Ready to start a project?
                    </h2>
                    <p className="mb-6 sm:mb-8 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-2 sm:px-0">
                        Whether it's a custom Shopify theme, a high-performance WordPress site, or a complex web app, I'm just a message away.
                    </p>

                    <Link
                        href="https://wa.me/9675159209?text=Hi 👋Thank you for reaching out!I’m Vishnu Vaishnav specializing in creating E-commerce websites, Real Estate websites, Fast , and user-friendly websites.Let me know what you’re looking for — new website, redesign, bug fixes, or custom features — and I’ll be happy to help." // Replace with actual number
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#25D366] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-[#20bd5a] hover:scale-105 active:scale-95 w-full sm:w-auto"
                    >
                        <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                        <span>Chat on WhatsApp</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
