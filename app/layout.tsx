import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Никах Ильнура и Камиллы',
  description: 'Приглашение на никах Ильнура и Камиллы 05 июня 2026 года в Казани.',
  applicationName: 'Никах Ильнур и Камилла',
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f1e7d8'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
