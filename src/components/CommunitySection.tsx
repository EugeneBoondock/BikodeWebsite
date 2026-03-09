import { motion } from 'framer-motion';
import { GitPullRequest, Users, Star, ArrowRight } from 'lucide-react';

export default function CommunitySection() {
    return (
        <section id="community" className="w-full relative overflow-hidden py-32 mt-12 bg-surface/20 border-y border-white/5">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built by the <span className="text-primary">Community</span>. <br /> Built for everyone.</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Bikode is proudly open-source and relies on the passion of developers around the world. Whether you want to fix a bug, add a feature, or improve documentation, your contributions are welcome.
                        </p>

                        <div className="flex flex-col gap-4">
                            <a href="https://github.com/EugeneBoondock/Biko/blob/main/README.md" className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-black/20 hover:bg-white/5 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/20 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                        <GitPullRequest size={20} />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold">Submit a PR</h4>
                                        <p className="text-xs text-gray-500">Read our contributing guidelines</p>
                                    </div>
                                </div>
                                <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </a>

                            <a href="https://github.com/EugeneBoondock/Biko/issues" className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-black/20 hover:bg-white/5 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                        <Users size={20} />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold">Join the Discussion</h4>
                                        <p className="text-xs text-gray-500">Report bugs or suggest features</p>
                                    </div>
                                </div>
                                <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Decorative code mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl border border-white/10 bg-[#0d0d0d] shadow-2xl shadow-black/50 overflow-hidden"
                    >
                        <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#1a1a1a]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="mx-auto text-xs text-gray-500 font-mono">Bikode.c — Open Source</div>
                        </div>
                        <div className="p-6 text-sm font-mono text-gray-300 overflow-x-auto">
                            <pre>
                                <span className="text-purple-400">#include</span> <span className="text-green-400">&lt;bikode.h&gt;</span>{'\n'}
                                <span className="text-gray-500">/* Community-driven features */</span>{'\n'}
                                <span className="text-blue-400">int</span> <span className="text-yellow-200">main</span>() {'{\n'}
                                {'  '}BikodeApp app = <span className="text-yellow-200">Initialize</span>();{'\n'}
                                {'\n'}
                                {'  '}app.<span className="text-blue-300">onModuleLoad</span>(<span className="text-green-400">"notepad_wrapper"</span>);{'\n'}
                                {'  '}app.<span className="text-blue-300">enablePlugins</span>(<span className="text-purple-400">true</span>);{'\n'}
                                {'\n'}
                                {'  '}printf(<span className="text-green-400">"Welcome to the community!\n"</span>);{'\n'}
                                {'  '}<span className="text-pink-400">return</span> <span className="text-orange-400">0</span>;{'\n'}
                                {'}'}
                            </pre>
                        </div>
                        <div className="px-4 py-3 border-t border-white/5 bg-[#1a1a1a] flex justify-between items-center text-xs text-gray-500">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1"><Star size={12} /> Star us on GitHub</span>
                            </div>
                            <span>UTF-8 • C++</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
