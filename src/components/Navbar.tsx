import { Github } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const featuresHref = isHome ? '#features' : '/#features';
    const communityHref = isHome ? '#community' : '/#community';
    const navLinkClass = 'font-mono text-xs text-biko-text2 hover:text-biko-accent transition-colors tracking-widest uppercase';

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
                        <span className="text-biko-text2">DE</span>
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
                        className="flex items-center gap-2 border-2 border-biko-border hover:border-biko-accent text-biko-text2 hover:text-biko-accent px-2.5 sm:px-3 py-1 font-mono text-xs transition-all lift"
                    >
                        <Github size={13} />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
