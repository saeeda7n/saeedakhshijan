import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Lenis from "@/app/lenis";
import { Toaster } from "@/components/ui/sonner";

const lexend = Lexend({ subsets: ["latin"], variable: "--lexend-font" });

const APP_NAME = "Saeed Akhshijan";
const APP_DEFAULT_TITLE = "Saeed Akhshijan";
const APP_TITLE_TEMPLATE = "%s - Saeed Akhshijan";
const APP_DESCRIPTION = "A Personal profile";

export const viewport: Viewport = {
 width: "device-width",
 userScalable: false,
 viewportFit: "cover",
 minimumScale: 1,
 initialScale: 1,
 colorScheme: "dark",
};

export const metadata: Metadata = {
 keywords: ["saeed", "akhshijan", "portfolio"],
 applicationName: APP_NAME,
 title: {
  default: APP_DEFAULT_TITLE,
  template: APP_TITLE_TEMPLATE,
 },
 description: APP_DESCRIPTION,
 appleWebApp: {
  capable: true,
  statusBarStyle: "default",
  title: APP_DEFAULT_TITLE,
  // startUpImage: [],
 },
 formatDetection: {
  telephone: false,
 },
 openGraph: {
  type: "website",
  siteName: APP_NAME,
  title: {
   default: APP_DEFAULT_TITLE,
   template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
 },
 twitter: {
  card: "summary",
  title: {
   default: APP_DEFAULT_TITLE,
   template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
 },
};
export default function RootLayout({ children }: RootLayoutProps) {
 return (
  <html lang="en">
   <body
    className={cn(
     lexend.variable,
     "dark w-screen overflow-x-hidden font-lexend",
    )}
   >
    <Lenis>{children}</Lenis>
    <Toaster />
   </body>
  </html>
 );
}
