'use client';

import React from 'react';
import * as motion from 'framer-motion/client';
import { ArrowRight } from 'lucide-react';

export default function FeatureShowcase() {
    return (
        <section
            className="relative w-full py-20 md:py-32 lg:py-40 bg-white scroll-mt-28"
            aria-label="Features and Benefits Showcase"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header section optimized for medium screens */}
                <div className="flex flex-col lg:flex-row items-start lg:items-baseline justify-between gap-6 lg:gap-8 mb-16 md:mb-20 lg:mb-24">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4"
                            aria-hidden="true"
                        >
                            <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                            <span className="text-[14px] md:text-[15px] font-bold text-slate-500 uppercase tracking-wide">Features &amp; Benefit</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            // Smoother font scaling for md displays
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
                        >
                            Your Path To Better<br className="hidden md:block lg:hidden" /> Mental Health
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl lg:max-w-md mt-4 lg:mt-0"
                    >
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            Discover a supportive journey toward improved mental well-being. Prioritize self-care, connect with resources, and embrace growth with expert guidance designed to empower your mental health every step of the way.
                        </p>
                    </motion.div>
                </div>

                {/* Lifestyle Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1: Modules */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        tabIndex={0}
                        role="article"
                        aria-label="Interactive Modules"
                        // Responsive card height: shorter on tablet so they aren't super skinny
                        className="group relative h-[400px] md:h-[450px] lg:h-[550px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-500 focus-visible:ring-offset-4 transition-all duration-500"
                    >
                        <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none" style={{ backgroundImage: "url('/images/modules-v2.png')" }} aria-hidden="true" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 z-10" aria-hidden="true" />

                        <div className="relative z-20 h-full p-6 lg:p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="text-2xl md:text-[22px] lg:text-3xl font-bold text-white tracking-tight leading-tight">Interactive Modules</h3>
                                <div aria-hidden="true" className="w-10 h-10 shrink-0 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 group-focus-visible:bg-white group-focus-visible:text-slate-900 transition-all">
                                    <ArrowRight className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                                </div>
                            </div>
                            <p className="text-white/95 text-sm md:text-[13px] lg:text-base leading-relaxed max-w-[95%]">
                                Evidence-based content on topics like depression, anxiety, and stress management, designed for the modern youth.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Quizzes */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        tabIndex={0}
                        role="article"
                        aria-label="Smart Quizzes"
                        className="group relative h-[400px] md:h-[450px] lg:h-[550px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-500 focus-visible:ring-offset-4 transition-all duration-500"
                    >
                        <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none" style={{ backgroundImage: "url('/images/quizzes-v2.png')" }} aria-hidden="true" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 z-10" aria-hidden="true" />

                        <div className="relative z-20 h-full p-6 lg:p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="text-2xl md:text-[22px] lg:text-3xl font-bold text-white tracking-tight leading-tight">Smart Quizzes</h3>
                                <div aria-hidden="true" className="w-10 h-10 shrink-0 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 group-focus-visible:bg-white group-focus-visible:text-slate-900 transition-all">
                                    <ArrowRight className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                                </div>
                            </div>
                            <p className="text-white/95 text-sm md:text-[13px] lg:text-base leading-relaxed max-w-[95%]">
                                Instant feedback with detailed explanations. Test your knowledge and build confidence as you learn.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Growth */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        tabIndex={0}
                        role="article"
                        aria-label="Personal Growth"
                        className="group relative h-[400px] md:h-[450px] lg:h-[550px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-500 focus-visible:ring-offset-4 transition-all duration-500"
                    >
                        <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none" style={{ backgroundImage: "url('/images/growth-v2.png')" }} aria-hidden="true" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 z-10" aria-hidden="true" />

                        <div className="relative z-20 h-full p-6 lg:p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="text-2xl md:text-[22px] lg:text-3xl font-bold text-white tracking-tight leading-tight">Personal Growth</h3>
                                <div aria-hidden="true" className="w-10 h-10 shrink-0 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 group-focus-visible:bg-white group-focus-visible:text-slate-900 transition-all">
                                    <ArrowRight className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                                </div>
                            </div>
                            <p className="text-white/95 text-sm md:text-[13px] lg:text-base leading-relaxed max-w-[95%]">
                                Track your progress, earn achievements, and see your resilience grow with real-time statistics and insights.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
