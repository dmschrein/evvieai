import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import {IBMPlex} from '@/app/ui/fonts'

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/home/Footer"

export const metadata: Metadata = {
  title: "Evvie.ai",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
       <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
