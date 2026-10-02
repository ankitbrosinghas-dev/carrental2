import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export const FadeIn = ({
    children,
    className = "",
    delay = 0,
    testId,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    testId?: string;
}) => (
    <motion.div
        className={className}
        variants={delay
            ? { hidden: fadeUp.hidden, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay } } }
            : fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        data-testid={testId}
    >
        {children}
    </motion.div>
);

export const Stagger = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
    <motion.div className={className} variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
        {children}
    </motion.div>
);

export const Eyebrow = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
    <p
        className={`flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] ${
            light ? "text-brand-cream/70" : "text-brand-green"
        }`}
    >
        <span className="inline-block h-2 w-2 rounded-[3px] bg-brand-orange" />
        {children}
    </p>
);

export const SectionHeading = ({
    eyebrow,
    title,
    sub,
    light = false,
    testId,
}: {
    eyebrow: string;
    title: string;
    sub?: string;
    light?: boolean;
    testId?: string;
}) => (
    <div className="max-w-2xl">
        <FadeIn>
            <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </FadeIn>
        <FadeIn delay={0.08}>
            <h2
                data-testid={testId}
                className={`mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
                    light ? "text-brand-cream" : "text-brand-ink"
                }`}
            >
                {title}
            </h2>
        </FadeIn>
        {sub && (
            <FadeIn delay={0.16}>
                <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-brand-cream/70" : "text-muted-foreground"}`}>
                    {sub}
                </p>
            </FadeIn>
        )}
    </div>
);
