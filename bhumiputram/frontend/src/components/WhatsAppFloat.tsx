import { motion } from "framer-motion";
import { waLink, BOOK_MESSAGE } from "@/lib/constants";

export const WhatsAppFloat = () => (
    <motion.a
        href={waLink(BOOK_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-5 right-5 z-50 group"
        data-testid="whatsapp-float-button"
        aria-label="Chat with Bhumiputram on WhatsApp"
    >
        <span className="absolute inset-0 animate-wa-pulse rounded-full" />
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1EB95A] shadow-xl shadow-black/20 transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.8-1.8-.9-.2-.1-.4-.1-.5.1-.2.3-.6.9-.8 1-.1.2-.3.2-.5.1a6.8 6.8 0 0 1-3.4-3c-.3-.4 0-.5.3-1l.4-.7c0-.2 0-.3-.1-.5l-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.5-.2z" />
            </svg>
        </span>
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-brand-ink px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-cream opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
            Book on WhatsApp
        </span>
    </motion.a>
);
