'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import { ArrowRight, ArrowLeft, Flame } from 'lucide-react';

export default function DashboardCarousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isAutoScrolling = useRef(false);

    // Auto-advance logic
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(timer);
    }, [isPaused]);

    // Sync scroll position when activeSlide changes
    useEffect(() => {
        if (carouselRef.current && !isAutoScrolling.current) {
            const slide = carouselRef.current.children[activeSlide] as HTMLElement;
            if (slide) {
                carouselRef.current.scrollTo({
                    left: slide.offsetLeft - 24,
                    behavior: 'smooth'
                });
            }
        }
        const timeout = setTimeout(() => { isAutoScrolling.current = false; }, 600);
        return () => clearTimeout(timeout);
    }, [activeSlide]);

    const scrollToSlide = (index: number) => {
        isAutoScrolling.current = false;
        setActiveSlide(index);
    };

    const handleScroll = () => {
        if (carouselRef.current && !isAutoScrolling.current) {
            const scrollPosition = carouselRef.current.scrollLeft;
            const slideWidth = carouselRef.current.offsetWidth;
            const index = Math.round(scrollPosition / slideWidth);
            if (index !== activeSlide && index >= 0 && index < 3) {
                isAutoScrolling.current = true;
                setActiveSlide(index);
            }
        }
    };

    return (
        <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1400px]">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 max-w-xl leading-tight">
                        Track your personal<br />mental wealth
                    </h2>
                    <div className="flex items-center gap-4">
                        <motion.div
                            animate={{ x: [-5, 5, -5], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="hidden md:flex items-center gap-2 mr-4 text-sm font-medium text-slate-500"
                        >
                            <ArrowLeft className="w-4 h-4" /> Swipe to explore <ArrowRight className="w-4 h-4" />
                        </motion.div>
                        <Link href="/dashboard">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(var(--primary-rgb), 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary hover:opacity-90 text-white rounded-full font-medium transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
                            >
                                Go to Dashboard
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* Carousel Layout */}
                <motion.div
                    ref={carouselRef}
                    onScroll={handleScroll}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        show: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >

                    {/* Slide 1: General Dashboard (Runner) */}
                    <motion.div
                        onClick={() => scrollToSlide(0)}
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                        }}
                        className={`snap-center shrink-0 w-[90vw] md:w-[850px] h-[600px] relative rounded-[32px] overflow-hidden group shadow-xl transition-all duration-500 cursor-pointer ${activeSlide === 0 ? 'ring-2 ring-primary/20 scale-[1.01]' : 'opacity-80 scale-100 hover:opacity-100'}`}
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 1.1 },
                                show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
                            }}
                            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] group-hover:scale-105"
                            style={{ backgroundImage: "url('/images/dashboard-wide-1.png')" }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"
                        />

                        <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-between">
                            {/* Top Text */}
                            <motion.h3
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8 } }
                                }}
                                className="text-3xl lg:text-4xl font-medium text-white max-w-sm leading-tight"
                            >
                                Gain valuable insights into your health journey
                            </motion.h3>

                            {/* Bottom Widgets Floor */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8, staggerChildren: 0.1 } }
                                }}
                                className="flex flex-col md:flex-row items-end justify-between gap-6 w-full mt-auto"
                            >
                                {/* Left Bottom: Testimonial Widget */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.9, y: 20 },
                                        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 w-full md:max-w-xs shadow-2xl"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                                            <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">Amara Sage</p>
                                            <p className="text-xs text-white/60">Age 21, Student</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/90 leading-relaxed italic">
                                        &quot;MindEdu enables me to understand my emotional triggers and patterns before they become big problems again.&quot;
                                    </p>
                                </motion.div>
                                {/* Right Bottom: Stack of Stat Widgets */}
                                <div className="flex flex-col gap-4 w-full md:max-w-[280px]">
                                    {/* Stat Widget 1 */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.9, y: 20 },
                                            show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                                        }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl"
                                    >
                                        <div className="flex justify-between items-baseline mb-4">
                                            <span className="text-sm font-medium text-white/90">Modules Completed</span>
                                            <span className="text-4xl font-medium text-white tracking-tighter">12/15</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-2">
                                            <div className="w-[80%] h-full bg-white rounded-full relative">
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-white rounded-full shadow-sm" />
                                            </div>
                                        </div>
                                        <p className="text-xs text-white/60">Excellent pacing. Keep going!</p>
                                    </motion.div>
                                    {/* Stat Widget 2 */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.9, y: 20 },
                                            show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                                        }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl"
                                    >
                                        <div className="flex justify-between items-baseline mb-4">
                                            <span className="text-sm font-medium text-white/90">Resilience Level</span>
                                            <span className="text-4xl font-medium text-white tracking-tighter">4</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-2">
                                            <div className="w-[40%] h-full bg-white rounded-full relative">
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-white rounded-full shadow-sm" />
                                            </div>
                                        </div>
                                        <p className="text-xs text-white/60">Top 15% of active learners</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Slide 2: Journaling (Reading) */}
                    <motion.div
                        onClick={() => scrollToSlide(1)}
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                        }}
                        className={`snap-center shrink-0 w-[90vw] md:w-[850px] h-[600px] relative rounded-[32px] overflow-hidden group shadow-xl transition-all duration-500 cursor-pointer ${activeSlide === 1 ? 'ring-2 ring-primary/20 scale-[1.01]' : 'opacity-80 scale-100 hover:opacity-100'}`}
                    >
                        <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] group-hover:scale-105" style={{ backgroundImage: "url('/images/dashboard-wide-2.png')" }} />
                        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

                        <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-between">
                            {/* Top Text */}
                            <motion.h3
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8 } }
                                }}
                                className="text-3xl lg:text-4xl font-medium text-white max-w-sm leading-tight"
                            >
                                Understand your thought patterns
                            </motion.h3>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8, staggerChildren: 0.1 } }
                                }}
                                className="flex flex-col md:flex-row items-end justify-between gap-6 w-full mt-auto"
                            >
                                {/* Left Bottom: Testimonial Widget */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.9, y: 20 },
                                        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 w-full md:max-w-xs shadow-2xl"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                                            <img src="https://i.pravatar.cc/100?img=32" alt="User" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">Cassidy David</p>
                                            <p className="text-xs text-white/60">Age 22, Joined 2024</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/90 leading-relaxed italic">
                                        &quot;The private journal has been a game-changer. I can finally spot my triggers and deal with them logically.&quot;
                                    </p>
                                </motion.div>
                                {/* Right Bottom: Stack of Stat Widgets */}
                                <div className="flex flex-col gap-4 w-full md:max-w-[280px]">
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.9, y: 20 },
                                            show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                                        }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl"
                                    >
                                        <div className="flex justify-between items-baseline mb-4">
                                            <span className="text-sm font-medium text-white/90">Journal Entries</span>
                                            <span className="text-4xl font-medium text-white tracking-tighter">42</span>
                                        </div>
                                        <div className="flex gap-2 mb-2">
                                            <span className="text-2xl">😊</span>
                                            <span className="text-2xl">😌</span>
                                            <span className="text-2xl">🤔</span>
                                            <span className="text-2xl">😊</span>
                                            <span className="text-2xl">😌</span>
                                        </div>
                                        <p className="text-xs text-white/60">Mood trending positive</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Slide 3: Coping Tools (Nature/Growth) */}
                    <motion.div
                        onClick={() => scrollToSlide(2)}
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                        }}
                        className={`snap-center shrink-0 w-[90vw] md:w-[850px] h-[600px] relative rounded-[32px] overflow-hidden group shadow-xl transition-all duration-500 cursor-pointer ${activeSlide === 2 ? 'ring-2 ring-primary/20 scale-[1.01]' : 'opacity-80 scale-100 hover:opacity-100'}`}
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 1.1 },
                                show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
                            }}
                            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] group-hover:scale-105"
                            style={{ backgroundImage: "url('/images/dashboard-wide-3.png')" }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"
                        />

                        <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-between">
                            {/* Top Text */}
                            <motion.h3
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8 } }
                                }}
                                className="text-3xl lg:text-4xl font-medium text-white leading-tight max-w-sm"
                            >
                                Build sustainable coping strategies
                            </motion.h3>

                            {/* Bottom Widget */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } }
                                }}
                                className="mt-auto pt-8 flex flex-col md:flex-row gap-6 w-full items-end justify-between"
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-sm"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <Flame className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white/80">Breathing Exercise</p>
                                            <p className="text-2xl font-bold text-white tracking-tighter">7 Day Streak</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/90 leading-relaxed italic border-t border-white/10 pt-4 mt-2">
                                        &quot;I use the 4-4-4 breathing guide every morning. It entirely shifts my focus for the day.&quot;
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
        </section>
    );
}
