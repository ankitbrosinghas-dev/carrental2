import { Component, ReactNode } from "react";

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: unknown) {
        console.error("Bhumiputram boundary caught:", error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen flex-col items-center justify-center bg-brand-cream px-6 text-center">
                    <h1 className="font-display text-3xl font-extrabold text-brand-ink">
                        Something hit a speed bump.
                    </h1>
                    <p className="mt-3 max-w-md text-muted-foreground">
                        Reload the page — if it still misbehaves, ping us on WhatsApp and we'll sort it out.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 rounded-full bg-brand-orange px-8 py-3 font-display font-bold text-white transition-colors hover:bg-brand-orange-hover"
                        data-testid="error-reload-button"
                    >
                        Reload
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}
