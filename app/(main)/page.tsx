"use client";

import CTASection from "./components/cta-section";
import FeatureGrid from "./components/feature-grid";
import FeaturesCarousel from "./components/features-carousel";
import TechnicalComponents from "./components/technical-components";
import { Hero } from "./components/hero";
import Intro from "./components/intro";
import { ImageSection } from "./components/image-section";
import Footer from "./components/footer";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Hero />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="container mx-auto w-9/12">
          <Intro />
          <FeaturesCarousel />
          <ImageSection
            src="/images/main/2.png"
            alt="Vibrant neon-lit futuristic city skyline"
            className={`border-b border-gray-700`}
            imageClassName={`reveal`}
          />
          <TechnicalComponents />
          <ImageSection
            src="/images/main/3.png"
            alt="Futuristic cityscape with towering architecture"
            imageClassName={`reveal`}
          />
          <FeatureGrid />
          <ImageSection
            src="/images/main/4.png"
            alt="Expansive sci-fi urban environment under a colorful sky"
            imageClassName={`reveal`}
          />
          <CTASection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
