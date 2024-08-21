import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black p-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 rounded-full md:mb-0">
          <Image src="/logo.jpeg" className='rounded-full' alt="Logo" width={50} height={50} />
        </div>
        <div className="flex flex-col items-center md:flex-row gap-4">
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/services">
            Services
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
        <div className="mt-4 text-center text-xs md:mt-0">
          <p>&copy; {new Date().getFullYear()} Street Food Consulting.<br/> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}