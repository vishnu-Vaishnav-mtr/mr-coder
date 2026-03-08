"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ReactNode } from "react";

export function ViewportLoader({ children, minHeight = "100%" }: { children: ReactNode; minHeight?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    // Mount when within 800px of scrolling into view, unmount when further away.
    const isInView = useInView(ref, { margin: "800px" });

    return (
        <div ref={ref} style={{ minHeight, width: "100%", height: "100%" }} className="relative transform-gpu">
            {isInView ? children : null}
        </div>
    );
}
