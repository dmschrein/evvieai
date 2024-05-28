"use client"

import Navbar from '@/components/landingpage/NavBar';
import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import { useUser } from '@clerk/clerk-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useUser();
  return (
    <main className="root">
      
      
      {isSignedIn && 
      <Sidebar />}
      <MobileNav />
      
      <div className="root-container">
      
      
        <div className="wrapper">
          {children}
        </div>
      </div>
      <Toaster />
    </main>
  )
}

export default Layout