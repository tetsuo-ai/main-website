import "./globals.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
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
        className={`${dmSans.variable} bg-gray-950  text-base  text-gray-200 antialiased`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
