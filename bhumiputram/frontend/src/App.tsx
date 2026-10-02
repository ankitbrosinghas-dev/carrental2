import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import Home from "@/pages/Home";
import Fleet from "@/pages/Fleet";
import CarDetail from "@/pages/CarDetail";
import Pricing from "@/pages/Pricing";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

let lenisInstance: Lenis | null = null;

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        if (lenisInstance) {
            lenisInstance.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);
    return null;
};

const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
        lenisInstance = lenis;
        let raf = 0;
        const loop = (time: number) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);
    return null;
};

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <SmoothScroll />
                <ScrollToTop />
                <div className="min-h-screen bg-brand-cream">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cars" element={<Fleet />} />
                        <Route path="/cars/:slug" element={<CarDetail />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                    <Footer />
                    <WhatsAppFloat />
                </div>
                <Toaster position="bottom-center" richColors />
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
