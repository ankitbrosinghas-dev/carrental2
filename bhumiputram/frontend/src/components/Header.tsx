import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, waLink, BOOK_MESSAGE, PHONE_DISPLAY } from "@/lib/constants";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setOpen(false), [location.pathname]);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
                    scrolled
                        ? "bg-brand-cream/85 backdrop-blur-xl border-b border-brand-line shadow-sm"
                        : "bg-transparent border-b border-transparent"
                }`}
                data-testid="site-header"
            >
                <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link to="/" aria-label="Bhumiputram home" data-testid="header-logo-link">
                        <Logo />
                    </Link>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {NAV_LINKS.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                data-testid={`nav-link-${l.label.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `font-display text-sm font-bold tracking-tight transition-colors ${
                                        isActive ? "text-brand-orange" : "text-brand-ink/70 hover:text-brand-ink"
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
                            className="hidden items-center gap-2 font-mono text-xs font-semibold text-brand-ink/60 hover:text-brand-green xl:flex"
                            data-testid="header-phone-link"
                        >
                            <Phone className="h-3.5 w-3.5" />
                            {PHONE_DISPLAY}
                        </a>
                        <a
                            href={waLink(BOOK_MESSAGE)}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="header-book-whatsapp"
                            className="hidden rounded-full bg-brand-orange px-6 py-2.5 font-display text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-brand-orange-hover hover:shadow-orange-500/30 sm:block"
                        >
                            Book on WhatsApp
                        </a>
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-line bg-white/70 text-brand-ink lg:hidden"
                            aria-label="Toggle menu"
                            data-testid="mobile-menu-button"
                        >
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-30 flex flex-col justify-center bg-brand-green-deep px-8 lg:hidden"
                        data-testid="mobile-menu"
                    >
                        <nav className="flex flex-col gap-2">
                            {NAV_LINKS.map((l, i) => (
                                <motion.div
                                    key={l.to}
                                    initial={{ opacity: 0, x: -24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.08 * i + 0.1 }}
                                >
                                    <NavLink
                                        to={l.to}
                                        data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                                        className={({ isActive }) =>
                                            `font-display text-4xl font-extrabold tracking-tight ${
                                                isActive ? "text-brand-orange" : "text-brand-cream"
                                            }`
                                        }
                                    >
                                        {l.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            href={waLink(BOOK_MESSAGE)}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="mobile-book-whatsapp"
                            className="mt-12 inline-flex w-fit items-center rounded-full bg-brand-orange px-8 py-4 font-display font-bold text-white"
                        >
                            Book on WhatsApp
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
