"use client";

import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const geist = localFont({
  src: "../assets/fonts/Geist/Geist-VariableFont_wght.ttf",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className={geist.className}>
        <LenisProvider>
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
