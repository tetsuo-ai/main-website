import FooterSeparator from "@/components/footer-separator";
import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";
import NotFoundImage from "@/public/images/404.jpg";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="relative flex grow flex-col">
        <PageIllustration multiple />
        <section className="relative overflow-hidden">
          {/* Cyberpunk glitch overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,0,128,0.1),rgba(0,255,255,0.1))] mix-blend-overlay"></div>
          <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle,rgba(0,255,255,0.1)_0%,transparent_70%)]"></div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="text-center">
                <Image
                  className="mx-auto rotate-2 rounded-2xl border-4 border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                  src={NotFoundImage}
                  width={196}
                  height={196}
                  alt="A funny dog with a strange expression on his face"
                />
                <div className="relative -mt-8">
                  <h1
                    className="relative font-aperture text-3xl md:text-4xl font-bold text-transparent mb-8"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #00f0ff, #ff00c8, #00f0ff)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      animation:
                        "neonGlow 2s ease-in-out infinite alternate, textGlitch 3s infinite",
                    }}
                  >
                    Error 404: Reality Glitch Detected
                  </h1>
                  <Link
                    className="btn group relative overflow-hidden bg-transparent px-8 py-3 text-cyan-400 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-gradient-to-r before:from-[#ff00c8] before:to-[#00f0ff] before:transition-transform before:duration-300 hover:text-white hover:before:translate-y-0 border border-cyan-400/50"
                    href="/"
                  >
                    <span className="relative inline-flex items-center whitespace-nowrap">
                      Return to Reality
                      <span className="ml-1 tracking-normal text-inherit transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Add cyberpunk scan lines */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
        </section>
        <FooterSeparator />
      </main>
      <Footer />
    </>
  );
}
