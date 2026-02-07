import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Summer Camps India - Find the Best Day & Residential Camps',
  description: 'Discover verified summer camps across India. From sports to STEM, arts to adventure - find camps that inspire and educate your child.',
  keywords: 'summer camps india, day camps, residential camps, kids activities, summer programs',
  openGraph: {
    title: 'Summer Camps India - Find the Best Day & Residential Camps',
    description: 'Discover verified summer camps across India',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}