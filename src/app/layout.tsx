import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { BottomNav } from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'All Things Baby – Your Nurturing Atelier',
  description:
    'Expert guidance, milestone tracking, and stage-specific care for your baby\'s first years.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'All Things Baby',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-atb-background text-atb-on-background font-body selection:bg-atb-primary selection:text-white">
            {children}
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

