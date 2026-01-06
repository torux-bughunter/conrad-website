import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Gelionyx - Intelligent Hydrogels for Drought Resilience",
  description: "Biodegradable probiotic hydrogels combined with predictive AI to restore soil health and optimize water usage in arid regions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${instrumentSerif.variable} antialiased font-manrope border-t-[12px] border-[#00A651] bg-white text-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
