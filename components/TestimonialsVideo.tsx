"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

type VItem = {
  vimeoId: string;
  /** Aspect ratio (w/h) of the source video, used to cover-fill the card. */
  aspect: number;
  poster: string;
  brand: string;
  quote: string;
  name: string;
  company: string;
};

// Streamed from Vimeo (same hosted clips the carousel uses) so they work on
// Vercel — the local .mp4 originals are 80-140MB each and git-ignored, so they
// never deploy.
const items: VItem[] = [
  {
    vimeoId: "1211649839",
    aspect: 1.7778,
    poster: "/projects/video-posters/qamar.jpg",
    brand: "The Green Dumpster",
    quote:
      "From $16 CPL to $7 CPL in just 60 days. Incredible results and communication!",
    name: "Qamar Toor",
    company: "The Green Dumpster",
  },
  {
    vimeoId: "1211637724",
    aspect: 0.5667,
    poster: "/projects/video-posters/dustin.jpg",
    brand: "All Site Rentals",
    quote:
      "Nehal transformed our Google Ads completely. Leads increased by 4X at a lower cost.",
    name: "Dustin Bradley",
    company: "All Site Rentals",
  },
  {
    vimeoId: "1211650298",
    aspect: 1.7778,
    poster: "/projects/video-posters/waqas.jpg",
    brand: "Ahmed Solutions",
    quote:
      "Our ROAS improved by 380%. Highly recommend Nehal for any business.",
    name: "Waqas",
    company: "Ahmed Solutions Agency",
  },
];

const recommendations = [
  {
    name: "Qamar Toor",
    link: "https://www.linkedin.com/in/qamartoor?trk=public_profile_recommendations",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGKtW45spPcEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718300284504?e=2147483647&v=beta&t=8zkG6MM_CX_p3mcoplf0Xhtrx_J61Bf5LK7ZokCFFFA",
    text:
      "“I had the pleasure of working with Nehal on our dental clinic's marketing campaign. He quickly identified significant issues with our previous campaigns that were not producing results. Nehal's expertise in Google PPC was impressive, and his ability to develop a winning strategy was remarkable. He not only established all the necessary tracking and custom triggers to monitor our campaign but the leads and conversions we received were outstanding. If you want to enhance your business lead generation, I highly recommend Nehal.”",
  },
  {
    name: "Usman Sajjad",
    link: "https://pk.linkedin.com/in/usman-sajjad-google-ads-ppc-specialist?trk=public_profile_recommendations",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGMDHcRXeQtpQ/profile-displayphoto-scale_400_400/B4DZhWDw8.GkAg-/0/1753790485669?e=2147483647&v=beta&t=4yRG1WUeEInENRQok0S8auoM-Bl9Fdh0p-RIP_aH8Q0",
    text:
      "“I would recommend Nehal Ahmed for having a deep understanding of the Google Ads platform and is always up-to-date on the latest features and best practices.”",
  },
];

const LinkedInIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="#0A66C2" className={className} aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

function VideoCard({ t }: { t: VItem }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-[22px] border border-[#eef1f6] bg-white shadow-[0_4px_14px_rgba(16,24,40,.05)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#41505f] to-[#141d2b]">
        {playing ? (
          // Scale the iframe so the video COVERS the 4:3 card (no letterbox
          // bars), the way the old testimonials filled their frame.
          <iframe
            src={`https://player.vimeo.com/video/${t.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={
              t.aspect >= 4 / 3
                ? { height: "100%", width: `${(t.aspect / (4 / 3)) * 100}%` }
                : { width: "100%", height: `${((4 / 3) / t.aspect) * 100}%` }
            }
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title={`${t.name} testimonial`}
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.poster}
              alt={`${t.name} testimonial preview`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/15" />
            <span className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-[12px] font-extrabold tracking-tight text-[#0b1f3a] shadow">
              {t.brand}
            </span>
            <button
              type="button"
              aria-label="Play testimonial"
              onClick={() => setPlaying(true)}
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1f74f0] shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur transition-transform hover:scale-105"
            >
              <Play className="ml-0.5 h-6 w-6 fill-current" />
            </button>
          </>
        )}
      </div>

      <div className="p-5 text-left sm:p-6">
        <div className="mb-2 text-[15px] tracking-[2px] text-[#FBBC05]">★★★★★</div>
        <p className="mb-4 text-[14px] leading-[1.6] text-[#3f4958]">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 border-t border-[#eef1f6] pt-4">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#1f74f0]/10 text-[13px] font-bold text-[#1f74f0]">
            {t.name.charAt(0)}
          </span>
          <div>
            <div className="text-[14px] font-bold text-[#1b2436]">{t.name}</div>
            <div className="text-[12px] text-[#8a93a5]">{t.company}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Video testimonials — same light background as the section above, video-style
// cards, working arrows that scroll the row.
export default function TestimonialsVideo() {
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-auto max-w-[1280px] px-5 md:px-10">
      <div className="mb-8 text-left">
        <div className="mb-2 text-[14px] font-semibold uppercase tracking-wider text-gold">
          Testimonials
        </div>
        <h2 className="m-0 text-[26px] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[34px]">
          What <span className="text-gold">Clients Say</span>
        </h2>
      </div>

      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="w-[86%] shrink-0 snap-start sm:w-[47%] lg:w-[calc((100%-3rem)/3)]"
          >
            <VideoCard t={t} />
          </div>
        ))}
      </div>

      {/* LinkedIn recommendations */}
      <div className="mt-14 flex items-center gap-2.5">
        <LinkedInIcon className="h-6 w-6" />
        <h3 className="m-0 text-[20px] font-extrabold tracking-[-0.02em] text-ink sm:text-[24px]">
          Recommended on LinkedIn
        </h3>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {recommendations.map((r, i) => (
          <a
            key={i}
            href={r.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-[20px] border border-[#eef1f6] bg-white p-6 shadow-[0_10px_30px_rgba(16,24,40,.06)] transition-shadow hover:shadow-[0_16px_40px_rgba(16,24,40,.12)]"
          >
            <div className="mb-4 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.image}
                alt={r.name}
                className="h-12 w-12 flex-shrink-0 rounded-full object-cover ring-2 ring-[#eef1f6]"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-[15px] font-bold text-ink">
                  {r.name}
                </div>
                <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#0A66C2]">
                  <LinkedInIcon className="h-3.5 w-3.5" /> LinkedIn Recommendation
                </div>
              </div>
              <span className="ml-auto text-[12px] font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
                View →
              </span>
            </div>
            <p className="text-[13.5px] leading-[1.75] text-[#4a5568]">{r.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
