import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Eyebrow, FadeIn } from "@/components/Reveal";
import { FAQS, waLink, BOOK_MESSAGE, PHONE_DISPLAY } from "@/lib/constants";

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <main className="pt-28 lg:pt-36" data-testid="faq-page">
            <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
                <FadeIn>
                    <Eyebrow>FAQ</Eyebrow>
                </FadeIn>
                <FadeIn delay={0.08}>
                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl" data-testid="faq-heading">
                        Asked before every drive
                    </h1>
                </FadeIn>
                <FadeIn delay={0.16}>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Short answers here — anything specific, we sort it on WhatsApp in minutes.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} className="mt-12">
                    <div className="w-full space-y-4" data-testid="faq-accordion">
                        {FAQS.map((f, i) => {
                            const isOpen = open === i;
                            return (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-brand-line bg-white px-6 shadow-sm"
                                    data-testid={`faq-item-${i}`}
                                >
                                    <button
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        className="flex w-full items-center justify-between gap-4 py-5 text-left"
                                        data-testid={`faq-trigger-${i}`}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="font-display text-base font-bold text-brand-ink">{f.q}</span>
                                        <ChevronDown
                                            className={`h-4 w-4 shrink-0 text-brand-green transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </FadeIn>

                <FadeIn delay={0.24}>
                    <div className="mt-12 rounded-3xl bg-brand-green-dark p-8 text-center" data-testid="faq-cta-card">
                        <MessageCircle className="mx-auto h-8 w-8 text-brand-orange" />
                        <h2 className="mt-4 font-display text-2xl font-bold text-brand-cream">Still have a question?</h2>
                        <p className="mx-auto mt-2 max-w-sm text-sm text-brand-cream/70">
                            Chat with us for details — a real person replies, usually within minutes.
                        </p>
                        <a
                            href={waLink(BOOK_MESSAGE)}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="faq-cta-whatsapp"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 font-display font-bold text-white transition-colors hover:bg-brand-orange-hover"
                        >
                            WhatsApp {PHONE_DISPLAY}
                        </a>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
