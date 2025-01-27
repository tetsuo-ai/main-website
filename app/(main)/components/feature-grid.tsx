import Image from "next/image";

interface FeatureCard {
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    title: "Developer Community",
    description:
      "Join our thriving community of 32,000+ developers focused on systems programming, C, Assembly, and Machine Learning.",
  },
  {
    title: "Token Security",
    description:
      "42M tokens locked to ensure long-term stability and demonstrate our commitment to sustainable growth.",
  },
  {
    title: "Market Growth",
    description:
      "Strong market performance, backed by viral community engagement and strategic partnerships.",
  },
  {
    title: "AI Integration",
    description:
      "Developing cutting-edge AI trading systems and machine learning solutions for the Solana blockchain ecosystem.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Building alliances in fintech and security sectors to create a robust ecosystem for low-level systems development.",
  },
];

export default function FeatureGrid() {
  return (
    <section className=" text-white py-24">
      <div className="max-w-[90rem] mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
          Built for the future of systems programming
        </h2>
        <p className="text-xl md:text-2xl font-light mb-24 max-w-4xl ">
          <span className="text-red-500">$TETSUO</span> combines cutting-edge
          technology with community-driven development to create a robust
          ecosystem for low-level systems programming and AI innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative border border-red-500/20 p-8 min-h-[250px] flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-red-500" />
                <h3 className="text-xl font-light">{feature.title}</h3>
              </div>
              <p className=" font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

          <div className="relative border border-red-500/20 p-8 min-h-[250px] flex items-center justify-center">
            <Image
              src="/images/tetsuo-logo.png"
              alt="TETSUO Logo"
              width={200}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
