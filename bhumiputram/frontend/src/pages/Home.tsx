import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { CarCard } from "@/components/CarCard";
import { FadeIn, Eyebrow, SectionHeading, Stagger } from "@/components/Reveal";
import { FALLBACK_CARS, HERO_IMAGE, waLink, BOOK_MESSAGE } from "@/lib/constants";
import { lineMask, fadeUp, EASE } from "@/lib/motion";

const WHY_CARDS = [
    {
        icon: "chat",
        title: "24/7 WhatsApp Support",
        desc: "A real human on WhatsApp, day or night — bookings, routes, breakdowns, anything.",
    },
    {
        icon: "pin",
        title: "Same-Spot Pickup & Return",
        desc: "Pick up your car at your chosen Indore point and drop it back at the same spot when you're done.",
    },
];

const STEPS = [
    { num: "01", title: "Pick your car", desc: "Browse the fleet, compare rates, choose the one that fits your trip." },
    {
        num: "02",
        title: "Chat on WhatsApp",
        desc: "Tap “Book on WhatsApp” — a pre-filled message opens. Availability and documents sorted in minutes.",
    },
    { num: "03", title: "Drive away", desc: "No queues, no counters. Keys in hand, and you drop the car back where you picked it up." },
];

const REVIEWS = [
    { name: "Rohit Patidar", trip: "Weekend trip · Mandu", stars: 5, text: "Booked the Fronx for a Mandu trip. Pickup took five minutes and the WhatsApp replies came instantly. Easiest rental I've done in Indore." },
    { name: "Ankit Sharma", trip: "Late-night booking · Dzire", stars: 5, text: "Booked the Dzire late in the evening for an early start. Car was spotless and pickup was quick — everything sorted on WhatsApp. Very smooth." },
    { name: "Priya Verma", trip: "Family function · Ujjain", stars: 5, text: "Took the Ertiga for a family function in Ujjain. Clean car, chilled AC, seven comfortable seats, and returning it was just as easy. Highly recommended." },
    { name: "Rahul Johri", trip: "City drive · Sonet", stars: 4, text: "They genuinely rent to 18+ drivers with a licence — no drama, no extra charges. The Sonet's sunroof made the city drive feel special." },
    { name: "Neha Sisodiya", trip: "Monthly commute", stars: 5, text: "Messaged at 9 am, driving by noon. Fair prices, clean car, no hidden charges. Bhumiputram is my go-to rental in Indore now." },
];

const WHY_ICONS: Record<string, React.ReactNode> = {
    chat: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
    ),
    pin: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 4.99-5.54 10.19-9.4 13.34a1 1 0 0 1-1.2 0C5.54 20.19 2 14.99 2 10a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
};

export default function Home() {
    const cars = FALLBACK_CARS;
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const wmY = useTransform(scrollYProgress, [0, 1], [0, 60]);

    const preview = cars.slice(0, 3);

    return (
        <main data-testid="home-page">
            {/* HERO */}
            <section ref={heroRef} className="relative overflow-hidden" data-testid="hero-section">
                <motion.p
                    style={{ y: wmY }}
                    aria-hidden="true"
                    className="text-stroke-cream pointer-events-none absolute -bottom-6 left-0 select-none whitespace-nowrap font-display text-[24vw] font-extrabold leading-none tracking-tighter opacity-70"
                >
                    INDORE
                </motion.p>
                <div className="pointer-events-none absolute inset-0 grain-overlay opacity-[0.05]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-36 lg:pt-44">
                    <div className="lg:col-span-6">
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
                            <Eyebrow>Self Drive Rental · Indore, MP</Eyebrow>
                        </motion.div>

                        <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-brand-ink [word-spacing:0.18em] sm:text-6xl lg:text-7xl">
                            <span className="block overflow-hidden pb-1">
                                <motion.span className="block uppercase" variants={lineMask} initial="hidden" animate="show" transition={{ delay: 0.15 }}>
                                    Drive Indore
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden pb-1">
                                <motion.span className="block uppercase" variants={lineMask} initial="hidden" animate="show" transition={{ delay: 0.3 }}>
                                    Like It&rsquo;s
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden pb-2">
                                <motion.span className="text-stroke-orange block uppercase" variants={lineMask} initial="hidden" animate="show" transition={{ delay: 0.45 }}>
                                    Yours.
                                </motion.span>
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.7, ease: EASE }}
                            className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
                        >
                            Clean, insured self-drive cars from{" "}
                            <span className="font-semibold text-brand-ink">₹599 / 6 hrs</span> — everything
                            booked on one WhatsApp chat.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
                            className="mt-9 flex flex-wrap items-center gap-4"
                        >
                            <a
                                href={waLink(BOOK_MESSAGE)}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="hero-book-whatsapp"
                                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-orange px-8 py-4 font-display font-bold text-white shadow-xl shadow-orange-500/25 transition-all hover:bg-brand-orange-hover hover:shadow-orange-500/40"
                            >
                                Book on WhatsApp
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <Link
                                to="/cars"
                                data-testid="hero-explore-fleet"
                                className="inline-flex items-center gap-2 rounded-full border border-brand-ink/15 px-8 py-4 font-display font-bold text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green"
                            >
                                Explore the fleet
                            </Link>
                        </motion.div>

                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-ink/70"
                        >
                            {["18+ with licence"].map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                                    {t}
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    <motion.div
                        className="relative lg:col-span-6"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1, ease: EASE }}
                    >
                        <motion.div style={{ y: imgY }} className="relative">
                            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-green/20">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Self-drive car on an Indore highway at sunset"
                                    className="aspect-[4/3] w-full object-cover"
                                    data-testid="hero-image"
                                />
                            </div>
                            <motion.div
                                className="absolute -bottom-6 left-4 rounded-2xl border border-brand-line bg-white/95 p-4 shadow-xl backdrop-blur sm:left-8"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                data-testid="hero-rate-badge"
                            >
                                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-brand-green">
                                    From
                                </p>
                                <p className="font-display text-2xl font-extrabold text-brand-ink">
                                    ₹599 <span className="text-sm font-semibold text-muted-foreground">/ 6 hr</span>
                                </p>
                                <p className="text-[11px] text-muted-foreground">₹1,099 / 12 hr · ₹1,699 / 24 hr</p>
                            </motion.div>
                            <div className="absolute -right-3 -top-3 hidden h-24 w-24 rounded-full bg-brand-orange/10 sm:block" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Marquee />

            {/* FLEET PREVIEW */}
            <section className="py-20 lg:py-28" data-testid="home-fleet-preview">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <SectionHeading
                            eyebrow="The Fleet"
                            title="Cars ready for your next drive"
                            sub="Sedans for the city, SUVs for the ghats, a 7-seater for the whole family — every car serviced, sanitised and insured."
                            testId="fleet-preview-heading"
                        />
                        <FadeIn>
                            <Link
                                to="/cars"
                                data-testid="view-all-cars"
                                className="group inline-flex items-center gap-2 rounded-full border border-brand-ink/15 px-6 py-3 font-display text-sm font-bold text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green"
                            >
                                View all cars
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </FadeIn>
                    </div>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {preview.map((car, i) => (
                            <CarCard key={car.slug} car={car} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY US BENTO */}
            <section className="bg-brand-sand/60 py-20 lg:py-28" data-testid="why-us-section">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Why Bhumiputram"
                        title="Renting, minus the paperwork parade"
                        sub="Everything that makes other rentals painful — counters, call centres, paperwork — we simply removed."
                        testId="why-us-heading"
                    />
                    <Stagger className="mt-12 grid gap-6 md:grid-cols-6">
                        {WHY_CARDS.map((c, i) => (
                            <motion.div
                                key={c.title}
                                variants={fadeUp}
                                className={`rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                                    i === 0
                                        ? "bg-brand-green-dark text-brand-cream md:col-span-3"
                                        : "border border-brand-line bg-white md:col-span-3"
                                }`}
                                data-testid={`why-us-card-${i}`}
                            >
                                <span
                                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                                        i === 0 ? "bg-brand-orange text-white" : "bg-brand-green-light text-brand-green"
                                    }`}
                                >
                                    {WHY_ICONS[c.icon]}
                                </span>
                                <h3 className={`mt-6 font-display text-xl font-bold tracking-tight ${i === 0 ? "text-brand-cream" : "text-brand-ink"}`}>
                                    {c.title}
                                </h3>
                                {c.desc && (
                                    <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-brand-cream/70" : "text-muted-foreground"}`}>
                                        {c.desc}
                                    </p>
                                )}
                            </motion.div>
                        ))}

                        <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl md:col-span-6" data-testid="why-us-card-fleet">
                            <img src={HERO_IMAGE} alt="Bhumiputram insured fleet" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/90 via-brand-green-deep/30 to-transparent" />
                            <div className="relative flex h-full min-h-[280px] flex-col justify-end p-8 lg:p-12">
                                <h3 className="font-display text-2xl font-bold tracking-tight text-brand-cream">100% Insured Fleet</h3>
                                <p className="mt-2 max-w-lg text-sm leading-relaxed text-brand-cream/75">
                                    Every car carries full insurance and a serviced service history you can check on WhatsApp.
                                </p>
                            </div>
                        </motion.div>
                    </Stagger>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-brand-green-deep py-20 lg:py-28" data-testid="how-it-works-section">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        light
                        eyebrow="How it works"
                        title="Three steps. Zero counters."
                        sub="No app to install, no account, no card details. If you can send a WhatsApp message, you can book."
                        testId="how-it-works-heading"
                    />
                    <Stagger className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
                        <div className="absolute left-0 right-0 top-8 hidden border-t border-dashed border-white/15 md:block" />
                        {STEPS.map((s) => (
                            <motion.div key={s.num} variants={fadeUp} className="relative" data-testid={`step-${s.num}`}>
                                <p className="text-stroke-cream font-display text-7xl font-extrabold leading-none">{s.num}</p>
                                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-brand-cream">{s.title}</h3>
                                <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-cream/65">{s.desc}</p>
                            </motion.div>
                        ))}
                    </Stagger>
                    <FadeIn className="mt-16 text-center">
                        <a
                            href={waLink(BOOK_MESSAGE)}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="how-it-works-cta"
                            className="inline-flex items-center gap-2.5 rounded-full bg-brand-orange px-9 py-4 font-display font-bold text-white shadow-xl shadow-black/20 transition-colors hover:bg-brand-orange-hover"
                        >
                            Start on WhatsApp
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </FadeIn>
                </div>
            </section>

            {/* ABOUT */}
            <section className="py-20 lg:py-28" data-testid="about-section">
                <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
                    <div>
                        <SectionHeading
                            eyebrow="About Bhumiputram"
                            title="Born in Indore. Built for Indoris."
                            sub="Bhumiputram started with a simple irritation: renting a car in your own city shouldn't feel like an interview."
                            testId="about-heading"
                        />
                        <FadeIn delay={0.2}>
                            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                                So we built the opposite. Cars you can book at midnight, a human who actually
                                replies, honest rates with nothing hidden at handover — and you drop the car
                                back where you picked it up. Weekends were made for Mandu, Ujjain,
                                Omkareshwar, Mhow and Maheshwar. We just hand you the keys.
                            </p>
                        </FadeIn>
                        <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {[
                                { v: "₹599", l: "6-hr starting rate" },
                                { v: "100%", l: "insured fleet" },
                                { v: "18+", l: "age welcome" },
                                { v: "24/7", l: "WhatsApp support" },
                            ].map((s) => (
                                <motion.div key={s.l} variants={fadeUp} className="rounded-2xl border border-brand-line bg-white p-4 text-center" data-testid={`about-stat-${s.l.replace(/\s/g, "-")}`}>
                                    <p className="font-display text-2xl font-extrabold text-brand-green">{s.v}</p>
                                    <p className="mt-1 text-[11px] text-muted-foreground">{s.l}</p>
                                </motion.div>
                            ))}
                        </Stagger>
                    </div>
                    <FadeIn delay={0.15} className="relative">
                        <div className="overflow-hidden rounded-[2rem]">
                            <img src={HERO_IMAGE} alt="Bhumiputram car on an Indore highway" loading="lazy" className="aspect-[4/3] w-full object-cover" data-testid="about-image-main" />
                        </div>
                        <div className="absolute -bottom-10 -left-4 hidden w-56 overflow-hidden rounded-3xl border-8 border-brand-cream shadow-2xl sm:block lg:-left-10">
                            <img src={HERO_IMAGE} alt="Cabin detail" loading="lazy" className="aspect-square w-full object-cover" data-testid="about-image-secondary" />
                        </div>
                        <div className="absolute -right-3 top-8 rounded-full bg-brand-orange px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white shadow-lg" data-testid="about-badge">
                            Indore · MP
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="bg-brand-sand/60 py-20 lg:py-28" data-testid="testimonials-section">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Testimonials"
                        title="What Indoris say after the keys"
                        sub="Sample reviews for launch — real customer stories are on the way."
                        testId="testimonials-heading"
                    />
                </div>
                <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
                        {REVIEWS.map((r, i) => (
                            <FadeIn key={r.name} delay={i * 0.05} className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">
                                <div className="flex h-full flex-col rounded-3xl border border-brand-line bg-white p-7" data-testid={`testimonial-card-${i}`}>
                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }).map((_, s) => (
                                            <svg key={s} viewBox="0 0 24 24" className={`h-4 w-4 ${s < r.stars ? "fill-brand-orange text-brand-orange" : "fill-brand-line text-brand-line"}`} aria-hidden="true">
                                                <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="mt-5 flex-1 text-sm leading-relaxed text-brand-ink/80">“{r.text}”</p>
                                    <div className="mt-6 border-t border-brand-line pt-4">
                                        <p className="font-display text-sm font-bold text-brand-ink">{r.name}</p>
                                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{r.trip}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA BAND */}
            <section className="bg-brand-orange py-20 lg:py-24" data-testid="home-cta-section">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <FadeIn>
                        <h2 className="font-display text-4xl font-extrabold tracking-tight text-brand-green-deep sm:text-5xl lg:text-6xl">
                            Ready to roll?
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="mx-auto mt-5 max-w-xl text-base text-brand-green-deep/70 sm:text-lg">
                            One message, and your car is confirmed. Available 24/7 on WhatsApp.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <a
                            href={waLink(BOOK_MESSAGE)}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="home-cta-whatsapp"
                            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-brand-green-deep px-10 py-4 font-display font-bold text-brand-cream shadow-xl shadow-black/15 transition-transform hover:scale-[1.03]"
                        >
                            Book on WhatsApp
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
