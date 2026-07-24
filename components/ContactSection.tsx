import SelectField from "./SelectField";

export interface ContactSectionProps {
  highlight?: string;
  intro?: string;
  spacing?: "home" | "inner";
  submitAlign?: "center" | "left" | "right";
}

/* ---- inline icons ---- */
const S = (p: React.SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});
const IconPhone = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...S(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z" />
  </svg>
);
const IconMail = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...S(p)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
const IconPlay = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...S(p)}>
    <rect x="2.5" y="5" width="19" height="14" rx="4" />
    <path d="M10 9.2v5.6l4.5-2.8z" fill="currentColor" stroke="none" />
  </svg>
);
const IconPin = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...S(p)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconUser = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...S(p)}>
    <path d="M20 21a8 8 0 1 0-16 0" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconPlane = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...S(p)}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7z" />
  </svg>
);
const IconShield = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...S(p)}>
    <path d="M12 2 4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const IconLock = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...S(p)}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);
const IconCheck = (p: React.SVGProps<SVGSVGElement>) => (
  <svg {...S(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);

const contactItems = [
  { icon: <IconPhone className="h-[18px] w-[18px]" />, title: "+92 320 3469521", sub: "Call / WhatsApp" },
  { icon: <IconMail className="h-[18px] w-[18px]" />, title: "hello@nehalsolutions.com", sub: "Email Me" },

  { icon: <IconPin className="h-[18px] w-[18px]" />, title: "Serving AU, UAE, US, UK & IE", sub: "Global Client Base" },
];

const fieldBase =
  "h-[50px] w-full rounded-[12px] border border-[#e4e9f2] bg-[#fbfcfe] text-[14px] text-ink placeholder:text-[#9aa3b2] transition-all duration-200 focus:border-[#1f74f0] focus:bg-white focus:ring-4 focus:ring-[#1f74f0]/12";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-[13.5px] font-semibold text-[#253046]">
      {children} <span className="text-[#ef4444]">*</span>
    </label>
  );
}

function InputWithIcon({
  icon,
  ...props
}: { icon: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2 text-[#9aa3b2]">
        {icon}
      </span>
      <input {...props} className={`${fieldBase} pl-[42px] pr-4`} />
    </div>
  );
}

// "Contact Us" band — full reference redesign.
export default function ContactSection({ spacing = "inner" }: ContactSectionProps) {
  const pad = "py-20 md:py-28";

  return (
    <div
      id="contact"
      className={`bg-gradient-to-b from-[#f5f9ff] to-white px-5 text-ink md:px-10 ${pad}`}
    >
      <div className="mx-auto max-w-[1280px] 2xl:max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 2xl:gap-20">
          {/* LEFT */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e7f0ff] text-[#1f74f0]">
                <svg {...S({})} className="h-[18px] w-[18px]">
                  <path d="M3 17l5-5 4 4 8-8" />
                  <path d="M16 8h5v5" />
                </svg>
              </span>
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#1f74f0]">
                Let&rsquo;s Grow Together
              </span>
            </div>

            <h2 className="text-[38px] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[44px] 2xl:text-[48px]">
              Send Me a Message
              <br />
              <span className="text-[#1f74f0]">&amp; Let&rsquo;s Talk</span>
            </h2>
            <div className="mb-6 mt-5 h-[3px] w-16 rounded-full bg-[#1f74f0]" />

            <p className="mb-8 max-w-[500px] 2xl:max-w-[580px] text-[15px] 2xl:text-[16.5px] leading-[1.7] text-[#5a6474]">
              Share your goals and I&rsquo;ll show you how Google Ads can turn ad
              spend into measurable revenue.
            </p>

            <div className="flex flex-col divide-y divide-[#eef2f8] rounded-[18px] border border-[#eef2f8] bg-white/70 shadow-[0_10px_30px_rgba(16,24,40,.05)]">
              {contactItems.map((c, i) => (
                <div key={i} className="group flex items-center gap-4 px-5 py-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#1f74f0] text-white shadow-[0_8px_18px_rgba(31,116,240,.28)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    {c.icon}
                  </span>
                  <div>
                    <div className="text-[15px] font-bold leading-tight text-[#1b2436]">
                      {c.title}
                    </div>
                    <div className="mt-0.5 text-[12.5px] text-[#8a93a5]">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Confidential */}
            <div className="mt-6 flex items-center gap-4 rounded-[16px] bg-[#0b1f3a] px-5 py-4 text-white shadow-[0_16px_36px_rgba(11,31,58,.3)]">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#1f74f0] text-white">
                <IconShield className="h-[20px] w-[20px]" />
              </span>
              <div>
                <div className="text-[15px] font-bold">100% Confidential</div>
                <div className="text-[12.5px] leading-snug text-[#b9c6dc]">
                  Your information is safe with me. No spam. No sales pitch.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="rounded-[26px] border border-[#eaeef5] bg-white p-6 shadow-[0_30px_70px_rgba(16,24,40,.10)] sm:p-9">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#e7f0ff] text-[#1f74f0]">
                <IconPlane className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-[22px] font-extrabold tracking-[-0.02em] text-ink">
                  Send Me a Message
                </h3>
                <p className="text-[13.5px] text-[#7b8598]">
                  Fill out the form and I&rsquo;ll get back to you shortly.
                </p>
              </div>
            </div>
            <div className="mb-7 h-px w-full bg-[#eef1f6]" />

            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              <div>
                <Label>Your Name</Label>
                <InputWithIcon icon={<IconUser className="h-[18px] w-[18px]" />} placeholder="Ex. John Doe" />
              </div>
              <div>
                <Label>Email</Label>
                <InputWithIcon icon={<IconMail className="h-[18px] w-[18px]" />} placeholder="example@gmail.com" />
              </div>
              <div>
                <Label>Phone</Label>
                <InputWithIcon icon={<IconPhone className="h-[18px] w-[18px]" />} placeholder="Enter Phone Number" />
              </div>
              <div>
                <Label>I&rsquo;m Interested in</Label>
                <SelectField
                  label=""
                  options={["Select Service", "Google Ads Management", "Lead Generation", "E-commerce & Shopping", "PPC Coaching", "SEM Strategy", "Other"]}
                />
              </div>
              <div>
                <Label>Budget Range (USD)</Label>
                <SelectField
                  label=""
                  options={["Select Range", "Under $500", "$500 – $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000+"]}
                />
              </div>
              <div>
                <Label>Country</Label>
                <SelectField
                  label=""
                  options={["Select Country", "United States", "United Kingdom", "United Arab Emirates", "Australia", "Ireland", "Canada", "Other"]}
                />
              </div>
              <div className="sm:col-span-2">
                <Label>Your Message</Label>
                <div className="relative">
                  <textarea
                    rows={4}
                    placeholder="Tell me about your business goals…"
                    className={`${fieldBase} block h-[130px] resize-none px-4 py-3 leading-[1.6]`}
                  />
                  <span className="pointer-events-none absolute bottom-3 right-3 text-[#c2cbdb]">
                    <svg {...S({})} className="h-4 w-4">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <button className="mt-6 flex h-[56px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#1f74f0] text-[16px] font-bold text-white shadow-[0_16px_34px_rgba(31,116,240,.32)] transition-transform hover:-translate-y-0.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <IconPlane className="h-[18px] w-[18px]" />
              </span>
              Send Message
            </button>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[12.5px] font-medium text-[#5a6474]">
              <span className="flex items-center gap-1.5"><IconLock className="h-4 w-4 text-[#8a93a5]" /> No Spam</span>
              <span className="flex items-center gap-1.5"><IconShield className="h-4 w-4 text-[#1f74f0]" /> No Sales Pitch</span>
              <span className="flex items-center gap-1.5"><IconCheck className="h-4 w-4 text-[#1f74f0]" /> Just Real Strategies</span>
            </div>
          </div>
        </div>

        {/* BOTTOM credentials bar */}
        <div className="mt-8 grid grid-cols-2 items-center gap-y-6 rounded-[22px] border border-[#eaeef5] bg-white px-6 py-6 shadow-[0_12px_34px_rgba(16,24,40,.06)] sm:grid-cols-3 md:flex md:justify-between md:gap-4 md:px-8">
          <div className="flex items-center gap-3 md:border-r md:border-[#eef1f6] md:pr-6">
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <path fill="#EA4335" d="M12 10.2v3.8h5.3c-.2 1.3-1.6 3.8-5.3 3.8-3.2 0-5.8-2.6-5.8-5.8S8.8 6.2 12 6.2c1.8 0 3 .8 3.7 1.5l2.5-2.5C16.7 3.8 14.6 3 12 3 7 3 3 7 3 12s4 9 9 9c5.2 0 8.7-3.7 8.7-8.8 0-.6-.1-1.1-.2-1.6H12z" />
            </svg>
            <div className="text-[14px] font-bold leading-tight text-[#253046]">Google<br />Partner</div>
          </div>
          <div className="flex items-center gap-3 md:border-r md:border-[#eef1f6] md:px-6">
            <img src="/icons/google-ads.svg" alt="Google Ads" className="h-8 w-8" />
            <div className="text-[14px] font-bold leading-tight text-[#253046]">Google Ads<br /><span className="text-[12px] font-medium text-[#7b8598]">Certified</span></div>
          </div>
          <div className="flex items-center gap-3 md:border-r md:border-[#eef1f6] md:px-6">
            <span className="flex h-8 w-8 items-center justify-center text-[#1f74f0]"><IconUser className="h-7 w-7" /></span>
            <div><div className="text-[18px] font-extrabold leading-none text-[#101828]">250+</div><div className="text-[12px] text-[#7b8598]">Happy Clients</div></div>
          </div>
          <div className="flex items-center gap-3 md:border-r md:border-[#eef1f6] md:px-6">
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#FBBC05"><path d="m12 2 3 6.3 6.9.9-5 4.8 1.2 6.9L12 17.8 5.9 21l1.2-6.9-5-4.8 6.9-.9z" /></svg>
            <div><div className="text-[18px] font-extrabold leading-none text-[#101828]">5.0</div><div className="text-[11px] tracking-[2px] text-[#FBBC05]">★★★★★</div><div className="text-[11px] text-[#7b8598]">Google Rating</div></div>
          </div>
          <div className="flex items-center gap-3 md:border-r md:border-[#eef1f6] md:px-6">
            <svg viewBox="0 0 24 24" className="h-8 w-8"><rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000" /><path d="M10 9v6l5-3z" fill="#fff" /></svg>
            <div><div className="text-[18px] font-extrabold leading-none text-[#101828]">300K+</div><div className="text-[12px] text-[#7b8598]">YouTube Views</div></div>
          </div>
          <div className="flex items-center gap-3 md:pl-6">
            <span className="flex h-8 w-8 items-center justify-center text-[#1f74f0]">
              <svg {...S({})} className="h-7 w-7"><circle cx="12" cy="9" r="6" /><path d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8" /></svg>
            </span>
            <div><div className="text-[18px] font-extrabold leading-none text-[#101828]">7+</div><div className="text-[12px] text-[#7b8598]">Years Experience</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
