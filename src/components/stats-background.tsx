import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// Removed unused maath import

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useQualityProfile } from "@/lib/quality";

function Stars(props: any) {
    const quality = useQualityProfile();
    const ref = useRef<any>(null);
    
    const sphere = useMemo(() => {
        const count = quality === "high" ? 600 : quality === "medium" ? 300 : 150;
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
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#38bdf8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

import { ViewportLoader } from "@/components/viewport-loader";

export function StatsBackground() {
    const [isMobile, setIsMobile] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <ViewportLoader minHeight="100%">
                {isMounted && (
                    <Canvas 
                        camera={{ position: [0, 0, 1] }} 
                        dpr={isMobile ? [0.5, 1] : [1, 1]}
                        frameloop={isMobile ? "demand" : "always"}
                    >
                        <Stars />
                    </Canvas>
                )}
            </ViewportLoader>
        </div>
    );
}
