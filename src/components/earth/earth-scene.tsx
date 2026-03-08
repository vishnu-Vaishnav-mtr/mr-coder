"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Cloud, Html, Sparkles, Stars, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { MARKERS, latLngToVector3 } from "./earth-config";
import { useQualityProfile } from "@/lib/quality";

// Default sunny weather parameters
const params = {
    bg: "#0f172a",
    ambientIntensity: 0.8,
    sunIntensity: 2,
    fogColor: "#0f172a",
    fogDensity: 0.02,
    cloudOpacity: 0.3,
    particleColor: "#fbbf24",
    particleCount: 50,
};

export function EarthScene() {
    const quality = useQualityProfile();
    const earthRadius = 2.5;
    
    // Adaptive geometry detail based on hardware
    const segments = quality === "high" ? 64 : quality === "medium" ? 32 : 24;

    // Refs for animation smoothing
    const sunRef = useRef<THREE.DirectionalLight>(null);
    const ambientRef = useRef<THREE.AmbientLight>(null);
    const fogRef = useRef<THREE.FogExp2>(null);

    useFrame((state, delta) => {
        // Smooth transitions for lighting and fog
        if (sunRef.current) {
            sunRef.current.intensity = THREE.MathUtils.lerp(sunRef.current.intensity, params.sunIntensity, delta * 2);
        }
        if (ambientRef.current) {
            ambientRef.current.intensity = THREE.MathUtils.lerp(ambientRef.current.intensity, params.ambientIntensity, delta * 2);
        }
        if (fogRef.current) {
            fogRef.current.color.lerp(new THREE.Color(params.fogColor), delta * 2);
            fogRef.current.density = THREE.MathUtils.lerp(fogRef.current.density, params.fogDensity, delta * 2);
        }
        state.scene.background = fogRef.current ? fogRef.current.color : new THREE.Color(params.bg);
    });

    return (
        <>
            {/* Atmosphere / Fog */}
            <fogExp2 ref={fogRef} attach="fog" args={[params.fogColor, params.fogDensity]} />

            {/* Lighting */}
            <ambientLight ref={ambientRef} intensity={params.ambientIntensity} />
            <directionalLight ref={sunRef} position={[10, 10, 5]} intensity={params.sunIntensity} />

            {/* Backdrops */}
            <Stars radius={100} depth={50} count={quality === 'high' ? 5000 : quality === 'medium' ? 2000 : 500} factor={4} saturation={0} fade speed={0.5} />

            {/* Main Earth Sphere */}
            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
                <group rotation={[0, 0, 0.4]}> {/* Tilt axis */}
                    <Sphere args={[earthRadius, segments, segments]}>
                        <meshStandardMaterial
                            color="#1e293b" // Slate base
                            emissive="#0f172a"
                            emissiveIntensity={0.2}
                            roughness={0.7}
                            metalness={0.1}
                            wireframe={false}
                        />
                    </Sphere>

                    {/* Wireframe Overlay for "Futuristic" feel */}
                    <Sphere args={[earthRadius + 0.01, segments, segments]}>
                        <meshBasicMaterial
                            color="#38bdf8"
                            wireframe
                            transparent
                            opacity={0.1}
                        />
                    </Sphere>

                    {/* Cloud Layer (Dynamic Opacity based on weather) - Hidden on low settings */}
                    {quality !== 'low' && (
                        <Cloud
                            opacity={params.cloudOpacity}
                            speed={0.4} // Rotation speed
                            segments={quality === 'high' ? 20 : 10} // Number of particles
                            color="#ffffff"
                            position={[0, 0, 0]}
                        />
                    )}

                    {/* Markers */}
                    {MARKERS.map((marker, i) => {
                        const pos = latLngToVector3(marker.lat, marker.lng, earthRadius);
                        return (
                            <group key={i} position={pos}>
                                {/* Glowing Pin */}
                                <mesh position={[0, 0.1, 0]}>
                                    <cylinderGeometry args={[0.02, 0.005, 0.4, 8]} />
                                    <meshBasicMaterial color={marker.color} />
                                </mesh>
                                <mesh position={[0, 0.3, 0]}>
                                    <sphereGeometry args={[0.05, 16, 16]} />
                                    <meshBasicMaterial color="white" />
                                </mesh>
                                {/* Glow effect mesh */}
                                <mesh position={[0, 0.3, 0]}>
                                    <sphereGeometry args={[0.08, 16, 16]} />
                                    <meshBasicMaterial color={marker.color} transparent opacity={0.5} />
                                </mesh>

                                {/* Annotation */}
                                <Html position={[0, 0.6, 0]} center distanceFactor={10}>
                                    <div className="flex flex-col items-center pointer-events-none whitespace-nowrap">
                                        <div className="bg-black/60 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-lg text-center transform transition-transform">
                                            <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">{marker.label}</div>
                                            <div className="text-[8px] text-slate-300">{marker.subLabel}</div>
                                        </div>
                                        <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                                    </div>
                                </Html>
                            </group>
                        );
                    })}
                </group>
            </Float>

            {/* Weather Particles (Sun Motes) - Reduced or disabled on lower tier devices */}
            {quality !== 'low' && (
                <Sparkles
                    count={quality === 'high' ? params.particleCount : params.particleCount / 2}
                    scale={12}
                    size={6}
                    speed={0.4}
                    opacity={0.6}
                    color={params.particleColor}
                />
            )}

            {/* Post Processing - Extremely expensive so disabled on low */}
            {quality !== 'low' && (
                <EffectComposer enableNormalPass={false}>
                    <Bloom luminanceThreshold={1} mipmapBlur intensity={quality === 'high' ? 1.5 : 0.8} radius={0.6} />
                </EffectComposer>
            )}
        </>
    );
}
