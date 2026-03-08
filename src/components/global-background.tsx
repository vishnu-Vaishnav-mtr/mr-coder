"use client";

import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

import { useQualityProfile } from "@/lib/quality";

function StarField(props: any) {
    const quality = useQualityProfile();
    const ref = useRef<any>(null);

    // Generate points - adaptive based on hardware quality
    const sphere = useMemo(() => {
        const count = quality === "high" ? 500 : quality === "medium" ? 250 : 100;
        const points = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 1.2 * Math.sqrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            points[i * 3 + 2] = r * Math.cos(phi);
        }
        return points;
    }, [quality]);

    useFrame((state, delta) => {
        if (ref.current) {
            // Gentle rotation
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#38bdf8" // Sky-400 equivalent
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

export function GlobalBackground() {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Wait for mount to avoid hydration mismatch, but maintain standard layout
    if (!isMounted) {
         return (
             <div className="fixed inset-0 z-[-1] bg-[#020617] pointer-events-none">
                 <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
                 <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-60" />
             </div>
         );
    }

    return (
        <div className="fixed inset-0 z-[-1] bg-[#020617] pointer-events-none">
            {/* Mobile Fallback - 0% WebGL Overhead */}
            <div className="block md:hidden absolute inset-0 z-[-1] bg-[#020617] pointer-events-none">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
                <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-60" />
            </div>

            {/* Desktop 3D Stars Layer */}
            <div className="hidden md:block absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1]}>
                    <Suspense fallback={null}>
                        <StarField />
                    </Suspense>
                </Canvas>
            </div>

            {/* Gradient Overlay to match Experience styling */}
            <div className="hidden md:block absolute inset-0 z-10 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />

            {/* Subtle Vignette */}
            <div className="hidden md:block absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-60" />
        </div>
    );
}
