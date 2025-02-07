import Image from "next/image";
import Link from "next/link";
import PageIllustration from "./components/page-illustration";

// Core team data
const coreTeam = [
  {
    name: "7etsuo",
    role: "Founder",
    image: "/images/team/7etsuo.jpeg",
    github: "https://github.com/7etsuo",
    twitter: "https://twitter.com/7etsuo",
  },
  {
    name: "richinseattle",
    role: "Core Developer",
    image: "/images/team/richinseattle.png",
    github: "https://github.com/richinseattle",
    twitter: "https://twitter.com/richinseattle",
  },
  {
    name: "bobtheITguy31337",
    role: "Core Developer",
    image: "/images/team/bobtheitguy31337.png",
    github: "https://github.com/bobtheITguy31337",
    twitter: "https://twitter.com/bobtheITguy31337",
  },
  {
    name: "RickyC0626",
    role: "Core Developer",
    image: "/images/team/rickyc0626.jpeg",
    github: "https://github.com/RickyC0626",
    twitter: "https://twitter.com/RickyC0626",
  },

  {
    name: "possible_wisdom",
    role: "Developer",
    image: "/images/team/possible_wisdom.png",
    github: "https://github.com/possible_wisdom",
    twitter: "https://twitter.com/possible_wisdom",
  },
];

export const metadata = {
  title: "Developers - Tetsuo",
  description: "Meet the developers and contributors behind Tetsuo",
};

export default function Developers() {
  return (
    <>
      <PageIllustration />

      <section className="relative overflow-hidden py-12 md:py-20">
        {/* Cyberpunk glitch overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,0,128,0.1),rgba(0,255,255,0.1))] mix-blend-overlay"></div>
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle,rgba(0,255,255,0.1)_0%,transparent_70%)]"></div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className={`
                  relative 
                  font-aperture
                  text-4xl md:text-5xl 
                  font-bold 
                  text-transparent
                  mb-2
                `}
                data-aos="fade-up"
                data-aos-delay="100"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #00f0ff, #ff00c8, #00f0ff)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  animation:
                    "neonGlow 2s ease-in-out infinite alternate, textGlitch 3s infinite",
                }}
              >
                Our Developers
              </h1>
              <p
                className="mb-8 text-xl text-cyan-400/80 [text-shadow:0_0_10px_rgba(0,240,255,0.5)]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Meet the amazing team behind Tetsuo and our wonderful
                contributors
              </p>
            </div>

            {/* Core team section */}
            <div className="max-w-sm mx-auto grid gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3 md:max-w-4xl">
              <h2
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-aperture text-3xl font-semibold text-transparent md:text-4xl col-span-full text-center mb-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Core Team
              </h2>
              {coreTeam.map((member, index) => (
                <div
                  key={member.name}
                  className="relative flex flex-col items-center text-center"
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100}
                >
                  <div className="mb-4">
                    <Image
                      className="rounded-full"
                      src={member.image}
                      width={120}
                      height={120}
                      alt={member.name}
                    />
                  </div>
                  <h4 className="h4 mb-1 text-cyan-400">{member.name}</h4>
                  <div className="font-medium text-cyan-400/80 mb-2">
                    {member.role}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Link
                      href={member.github}
                      className="text-cyan-400/60 hover:text-cyan-400 transition duration-150 ease-in-out"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                    <Link
                      href={member.twitter}
                      className="text-cyan-400/60 hover:text-cyan-400 transition duration-150 ease-in-out"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add cyberpunk scan lines */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>
      </section>
    </>
  );
}
