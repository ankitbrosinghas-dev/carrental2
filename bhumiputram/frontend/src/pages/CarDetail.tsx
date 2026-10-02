import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Fuel, Settings2, Users, CarFront } from "lucide-react";
import { CarCard } from "@/components/CarCard";
import { Eyebrow, FadeIn } from "@/components/Reveal";
import { FALLBACK_CARS, waLink, bookCarMessage } from "@/lib/constants";

export default function CarDetail() {
    const { slug } = useParams<{ slug: string }>();
    const [shot, setShot] = useState(0);

    useEffect(() => {
        setShot(0);
    }, [slug]);

    const car = FALLBACK_CARS.find((item) => item.slug === slug) ?? null;
    const all = FALLBACK_CARS;

    if (!car) {
        return (
            <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 pt-28" data-testid="car-detail-loading">
                <p className="font-display text-xl font-bold text-brand-ink">Loading car…</p>
                <Link to="/cars" className="text-sm font-semibold text-brand-green hover:underline" data-testid="car-detail-back-to-fleet">
                    Back to fleet
                </Link>
            </main>
        );
    }

    const gallery = car.gallery?.length ? car.gallery : [car.image];
    const similar = all.filter((c) => c.slug !== car.slug && c.category === car.category).slice(0, 3);
    const similarAny = similar.length ? similar : all.filter((c) => c.slug !== car.slug).slice(0, 3);

    const specs = [
        { icon: Users, label: "Seats", value: `${car.seats}` },
        { icon: Settings2, label: "Transmission", value: car.transmission },
        { icon: Fuel, label: "Fuel", value: car.fuel },
        { icon: CarFront, label: "Type", value: car.category },
    ];

    const rates = [
        { label: "12 hours", price: car.rate_12h, note: "Perfect for city days" },
        { label: "24 hours", price: car.rate_24h, note: "Full day, your pace" },
        { label: "Weekly", price: null, note: "Ask on WhatsApp" },
        { label: "Monthly", price: null, note: "Ask on WhatsApp" },
    ];

    return (
        <main className="pt-28 lg:pt-36" data-testid="car-detail-page">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <Link
                        to="/cars"
                        data-testid="car-detail-back-link"
                        className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-brand-green"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" /> Back to fleet
                    </Link>
                </FadeIn>

                <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-14">
                    {/* GALLERY */}
                    <div className="lg:col-span-7">
                        <FadeIn>
                            <div className="overflow-hidden rounded-[2rem] bg-brand-ink shadow-xl">
                                <motion.img
                                    key={shot}
                                    initial={{ opacity: 0, scale: 1.04 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    src={gallery[shot]}
                                    alt={`${car.name} — photo ${shot + 1}`}
                                    className="aspect-[3/2] w-full object-cover"
                                    data-testid="car-detail-main-image"
                                />
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.1} className="mt-4 grid grid-cols-3 gap-4">
                            {gallery.map((g, i) => (
                                <button
                                    key={i}
                                    onClick={() => setShot(i)}
                                    data-testid={`car-detail-thumb-${i}`}
                                    className={`overflow-hidden rounded-2xl border-2 transition-all ${
                                        shot === i ? "border-brand-orange" : "border-transparent opacity-70 hover:opacity-100"
                                    }`}
                                >
                                    <img src={g} alt={`${car.name} thumbnail ${i + 1}`} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                                </button>
                            ))}
                        </FadeIn>
                    </div>

                    {/* INFO + PRICING */}
                    <div className="lg:col-span-5">
                        <FadeIn>
                            <Eyebrow>{car.tag}</Eyebrow>
                            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl" data-testid="car-detail-name">
                                {car.name}
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.08}>
                            <div className="mt-8 grid grid-cols-2 gap-3">
                                {specs.map((s) => (
                                    <div key={s.label} className="flex items-center gap-3 rounded-2xl border border-brand-line bg-white p-4" data-testid={`car-detail-spec-${s.label.toLowerCase()}`}>
                                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-light text-brand-green">
                                            <s.icon className="h-5 w-5" />
                                        </span>
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{s.label}</p>
                                            <p className="font-display text-sm font-bold text-brand-ink">{s.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.14}>
                            <div className="mt-6 rounded-3xl bg-brand-green-deep p-7" data-testid="car-detail-pricing-card">
                                <div className="space-y-4">
                                    {rates.map((r) => (
                                        <div key={r.label} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                            <div>
                                                <p className="font-display font-bold text-brand-cream">{r.label}</p>
                                                <p className="text-xs text-brand-cream/50">{r.note}</p>
                                            </div>
                                            {r.price ? (
                                                <p className="font-display text-2xl font-extrabold text-brand-cream">
                                                    ₹{r.price.toLocaleString("en-IN")}
                                                </p>
                                            ) : (
                                                <a
                                                    href={waLink(bookCarMessage(car.name))}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-full border border-brand-orange px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange transition-colors hover:bg-brand-orange hover:text-white"
                                                    data-testid={`car-detail-rate-${r.label.toLowerCase()}-wa`}
                                                >
                                                    Ask
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={waLink(bookCarMessage(car.name))}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="car-detail-book-button"
                                    className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-orange py-4 font-display font-bold text-white shadow-lg shadow-black/20 transition-colors hover:bg-brand-orange-hover"
                                >
                                    Book this car on WhatsApp
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                                <ul className="mt-5 space-y-2">
                                    {["18+ with a valid licence"].map((t) => (
                                        <li key={t} className="flex items-center gap-2 text-xs text-brand-cream/70">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-brand-orange" /> {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* SIMILAR */}
                <section className="py-20 lg:py-24" data-testid="similar-cars-section">
                    <div className="flex items-end justify-between gap-6">
                        <h2 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl" data-testid="similar-cars-heading">
                            You might also like
                        </h2>
                        <Link to="/cars" className="hidden font-mono text-xs font-semibold uppercase tracking-widest text-brand-green hover:underline sm:block" data-testid="similar-cars-view-all">
                            View all →
                        </Link>
                    </div>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {similarAny.map((c, i) => (
                            <CarCard key={c.slug} car={c} index={i} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
