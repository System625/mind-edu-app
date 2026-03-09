'use client';

import React from 'react';
import * as motion from 'framer-motion/client';
import { Activity, BookOpen } from 'lucide-react';

export default function MobileView() {
    return (
        <section className="relative w-full pt-24 md:pt-32 pb-24 md:pb-40 bg-[#e0f7ff] overflow-hidden">

            {/* The curved white background at the bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[50%] bg-white rounded-t-[100%] pointer-events-none shadow-[rgba(14,165,233,0.06)_0px_-20px_40px_0px]" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center">

                {/* Top Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-2 bg-gradient-to-b from-[#0f172a] to-[#38bdf8] bg-clip-text text-transparent">
                        A personal health advisor
                    </h2>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] bg-gradient-to-b from-[#0284c7] to-[#e0f7ff] bg-clip-text text-transparent">
                        in your pocket
                    </h2>
                </div>

                {/* Phone Mockup Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-16"
                >
                    {/* Device Body */}
                    <div className="relative w-[300px] h-[610px] bg-[#1a1a1a] rounded-[52px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] ring-[4px] ring-zinc-300 p-[10px] z-10 mx-auto">

                        {/* Buttons on Side */}
                        <div className="absolute top-[100px] -left-[4px] w-[4px] h-[24px] bg-zinc-500 rounded-l-md" />
                        <div className="absolute top-[140px] -left-[4px] w-[4px] h-[48px] bg-zinc-500 rounded-l-md" />
                        <div className="absolute top-[200px] -left-[4px] w-[4px] h-[48px] bg-zinc-500 rounded-l-md" />
                        <div className="absolute top-[160px] -right-[4px] w-[4px] h-[64px] bg-zinc-500 rounded-r-md" />
                        {/* Screen */}
                        <div className="w-full h-full bg-white rounded-[42px] overflow-hidden flex flex-col relative border-[2px] border-[#1a1a1a]">

                            {/* Status Bar */}
                            <div className="h-10 w-full flex justify-between items-center px-4 pt-3 z-30 absolute top-0 left-0">
                                <span className="text-[13px] font-[600] text-[#0f172a] -ml-0.5 mt-[1px]">9:41</span>

                                {/* Dynamic Island */}
                                <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[94px] h-[28px] bg-black rounded-[20px] flex justify-end items-center px-3 z-40 shadow-[inset_0_-1px_1px_rgba(255,255,255,0.15)]">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#111] ring-[0.5px] ring-white/10 mr-0.5" />
                                </div>

                                {/* Right Icons: Cellular, Wi-Fi, Battery */}
                                <div className="flex gap-1 items-center mt-0.5 text-[#0f172a] opacity-90">
                                    <svg className="w-[12px] h-[8.5px]" viewBox="0 0 16 11" fill="currentColor">
                                        <rect x="0" y="8" width="2.5" height="3" rx="0.5" />
                                        <rect x="4.5" y="5.5" width="2.5" height="5.5" rx="0.5" />
                                        <rect x="9" y="3" width="2.5" height="8" rx="0.5" />
                                        <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" />
                                    </svg>
                                    <svg className="w-[11.5px] h-[8.5px] ml-[1px]" viewBox="0 0 16 12" fill="currentColor">
                                        <path d="M8 12C7.4 12 6.9 11.5 6.9 10.9C6.9 10.3 7.4 9.8 8 9.8C8.6 9.8 9.1 10.3 9.1 10.9C9.1 11.5 8.6 12 8 12ZM11.1 8C10.3 7.4 9.2 7 8 7C6.8 7 5.7 7.4 4.9 8C4.5 8.3 3.9 8.2 3.6 7.8C3.3 7.4 3.4 6.8 3.8 6.5C4.9 5.6 6.4 5 8 5C9.6 5 11.1 5.6 12.2 6.5C12.6 6.8 12.7 7.4 12.4 7.8C12.1 8.2 11.5 8.4 11.1 8ZM14.3 4.8C12.6 3.4 10.4 2.5 8 2.5C5.6 2.5 3.4 3.4 1.7 4.8C1.3 5.1 0.7 5.0 0.4 4.6C0.1 4.2 0.2 3.6 0.6 3.3C2.6 1.7 5.2 0.6 8 0.6C10.8 0.6 13.4 1.7 15.4 3.3C15.8 3.6 15.9 4.2 15.6 4.6C15.3 5.0 14.7 5.1 14.3 4.8Z" />
                                    </svg>
                                    <div className="relative flex items-center ml-0.5">
                                        <div className="w-[19px] h-[9.5px] border-[1px] border-[#0f172a] rounded-[3px] p-[1px] flex items-center">
                                            <div className="bg-[#0f172a] w-[13px] h-[6.5px] rounded-[1px]" />
                                        </div>
                                        <div className="w-[1px] h-[3px] bg-[#0f172a] rounded-r-[1.5px] ml-[0.5px] opacity-80" />
                                    </div>
                                </div>
                            </div>

                            {/* App Content */}
                            <div className="flex-1 p-5 flex flex-col pt-16 bg-white">
                                <h4 className="text-[22px] font-bold tracking-tight text-slate-800 mb-6 px-1">Morning Check-in</h4>

                                {/* Breathing Widget Mockup */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#dcf2e3] rounded-[24px] p-4 mb-4 border border-[#c2e8cf]/60 relative overflow-hidden group shadow-sm flex flex-col cursor-pointer"
                                >
                                    <div className="flex items-center gap-3.5 relative z-10 mb-4 px-1">
                                        <div className="w-10 h-10 rounded-full bg-[#c8e8d5] flex items-center justify-center text-[#214d36] shrink-0">
                                            <Activity className="w-5 h-5 stroke-[2.5]" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#143224] text-[15px] leading-tight mb-0.5">4-4-4 Breathing</p>
                                            <p className="text-[13px] text-[#426a54] font-medium leading-none">Reduce stress</p>
                                        </div>
                                    </div>
                                    <div className="mt-auto px-1">
                                        <div className="w-full h-11 bg-white rounded-[14px] flex items-center justify-center text-[11px] font-bold text-[#1d5035] tracking-[0.08em] shadow-sm hover:bg-[#f8fdfa] transition-colors">
                                            START CYCLE
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Journal Widget Mockup */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-white rounded-[24px] p-5 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col cursor-pointer"
                                >
                                    <div className="flex items-center gap-3.5 relative z-10 mb-5">
                                        <div className="w-10 h-10 rounded-full bg-[#eef8fc] flex items-center justify-center text-sky-600 shrink-0">
                                            <BookOpen className="w-5 h-5 stroke-[2]" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800 text-[15px] leading-tight mb-0.5">Private Journal</p>
                                            <p className="text-[13px] text-slate-500 font-medium leading-none">How are you feeling?</p>
                                        </div>
                                    </div>
                                    <div className="w-full space-y-3 mt-1 px-1">
                                        <div className="h-2 w-full bg-slate-100 rounded-full" />
                                        <div className="h-2 w-5/6 bg-slate-100 rounded-full" />
                                        <div className="h-2 w-[45%] bg-slate-100 rounded-full" />
                                    </div>
                                </motion.div>

                            </div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[110px] h-[4px] bg-slate-300 rounded-full z-30" />
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Text Area */}
                <div className="text-center max-w-2xl">
                    <h3 className="text-2xl md:text-[28px] font-bold text-slate-800 tracking-tight mb-3">
                        The world&apos;s first health super app
                    </h3>
                    <p className="text-[15px] md:text-base text-slate-500 leading-relaxed max-w-lg mx-auto">
                        One secure home for all of your mental health records, and a concierge team you can message 24/7 with any questions.
                    </p>
                </div>

            </div>
        </section>
    );
}
