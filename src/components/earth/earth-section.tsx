"use client";

import { useState, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EarthScene } from "./earth-scene";
import { motion } from "framer-motion";

import { ViewportLoader } from "@/components/viewport-loader";
import { useQualityProfile } from "@/lib/quality";

export function EarthSection() {
    const [isMounted, setIsMounted] = useState(false);
    const quality = useQualityProfile();
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="relative h-[800px] w-full overflow-hidden bg-slate-950">
            {/* UI Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none p-6 md:p-12 flex flex-col justify-between">
                {/* Header */}
                <div className="pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Global <span className="text-cyan-400">Presence</span>
                        </h2>
                        <p className="text-slate-400 mt-2 max-w-md">
                            Based in New Delhi, working with clients worldwide.
                            Explore the simulation.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Canvas implementation */}
            <div className="absolute inset-0 z-0">
               <ViewportLoader minHeight="100%">
                   {isMounted && (
                        <Canvas 
                            dpr={quality === 'high' ? [1, 2] : quality === 'medium' ? [1, 1.5] : [0.5, 1]} 
                            camera={{ position: [0, 0, 6], fov: 45 }}
                            frameloop={quality === 'low' ? "demand" : "always"}
                        >
                            <EarthScene />
                            <OrbitControls
                                enablePan={false}
                                enableZoom={false}
                                minDistance={4}
                                maxDistance={10}
                                autoRotate
                                autoRotateSpeed={0.5}
                            />
                        </Canvas>
                   )}
               </ViewportLoader>
            </div>
        </section>
    );
}
