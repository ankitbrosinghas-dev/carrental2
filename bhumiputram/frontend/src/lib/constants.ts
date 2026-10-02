export const WHATSAPP_NUMBER = "917879322363";
export const PHONE_DISPLAY = "+91 78793 22363";
export const EMAIL = "ritikyadav1792000@gmail.com";

export const waLink = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const BOOK_MESSAGE =
    "Hi Bhumiputram! I want to book a car. Please share availability.";

export const bookCarMessage = (carName: string) =>
    `Hi Bhumiputram! I want to book the ${carName}. Please share availability.`;

export const IMG =
    "https://static.prod-images.emergentagent.com/jobs/dd7eeb72-eb23-4472-b72a-1f785d58f314/images";

export const HERO_IMAGE = `${IMG}/62b6e79447899c873ad9faea6b75af98ceade7c260c35fc7bd2a1716a18b3dfb.jpeg`;
export const INTERIOR_IMAGE = `${IMG}/1e9cdc56e48a4b10c6fd7cfba6de1f57b385a53e43a02fe7a1d0c41afc815e24.jpeg`;
export const VEHICLE_IMAGE = (file: string) => `/vehicles/${file}`;

export interface Car {
    slug: string;
    name: string;
    category: string;
    seats: number;
    transmission: string;
    fuel: string;
    tag: string;
    rate_12h: number;
    rate_24h: number;
    image: string;
    gallery: string[];
}

export const FALLBACK_CARS: Car[] = [
    { slug: "maruti-suzuki-baleno", name: "Maruti Suzuki Baleno", category: "Sedan", seats: 5, transmission: "Manual", fuel: "CNG + Petrol", tag: "Most Popular", rate_12h: 1099, rate_24h: 1699, image: `${IMG}/7f38d19536312a711a4ae87367221a8616767975a13b1c7fe60bdbb8136afbca.jpeg`, gallery: [] },
    { slug: "hyundai-aura", name: "Hyundai Aura", category: "Sedan", seats: 5, transmission: "Manual", fuel: "CNG + Petrol", tag: "Value Sedan", rate_12h: 1099, rate_24h: 1699, image: VEHICLE_IMAGE("hyundai-aura.png"), gallery: [] },
    { slug: "maruti-suzuki-dzire", name: "Maruti Suzuki Dzire", category: "Sedan", seats: 5, transmission: "Manual", fuel: "CNG + Petrol", tag: "CNG Saver", rate_12h: 1299, rate_24h: 1799, image: `${IMG}/d7bdd76fee46df712fb51af688a04601ad34db6b6aea3a1cde7cde4299aeb2f3.jpeg`, gallery: [] },
    { slug: "maruti-suzuki-fronx", name: "Maruti Suzuki Fronx", category: "SUV", seats: 5, transmission: "Manual", fuel: "CNG + Petrol", tag: "Crossover Style", rate_12h: 1299, rate_24h: 1799, image: `${IMG}/bf63776da37f99c6c1f4b68d27b50d864e90256557f4160fab210d8a386d12ac.jpeg`, gallery: [] },
    { slug: "hyundai-verna", name: "Hyundai Verna", category: "Sedan", seats: 5, transmission: "Manual", fuel: "CNG + Petrol", tag: "Executive Comfort", rate_12h: 1499, rate_24h: 1999, image: `${IMG}/bf825f93fe5f463c8520e56e66154ebae8393ce670391d9501bc2382a599284d.jpeg`, gallery: [] },
    { slug: "kia-sonet", name: "Kia Sonet", category: "SUV", seats: 5, transmission: "Manual", fuel: "CNG + Petrol", tag: "Sunroof Special", rate_12h: 1499, rate_24h: 1999, image: VEHICLE_IMAGE("kia-sonet.png"), gallery: [] },
    { slug: "tata-nexon", name: "Tata Nexon", category: "SUV", seats: 5, transmission: "Manual", fuel: "Diesel", tag: "Urban SUV", rate_12h: 1599, rate_24h: 2299, image: VEHICLE_IMAGE("tata-nexon.png"), gallery: [] },
    { slug: "hyundai-creta", name: "Hyundai Creta", category: "SUV", seats: 5, transmission: "Manual", fuel: "CNG + Petrol", tag: "Popular SUV", rate_12h: 1699, rate_24h: 2599, image: VEHICLE_IMAGE("hyundai-creta.png"), gallery: [] },
    { slug: "maruti-suzuki-ertiga", name: "Maruti Suzuki Ertiga", category: "MUV", seats: 7, transmission: "Manual", fuel: "CNG + Petrol", tag: "Family 7-Seater", rate_12h: 1699, rate_24h: 2199, image: `${IMG}/caceadbca7749fa47a0e1bd56bd932399f653d8d7d00c62fba07ab24e23fb086.jpeg`, gallery: [] },
    { slug: "maruti-suzuki-xl6", name: "Maruti Suzuki XL6", category: "MUV", seats: 6, transmission: "Manual", fuel: "CNG + Petrol", tag: "Premium Family", rate_12h: 1799, rate_24h: 2499, image: VEHICLE_IMAGE("maruti-suzuki-xl6.png"), gallery: [] },
    { slug: "mahindra-thar", name: "Mahindra Thar", category: "SUV", seats: 4, transmission: "Manual", fuel: "Petrol", tag: "Adventure Ready", rate_12h: 1999, rate_24h: 2999, image: VEHICLE_IMAGE("mahindra-thar.png"), gallery: [] },
    { slug: "mahindra-scorpio-s11", name: "Mahindra Scorpio S11", category: "SUV", seats: 7, transmission: "Manual", fuel: "Diesel", tag: "Premium SUV", rate_12h: 2099, rate_24h: 3299, image: VEHICLE_IMAGE("mahindra-scorpio-s11.png"), gallery: [] },
    { slug: "mahindra-scorpio-n", name: "Mahindra Scorpio N", category: "SUV", seats: 7, transmission: "Manual", fuel: "Diesel", tag: "Road Presence", rate_12h: 2499, rate_24h: 3499, image: VEHICLE_IMAGE("mahindra-scorpio-n.png"), gallery: [] },
    { slug: "mahindra-xuv700", name: "Mahindra XUV700", category: "SUV", seats: 7, transmission: "Manual", fuel: "Diesel", tag: "Luxury SUV", rate_12h: 2599, rate_24h: 3599, image: VEHICLE_IMAGE("xuv 700.jpeg"), gallery: [] },
    { slug: "toyota-fortuner", name: "Toyota Fortuner", category: "SUV", seats: 7, transmission: "Manual", fuel: "Diesel", tag: "Luxury SUV", rate_12h: 5999, rate_24h: 7999, image: VEHICLE_IMAGE("fortuner.jpeg"), gallery: [] },
    { slug: "toyota-fortuner-legender", name: "Toyota Fortuner Legender", category: "SUV", seats: 7, transmission: "Manual", fuel: "Diesel", tag: "Luxury SUV", rate_12h: 5999, rate_24h: 7999, image: VEHICLE_IMAGE("legender.jpeg"), gallery: [] },
];

export const DESTINATIONS = [
    "Mandu",
    "Ujjain",
    "Omkareshwar",
    "Mhow",
    "Maheshwar",
    "Indore Airport",
    "Pithampur",
    "Weekend Ready",
];

export const WHY_US = [
    {
        icon: "MessageCircle",
        title: "24/7 WhatsApp Support",
        desc: "A real human on WhatsApp, day or night — bookings, routes, breakdowns, anything.",
    },
    {
        icon: "MapPin",
        title: "Same-Spot Pickup & Return",
        desc: "Pick up your car at your chosen Indore point and drop it back at the same spot when you're done.",
    },
];

export const STEPS = [
    {
        num: "01",
        title: "Pick your car",
        desc: "Browse the fleet, compare rates, choose the one that fits your trip.",
    },
    {
        num: "02",
        title: "Chat on WhatsApp",
        desc: "Tap 'Book on WhatsApp' to open pre-filled chat.",
    },
    {
        num: "03",
        title: "Drive away",
        desc: "No queues, no counters. Keys in hand, and you drop the car back where you picked it up.",
    },
];

export const TESTIMONIALS = [
    {
        name: "Rohit Patidar",
        trip: "Weekend trip · Mandu",
        stars: 5,
        text: "Booked the Fronx for a Mandu trip. Pickup took five minutes and the WhatsApp replies came instantly. Easiest rental I've done in Indore.",
    },
    {
        name: "Ankit Sharma",
        trip: "Late-night booking · Dzire",
        stars: 5,
        text: "Booked the Dzire late in the evening for an early start. Car was spotless and pickup was quick — everything sorted on WhatsApp. Very smooth.",
    },
    {
        name: "Priya Verma",
        trip: "Family function · Ujjain",
        stars: 5,
        text: "Took the Ertiga for a family function in Ujjain. Clean car, chilled AC, seven comfortable seats, and returning it was just as easy. Highly recommended.",
    },
    {
        name: "Rahul Johri",
        trip: "City drive · Sonet",
        stars: 4,
        text: "They genuinely rent to 18+ drivers with a licence — no drama, no extra charges. The Sonet's sunroof made the city drive feel special.",
    },
    {
        name: "Neha Sisodiya",
        trip: "Monthly commute",
        stars: 5,
        text: "Messaged at 9 am, driving by noon. Fair prices, clean car, no hidden charges. Bhumiputram is my go-to rental in Indore now.",
    },
];

export const FAQS = [
    {
        q: "What is the minimum age to rent a car?",
        a: "You need to be at least 18 years old with a valid driving licence. Young drivers are welcome — no age surcharge.",
    },
    {
        q: "What documents do I need?",
        a: "A driving licence and one government ID (Aadhaar, PAN or passport). We verify everything over WhatsApp before your trip — no printing, no photocopies.",
    },
    {
        q: "What is the fuel policy?",
        a: "Fuel terms are simple and shared clearly on WhatsApp before every trip. Chat with us for the exact policy for your booking.",
    },
    {
        q: "Where is pickup and drop?",
        a: "You pick up the car from the agreed Indore point and return it to the same spot when you're done. The exact location is shared on WhatsApp.",
    },
    {
        q: "How do refunds and cancellations work?",
        a: "Plans change — we get it. Cancellations and refunds are handled personally on WhatsApp, quickly and fairly. Chat with us for details.",
    },
    {
        q: "Do I need to pay online or install an app?",
        a: "No app, no account, no online payment. Everything — booking, documents, handover — happens over WhatsApp at +91 78793 22363.",
    },
];

export const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "Fleet", to: "/cars" },
    { label: "Pricing", to: "/pricing" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
];
