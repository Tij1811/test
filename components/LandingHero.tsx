'use client';

import { useEffect, useState } from 'react';

type Props = {
  onSelectFlow: (flow: 'my-trip' | 'others-trips') => void;
};

export function LandingHero({ onSelectFlow }: Props) {
  const [showButtons, setShowButtons] = useState(false);

  // Delay action buttons until the heading animation has completed.
  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(2,6,23,0.45), rgba(2,6,23,0.2)), url('https://images.unsplash.com/photo-1547146906-fcfafc83388e?auto=format&fit=crop&w=1800&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-slate-900/15" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col p-6 md:p-10">
        <h1 className="max-w-xl pt-8 text-4xl font-bold leading-tight text-white opacity-0 drop-shadow md:pt-12 md:text-6xl animate-fade-in-up">
          What are we feeling like today?
        </h1>

        {showButtons && (
          <div className="absolute right-6 top-8 flex gap-3 opacity-0 md:right-10 md:top-10 animate-fade-in">
            <button
              onClick={() => onSelectFlow('my-trip')}
              className="rounded-xl bg-curacao-blue px-5 py-3 text-lg font-semibold text-white shadow transition hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
              My Trip
            </button>
            <button
              onClick={() => onSelectFlow('others-trips')}
              className="rounded-xl bg-white px-5 py-3 text-lg font-semibold text-slate-900 shadow transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              Others Trips
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
