"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, PerspectiveCamera, Line, Instance, Instances, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { MrCoderNode } from "./mr-coder-node";
import { useIntro } from "./intro-context";
import gsap from "gsap";

function NetworkConnections({ nodes }: { nodes: THREE.Vector3[] }) {
    const lines = useMemo(() => {
        const connections: THREE.Vector3[][] = [];
        nodes.forEach((node, i) => {
            // Optimization: Limited neighbor check (reduced from 12 to 15)
            for (let j = i + 1; j < Math.min(i + 3, nodes.length); j++) {
                const other = nodes[j];
                const dist = node.distanceTo(other);
                if (dist < 15) {
                    connections.push([node, other]);
                }
            }
        });
        return connections;
    }, [nodes]);

    return (
        <group>
            {lines.map((line, i) => (
                <Line
                    key={i}
                    points={line}
                    color="#0891b2"
                    transparent
                    opacity={0.06}
                    lineWidth={0.8}
                />
            ))}
        </group>
    )
}

function NetworkBackground() {
    const count = 25; // Reduced from 40
    const { phase } = useIntro();
    const nodes = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 60; // Reduced spread
            const y = (Math.random() - 0.5) * 40;
            const z = (Math.random() - 0.5) * 30 - 5;
            temp.push(new THREE.Vector3(x, y, z));
        }
        return temp;
    }, []);

    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.03;
            if (phase === 'disperse') {
                groupRef.current.scale.multiplyScalar(1.01);
                groupRef.current.position.z -= 0.1;
            }
        }
    });

    return (
        <group ref={groupRef}>
            <Instances range={count}>
                <sphereGeometry args={[0.12, 12, 12]} /> {/* Reduced geometry detail */}
                <meshStandardMaterial
                    emissive="#06b6d4"
                    emissiveIntensity={1.2}
                    color="#06b6d4"
                    toneMapped={false}
                />
                {nodes.map((pos, i) => (
                    <Instance key={i} position={pos} scale={1.0 + Math.random() * 0.5} />
                ))}
            </Instances>
            <NetworkConnections nodes={nodes} />
        </group>
    )
}

function CameraController() {
    const { camera } = useThree();
    const { phase } = useIntro();

    useEffect(() => {
        if (phase === 'zooming') {
            gsap.to(camera.position, {
                x: 0,
                y: 0,
                z: 3,
                duration: 2.2,
                ease: "expo.inOut"
            });
            gsap.to(camera.rotation, {
                z: -0.1,
                duration: 2,
                ease: "power2.inOut"
            })
        }
    }, [phase, camera]);

    useFrame((state) => {
        if (phase === 'idle') {
            const targetX = state.pointer.x * 1.5; // Reduced parallax intensity
            const targetY = state.pointer.y * 1.5;

            camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.03);
            camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.03);
            camera.lookAt(0, 0, 0);
        }
    });

    return null;
}

export function NeuralNetworkScene() {
    return (
        <div className="fixed inset-0 z-0 bg-slate-950">
            <Canvas
                dpr={[1, 1.5]} // Limit pixel ratio
                gl={{
                    antialias: false,
                    powerPreference: "high-performance",
                    alpha: false
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 24]} fov={50} />
                <color attach="background" args={['#020617']} />

                <Suspense fallback={null}>
                    {/* Simplified lighting - reduced from 4 to 2 lights */}
                    <ambientLight intensity={0.2} />
                    <pointLight position={[10, 10, 20]} intensity={1.5} color="#22d3ee" distance={80} />

                    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
                        <MrCoderNode />
                    </Float>

                    <NetworkBackground />

                    {/* Reduced stars - from 1500 to 800 total */}
                    <Stars radius={100} depth={50} count={800} factor={3} saturation={0} fade speed={0.8} />

                    <CameraController />

                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={0.3}
                            mipmapBlur
                            intensity={0.4}
                            radius={0.3}
                            levels={4} // Reduced from 5
                        />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    )
}
