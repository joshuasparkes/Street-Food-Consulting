import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import NavBar from "./NavBar";
import Footer from "./Footer";

export const metadata = {
  title: "Street Food Consulting",
  description: "Get your streetfood business off the ground rapidly.",
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <GoogleTagManager gtmId="GTM-M86LFMJW" />
      <body className="bg-black text-white h-screen grid grid-rows-[auto_1fr]">
        <NavBar />
        <main className="bg-black text-center flex justify-center items-center px-8 pb-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}