import ClientEnhance from "@/components/ClientEnhance";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import { projects } from "@/lib/data";
import portfolioData from "@/lib/data/portfolio.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects — ${portfolioData.personal.name}`,
};

export default function ProjectsPage() {
  // Show the full case studies (with stats) first; result-only screenshots after.
  const ordered = [...projects].sort(
    (a, b) => (b.details ? 1 : 0) - (a.details ? 1 : 0)
  );

  return (
    <ClientEnhance>
      <Header active="/projects" variant="light" />
      <PageTitle title="Projects" crumb="All Projects" />

      <div className="bg-cream px-5 md:px-10 pb-20 pt-14">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 text-center">
            <div className="mb-2 text-[14px] font-semibold text-gold tracking-wider uppercase">
              Case Studies &amp; Results
            </div>
            <h2 className="m-0 text-[26px] md:text-[34px] font-extrabold text-ink">
              Every <span className="italic text-gold">Campaign</span> I&rsquo;ve Scaled
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-[1.7] text-[#6f6f63]">
              Real Google Ads results across lead generation and e-commerce. Click a
              case study for the full breakdown, or open any result to view it in full.
            </p>
          </div>

          <div
            data-stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {ordered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>

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
