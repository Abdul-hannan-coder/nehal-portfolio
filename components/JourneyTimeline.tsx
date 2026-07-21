"use client";

import { useEffect, useRef, useState } from "react";
import type { Milestone } from "@/lib/data";

// Career timeline that "draws" itself when scrolled into view: a gold line fills
// from top to bottom while each milestone dot lights up in sequence, conveying
// progression over the years. Respects prefers-reduced-motion.
export default function JourneyTimeline({ items }: { items: Milestone[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  const DURATION = 1.8; // seconds for the line to reach the bottom
  const n = items.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setOn(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative ml-4 flex flex-col gap-10 pl-6 sm:ml-8">
      {/* Gray track */}
      <span className="pointer-events-none absolute bottom-1.5 left-0 top-1.5 w-[2px] bg-[#e5e7eb]" />
      {/* Gold fill that grows top -> bottom */}
      <span
        className="pointer-events-none absolute left-0 top-1.5 w-[2px] rounded-full bg-gold"
        style={{
          height: on ? "calc(100% - 12px)" : "0px",
          transition: `height ${DURATION}s cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      />

      {items.map((m, i) => {
        // Each dot lights as the line passes it.
        const delay = n > 1 ? (i / (n - 1)) * DURATION : 0;
        return (
          <div key={i} className="relative">
            <span
              className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-white"
              style={{
                background: on ? "#188bf6" : "#cbd5e1",
                boxShadow: on
                  ? "0 0 0 4px rgba(24,139,246,0.14)"
                  : "0 0 0 4px rgba(203,213,225,0.18)",
                transform: on ? "scale(1)" : "scale(0.5)",
                transition:
                  "transform .45s cubic-bezier(0.22,1,0.36,1), background .45s ease, box-shadow .45s ease",
                transitionDelay: `${delay}s`,
              }}
            />
            <div className="mb-1 text-[13px] font-bold tracking-wider text-gold">
              {m.year}
            </div>
            <h3 className="mb-1.5 m-0 text-[18px] font-bold text-ink">{m.title}</h3>
            <p className="m-0 max-w-[620px] text-[13.5px] leading-[1.7] text-[#6b7280]">
              {m.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
