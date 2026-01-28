'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CodeParticle = ({ x, duration, delay, fontSize, char }: { x: number; duration: number; delay: number; fontSize: number; char: string }) => {
    return (
        <motion.div
            className="absolute font-mono font-bold text-[#95bf47]/50 select-none whitespace-nowrap"
            style={{
                left: `${x}%`,
                fontSize: fontSize,
                top: -fontSize * 2,
                textShadow: "0 0 8px rgba(149, 191, 71, 0.4)"
            }}
            animate={{
                y: [0, 1000], // Fall down
                opacity: [0, 1, 0], // Fade in/out
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
                times: [0, 1]
            }}
        >
            {char}
        </motion.div>
    );
};

export const CodeLeftRain = () => {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; fontSize: number; duration: number; delay: number; char: string }>>([]);

    const chars = "10{}<>?[]!@#$%^&*()_+=ShopifyLiquid";

    useEffect(() => {
        // Generate particles confined to the left side (0-40% width)
        const newParticles = Array.from({ length: 60 }).map((_, i) => ({
            id: i,
            x: Math.random() * 40, // Only first 40% of screen width (Left side)
            fontSize: Math.random() * 14 + 10, // 10px to 24px
            duration: Math.random() * 5 + 3, // 3s to 8s fall
            delay: Math.random() * 5,
            char: chars[Math.floor(Math.random() * chars.length)]
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none z-0 overflow-hidden mask-image-linear-to-b">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
            {particles.map((p) => (
                <CodeParticle
                    key={p.id}
                    x={p.x * 2.5} // Scale 0-40 to 0-100% of the container (which is 50% of screen)
                    fontSize={p.fontSize}
                    duration={p.duration}
                    delay={p.delay}
                    char={p.char}
                />
            ))}
        </div>
    );
};
