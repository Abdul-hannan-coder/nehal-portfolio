import Link from "next/link";
import { skillTags } from "@/lib/data";

export interface CreateProjectProps {
  word?: string;
}

// "Let's Create an Amazing Project/Campaign Together!" + skill-tag cloud.
export default function CreateProject({ word = "Project" }: CreateProjectProps) {
  return (
    <div className="mx-auto mb-10 mt-20 max-w-[900px] px-5 md:px-10 text-center">
      <h2 className="mb-4 text-[24px] sm:text-[32px] md:text-[40px] font-extrabold leading-[1.25] tracking-tight">
        Let&rsquo;s Create an{" "}
        <span className="italic text-gold">
          Amazing {word}
        </span>{" "}
        Together!
      </h2>
      
      <p className="mx-auto mb-8 max-w-[540px] text-[14px] sm:text-[15px] leading-[1.65] text-[#5a6474]">
        Partner with a Google Certified specialist to design, launch, and optimize campaigns that turn search intent into predictable revenue.
      </p>

      <div className="mb-10 flex justify-center">
        <Link
          href="#contact"
          className="cta flex items-center gap-3 rounded-[40px] bg-olive py-[7px] pl-6 pr-2 shadow-sm"
        >
          <span className="text-[14px] sm:text-[15px] font-semibold text-white">
            Contact Us Now
          </span>
          <span className="arrow flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white text-gold font-bold">
            →
          </span>
        </Link>
      </div>

      <div className="mx-auto flex max-w-[760px] flex-wrap justify-center gap-2.5 sm:gap-3">
        {skillTags.map((st, i) => (
          <span
            key={i}
            className="cursor-default rounded-[20px] border border-[#d0e2ff] bg-[#f0f6fe] px-4 py-[7px] text-[12.5px] font-semibold text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-white hover:border-gold hover:shadow-[0_8px_20px_rgba(24,139,246,0.15)]"
          >
            {st.label}
          </span>
        ))}
      </div>
    </div>
  );
}
