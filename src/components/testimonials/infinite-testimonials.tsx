"use client";

import { FaQuoteLeft } from "react-icons/fa";
import { Testimonial } from "@/data";

interface InfiniteTestimonialsProps {
    testimonials: Testimonial[];
    speed?: number; // Duration in seconds
    direction?: "left" | "right";
}

export function InfiniteTestimonials({
    testimonials,
    speed = 40,
    direction = "left",
}: InfiniteTestimonialsProps) {
    // Duplicate items to create a seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
            {/* Edge fading gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-slate-950 to-transparent z-10" />

            <div className="relative w-full overflow-hidden" style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}>
                <div
                    className="flex w-max py-4 animate-marquee"
                    style={{ animationDirection: direction === "left" ? "normal" : "reverse" }}
                >
                    {duplicatedTestimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="group relative mr-6 h-full w-[350px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:bg-white/10"
                        >
                            <FaQuoteLeft className="mb-4 text-2xl text-cyan-500/40" />

                            <p className="mb-6 text-sm leading-relaxed text-slate-300">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-slate-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
