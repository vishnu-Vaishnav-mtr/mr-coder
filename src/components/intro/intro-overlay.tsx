"use client";

import { useIntro } from "./intro-context";

export function IntroOverlay() {
    const { phase, skipIntro } = useIntro();

    if (phase === "complete") return null;

    return (
        <div className="absolute inset-0 z-50 pointer-events-none">
            <div
                className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-32
            transition-all duration-700 delay-500
            ${phase === 'idle' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
            >
                <p className="text-cyan-200/50 text-sm tracking-[0.3em] uppercase animate-pulse text-center">
                    Tap the Brain to Enter
                </p>
            </div>

            <button
                onClick={skipIntro}
                className={`
            pointer-events-auto absolute bottom-8 right-8 text-xs text-white/30 hover:text-white 
            uppercase tracking-widest transition-opacity duration-300
            ${phase === 'idle' ? 'opacity-100' : 'opacity-0'}
        `}
            >
                Skip Intro
            </button>
        </div>
    );
}
