export const LogoMark = ({ className = "h-10 w-10" }: { className?: string }) => (
    <img
        src="/logo-mark.png"
        alt="Bhumiputram emblem"
        className={`${className} object-contain`}
        aria-hidden="true"
    />
);

export const Logo = ({ dark = false }: { dark?: boolean }) => (
    <span className="inline-flex items-center gap-2.5" data-testid="logo">
        <LogoMark className="h-11 w-11" />
        <span className="leading-none">
            <span
                className={`block font-display text-lg font-extrabold tracking-tight ${
                    dark ? "text-brand-cream" : "text-brand-green"
                }`}
            >
                Bhumiputram
            </span>
            <span className="mt-0.5 block font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-brand-orange">
                Car Rental
            </span>
        </span>
    </span>
);
