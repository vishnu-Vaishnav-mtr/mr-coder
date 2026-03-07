import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// Removed unused maath import

import { useState } from "react";
import { motion } from "framer-motion";

function Stars(props: any) {
    const ref = useRef<any>(null);
    const sphere = useMemo(() => {
        // Reduced from 5000 to 1500 for better performance
        const points = new Float32Array(1500 * 3);
        for (let i = 0; i < 1500; i++) {
            const r = 1.2 * Math.sqrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            points[i * 3 + 2] = r * Math.cos(phi);
        }
        return points;
    }, []);

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

export function StatsBackground() {
    const [isInView, setIsInView] = useState(false);

    return (
        <motion.div 
            className="absolute inset-0 z-0"
            onViewportEnter={() => {
                if (!isInView) setIsInView(true);
            }}
            viewport={{ once: true, margin: "200px" }}
        >
            {isInView && (
                <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
                    <Stars />
                </Canvas>
            )}
        </motion.div>
    );
}
