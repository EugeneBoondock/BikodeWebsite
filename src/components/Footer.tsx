import { Github, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = {
    Resources: [
        { label: 'Download', href: 'https://github.com/EugeneBoondock/Bikode/releases/latest' },
        { label: 'README / Docs', href: 'https://github.com/EugeneBoondock/Bikode#readme' },
        { label: 'Report an Issue', href: 'https://github.com/EugeneBoondock/Bikode/issues' },
    ],
    Community: [
        { label: 'How to Contribute', href: 'https://github.com/EugeneBoondock/Bikode/blob/main/README.md' },
        { label: 'Open Pull Requests', href: 'https://github.com/EugeneBoondock/Bikode/pulls' },
        { label: 'Discord (TBA)', href: '#' },
    ],
};

export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-biko-border bg-biko-bg pt-16 pb-8 font-mono">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/biko_white.ico"
                                alt="Bikode Logo"
                                className="w-8 h-8 object-contain"
                                style={{ imageRendering: 'pixelated' }}
                            />
                            <span className="font-bold text-biko-text1 tracking-tight">BIKODE</span>
                        </div>
                        <p className="text-xs text-biko-text2 leading-relaxed max-w-xs mb-1">
                            "I code what I like."
                        </p>
                        <p className="text-xs text-biko-muted leading-relaxed max-w-xs mb-6">
                            A lightweight AI IDE by{' '}
                            <a
                                href="https://boondocklabs.co.za"
                                target="_blank"
                                rel="noreferrer"
                                className="text-biko-accent hover:underline"
                            >
                                BoondockLabs
                            </a>
                            , built on Notepad2e. BSD-licensed. Zero bloat. Maximum power.
                        </p>
                        <div className="flex gap-4 text-biko-muted">
                            <a
                                href="https://github.com/EugeneBoondock/Bikode"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="hover:text-biko-accent transition-colors"
                            >
                                <Github size={16} />
                            </a>
                            <a
                                href="https://x.com/eugeneboondock"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="X (Twitter)"
                                className="hover:text-biko-accent transition-colors"
                            >
                                <X size={16} />
                            </a>
                            <a
                                href="mailto:philosncube@gmail.com"
                                aria-label="Email"
                                className="hover:text-biko-accent transition-colors"
                            >
                                <Mail size={16} />
                            </a>
                        </div>
                    </div>

                    {Object.entries(links).map(([section, items]) => (
                        <div key={section}>
                            <h4 className="text-xs font-bold text-biko-text1 tracking-widest uppercase mb-4 border-b border-biko-divider pb-2">{section}</h4>
                            <ul className="space-y-2">
                                {items.map((l) => (
                                    <li key={l.label}>
                                        <a
                                            href={l.href}
                                            target={l.href.startsWith('http') ? '_blank' : undefined}
                                            rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                                            className="text-xs text-biko-text2 hover:text-biko-accent transition-colors"
                                        >
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-biko-divider pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-biko-muted tracking-widest uppercase">
                    <p>
                        © {new Date().getFullYear()}{' '}
                        <a
                            href="https://boondocklabs.co.za"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-biko-accent transition-colors"
                        >
                            BoondockLabs
                        </a>
                        {' '}· Bikode · BSD-3 License
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-biko-accent transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-biko-accent transition-colors">Terms</Link>
                        <a href="https://github.com/EugeneBoondock/Bikode" target="_blank" rel="noreferrer" className="hover:text-biko-accent transition-colors">Source</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
