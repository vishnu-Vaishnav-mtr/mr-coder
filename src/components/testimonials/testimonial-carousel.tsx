"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { Testimonial } from "@/data";

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div
            className="relative mx-auto max-w-4xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 p-8 backdrop-blur-md md:p-12">
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10 flex flex-col items-center text-center"
                    >
                        <FaQuoteLeft className="mb-6 text-4xl text-cyan-500/50" />

                        <p className="mb-8 text-xl font-medium leading-relaxed text-white md:text-2xl lg:text-3xl">
                            "{testimonials[currentIndex].quote}"
                        </p>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl font-bold text-white shadow-lg shadow-cyan-500/20">
                                {testimonials[currentIndex].name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p className="text-sm text-slate-400">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10 hover:text-cyan-400 md:left-8"
                    aria-label="Previous testimonial"
                >
                    <FiChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors hover:bg-white/10 hover:text-cyan-400 md:right-8"
                    aria-label="Next testimonial"
                >
                    <FiChevronRight size={24} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="mt-8 flex justify-center gap-3">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-cyan-400" : "w-2 bg-slate-700 hover:bg-slate-600"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
