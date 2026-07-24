"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { personal } from "@/lib/data";
import MobileNav from "./MobileNav";
import PrimaryNav from "./PrimaryNav";

export interface HeaderProps {
  active?: string;
  variant?: "dark" | "light";
}

// Sticky, responsive blue + white header. Desktop shows the full nav; below the
// `lg` breakpoint it collapses to a hamburger that opens a right-side drawer.
export default function Header({ active = "/", variant = "dark" }: HeaderProps) {
  const Brand = (
    <Link href="/" className="flex items-center gap-2.5 text-inherit no-underline">
      <span className="text-[19px] font-bold text-ink">
        {personal.name}<span className="text-gold">.</span>
      </span>
    </Link>
  );

  const DesktopNav = <PrimaryNav />;

  const ContactBtn = (
    <a
      href="/#contact"
      className="hidden rounded-[40px] border-none bg-gold px-[26px] py-[13px] font-sans text-[15px] font-semibold text-white lg:block"
    >
      Contact Me
    </a>
  );

  const [scrolled, setScrolled] = useState(false);

  const inner =
    variant === "light" ? (
      <header className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-[18px] md:px-10">
        {Brand}
        {DesktopNav}
        {ContactBtn}
        <MobileNav active={active} />
      </header>
      ) : (
      <div className="mx-auto max-w-[1120px] px-5 pb-2 pt-[18px] md:px-10">
        <header className={`flex items-center justify-between rounded-[44px] py-[11px] pl-5 pr-3 transition-all ${
          scrolled
            ? "border border-[#e7ebf1] bg-white shadow-[0_6px_24px_rgba(16,24,40,.06)]"
            : "bg-transparent"
        }`}>
          {Brand}
          {DesktopNav}
          {ContactBtn}
          <MobileNav active={active} />
        </header>
      </div>
    );

  useEffect(() => {
    const onScroll = () => {
      // Switch to white as soon as the user scrolls even a little.
      setScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full max-w-[100vw] overflow-x-clip bg-transparent">
      {inner}
    </div>
  );
}
