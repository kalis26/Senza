"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images?: string[];
  intervalMs?: number;
  className?: string;
};

export default function ImageSlider({
  images = ["/images/Versace.jpg", "/images/BDC.jpg"],
  intervalMs = 4000,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs, paused]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div
      className={`relative w-full h-64 sm:h-80 md:h-96 overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={src + i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`slide-${i}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 100vw"
            priority={i === 0}
          />
        </div>
      ))}

      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 cursor-pointer rounded-full transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}