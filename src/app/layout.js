'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./globals.css"; // Ensure you have global styles if needed

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white h-screen flex flex-col">
        <nav className="w-full bg-black p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/logo.jpeg" alt="Logo" width={50} height={50} />
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className={`text-white hover:text-gray-400 ${pathname === "/" ? "border-b-2 border-white" : ""}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`text-white hover:text-gray-400 ${pathname === "/contact" ? "border-b-2 border-white" : ""}`}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className={`text-white hover:text-gray-400 ${pathname === "/services" ? "border-b-2 border-white" : ""}`}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className={`text-white hover:text-gray-400 ${pathname === "/clients" ? "border-b-2 border-white" : ""}`}>
                  Clients
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="flex-grow bg-black text-center flex justify-center items-center p-8">
          {children}
        </main>
      </body>
    </html>
  );
}