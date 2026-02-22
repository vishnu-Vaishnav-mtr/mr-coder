"use client";

import { useCursor, Html, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useIntro } from "./intro-context";
import gsap from "gsap";

export function MrCoderNode() {
    const meshRef = useRef<THREE.Mesh>(null);
    const glowRef = useRef<THREE.Mesh>(null);
    const { phase, startEntry } = useIntro();
    const [hovered, setHover] = useState(false);
    useCursor(hovered && phase === 'idle');

    useFrame((state) => {
        if (phase === 'idle' && meshRef.current && glowRef.current) {
            const t = state.clock.elapsedTime;

            // Organic Distort Pulse is handled by material prop, but we can rotate mesh
            meshRef.current.rotation.y = t * 0.2;
            meshRef.current.rotation.z = t * 0.1;

            // Magnetic Parallax Effect on Mouse
            if (hovered) {
                meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, state.pointer.y * 0.5, 0.1);
                meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, state.pointer.x * 0.5, 0.1);
            }

            // Outer Pulse
            const scale = 1.2 + Math.sin(t * 3) * 0.05 + (hovered ? 0.2 : 0);
            glowRef.current.scale.set(scale, scale, scale);
            glowRef.current.rotation.y -= 0.01;
        }
    });

    const handleClick = () => {
        if (phase === 'idle') startEntry();
    };

    return (
        <group>
            {/* Core Node - Distorted Brain */}
            <mesh
                ref={meshRef}
                onClick={handleClick}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <icosahedronGeometry args={[1, 16]} />
                <MeshDistortMaterial
                    color="#06b6d4"
                    emissive="#22d3ee"
                    emissiveIntensity={hovered ? 2.5 : 1.5}
                    roughness={0.1}
                    metalness={0.9}
                    distort={0.4}
                    speed={2.5}
                />
            </mesh>

            {/* Holographic Containment Field */}
            <mesh ref={glowRef}>
                <sphereGeometry args={[1.3, 32, 32]} />
                <meshBasicMaterial
                    color="#22d3ee"
                    transparent
                    opacity={0.1}
                    wireframe
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Glowing Particle Field Around Brain */}
            <points>
                <sphereGeometry args={[2, 32, 32]} />
                <pointsMaterial color="#a5f3fc" size={0.02} transparent opacity={0.4} />
            </points>


            {/* Holographic Button / Label */}
            <Html position={[0, 2.2, 0]} center distanceFactor={12} style={{ pointerEvents: 'none' }}>
                <div
                    className={`
                 transition-all duration-700 ease-out flex flex-col items-center gap-2
                ${phase === 'idle' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-90 blur-md'}
            `}
                >
                    <div className="relative group cursor-pointer pointer-events-auto" onClick={handleClick}>
                        {/* Glass Card */}
                        <div className={`
                            bg-slate-950/40 backdrop-blur-xl border border-cyan-500/30 px-6 py-3 rounded-2xl 
                            shadow-[0_0_40px_rgba(6,182,212,0.2)] 
                            transition-all duration-300
                            ${hovered ? 'bg-cyan-950/50 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.4)]' : ''}
                        `}>
                            <h2 className="text-cyan-200 font-bold whitespace-nowrap text-xl tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] flex items-center gap-3">
                                Mr. Coder <span className="text-2xl animate-pulse">🧠</span>
                            </h2>
                            <div className={`
                                absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent
                                opacity-0 transition-opacity duration-500
                                ${hovered ? 'opacity-100' : ''}
                            `} />
                        </div>

                        {/* Data Line */}
                        <div className="absolute left-1/2 top-full w-[2px] h-8 bg-gradient-to-b from-cyan-400 to-transparent -translate-x-1/2 opacity-60" />
                    </div>
                </div>
            </Html>
        </group>
    );
}
