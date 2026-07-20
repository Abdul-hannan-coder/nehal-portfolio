"use client";

import { useEffect, useRef } from "react";

// Ports the original design's _omEnhance():
//  - reveals each top-level section as it scrolls into view (fade + rise)
//  - adds the .om-card hover-lift to rounded content cards
//
// The reveal is driven ENTIRELY from JS via inline styles, so it can never
// leave content stuck invisible:
//   * sections already on screen are never hidden (no flash),
//   * off-screen sections are hidden inline and revealed by an observer,
//   * a safety timer force-reveals everything as a last resort,
//   * if JS fails to run at all, nothing was hidden -> content stays visible.
export default function ClientEnhance({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap) return;

    const blocks = Array.from(wrap.children) as HTMLElement[];

    // Hover-lift on rounded cards.
    wrap
      .querySelectorAll<HTMLElement>('[data-card="16"]')
      .forEach((el) => el.classList.add("om-card"));

    const reveal = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    // Respect reduced motion: leave everything visible, skip the reveal.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
    const hidden: HTMLElement[] = [];

    blocks.forEach((b, i) => {
      const onScreen = b.getBoundingClientRect().top < window.innerHeight - 20;
      if (onScreen) return; // already visible — never hide, no flash
      b.style.opacity = "0";
      b.style.transform = "translateY(20px)";
      const delay = `${Math.min(i, 6) * 0.05}s`;
      b.style.transition = `opacity .8s ${ease} ${delay}, transform .8s ${ease} ${delay}`;
      hidden.push(b);
    });

    if (!hidden.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (
            e.isIntersecting ||
            e.boundingClientRect.top < window.innerHeight
          ) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -6% 0px" }
    );

    const check = () => {
      for (let i = hidden.length - 1; i >= 0; i--) {
        const b = hidden[i];
        if (b.getBoundingClientRect().top < window.innerHeight - 20) {
          reveal(b);
          io.unobserve(b);
          hidden.splice(i, 1);
        }
      }
    };

    hidden.forEach((b) => io.observe(b));
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });

    // Staggered reveal for children of any [data-stagger] grid/row.
    const staggerKids: HTMLElement[] = [];
    const staggerIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            Array.from((e.target as HTMLElement).children).forEach((c) => {
              (c as HTMLElement).style.opacity = "1";
              (c as HTMLElement).style.transform = "none";
            });
            staggerIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    wrap.querySelectorAll<HTMLElement>("[data-stagger]").forEach((container) => {
      Array.from(container.children).forEach((child, i) => {
        const el = child as HTMLElement;
        el.style.opacity = "0";
        el.style.transform = "translateY(16px)";
        const d = `${Math.min(i, 10) * 0.07}s`;
        el.style.transition = `opacity .7s ${ease} ${d}, transform .7s ${ease} ${d}`;
        staggerKids.push(el);
      });
      staggerIo.observe(container);
    });

    // Safety net: never let a section or card remain invisible.
    const safety = window.setTimeout(() => {
      blocks.forEach(reveal);
      staggerKids.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }, 1600);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      window.clearTimeout(safety);
      io.disconnect();
      staggerIo.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="w-full overflow-x-clip">
      {children}
    </div>
  );
}
