import Image from "next/image";

import TeamImg01 from "@/public/images/team-mosaic-01.jpg";
import TeamImg02 from "@/public/images/team-mosaic-02.jpg";
import TeamImg03 from "@/public/images/team-mosaic-03.jpg";
import TeamImg04 from "@/public/images/team-mosaic-04.jpg";

export default function HeroAbout() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-aperture text-4xl font-semibold text-transparent md:text-5xl">
              The story behind the project
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-xl text-indigo-200/65">
                Developers are trusted to create an engaging experience for
                their companies, so we build tools to help them.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="relative aspect-[4/3] w-full">
              <figure
                className="absolute h-auto"
                style={{ top: "45%", width: "41.67%", maxWidth: 320 }}
                data-aos="fade-right"
              >
                <div className="relative -rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500 before:to-gray-900">
                  <Image
                    className="opacity-80 grayscale"
                    src={TeamImg02}
                    width={320}
                    height={240}
                    alt="Team mosaic 02"
                  />
                </div>
              </figure>
              <figure
                className="relative mx-auto"
                style={{ width: "78.13%", maxWidth: 600 }}
                data-aos="fade-down"
                data-aos-delay={100}
              >
                <div className="relative -rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500 before:to-gray-900">
                  <Image
                    className="opacity-90 grayscale"
                    src={TeamImg01}
                    width={600}
                    height={338}
                    alt="Team mosaic 01"
                  />
                </div>
              </figure>
              <figure
                className="absolute h-auto"
                style={{
                  top: "8.5%",
                  right: 0,
                  width: "32.56%",
                  maxWidth: 250,
                }}
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="relative rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500 before:to-gray-900">
                  <Image
                    className="opacity-90 grayscale"
                    src={TeamImg03}
                    width={250}
                    height={188}
                    alt="Team mosaic 03"
                  />
                </div>
              </figure>
              <figure
                className="absolute h-auto"
                style={{
                  bottom: 0,
                  right: "20%",
                  width: "25.53%",
                  maxWidth: 196,
                }}
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="relative rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500 before:to-gray-900 before:opacity-10">
                  <Image
                    className="opacity-20 grayscale"
                    src={TeamImg04}
                    width={196}
                    height={196}
                    alt="Team mosaic 04"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
