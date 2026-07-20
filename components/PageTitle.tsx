import Link from "next/link";

export interface PageTitleProps {
  title: string;
  crumb?: string;
}

// Inner-page hero: big title + optional "Home / Current" breadcrumb.
export default function PageTitle({ title, crumb }: PageTitleProps) {
  return (
    <div className="relative border-b border-[#eef3fc] bg-[#f8fafc] px-5 py-10 sm:py-12 text-center">
      <h1 className="inline-block bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent text-[30px] sm:text-[42px] font-black tracking-tight leading-tight animate-omUp">
        {title}
      </h1>
      {crumb && (
        <div className="flex items-center justify-center gap-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-widest text-[#7a8599] mt-3">
          <Link href="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <span className="text-[#b0c4de] font-normal">/</span>
          <span className="text-gold font-extrabold">{crumb}</span>
        </div>
      )}
    </div>
  );
}
