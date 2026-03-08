import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Variants } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const floatIn: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.04, duration: 0.3, ease: "easeOut" },
    }),
};
