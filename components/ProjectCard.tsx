import Link from "next/link";
import ImageSlot from "./ImageSlot";
import type { Project } from "@/lib/data";

// A single project/result card. Cards with a case study link to its detail page;
// cards that are just a result screenshot open the full image in a new tab.
// The cover uses object-contain so the whole screenshot is visible (not cropped).
export default function ProjectCard({ p }: { p: Project }) {
  const hasDetail = Boolean(p.details);
  const href = hasDetail ? `/projects/${p.slug}` : encodeURI(p.img);

  const body = (
    <>
      <div className="relative mb-4 h-[210px] overflow-hidden rounded-[10px] bg-[#f4f6f8]">
        <ImageSlot
          shape="rounded"
          radius={10}
          src={p.img}
          placeholder={p.title}
          fit="contain"
          sizes="(max-width: 768px) 100vw, 540px"
        />
      </div>

      {p.tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {p.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-[20px] border border-gold px-3 py-1 text-[11px] font-semibold text-gold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h4 className="mb-[6px] mt-0 text-[17px] font-bold leading-[1.35]">
        {p.title}
      </h4>

      {p.metrics.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#efece2] pt-[14px]">
          {p.metrics.map((m, i) => {
            const isRoas = m.label.toLowerCase().includes("roas");
            return (
              <div key={i}>
                <div
                  className={`text-[17px] font-extrabold ${
                    isRoas ? "text-[#16a34a]" : "text-olive"
                  }`}
                >
                  {m.value}
                </div>
                <div className="text-[11px] text-[#8a8a7e]">{m.label}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <span className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-gold">
          {hasDetail ? "View case study" : "View full result"}
          <span className="arrow">→</span>
        </span>
      )}
    </>
  );

  const className =
    "group block rounded-[16px] bg-white p-4 text-inherit shadow-[0_4px_18px_rgba(16,24,40,.05)] transition-shadow hover:shadow-[0_12px_30px_rgba(16,24,40,.12)]";

  return hasDetail ? (
    <Link href={href} data-card="16" className={className}>
      {body}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-card="16"
      className={className}
    >
      {body}
    </a>
  );
}
