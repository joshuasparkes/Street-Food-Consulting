import Link from 'next/link';
import './globals.css'; // Ensure you have global styles if needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="w-full bg-gray-800 p-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">Contact</Link>
            </li>
            <li>
              <Link href="/services" className="text-white">Services</Link>
            </li>
            <li>
              <Link href="/clients" className="text-white">Clients</Link>
            </li>
          </ul>
        </nav>
        <main className="p-8">
          {children}
        </main>
      </body>
    </html>
  );
}