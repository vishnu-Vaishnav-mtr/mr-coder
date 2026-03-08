"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GameScene } from "./game-scene";
import { motion, AnimatePresence } from "framer-motion";

import { ViewportLoader } from "@/components/viewport-loader";
import { useQualityProfile } from "@/lib/quality";

export function SkillLab() {
    const quality = useQualityProfile();
    const [score, setScore] = useState(0);
    const [lastCollected, setLastCollected] = useState<string | null>(null);

    const handleCollect = useCallback((skillName: string) => {
        setScore((prev) => prev + 1);
        setLastCollected(skillName);

        // Reset last collected message after delay
        setTimeout(() => setLastCollected(null), 1000);
    }, []);

    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    
    useEffect(() => {
        setIsMounted(true);
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <section
            className="relative h-[600px] w-full overflow-hidden py-10 hidden md:block"
            style={{ backgroundColor: "#020617" }}
        >
            {/* UI Overlay */}
            <div className="absolute left-0 top-0 z-10 p-8 w-full pointer-events-none">
                <div className="mx-auto flex max-w-6xl items-start justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            <span className="text-cyan-400">Skill</span> Lab
                        </h2>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Initialize Decryptor. Collect infinite data fragments.
                        </p>
                    </div>

                    <div className="text-right">
                        <div className="text-sm uppercase tracking-widest text-slate-500">
                            Data Decrypted
                        </div>
                        <div className="font-mono text-4xl font-bold text-cyan-400">
                            {score}
                        </div>
                    </div>
                </div>

                {/* Dynamic Feedback */}
                <AnimatePresence>
                    {lastCollected && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="rounded-xl border border-cyan-500/30 bg-slate-900/90 px-6 py-3 text-center shadow-[0_0_30px_rgba(34,211,238,0.2)] backdrop-blur-md">
                                <div className="text-xs uppercase tracking-wider text-cyan-400">
                                    System Acquired
                                </div>
                                <div className="text-2xl font-bold text-white">
                                    {lastCollected}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="absolute inset-0 z-0">
                <ViewportLoader minHeight="100%">
                    {isMounted && (
                        <Canvas 
                            dpr={isMobile ? [0.5, 1] : quality === 'high' ? [1, 2] : quality === 'medium' ? [1, 1.5] : [1, 1]} 
                            camera={{ position: [0, 0, 10], fov: 45 }}
                            frameloop={isMobile ? "demand" : "always"}
                        >
                            <color attach="background" args={['#020617']} />
                            <Suspense fallback={null}>
                                <GameScene onCollect={handleCollect} />
                            </Suspense>
                        </Canvas>
                    )}
                </ViewportLoader>
            </div>
        </section>
    );
}
