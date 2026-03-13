import { Github } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const featuresHref = isHome ? '#features' : '/#features';
    const communityHref = isHome ? '#community' : '/#community';
    const navLinkClass = 'font-mono text-[11px] sm:text-xs font-semibold text-biko-text1/80 hover:text-biko-accent transition-all tracking-[0.32em] uppercase px-3 py-1 rounded-full bg-biko-surface/50 border border-transparent hover:border-biko-accent/60 shadow-[0_2px_8px_rgba(5,7,12,0.35)]';

    return (
        <header className="w-full border-b-2 border-biko-border bg-biko-bg/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
                <Link to="/" className="flex items-center gap-3 group min-w-0">
                    <img
                        src="/biko_white.ico"
                        alt="Bikode Logo"
                        className="w-8 h-8 object-contain"
                    />
                    <span className="font-mono text-lg sm:text-xl font-bold tracking-[0.08em] leading-none">
                        <span className="text-biko-text1">BI</span>
                        <span className="text-biko-accent">KO</span>
                        <span className="text-biko-text1/70">DE</span>
                    </span>
                    <span className="badge hidden sm:inline-block">AI IDE</span>
                </Link>

                <nav className="flex items-center gap-3 sm:gap-6">
                    <a href={featuresHref} className={navLinkClass}>Features</a>
                    <a href={communityHref} className={`${navLinkClass} hidden sm:block`}>Community</a>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `${navLinkClass} ${isActive ? 'text-biko-accent' : ''}`}
                    >
                        About
                    </NavLink>
                    <a
                        href="https://github.com/EugeneBoondock/Bikode"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 border-2 border-biko-border/70 hover:border-biko-accent text-biko-text1 hover:text-biko-accent px-3 py-1.5 font-mono text-xs tracking-[0.28em] uppercase bg-biko-surface/60 rounded-full shadow-[0_3px_10px_rgba(5,7,12,0.4)] transition-all"
                    >
                        <Github size={13} />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
