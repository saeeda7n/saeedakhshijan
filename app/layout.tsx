import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Lenis from "@/app/(root)/lenis";

const lexend = Lexend({ subsets: ["latin"], variable: "--lexend-font" });

export const metadata: Metadata = {
 title: "Saeed Akhshijan",
 description: "Generated by create next app",
};

export default function RootLayout({ children }: RootLayoutProps) {
 return (
  <html lang="en">
   <body
    className={cn(
     lexend.variable,
     "font-lexend dark w-screen overflow-x-hidden",
    )}
   >
    <Lenis>{children}</Lenis>
   </body>
  </html>
 );
}
