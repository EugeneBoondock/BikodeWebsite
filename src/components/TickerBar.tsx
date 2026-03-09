const items = [
    'BIKODE', '·', 'AI IDE', '·', 'OPEN SOURCE', '·', 'BUILT ON NOTEPAD2E', '·',
    '"I CODE WHAT I LIKE"', '·', 'AGENTIC AI', '·', 'GIF SUPPORT', '·',
    'PLUGIN SYSTEM', '·', 'TERMINAL', '·', 'GIT INTEGRATION', '·',
    'BIKODE', '·', 'AI IDE', '·', 'OPEN SOURCE', '·', 'BUILT ON NOTEPAD2E', '·',
    '"I CODE WHAT I LIKE"', '·', 'AGENTIC AI', '·', 'GIF SUPPORT', '·',
    'PLUGIN SYSTEM', '·', 'TERMINAL', '·', 'GIT INTEGRATION', '·',
];

export default function TickerBar() {
    return (
        <div className="w-full bg-biko-accent border-y-2 border-biko-accent/70 overflow-hidden py-2" style={{ boxShadow: '0 3px 0 #1a2a4a inset' }}>
            <div className="flex overflow-hidden">
                <div className="ticker-track">
                    {items.map((item, i) => (
                        <span
                            key={i}
                            className={`font-mono text-xs font-bold shrink-0 ${item === '·' ? 'text-white/50 text-base' : 'text-biko-bg tracking-widest'}`}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
