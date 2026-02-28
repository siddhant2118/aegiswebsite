import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AegisWebsite",
  description: "AegisCycle consumer landing with temporary auth",
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
