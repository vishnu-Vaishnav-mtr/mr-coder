"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type IntroPhase = "idle" | "zooming" | "disperse" | "complete";

interface IntroContextType {
    phase: IntroPhase;
    startEntry: () => void;
    skipIntro: () => void;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export function IntroProvider({ children }: { children: ReactNode }) {
    const [phase, setPhase] = useState<IntroPhase>("idle");

    useEffect(() => {
        // Check session storage instead of local storage so it plays once per browser session
        // (Or comment out entirely to show every time)
        const seen = sessionStorage.getItem("intro_seen");
        if (seen === "true") {
            setPhase("complete");
        }
    }, []);

    const startEntry = () => {
        setPhase("zooming");
        // Sequence: Zoom (2s) -> Disperse (1s) -> Complete
        setTimeout(() => setPhase("disperse"), 2000);
        setTimeout(() => {
            setPhase("complete");
            sessionStorage.setItem("intro_seen", "true");
        }, 3500);
    };

    const skipIntro = () => {
        setPhase("complete");
        sessionStorage.setItem("intro_seen", "true");
    };

    return (
        <IntroContext.Provider value={{ phase, startEntry, skipIntro }}>
            {children}
        </IntroContext.Provider>
    );
}

export const useIntro = () => {
    const context = useContext(IntroContext);
    if (!context) throw new Error("useIntro must be used within IntroProvider");
    return context;
};
