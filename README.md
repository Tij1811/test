# Curaçao Travel App (Next.js + Tailwind)

A modern, responsive travel planner focused on Curaçao with:
- Animated landing screen
- "My Trip" search flow
- "Others Trips" curated flow
- Floating chatbot assistant

## Tech Stack
- Next.js (React)
- Tailwind CSS
- TypeScript

## File Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css
components/
  LandingHero.tsx
  MyTripPanel.tsx
  OthersTripsPanel.tsx
  ChatbotAssistant.tsx
data/
  trips.ts
```

## Run locally

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open http://localhost:3000

## Notes
- The landing page uses a map-style aerial image background.
- The map box in the search flow is a placeholder area where you can plug in Google Maps or another map provider.
- UI choices emphasize readability with larger text, contrast, and straightforward navigation.
