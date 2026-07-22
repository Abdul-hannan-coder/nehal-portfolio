"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/lib/data";

// Position each card gets depending on its distance from the active (center) one.
type Slot = "center" | "left" | "right" | "hidden";

function slotStyle(slot: Slot): React.CSSProperties {
  const dir = slot === "right" ? 1 : slot === "left" ? -1 : 0;
  const base = "translate(-50%, -50%)";
  if (slot === "center") {
    return {
      transform: `${base} translateX(0px) scale(1)`,
      opacity: 1,
      zIndex: 30,
      pointerEvents: "auto",
      filter: "none",
    };
  }
  if (slot === "hidden") {
    return {
      transform: `${base} scale(0.55)`,
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  }
  // Flat, forward-facing side cards: shifted left/right, a touch smaller and
  // dimmed so they read as sitting slightly behind the centre one — no 3D turn.
  return {
    transform: `${base} translateX(calc(${dir} * var(--translate-x))) scale(var(--side-scale))`,
    opacity: 0.55,
    zIndex: 20,
    pointerEvents: "auto",
    filter: "brightness(0.85)",
  };
}

export default function TestimonialsCarousel({
  items,
}: {
  items: Testimonial[];
}) {
  const n = items.length;
  // Start with the portrait clip (Dustin) centered; fall back to the middle item.
  const start = items.findIndex((t) => t.name.toLowerCase().includes("dustin"));
  const [active, setActive] = useState(start === -1 ? Math.floor(n / 2) : start);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const iframeRefs = useRef<Array<HTMLIFrameElement | null>>([]);
  const playersRef = useRef<Map<number, any>>(new Map());

  useEffect(() => {
    let mounted = true;
    // Dynamically import the Vimeo Player library if available.
    import("@vimeo/player")
      .then((mod) => {
        if (!mounted) return;
        const Player = mod.default;
        items.forEach((t, idx) => {
          const iframe = iframeRefs.current[idx];
          if (iframe && !playersRef.current.has(idx)) {
            try {
              const p = new Player(iframe);
              playersRef.current.set(idx, p);
              // When a video ends, clear playingIndex so the overlay returns.
              p.on("pause", () => {
                // leave overlay shown when paused
                setPlayingIndex((cur) => (cur === idx ? null : cur));
              });
              p.on("ended", () => {
                setPlayingIndex((cur) => (cur === idx ? null : cur));
              });
            } catch (e) {
              // ignore
            }
          }
        });
      })
      .catch(() => {
        // Player lib not available — playback will fall back to iframe reload.
      });

    return () => {
      mounted = false;
      playersRef.current.forEach((p) => {
        try {
          p.unload && p.unload();
        } catch (e) {}
      });
      playersRef.current.clear();
    };
  }, [items]);

  // Manual navigation only — no auto-rotation. Users drive it via the arrows,
  // the dots, or by clicking a side card.
  const step = (dir: number) => setActive((a) => (a + dir + n) % n);
  // stop any playing when stepping
  const stepWithStop = (dir: number) => {
    setPlayingIndex(null);
    setActive((a) => (a + dir + n) % n);
  };

  const slotOf = (i: number): Slot => {
    const off = (i - active + n) % n;
    if (off === 0) return "center";
    if (off === 1) return "right";
    if (off === n - 1) return "left";
    return "hidden";
  };

  const activeAspect = items[active]?.aspect ?? 1.3333;
  const SIDE_BOX = 1.3333;

  return (
    <div
      className="relative mx-auto w-full max-w-[1280px]"
      style={
        {
          height: "calc(var(--card-h) + 160px)",
          // Each video is bounded by BOTH a max height and a max width, keeping its
          // real aspect (no letterboxing) while stopping wide 16:9 clips from
          // becoming far larger than the portrait/4:3 ones.
          ["--card-h" as string]: "clamp(340px, 62vh, 640px)",
          ["--card-w" as string]: "clamp(260px, 44vw, 680px)",
          ["--side-scale" as string]: "0.72",
          ["--active-aspect" as string]: String(activeAspect),
          ["--side-aspect" as string]: String(SIDE_BOX),
          ["--gap" as string]: "clamp(12px, 3.2vw, 40px)",
          ["--translate-x" as string]: `calc(
            0.5 * min(var(--card-w), calc(var(--card-h) * var(--active-aspect))) +
            0.5 * var(--side-scale) * min(var(--card-w), calc(var(--card-h) * var(--side-aspect))) +
            var(--gap)
          )`,
        } as React.CSSProperties
      }
    >
      {items.map((t, i) => {
        const slot = slotOf(i);
        const isCenter = slot === "center";
        const a = t.aspect ?? 1.3333;

        // Frame box: centre = natural aspect; side = fixed SIDE_BOX.
        const frameStyle: React.CSSProperties = isCenter
          ? {
              width: `min(var(--card-w), calc(var(--card-h) * ${a}))`,
              aspectRatio: String(a),
              maxWidth: "100%",
            }
          : {
              width: `min(var(--card-w), calc(var(--card-h) * ${SIDE_BOX}))`,
              aspectRatio: String(SIDE_BOX),
              maxWidth: "100%",
            };

        // iframe: centre fills the frame; side is scaled to cover the fixed box.
        const iframeStyle: React.CSSProperties = isCenter
          ? { inset: 0, width: "100%", height: "100%", border: 0, pointerEvents: "auto" }
          : a < SIDE_BOX
          ? {
              top: "50%",
              left: 0,
              width: "100%",
              height: `${(SIDE_BOX / a) * 100}%`,
              transform: "translateY(-50%)",
              border: 0,
              pointerEvents: "none",
            }
          : {
              left: "50%",
              top: 0,
              height: "100%",
              width: `${(a / SIDE_BOX) * 100}%`,
              transform: "translateX(-50%)",
              border: 0,
              pointerEvents: "none",
            };
        return (
          <div
            key={t.id}
            role={slot !== "center" ? "button" : undefined}
            aria-label={
              slot !== "center" ? `Show ${t.name}'s testimonial` : undefined
            }
            onClick={() => {
              if (slot !== "center") {
                setPlayingIndex(null);
                setActive(i);
              }
            }}
            className="absolute left-1/2 top-1/2 flex flex-col items-center transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              ...slotStyle(slot),
              cursor: isCenter ? "default" : "pointer",
              width: "min(90vw, 820px)",
            }}
          >
            {/* Video frame — centre keeps real aspect; sides share a uniform box. */}
            <div
              className="relative overflow-hidden rounded-[14px] bg-black shadow-[0_20px_50px_rgba(16,24,40,0.28)]"
              style={frameStyle}
            >
              <iframe
                ref={(el) => {
                  iframeRefs.current[i] = el;
                }}
                src={`https://player.vimeo.com/video/${t.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&controls=0`}
                className="absolute"
                style={iframeStyle}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                title={`${t.name} video testimonial`}
              />

              {/* When playing, capture clicks over the video to toggle pause */}
              <button
                type="button"
                aria-hidden
                onClick={async (e) => {
                  e.stopPropagation();
                  const player = playersRef.current.get(i);
                  if (player && typeof player.play === "function" && typeof player.pause === "function") {
                    try {
                      const isPaused = await player.getPaused();
                      if (!isPaused) {
                        await player.pause();
                        setPlayingIndex(null);
                      } else {
                        await player.play();
                        setPlayingIndex(i);
                      }
                    } catch (err) {}
                  } else {
                    // fallback: toggle by reloading src
                    if (playingIndex === i) {
                      setPlayingIndex(null);
                      const iframe = iframeRefs.current[i];
                      if (iframe) iframe.src = iframe.src.replace("&autoplay=1", "");
                    } else {
                      setPlayingIndex(i);
                      const iframe = iframeRefs.current[i];
                      if (iframe && !iframe.src.includes("autoplay=1")) iframe.src = iframe.src + "&autoplay=1";
                    }
                  }
                }}
                className={`absolute inset-0 z-40 ${playingIndex === i ? "block" : "hidden"}`}
              />

              {/* Play overlay */}
              <button
                type="button"
                aria-label={isCenter ? `Toggle ${t.name} testimonial` : `Open ${t.name} testimonial`}
                onClick={async (e) => {
                  e.stopPropagation();
                  const player = playersRef.current.get(i);
                  if (!isCenter) {
                    // Activate first; once centered, toggle play.
                    setPlayingIndex(null);
                    setActive(i);
                    setTimeout(async () => {
                      const p = playersRef.current.get(i);
                      if (p) {
                        try {
                          await p.play();
                          setPlayingIndex(i);
                        } catch (err) {
                          // fallback: reload iframe with autoplay
                          setPlayingIndex(i);
                        }
                      } else {
                        setPlayingIndex(i);
                      }
                    }, 220);
                    return;
                  }

                  // center card: toggle play/pause
                  if (player && typeof player.play === "function" && typeof player.pause === "function") {
                    try {
                      const state = await player.getPaused();
                      if (state) {
                        await player.play();
                        setPlayingIndex(i);
                      } else {
                        await player.pause();
                        setPlayingIndex(null);
                      }
                    } catch (err) {
                      // ignore
                    }
                  } else {
                    // Fallback: toggle by reloading iframe src with/without autoplay
                    if (playingIndex === i) {
                      // stop
                      setPlayingIndex(null);
                      const iframe = iframeRefs.current[i];
                      if (iframe) iframe.src = iframe.src.replace("&autoplay=1", "");
                    } else {
                      setPlayingIndex(i);
                      const iframe = iframeRefs.current[i];
                      if (iframe && !iframe.src.includes("autoplay=1")) {
                        iframe.src = iframe.src + "&autoplay=1";
                      }
                    }
                  }
                }}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-opacity duration-200 hover:scale-105 ${
                  playingIndex === i ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <svg className="h-6 w-6 text-ink" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                </svg>
              </button>
            </div>

            {/* Caption */}
            <div className="mt-3 flex flex-col items-center text-center">
              <span className="text-[14px] tracking-[2px] text-[#FBBC05]">★★★★★</span>
              <div className="mt-1 text-[15px] font-bold text-ink">{t.name}</div>
              <div className="text-[12px] text-[#8a8a7e]">{t.role}</div>
            </div>
          </div>
        );
      })}

      {/* Prev / Next arrows */}
      {n > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => stepWithStop(-1)}
            className="absolute left-0 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7ebf1] bg-white text-ink shadow-md transition-colors hover:-translate-y-1/2 hover:border-gold hover:bg-gold hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => stepWithStop(1)}
            className="absolute right-0 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7ebf1] bg-white text-ink shadow-md transition-colors hover:-translate-y-1/2 hover:border-gold hover:bg-gold hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2">
        {items.map((t, i) => (
          <button
            key={t.id}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => {
              setPlayingIndex(null);
              setActive(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-gold" : "w-2 bg-[#cbd5e1]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
