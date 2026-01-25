'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Bubble = ({ x, size, duration, delay }: { x: number; size: number; duration: number; delay: number }) => {
    return (
        <motion.div
            className="absolute rounded-full border border-white/10 bg-white/5 backdrop-blur-[1px]"
            style={{
                left: `${x}%`,
                width: size,
                height: size,
                bottom: -size, // Start below screen
            }}
            animate={{
                y: [0, -1200], // Float up
                x: [0, Math.random() * 50 - 25, 0], // Slight wobble
                opacity: [0, 1, 0], // Fade in/out
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
                times: [0, 0.5, 1]
            }}
        />
    );
};

export const BackgroundBubble = () => {
    const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; size: number; duration: number; delay: number }>>([]);

    useEffect(() => {
        // Generate random bubbles on client side only to avoid hydration mismatch
        const newBubbles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // Random horizontal position 0-100%
            size: Math.random() * 60 + 10, // Size between 10px and 70px
            duration: Math.random() * 10 + 10, // Duration between 10s and 20s (slow rise)
            delay: Math.random() * 20, // Random start delay
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Optional: Add a subtle gradient overlay to enhance depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/20" />

            {bubbles.map((bubble) => (
                <Bubble
                    key={bubble.id}
                    x={bubble.x}
                    size={bubble.size}
                    duration={bubble.duration}
                    delay={bubble.delay}
                />
            ))}
        </div>
    );
};
