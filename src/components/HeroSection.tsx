import { motion } from 'framer-motion';
import { Download, Github, ChevronRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-medium mb-8"
            >
                <span className="flex h-2 w-2 rounded-full bg-primary/80 animate-pulse"></span>
                Bikode is Open Source
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500"
            >
                Your Next-Gen <br className="hidden md:block" /> Notepad Experience
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12"
            >
                Bikode is a powerful, open-source wrapper built on top of the ultra-lightweight <span className="text-gray-300 font-semibold">Notepad2e</span> core. It supercharges your daily text editing with modern features, GIF support, and developer-friendly tools without bloated memory usage.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
                <a href="https://github.com/EugeneBoondock/Bikode/releases/latest" className="group relative flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
                    <Download size={18} />
                    <span>Download Now</span>
                    <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 ring-offset-2 ring-offset-background opacity-0 group-focus-visible:opacity-100 transition-opacity"></div>
                </a>
                <a href="https://github.com/EugeneBoondock/Bikode" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all hover:scale-105 active:scale-95">
                    <Github size={18} />
                    <span>View on GitHub</span>
                    <ChevronRight size={16} className="opacity-50 group-hover:translate-x-1 transition-transform" />
                </a>
            </motion.div>

            {/* Decorative abstract elements */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        </section>
    );
}
