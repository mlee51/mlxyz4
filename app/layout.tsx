import type { Metadata } from "next";
import {
  Major_Mono_Display
} from "next/font/google";
import "./globals.css";


const inter = Major_Mono_Display({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael",
  description: "creative technologist / software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
