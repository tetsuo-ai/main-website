import Image from "next/image";

interface ImageSectionProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export function ImageSection({
  src,
  alt,
  className = "",
  imageClassName = "",
}: ImageSectionProps) {
  return (
    <section
      className={`w-full h-[calc(100vh-200px)] py-10 md:py-20 ${className}`}
    >
      <div
        className={`relative w-full h-full overflow-hidden rounded-b-[80px] ${imageClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
