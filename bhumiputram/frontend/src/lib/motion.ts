export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
};

export const lineMask = {
    hidden: { y: "110%" },
    show: {
        y: "0%",
        transition: { duration: 0.9, ease: EASE },
    },
};

export const viewportOnce = { once: true, amount: 0.15 } as const;
