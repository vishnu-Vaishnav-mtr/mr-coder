"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { useIntro } from "./intro-context";
import * as THREE from "three";
import { Planet } from "./planet";
import { Earth } from "./earth";

function Sun() {
    return (
        <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshStandardMaterial
                emissive="#fbbf24"
                emissiveIntensity={2}
                color="#fbbf24"
                toneMapped={false}
            />
            <pointLight intensity={2} color="#fbbf24" distance={100} decay={2} />
        </mesh>
    );
}

function SceneLights() {
    return (
        <>
            <ambientLight intensity={0.1} />
            {/* Sun Light is inside sun */}
            <directionalLight position={[10, 10, 5]} intensity={0.5} color="#blue" />
        </>
    );
}

export function SolarSystemScene() {
    const { phase } = useIntro();
    const camRef = useRef<THREE.PerspectiveCamera>(null);
    const [isMobile, setIsMobile] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (phase === "complete") return null;

    return (
        <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${phase !== "idle" ? "pointer-events-none" : ""}`}>
            {isMounted && (
                <Canvas dpr={[1, 1.5]} gl={{ toneMapping: THREE.ReinhardToneMapping }}>
                    <PerspectiveCamera makeDefault position={[0, 20, 60]} fov={45} ref={camRef} />

                    <Suspense fallback={null}>
                        <SceneLights />

                        {/* Milky Way / Deep Space Background */}
                        <Stars radius={300} depth={50} count={isMobile ? 1000 : 10000} factor={6} saturation={0} fade speed={0.5} />
                        <Stars radius={100} depth={50} count={isMobile ? 500 : 5000} factor={4} saturation={1} fade speed={1} /> {/* Colored inner stars */}

                        <Sun />

                        {/* Planets - "Realstatic" colors */}
                        <group>
                            <Planet size={0.4} distance={6} speed={4} color="#a1a1aa" /> {/* Mercury: Grey/Rock */}
                            <Planet size={0.9} distance={10} speed={3} color="#fcd34d" /> {/* Venus: Gold/Cloudy */}
                            {/* Earth is separate */}
                            <Earth distance={22} speed={1.5} /> {/* Further out for drama */}

                            <Planet size={0.5} distance={30} speed={1.2} color="#ef4444" /> {/* Mars: Red */}
                            <Planet size={4.5} distance={45} speed={0.8} color="#d97706" /> {/* Jupiter: Orange/Stripes */}
                            <Planet size={3.8} distance={60} speed={0.5} color="#fef3c7" ring={true} /> {/* Saturn: Pale Gold + Ring */}
                            <Planet size={1.8} distance={75} speed={0.4} color="#bfdbfe" /> {/* Uranus: Light Blue Ice */}
                            <Planet size={1.7} distance={85} speed={0.3} color="#3b82f6" /> {/* Neptune: Deep Blue */}
                        </group>

                        {!isMobile && (
                            <EffectComposer>
                                <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={1.5} />
                                <Vignette eskil={false} offset={0.1} darkness={1.1} />
                            </EffectComposer>
                        )}
                    </Suspense>

                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.5} />
                </Canvas>
            )}

            {/* UI Overlay */}
            <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase transition-opacity duration-500 ${phase !== 'idle' ? 'opacity-0' : 'opacity-100'}`}>
                Explore the Universe
            </div>
        </div>
    );
}
