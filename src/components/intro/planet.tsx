"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface PlanetProps {
    size: number;
    distance: number;
    speed: number;
    color: string;
    Texture?: string; // Optional texture path
    ring?: boolean;
}

export function Planet({ size, distance, speed, color, ring }: PlanetProps) {
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Mesh>(null);

    // Random start angle
    const angle = useRef(Math.random() * Math.PI * 2);

    useFrame((state) => {
        if (groupRef.current) {
            // Orbit Logic
            angle.current += speed * 0.01;
            groupRef.current.position.x = Math.cos(angle.current) * distance;
            groupRef.current.position.z = Math.sin(angle.current) * distance;
        }
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh ref={meshRef}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} roughness={0.7} metalness={0.2} />
            </mesh>

            {/* Ring (Saturn-like) */}
            {ring && (
                <mesh rotation-x={Math.PI / 2}>
                    <ringGeometry args={[size * 1.4, size * 2, 32]} />
                    <meshBasicMaterial color={color} side={THREE.DoubleSide} opacity={0.5} transparent />
                </mesh>
            )}

            {/* Orbit Trail/Line (Optional visual aid) */}
            <mesh rotation-x={Math.PI / 2}>
                <ringGeometry args={[distance - 0.1, distance + 0.1, 64]} />
                <meshBasicMaterial color="#ffffff" opacity={0.05} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
}
