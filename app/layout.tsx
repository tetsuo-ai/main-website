import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const aperture = localFont({
  src: [
    {
      path: "../public/fonts/aperture3.2-webfont.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-aperture",
  display: "swap",
});

const elsone = localFont({
  src: [
    {
      path: "../public/fonts/Elsone-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-elsone",
  display: "swap",
});

export const metadata = {
  title: "Tetsuo",
  description: "Empowering the Future of Systems Programming and AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${aperture.variable} ${elsone.variable} bg-gray-950  text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
