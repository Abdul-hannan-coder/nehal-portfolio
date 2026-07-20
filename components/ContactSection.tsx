import { contactInfo } from "@/lib/data";
import SelectField from "./SelectField";
import Icon from "./Icon";

export interface ContactSectionProps {
  highlight?: string;
  intro?: string;
  spacing?: "home" | "inner";
  submitAlign?: "center" | "left" | "right";
}

const fieldBase =
  "w-full rounded-[10px] border border-[#dfe4ec] bg-white px-[14px] font-sans text-[14px] text-ink placeholder:text-[#9aa3b2] transition-all duration-200 focus:border-gold focus:ring-4 focus:ring-gold/15";
const inputCls = `${fieldBase} h-[46px]`;
const labelCls = "mb-2 block text-[13px] font-medium text-[#5a6474]";

function Label({ children }: { children: React.ReactNode }) {
  return <label className={labelCls}>{children}</label>;
}

// Shared "Contact Us" band — white background, dark text, blue accents.
export default function ContactSection({
  highlight = "Your Next Campaign",
  intro = "Tell me about your business and goals. I will show you how Google Ads can turn spend into revenue.",
  spacing = "inner",
  submitAlign = "right",
}: ContactSectionProps) {
  const outer =
    spacing === "home"
      ? "bg-white px-5 md:px-10 pb-16 pt-[14px] text-ink"
      : "mt-[50px] bg-white px-5 md:px-10 py-16 text-ink";
  // CTA sits at the right of the form by default.
  const align =
    submitAlign === "center" ? "mx-auto" : submitAlign === "left" ? "" : "ml-auto";
  const submitWrap = `cta ${align} mt-[26px] flex w-max cursor-pointer items-center gap-2 rounded-[40px] bg-gold py-[8px] pl-[28px] pr-2`;

  return (
    <div id="contact" className={outer}>
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-[70px]">
        <div>
          <div className="mb-[10px] text-[14px] font-semibold text-gold">
            Contact Us
          </div>
          <h2 className="mb-[18px] text-[26px] md:text-[34px] font-extrabold leading-[1.25]">
            Let&rsquo;s Talk for <span className="italic text-gold">{highlight}</span>
          </h2>
          <p className="mb-[34px] max-w-[380px] text-[14px] leading-[1.7] text-[#5a6474]">
            {intro}
          </p>
          <div className="flex flex-col gap-[22px]">
            {contactInfo.map((ci, i) => (
              <div key={i} className="group flex items-center gap-[14px]">
                <span className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-full bg-gold text-white transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon name={ci.icon} className="h-5 w-5" />
                </span>
                <span className="text-[15px] text-ink">{ci.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] border border-[#e7ebf1] bg-white p-5 sm:p-[34px] shadow-[0_20px_60px_rgba(16,24,40,.08)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-[18px]">
            <div>
              <Label>Your Name *</Label>
              <input placeholder="Ex. John Doe" className={inputCls} />
            </div>
            <div>
              <Label>Email *</Label>
              <input placeholder="example@gmail.com" className={inputCls} />
            </div>
            <div>
              <Label>Phone *</Label>
              <input placeholder="Enter Phone Number" className={inputCls} />
            </div>
            <SelectField
              label="I'm Interested in *"
              options={[
                "Select",
                "Google Ads Management",
                "Lead Generation",
                "E-commerce & Shopping",
                "PPC Coaching",
                "SEM Strategy",
                "Other",
              ]}
            />
            <SelectField
              label="Budget Range (USD) *"
              options={[
                "Select Range",
                "Under $500",
                "$500 – $1,000",
                "$1,000 – $2,500",
                "$2,500 – $5,000",
                "$5,000+",
              ]}
            />
            <SelectField
              label="Country *"
              options={[
                "Select Country",
                "United States",
                "United Kingdom",
                "United Arab Emirates",
                "Canada",
                "Australia",
                "Other",
              ]}
            />
            <div className="col-span-full">
              <Label>Your Message *</Label>
              <textarea
                placeholder="Enter here .."
                rows={4}
                className={`${fieldBase} block h-[130px] w-full resize-none py-[12px] leading-[1.6]`}
              />
            </div>
          </div>
          <div className={submitWrap}>
            <span className="text-[15px] font-semibold text-white">Submit</span>
            <span className="arrow flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white text-gold">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
