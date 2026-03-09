import { motion } from 'framer-motion';
import { Zap, Code, Shield, Cpu, RefreshCw, Box } from 'lucide-react';

const features = [
    {
        icon: <Zap className="text-yellow-400" size={24} />,
        title: "Lightweight Core",
        description: "Built on top of Notepad2e and highly optimized, Bikode opens instantly and consumes minimal RAM."
    },
    {
        icon: <Code className="text-blue-400" size={24} />,
        title: "Syntax Highlighting",
        description: "Built-in support for multiple languages. Code comfortably without firing up heavy IDEs."
    },
    {
        icon: <Box className="text-purple-400" size={24} />,
        title: "Plugin Architecture",
        description: "Extend core functionality easily. Bikode is a wrapper that welcomes third-party integrations natively."
    },
    {
        icon: <Cpu className="text-green-400" size={24} />,
        title: "Low Footprint",
        description: "Consumes minimal RAM and CPU. Background processes are heavily regulated for maximum efficiency."
    },
    {
        icon: <RefreshCw className="text-pink-400" size={24} />,
        title: "Modern Texting",
        description: "Supports sending GIFs and modern messaging features while maintaining a completely low-profile structure."
    },
    {
        icon: <Shield className="text-teal-400" size={24} />,
        title: "Open & Secure",
        description: "100% open-source means you can inspect every line of code. No telemetry, no bloatware."
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
};

export default function FeaturesSection() {
    return (
        <section id="features" className="w-full max-w-6xl mx-auto px-6 py-24 relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Why choose Bikode?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">A familiar experience, completely re-engineered for the modern era.</p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className="group relative bg-surface/30 border border-white/5 rounded-2xl p-6 hover:bg-surface/50 transition-all cursor-default overflow-hidden"
                    >
                        {/* Subtle hover gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
