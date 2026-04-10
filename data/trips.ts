export type SearchResult = {
  id: number;
  name: string;
  category: string;
  rating: number;
  description: string;
  area: string;
};

export type CuratedTrip = {
  id: number;
  title: string;
  description: string;
  highlights: string[];
};

export const searchCatalog: SearchResult[] = [
  {
    id: 1,
    name: 'Blue Bay Jet Ski Rentals',
    category: 'Jet ski rentals',
    rating: 4.7,
    description: 'Guided and self-drive jet ski sessions with calm-water options.',
    area: 'Blue Bay'
  },
  {
    id: 2,
    name: 'Avila Beach Hotel',
    category: 'Hotels',
    rating: 4.8,
    description: 'Seaside hotel with easy beach access and senior-friendly rooms.',
    area: 'Pietermaai'
  },
  {
    id: 3,
    name: 'Playa Kenepa Grandi',
    category: 'Beaches',
    rating: 4.9,
    description: 'A scenic turquoise-water beach with shaded viewpoints.',
    area: 'Westpunt'
  },
  {
    id: 4,
    name: 'Kome Restaurant',
    category: 'Restaurants',
    rating: 4.6,
    description: 'Creative Caribbean cuisine in a cozy, relaxed atmosphere.',
    area: 'Pietermaai'
  },
  {
    id: 5,
    name: 'Queen Emma Bridge',
    category: 'Attractions',
    rating: 4.7,
    description: 'Iconic floating bridge with colorful harbor views.',
    area: 'Willemstad'
  },
  {
    id: 6,
    name: 'Renaissance Wind Creek Curaçao Resort',
    category: 'Hotels',
    rating: 4.5,
    description: 'Central resort featuring oceanfront pools and easy city access.',
    area: 'Otrobanda'
  },
  {
    id: 7,
    name: 'Shete Boka National Park',
    category: 'Attractions',
    rating: 4.8,
    description: 'Dramatic coastal inlets with walking trails and sea spray views.',
    area: 'Banda Abou'
  }
];

export const curatedTrips: CuratedTrip[] = [
  {
    id: 1,
    title: 'Relaxed Coastal Day',
    description: 'A gentle day with short walks, ocean views, and local lunch.',
    highlights: ['Blue Bay Beach', 'Fort Nassau lunch stop', 'Sunset at Piscadera']
  },
  {
    id: 2,
    title: 'Colorful Willemstad Explorer',
    description: 'Discover iconic architecture, museums, and harbor strolls.',
    highlights: ['Handelskade waterfront', 'Kura Hulanda Museum', 'Queen Emma Bridge']
  },
  {
    id: 3,
    title: 'Adventure & Nature Mix',
    description: 'Best for travelers wanting activity with scenic island landmarks.',
    highlights: ['Jet ski at Blue Bay', 'Shete Boka stop', 'Dinner in Pietermaai']
  }
];
