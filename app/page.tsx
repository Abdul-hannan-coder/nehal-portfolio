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
import Icon from "@/components/Icon";
import {
  servicesTop,
  stats,
  tools,
  portfolio,
  leadGen,
  ecommerce,
  pricing,
  homeTestimonials,
  faqs,
  personal,
  about,
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
      <div className="mx-auto mt-5 grid max-w-[1180px] grid-cols-1 items-center gap-[30px] px-5 pb-10 pt-[30px] md:px-10 lg:grid-cols-2">
        <div className="animate-omUp">
          <div className="mb-[22px] inline-flex items-center gap-2 rounded-[30px] bg-[#eaf2fd] px-4 py-[7px] text-[13px] font-semibold text-[#5a5a4e]">
            {personal.tagline}
          </div>
          <h1 className="mb-[18px] text-[32px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.12]">
            I&rsquo;m <span className="italic text-gold">{personal.name},</span>
            <br />
            {personal.title}
          </h1>
          <p className="mb-7 max-w-[440px] text-[14.5px] leading-[1.7] text-[#6f6f63]">
            {personal.subtitle}
          </p>
          <div className="flex items-center gap-[14px]">
            <Link
              href="/project-details"
              className="cta flex items-center gap-2 rounded-[40px] bg-olive py-[6px] pl-6 pr-2"
            >
              <span className="text-[15px] font-semibold text-white">
                View my Portfolio
              </span>
              <span className="arrow flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-gold">
                →
              </span>
            </Link>
            <button className="rounded-[40px] border-[1.5px] border-[#d8d6cb] bg-transparent px-7 py-[13px] font-sans text-[15px] font-semibold text-ink">
              Hire Me
            </button>
          </div>
        </div>
        <div className="relative mx-auto h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[440px] lg:w-[440px] max-w-full animate-omUp [animation-delay:150ms]">
          <div className="absolute right-[6%] top-[6%] h-[84%] w-[84%] rounded-full bg-gold" />
          <div className="absolute right-[3%] top-[3%] h-[90%] w-[90%] overflow-hidden rounded-full">
            <ImageSlot
              shape="circle"
              src={personal.heroImage}
              placeholder={personal.name}
              priority
              sizes="(max-width: 768px) 90vw, 376px"
            />
          </div>
          <div className="absolute bottom-[10%] left-0 sm:left-5 animate-floaty rounded-[30px] bg-olive px-[14px] py-[7px] sm:px-[18px] sm:py-[9px] text-[11px] sm:text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,.15)]">
            Google Ads Specialist
          </div>
          <div className="absolute right-0 sm:right-[10px] top-[25%] sm:top-[130px] animate-floaty rounded-[30px] bg-white px-[14px] py-[7px] sm:px-[18px] sm:py-[9px] text-[11px] sm:text-[13px] font-semibold text-ink shadow-[0_8px_20px_rgba(0,0,0,.12)] [animation-delay:1.3s]">
            PPC Coach
          </div>
        </div>
      </div>

      {/* <Marquee bg="#188bf6" color="#ffffff" padding="16px 0" /> */}

      {/* SERVICES PREVIEW */}
      <div className="mx-auto mb-5 mt-14 max-w-[1120px] px-5 md:px-10">
        <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
          <div>
            <div className="mb-2 text-[14px] font-semibold text-gold">Services</div>
            <h2 className="m-0 text-[26px] md:text-[34px] font-extrabold">
              <span className="italic text-gold">Services</span> I Provide
            </h2>
          </div>
          <Link
            href="/services"
            className="cta flex items-center gap-2 rounded-[40px] bg-olive py-[7px] pl-[22px] pr-2"
          >
            <span className="text-[14px] font-semibold text-white">
              View All Services
            </span>
            <span className="arrow flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-gold">
              →
            </span>
          </Link>
        </div>
        <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px]">
          {servicesTop.map((s, i) => (
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
              <Link
                href="/services"
                className="group mt-[2px] inline-flex items-center gap-[7px] text-[14px] font-semibold text-gold"
              >
                Learn more <span className="arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="my-[60px] bg-white px-5 md:px-10 py-[60px] text-ink">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 lg:grid-cols-[340px_1fr] lg:gap-[60px]">
          <div className="relative mx-auto h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] max-w-full">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <ImageSlot
                shape="circle"
                src={personal.profileImage}
                placeholder={personal.name}
                sizes="(max-width: 768px) 260px, 300px"
              />
            </div>
            <span className="absolute right-[-5px] sm:right-[-10px] top-[14px] animate-floaty rounded-[20px] bg-gold px-3 py-[5px] text-[11px] font-semibold text-white">
              Google Ads
            </span>
            <span className="absolute bottom-[60px] left-[-10px] sm:left-[-20px] animate-floaty rounded-[20px] border border-[#dbe7f5] bg-white px-3 py-[5px] text-[11px] font-semibold text-olive shadow-sm [animation-delay:.8s]">
              PPC Expert
            </span>
            <span className="absolute bottom-[6px] right-5 animate-floaty rounded-[20px] border border-[#dbe7f5] bg-white px-3 py-[5px] text-[11px] font-semibold text-olive shadow-sm [animation-delay:1.6s]">
              Ads Coach
            </span>
          </div>
          <div>
            <div className="mb-[10px] text-[14px] font-semibold text-gold">
              About Me
            </div>
            <h2 className="mb-4 text-[24px] md:text-[32px] font-extrabold">
              Who is <span className="italic text-gold">{personal.name}?</span>
            </h2>
            <p className="mb-7 max-w-[540px] text-[14px] leading-[1.7] text-[#5a6474]">
              {about.paragraphs.join(" ")}
            </p>
            <div className="mb-[30px] flex flex-wrap gap-8 sm:gap-10">
              {stats.map((st, i) => (
                <div key={i}>
                  <div className="text-[26px] md:text-[34px] font-extrabold text-gold">{st.num}</div>
                  <div className="text-[13px] text-[#6b7280]">{st.label}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <div className="cta flex cursor-pointer items-center gap-2 rounded-[40px] bg-gold py-[6px] pl-6 pr-2">
                <span className="text-[15px] font-semibold text-white">
                  Download CV
                </span>
                <span className="arrow flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-gold">
                  ↓
                </span>
              </div>
              <span className="text-[26px] italic text-ink opacity-[.85]">
                {personal.signature || personal.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="mx-auto max-w-[1120px] px-5 md:px-10 pb-10 pt-5 text-center">
        <div className="mb-2 text-[14px] font-semibold text-gold">My Toolkit</div>
        <h2 className="mb-9 text-[24px] md:text-[32px] font-extrabold">
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
      <div className="bg-cream px-5 md:px-10 py-14">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
            <div>
              <div className="mb-2 text-[14px] font-semibold text-gold">
                Case Studies
              </div>
              <h2 className="m-0 text-[26px] md:text-[34px] font-extrabold">
                My Latest <span className="italic text-gold">Results</span>
              </h2>
            </div>
            <Link
              href="/project-details"
              className="cta flex items-center gap-2 rounded-[40px] bg-olive py-[7px] pl-[22px] pr-2"
            >
              <span className="text-[14px] font-semibold text-white">
                View All Projects
              </span>
              <span className="arrow flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-gold">
                →
              </span>
            </Link>
          </div>
          <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {portfolio.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                data-card="16"
                className="group block rounded-[16px] bg-white p-4 text-inherit"
              >
                <div className="relative mb-4 h-[210px] overflow-hidden rounded-[12px]">
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
                <h4 className="mb-[14px] mt-0 text-[18px] font-bold leading-[1.35]">
                  {p.title}
                </h4>
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
        </div>
      </div>

      {/* INDUSTRIES */}
      <div className="mx-auto my-[60px] max-w-[1000px] px-5 md:px-10">
        <div className="mb-10 text-center">
          <div className="mb-2 text-[14px] font-semibold text-gold">Industries</div>
          <h2 className="m-0 text-[24px] md:text-[32px] font-extrabold">
            The Niches <span className="italic text-gold">I Scale</span>
          </h2>
        </div>
        <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-[34px]">
          <div className="rounded-[16px] bg-cream p-[30px]">
            <div className="mb-[22px] flex items-center gap-3">
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-gold text-white">
                <Icon name="target" className="h-5 w-5" />
              </span>
              <h3 className="m-0 text-[20px] font-bold">Lead Generation</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[18px] gap-y-3">
              {leadGen.map((l, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[9px] text-[13px] text-[#4a4a3e]"
                >
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gold text-[9px] text-white">
                    ✓
                  </span>
                  {l}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[16px] bg-cream p-[30px]">
            <div className="mb-[22px] flex items-center gap-3">
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-gold text-white">
                <Icon name="shopping-bag" className="h-5 w-5" />
              </span>
              <h3 className="m-0 text-[20px] font-bold">E-commerce Brands</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[18px] gap-y-3">
              {ecommerce.map((e, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[9px] text-[13px] text-[#4a4a3e]"
                >
                  <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gold text-[9px] text-white">
                    ✓
                  </span>
                  {e}
                </div>
              ))}
            </div>
            <div className="mt-[22px] rounded-[12px] bg-olive px-5 py-[18px] text-white">
              <div className="mb-1 text-[13px] text-[#dbeafe]">
                Recent e-commerce win
              </div>
              <div className="text-[15px] font-bold">
                $250,000+ in sales for a U.S. renovation products brand.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="bg-white px-5 md:px-10 py-[60px] text-ink">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-9 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
            <div>
              <div className="mb-2 text-[14px] font-semibold text-gold">Pricing</div>
              <h2 className="m-0 text-[26px] md:text-[34px] font-extrabold">
                My <span className="italic text-gold">Management Plans</span>
              </h2>
            </div>
            <div className="cta flex cursor-pointer items-center gap-2 rounded-[40px] bg-gold py-[6px] pl-[22px] pr-2">
              <span className="text-[14px] font-semibold text-white">Get Started</span>
              <span className="arrow flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-gold">
                →
              </span>
            </div>
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

      <ContactSection
        highlight="Your Next Campaign"
        intro="Tell me about your business and goals. I will show you how Google Ads can turn spend into revenue."
        spacing="home"
      />

      {/* TESTIMONIALS */}
      <div className="mx-auto my-[60px] max-w-[1000px] px-5 md:px-10 text-center">
        <div className="mb-2 text-[14px] font-semibold text-gold">
          Clients Testimonials
        </div>
        <h2 className="mb-9 text-[24px] md:text-[32px] font-extrabold">
          The Impact of My Work:
          <br />
          <span className="italic text-gold">Client Testimonials</span>
        </h2>
        <div data-stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-[900px] mx-auto">
          {/* Top Video (Centered & Spans 2 Columns on desktop) */}
          {homeTestimonials[0] && (
            <div className="md:col-span-2 flex justify-center">
              <div
                data-card="16"
                className="w-full max-w-[560px] rounded-[16px] bg-cream p-5 flex flex-col justify-between shadow-sm border border-[#e8ebd5]"
              >
                <div>
                  <div className="mb-[14px] flex items-center gap-[10px]">
                    <span className="text-[15px] tracking-[2px] text-gold">★★★★★</span>
                    <span className="font-extrabold text-ink">5.0</span>
                  </div>
                  <video
                    src={homeTestimonials[0].videoSrc}
                    controls
                    className="w-full aspect-video rounded-[10px] bg-black object-cover mb-4 shadow-sm"
                  />
                </div>
                <div className="flex items-center gap-3 border-t border-[#e2e1d7] pt-3 mt-1">
                  <div>
                    <div className="text-[14px] font-bold text-ink">{homeTestimonials[0].name}</div>
                    <div className="text-[12px] text-[#8a8a7e]">{homeTestimonials[0].role}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Two Videos (Side-by-side on desktop) */}
          {homeTestimonials.slice(1, 3).map((t) => (
            <div
              key={t.id}
              data-card="16"
              className="w-full rounded-[16px] bg-cream p-5 flex flex-col justify-between shadow-sm border border-[#e8ebd5]"
            >
              <div>
                <div className="mb-[14px] flex items-center gap-[10px]">
                  <span className="text-[15px] tracking-[2px] text-gold">★★★★★</span>
                  <span className="font-extrabold text-ink">5.0</span>
                </div>
                <video
                  src={t.videoSrc}
                  controls
                  className="w-full aspect-video rounded-[10px] bg-black object-cover mb-4 shadow-sm"
                />
              </div>
              <div className="flex items-center gap-3 border-t border-[#e2e1d7] pt-3 mt-1">
                <div>
                  <div className="text-[14px] font-bold text-ink">{t.name}</div>
                  <div className="text-[12px] text-[#8a8a7e]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* FAQ */}
      <div className="bg-white px-5 md:px-10 py-[60px] text-ink">
        <div className="mx-auto max-w-[860px]">
          <div className="mb-10 text-center">
            <div className="mb-2 text-[14px] font-semibold text-gold">FAQs</div>
            <h2 className="m-0 text-[24px] md:text-[32px] font-extrabold">
              Questions? <span className="italic text-gold">Look here.</span>
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
