"use client";

import { motion, AnimatePresence } from "framer-motion";

export function ContactModal({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    if (!open) return null;
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.96, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 22 }}
                    onClick={(e) => e.stopPropagation()}
                    className="glass neon-border relative w-full max-w-xl space-y-4 rounded-3xl border border-white/10 bg-slate-950/90 p-8 text-white"
                >
                    <button
                        className="absolute right-4 top-4 rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:border-white/40"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <h3 className="text-2xl font-semibold">Hire Mr. Coder</h3>
                    <p className="text-white/70">
                        Tell me about your Shopify or WordPress build. I respond within 24 hours.
                    </p>
                    <form
                        action="https://formspree.io/f/mrbgvjgn"
                        method="POST"
                        className="space-y-3"
                    >
                        <input
                            required
                            name="name"
                            placeholder="Name"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/60"
                        />
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/60"
                        />
                        <textarea
                            required
                            name="message"
                            rows={4}
                            placeholder="Project details"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/60"
                        />
                        <button type="submit" className="button-primary w-full">
                            Send brief
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
