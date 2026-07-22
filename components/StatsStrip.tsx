import { stats } from "@/lib/data";

// Outline icons for the inverted stats bar (Years / Views / Sales).
const statIcons = [
  // calendar
  <svg key="cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <rect x="3" y="4.5" width="18" height="17" rx="3" />
    <path d="M3 9h18M8 2.5v4M16 2.5v4" />
  </svg>,
  // play / video
  <svg key="play" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <rect x="2.5" y="5" width="19" height="14" rx="4" />
    <path d="M10 9.2v5.6l4.5-2.8z" fill="currentColor" stroke="none" />
  </svg>,
  // trending-up chart
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M3 17l5-5 4 4 8-8" />
    <path d="M16 8h5v5" />
  </svg>,
];

// 3-up stats strip (Years / Views / Sales). `minimal` drops the card/border for a
// lighter, airier look (used in the hero); `inverted` renders a blue card with
// white text; the default is the bordered white card.
export default function StatsStrip({
  className = "",
  minimal = false,
  inverted = false,
}: {
  className?: string;
  minimal?: boolean;
  inverted?: boolean;
}) {
  if (minimal) {
    return (
      <div className={`flex flex-wrap items-center gap-x-10 gap-y-5 ${className}`}>
        {stats.map((st, i) => (
          <div
            key={i}
            className={i > 0 ? "sm:border-l sm:border-[#e5e7eb] sm:pl-10" : ""}
          >
            <div className="text-[30px] md:text-[36px] font-extrabold leading-none text-gold">
              {st.num}
            </div>
            <div className="mt-1.5 text-[13px] text-[#6b7280]">{st.label}</div>
          </div>
        ))}
      </div>
    );
  }

  if (inverted) {
    return (
      <div className={className}>
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#2f8bff] to-[#1f6ff0] px-5 py-6 shadow-[0_22px_50px_rgba(31,116,240,.35)] sm:rounded-[28px] sm:px-10 sm:py-8">
          {/* subtle dotted pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#fff_1.1px,transparent_1.1px)] [background-size:22px_22px]" />
          <div className="pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-white/25">
            {stats.map((st, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 sm:justify-center sm:px-6 sm:py-0"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/45 text-white sm:h-14 sm:w-14">
                  {statIcons[i] ?? statIcons[0]}
                </span>
                <div>
                  <div className="text-[26px] font-extrabold leading-none text-white sm:text-[36px]">
                    {st.num}
                  </div>
                  <div className="mt-1.5 text-[12.5px] font-medium text-[#dbeafe] sm:text-[13px]">
                    {st.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 divide-y divide-[#eef1f5] rounded-[20px] border border-[#e9edf3] bg-white px-8 py-7 shadow-[0_6px_24px_rgba(16,24,40,.05)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((st, i) => (
          <div
            key={i}
            className="flex flex-col items-center py-4 text-center sm:py-0"
          >
            <div className="text-[32px] font-extrabold leading-none text-gold md:text-[40px]">
              {st.num}
            </div>
            <div className="mt-2 text-[13.5px] font-medium text-[#6b7280]">
              {st.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
