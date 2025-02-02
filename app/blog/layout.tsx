import { ReactNode } from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col p-0 bg-[#0a0a0a] text-red-500 bg-[url('/images/blog/background.png')] bg-cover bg-center bg-fixed">
      <div className="w-full h-full">
        <header className="w-full flex justify-center py-8">
          <img
            src="/images/blog/logo.png"
            alt="Tetsuo"
            className="h-12 object-contain"
          />
        </header>

        <main className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto w-full">
            <div className="bg-black/80  p-6 shadow-lg shadow-red-500/10">
              <div className="space-y-6 font-mono">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
