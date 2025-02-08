import Image from "next/image";
import { NavBar } from "./nav-bar";
import mainImage from "@/public/images/main/1.png";

interface HeroProps {
  className?: string;
  imageClassName?: string;
}

export function Hero({ className = "", imageClassName = "" }: HeroProps) {
  return (
    <div className={`w-full h-[93vh] ${className}`}>
      <NavBar />
      <div
        className={`relative w-full h-full overflow-hidden rounded-b-[80px] ${imageClassName}`}
      >
        <Image
          src={mainImage}
          alt="Futuristic landscape with a tower city"
          fill
          priority
          placeholder="blur"
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pb-20">
        <div className="relative z-10 w-full max-w-[70%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] aspect-[3/1]">
          <Image
            src="/images/main/logo.png"
            alt="Tetsuo Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
