"use client";

import localFont from "next/font/local";
import LenisProvider from "@/components/LenisProvider";

const inter = localFont({
  src: "../assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
