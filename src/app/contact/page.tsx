"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialGrid } from "@/components/contact/social-grid";
import { FAQAccordion } from "@/components/contact/faq-accordion";
import { ViewportLoader } from "@/components/viewport-loader";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen pt-40 pb-12">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                    >
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Build</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-slate-400"
                    >
                        Ready to start your next project? Fill out the form or reach out through social channels.
                    </motion.p>
                </div>

                <div className="mb-24 grid gap-12 lg:grid-cols-[1fr_400px]">
                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <ContactForm />
                    </motion.div>

                    {/* Right Column: Socials & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Status Card */}
                        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                                </div>
                                <span className="font-semibold text-emerald-400">Available for new projects</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-400">
                                Currently accepting Shopify and custom web application projects for Q2.
                            </p>
                        </div>

                        {/* Social Links */}
                        <SocialGrid />

                        {/* Direct Contact Info */}
                        <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-6 backdrop-blur-sm">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Direct Contact
                            </h3>
                            <div className="space-y-2">
                                <p className="text-white">vishnuvaishnavmtr@gmail.com</p>
                                <p className="text-slate-400 text-sm">Response time: &lt; 24 hours</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <ViewportLoader minHeight="400px">
                        <FAQAccordion />
                    </ViewportLoader>
                </motion.div>
            </div>
        </main>
    );
}
