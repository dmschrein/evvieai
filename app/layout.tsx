// layout.tsx

import './globals.css';
import './css/style.css';

import { Inter } from 'next/font/google';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer'; // Import the Footer component
import { ClerkProvider } from '@clerk/nextjs';
import { metadata } from '@/config/metadata'; // Import metadata

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#FB4570' } }}>
      <html lang="en">
        <body
          className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
        >
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer /> 
        </body>
      </html>
    </ClerkProvider>
  );
}
