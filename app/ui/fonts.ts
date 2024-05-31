import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { IBM_Plex_Sans } from "next/font/google";

export const inter = Inter({ subsets: ['latin']})

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});
