import { motion } from 'framer-motion';
import { Download, Github } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 pt-20 pb-16 relative">

            {/* Halftone pattern top-right */}
            <div
                className="absolute top-0 right-0 w-80 h-80 halftone opacity-40 pointer-events-none"
                style={{ maskImage: 'radial-gradient(ellipse at top right, black 20%, transparent 75%)' }}
            />

            {/* Issue number / chapter label — comic book meta */}
            <div className="flex items-center gap-4 mb-10">
                <div className="badge">Issue #001</div>
                <div className="h-px flex-1 bg-biko-divider max-w-xs" />
                <span className="font-mono text-xs text-biko-muted">BoondockLabs · 2026</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Big serif display title */}
                    <h1
                        className="font-serif text-7xl md:text-8xl font-normal leading-[0.9] mb-6 text-biko-text1"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        Bi<span className="text-biko-accent italic">ko</span>
                        <span className="block text-biko-text2 text-5xl md:text-6xl font-normal mt-1 outline-text">de.</span>
                    </h1>

                    <p className="font-mono text-sm text-biko-text2 mb-3 tracking-widest uppercase">
                        — An AI IDE that codes what it likes
                    </p>

                    <p className="font-mono text-biko-text2 text-sm leading-relaxed max-w-md mb-8">
                        Built on the ultra-lightweight{' '}
                        <span className="text-biko-accent font-semibold">Notepad2e</span> core,
                        Bikode adds a full agentic AI engine, multi-provider chat, a built-in terminal,
                        Git UI, plugin system, and yes —{' '}
                        <span className="text-biko-accent font-semibold">GIF sending</span>.
                        Zero bloat. Maximum power.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href="https://github.com/EugeneBoondock/Bikode/releases/latest"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-biko-accent text-biko-bg font-mono font-bold text-sm tracking-wider hover:bg-biko-accent2 transition-colors border-2 border-biko-accent lift"
                            style={{ boxShadow: '4px 4px 0 #1a2a4a' }}
                        >
                            <Download size={15} />
                            Download Free
                        </a>
                        <a
                            href="https://github.com/EugeneBoondock/Bikode"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent font-mono font-bold text-sm text-biko-text1 tracking-wider hover:text-biko-accent transition-colors border-2 border-biko-border hover:border-biko-accent lift"
                            style={{ boxShadow: '4px 4px 0 #111' }}
                        >
                            <Github size={15} />
                            Star on GitHub
                        </a>
                    </div>
                </motion.div>

                {/* Right: IDE chat terminal mockup panel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="panel"
                    style={{ boxShadow: '6px 6px 0 #111' }}
                >
                    {/* Title bar */}
                    <div className="flex items-center px-4 py-2 border-b-2 border-biko-border bg-biko-hover">
                        <div className="flex gap-2 mr-4">
                            <div className="w-3 h-3 bg-red-500/80 border border-red-700"></div>
                            <div className="w-3 h-3 bg-yellow-500/80 border border-yellow-700"></div>
                            <div className="w-3 h-3 bg-green-500/80 border border-green-700"></div>
                        </div>
                        <span className="font-mono text-xs text-biko-text2 tracking-wider">BIKODE AI — Untitled.c</span>
                    </div>

                    {/* Chat output area styled like the ChatPanel */}
                    <div className="p-5 font-mono text-xs leading-relaxed min-h-[240px] space-y-3">
                        <div>
                            <span className="text-biko-muted">{'> '}[SYSTEM] </span>
                            <span className="text-biko-text2">Bikode AI agent initialized. Tools: read_file, write_file, exec_cmd, list_dir, web_search</span>
                        </div>
                        <div>
                            <span className="text-biko-accent font-bold">{'> '}[USER] </span>
                            <span className="text-biko-text1">fix the memory leak in renderer.c and send me a gif when done 🎯</span>
                        </div>
                        <div>
                            <span className="text-green-400 font-bold">{'> '}[BIKODE] </span>
                            <span className="text-biko-text2">Reading renderer.c... found leak at line 247. Patching allocator.</span>
                        </div>
                        <div className="pl-4 border-l-2 border-biko-accent/30 space-y-1">
                            <div className="text-biko-muted">{'  '}[TOOL] read_file("renderer.c") → 847 lines</div>
                            <div className="text-biko-muted">{'  '}[TOOL] write_file("renderer.c") → patched</div>
                            <div className="text-biko-muted">{'  '}[TOOL] exec_cmd("make test") → ✅ 0 errors</div>
                        </div>
                        <div>
                            <span className="text-green-400 font-bold">{'> '}[BIKODE] </span>
                            <span className="text-biko-text1">All done! Leak patched. Here's your gif 🎉</span>
                        </div>
                        <div className="border border-biko-border/60 p-2 inline-block">
                            <div className="text-center text-2xl">🦄✨</div>
                            <div className="text-biko-muted text-center text-[10px]">celebration.gif • 420KB</div>
                        </div>
                        <div>
                            <span className="text-biko-accent text-xs blink">█</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
