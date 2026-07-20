"use client";

import { useState } from "react";
import type { Faq } from "@/lib/data";

// Interactive accordion: one item open at a time, with a smooth height
// (grid 0fr → 1fr) and icon-rotation transition.
export default function FaqList({ items }: { items: Faq[] }) {
  // All items start closed.
  const [open, setOpen] = useState(-1);

  return (
    <div className="flex flex-col gap-[14px]">
      {items.map((f, i) => {
        const isOpen = i === open;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-[14px] border transition-all duration-300 bg-white"
            style={{
              borderColor: isOpen ? "#188bf6" : "#e9edf3",
              boxShadow: isOpen ? "0 10px 25px rgba(24,139,246,.08)" : "none",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-[18px] text-left transition-colors duration-300"
              style={{
                background: isOpen ? "#188bf6" : "#f7f9fc",
              }}
            >
              <span
                className="text-[15px] font-semibold transition-colors"
                style={{ color: isOpen ? "#fff" : "#101828" }}
              >
                {f.q}
              </span>
              <span
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[18px] transition-transform duration-300"
                style={{
                  background: isOpen ? "rgba(255,255,255,.2)" : "#e6f0fd",
                  color: isOpen ? "#fff" : "#188bf6",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-[cubic-bezier(.2,.7,.2,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="mb-0 px-6 py-[18px] text-[13.5px] leading-[1.75] text-[#5a6474]">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
