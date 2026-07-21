"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { nav, personal } from "@/lib/data";

// Hamburger + right-to-left sliding drawer for small screens. The drawer is
// portalled to <body> so it can never affect header width or be confined by an
// ancestor's stacking / containing-block context.
export default function MobileNav({ active = "/" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const drawer = (
    <div
      className={`fixed inset-0 z-[100] flex justify-end transition-[visibility] duration-300 ${
        open ? "visible" : "invisible delay-300"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`relative flex h-full w-[82%] max-w-[330px] flex-col bg-white shadow-[-10px_0_40px_rgba(16,24,40,.18)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#eef1f5] px-6 py-5">
          <div className="flex items-center gap-[11px]">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gold text-[18px] font-extrabold text-white">
              {personal.initials.charAt(0)}
            </div>
            <span className="text-[19px] font-bold text-ink">
              {personal.name.split(" ")[0]}<span className="text-gold">.</span>
            </span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#f1f4f8] text-ink transition-colors hover:bg-gold hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
          {nav.map((n) => {
            const isActive = n.href === active;
            return (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`rounded-[12px] px-4 py-[13px] text-[16px] font-semibold transition-colors ${
                  isActive ? "bg-gold/10 text-gold" : "text-ink hover:bg-[#f1f4f8]"
                }`}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        <div className="px-4 pb-8">
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="block w-full rounded-[40px] bg-gold px-6 py-[14px] text-center text-[15px] font-semibold text-white"
          >
            Contact Me
          </a>
        </div>
      </aside>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gold text-white"
      >
        <Menu className="h-5 w-5" />
      </button>
      {mounted && createPortal(drawer, document.body)}
    </div>
  );
}
