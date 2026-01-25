'use client';

import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const BackgroundBubble = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for "underwater" feel - mass creates inertia
    const springConfig = { damping: 20, stiffness: 50, mass: 3 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Center the bubble on the cursor (approx 500px width/height)
            mouseX.set(e.clientX - 250);
            mouseY.set(e.clientY - 250);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    background: 'radial-gradient(circle, rgba(0, 150, 255, 0.25) 0%, rgba(0, 150, 255, 0) 70%)',
                    filter: 'blur(60px)',
                }}
            />
            <motion.div
                className="absolute w-[300px] h-[300px] rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    top: 100,
                    left: 100,
                    background: 'radial-gradient(circle, rgba(100, 200, 255, 0.2) 0%, rgba(100, 200, 255, 0) 70%)',
                    filter: 'blur(40px)',
                }}
            />
        </div>
    );
};
