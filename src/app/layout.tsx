import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boogie - Modern Publishing & Media Production",
  description: "Boogie is a modern publishing and media production company.",
  metadataBase: new URL('https://boog.ie'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800">
          <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/images/blog-optimized/boogielogoa.webp" 
                alt="Boogie Logo" 
                width={40} 
                height={40} 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold tracking-tighter">BOOGIE</span>
            </Link>
            <nav className="ml-auto flex gap-6">
              <Link href="/about" className="text-sm font-medium hover:underline">About</Link>
              <Link href="/artists" className="text-sm font-medium hover:underline">Artists</Link>
              <Link href="/work" className="text-sm font-medium hover:underline">Work</Link>
              <Link href="/blog" className="text-sm font-medium hover:underline">Blog</Link>
              <Link href="/contact" className="text-sm font-medium hover:underline">Contact</Link>
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="border-t py-6 md:py-8 lg:py-10 dark:border-gray-800">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image 
                  src="/images/blog-optimized/boogielogoa.webp" 
                  alt="Boogie Logo" 
                  width={32} 
                  height={32} 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold tracking-tighter">BOOGIE</span>
              </Link>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
                © {new Date().getFullYear()} Boogie Media. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="https://twitter.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                Twitter
              </Link>
              <Link href="https://instagram.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                Instagram
              </Link>
              <Link href="https://linkedin.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                LinkedIn
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
