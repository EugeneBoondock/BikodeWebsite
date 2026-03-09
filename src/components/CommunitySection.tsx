import { motion } from 'framer-motion';
import { GitPullRequest, Bug, Star, BookOpen } from 'lucide-react';

const steps = [
    { n: '01', title: 'Fork the Repo', desc: 'Head to GitHub and fork EugeneBoondock/Bikode to your own account.', icon: <Star size={16} className="text-biko-accent" /> },
    { n: '02', title: 'Pick an Issue', desc: 'Browse open issues, pick something that excites you, and leave a comment.', icon: <Bug size={16} className="text-yellow-400" /> },
    { n: '03', title: 'Write Code', desc: 'Build your feature or fix in C, C++, or JS. The codebase is modular.', icon: <BookOpen size={16} className="text-green-400" /> },
    { n: '04', title: 'Send a PR', desc: 'Open a pull request. We review fast and merge faster.', icon: <GitPullRequest size={16} className="text-purple-400" /> },
];

export default function CommunitySection() {
    return (
        <section id="community" className="w-full bg-biko-surface border-y-2 border-biko-border py-24 relative overflow-hidden">
            {/* Halftone background decoration */}
            <div
                className="absolute inset-0 halftone opacity-20 pointer-events-none"
                style={{ maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Heading + OS manifesto */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                    >
                        <div className="badge mb-6">Open Source</div>
                        <h2 className="font-serif text-5xl md:text-6xl font-normal text-biko-text1 leading-tight mb-6">
                            Built in<br />
                            <span className="text-biko-accent italic">public</span>.
                            <br />
                            <span className="text-biko-text2">Yours to fork.</span>
                        </h2>

                        <div className="space-y-4 mb-8 font-mono text-xs text-biko-text2 leading-relaxed">
                            <p>
                                Bikode is licensed under the{' '}
                                <span className="text-biko-text1 font-semibold">3-clause BSD license</span>.
                                Every line of its AI engine, plugin system, and GIF-sending chat is open for you
                                to read, modify, and distribute.
                            </p>
                            <p>
                                We build in the open because great tools deserve a community, not a corporation.
                                Whether you're fixing a typo in the README or adding a brand new AI provider —
                                <span className="text-biko-accent"> your PRs are welcome here</span>.
                            </p>
                        </div>

                        {/* Manifesto items — comic box style */}
                        <div className="grid grid-cols-2 gap-0">
                            {[
                                ['BSD License', 'No strings attached'],
                                ['Pull Requests', 'Always reviewed'],
                                ['Issues Open', 'Come find one'],
                                ['Lightweight', 'Always the goal'],
                            ].map(([title, sub], i) => (
                                <div key={i} className="panel p-4" style={{ margin: '-1px' }}>
                                    <div className="font-mono font-bold text-sm text-biko-accent mb-0.5">{title}</div>
                                    <div className="font-mono text-xs text-biko-muted">{sub}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Contribution steps */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className="space-y-0"
                    >
                        <div className="badge mb-8">How to contribute</div>
                        {steps.map((s, i) => (
                            <div key={i} className="panel p-5 hover:border-biko-accent transition-colors group lift" style={{ margin: '-1px' }}>
                                <div className="flex items-start gap-4">
                                    <div className="font-mono text-xs text-biko-muted font-bold tracking-widest pt-0.5 shrink-0">
                                        {s.n}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            {s.icon}
                                            <h3 className="font-mono font-bold text-sm text-biko-text1">{s.title}</h3>
                                        </div>
                                        <p className="font-mono text-xs text-biko-text2 leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="pt-6 flex gap-3">
                            <a
                                href="https://github.com/EugeneBoondock/Bikode"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 text-center px-4 py-3 bg-biko-accent text-biko-bg font-mono font-bold text-xs tracking-wider hover:bg-biko-accent2 transition-colors border-2 border-biko-accent lift"
                                style={{ boxShadow: '4px 4px 0 #1a2a4a' }}
                            >
                                View on GitHub →
                            </a>
                            <a
                                href="https://github.com/EugeneBoondock/Bikode/issues"
                                className="flex-1 text-center px-4 py-3 font-mono font-bold text-xs text-biko-text1 tracking-wider hover:text-biko-accent hover:border-biko-accent transition-colors border-2 border-biko-border lift"
                                style={{ boxShadow: '4px 4px 0 #111' }}
                            >
                                Browse Issues →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
