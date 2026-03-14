import { motion } from 'framer-motion';
import {
    ArrowLeft,
    BookOpen,
    Brain,
    ExternalLink,
    PenSquare,
    ShieldCheck,
    Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ideals = [
    {
        icon: <Brain size={18} className="text-biko-accent" />,
        title: 'Psychological liberation',
        body: 'Biko argued that freedom is not only legal or electoral. It also begins with rejecting the mental habits of inferiority imposed by oppressive systems.',
    },
    {
        icon: <PenSquare size={18} className="text-yellow-400" />,
        title: 'Self-definition',
        body: 'His essays insisted that Black people must speak in their own voice, define their own horizons, and resist being explained by hostile frameworks.',
    },
    {
        icon: <Users size={18} className="text-green-400" />,
        title: 'Community and institution building',
        body: 'Black Consciousness was not merely a slogan. It called for student organising, political education, and Black-led institutions rooted in dignity and practical care.',
    },
    {
        icon: <ShieldCheck size={18} className="text-biko-accent2" />,
        title: 'A more human future',
        body: 'Biko did not imagine liberation as reversed domination. He wrote toward a society where human worth is restored and no group is reduced to a permanent object.',
    },
];

const readingLinks = [
    {
        label: 'South African History Online',
        href: 'https://www.sahistory.org.za/people/steve-bantu-biko',
        note: 'Biography and historical context',
    },
    {
        label: 'Britannica',
        href: 'https://www.britannica.com/biography/Steve-Biko',
        note: 'Overview of Biko, Black Consciousness, and his death in custody',
    },
    {
        label: 'SAHO Quotes Archive',
        href: 'https://www.sahistory.org.za/archive/quotes-steve-biko',
        note: 'Selected lines from speeches and writings collected in I Write What I Like',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col items-center w-full overflow-hidden relative">
            <Navbar />

            <main className="flex-1 w-full">
                <section className="w-full max-w-6xl mx-auto px-6 pt-12 pb-20 relative">
                    <div
                        className="absolute inset-x-6 top-0 h-80 opacity-30 pointer-events-none"
                        style={{
                            background:
                                'radial-gradient(circle at top right, rgba(75,139,245,0.22), transparent 46%), radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 32%)',
                        }}
                    />
                    <div
                        className="absolute right-0 top-16 w-72 h-72 halftone opacity-35 pointer-events-none"
                        style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 72%)' }}
                    />

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs text-biko-muted hover:text-biko-accent transition-colors tracking-widest uppercase mb-10"
                    >
                        <ArrowLeft size={14} />
                        Back to Home
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.55 }}
                        >
                            <div className="badge mb-6">About Bikode</div>
                            <h1 className="font-serif text-5xl md:text-7xl leading-[0.94] text-biko-text1 mb-6">
                                Built with code,
                                <span className="text-biko-accent italic"> memory,</span>
                                <br />
                                and critical thought.
                            </h1>

                            <div className="space-y-4 font-mono text-sm text-biko-text2 leading-relaxed max-w-2xl">
                                <p>
                                    Bikode was built by{' '}
                                    <span className="text-biko-text1 font-semibold">Eugene Ncube</span>, also known as{' '}
                                    <span className="text-biko-accent font-semibold">Eugene Boondock</span>, as a lightweight AI IDE with a clear point of view:
                                    powerful tools, minimal bloat, and a technical personality that feels handmade rather than corporate.
                                </p>
                                <p>
                                    The project also carries an intellectual influence. Eugene found inspiration in Steve Biko&apos;s seriousness about thought,
                                    self-definition, dignity, and the need to understand oppression critically rather than inherit the categories imposed by it.
                                    That spirit shapes the tone of Bikode just as much as the code does.
                                </p>
                                <p>
                                    This page is offered in respect and admiration, as an indulgence in the work of a great Black South African thinker. It is not
                                    presented as irreverence, and it does not claim that Steve Biko endorsed Bikode, its branding, or any modern software product.
                                    Inspiration is not endorsement; it is acknowledgment.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="panel p-5">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-biko-accent mb-2">Builder</p>
                                    <p className="font-serif text-2xl text-biko-text1 mb-2">Eugene Ncube</p>
                                    <p className="font-mono text-xs text-biko-text2 leading-relaxed">
                                        Also known as Eugene Boondock, he built Bikode through BoondockLabs around a low-level, no-bloat approach to software craft.
                                    </p>
                                </div>

                                <div className="panel-accent p-5">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-biko-text1/90 mb-2">Intellectual Thread</p>
                                    <p className="font-serif text-2xl text-biko-text1 mb-2">Biko&apos;s influence</p>
                                    <p className="font-mono text-xs text-biko-text1/80 leading-relaxed">
                                        The app&apos;s voice leans on a tradition of critical consciousness, self-respect, and refusing to build from borrowed assumptions.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.12 }}
                            className="relative"
                        >
                            <div className="panel overflow-hidden rotate-[-2deg]">
                                <img
                                    src="/images/eugene.jpg"
                                    alt="Eugene Ncube, also known as Eugene Boondock"
                                    className="w-full aspect-[16/10] object-cover"
                                />
                            </div>

                            <div className="panel-accent p-5 sm:max-w-sm sm:-mt-10 sm:ml-auto relative z-10 rotate-[2deg]">
                                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-biko-text1/90 mb-2">Studio Note</p>
                                <p className="font-mono text-xs text-biko-text1 leading-relaxed">
                                    Bikode pairs a Notepad2e core with AI agents, terminal tooling, Git workflows, and a product voice rooted in African intellectualism
                                    rather than generic startup language.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="w-full border-y-2 border-biko-border bg-biko-surface relative overflow-hidden">
                    <div
                        className="absolute inset-0 halftone opacity-20 pointer-events-none"
                        style={{ maskImage: 'radial-gradient(ellipse at center, black 28%, transparent 78%)' }}
                    />

                    <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-14 items-start relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.55 }}
                            className="relative"
                        >
                            <div className="panel overflow-hidden">
                                <img
                                    src="/images/steve_biko.jpg"
                                    alt="Portrait of Steve Biko"
                                    className="w-full aspect-[16/10] object-cover"
                                />
                                <div className="border-t-2 border-biko-border px-4 py-3 bg-biko-bg/90">
                                    <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-biko-accent">Steve Biko</p>
                                    <p className="font-mono text-xs text-biko-text2 mt-1">
                                        A foundational voice in Black Consciousness and one of apartheid South Africa&apos;s most important thinkers.
                                    </p>
                                </div>
                            </div>

                            <div className="panel-accent p-3 sm:p-4 mt-4 sm:mt-0 sm:w-64 sm:absolute sm:-bottom-10 sm:-right-6 rotate-[3deg]">
                                <img
                                    src="/images/steve_biko2.jpeg"
                                    alt="Steve Biko seated in a jacket and sweater"
                                    className="w-full aspect-[4/3] object-cover border border-biko-bg/30"
                                />
                                <p className="font-mono text-[11px] text-biko-text1 leading-relaxed mt-3">
                                    His writing tied political freedom to mental freedom, dignity, and the recovery of Black confidence.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.55, delay: 0.08 }}
                        >
                            <div className="badge mb-6">On Steve Biko</div>
                            <h2 className="font-serif text-4xl md:text-6xl text-biko-text1 leading-tight mb-6">
                                A thinker of liberation,
                                <span className="text-biko-accent italic"> not just a symbol.</span>
                            </h2>

                            <div className="space-y-4 font-mono text-sm text-biko-text2 leading-relaxed">
                                <p>
                                    Steve Biko was born in the Eastern Cape in 1946 and became one of the defining political and intellectual figures of the Black
                                    Consciousness Movement during apartheid. Through student organising, especially in the South African Students&apos; Organisation,
                                    he helped insist that Black South Africans needed more than inclusion into a white-defined order: they needed a new confidence in
                                    themselves, their communities, and their power to shape the country.
                                </p>
                                <p>
                                    His essays and speeches, later collected in{' '}
                                    <span className="text-biko-text1 font-semibold">I Write What I Like</span>, remain striking because they treat liberation as both
                                    a political struggle and a battle over the mind. Biko wrote against inferiority, dependence, and the habit of measuring Black life
                                    by standards built to diminish it.
                                </p>
                                <p>
                                    He was banned by the apartheid state in 1973, kept under severe restrictions, and died on September 12, 1977 from injuries sustained
                                    in police custody. His death became a global outrage, but his enduring importance lies in the precision of his thought: Black dignity,
                                    critical self-knowledge, and a future with a more human face.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-8">
                                {ideals.map((ideal) => (
                                    <div key={ideal.title} className="panel p-5" style={{ margin: '-1px' }}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-9 h-9 border border-biko-border bg-biko-hover flex items-center justify-center">
                                                {ideal.icon}
                                            </div>
                                            <h3 className="font-mono text-sm font-bold text-biko-text1">{ideal.title}</h3>
                                        </div>
                                        <p className="font-mono text-xs text-biko-text2 leading-relaxed">{ideal.body}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="w-full max-w-6xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5 }}
                            className="panel p-8"
                        >
                            <div className="badge mb-5">Why this matters</div>
                            <h2 className="font-serif text-4xl md:text-5xl text-biko-text1 leading-tight mb-5">
                                Bikode borrows a challenge:
                                <span className="text-biko-accent italic"> think clearly, build honestly.</span>
                            </h2>
                            <div className="space-y-4 font-mono text-sm text-biko-text2 leading-relaxed">
                                <p>
                                    The gesture toward Steve Biko is not there to flatten his politics into branding. It is there to recognize a lineage of African
                                    thought that values clarity, self-possession, and building from one&apos;s own understanding instead of borrowed confidence.
                                </p>
                                <p>
                                    In that sense, Bikode&apos;s cultural posture sits next to its technical posture. The software tries to be direct, lightweight, and
                                    capable; the page you are reading tries to be equally direct about where some of that spirit comes from.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, delay: 0.08 }}
                            className="space-y-4"
                        >
                            <div className="panel-accent p-6">
                                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-biko-text1/90 mb-3">Respect Note</p>
                                <p className="font-mono text-sm text-biko-text1 leading-relaxed">
                                    This homage is meant with care. It does not claim endorsement from Steve Biko, his family, or his intellectual legacy. It is simply a
                                    respectful acknowledgment that Bikode was shaped, in part, by the seriousness of his writing and the discipline of his critique.
                                </p>
                            </div>

                            <div className="panel p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <BookOpen size={18} className="text-biko-accent" />
                                    <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-biko-text1">Further Reading</h3>
                                </div>
                                <div className="space-y-3">
                                    {readingLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-start justify-between gap-4 border border-biko-divider px-4 py-3 hover:border-biko-accent transition-colors"
                                        >
                                            <div>
                                                <p className="font-mono text-xs font-semibold text-biko-text1">{link.label}</p>
                                                <p className="font-mono text-[11px] text-biko-text2 mt-1">{link.note}</p>
                                            </div>
                                            <ExternalLink size={15} className="text-biko-muted shrink-0 mt-0.5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
