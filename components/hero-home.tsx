import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      {/* Cyberpunk glitch overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,0,128,0.1),rgba(0,255,255,0.1))] mix-blend-overlay"></div>
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle,rgba(0,255,255,0.1)_0%,transparent_70%)]"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="relative py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className={`
                relative 
                font-aperture
                text-4xl md:text-5xl 
                font-bold 
                text-transparent
                mb-2
              `}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #00f0ff, #ff00c8, #00f0ff)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                animation:
                  "neonGlow 2s ease-in-out infinite alternate, textGlitch 3s infinite",
              }}
            >
              Let&apos;s build the future of low-level systems
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-cyan-400/80 [text-shadow:0_0_10px_rgba(0,240,255,0.5)]"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Community and Development: $TETSUO is supported by a community
                of over 32,000 developers focused on low-level systems
                programming, including C, Assembly, and Machine Learning (ML).
                The token aims to fund innovative projects within these areas,
                providing real-world utility and fostering a stronger ecosystem
                for developers.
              </p>
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
                      Join our Discord
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

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>

      {/* Add cyberpunk scan lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
    </section>
  );
}
