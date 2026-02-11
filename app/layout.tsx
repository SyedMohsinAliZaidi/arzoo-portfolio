'use client';

import { useEffect } from 'react';
import './globals.css';
import { initScrollReveal } from './utils/scrollReveal';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
