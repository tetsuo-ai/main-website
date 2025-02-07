import Image from "next/image";
import { ReactNode } from "react";
import backgroundImage from "@/public/images/blog/background.png";

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col p-0 text-red-500 relative">
      <Image
        src={backgroundImage}
        placeholder="blur"
        alt="Background"
        fill
        priority
        className="object-cover fixed"
        quality={100}
      />
      <div className="w-full h-full relative">
        <header className="w-full flex justify-center py-8">
          <Image
            src="/images/blog/logo.png"
            alt="Tetsuo"
            className="h-12 object-contain"
            width={300}
            height={300}
          />
        </header>

        <main className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto w-full">
            <div className="bg-black/80 p-6 shadow-lg shadow-red-500/10">
              <div className="space-y-6">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
