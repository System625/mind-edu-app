'use client';

import React from 'react';
import * as motion from 'framer-motion/client';
import { Clock, RotateCcw, Smile } from 'lucide-react';

export default function Metrics() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Centered Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
                    >
                        Measurable Growth. Real Strategies.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500"
                    >
                        Built to fit your life, designed to help you thrive.
                    </motion.p>
                </div>

                {/* 3-Column Metrics Grid */}
                <div className="grid grid-cols-1 mb-10 md:grid-cols-3 gap-8 text-center md:divide-x divide-slate-100">

                    {/* Metric 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center px-4"
                    >
                        <div className="w-12 h-12 rounded-full border border-sky-100 bg-sky-50 flex items-center justify-center text-sky-600 mb-6">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div className="flex items-start mb-2">
                            <h4 className="text-5xl font-bold text-slate-900 tracking-tight leading-none">15-25</h4>
                            <span className="text-xl font-bold text-sky-600 ml-1 mt-1">min</span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 mb-3">Bite-sized Modules</p>
                        <p className="text-xs text-slate-400 max-w-[220px] leading-relaxed">
                            Perfectly timed lessons that fit easily into your daily routine without overwhelming you.
                        </p>
                    </motion.div>

                    {/* Metric 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center px-4"
                    >
                        <div className="w-12 h-12 rounded-full border border-emerald-100 bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                            <RotateCcw className="w-5 h-5" />
                        </div>
                        <h4 className="text-5xl font-bold text-slate-900 tracking-tight leading-none mb-2">∞</h4>
                        <p className="text-sm font-medium text-slate-500 mb-3">Quiz Retakes</p>
                        <p className="text-xs text-slate-400 max-w-[220px] leading-relaxed">
                            Learn at your own pace. There's no failure, only continuous improvement and understanding.
                        </p>
                    </motion.div>

                    {/* Metric 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center px-4"
                    >
                        <div className="w-12 h-12 rounded-full border border-teal-100 bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                            <Smile className="w-5 h-5" />
                        </div>
                        <h4 className="text-5xl font-bold text-slate-900 tracking-tight leading-none mb-2">8</h4>
                        <p className="text-sm font-medium text-slate-500 mb-3">Emoji Moods</p>
                        <p className="text-xs text-slate-400 max-w-[220px] leading-relaxed">
                            Track your emotional state effortlessly through an intuitive emoji-based recording system.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
