"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useMemo, useEffect } from "react";
import * as THREE from "three";
import { Html, Float, Trail } from "@react-three/drei";
import { useIntro } from "./intro-context";
import gsap from "gsap";

interface EarthProps {
    distance: number;
    speed: number;
}

// Simple Code Particle
function CodeParticle({ position }: { position: [number, number, number] }) {
    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
            <mesh position={position}>
                <boxGeometry args={[0.05, 0.05, 0.05]} />
                <meshBasicMaterial color="#06b6d4" />
            </mesh>
        </Float>
    )
}

export function Earth({ distance, speed }: EarthProps) {
    const groupRef = useRef<THREE.Group>(null);
    const earthRef = useRef<THREE.Mesh>(null);
    const { startEntry, phase } = useIntro();
    const [hovered, setHovered] = useState(false);

    const { camera } = useThree();

    // Start angle safely hydrated
    const angle = useRef(0);
    useEffect(() => {
        angle.current = Math.random() * Math.PI * 2;
    }, []);

    // Tech Ring Particles
    const particles = useMemo(() => {
        return new Array(8).fill(0).map((_, i) => {
            const theta = (i / 8) * Math.PI * 2;
            return {
                x: Math.cos(theta) * 2.5,
                z: Math.sin(theta) * 2.5
            }
        })
    }, []);

    useFrame((state) => {
        // Stop orbit when transitioning
        if (phase === "idle" && groupRef.current) {
            angle.current += speed * 0.005;
            groupRef.current.position.x = Math.cos(angle.current) * distance;
            groupRef.current.position.z = Math.sin(angle.current) * distance;

            // Auto-rotate Earth
            if (earthRef.current) {
                earthRef.current.rotation.y += 0.005;
            }
        }
    });

    const handleClick = () => {
        if (phase !== "idle" || !groupRef.current) return;

        startEntry();

        const earthPos = new THREE.Vector3();
        groupRef.current.getWorldPosition(earthPos);

        const tl = gsap.timeline();

        // Cinematic Zoom
        tl.to(camera.position, {
            x: earthPos.x,
            y: earthPos.y + 0.5,
            z: earthPos.z + 4, // Get really close
            duration: 2.5,
            ease: "power3.inOut",
            onUpdate: () => camera.lookAt(earthPos)
        });

        // "Split" / Open Effect
        if (earthRef.current) {
            // Scale UP huge to consume screen aka "Open"
            tl.to(earthRef.current.scale, {
                x: 20,
                y: 20,
                z: 20,
                duration: 1.5,
                ease: "expo.in"
            }, "-=1.0");

            // Fade opacity (needs transparent material)
            // Note: adjusting opacity on standard material requires transparent=true
        }
    };

    return (
        <group ref={groupRef}>
            <mesh
                ref={earthRef}
                onClick={handleClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                scale={hovered && phase === 'idle' ? 1.2 : 1} // Slight hover scale
            >
                {/* Realistic Earth Appearance */}
                <sphereGeometry args={[2, 64, 64]} /> {/* Bigger size (2) */}
                <meshStandardMaterial
                    color="#2563eb" // Deep Blue
                    roughness={0.6}
                    metalness={0.1}
                    emissive="#1e3a8a" // Night lights hint
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Atmosphere Glow */}
            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[2, 64, 64]} />
                <meshBasicMaterial color="#60a5fa" transparent opacity={0.1} side={THREE.BackSide} />
            </mesh>

            {/* Tech Ring Orbiting Earth */}
            <group rotation-x={Math.PI / 2}>
                {particles.map((pos, i) => (
                    <group key={i} position={[pos.x, 0, pos.z]}>
                        <Trail width={0.5} length={2} color="#22d3ee" attenuation={(t) => t * t}>
                            <CodeParticle position={[0, 0, 0]} />
                        </Trail>
                    </group>
                ))}
            </group>

            {/* Mr Coder Marker */}
            <Html position={[0, 2.5, 0]} center distanceFactor={15} style={{ pointerEvents: 'none', transform: 'scale(1.5)' }}> {/* Scaled up */}
                <div
                    className={`
                flex flex-col items-center gap-2 transition-all duration-300
                ${phase === "idle" ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                ${hovered ? "scale-110" : ""}
            `}
                >
                    <div
                        className="pointer-events-auto cursor-pointer bg-slate-900/90 backdrop-blur-xl px-6 py-3 rounded-full border border-cyan-400/80 shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:bg-cyan-900/60 transition-colors group"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">👨‍💻</span>
                            <div className="flex flex-col">
                                <span className="text-cyan-300 font-bold whitespace-nowrap text-xl tracking-wide uppercase">Mr. Coder</span>
                                <span className="text-cyan-500/80 text-[10px] tracking-[0.2em] font-light uppercase">Enter Portfolio</span>
                            </div>
                        </div>
                    </div>

                    {/* Beam */}
                    <div className="h-12 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent opacity-80" />

                    {/* Target Ring */}
                    <div className="relative">
                        <div className="w-4 h-4 rounded-full border border-cyan-400 animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
                    </div>
                </div>
            </Html>
        </group>
    );
}
