import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CarCard } from "@/components/CarCard";
import { Eyebrow, FadeIn } from "@/components/Reveal";
import { FALLBACK_CARS } from "@/lib/constants";

export default function Fleet() {
    const cars = FALLBACK_CARS;
    const [category, setCategory] = useState("All");
    const [transmission, setTransmission] = useState("Any");

    const categories = useMemo(
        () => ["All", ...Array.from(new Set(cars.map((c) => c.category)))],
        [cars]
    );
    const transmissions = useMemo(
        () => ["Any", ...Array.from(new Set(cars.map((c) => c.transmission)))],
        [cars]
    );

    const filtered = cars.filter(
        (c) =>
            (category === "All" || c.category === category) &&
            (transmission === "Any" || c.transmission === transmission)
    );

    const chip = (active: boolean) =>
        `rounded-full px-5 py-2.5 font-display text-sm font-bold transition-all ${
            active
                ? "bg-brand-green text-white shadow-lg shadow-brand-green/25"
                : "border border-brand-line bg-white text-brand-ink/60 hover:border-brand-green hover:text-brand-green"
        }`;

    return (
        <main className="pt-28 lg:pt-36" data-testid="fleet-page">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <Eyebrow>The Fleet</Eyebrow>
                </FadeIn>
                <FadeIn delay={0.08}>
                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl" data-testid="fleet-heading">
                        Every car. Ready to drive.
                    </h1>
                </FadeIn>
                <FadeIn delay={0.16}>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Tap a car for photos, full specs and rates — or book straight from here on WhatsApp.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <div className="flex flex-wrap gap-2" data-testid="fleet-category-filters">
                        {categories.map((c) => (
                            <button
                                key={c}
                                onClick={() => setCategory(c)}
                                className={chip(category === c)}
                                data-testid={`fleet-filter-${c.toLowerCase()}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2" data-testid="fleet-transmission-filters">
                        {transmissions.map((t) => (
                            <button
                                key={t}
                                onClick={() => setTransmission(t)}
                                className={chip(transmission === t)}
                                data-testid={`fleet-transmission-${t.toLowerCase()}`}
                            >
                                {t === "Any" ? "Any gearbox" : t}
                            </button>
                        ))}
                    </div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground" data-testid="fleet-count">
                        {filtered.length} {filtered.length === 1 ? "car" : "cars"}
                    </p>
                </FadeIn>
            </div>

            <div className="mx-auto mt-10 max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                {filtered.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-brand-line p-16 text-center" data-testid="fleet-empty-state">
                        <p className="font-display text-lg font-bold text-brand-ink">No cars match that combination.</p>
                        <p className="mt-2 text-sm text-muted-foreground">Try another filter — or message us, we add cars often.</p>
                    </div>
                ) : (
                    <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((car, i) => (
                                <CarCard key={car.slug} car={car} index={i} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </main>
    );
}
