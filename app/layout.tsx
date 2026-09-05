import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Python, Agentic AI & Data Science Coaching in Kolkata | CodeKolkata.ai',
  description: 'Learn Python programming, Agentic AI, Machine Learning and Data Science with live mentors in Kolkata. Project-based coaching for school and college students. Book a free demo class.',
  keywords: ['Python coaching Kolkata', 'AI course for students Kolkata', 'Agentic AI course Kolkata', 'Machine Learning coaching Kolkata', 'Data Science classes Kolkata', 'coding classes for school students Kolkata', 'Python classes for college students Kolkata', 'artificial intelligence training Kolkata'],
  robots: { index: true, follow: true },
  openGraph: { title: 'CodeKolkata.ai — Build what comes next', description: 'Project-based Python, Agentic AI, ML and Data Science coaching for Kolkata students.', type: 'website', locale: 'en_IN' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
