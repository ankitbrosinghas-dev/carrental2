import { DESTINATIONS } from "@/lib/constants";

const WhatsAppGlyph = () => (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-orange" fill="currentColor" aria-hidden="true">
        <path d="M13.5 2C8.4 2 4.3 6.1 4.3 11.2c0 1.8.5 3.5 1.5 5L4 22l5.9-1.7c1.4.8 3 1.2 4.6 1.2 5.1 0 9.2-4.1 9.2-9.2S18.6 2 13.5 2z" opacity="0" />
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.8-1.8-.9-.2-.1-.4-.1-.5.1-.2.3-.6.9-.8 1-.1.2-.3.2-.5.1a6.8 6.8 0 0 1-3.4-3c-.3-.4 0-.5.3-1l.4-.7c0-.2 0-.3-.1-.5l-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.5-.2z" />
    </svg>
);

export const Marquee = () => {
    const items = [...DESTINATIONS, ...DESTINATIONS];
    return (
        <div
            className="overflow-hidden border-y border-white/10 bg-brand-green-dark py-4"
            data-testid="destinations-marquee"
        >
            <div className="flex w-max animate-marquee items-center whitespace-nowrap">
                {items.map((d, i) => (
                    <span key={i} className="flex items-center">
                        <span className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand-cream/90">
                            {d}
                        </span>
                        <span className="mx-8 inline-block h-2 w-2 rounded-full bg-brand-orange" />
                    </span>
                ))}
            </div>
        </div>
    );
};

export { WhatsAppGlyph };
