'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'framer-motion/client';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        }
    },
};

export default function Hero() {
    return (
        <section className="relative w-full py-6 px-6 sm:px-12 flex flex-col items-center">
            <div className="relative w-full max-w-7xl min-h-[600px] md:min-h-[800px] rounded-[40px] overflow-hidden flex items-center justify-center bg-zinc-900 shadow-2xl">
                {/* Background Image - Contained inside the rounded container */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <Image
                        src="/hero-image.png"
                        alt="MindEdu Hero Background"
                        fill
                        priority
                        quality={100}
                        className="object-cover object-center opacity-80"
                    />
                    {/* Subtle Gradient for readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent md:bg-gradient-to-b md:from-black/40 md:to-black/20" />
                </div>

                {/* Hero Content */}
                <div className="container relative z-10 px-6 mx-auto py-24 md:py-32 flex flex-col items-center text-center transition-all">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="max-w-3xl flex flex-col items-center"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-[4.5rem] font-bold tracking-tight leading-[1.05] text-white mb-6 drop-shadow-2xl"
                        >
                            Master Your Mind. <br className="hidden md:block" />
                            Elevate Your Future.
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-base md:text-lg font-medium text-white/90 max-w-xl mb-10 drop-shadow-lg leading-relaxed"
                        >
                            The digital sanctuary for youth mental wellness. Explore interactive modules, build resilience, and take control of your educational journey.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                            <Link
                                href="/auth/signup"
                                className="group relative flex items-center justify-center px-10 py-4 bg-primary text-white rounded-full font-bold shadow-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex items-center">
                                    Start Learning Free <span className="ml-2 font-normal">›</span>
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </Link>

                            <div className="flex items-center text-white/90 text-sm font-semibold drop-shadow-md">
                                <svg className="w-5 h-5 mr-2 text-primary border-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                                Science-Backed &amp; Youth-Verified
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
