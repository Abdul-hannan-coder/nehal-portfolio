import { leadGen, ecommerce } from "@/lib/data";

export default function NichesExplorer() {
  return (
    <div className="mx-auto my-[70px] max-w-[1120px] px-5 md:px-10">
      {/* Title section */}
      <div className="mb-12 text-center">
        <div className="mb-2 text-[13px] font-bold text-gold tracking-widest uppercase">
          Industries
        </div>
        <h2 className="m-0 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-ink">
          The Niches <span className="italic text-gold bg-gold/5 px-3 py-1 rounded-lg">I Scale</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[14.5px] leading-[1.65] text-[#6f6f63]">
          From local lead generation to scaling e-commerce brands — here are the industries I&rsquo;ve driven real results in.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* Lead Generation Card */}
        <div className="rounded-[24px] bg-[#f4f6f8] p-6 md:p-8 border border-[#eef1f5]">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold text-white shadow-[0_6px_20px_rgba(24,139,246,0.35)]">
              {/* Shield Check SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <h3 className="m-0 text-[19px] md:text-[21px] font-extrabold text-ink">
                Lead Generation
              </h3>
              <p className="m-0 text-[13px] text-[#64748b] mt-0.5">
                Proven strategies for high-intent client acquisition.
              </p>
            </div>
          </div>
          
          <div className="border-t border-[#e2e8f0] pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-0.5">
              {leadGen.map((l, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 border-b border-[#e2e8f0]/60 text-[14px] text-ink font-semibold"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* E-commerce Card */}
        <div className="rounded-[24px] bg-[#f4f6f8] p-6 md:p-8 border border-[#eef1f5]">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold text-white shadow-[0_6px_20px_rgba(24,139,246,0.35)]">
              {/* Shopping Bag SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <div>
              <h3 className="m-0 text-[19px] md:text-[21px] font-extrabold text-ink">
                E-commerce Brands
              </h3>
              <p className="m-0 text-[13px] text-[#64748b] mt-0.5">
                Scaling online revenue through conversion-focused marketing.
              </p>
            </div>
          </div>
          
          <div className="border-t border-[#e2e8f0] pt-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-0.5">
              {ecommerce.map((e, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 border-b border-[#e2e8f0]/60 text-[14px] text-ink font-semibold"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Case Study Win Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gold px-6 py-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md shadow-gold/15">
            {/* Background graphic chart lines */}
            <div className="absolute right-0 bottom-0 top-0 flex items-end gap-1.5 opacity-15 pr-6 pointer-events-none">
              <div className="w-3 bg-white rounded-t-sm h-[30%]" />
              <div className="w-3 bg-white rounded-t-sm h-[50%]" />
              <div className="w-3 bg-white rounded-t-sm h-[75%]" />
              <div className="w-3 bg-white rounded-t-sm h-[100%]" />
            </div>

            <div className="flex items-center gap-4 relative z-10">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                {/* Trend Up Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
                </svg>
              </span>
              <div>
                <div className="text-[12px] text-[#e0f2fe] font-medium tracking-wide uppercase">
                  Recent e-commerce win
                </div>
                <div className="text-[16px] md:text-[17px] font-extrabold mt-0.5 leading-snug">
                  $250,000+ in sales for a U.S. renovation products brand.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
