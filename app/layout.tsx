import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Marketplace - Discover & Subscribe to APIs",
  description: "A marketplace for discovering, subscribing to, and managing API access",
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
