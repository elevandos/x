import "./globals.css";
import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boyner Dynamic Fest",
  description: "Boyner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
