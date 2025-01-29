import "./globals.css";

import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tetsuo.ai"),
  alternates: {
    canonical: "/",
  },
  title: "Tetsuo",
  description: "Empowering the Future of Systems Programming and AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${dmSans.variable} bg-gray-950  text-base  text-gray-200 antialiased`}
        >
          <div>{children}</div>
        </body>
      </html>
      <Analytics />
    </ViewTransitions>
  );
}
