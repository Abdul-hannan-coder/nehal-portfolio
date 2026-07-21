import Link from "next/link";
import ClientEnhance from "@/components/ClientEnhance";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import ImageSlot from "@/components/ImageSlot";
import ContactSection from "@/components/ContactSection";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import FaqList from "@/components/FaqList";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StatsStrip from "@/components/StatsStrip";
import Icon from "@/components/Icon";
import NichesExplorer from "@/components/NichesExplorer";
import JourneyTimeline from "@/components/JourneyTimeline";
import ProjectCard from "@/components/ProjectCard";
import {
  services,
  tools,
  projects,
  leadGen,
  ecommerce,
  pricing,
  homeTestimonials,
  faqs,
  personal,
  about,
  milestones,
} from "@/lib/data";

const toolIcons: Record<string, React.ReactNode> = {
  "Google Ads": (
    <img src="/icons/google-ads.svg" alt="Google Ads" className="h-[38px] w-[38px] object-contain" />
  ),
  "Tag Manager": (
    <svg viewBox="0 0 24 24" className="h-[38px] w-[38px]">
      <path fill="#246FDB" d="M12.5 2L2 12.5l5.5 5.5L18 7.5z"/>
      <path fill="#0F9D58" d="M18 7.5L7.5 18l4.5 4.5L22.5 12z"/>
      <path fill="#FFFFFF" d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
    </svg>
  ),
  "Performance Max": (
    <svg viewBox="0 0 24 24" className="h-[38px] w-[38px]">
      <defs>
        <linearGradient id="zapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBC05" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path fill="url(#zapGrad)" d="M19 10.5h-5.5L17 3H9.5L6 13.5h5L8.5 21z"/>
    </svg>
  ),
  "Shopping Ads": (
    <img src="/icons/google-shopping.svg" alt="Shopping Ads" className="h-[38px] w-[38px] object-contain" />
  ),
  "Search Ads": (
    <svg viewBox="0 0 24 24" className="h-[38px] w-[38px]">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
    </svg>
  ),
  "SEM": (
    <svg viewBox="0 0 24 24" className="h-[38px] w-[38px]">
      <rect x="3" y="12" width="4" height="9" rx="1" fill="#4285F4"/>
      <rect x="10" y="7" width="4" height="14" rx="1" fill="#34A853"/>
      <rect x="17" y="3" width="4" height="18" rx="1" fill="#FBBC05"/>
    </svg>
  )
};

export default function HomePage() {
  return (
    <ClientEnhance>
      <Header active="/" />

      {/* HERO */}
      <div id="home" className="mx-auto mt-5 grid max-w-[1280px] scroll-mt-[90px] grid-cols-1 items-center gap-x-[60px] gap-y-12 px-5 pt-[36px] md:px-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-omUp">
          <div className="mb-[22px] inline-flex items-center gap-2 rounded-[30px] bg-[#eaf2fd] px-4 py-[7px] text-[13px] font-semibold text-[#5a5a4e]">
            {personal.tagline}
          </div>
          <h1 className="mb-[24px] text-[28px] min-[380px]:text-[34px] min-[480px]:text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold leading-[1.08] tracking-tight">
            I&rsquo;m <span className="italic text-gold">{personal.name},</span>
            <br />
            {personal.title}
          </h1>
          <ul className="mb-8 flex max-w-[520px] flex-col gap-[15px]">
            {(personal.highlights ?? []).map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[1px] flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center rounded-full bg-gold text-[13px] font-bold text-white">
                  ✓
                </span>
                <span className="text-[15.5px] font-medium leading-[1.5] text-[#4a4a3e]">
                  {h}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-[14px]">
            <a
              href="#projects"
              className="cta flex w-full max-w-[280px] min-[380px]:w-[210px] h-[52px] items-center justify-between rounded-[40px] bg-olive pl-6 pr-2"
            >
              <span className="text-[15px] font-semibold text-white">
                View my Portfolio
              </span>
              <span className="arrow flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white text-gold flex-shrink-0">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="flex w-full max-w-[280px] min-[380px]:w-[210px] h-[52px] items-center justify-center rounded-[40px] border-[1.5px] border-[#d8d6cb] bg-transparent font-sans text-[15px] font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* RIGHT: portrait */}
        <div className="relative mx-auto h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] lg:h-[540px] lg:w-[540px] max-w-full animate-omUp [animation-delay:150ms]">
          <div className="absolute right-[6%] top-[6%] h-[84%] w-[84%] rounded-full bg-gold" />
          <div className="absolute right-[3%] top-[3%] h-[90%] w-[90%] overflow-hidden rounded-full">
            <ImageSlot
              shape="circle"
              src={personal.heroImage}
              placeholder={personal.name}
              priority
              sizes="(max-width: 768px) 90vw, 500px"
            />
          </div>
        </div>
      </div>


      {/* <Marquee bg="#188bf6" color="#ffffff" padding="16px 0" /> */}

      {/* SERVICES */}
      <div id="services" className="mx-auto my-20 md:my-28 max-w-[1120px] scroll-mt-[90px] px-5 md:px-10">
        <div className="mb-8">
          <div className="mb-2 text-[14px] font-semibold text-gold tracking-wider uppercase">Services</div>
          <h2 className="m-0 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-ink leading-tight">
            <span className="italic text-gold">Services</span> I Provide
          </h2>
        </div>
        <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
          {services.map((s, i) => (
            <div
              key={i}
              data-card="16"
              className="flex flex-col gap-4 rounded-[16px] bg-cream px-[26px] py-7"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[14px] bg-white text-gold">
                <Icon name={s.icon} className="h-7 w-7" />
              </div>
              <h3 className="m-0 text-[19px] font-bold">{s.title}</h3>
              <p className="m-0 text-[13.5px] leading-[1.65] text-[#7a7a6e]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT ME */}
      <div id="about" className="py-20 md:py-28 my-10 md:my-16 scroll-mt-[90px] bg-white px-5 md:px-10 text-ink">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 lg:grid-cols-[420px_1fr] lg:gap-[60px]">
          <div className="relative mx-auto h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px] max-w-full">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <ImageSlot
                shape="circle"
                src={personal.profileImage}
                placeholder={personal.name}
                sizes="(max-width: 768px) 300px, 420px"
              />
            </div>
          </div>
          <div>
            <div className="mb-[10px] text-[14px] font-semibold text-gold tracking-wider uppercase">
              About Me
            </div>
            <h2 className="mb-4 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-ink leading-tight">
              Who is <span className="italic text-gold">{personal.name}?</span>
            </h2>
            <p className="mb-6 max-w-[540px] text-[14px] leading-relaxed text-[#5a6474]">
              {about.paragraphs[0]}
            </p>
            <ul className="mb-8 grid max-w-[560px] grid-cols-1 gap-x-6 gap-y-[13px] sm:grid-cols-2">
              {(about.highlights ?? []).map((h, i) => (
                <li key={i} className="flex items-start gap-[10px]">
                  <span className="mt-[2px] flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-[13.5px] font-medium leading-[1.45] text-[#4a4a3e]">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">
              <a
                href="/resume/Nehal Google Ads CV _ Resume.pdf"
                download="Nehal Google Ads CV & Resume.pdf"
                className="cta flex items-center gap-2 rounded-[40px] bg-gold py-[6px] pl-6 pr-2 text-white hover:opacity-95 transition-opacity"
              >
                <span className="text-[15px] font-semibold text-white">
                  Download CV
                </span>
                <span className="arrow flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-gold">
                  ↓
                </span>
              </a>
              <span className="text-[24px] sm:text-[26px] italic text-ink opacity-[.85] font-display self-start sm:self-auto">
                {personal.signature || personal.name}
              </span>
            </div>
          </div>
        </div>

        <StatsStrip inverted className="mx-auto mt-14 max-w-[1120px]" />
      </div>

      {/* MY PRINCIPLES */}
      <div className="bg-olive px-5 py-20 md:px-10 md:py-28 text-white">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-10 text-center">
            <div className="mb-2 text-[14.5px] font-semibold text-[#dbeafe] tracking-wider uppercase">Methodology</div>
            <h2 className="m-0 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-white leading-tight">
              My <span className="italic">Core Principles</span>
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
      <div className="bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-12 text-center">
            <div className="mb-2 text-[14px] font-semibold text-gold tracking-wider uppercase">Timeline</div>
            <h2 className="m-0 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-ink leading-tight">
              My Career <span className="italic text-gold">Journey</span>
            </h2>
          </div>

          <JourneyTimeline items={milestones} />
        </div>
      </div>

      {/* SKILLS */}
      <div className="mx-auto max-w-[1120px] px-5 md:px-10 py-16 md:py-24 text-center">
        <div className="mb-2 text-[14px] font-semibold text-gold tracking-wider uppercase">My Toolkit</div>
        <h2 className="mb-9 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-ink leading-tight">
          <span className="italic text-gold">The Skills &amp; Tools</span>
          <br />
          Behind My Campaigns
        </h2>
        <div data-stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-8">
          {tools.map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="flex h-[64px] w-[64px] items-center justify-center mb-1">
                {toolIcons[t.name] || <span className="text-[18px] font-extrabold text-[#7a7a6e]">{t.mark}</span>}
              </div>
              <div className="text-[24px] font-extrabold text-ink">{t.pct}</div>
              <div className="text-[13.5px] font-medium text-[#5a6474]">{t.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PORTFOLIO */}
      <div id="projects" className="scroll-mt-[90px] bg-cream px-5 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-8">
            <div className="mb-2 text-[14px] font-semibold text-gold tracking-wider uppercase">
              Case Studies
            </div>
            <h2 className="m-0 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-ink leading-tight">
              My Latest <span className="italic text-gold">Results</span>
            </h2>
          </div>
          <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {projects.filter((p) => p.details).slice(0, 6).map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
          <div className="mt-11 flex justify-center">
            <Link
              href="/projects"
              className="cta flex items-center gap-2 rounded-[40px] bg-olive py-[8px] pl-7 pr-2"
            >
              <span className="text-[15px] font-semibold text-white">
                View All Projects
              </span>
              <span className="arrow flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white text-gold">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* INDUSTRIES */}
      <NichesExplorer />

      {/* PRICING (Disabled for now) */}
      {/* 
      <div className="bg-white px-5 md:px-10 py-[60px] text-ink">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-9 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
            <div>
              <div className="mb-2 text-[14px] font-semibold text-gold">Pricing</div>
              <h2 className="m-0 text-[26px] md:text-[34px] font-extrabold">
                My <span className="italic text-gold">Management Plans</span>
              </h2>
            </div>
            <a href="#contact" className="cta flex cursor-pointer items-center gap-2 rounded-[40px] bg-gold py-[6px] pl-[22px] pr-2">
              <span className="text-[14px] font-semibold text-white">Get Started</span>
              <span className="arrow flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-gold">
                →
              </span>
            </a>
          </div>
          <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
            {pricing.map((pr, i) => (
              <div
                key={i}
                className="rounded-[18px] border border-[#e9edf3] px-[26px] py-[30px] transition-transform duration-300 hover:-translate-y-1.5"
                style={{ background: pr.bg }}
              >
                <div className="mb-[18px] flex items-center justify-between">
                  <span
                    className="rounded-[20px] px-4 py-[5px] text-[13px] font-semibold"
                    style={{ background: pr.tagBg, color: pr.tagFg }}
                  >
                    {pr.plan}
                  </span>
                  <span
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full"
                    style={{ background: pr.arrowBg, color: pr.arrowFg }}
                  >
                    ↗
                  </span>
                </div>
                <div
                  className="mb-6 text-[28px] md:text-[40px] font-extrabold"
                  style={{ color: pr.priceColor }}
                >
                  {pr.price}
                  <span
                    className="text-[15px] font-semibold"
                    style={{ color: pr.unitColor }}
                  >
                    {pr.unit}
                  </span>
                </div>
                <div className="flex flex-col gap-[13px]">
                  {pr.features.map((f, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-[10px] text-[13px]"
                      style={{ color: pr.featColor }}
                    >
                      <span
                        className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full text-[11px]"
                        style={{ background: pr.checkBg, color: pr.checkFg }}
                      >
                        ✓
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}

      <div id="contact" className="scroll-mt-[90px]">
        <ContactSection
          highlight="Your Next Campaign"
          intro="Tell me about your business and goals. I will show you how Google Ads can turn spend into revenue."
          spacing="home"
        />
      </div>

      {/* TESTIMONIALS */}
      <div id="testimonials" className="mx-auto my-20 md:my-28 max-w-[1240px] scroll-mt-[90px] px-5 md:px-10 text-center">
        <div className="mb-2 text-[14px] font-semibold text-gold tracking-wider uppercase">
          Clients Testimonials
        </div>
        <h2 className="mb-9 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-ink leading-tight">
          The Impact of My Work:
          <br />
          <span className="italic text-gold">Client Testimonials</span>
        </h2>
        <TestimonialsCarousel items={homeTestimonials} />
      </div>



      {/* FAQ */}
      <div className="bg-olive px-5 md:px-10 py-20 md:py-28 text-white">
        <div className="mx-auto max-w-[860px]">
          <div className="mb-10 text-center">
            <div className="mb-2 text-[14px] font-semibold text-[#dbeafe] tracking-wider uppercase">FAQs</div>
            <h2 className="m-0 text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-white leading-tight">
              Questions? <span className="italic">Look here.</span>
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </div>

      {/* <Marquee bg="#188bf6" color="#ffffff" padding="15px 0" /> */}

      <LetsConnect />
      <Footer />
      <Copyright />
    </ClientEnhance>
  );
}
