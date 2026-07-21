import Image from "next/image";

type Shape = "rounded" | "circle";

export interface ImageSlotProps {
  src: string;
  shape?: Shape;
  radius?: number;
  placeholder?: string;
  /** Enables a subtle zoom when a parent `.group`/anchor is hovered. */
  zoom?: boolean;
  /** Prioritise loading (use for above-the-fold hero images). */
  priority?: boolean;
  /** Responsive sizes hint for the optimizer. */
  sizes?: string;
  /** object-fit: "cover" (default, fills+crops) or "contain" (whole image, no crop). */
  fit?: "cover" | "contain";
}

// Optimised replacement for the design's <image-slot> web component.
// Uses next/image with `fill`, so it covers its (positioned) parent. Wrap it in
// a relatively-positioned box with a fixed height, exactly as the design does.
export default function ImageSlot({
  src,
  shape = "rounded",
  radius = 0,
  placeholder = "",
  zoom = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 640px",
  fit = "cover",
}: ImageSlotProps) {
  const borderRadius = shape === "circle" ? "50%" : `${radius}px`;
  return (
    <Image
      src={src}
      alt={placeholder}
      fill
      priority={priority}
      sizes={sizes}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${
        zoom ? "zoomable" : ""
      }`}
      style={{ background: fit === "contain" ? "#f4f6f8" : "#e9e7dd", borderRadius }}
    />
  );
}
