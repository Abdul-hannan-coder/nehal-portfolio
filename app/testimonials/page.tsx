import ClientEnhance from "@/components/ClientEnhance";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import Marquee from "@/components/Marquee";
import ImageSlot from "@/components/ImageSlot";
import CreateProject from "@/components/CreateProject";
import ContactSection from "@/components/ContactSection";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import { testimonials } from "@/lib/data";
import portfolioData from "@/lib/data/portfolio.json";
import type { Metadata } from "next";
export const metadata: Metadata = { title: `Testimonials — ${portfolioData.personal.name}` };

export default function TestimonialsPage() {
  return (
    <ClientEnhance>
      <Header active="/testimonials" />
      <PageTitle title="Testimonials" />
      {/* <Marquee bg="#188bf6" color="#ffffff" padding="15px 0" /> */}

      {/* TESTIMONIALS LIST */}
      <div className="bg-cream px-5 md:px-10 pb-16 pt-[52px]">
        <div className="mx-auto max-w-[1040px]">

          <div data-stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-[900px] mx-auto">
            {/* Top Video (Centered & Spans 2 Columns on desktop) */}
            {testimonials[0] && (
              <div className="md:col-span-2 flex justify-center">
                <div
                  data-card="16"
                  className="w-full max-w-[560px] rounded-[16px] bg-white p-5 flex flex-col justify-between shadow-sm border border-[#eef3fc]"
                >
                  <div>
                    <div className="mb-[14px] flex items-center gap-[10px]">
                      <span className="text-[16px] tracking-[2px] text-gold">★★★★★</span>
                      <span className="text-[16px] font-extrabold text-ink">5.0</span>
                    </div>
                    <video
                      src={testimonials[0].videoSrc}
                      controls
                      className="w-full aspect-video rounded-[10px] bg-black object-cover mb-5 shadow-sm"
                    />
                  </div>
                  <div className="flex items-center gap-3 border-t border-[#f1f4f8] pt-4">
                    <div>
                      <div className="text-[15px] font-bold text-ink">{testimonials[0].name}</div>
                      <div className="text-[13px] text-[#8a8a7e]">{testimonials[0].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Two Videos (Side-by-side on desktop) */}
            {testimonials.slice(1, 3).map((t) => (
              <div
                key={t.id}
                data-card="16"
                className="w-full rounded-[16px] bg-white p-5 flex flex-col justify-between shadow-sm border border-[#eef3fc]"
              >
                <div>
                  <div className="mb-[14px] flex items-center gap-[10px]">
                    <span className="text-[16px] tracking-[2px] text-gold">★★★★★</span>
                    <span className="text-[16px] font-extrabold text-ink">5.0</span>
                  </div>
                  <video
                    src={t.videoSrc}
                    controls
                    className="w-full aspect-video rounded-[10px] bg-black object-cover mb-5 shadow-sm"
                  />
                </div>
                <div className="flex items-center gap-3 border-t border-[#f1f4f8] pt-4">
                  <div>
                    <div className="text-[15px] font-bold text-ink">{t.name}</div>
                    <div className="text-[13px] text-[#8a8a7e]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CreateProject word="Campaign" />

      <ContactSection
        highlight="Your Next Campaign"
        intro="Tell me about your business and goals. I will show you how Google Ads can turn spend into revenue."
      />

      {/* <Marquee bg="#188bf6" color="#ffffff" padding="15px 0" /> */}

      <LetsConnect />
      <Footer />
      <Copyright />
    </ClientEnhance>
  );
}
