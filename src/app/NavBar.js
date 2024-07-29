"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-black p-4 flex items-center justify-between h-20">
      {" "}
      {/* Adjust height as needed */}
      <Image src="/logo.jpeg" alt="Logo" width={50} height={50} />
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className={`text-white hover:font-semibold ${
              pathname === "/" ? "border-b-2 border-white" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`text-white hover:font-semibold ${
              pathname === "/contact" ? "border-b-2 border-white" : ""
            }`}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`text-white hover:font-semibold ${
              pathname === "/services" ? "border-b-2 border-white" : ""
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/clients"
            className={`text-white hover:font-semibold ${
              pathname === "/clients" ? "border-b-2 border-white" : ""
            }`}
          >
            Clients
          </Link>
        </li>
      </ul>
    </nav>
  );
}
