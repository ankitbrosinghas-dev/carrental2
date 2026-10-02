import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { Eyebrow, FadeIn } from "@/components/Reveal";
import { BOOK_MESSAGE, EMAIL, PHONE_DISPLAY, waLink } from "@/lib/constants";

export default function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const sending = false;
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const contactMessage = `Hi Bhumiputram! My name is ${name}. My phone number is ${phone}. ${message}`;
        window.open(waLink(contactMessage), "_blank", "noopener,noreferrer");
        toast.success("Opening WhatsApp to send your message.");
    };

    const channels = [
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: PHONE_DISPLAY,
            sub: "Fastest — replies in minutes, 24/7",
            href: waLink(BOOK_MESSAGE),
            testId: "contact-channel-whatsapp",
            external: true,
        },
        {
            icon: Phone,
            label: "Phone",
            value: PHONE_DISPLAY,
            sub: "Call if you prefer talking",
            href: `tel:${PHONE_DISPLAY.replace(/\s/g, "")}`,
            testId: "contact-channel-phone",
            external: true,
        },
        {
            icon: Mail,
            label: "Email",
            value: EMAIL,
            sub: "For bills, queries & feedback",
            href: `mailto:${EMAIL}`,
            testId: "contact-channel-email",
            external: true,
        },
        {
            icon: MapPin,
            label: "Service area",
            value: "Indore, Madhya Pradesh",
            sub: "Location shared on WhatsApp — pickup and return at your chosen point",
            href: waLink("Hi Bhumiputram! Please share your pickup location in Indore."),
            testId: "contact-channel-location",
            external: true,
        },
    ];

    return (
        <main className="pt-28 lg:pt-36" data-testid="contact-page">
            <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                <FadeIn>
                    <Eyebrow>Contact</Eyebrow>
                </FadeIn>
                <FadeIn delay={0.08}>
                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl" data-testid="contact-heading">
                        One message away from the keys
                    </h1>
                </FadeIn>
                <FadeIn delay={0.16}>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        WhatsApp is fastest — availability, documents and pickup, all sorted in one chat.
                    </p>
                </FadeIn>

                <div className="mt-14 grid gap-12 lg:grid-cols-12">
                    <div className="space-y-4 lg:col-span-6">
                        {channels.map((c, i) => (
                            <FadeIn key={c.label} delay={i * 0.06}>
                                <a
                                    href={c.href}
                                    target={c.external ? "_blank" : undefined}
                                    rel={c.external ? "noopener noreferrer" : undefined}
                                    data-testid={c.testId}
                                    className="group flex items-center gap-5 rounded-3xl border border-brand-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-lg"
                                >
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green transition-colors group-hover:bg-brand-orange group-hover:text-white">
                                        <c.icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</p>
                                        <p className="font-display text-base font-bold text-brand-ink break-all">{c.value}</p>
                                        <p className="mt-0.5 text-xs text-muted-foreground">{c.sub}</p>
                                    </div>
                                </a>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.15} className="lg:col-span-6">
                        <form
                            onSubmit={onSubmit}
                            className="rounded-3xl border border-brand-line bg-white p-8 shadow-sm"
                            data-testid="contact-form"
                        >
                            <h2 className="font-display text-xl font-bold text-brand-ink">Prefer we call you?</h2>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Drop your details — we'll reach out. Booking is still easiest on WhatsApp.
                            </p>
                            <div className="mt-7 space-y-5">
                                <div>
                                    <label htmlFor="contact-name" className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                                        Your name
                                    </label>
                                    <input
                                        id="contact-name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        minLength={2}
                                        placeholder="Rahul from Vijay Nagar"
                                        data-testid="contact-name-input"
                                        className="mt-2 w-full rounded-xl border border-brand-line bg-brand-cream/50 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange focus:bg-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-phone" className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                                        Phone / WhatsApp number
                                    </label>
                                    <input
                                        id="contact-phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        minLength={6}
                                        placeholder="+91 …"
                                        data-testid="contact-phone-input"
                                        className="mt-2 w-full rounded-xl border border-brand-line bg-brand-cream/50 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange focus:bg-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        minLength={2}
                                        rows={4}
                                        placeholder="I want the Ertiga this weekend for a Ujjain trip…"
                                        data-testid="contact-message-input"
                                        className="mt-2 w-full resize-none rounded-xl border border-brand-line bg-brand-cream/50 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange focus:bg-white"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    data-testid="contact-submit-button"
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange py-4 font-display font-bold text-white transition-colors hover:bg-brand-orange-hover disabled:opacity-60"
                                >
                                    {sending ? "Sending…" : "Send message"}
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </FadeIn>
                </div>
            </div>
        </main>
    );
}
