"use client";

import { motion } from "framer-motion";
import { bioData } from "@/data/about";
import { TiltCard } from "@/components/tilt-card";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export function BioSection() {
    return (
        <section className="relative py-12 md:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >   <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Vishnu Vaishnav</span>
                    </h1>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        {bioData.heading}
                    </h2>
                    {/* <h3 className="mb-8 text-xl font-medium text-cyan-400">
                        {bioData.subheading}
                    </h3> */}
                    <div className="space-y-6 text-lg leading-relaxed text-slate-400">
                        {bioData.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="contact-div flex flex-wrap sm:items-center gap-2 sm:gap-3 mt-6">
                        <Link
                            href="https://wa.me/9675159209"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex w-full sm:w-auto items-center button-primary justify-center gap-2 sm:gap-3"
                        >
                            <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                            <span>Chat on WhatsApp</span>
                        </Link>

                        <Link
                            href="mailto:vishnuvaishnavmtr@gmail.com"
                            className="group inline-flex w-full sm:w-auto items-center button-primary justify-center gap-2 sm:gap-3"
                        >
                            <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                            <span>Email Me</span>
                        </Link>
                    </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mx-auto w-full max-w-md lg:max-w-none lg:sticky lg:top-24 h-fit"
                >
                    <TiltCard className="relative ">
                        <Image
                            src="/about-us-bnr.webp"
                            alt="Vishnu Vaishnav"
                            width={500}
                            height={600}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="rounded-2xl border border-white/10 shadow-2xl object-cover w-full h-full"
                        />
                        </TiltCard>
                </motion.div>
            </div>
        </section>
    );
}
