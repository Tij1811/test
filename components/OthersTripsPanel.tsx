import { curatedTrips } from '@/data/trips';

export function OthersTripsPanel() {
  return (
    <section className="panel min-h-[70vh]">
      <h2 className="text-3xl font-bold text-slate-900">Curated Trips</h2>
      <p className="mt-2 text-lg text-slate-700">
        Borrow ideas from popular itineraries designed for comfort and fun.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {curatedTrips.map((trip) => (
          <article key={trip.id} className="rounded-xl border border-slate-200 p-4 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">{trip.title}</h3>
            <p className="mt-2 text-base text-slate-700">{trip.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-base text-slate-800">
              {trip.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
