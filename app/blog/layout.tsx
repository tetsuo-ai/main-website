export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900 tracking-tight">
      <main className="max-w-[60ch] mx-auto w-full space-y-6">{children}</main>
    </div>
  );
}
