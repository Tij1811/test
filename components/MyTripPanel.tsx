'use client';

import { useMemo, useState } from 'react';
import { searchCatalog } from '@/data/trips';

const chips = ['Jet ski rentals', 'Hotels', 'Restaurants', 'Beaches', 'Attractions'];

export function MyTripPanel() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return searchCatalog;
    }

    return searchCatalog.filter((item) => {
      return (
        item.name.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized) ||
        item.area.toLowerCase().includes(normalized)
      );
    });
  }, [query]);

  return (
    <section className="panel flex h-full min-h-[70vh] flex-col gap-5">
      <h2 className="text-3xl font-bold text-slate-900">Plan My Trip</h2>
      <label className="text-lg font-medium text-slate-700" htmlFor="trip-search">
        Search Curaçao activities
      </label>
      <input
        id="trip-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="What are you looking for?"
        className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-lg shadow-sm focus:border-curacao-blue focus:outline-none"
      />

      <div className="flex flex-wrap gap-3">
        {chips.map((chip) => (
          <button
            key={chip}
            onClick={() => setQuery(chip)}
            className="rounded-full border-2 border-cyan-700 bg-cyan-50 px-4 py-2 text-base font-semibold text-cyan-900 hover:bg-cyan-100"
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="max-h-[420px] space-y-3 overflow-y-auto pr-1">
          {filtered.map((result) => (
            <article key={result.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{result.name}</h3>
                  <p className="text-base text-slate-700">{result.description}</p>
                </div>
                <span className="rounded-md bg-amber-100 px-2 py-1 text-base font-semibold text-amber-900">
                  ⭐ {result.rating}
                </span>
              </div>
              <p className="mt-2 text-base font-medium text-slate-600">
                {result.category} • {result.area}
              </p>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-lg text-slate-700">
              No matches found. Try Hotels, Beaches, or Attractions.
            </p>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-cyan-100 to-sky-200 p-4">
          <h3 className="text-xl font-bold text-slate-900">Map Snapshot</h3>
          <p className="mt-2 text-base text-slate-700">
            Optional map integration area for markers around Curaçao.
          </p>
          <div className="mt-4 grid gap-2">
            {filtered.slice(0, 5).map((result) => (
              <div key={result.id} className="rounded-md bg-white/75 p-2 text-sm font-semibold text-slate-800">
                📍 {result.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
