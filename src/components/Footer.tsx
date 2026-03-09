import { Github, Twitter, Mail } from 'lucide-react';

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
                            <div
                                className="w-8 h-8 border-2 border-biko-accent bg-biko-accent/20 flex items-center justify-center font-serif text-biko-accent font-bold text-lg"
                                style={{ boxShadow: '2px 2px 0 #1a2a4a' }}
                            >
                                B
                            </div>
                            <span className="font-bold text-biko-text1 tracking-tight">BIKODE</span>
                        </div>
                        <p className="text-xs text-biko-text2 leading-relaxed max-w-xs mb-1">
                            "I code what I like."
                        </p>
                        <p className="text-xs text-biko-muted leading-relaxed max-w-xs mb-6">
                            A lightweight AI IDE by BoondockLabs, built on Notepad2e.
                            BSD-licensed. Zero bloat. Maximum power.
                        </p>
                        <div className="flex gap-4 text-biko-muted">
                            <a href="https://github.com/EugeneBoondock/Bikode" className="hover:text-biko-accent transition-colors"><Github size={16} /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={16} /></a>
                            <a href="mailto:support@bikode.co.za" className="hover:text-biko-accent transition-colors"><Mail size={16} /></a>
                        </div>
                    </div>

                    {Object.entries(links).map(([section, items]) => (
                        <div key={section}>
                            <h4 className="text-xs font-bold text-biko-text1 tracking-widest uppercase mb-4 border-b border-biko-divider pb-2">{section}</h4>
                            <ul className="space-y-2">
                                {items.map((l) => (
                                    <li key={l.label}>
                                        <a href={l.href} className="text-xs text-biko-text2 hover:text-biko-accent transition-colors">
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
                    <p>© {new Date().getFullYear()} BoondockLabs · Bikode · BSD-3 License</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-biko-accent transition-colors">Privacy</a>
                        <a href="#" className="hover:text-biko-accent transition-colors">Terms</a>
                        <a href="https://github.com/EugeneBoondock/Bikode" className="hover:text-biko-accent transition-colors">Source</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
