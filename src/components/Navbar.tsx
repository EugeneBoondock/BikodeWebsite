import { Github } from 'lucide-react';

export default function Navbar() {
    return (
        <header className="w-full border-b-2 border-biko-border bg-biko-bg/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Logo with Comic book style */}
                <a href="#" className="flex items-center gap-3 group">
                    <img
                        src="/biko_white.ico"
                        alt="Bikode Logo"
                        className="w-8 h-8 object-contain"
                        style={{ imageRendering: 'pixelated' }}
                    />
                    <span className="font-mono font-bold text-biko-text1 tracking-tight">BIKODE</span>
                    <span className="badge hidden sm:inline-block">AI IDE</span>
                </a>

                <nav className="flex items-center gap-6">
                    <a href="#features" className="font-mono text-xs text-biko-text2 hover:text-biko-accent transition-colors tracking-widest uppercase">Features</a>
                    <a href="#community" className="font-mono text-xs text-biko-text2 hover:text-biko-accent transition-colors tracking-widest uppercase hidden sm:block">Community</a>
                    <a
                        href="https://github.com/EugeneBoondock/Bikode"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 border-2 border-biko-border hover:border-biko-accent text-biko-text2 hover:text-biko-accent px-3 py-1 font-mono text-xs transition-all lift"
                    >
                        <Github size={13} />
                        <span>GitHub</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
