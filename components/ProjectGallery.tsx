"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

// Full-width project images, each with a zoom button that opens a fullscreen
// lightbox so the image can be viewed in full (uncropped). The overlay is
// portalled to <body> so ancestor transforms can't clip it.
export default function ProjectGallery({
  images,
  alt = "Project image",
}: {
  images: string[];
  alt?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight")
        setOpen((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    
    // Disable scrolling on both html and body to completely block background scroll on all devices
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, images.length]);

  const step = (dir: number) =>
    setOpen((i) => (i === null ? i : (i + dir + images.length) % images.length));

  return (
    <>
      <div className="flex flex-col gap-6">
        {images.map((src, i) => (
          <div key={i} className="relative w-full">
            {/* Full, uncropped image at its natural aspect ratio. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${alt} — ${i + 1}`}
              loading="lazy"
              className="block h-auto w-full border border-[#eef3fc] shadow-sm"
              style={{ background: "#e9e7dd" }}
            />
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label="View full image"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-gold hover:text-white"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {mounted &&
        open !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(null)}
              className="absolute right-5 top-5 z-[130] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            >
              <X className="h-6 w-6" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-4 top-1/2 z-[130] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-4 top-1/2 z-[130] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div
              className="relative h-full w-full max-w-[1200px]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[open]}
                alt={`${alt} — full view`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
