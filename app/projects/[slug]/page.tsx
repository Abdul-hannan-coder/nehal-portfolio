import portfolioData from "@/lib/data/portfolio.json";
import { projects } from "@/lib/data";
import ClientEnhance from "@/components/ClientEnhance";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ImageSlot from "@/components/ImageSlot";
import ProjectGallery from "@/components/ProjectGallery";
import CreateProject from "@/components/CreateProject";
import ContactSection from "@/components/ContactSection";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Statically generate parameters — only projects that have a full case study.
export async function generateStaticParams() {
  return projects
    .filter((p) => p.details)
    .map((p) => ({
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

  // Only projects with a full case study have a detail page.
  if (!currentProject || !currentProject.details) {
    notFound();
  }

  const details = currentProject.details;

  // Derive other case studies dynamically (excluding current)
  const otherProjects = projects
    .filter((p) => p.slug !== slug && p.details)
    .slice(0, 2);

  return (
    <ClientEnhance>
      <Header active="/projects" />
      <PageTitle title="Projects" crumb="Project Details" />

      {/* FULL-WIDTH GALLERY (with zoom-to-fullscreen) */}
      <div className="mx-auto my-9 max-w-[1180px] 2xl:max-w-[1500px] px-5 md:px-10">
        <ProjectGallery images={details.images} alt={currentProject.title} />
      </div>

      {/* CASE STUDY BODY */}
      <div className="mx-auto max-w-[880px] 2xl:max-w-[1140px] px-5 py-8 md:px-10">
        <div>
          <div className="mb-5 flex items-start gap-4">
            <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-olive text-[18px] font-bold text-white">
              {details.client.charAt(0)}
            </div>
            <h2 className="mt-1 text-[24px] md:text-[28px] 2xl:text-[34px] font-extrabold leading-[1.2] text-ink">
              <span className="text-gold">{details.client}</span> Google Ads Solution
            </h2>
          </div>
          <p className="mb-4 text-[14.5px] 2xl:text-[16px] leading-[1.75] text-[#6f6f63]">
            {details.intro}
          </p>
          <p className="mb-8 text-[14.5px] 2xl:text-[16px] leading-[1.75] text-[#6f6f63]">
            {details.description}
          </p>

          {/* Key results */}
          {currentProject.metrics.length > 0 && (
            <div className="mb-10 grid grid-cols-3 gap-4 rounded-[16px] border border-[#eef3fc] bg-[#f8fafc] px-5 py-6 sm:gap-6 sm:px-7">
              {currentProject.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-[22px] md:text-[28px] font-extrabold leading-none text-olive">
                    {m.value}
                  </div>
                  <div className="mt-1.5 text-[11.5px] md:text-[12.5px] text-[#8a8a7e]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mb-9">
            <h3 className="mb-3 mt-0 text-[21px] 2xl:text-[25px] font-extrabold text-ink">The Challenge</h3>
            <p className="m-0 text-[14.5px] 2xl:text-[16px] leading-[1.8] text-[#6f6f63]">
              {details.challenge}
            </p>
          </div>

          <div className="mb-9">
            <h3 className="mb-3 mt-0 text-[21px] 2xl:text-[25px] font-extrabold text-ink">The Solution</h3>
            <p className="mb-5 mt-0 text-[14.5px] 2xl:text-[16px] leading-[1.8] text-[#6f6f63]">
              {details.solution}
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-[13px] sm:grid-cols-2">
              {details.solutionItems.map((item, i) => (
                <div key={i} className="flex items-center gap-[10px]">
                  <span className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-gold text-[13px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-[13.5px] 2xl:text-[15px] font-medium text-[#4a4a3e]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 mt-0 text-[21px] 2xl:text-[25px] font-extrabold text-ink">The Impact</h3>
            <p className="m-0 text-[14.5px] 2xl:text-[16px] leading-[1.8] text-[#6f6f63]">
              {details.impact}
            </p>
          </div>
        </div>
      </div>

      {/* VIEW OTHER PROJECTS */}
      <div className="mx-auto mb-[30px] mt-14 max-w-[1000px] 2xl:max-w-[1360px] px-5 md:px-10 text-center">
        <div className="mb-2 text-[14px] font-semibold text-gold">View Projects</div>
        <h2 className="m-0 text-[26px] md:text-[34px] font-extrabold text-ink">
          View Other <span className="italic text-gold">Projects</span>
        </h2>
      </div>
      <div className="mx-auto mb-[60px] grid max-w-[1000px] 2xl:max-w-[1360px] grid-cols-1 sm:grid-cols-2 gap-[34px] px-5 md:px-10">
        {otherProjects.map((proj) => (
          <Link
            key={proj.id}
            href={`/projects/${proj.slug}`}
            className="group rounded-[18px] border border-[#ece9df] bg-white p-[18px] text-inherit block hover:shadow-md transition-shadow"
          >
            <div className="relative mb-[18px] h-[230px] overflow-hidden rounded-[10px] bg-[#f4f6f8]">
              <ImageSlot
                shape="rounded"
                radius={10}
                src={proj.img}
                placeholder="Project preview"
                fit="contain"
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
