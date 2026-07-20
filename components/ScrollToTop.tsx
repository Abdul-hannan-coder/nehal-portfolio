"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white shadow-[0_4px_20px_rgba(24,139,246,0.3)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none hover:bg-gold-dark hover:-translate-y-1 hover:scale-110 active:scale-95 ${
        visible
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5.5 w-5.5 stroke-[2.5]" />
    </button>
  );
}
