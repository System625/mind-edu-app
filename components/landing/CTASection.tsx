'use client';

import React from 'react';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-[#fdfafb] overflow-hidden flex flex-col items-center justify-center">
            {/* Vibrant Mesh Background */}
            <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-[#ebdfff] rounded-full blur-[140px] opacity-100 pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-[-30%] left-[10%] w-[80vw] h-[80vw] bg-[#ff8c42] rounded-full blur-[160px] opacity-90 pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-[-10%] right-[10%] w-[60vw] h-[60vw] bg-[#ff5c77] rounded-full blur-[140px] opacity-80 pointer-events-none mix-blend-multiply" />
            <div className="absolute top-[20%] left-[-20%] w-[50vw] h-[50vw] bg-[#a6c1ee] rounded-full blur-[120px] opacity-80 pointer-events-none mix-blend-multiply" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-slate-900 leading-[1.05] mb-8">
                        Start your journey to<br />
                        <span className="text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.4)]">wellness today.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-800/80 font-medium mb-12 max-w-2xl mx-auto">
                        Join thousands of students building resilience, managing stress, and unlocking their true potential.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 bg-[#1F2023]/95 backdrop-blur-2xl p-4 sm:pl-6 sm:pr-4 rounded-[40px] shadow-[0_24px_60px_rgba(0,0,0,0.3),0_0_80px_rgba(255,140,66,0.2)] border border-[#333333]">
                        <Link href="/auth/signup">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-4 bg-white text-slate-900 text-[15px] font-bold tracking-wide rounded-[24px] shadow-sm transition-all flex items-center gap-2 hover:bg-slate-100"
                            >
                                Create Free Account
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>

                        {/* Custom Divider */}
                        <div className="hidden sm:block relative h-10 w-[1.5px] mx-2">
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent rounded-full"
                                style={{
                                    clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 140% 50%, 100% 60%, 100% 100%, 0% 100%, 0% 60%, -40% 50%, 0% 40%)",
                                }}
                            />
                        </div>

                        <Link href="/modules">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-4 bg-transparent text-[#9CA3AF] text-[15px] font-bold tracking-wide rounded-[24px] hover:text-[#D1D5DB] transition-all flex items-center hover:bg-white/5"
                            >
                                Explore Modules
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
