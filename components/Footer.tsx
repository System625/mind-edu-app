import Link from 'next/link';
import { Brain, Heart, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#111] pt-20 pb-10 border-t border-white/10 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 outline-none mb-6">
                            <div className="bg-sky-500/20 p-2 rounded-xl">
                                <Brain className="h-5 w-5 text-sky-400" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                MindEdu Hub
                            </span>
                        </Link>
                        <p className="text-[14px] text-white/50 leading-relaxed max-w-xs mb-6">
                            Empowering youth with interactive, evidence-based mental health education and tools.
                        </p>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-sky-500 hover:text-white transition-all">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-sky-500 hover:text-white transition-all">
                                <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-sky-500 hover:text-white transition-all">
                                <Instagram className="w-4 h-4 text-[#E1306C]" />
                            </a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-1 md:ml-auto">
                        <h4 className="text-[13px] font-bold uppercase tracking-widest text-white mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link href="/modules" className="text-[14px] text-white/50 hover:text-white transition-colors">Learning Modules</Link></li>
                            <li><Link href="/quizzes" className="text-[14px] text-white/50 hover:text-white transition-colors">Smart Quizzes</Link></li>
                            <li><Link href="/coping" className="text-[14px] text-white/50 hover:text-white transition-colors">Coping Tools</Link></li>
                            <li><Link href="/dashboard" className="text-[14px] text-white/50 hover:text-white transition-colors">Your Dashboard</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="md:col-span-1 md:ml-auto">
                        <h4 className="text-[13px] font-bold uppercase tracking-widest text-white mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/faq" className="text-[14px] text-white/50 hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="text-[14px] text-white/50 hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/crisis" className="text-[14px] text-white/50 hover:text-red-400 transition-colors">Crisis Resources</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="md:col-span-1 md:ml-auto">
                        <h4 className="text-[13px] font-bold uppercase tracking-widest text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="text-[14px] text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-[14px] text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookie-policy" className="text-[14px] text-white/50 hover:text-white transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[13px] text-white/40">
                        © {currentYear} MindEdu Hub. All rights reserved.
                    </p>
                    <p className="text-[13px] text-white/40 flex items-center">
                        Built with <Heart className="w-3.5 h-3.5 mx-1.5 text-red-500 fill-current" /> for youth mental health.
                    </p>
                </div>
            </div>
        </footer>
    );
}
