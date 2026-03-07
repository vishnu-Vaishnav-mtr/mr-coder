"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

export function ViewportLoader({ children, minHeight = "400px" }: { children: ReactNode; minHeight?: string }) {
    const [isInView, setIsInView] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "400px" }}
            onViewportEnter={() => setIsInView(true)}
            style={{ minHeight: isInView ? "auto" : minHeight }}
            className="w-full relative min-w-full"
        >
            {isInView ? children : null}
        </motion.div>
    );
}
