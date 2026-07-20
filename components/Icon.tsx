export interface IconProps {
  /** File name (without extension) in /public/icons */
  name: string;
  className?: string;
}

// Renders an SVG from /public/icons as a CSS mask so it inherits the current
// text color (works with text-white / text-gold etc). Size via className.
export default function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const url = `url(/icons/${name}.svg)`;
  return (
    <span
      aria-hidden="true"
      className={`inline-block flex-shrink-0 ${className}`}
      style={{
        backgroundColor: "currentColor",
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
