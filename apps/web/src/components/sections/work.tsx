"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { WorkSectionData, ResolvedCarouselImage } from "@/sanity/types";

type Props = {
  data: WorkSectionData;
  images: ResolvedCarouselImage[];
};

export function WorkSection({ data, images }: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const trackWidth = track.scrollWidth;
      outer.style.height = `${vh + Math.max(0, trackWidth - vw)}px`;
    };

    const onScroll = () => {
      const outer = outerRef.current;
      const track = trackRef.current;
      if (!outer || !track) return;
      const scrolledInto = -outer.getBoundingClientRect().top;
      const maxTranslate = track.scrollWidth - window.innerWidth;
      const translateX = Math.min(Math.max(0, scrolledInto), maxTranslate);
      track.style.transform = `translateX(${-translateX}px)`;
    };

    update();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const items = data?.items ?? [];

  return (
    <section id="work" className="py-16 md:py-24 border-t border-mist-500/10">
      {/* Header row */}
      <div className="px-4 sm:px-8 max-w-6xl mx-auto mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-mist-500 uppercase mb-4">
              {data?.subtitle}
            </p>
            <h2 className="font-heading italic text-5xl md:text-7xl font-semibold tracking-tight text-mist-200">
              {data?.title}
            </h2>
          </div>
          <div className="hidden sm:block w-px self-stretch bg-mist-500/20 mx-6" />
        </div>
      </div>

      {/* Footwear carousel — scroll-driven, full-bleed */}
      {images.length > 0 && (
        <div ref={outerRef} className="mb-16 relative">
          <div className="sticky top-0 h-screen overflow-hidden flex items-center">
            <ul ref={trackRef} className="flex gap-6 md:gap-10 will-change-transform">
              {images.map((image, i) => (
                <li
                  key={i}
                  className="shrink-0 w-screen md:w-[85vw] lg:w-[80vw]"
                >
                  <div className="relative aspect-square px-8 sm:px-16 md:px-20 max-h-[85vh]">
                    {image.url && (
                      <Image
                        src={image.url}
                        alt={image.alt ?? ""}
                        fill
                        className="object-contain"
                        sizes="(max-width:768px) 100vw, 85vw"
                      />
                    )}
                  </div>
                  <div
                    className="w-3/5 mx-auto h-3 rounded-full bg-mist-500/10 blur-lg -mt-6"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Work items */}
      {items.length > 0 && (
        <div className="px-4 sm:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-mist-500/10">
            {items.map((item, i) => (
              <div
                key={i}
                className="group bg-[#0D0D09] p-8 md:p-10 hover:bg-mist-900/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-xs text-mist-500/70 mt-1 shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-mist-200 mb-4 group-hover:text-mist-100 transition-colors">
                      {item.heading}
                    </h3>
                    <p className="font-sans font-light text-base leading-relaxed text-foreground/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
