"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

// Extract the in-page target id from a hash href like "/#services" -> "services".
const idOf = (href: string) => href.replace(/^\/?#/, "");

// Desktop primary nav for the single-page layout. Links are plain in-page hash
// anchors (native smooth-scroll handles the motion); a scroll-spy highlights the
// section currently in the viewport. On routes without these sections (e.g. a
// project detail page) nothing matches and the links simply navigate back home.
export default function PrimaryNav() {
  const [active, setActive] = useState(idOf(nav[0]?.href ?? "/#home"));

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(idOf(n.href)))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      // Highlight the section crossing the vertical middle of the viewport.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="hidden items-center gap-[30px] text-[15px] font-medium text-ink lg:flex">
      {nav.map((n) => {
        const isActive = idOf(n.href) === active;
        return (
          <a
            key={n.label}
            href={n.href}
            data-active={isActive}
            className={`nav-link ${
              isActive ? "font-semibold text-gold" : "text-ink hover:text-gold"
            }`}
          >
            {n.label}
          </a>
        );
      })}
    </nav>
  );
}
