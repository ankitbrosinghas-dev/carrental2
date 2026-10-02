import { ArrowRight } from "lucide-react";
import { Eyebrow, FadeIn } from "@/components/Reveal";
import { FALLBACK_CARS, waLink, bookCarMessage } from "@/lib/constants";

export default function Pricing() {
    const cars = FALLBACK_CARS;

    return (
        <main className="pt-28 lg:pt-36" data-testid="pricing-page">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <Eyebrow>Pricing</Eyebrow>
                </FadeIn>
                <FadeIn delay={0.08}>
                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl" data-testid="pricing-heading">
                        Honest rates. Nothing hidden.
                    </h1>
                </FadeIn>
                <FadeIn delay={0.16}>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Every rate below is what you pay — no security deposit, no booking fee, no surprise
                        line items at handover.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} className="mt-12 overflow-x-auto rounded-3xl border border-brand-line bg-white shadow-sm" testId="pricing-table">
                    <table className="w-full min-w-[680px] text-left" data-testid="pricing-table-element">
                        <thead>
                            <tr className="border-b border-brand-line bg-brand-sand/60">
                                <th className="px-6 py-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Car</th>
                                <th className="px-6 py-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Type</th>
                                <th className="px-6 py-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Fuel</th>
                                <th className="px-6 py-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">12 Hrs</th>
                                <th className="px-6 py-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">24 Hrs</th>
                                <th className="px-6 py-4" />
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map((c) => (
                                <tr key={c.slug} className="border-b border-brand-line/70 transition-colors last:border-0 hover:bg-brand-orange-soft/40" data-testid={`pricing-row-${c.slug}`}>
                                    <td className="px-6 py-5">
                                        <p className="font-display text-sm font-bold text-brand-ink">{c.name}</p>
                                        <p className="text-xs text-muted-foreground">{c.seats} seats · {c.transmission}</p>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-brand-ink/70">{c.category}</td>
                                    <td className="px-6 py-5 text-sm text-brand-ink/70">{c.fuel}</td>
                                    <td className="px-6 py-5 font-display text-base font-extrabold text-brand-ink">₹{c.rate_12h.toLocaleString("en-IN")}</td>
                                    <td className="px-6 py-5 font-display text-base font-extrabold text-brand-ink">₹{c.rate_24h.toLocaleString("en-IN")}</td>
                                    <td className="px-6 py-5 text-right">
                                        <a
                                            href={waLink(bookCarMessage(c.name))}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-testid={`pricing-book-${c.slug}`}
                                            className="group inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 font-display text-xs font-bold text-white transition-colors hover:bg-brand-orange-hover"
                                        >
                                            Book
                                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </FadeIn>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                        { t: "Clean & sanitised cars", d: "Every car is serviced and cleaned before every handover." },
                        { t: "Instant WhatsApp booking", d: "No app, no account, no counter — confirm your car in one chat." },
                        { t: "Weekly & monthly plans", d: "Staying longer? Custom rates on WhatsApp — usually much cheaper." },
                    ].map((n, i) => (
                        <FadeIn key={n.t} delay={i * 0.08}>
                            <div className="h-full rounded-2xl border border-brand-line bg-white p-6" data-testid={`pricing-note-${i}`}>
                                <p className="font-display text-sm font-bold text-brand-green">{n.t}</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.d}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </main>
    );
}
