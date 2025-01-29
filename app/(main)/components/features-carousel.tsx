"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "./ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <Image
        src="/images/main/features/development.png"
        alt="community & development"
        width={200}
        height={200}
        priority
        className="object-contain"
      />
    ),
    title: "Community & Development",
    description:
      "Supported by a thriving community of 32,000+ developers specializing in low-level systems programming, C, Assembly, and Machine Learning (ML). Together we're building real-world utility and fostering innovation.",
  },
  {
    icon: (
      <Image
        src="/images/main/features/purpose.png"
        alt="purpose & projects"
        width={200}
        height={200}
        priority
        className="object-contain"
      />
    ),
    title: "Purpose & Projects",
    description:
      "Supporting and creating cutting-edge projects in systems programming and AI, with a focus on AI trading systems development. 42M tokens locked to ensure long-term commitment to our mission.",
  },
  {
    icon: (
      <Image
        src="/images/main/features/market.png"
        alt="market performance"
        width={200}
        height={200}
        priority
        className="object-contain"
      />
    ),
    title: "Market Performance",
    description:
      "Demonstrating remarkable growth potential. Our viral narrative and engaged community on X showcase the strong momentum behind $TETSUO.",
  },
  {
    icon: (
      <Image
        src="/images/main/features/partnerships.png"
        alt="partnerships & future"
        width={200}
        height={200}
        priority
        className="object-contain"
      />
    ),
    title: "Partnerships & Future",
    description:
      "Forging strategic partnerships in fintech and security sectors while launching our Developer Program. Building essential tools and optimizing systems for the future.",
  },
  {
    icon: (
      <Image
        src="/images/main/features/tokenomics.png"
        alt="tokenomics"
        width={200}
        height={200}
        priority
        className="object-contain"
      />
    ),
    title: "Tokenomics",
    description:
      "Implementing strategic token holding locks to ensure project stability and demonstrate unwavering commitment to sustainable long-term growth and development.",
  },
  {
    icon: (
      <Image
        src="/images/main/features/sentiment.png"
        alt="community sentiment"
        width={200}
        height={200}
        priority
        className="object-contain"
      />
    ),
    title: "Community Sentiment",
    description:
      "Enjoying positive reception from community members and influencers who recognize our potential, developer expertise, and utility in the crypto ecosystem.",
  },
];

function chunkArray<T>(array: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, (index + 1) * size),
  );
}

export default function FeaturesCarousel() {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const featuresPerSlide = React.useMemo(() => {
    if (isDesktop) return 3;
    if (isTablet) return 2;
    return 1;
  }, [isDesktop, isTablet]);

  const featureSlides = React.useMemo(
    () => chunkArray(features, featuresPerSlide),
    [featuresPerSlide],
  );

  const totalSlides = featureSlides.length;

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="flex items-center justify-center py-24">
      <Carousel className="w-full max-w-7xl" setApi={setApi}>
        <CarouselContent>
          {featureSlides.map((slideFeatures, slideIndex) => (
            <CarouselItem key={slideIndex}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {slideFeatures.map((feature, featureIndex) => (
                  <div key={featureIndex} className="space-y-8">
                    <div className="h-[200px] flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-6 bg-[#ff0033]" />
                        <h3 className="text-gray-200 text-2xl font-light">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-200 text-lg font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-50 -left-6 md:-left-12 lg:-left-16 bg-transparent border-none hover:bg-transparent">
          <ArrowLeft className="w-8 h-8 text-[#F2E4E4]/20 hover:text-[#ff0033] transition-colors" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-50 -right-6 md:-right-12 lg:-right-16 bg-transparent border-none hover:bg-transparent">
          <ArrowRight className="w-8 h-8 text-[#F2E4E4]/20 hover:text-[#ff0033] transition-colors" />
        </CarouselNext>

        <div className="absolute -bottom-12 right-0 flex gap-2 md:right-0 w-full md:w-auto justify-center md:justify-end">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-12 h-1 transition-colors duration-300 ${
                current === index ? "bg-[#ff0033]" : "bg-[#1f1f1f]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
