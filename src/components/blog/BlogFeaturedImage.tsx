import React from "react";
import Image from "next/image";
import { Container } from "@/shared/Container";

interface BlogFeaturedImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export function BlogFeaturedImage({
  src,
  alt,
  caption,
  priority = true,
}: BlogFeaturedImageProps) {
  return (
    <div className="relative -mt-8 sm:-mt-12 z-20">
      <Container className="max-w-4xl">
        <figure className="m-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-900 shadow-xl shadow-slate-900/10">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              className="object-cover object-center"
            />
          </div>
          {caption && (
            <figcaption className="mt-2.5 text-center text-xs sm:text-sm text-slate-500 font-medium italic">
              {caption}
            </figcaption>
          )}
        </figure>
      </Container>
    </div>
  );
}

