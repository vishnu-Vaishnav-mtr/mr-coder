"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Trail, Text } from "@react-three/drei";
import * as THREE from "three";
import { Vector3 } from "three";

type Skill = {
    id: string;
    name: string;
    color: string;
    position: [number, number, number];
    rotation: [number, number, number];
};

const SKILLS_DATA = [
    { name: "Shopify", color: "#95BF47" },
    { name: "WordPress", color: "#21759b" },
    { name: "WooCommerce", color: "#96588a" },
    { name: "PHP", color: "#777bb4" },
    { name: "MySQL", color: "#4479a1" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "jQuery", color: "#0769ad" },
    { name: "HTML5", color: "#e34f26" },
    { name: "CSS3", color: "#1572b6" },
    { name: "Elementor", color: "#92003b" },
];

export function GameScene({
    onCollect,
}: {
    onCollect: (skill: string) => void;
}) {
    const { viewport } = useThree();
    const playerRef = useRef<THREE.Mesh>(null);

    const getSafePosition = (existingPositions: [number, number, number][]): [number, number, number] => {
        let position: [number, number, number];
        let attempts = 0;
        const maxAttempts = 50;
        const minDistance = 1.5;

        do {
            position = [
                (Math.random() - 0.5) * 9,
                (Math.random() - 0.5) * 5,
                0
            ];

            let collision = false;
            for (const existing of existingPositions) {
                const dx = position[0] - existing[0];
                const dy = position[1] - existing[1];
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < minDistance) {
                    collision = true;
                    break;
                }
            }
            if (!collision) return position;
            attempts++;
        } while (attempts < maxAttempts);

        return position;
    };

    // Initialize state with a function to ensure randomness only runs once on mount
    const [skills, setSkills] = useState<Skill[]>(() => {
        const initialSkills: Skill[] = [];
        const positions: [number, number, number][] = [];

        SKILLS_DATA.forEach((s) => {
            const position = getSafePosition(positions);
            positions.push(position);
            initialSkills.push({
                id: s.name,
                name: s.name,
                color: s.color,
                position: position,
                rotation: [Math.random(), Math.random(), 0],
            });
        });
        return initialSkills;
    });

    const cooldowns = useRef<Map<string, number>>(new Map());

    useFrame(({ mouse, clock }) => {
        if (playerRef.current) {
            // Smooth player movement to mouse position
            const x = (mouse.x * viewport.width) / 2;
            const y = (mouse.y * viewport.height) / 2;
            playerRef.current.position.lerp(new Vector3(x, y, 0), 0.1);

            // Check collisions with Player
            skills.forEach((skill) => {
                const lastHit = cooldowns.current.get(skill.id) || 0;
                if (clock.elapsedTime - lastHit < 1.0) return; // 1s cooldown per skill

                const skillPos = new Vector3(...skill.position);
                const distance = playerRef.current!.position.distanceTo(skillPos);

                if (distance < 1.5) { // Collision radius (slightly increased for better feel)
                    // Record collision time
                    cooldowns.current.set(skill.id, clock.elapsedTime);
                    
                    // Collision detected
                    onCollect(skill.name);

                    // Respawn skill at new safe position
                    setSkills((prev) => {
                        const currentPositions = prev.filter(p => p.id !== skill.id).map(p => p.position);
                        const newPos = getSafePosition(currentPositions);

                        return prev.map((s) =>
                            s.id === skill.id
                                ? {
                                    ...s,
                                    position: newPos,
                                    rotation: [Math.random(), Math.random(), 0],
                                }
                                : s
                        );
                    });
                }
            });
        }
    });

    return (
        <>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <fog attach="fog" args={['#020617', 8, 30]} />

            {/* Player */}
            <Trail
                width={2}
                length={8}
                color={"#22d3ee"}
                attenuation={(t) => t * t}
            >
                <mesh ref={playerRef}>
                    <octahedronGeometry args={[0.3, 0]} />
                    <meshStandardMaterial
                        color="#22d3ee"
                        emissive="#22d3ee"
                        emissiveIntensity={2}
                        toneMapped={false}
                    />
                </mesh>
            </Trail>

            {/* Skills */}
            {
                skills.map((skill) => (
                    <Float key={skill.id} speed={2} rotationIntensity={1} floatIntensity={1}>
                        <group position={skill.position}>
                            <mesh rotation={skill.rotation}>
                                <boxGeometry args={[0.7, 0.7, 0.7]} />
                                <meshStandardMaterial
                                    color={skill.color}
                                    roughness={0.3}
                                    metalness={0.8}
                                    emissive={skill.color}
                                    emissiveIntensity={0.5}
                                />
                            </mesh>
                            <Text
                                position={[0, -0.9, 0]}
                                fontSize={0.25}
                                color="white"
                                anchorX="center"
                                anchorY="middle"
                            >
                                {skill.name}
                            </Text>
                        </group>
                    </Float>
                ))
            }
        </>
    );
}
