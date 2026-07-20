import portfolioData from "@/lib/data/portfolio.json";
import { projects } from "@/lib/data";
import ClientEnhance from "@/components/ClientEnhance";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ImageSlot from "@/components/ImageSlot";
import CreateProject from "@/components/CreateProject";
import ContactSection from "@/components/ContactSection";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Statically generate parameters for static export/prerendering
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

// Generate dynamic metadata for SEO compliance!
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const currentProject = projects.find((p) => p.slug === slug);
  const name = currentProject ? currentProject.title : "Project Details";
  return {
    title: `${name} — ${portfolioData.personal.name}`,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Find the project inside projects list
  const currentProject = projects.find((p) => p.slug === slug);

  if (!currentProject) {
    notFound();
  }

  // If there are details defined
  const details = currentProject.details!;

  const detailRows = [
    { k: "Project Category :", v: details.category },
    { k: "Client :", v: details.client },
    { k: "Duration :", v: details.duration },
    { k: "Country :", v: details.country, last: true },
  ];

  // Derive other projects dynamically (excluding current)
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <ClientEnhance>
      <Header active="/projects" variant="light" />
      <PageTitle title="Projects" crumb="Project Details" />

      {/* HERO GALLERY */}
      <div className="mx-auto my-9 max-w-[1180px] px-5 md:px-10">
        <div
          data-stagger
          className="flex h-[240px] items-stretch gap-[14px] overflow-x-auto pb-2 [scrollbar-width:none] md:h-[320px] md:overflow-visible md:pb-0 justify-center"
        >
          {details.images.map((imgSrc, i) => (
            <div
              key={i}
              className="group relative min-w-[240px] sm:min-w-[340px] md:min-w-[440px] overflow-hidden rounded-[14px] shadow-sm border border-[#eef3fc]"
              style={{ flex: `1 1 0%` }}
            >
              <ImageSlot
                shape="rounded"
                radius={14}
                src={imgSrc}
                placeholder="Campaign screen"
                zoom
                sizes="(max-width: 768px) 60vw, 440px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* INTRO + CATEGORY CARD */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-5 py-6 md:px-10 lg:grid-cols-[1fr_300px] lg:gap-12">
        <div>
          <div className="mb-[22px] flex items-start gap-4">
            <div className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-full bg-olive font-bold text-white">
              {details.client.charAt(0)}
            </div>
            <div>
              <h2 className="mb-[6px] mt-0 text-[26px] font-extrabold text-ink">
                <span className="text-gold">{details.client}</span> Google Ads Solution
              </h2>
              <p className="m-0 text-[14px] leading-[1.6] text-[#6f6f63]">
                {details.intro}
              </p>
            </div>
          </div>
          <p className="mb-4 mt-0 text-[14px] leading-[1.75] text-[#6f6f63]">
            {details.intro}
          </p>
          <p className="m-0 text-[14px] leading-[1.75] text-[#6f6f63]">
            {details.description}
          </p>
        </div>
        <div className="self-start rounded-[18px] bg-olive px-[26px] py-[30px] text-white">
          {detailRows.map((row, i) => (
            <div
              key={i}
              className={row.last ? "" : "mb-[18px] border-b border-white/[.15] pb-[18px]"}
            >
              <div className="mb-[6px] text-[13px] text-[#dbeafe]">{row.k}</div>
              <div className="text-[16px] font-bold text-white">{row.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* THE CHALLENGE */}
      <div className="mx-auto max-w-[1180px] px-5 md:px-10 py-5">
        <h3 className="mb-[14px] mt-0 text-[22px] font-extrabold text-ink">The Challenge</h3>
        <p className="m-0 text-[14px] leading-[1.8] text-[#6f6f63]">
          {details.challenge}
        </p>
      </div>

      {/* THE SOLUTION */}
      <div className="mx-auto max-w-[1180px] px-5 md:px-10 py-[22px]">
        <h3 className="mb-[14px] mt-0 text-[22px] font-extrabold text-ink">The Solution</h3>
        <p className="mb-6 mt-0 text-[14px] leading-[1.8] text-[#6f6f63]">
          {details.solution}
        </p>
        <div data-stagger className="grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-4 gap-x-[30px] gap-y-5">
          {details.solutionItems.map((item, i) => (
            <div key={i} className="flex items-center gap-[10px]">
              <span className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-gold text-[13px] text-white font-bold">
                ✓
              </span>
              <span className="text-[13.5px] font-medium text-[#4a4a3e]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SOLUTION IMAGES */}
      <div className="mx-auto my-[30px] grid max-w-[1180px] grid-cols-1 gap-[22px] px-5 sm:grid-cols-2 md:h-[320px] md:px-10">
        {details.images.slice(0, 2).map((imgSrc, i) => (
          <div key={i} className="group relative h-[220px] overflow-hidden rounded-[16px] md:h-auto shadow-sm border border-[#eef3fc]">
            <ImageSlot
              shape="rounded"
              radius={16}
              src={imgSrc}
              placeholder="Case study statistics"
              zoom
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>
        ))}
      </div>

      {/* THE IMPACT */}
      <div className="mx-auto max-w-[1180px] px-5 md:px-10 py-5">
        <h3 className="mb-[14px] mt-0 text-[22px] font-extrabold text-ink">The Impact</h3>
        <p className="m-0 text-[14px] leading-[1.8] text-[#6f6f63]">
          {details.impact}
        </p>
      </div>

      {/* VIEW OTHER PROJECTS */}
      <div className="mx-auto mb-[30px] mt-14 max-w-[1000px] px-5 md:px-10 text-center">
        <div className="mb-2 text-[14px] font-semibold text-gold">View Projects</div>
        <h2 className="m-0 text-[26px] md:text-[34px] font-extrabold text-ink">
          View Other <span className="italic text-gold">Projects</span>
        </h2>
      </div>
      <div className="mx-auto mb-[60px] grid max-w-[1000px] grid-cols-1 sm:grid-cols-2 gap-[34px] px-5 md:px-10">
        {otherProjects.map((proj) => (
          <Link
            key={proj.id}
            href={`/projects/${proj.slug}`}
            className="group rounded-[18px] border border-[#ece9df] bg-white p-[18px] text-inherit block hover:shadow-md transition-shadow"
          >
            <div className="relative mb-[18px] h-[230px] overflow-hidden rounded-[12px]">
              <ImageSlot
                shape="rounded"
                radius={12}
                src={proj.img}
                placeholder="Project preview"
                zoom
                sizes="(max-width: 768px) 100vw, 460px"
              />
            </div>
            <div className="mb-[14px] flex flex-wrap gap-2">
              {proj.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-[20px] border border-gold px-[14px] py-[5px] text-[12px] font-semibold text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between gap-4">
              <h4 className="m-0 max-w-[320px] text-[18px] font-bold leading-[1.35] text-ink">
                {proj.title}
              </h4>
              <span className="arrow flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-full bg-olive text-[20px] text-white transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>

      <CreateProject word="Project" />

      <ContactSection
        highlight="Your Next Projects"
        intro="Tell me about your business and goals. I will show you how Google Ads can scale your specific model."
      />

      <LetsConnect />
      <Footer />
      <Copyright />
    </ClientEnhance>
  );
}
