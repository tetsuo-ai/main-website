import BlurredShape from "@/public/images/blurred-shape.svg";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="relative font-aperture text-3xl md:text-4xl font-bold text-transparent mb-2"
              data-aos="fade-up"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #00f0ff, #ff00c8, #00f0ff)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                animation:
                  "neonGlow 2s ease-in-out infinite alternate, textGlitch 3s infinite",
              }}
            >
              Join the Revolution
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:space-x-4">
              <div
                data-aos="fade-up"
                data-aos-delay={400}
                className="w-full sm:w-auto"
              >
                <a
                  className="btn group relative mb-4 w-full overflow-hidden bg-transparent px-8 py-3 text-cyan-400 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-gradient-to-r before:from-[#ff00c8] before:to-[#00f0ff] before:transition-transform before:duration-300 hover:text-white hover:before:translate-y-0 sm:mb-0 border border-cyan-400/50"
                  href="https://discord.com/invite/tetsuo-ai"
                >
                  <span className="relative inline-flex items-center whitespace-nowrap">
                    Start Building
                    <span className="ml-1 tracking-normal text-inherit transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay={600}
                className="w-full sm:w-auto"
              >
                <a
                  className="btn group relative mb-4 w-full overflow-hidden bg-transparent px-8 py-3 text-cyan-400 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-gradient-to-r before:from-[#ff00c8] before:to-[#00f0ff] before:transition-transform before:duration-300 hover:text-white hover:before:translate-y-0 sm:mb-0 border border-cyan-400/50"
                  href="https://dexscreener.com/solana/2kb3i5ulkhucjuwq3poxhpuggqbwywttk5eg9e5wnlg6"
                >
                  <span className="relative inline-flex items-center whitespace-nowrap">
                    Buy Token
                    <span className="ml-1 tracking-normal text-inherit transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add cyberpunk scan lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
    </section>
  );
}
