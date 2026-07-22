import Link from "next/link";
import { Dancing_Script } from "next/font/google";
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

// Handwritten script face for the About signature.
const signatureFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

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
      <div id="home" className="mx-auto mt-5 grid max-w-[1280px] scroll-mt-[90px] grid-cols-1 items-stretch gap-x-[50px] gap-y-12 px-5 pt-[36px] md:px-10 lg:grid-cols-[1.15fr_0.88fr]">
        <div className="animate-omUp">
          <div className="mb-[16px] inline-flex items-center rounded-full bg-[#eef4ff] px-[12px] py-[5px] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5c6c89] shadow-[0_2px_8px_rgba(24,139,246,.08)]">
            7+ Years of Experience
          </div>

          <h1 className="mb-[16px] max-w-[700px] text-[30px] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink min-[420px]:text-[38px] min-[500px]:text-[46px] sm:text-[54px] sm:leading-[0.95] sm:tracking-[-0.05em] lg:text-[58px]">
            I&rsquo;m <span className="text-gold">{personal.name}</span>,
            <br />
            Google Ads
            <br />
            Specialist &amp; Coach
          </h1>

          <p className="mb-6 max-w-[540px] text-[14.5px] leading-[1.75] tracking-[-0.01em] text-[#5f6879] sm:text-[16px]">
            I help businesses generate more leads, sales, and revenue through
            data-driven Google Ads strategies that scale.
          </p>

          <div className="grid max-w-[620px] grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {(personal.highlights ?? []).slice(0, 4).map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-[1px] flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-[#1f74f0] text-[12px] font-bold text-white shadow-[0_6px_14px_rgba(31,116,240,.25)]">
                  ✓
                </span>
                <span className="max-w-[220px] text-[13px] font-medium leading-[1.45] tracking-[-0.01em] text-[#3f4958] sm:text-[13.5px]">
                  {i === 0
                    ? "Google Certified Ads Specialist"
                    : i === 1
                    ? "Performance Max, Shopping & Search Ads Expert"
                    : i === 2
                    ? "$5M+ revenue generated for clients"
                    : "300K+ marketers reached through coaching"}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-[14px]">
            <a
              href="#projects"
              className="cta flex h-[50px] w-full max-w-[230px] items-center justify-between rounded-[40px] bg-[#1f74f0] pl-5 pr-2 shadow-[0_10px_24px_rgba(31,116,240,.28)] transition-transform hover:-translate-y-0.5 min-[380px]:w-[225px]"
            >
              <span className="text-[13.5px] font-semibold tracking-[-0.01em] text-white">
                View My Portfolio
              </span>
              <span className="arrow flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full bg-white text-[#1f74f0]">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="flex h-[50px] w-full max-w-[160px] items-center justify-center rounded-[40px] border border-[#e6e8ee] bg-white px-5 font-sans text-[13.5px] font-semibold tracking-[-0.01em] text-ink shadow-[0_8px_20px_rgba(16,24,40,.04)] transition-transform hover:-translate-y-0.5 min-[380px]:w-[160px]"
            >
              Hire Me
            </a>
          </div>

          <div className="mt-7 max-w-[700px] rounded-[20px] border border-[#edf1f7] bg-white px-4 py-3.5 shadow-[0_12px_34px_rgba(16,24,40,.08)] sm:px-6 sm:py-4">
            <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4 md:gap-0 md:divide-x md:divide-[#edf1f7]">
              <div className="flex items-center gap-2.5 md:pr-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f7ff] text-[20px]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path fill="#EA4335" d="M12 10.2v3.8h5.3c-.2 1.3-1.6 3.8-5.3 3.8-3.2 0-5.8-2.6-5.8-5.8S8.8 6.2 12 6.2c1.8 0 3 .8 3.7 1.5l2.5-2.5C16.7 3.8 14.6 3 12 3 7 3 3 7 3 12s4 9 9 9c5.2 0 8.7-3.7 8.7-8.8 0-.6-.1-1.1-.2-1.6H12z"/>
                  </svg>
                </span>
                <div>
                  <div className="text-[12px] font-semibold tracking-[-0.01em] text-[#253046]">Google Partner</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 md:px-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f7ff] text-[20px]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path fill="#4285F4" d="M2 5.5L9.7 13 2 20.5h4.5L13.9 13 6.5 5.5z"/>
                    <path fill="#34A853" d="M10.2 5.5L18 13l-7.8 7.5H15L22.5 13 15 5.5z"/>
                  </svg>
                </span>
                <div>
                  <div className="text-[12px] font-semibold tracking-[-0.01em] text-[#253046]">Google Ads</div>
                  <div className="text-[11px] text-[#6b7280]">Certified</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 md:px-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f7ff] text-[20px]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <rect x="3" y="6" width="18" height="12" rx="3" fill="#FF0000" />
                    <path d="M10 9.5v5l4.5-2.5z" fill="#fff" />
                  </svg>
                </span>
                <div>
                  <div className="text-[12px] font-semibold tracking-[-0.01em] text-[#253046]">300K+</div>
                  <div className="text-[11px] text-[#6b7280]">YouTube Views</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 md:pl-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f7ff] text-[20px]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path fill="#1f74f0" d="M12 2 4 5v6c0 5.5 3.7 10.5 8 11 4.3-.5 8-5.5 8-11V5l-8-3zm0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
                  </svg>
                </span>
                <div>
                  <div className="text-[12px] font-semibold tracking-[-0.01em] text-[#253046]">7+</div>
                  <div className="text-[11px] text-[#6b7280]">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: portrait & floating stat cards */}
        <div className="relative mx-auto flex min-h-[500px] w-full max-w-[640px] items-end justify-center animate-omUp [animation-delay:150ms] sm:min-h-[600px]">
          {/* Soft background glow & radial accents */}
          <div className="pointer-events-none absolute right-[5%] top-[5%] h-[90%] w-[90%] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.22)_0%,_rgba(219,234,254,0.4)_40%,_transparent_75%)] blur-xl" />
          <div className="pointer-events-none absolute right-[8%] top-[8%] h-[82%] w-[78%] rounded-full border border-blue-100/60 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
          <div className="pointer-events-none absolute right-[0%] top-[18%] h-[200px] w-[120px] opacity-30 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:14px_14px]" />

          {/* Main Subject - Nehal transparent cutout portrait (bottom fades out
              so the flat chest crop never shows a hard line) */}
          <img
            src="/nehal-cutout.png"
            alt={personal.name}
            className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[92%] w-auto max-w-full -translate-x-1/2 object-contain object-bottom [-webkit-mask-image:linear-gradient(to_bottom,#000_86%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_86%,transparent_100%)]"
          />

          {/* Card 1: Conversions (Top Right) */}
          <div className="absolute right-[0%] sm:right-[2%] top-[2%] z-20 hidden items-center justify-between sm:flex gap-2.5 sm:gap-3 rounded-[18px] border border-[#edf2f7] bg-white/95 px-3 py-2 sm:px-[14px] sm:py-2.5 shadow-[0_12px_32px_rgba(16,24,40,0.08)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex flex-col">
              <span className="text-[9.5px] sm:text-[10.5px] font-medium text-[#667085]">Conversions</span>
              <span className="mt-0.5 text-[16px] sm:text-[19px] font-extrabold tracking-tight text-[#101828]">1.27K</span>
              <span className="mt-0.5 text-[11px] font-semibold text-[#16a34a] flex items-center gap-0.5">
                <span>▲</span> 45.6%
              </span>
            </div>
            <div className="h-6 w-11 sm:h-7 sm:w-[52px] flex items-center justify-end">
              <svg className="h-full w-full text-[#3b82f6]" viewBox="0 0 60 30" fill="none">
                <defs>
                  <linearGradient id="spark-blue-1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 2 24 Q 15 22 25 14 T 42 10 T 58 4 L 58 30 L 2 30 Z" fill="url(#spark-blue-1)" />
                <path d="M 2 24 Q 15 22 25 14 T 42 10 T 58 4" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Card 2: Google Ads Logo Card (Middle Left) */}
          <div className="absolute left-[2%] sm:left-[6%] top-[20%] z-20 hidden h-[64px] w-[64px] items-center justify-center rounded-[20px] border border-[#edf2f7] bg-white/95 p-3 shadow-[0_12px_32px_rgba(16,24,40,0.08)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] sm:flex sm:h-[80px] sm:w-[80px] sm:p-4">
            <img src="/icons/google-ads.svg" alt="Google Ads" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
          </div>

          {/* Card 3: ROAS (Middle Right) */}
          <div className="absolute right-[0%] sm:right-[2%] top-[28%] z-20 hidden items-center justify-between sm:flex gap-2.5 sm:gap-3 rounded-[18px] border border-[#edf2f7] bg-white/95 px-3 py-2 sm:px-[14px] sm:py-2.5 shadow-[0_12px_32px_rgba(16,24,40,0.08)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex flex-col">
              <span className="text-[9.5px] sm:text-[10.5px] font-medium text-[#667085]">ROAS</span>
              <span className="mt-0.5 text-[16px] sm:text-[19px] font-extrabold tracking-tight text-[#101828]">458%</span>
              <span className="mt-0.5 text-[11px] font-semibold text-[#16a34a] flex items-center gap-0.5">
                <span>▲</span> 62.3%
              </span>
            </div>
            <div className="h-6 w-11 sm:h-7 sm:w-[52px] flex items-center justify-end">
              <svg className="h-full w-full text-[#22c55e]" viewBox="0 0 60 30" fill="none">
                <defs>
                  <linearGradient id="spark-green-1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 2 26 Q 15 20 28 22 T 45 12 T 58 6 L 58 30 L 2 30 Z" fill="url(#spark-green-1)" />
                <path d="M 2 26 Q 15 20 28 22 T 45 12 T 58 6" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Card 4: Revenue (Lower Middle Right) */}
          <div className="absolute right-[0%] sm:right-[2%] top-[54%] z-20 hidden items-center justify-between sm:flex gap-2.5 sm:gap-3 rounded-[18px] border border-[#edf2f7] bg-white/95 px-3 py-2 sm:px-[14px] sm:py-2.5 shadow-[0_12px_32px_rgba(16,24,40,0.08)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex flex-col">
              <span className="text-[9.5px] sm:text-[10.5px] font-medium text-[#667085]">Revenue</span>
              <span className="mt-0.5 text-[16px] sm:text-[19px] font-extrabold tracking-tight text-[#101828]">$250K+</span>
              <span className="mt-0.5 text-[11px] font-semibold text-[#16a34a] flex items-center gap-0.5">
                <span>▲</span> 78.4%
              </span>
            </div>
            <div className="h-6 w-11 sm:h-7 sm:w-[52px] flex items-center justify-end">
              <svg className="h-full w-full text-[#3b82f6]" viewBox="0 0 60 30" fill="none">
                <defs>
                  <linearGradient id="spark-blue-2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 2 24 Q 16 18 28 20 T 44 10 T 58 4 L 58 30 L 2 30 Z" fill="url(#spark-blue-2)" />
                <path d="M 2 24 Q 16 18 28 20 T 44 10 T 58 4" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Card 5: Leads (Bottom Right) */}
          <div className="absolute right-[4%] sm:right-[7%] top-[78%] z-20 hidden items-center justify-between sm:flex gap-2.5 sm:gap-3 rounded-[18px] border border-[#edf2f7] bg-white/95 px-3 py-2 sm:px-[14px] sm:py-2.5 shadow-[0_12px_32px_rgba(16,24,40,0.08)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex flex-col">
              <span className="text-[9.5px] sm:text-[10.5px] font-medium text-[#667085]">Leads</span>
              <span className="mt-0.5 text-[16px] sm:text-[19px] font-extrabold tracking-tight text-[#101828]">2.3K</span>
              <span className="mt-0.5 text-[11px] font-semibold text-[#16a34a] flex items-center gap-0.5">
                <span>▲</span> 55.2%
              </span>
            </div>
            <div className="h-6 w-11 sm:h-7 sm:w-[52px] flex items-center justify-end">
              <svg className="h-full w-full text-[#3b82f6]" viewBox="0 0 60 30" fill="none">
                <defs>
                  <linearGradient id="spark-blue-3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 2 25 Q 14 20 26 22 T 42 12 T 58 5 L 58 30 L 2 30 Z" fill="url(#spark-blue-3)" />
                <path d="M 2 25 Q 14 20 26 22 T 42 12 T 58 5" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
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
      <div
        id="about"
        className="scroll-mt-[90px] bg-gradient-to-b from-[#f7faff] to-white px-5 py-20 text-ink md:px-10 md:py-28"
      >
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-[460px_1fr] lg:gap-[70px]">
          {/* LEFT: cutout portrait on orbit-ring gradient + floating badge */}
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="relative aspect-square">
              {/* Orbit ring + node */}
              <div className="absolute inset-0 rounded-full border-[1.5px] border-[#d9e6fb]" />
              <div className="absolute right-[9%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#1f74f0] shadow-[0_0_0_5px_rgba(31,116,240,.14)]" />
              {/* Gradient fill circle with the portrait */}
              <div className="absolute inset-[6%] overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_30%,#dcebfe_0%,#eaf3ff_58%,#f5f9ff_100%)]">
                <img
                  src="/nehal-cutout.png"
                  alt={personal.name}
                  className="pointer-events-none absolute bottom-0 left-1/2 h-[97%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
                />
              </div>
            </div>
            {/* Floating credential badge */}
            <div className="absolute -bottom-3 left-0 z-10 flex items-center gap-2.5 rounded-2xl border border-[#eef2f8] bg-white px-4 py-3 shadow-[0_18px_44px_rgba(16,24,40,.16)] sm:-left-4">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#1f74f0]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5z" fill="#fff" stroke="none" />
                  <path d="m9 12 2 2 4-4" stroke="#1f74f0" />
                </svg>
              </span>
              <div className="text-[12.5px] font-bold leading-tight text-ink">
                Google Certified
                <br />
                Ads Specialist
              </div>
            </div>
          </div>

          {/* RIGHT: copy */}
          <div>
            <div className="inline-flex items-center rounded-full bg-[#eef4ff] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3f6fd8]">
              About Me
            </div>
            <h2 className="mt-4 text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[34px] md:text-[40px]">
              Who is <span className="text-gold">{personal.name}?</span>
            </h2>
            <div className="mb-6 mt-4 flex items-center gap-2">
              <span className="h-[3px] w-14 rounded-full bg-gold" />
              <span className="h-[3px] w-[3px] rounded-full bg-gold/60" />
            </div>
            <p className="mb-7 max-w-[560px] text-[14.5px] leading-[1.75] text-[#5a6474]">
              {about.paragraphs[0]}
            </p>
            <ul className="mb-9 grid max-w-[600px] grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {(about.highlights ?? []).map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[1px] flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-[#1f74f0] text-[12px] font-bold text-white shadow-[0_6px_14px_rgba(31,116,240,.25)]">
                    ✓
                  </span>
                  <span className="text-[13.5px] font-medium leading-[1.45] text-[#3f4958]">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="/resume/Nehal Google Ads CV _ Resume.pdf"
                download="Nehal Google Ads CV & Resume.pdf"
                className="cta flex h-[52px] items-center gap-2 rounded-[40px] bg-[#1f74f0] pl-6 pr-2 text-white shadow-[0_12px_26px_rgba(31,116,240,.3)] transition-transform hover:-translate-y-0.5"
              >
                <span className="text-[14.5px] font-semibold">Download CV</span>
                <span className="arrow flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white text-[#1f74f0]">
                  ↓
                </span>
              </a>
              <div className="flex items-center gap-5">
                <span className="hidden h-8 w-px bg-[#e3e8f0] sm:block" />
                <span
                  className={`${signatureFont.className} text-[30px] leading-none text-ink sm:text-[34px]`}
                >
                  {personal.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        <StatsStrip inverted className="mx-auto mt-16 max-w-[1180px]" />
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
