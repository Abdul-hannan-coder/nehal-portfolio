"use client";

// Reusable portal-based dropdown (from the user's shared component library),
// themed to the site's blue/white palette and sized for the contact form.
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Check } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  options: Array<SelectOption | string>;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export default function Select({
  value,
  options,
  onChange,
  placeholder,
  className = "",
  disabled,
}: SelectProps) {
  const opts: SelectOption[] = options.map((o) =>
    typeof o === "string" ? { value: o, label: o } : o
  );
  const selected = opts.find((o) => o.value === value);

  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const place = useCallback(() => {
    const r = btnRef.current?.getBoundingClientRect();
    if (r) setCoords({ top: r.bottom + 6, left: r.left, width: r.width });
  }, []);

  useEffect(() => {
    if (!open) return;
    place();
    const reposition = () => place();
    const onPointer = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!btnRef.current?.contains(t) && !menuRef.current?.contains(t))
        setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("resize", reposition);
    window.addEventListener("scroll", reposition, true);
    document.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", reposition);
      window.removeEventListener("scroll", reposition, true);
      document.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, place]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        className={`flex h-[46px] w-full items-center justify-between gap-2 rounded-[10px] border border-[#dfe4ec] bg-white px-[14px] text-[14px] font-medium outline-none transition-all hover:border-[#c9d3e0] focus:border-gold focus:ring-4 focus:ring-gold/15 disabled:cursor-not-allowed disabled:opacity-50 ${
          open ? "border-gold ring-4 ring-gold/15" : ""
        } ${selected ? "text-ink" : "text-[#9aa3b2]"} ${className}`}
      >
        <span className="truncate">{selected?.label ?? placeholder ?? "—"}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gold transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: "fixed",
              top: coords.top,
              left: coords.left,
              width: coords.width,
              zIndex: 200,
            }}
            className="dropdown-in dd-scroll max-h-64 overflow-y-auto rounded-[14px] border border-[#e7ebf1] bg-white p-[6px] shadow-[0_20px_50px_rgba(16,24,40,.16)]"
          >
            {opts.map((o) => {
              const active = o.value === value;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => {
                    onChange(o.value);
                    setOpen(false);
                  }}
                  className={`mb-[3px] flex w-full items-center justify-between gap-2 rounded-[8px] px-3 py-[10px] text-left text-[14px] transition-colors last:mb-0 ${
                    active
                      ? "bg-gold/10 font-semibold text-gold"
                      : "text-ink hover:bg-[#eef5ff]"
                  }`}
                >
                  <span className="truncate">{o.label}</span>
                  {active && <Check className="h-4 w-4 shrink-0" />}
                </button>
              );
            })}
            {opts.length === 0 && (
              <div className="px-3 py-4 text-center text-[13px] font-semibold text-slate-400">
                No options
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
