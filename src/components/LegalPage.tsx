import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface Section {
    heading: string;
    body: string[];
}

interface LegalPageProps {
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: Section[];
}

export default function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
    return (
        <div className="min-h-screen flex flex-col items-center w-full overflow-hidden relative">
            <Navbar />
            <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 font-mono">
                {/* Back link */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-xs text-biko-muted hover:text-biko-accent transition-colors tracking-widest uppercase mb-10"
                >
                    ← Back to Home
                </Link>

                {/* Header */}
                <div className="border-2 border-biko-border p-8 mb-10" style={{ boxShadow: '4px 4px 0 #1a2a4a' }}>
                    <p className="text-xs tracking-widest uppercase text-biko-accent mb-2">Legal</p>
                    <h1 className="text-3xl font-bold text-biko-text1 mb-2">{title}</h1>
                    <p className="text-sm text-biko-text2">{subtitle}</p>
                    <p className="text-xs text-biko-muted mt-4">Last updated: {lastUpdated}</p>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((section, i) => (
                        <div key={i} className="border-l-2 border-biko-accent pl-6">
                            <h2 className="text-sm font-bold text-biko-text1 tracking-widest uppercase mb-3">
                                {section.heading}
                            </h2>
                            {section.body.map((para, j) => (
                                <p key={j} className="text-xs text-biko-text2 leading-relaxed mb-2">
                                    {para}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Contact callout */}
                <div className="mt-12 border border-biko-divider p-6 text-xs text-biko-muted leading-relaxed">
                    Questions? Reach us at{' '}
                    <a href="mailto:philosncube@gmail.com" className="text-biko-accent hover:underline">
                        philosncube@gmail.com
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
}
