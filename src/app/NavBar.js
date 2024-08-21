"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full text-xs md:text-base lg:text-base bg-black p-4 flex items-center justify-between h-20">
      {" "}
      {/* Adjust height as needed */}
      <Image src="/logo.jpeg" alt="Logo" width={50} height={50} />
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className={`text-white hover:border-b hover:border-gray-300 ${
              pathname === "/" ? "border-b border-white" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className={`text-white hover:border-b hover:border-gray-300 ${
              pathname === "/#about" ? "border-b border-white" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#contact"
            className={`text-white hover:border-b hover:border-gray-300 ${
              pathname === "/#contact" ? "border-b border-white" : ""
            }`}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/#services"
            className={`text-white hover:border-b hover:border-gray-300 ${
              pathname === "/#services" ? "border-b border-white" : ""
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/clients"
            className={`text-white hover:border-b hover:border-gray-300 ${
              pathname === "/clients" ? "border-b border-white" : ""
            }`}
          >
            Clients
          </Link>
        </li>
      </ul>
    </nav>
  );
}
