"use client";

import localFont from "next/font/local";
import LenisProvider from "@/components/LenisProvider";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const inter = localFont({
  src: "../assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className} suppressHydrationWarning>
        <LenisProvider>
          <Header />
          {children}
          <Footer />
        </LenisProvider>
        <div className="bottom-blur-container"></div>
      </body>
    </html>
  );
}
