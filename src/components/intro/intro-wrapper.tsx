"use client";

import { ReactNode, useEffect } from "react";
import { IntroProvider, useIntro } from "./intro-context";
import { IntroOverlay } from "./intro-overlay";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

const NeuralNetworkScene = dynamic(
    () => import("./neural-network-scene").then((m) => m.NeuralNetworkScene),
    { ssr: false }
);

function IntroContent({ children }: { children: ReactNode }) {
    const { phase } = useIntro();

    return (
        <>
            <AnimatePresence>
                {phase !== "complete" && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-slate-950"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <NeuralNetworkScene />
                        <IntroOverlay />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={`transition-opacity duration-1000 ${phase === 'complete' ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
                {children}
            </div>
        </>
    )
}

function SafetyTimeout() {
    const { phase, skipIntro } = useIntro();

    useEffect(() => {
        if (phase !== "complete") {
            const timer = setTimeout(() => {
                console.log("Intro safety timeout. Auto-skipping.");
                skipIntro(); 
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [phase, skipIntro]);

    return null;
}

export function IntroWrapper({ children }: { children: ReactNode }) {
    return (
        <IntroProvider>
            <SafetyTimeout />
            <IntroContent>{children}</IntroContent>
        </IntroProvider>
    );
}


