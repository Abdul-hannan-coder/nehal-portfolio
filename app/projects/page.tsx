import Link from "next/link";
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
import { projects } from "@/lib/data";
import portfolioData from "@/lib/data/portfolio.json";
import type { Metadata } from "next";
export const metadata: Metadata = { title: `Projects — ${portfolioData.personal.name}` };

export default function ProjectsPage() {
  return (
    <ClientEnhance>
      <Header active="/projects" />
      <PageTitle title="Projects" />
      {/* <Marquee bg="#188bf6" color="#ffffff" padding="15px 0" /> */}

      {/* PROJECTS GRID */}
      <div className="bg-cream px-5 md:px-10 pb-16 pt-[52px]">
        <div className="mx-auto max-w-[1120px]">

          <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                data-card="16"
                className="group block rounded-[16px] bg-white p-4 text-inherit"
              >
                <div className="relative mb-4 h-[240px] overflow-hidden rounded-[12px]">
                  <ImageSlot
                    shape="rounded"
                    radius={12}
                    src={p.img}
                    placeholder="Project"
                    zoom
                    sizes="(max-width: 768px) 100vw, 540px"
                  />
                </div>
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
                <div className="mb-[14px] flex items-center justify-between gap-4">
                  <h4 className="m-0 text-[18px] font-bold leading-[1.35]">
                    {p.title}
                  </h4>
                  <span className="arrow flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-full bg-olive text-[20px] text-white">
                    →
                  </span>
                </div>
                <div className="flex gap-[22px] border-t border-[#efece2] pt-[14px]">
                  {p.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-[18px] font-extrabold text-olive">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[#8a8a7e]">{m.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-11 flex justify-center">
            <button className="rounded-[40px] border-none bg-gold px-[30px] py-[14px] font-sans text-[15px] font-semibold text-white">
              Load More Projects
            </button>
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
