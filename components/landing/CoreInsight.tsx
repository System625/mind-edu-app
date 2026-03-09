'use client';

import React from 'react';
import * as motion from 'framer-motion/client';

export default function CoreInsight() {
    return (
        <section className="relative w-full py-24 md:py-40 bg-background overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Left Column: The Message */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">
                            Core Insight
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
                            A health-check for <br />
                            your mind, <span className="text-primary italic">simplified.</span>
                        </h3>
                        <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed mb-10">
                            Experience the immediate power of the 4-4-4 technique. Our interactive tools aren't just features—they are scientifically proven anchors for your mental resilience.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                            <div className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                </div>
                                <span className="text-sm font-bold tracking-wide text-foreground/80">Reduce Anxiety</span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                </div>
                                <span className="text-sm font-bold tracking-wide text-foreground/80">Improve Focus</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: The Interactive Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 relative flex items-center justify-center p-8 lg:p-0"
                    >
                        {/* Outer Decorative Rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-primary/5 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] rounded-full border border-secondary/10 animate-[spin_15s_linear_reverse_infinite]" />
                        </div>

                        {/* The Breathing Circle Component */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                            {/* Breath In/Out Animation */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.5, 1.5, 1],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    times: [0, 0.33, 0.66, 1],
                                    ease: "easeInOut"
                                }}
                                className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl"
                            />

                            <motion.div
                                animate={{
                                    scale: [0.8, 1.3, 1.3, 0.8],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    times: [0, 0.33, 0.66, 1],
                                    ease: "easeInOut"
                                }}
                                className="relative w-36 h-36 md:w-48 md:h-48 rounded-full bg-white shadow-[0_0_50px_rgba(var(--primary),0.1)] border border-primary/10 flex items-center justify-center z-10"
                            >
                                <motion.div
                                    animate={{
                                        opacity: [0.4, 1, 1, 0.4]
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        times: [0, 0.33, 0.66, 1],
                                    }}
                                    className="text-center"
                                >
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase">
                                        Breath
                                    </span>
                                </motion.div>
                            </motion.div>

                            {/* Status Indicator */}
                            <div className="absolute -bottom-12 flex flex-col items-center">
                                <div className="flex gap-2 mb-2">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                opacity: [0.3, 1, 0.3],
                                                scale: [1, 1.2, 1]
                                            }}
                                            transition={{
                                                duration: 4,
                                                delay: i * 4,
                                                repeat: Infinity,
                                            }}
                                            className="w-1.5 h-1.5 rounded-full bg-primary"
                                        />
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                                    Auto-Guided Cycle
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
