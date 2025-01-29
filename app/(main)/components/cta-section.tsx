import Link from "next/link";
import { LongArrow } from "@/components/icons/long-arrow";

interface CTALink {
  text: string;
  href: string;
}

const links: CTALink[] = [
  {
    text: "Start Building",
    href: "https://github.com/tetsuo-ai",
  },
  {
    text: "Buy Token",
    href: "https://raydium.io/swap/?inputMint=sol&outputMint=8i51XNNpGaKaj4G4nDdmQh95v4FKAxw8mhtaRoKd9tE8",
  },
  {
    text: "Resources",
    href: "/resources",
  },
];

export default function CTASection() {
  return (
    <section className="flex flex-col items-start justify-center py-20">
      <div className="w-full space-y-16">
        <h1 className="text-[#BFAEB3] font-extralight text-4xl md:text-5xl lg:text-[56px] leading-tight">
          Join the revolution
        </h1>

        <div className="space-y-8">
          {links.map((link, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static array
            <div key={index}>
              <Link
                href={link.href}
                className="group flex items-center gap-8 py-4 text-[#F2E4E4] hover:text-[#BFAEB3] transition-colors duration-300"
              >
                <span className="font-extralight text-3xl md:text-4xl lg:text-[56px] leading-tight">
                  {link.text}
                </span>
                <span className="text-[#F2E4E4] group-hover:translate-x-2 transition-transform duration-300">
                  <LongArrow fill="#F2E9E4" width={44} height={20} />
                </span>
              </Link>
              <div className="h-px bg-[#403A35] mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
