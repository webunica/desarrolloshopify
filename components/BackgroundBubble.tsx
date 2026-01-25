'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Bubble = ({ x, size, duration, delay, mouseX }: { x: number; size: number; duration: number; delay: number; mouseX: any }) => {
    // Parallax factor based on size (bigger bubbles might move more or less - choosing random factor)
    const movementFactor = (Math.random() * 0.5 + 0.2) * (Math.random() > 0.5 ? 1 : -1);

    // Transform mouse X into bubble movement X
    // When mouse moves 1000px, bubbles move brute force * factor
    const xOffset = useTransform(mouseX, [0, window.innerWidth], [-200 * movementFactor, 200 * movementFactor]);

    return (
        <motion.div
            className="absolute rounded-full border border-white/40 bg-white/20 backdrop-blur-[1px] shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            style={{
                left: `${x}%`,
                width: size,
                height: size,
                x: xOffset, // Apply mouse parallax
            }}
            animate={{
                y: [0, -800], // Float up (shorter distance since it's just for Hero)
                opacity: [0, 0.8, 0], // Fade in/out
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
                times: [0, 0.2, 1]
            }}
        />
    );
};

export const BackgroundBubble = () => {
    const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; size: number; duration: number; delay: number }>>([]);

    // Mouse tracking
    const mouseX = useMotionValue(0);
    // Stiff spring for "abrupt" but slightly smoothed movement (glitchy/sharp feel)
    const springX = useSpring(mouseX, { stiffness: 400, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX]);

    useEffect(() => {
        // Generate MANY small bubbles for soda effect
        const newBubbles = Array.from({ length: 80 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // Random horizontal position 0-100%
            size: Math.random() * 10 + 4, // Smaller size: 4px to 14px
            duration: Math.random() * 8 + 5, // Faster rising: 5s to 13s
            delay: Math.random() * 10,
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
            {/* Optional: Add a subtle gradient overlay to enhance depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/20" />

            {bubbles.map((bubble) => (
                <Bubble
                    key={bubble.id}
                    x={bubble.x}
                    size={bubble.size}
                    duration={bubble.duration}
                    delay={bubble.delay}
                    mouseX={springX}
                />
            ))}
        </div>
    );
};
