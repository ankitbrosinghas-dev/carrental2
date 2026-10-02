import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Settings2, ArrowUpRight } from "lucide-react";
import { Car, waLink, bookCarMessage } from "@/lib/constants";

const WhatsAppMini = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.8-1.8-.9-.2-.1-.4-.1-.5.1-.2.3-.6.9-.8 1-.1.2-.3.2-.5.1a6.8 6.8 0 0 1-3.4-3c-.3-.4 0-.5.3-1l.4-.7c0-.2 0-.3-.1-.5l-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.5-.2z" />
    </svg>
);

export const CarCard = ({ car, index = 0 }: { car: Car; index?: number }) => (
    <motion.article
        layout
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/40 hover:shadow-2xl hover:shadow-brand-green/10"
        data-testid={`car-card-${car.slug}`}
    >
        <Link to={`/cars/${car.slug}`} className="relative block overflow-hidden" data-testid={`car-card-link-${car.slug}`}>
            <div className="aspect-[3/2] overflow-hidden bg-brand-ink">
                <img
                    src={car.image}
                    alt={car.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-brand-cream/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-brand-green backdrop-blur">
                {car.tag}
            </span>
        </Link>

        <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold tracking-tight text-brand-ink">{car.name}</h3>
                <Link
                    to={`/cars/${car.slug}`}
                    aria-label={`View ${car.name} details`}
                    data-testid={`car-card-details-${car.slug}`}
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-line text-brand-ink/50 transition-all group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                >
                    <ArrowUpRight className="h-4 w-4" />
                </Link>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
                {car.category} · {car.transmission}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-brand-ink/70">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-sand px-2.5 py-1">
                    <Users className="h-3 w-3 text-brand-green" /> {car.seats} seats
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-sand px-2.5 py-1">
                    <Settings2 className="h-3 w-3 text-brand-green" /> {car.transmission}
                </span>
            </div>

            <div className="mt-5 flex items-end justify-between border-t border-brand-line pt-5">
                <div>
                    <p className="font-display text-2xl font-extrabold text-brand-ink">
                        ₹{car.rate_12h.toLocaleString("en-IN")}
                        <span className="text-sm font-semibold text-muted-foreground"> / 12 hr</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                        ₹{car.rate_24h.toLocaleString("en-IN")} / 24 hr
                    </p>
                </div>
                <a
                    href={waLink(bookCarMessage(car.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`car-card-book-whatsapp-${car.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2.5 font-display text-xs font-bold text-white transition-colors hover:bg-brand-orange-hover"
                >
                    <WhatsAppMini />
                    Book
                </a>
            </div>
        </div>
    </motion.article>
);
