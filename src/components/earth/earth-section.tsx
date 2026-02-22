"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EarthScene } from "./earth-scene";
import { motion } from "framer-motion";

export function EarthSection() {
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

            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
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
        </section>
    );
}
