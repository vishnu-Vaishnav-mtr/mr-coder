"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export function ContactForm() {
    const [focused, setFocused] = useState<string | null>(null);

    return (
        <form
            action="https://formspree.io/f/mrbgvjgn"
            method="POST"
            className="rounded-2xl border border-white/10 bg-slate-950/50 p-8 backdrop-blur-md"
        >
            <div className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Name</label>
                    <div className="relative">
                        <input
                            required
                            name="name"
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused(null)}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/50"
                            placeholder="Your Name"
                        />
                        {focused === "name" && (
                            <motion.div
                                layoutId="input-focus"
                                className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-cyan-500/10 opacity-50 blur-md"
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <div className="relative">
                        <input
                            required
                            type="email"
                            name="email"
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused(null)}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/50"
                            placeholder="you@company.com"
                        />
                        {focused === "email" && (
                            <motion.div
                                layoutId="input-focus"
                                className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-cyan-500/10 opacity-50 blur-md"
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </div>
                </div>

                {/* Service Type Selection */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Service Required</label>
                    <div className="relative">
                        <select
                            name="service"
                            onFocus={() => setFocused("service")}
                            onBlur={() => setFocused(null)}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/50 appearance-none"
                        >
                            <option value="" className="bg-slate-900 text-slate-400">Select an option</option>
                            <option value="shopify" className="bg-slate-900">Shopify Development</option>
                            <option value="wordpress" className="bg-slate-900">WordPress Solution</option>
                            <option value="webapp" className="bg-slate-900">Web Application</option>
                            <option value="other" className="bg-slate-900">Other</option>
                        </select>
                        {focused === "service" && (
                            <motion.div
                                layoutId="input-focus"
                                className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-cyan-500/10 opacity-50 blur-md"
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Project Details</label>
                    <div className="relative">
                        <textarea
                            required
                            name="message"
                            rows={4}
                            onFocus={() => setFocused("message")}
                            onBlur={() => setFocused(null)}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/50 resize-none"
                            placeholder="Tell me about your goals, timeline, and budget..."
                        />
                        {focused === "message" && (
                            <motion.div
                                layoutId="input-focus"
                                className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-cyan-500/10 opacity-50 blur-md"
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40"
                >
                    <span>Send Message</span>
                    <FaPaperPlane className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
            </div>
        </form>
    );
}
