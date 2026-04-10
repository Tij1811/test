import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Curaçao Travel Planner',
  description: 'A modern, elderly-friendly travel app focused on Curaçao.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
