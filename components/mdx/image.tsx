import Image, { StaticImageData } from "next/image";

interface PostImageProps {
  alt: string;
  caption?: string;
  src: StaticImageData;
}

export default function PostImage({ alt, caption, ...props }: PostImageProps) {
  return (
    <figure>
      <div className="relative overflow-hidden rounded-2xl border border-gray-800/80 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/50 before:to-indigo-500 before:opacity-50">
        <Image
          className="m-0 w-full opacity-70 grayscale"
          {...props}
          alt={alt}
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
