import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DuaCircle — Send Duas. Share Peace.",
  description:
    "Turn your grief into continuous blessings. DuaCircle is a Muslim community prayer app where you can create prayer requests for loved ones and let the global community pray together.",
  keywords: ["dua", "prayer", "Muslim", "Islamic", "community", "memorial", "loved ones", "duas"],
  openGraph: {
    title: "DuaCircle — Send Duas. Share Peace.",
    description:
      "Turn your grief into continuous blessings. Connect with a global Muslim community through heartfelt prayers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
