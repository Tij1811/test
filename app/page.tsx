'use client';

import { useState } from 'react';
import { ChatbotAssistant } from '@/components/ChatbotAssistant';
import { LandingHero } from '@/components/LandingHero';
import { MyTripPanel } from '@/components/MyTripPanel';
import { OthersTripsPanel } from '@/components/OthersTripsPanel';

type Flow = 'landing' | 'my-trip' | 'others-trips';

export default function HomePage() {
  const [flow, setFlow] = useState<Flow>('landing');

  return (
    <main className="min-h-screen bg-slate-100">
      {flow === 'landing' ? <LandingHero onSelectFlow={(nextFlow) => setFlow(nextFlow)} /> : null}

      {flow !== 'landing' && (
        <div className="mx-auto max-w-7xl space-y-4 p-4 md:p-8">
          <button
            onClick={() => setFlow('landing')}
            className="rounded-xl bg-slate-900 px-4 py-2 text-lg font-semibold text-white hover:bg-slate-700"
          >
            ← Back
          </button>

          {flow === 'my-trip' ? <MyTripPanel /> : <OthersTripsPanel />}
        </div>
      )}

      <ChatbotAssistant />
    </main>
  );
}
