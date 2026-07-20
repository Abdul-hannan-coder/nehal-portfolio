import { marqueeWords } from "@/lib/data";

export interface MarqueeProps {
  bg: string;
  color: string;
  padding?: string;
}

// Scrolling keyword ribbon. `bg` sets the band colour, `color` the text colour.
// Pauses on hover for a subtle, premium touch.
export default function Marquee({ bg, color, padding = "16px 0" }: MarqueeProps) {
  const strip = (prefix: string) => {
    const items: React.ReactNode[] = [];
    for (let r = 0; r < 8; r++) {
      marqueeWords.forEach((w, i) => {
        items.push(
          <span
            key={`${prefix}w${r}-${i}`}
            className="whitespace-nowrap text-[16px] font-bold"
            style={{ color }}
          >
            {w}
          </span>
        );
        items.push(
          <span
            key={`${prefix}s${r}-${i}`}
            className="text-[12px]"
            style={{ color, opacity: 0.5 }}
          >
            ❋
          </span>
        );
      });
    }
    return (
      <span className="inline-flex items-center gap-[22px] pr-[22px]">
        {items}
      </span>
    );
  };

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      style={{ background: bg, padding }}
    >
      <div className="marquee-track inline-flex animate-marq">
        {strip("a")}
        {strip("b")}
      </div>
    </div>
  );
}
