import { motion } from 'framer-motion';
import { Cpu, MessageSquare, Image, Puzzle, Terminal, GitBranch, Search, Code } from 'lucide-react';

const features = [
    {
        icon: <MessageSquare size={20} className="text-biko-accent" />,
        title: 'Agentic AI Engine',
        desc: 'Full multi-turn agent loop with tool execution. The AI reads files, writes code, runs commands, and browses the web — all without leaving the editor.',
        tag: 'AIAgent.c',
        large: true,
    },
    {
        icon: <Image size={20} className="text-pink-400" />,
        title: 'GIF Sending',
        desc: 'The only IDE where you can send GIFs in chat. Because coding should be fun.',
        tag: 'ChatPanel.c',
    },
    {
        icon: <Cpu size={20} className="text-yellow-400" />,
        title: 'Lightweight Core',
        desc: 'Built on Notepad2e — a single portable EXE with minimal RAM footprint. No Java, no Electron.',
        tag: 'Notepad2e',
    },
    {
        icon: <Puzzle size={20} className="text-purple-400" />,
        title: 'Plugin System',
        desc: 'Full C-based plugin API. Extend every part of the IDE via shared libraries.',
        tag: 'PluginManager.c',
    },
    {
        icon: <Terminal size={20} className="text-green-400" />,
        title: 'Integrated Terminal',
        desc: 'A full-featured terminal docked inside the editor. Run builds, scripts, and commands without alt-tabbing.',
        tag: 'Terminal.c',
    },
    {
        icon: <GitBranch size={20} className="text-orange-400" />,
        title: 'Git Integration',
        desc: 'Native Git UI for commits, diffs, and branches — directly inside the lightweight editor.',
        tag: 'GitUI.c',
    },
    {
        icon: <Search size={20} className="text-teal-400" />,
        title: 'Web Search Tool',
        desc: 'The AI agent searches the web to give you up-to-date answers while you code.',
        tag: 'web-search.js',
    },
    {
        icon: <Code size={20} className="text-biko-accent2" />,
        title: 'Multi-Provider AI',
        desc: 'Connect to OpenAI, Anthropic, Gemini, and more. You choose the model, Bikode does the rest.',
        tag: 'AIProvider.c',
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FeaturesSection() {
    return (
        <section id="features" className="w-full max-w-6xl mx-auto px-6 py-24 relative">
            {/* Section header */}
            <div className="flex items-start gap-6 mb-16">
                <div>
                    <div className="badge mb-4">Feature Breakdown</div>
                    <h2 className="font-serif text-5xl md:text-6xl text-biko-text1 font-normal leading-tight">
                        What's<br /><span className="text-biko-accent italic">inside</span> the box.
                    </h2>
                </div>
                <div className="hidden md:block flex-1 border-t-2 border-biko-divider mt-8 ml-4" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
            >
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        className={`panel p-5 hover:border-biko-accent group cursor-default transition-colors ${f.large ? 'lg:col-span-2 md:col-span-2' : ''
                            }`}
                        style={{ margin: '-1px' }} // Grid overlap for comic panel effect
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 flex items-center justify-center border border-biko-border bg-biko-hover group-hover:border-biko-accent transition-colors">
                                {f.icon}
                            </div>
                            <h3 className="font-mono font-bold text-sm text-biko-text1 tracking-tight">{f.title}</h3>
                        </div>
                        <p className="font-mono text-xs text-biko-text2 leading-relaxed mb-4">{f.desc}</p>
                        <div className="font-mono text-[10px] text-biko-muted border border-biko-divider px-2 py-0.5 inline-block tracking-wider">
                            {f.tag}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
