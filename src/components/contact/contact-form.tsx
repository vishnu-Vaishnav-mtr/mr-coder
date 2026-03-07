"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export function ContactForm() {
    const [focused, setFocused] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                const errData = await res.json();
                setErrorMsg(errData.error || "Something went wrong.");
                setStatus("error");
            }
        } catch (error) {
            setErrorMsg("Network error. Please try again.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center backdrop-blur-md">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                    <FaPaperPlane className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400">
                    Thank you for reaching out. I'll get back to you inside 24 hours.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-white transition-colors hover:bg-white/10"
                >
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 md:p-8 backdrop-blur-md relative"
        >
            {/* Show general error notice if present */}
            {status === "error" && (
                <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                    {errorMsg}
                </div>
            )}
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
                    disabled={status === "loading"}
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 md:px-8 py-2 md:py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span>{status === "loading" ? "Sending Details..." : "Send Message"}</span>
                    {status !== "loading" && <FaPaperPlane className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                </motion.button>
            </div>
        </form>
    );
}
