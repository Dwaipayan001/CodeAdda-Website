import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://code-adda-ai.vercel.app'),
  title: 'Agentic AI Coaching in Kolkata | CodeAdda.ai',
  description:
    'Learn Agentic AI, Generative AI, Python, Machine Learning and Data Science online on Saturdays and Sundays with mentors who bring Big Four GenAI experience.',
  keywords: [
    'Agentic AI coaching Kolkata',
    'Agentic AI course Kolkata',
    'Generative AI course Kolkata',
    'Python coaching Kolkata',
    'AI course for students Kolkata',
    'Machine Learning coaching Kolkata',
    'Data Science classes Kolkata',
    'coding classes for school students Kolkata',
    'artificial intelligence training Kolkata',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Agentic AI Coaching in Kolkata | CodeAdda.ai',
    description:
      'Weekend-only, live online Agentic AI and Generative AI coaching led by mentors with hands-on Big Four GenAI experience.',
    url: '/',
    siteName: 'CodeAdda.ai',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
