import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { EMAIL, NAV_LINKS, PHONE_DISPLAY, waLink, BOOK_MESSAGE } from "@/lib/constants";

export const Footer = () => (
    <footer className="bg-brand-green-deep text-brand-cream" data-testid="site-footer">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-12 md:grid-cols-12">
                <div className="md:col-span-5">
                    <Logo dark />
                    <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-cream/60">
                        Drive Indore like it's yours — premium self-drive cars in Indore, booked entirely on
                        WhatsApp.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <a
                            href="#"
                            aria-label="Instagram"
                            data-testid="footer-instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-cream/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
                        >
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            data-testid="footer-facebook"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-cream/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
                        >
                            <Facebook className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-orange">
                        Quick Links
                    </h4>
                    <ul className="mt-5 space-y-3">
                        {NAV_LINKS.map((l) => (
                            <li key={l.to}>
                                <Link
                                    to={l.to}
                                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                                    className="text-sm text-brand-cream/70 transition-colors hover:text-brand-cream"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-orange">
                        Talk to us
                    </h4>
                    <ul className="mt-5 space-y-3 text-sm text-brand-cream/70">
                        <li>
                            <a
                                href={waLink(BOOK_MESSAGE)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 transition-colors hover:text-brand-cream"
                                data-testid="footer-whatsapp-link"
                            >
                                <MessageCircle className="h-4 w-4 text-brand-orange" />
                                WhatsApp · {PHONE_DISPLAY}
                            </a>
                        </li>
                        <li>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="flex items-center gap-3 transition-colors hover:text-brand-cream"
                                data-testid="footer-email-link"
                            >
                                <Mail className="h-4 w-4 text-brand-orange" />
                                {EMAIL}
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                            Indore, Madhya Pradesh — pickup and return at your chosen point. Location shared on
                            WhatsApp.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
                <p className="text-xs text-brand-cream/40">
                    © {new Date().getFullYear()} Bhumiputram. Made in Indore.
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-cream/40">
                    Drive Indore Like It's Yours.
                </p>
            </div>
        </div>
    </footer>
);
