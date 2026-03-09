"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ReactNode } from "react";

export function ViewportLoader({ children, minHeight = "100%", className = "" }: { children: ReactNode; minHeight?: string; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    // Mount when within 800px of scrolling into view, and remain mounted to prevent layout jumping
    const isInView = useInView(ref, { margin: "800px", once: true });

    return (
        <div ref={ref} style={{ minHeight, width: "100%", height: "100%" }} className={`relative transform-gpu ${className}`}>
            {isInView ? children : null}
        </div>
    );
}
