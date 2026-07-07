import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talleres Simon | English Speaking Garage Costa del Sol",
  description:
    "Professional vehicle repairs, servicing and diagnostics in Vélez-Málaga, Costa del Sol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
