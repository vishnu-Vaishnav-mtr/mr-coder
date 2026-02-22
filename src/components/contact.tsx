"use client";

import { LetsWorkTogether } from "@/components/contact/lets-work-together";

export function Contact() {
    return (
        <section id="contact" className="relative py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
            <div className="relative mx-auto max-w-6xl px-5">
                <LetsWorkTogether />
            </div>
        </section>
    );
}
