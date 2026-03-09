'use client';

import React from 'react';
import { ShieldCheck, Fingerprint, Server } from 'lucide-react';
import * as motion from 'framer-motion/client';

export default function SecurityPrivacy() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800 mb-4">
                        Your data, secured.
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        We employ state-of-the-art encryption and strictly adhere to privacy standards to ensure your mental health journey remains completely private.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                >

                    {/* Card 1: Security */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col group cursor-pointer"
                    >
                        <div className="mb-6">
                            <span className="text-xs font-mono text-slate-400 mb-2 block">[1]</span>
                            <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">Military-grade security</h3>
                            <p className="text-[15px] text-slate-500 leading-relaxed pr-4">
                                End-to-end encryption ensures your personal journal entries and mental health data remain yours alone.
                            </p>
                        </div>
                        <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-100 group-hover:shadow-2xl transition-all duration-500">
                            <img src="/images/security_bg.png" alt="Security" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-x-6 bottom-6 md:-bottom-8 md:group-hover:bottom-6 transition-all duration-500 ease-out">
                                <motion.div
                                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                                    className="bg-white/70 backdrop-blur-xl border border-white/40 p-5 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-semibold text-slate-800 uppercase tracking-widest">Encryption</span>
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ShieldCheck className="w-5 h-5 text-sky-600" />
                                        </motion.div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[13px] text-slate-600">Journals</span>
                                            <div className="h-2 w-12 bg-sky-200 rounded-full flex justify-end overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className="h-full bg-sky-600 rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[13px] text-slate-600">Chat Logs</span>
                                            <div className="h-2 w-12 bg-sky-200 rounded-full flex justify-end overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 1, delay: 0.7 }}
                                                    className="h-full bg-sky-600 rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[13px] text-slate-600">Health Data</span>
                                            <div className="h-2 w-12 bg-sky-200 rounded-full flex justify-end overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 1, delay: 0.9 }}
                                                    className="h-full bg-sky-600 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Privacy */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col group cursor-pointer"
                    >
                        <div className="mb-6">
                            <span className="text-xs font-mono text-slate-400 mb-2 block">[2]</span>
                            <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">Complete anonymity</h3>
                            <p className="text-[15px] text-slate-500 leading-relaxed pr-4">
                                Your identity is detached from your data, offering complete peace of mind when using the AI or professionals.
                            </p>
                        </div>
                        <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-100 group-hover:shadow-2xl transition-all duration-500">
                            <img src="/images/privacy_bg.png" alt="Privacy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-x-6 bottom-6 md:-bottom-8 md:group-hover:bottom-6 transition-all duration-500 ease-out">
                                <motion.div
                                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                                    className="bg-[#143224]/80 backdrop-blur-xl border border-white/20 p-5 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-semibold text-[#a3e6c2] uppercase tracking-widest">Anonymizer</span>
                                        <motion.div
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <Fingerprint className="w-5 h-5 text-white" />
                                        </motion.div>
                                    </div>
                                    <div className="flex mt-2 mb-1">
                                        <motion.span
                                            animate={{ opacity: [1, 0.8, 1], textShadow: ["0 0 0px #fff", "0 0 10px #fff", "0 0 0px #fff"] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="text-4xl font-bold text-white tracking-tighter"
                                        >
                                            Active
                                        </motion.span>
                                    </div>
                                    <p className="text-[13px] text-[#81bf9d] mt-2 leading-tight">Identity obscured. Data routed securely without identifiers.</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Architecture */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col group cursor-pointer"
                    >
                        <div className="mb-6">
                            <span className="text-xs font-mono text-slate-400 mb-2 block">[3]</span>
                            <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">Powered by Supabase</h3>
                            <p className="text-[15px] text-slate-500 leading-relaxed pr-4">
                                Built on robust, open-source architecture that respects your digital privacy with top-tier compliance.
                            </p>
                        </div>
                        <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-100 group-hover:shadow-2xl transition-all duration-500">
                            <img src="/images/architecture_bg.png" alt="Architecture" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                            <div className="absolute inset-x-6 bottom-6 md:-bottom-8 md:group-hover:bottom-6 transition-all duration-500 ease-out">
                                <motion.div
                                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                                    className="bg-white/80 backdrop-blur-xl border border-white/40 p-5 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                            className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center"
                                        >
                                            <Server className="w-4 h-4 text-white" />
                                        </motion.div>
                                        <span className="font-bold text-slate-800 text-[15px]">Supabase Vault</span>
                                    </div>
                                    <div className="w-full bg-slate-100/50 rounded-lg p-3 border border-slate-200/50 overflow-hidden">
                                        <code className="text-[11px] text-slate-600 block mb-1">Row Level Security</code>
                                        <div className="h-1.5 w-full bg-emerald-200 rounded-full mt-2 overflow-hidden relative">
                                            <motion.div
                                                animate={{
                                                    x: ["-100%", "200%"],
                                                }}
                                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                                className="absolute top-0 bottom-0 w-1/2 bg-emerald-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
