import { stats } from "@/lib/data";

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

  return (
    <div className={className}>
      <div
        className={`grid grid-cols-1 rounded-[20px] border px-8 py-7 sm:grid-cols-3 sm:divide-y-0 ${
          inverted
            ? "divide-y divide-white/20 border-white/15 bg-olive shadow-[0_14px_36px_rgba(24,139,246,.28)] sm:divide-x"
            : "divide-y divide-[#eef1f5] border-[#e9edf3] bg-white shadow-[0_6px_24px_rgba(16,24,40,.05)] sm:divide-x"
        }`}
      >
        {stats.map((st, i) => (
          <div
            key={i}
            className="flex flex-col items-center py-4 text-center sm:py-0"
          >
            <div
              className={`text-[32px] md:text-[40px] font-extrabold leading-none ${
                inverted ? "text-white" : "text-gold"
              }`}
            >
              {st.num}
            </div>
            <div
              className={`mt-2 text-[13.5px] font-medium ${
                inverted ? "text-[#dbeafe]" : "text-[#6b7280]"
              }`}
            >
              {st.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
