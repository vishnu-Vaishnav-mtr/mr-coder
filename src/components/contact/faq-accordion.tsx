"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/contact";
import { FiPlus, FiMinus } from "react-icons/fi";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-white text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq) => {
                    const isOpen = openId === faq.id;
                    return (
                        <div
                            key={faq.id}
                            className={cn(
                                "overflow-hidden rounded-xl border bg-slate-950/30 transition-colors",
                                isOpen ? "border-cyan-500/30" : "border-white/10 hover:border-white/20"
                            )}
                        >
                            <button
                                onClick={() => setOpenId(isOpen ? null : faq.id)}
                                className="flex w-full items-center justify-between p-6 text-left"
                            >
                                <span className={cn("font-medium", isOpen ? "text-cyan-400" : "text-white")}>
                                    {faq.question}
                                </span>
                                {isOpen ? <FiMinus className="text-cyan-400" /> : <FiPlus className="text-slate-500" />}
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
