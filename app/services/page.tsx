import ClientEnhance from "@/components/ClientEnhance";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import Marquee from "@/components/Marquee";
import CreateProject from "@/components/CreateProject";
import ContactSection from "@/components/ContactSection";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import { services } from "@/lib/data";
import Icon from "@/components/Icon";
import portfolioData from "@/lib/data/portfolio.json";
import type { Metadata } from "next";
export const metadata: Metadata = { title: `Services — ${portfolioData.personal.name}` };

export default function ServicesPage() {
  return (
    <ClientEnhance>
      <Header active="/services" />
      <PageTitle title="Services" />
      {/* <Marquee bg="#188bf6" color="#ffffff" padding="16px 0" /> */}

      {/* SERVICES GRID */}
      <div className="bg-cream px-5 md:px-10 pb-[70px] pt-14">
        <div className="mx-auto max-w-[1120px]">

          <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
            {services.map((s, i) => (
              <div
                key={i}
                data-card="16"
                className="flex flex-col gap-4 rounded-[16px] bg-white px-[26px] py-7"
              >
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[14px] bg-[#eaf2fd] text-gold">
                  <Icon name={s.icon} className="h-7 w-7" />
                </div>
                <h3 className="m-0 text-[19px] font-bold">{s.title}</h3>
                <p className="m-0 text-[13.5px] leading-[1.65] text-[#7a7a6e]">
                  {s.desc}
                </p>
                <a
                  href="#"
                  className="group mt-[2px] inline-flex items-center gap-[7px] text-[14px] font-semibold text-gold"
                >
                  Learn more <span className="arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CreateProject word="Project" />

      <ContactSection
        highlight="Your Next Projects"
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />

      {/* <Marquee bg="#188bf6" color="#ffffff" padding="15px 0" /> */}

      <LetsConnect />
      <Footer />
      <Copyright />
    </ClientEnhance>
  );
}
