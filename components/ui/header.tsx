"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import EvvieLogo from "@/app/ui/evvie-logo";
import MobileMenu from "./mobile-menu";
import { NAV_LINKS } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./button";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // Detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 md:bg-white ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 -ml-4 md:-ml-20">
            <EvvieLogo />
          </div>

          {/* Nav Links List */}
          <nav className="hidden lg:flex grow items-center justify-center">
            <ul className="flex gap-12">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="regular-16 text-gray-900 hover:text-gray-600 transition-all duration-150 ease-in-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center ml-auto">
            <SignedIn>
              <UserButton afterSignOutUrl="/" showName />
            </SignedIn>
            <SignedOut>
              <ul className="flex items-center space-x-4">
                <li>
                  <Button asChild className="button bg-purple-gradient bg-cover">
                    <Link href="/sign-in">Login</Link>
                  </Button>
                </li>
                <li>
                  <Button asChild className="btn-sm text-white bg-gray-900 hover:bg-gray-800 ml-3 flex items-center px-4 py-2 rounded">
                    <Link href="/sign-up">
                      <span>Create Account</span>
                      <svg
                        className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </Link>
                  </Button>
                </li>
              </ul>
            </SignedOut>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
