'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { href: "/artists", label: "Artists" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <header className="bg-black text-white p-4 relative z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <div className="relative h-10 w-32">
              <Image
                src="/images/blog-new/boogieredw.png"
                alt="Boogie Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Hamburger Button */}
          <button 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden p-2 hover:bg-gray-800 rounded transition-colors duration-200 z-50 relative"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu - Outside header to avoid positioning issues */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40 pt-20">
          <nav className="container mx-auto">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block px-6 py-4 text-lg text-white hover:bg-gray-800 hover:text-gray-300 transition-all duration-200 border-b border-gray-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Close overlay when clicking outside menu items */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeMenu}
          />
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© 2025 Boogie. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Boogie - Music Production & Artist Management</title>
        <meta name="description" content="Professional music production and artist management services" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}