import ClientEnhance from "@/components/ClientEnhance";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ImageSlot from "@/components/ImageSlot";
import CreateProject from "@/components/CreateProject";
import ContactSection from "@/components/ContactSection";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import { stats, about, milestones } from "@/lib/data";
import type { Metadata } from "next";

import portfolioData from "@/lib/data/portfolio.json";
export const metadata: Metadata = { title: `About — ${portfolioData.personal.name}` };

export default function AboutPage() {
  return (
    <ClientEnhance>
      <Header active="/about" />
      <PageTitle title="About Me" />

      {/* BIOGRAPHY SECTION */}
      <div className="bg-white px-5 py-12 md:px-10 md:py-16 text-ink">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 lg:grid-cols-[380px_1fr] lg:gap-[60px]">
          {/* Portrait Container */}
          <div className="relative mx-auto h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] max-w-full">
            <div className="absolute inset-0 overflow-hidden rounded-full bg-cream border-4 border-[#e6f0fd]">
              <ImageSlot
                shape="circle"
                src="/nehal.jpeg"
                placeholder="Nehal Ahmed K portrait"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
            <div className="absolute -right-2 top-8 animate-floaty rounded-[20px] bg-gold px-4 py-1.5 text-[11px] font-semibold text-white shadow-md">
              {about.badge1}
            </div>
            <div className="absolute -left-4 bottom-12 animate-floaty rounded-[20px] border border-[#dbe7f5] bg-white px-4 py-1.5 text-[11px] font-semibold text-olive shadow-sm [animation-delay:1s]">
              {about.badge2}
            </div>
          </div>

          {/* Bio Text */}
          <div>
            <div className="mb-2.5 text-[14px] font-semibold text-gold">Biography</div>
            <h2 
              className="mb-5 text-[26px] md:text-[34px] font-extrabold leading-[1.2] text-ink"
              dangerouslySetInnerHTML={{ __html: about.bioTitle }}
            />
            {about.bioParagraphs.map((para, i) => (
              <p key={i} className="mb-4 text-[14.5px] leading-[1.7] text-[#5a6474]">
                {para}
              </p>
            ))}

            {/* Quick Stats Grid */}
            <div className="flex flex-wrap gap-8 border-t border-[#eef1f5] pt-6 sm:gap-12">
              {stats.map((st, i) => (
                <div key={i}>
                  <div className="text-[28px] md:text-[34px] font-extrabold text-gold leading-none mb-1">{st.num}</div>
                  <div className="text-[12.5px] text-[#7a7a6e] font-medium">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MY PRINCIPLES */}
      <div className="bg-cream px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-10 text-center">
            <div className="mb-2 text-[14.5px] font-semibold text-gold">Methodology</div>
            <h2 className="m-0 text-[26px] md:text-[34px] font-extrabold text-ink">
              My <span className="italic text-gold">Core Principles</span>
            </h2>
          </div>

          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 gap-[26px]">
            {about.corePillars.map((p, i) => (
              <div
                key={i}
                data-card="16"
                className="flex flex-col gap-3 rounded-[16px] bg-white p-[26px] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold font-bold text-[15px]">
                  0{i + 1}
                </div>
                <h3 className="m-0 text-[18px] font-bold text-ink">{p.title}</h3>
                <p className="m-0 text-[13.5px] leading-[1.65] text-[#6b7280]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MY JOURNEY TIMELINE */}
      <div className="bg-white px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-12 text-center">
            <div className="mb-2 text-[14px] font-semibold text-gold">Timeline</div>
            <h2 className="m-0 text-[26px] md:text-[34px] font-extrabold text-ink">
              My Career <span className="italic text-gold">Journey</span>
            </h2>
          </div>

          <div className="relative border-l border-[#e5e7eb] pl-6 ml-4 sm:ml-8 flex flex-col gap-10">
            {milestones.map((m, i) => (
              <div key={i} className="relative">
                {/* Timeline Dot Indicator */}
                <span className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-gold ring-4 ring-gold/10" />
                
                <div className="mb-1 text-[13px] font-bold text-gold tracking-wider">{m.year}</div>
                <h3 className="m-0 text-[18px] font-bold text-ink mb-1.5">{m.title}</h3>
                <p className="m-0 text-[13.5px] leading-[1.7] text-[#6b7280] max-w-[620px]">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA FOOTER FLOW */}
      <CreateProject word="Campaign" />
      <ContactSection
        highlight="Your Next Campaign"
        intro="Tell me about your business and goals. I will show you how Google Ads can turn spend into revenue."
      />
      <LetsConnect />
      <Footer />
      <Copyright />
    </ClientEnhance>
  );
}
