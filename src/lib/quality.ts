"use client";

import { useState, useEffect } from "react";

export type QualityPreset = "low" | "medium" | "high";

export function useQualityProfile(): QualityPreset {
    const [quality, setQuality] = useState<QualityPreset>("high");

    useEffect(() => {
        if (typeof window === "undefined") return;

        let hardwareScore = 0;
        
        // Logical Processors (usually 2-4 on low-end mobile, 8+ on modern desktop/phones)
        const cores = navigator.hardwareConcurrency || 4;
        if (cores >= 8) hardwareScore += 2;
        else if (cores >= 4) hardwareScore += 1;

        // Device Memory (GB) - usually available on Android/Chrome
        // @ts-ignore
        const memory = navigator.deviceMemory || 4;
        if (memory >= 8) hardwareScore += 2;
        else if (memory >= 4) hardwareScore += 1;

        // Mobile device heuristic
        const isMobile = window.innerWidth < 768;
        if (isMobile) hardwareScore -= 2;

        if (hardwareScore >= 3) {
            setQuality("high");
        } else if (hardwareScore >= 1) {
            setQuality("medium");
        } else {
            setQuality("low");
        }
    }, []);

    return quality;
}
