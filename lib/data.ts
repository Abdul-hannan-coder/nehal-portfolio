import portfolioData from "./data/portfolio.json";
import projectsData from "./data/projects.json";
import servicesData from "./data/services.json";

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
export interface ContactItem {
  icon: string;
  text: string;
}
export interface Service {
  icon: string;
  title: string;
  desc: string;
}
export interface Stat {
  num: string;
  label: string;
}
export interface Tool {
  name: string;
  pct: string;
  mark: string;
  bg: string;
}
export interface Metric {
  value: string;
  label: string;
}
export interface ProjectDetails {
  category: string;
  client: string;
  duration: string;
  country: string;
  intro: string;
  description: string;
  challenge: string;
  solution: string;
  solutionItems: string[];
  images: string[];
  impact: string;
}
export interface Project {
  id: string;
  slug: string;
  img: string;
  tags: string[];
  title: string;
  metrics: Metric[];
  details?: ProjectDetails;
}
export interface PricingPlan {
  plan: string;
  price: string;
  unit: string;
  bg: string;
  tagBg: string;
  tagFg: string;
  arrowBg: string;
  arrowFg: string;
  priceColor: string;
  unitColor: string;
  featColor: string;
  checkBg: string;
  checkFg: string;
  features: string[];
}
export interface Testimonial {
  id: string;
  img: string;
  name: string;
  role: string;
  quote: string;
  vimeoId?: string;
  /** Video width / height (e.g. 1.7778 for 16:9, 0.5667 for portrait). */
  aspect?: number;
}
export interface Faq {
  q: string;
  a: string;
  open?: boolean;
}
export interface SkillTag {
  label: string;
  bg: string;
  fg: string;
  border: string;
}
export interface OtherProject {
  id: string;
  img: string;
  tags: string[];
  title: string;
}
export interface GalleryItem {
  id: string;
  flex: string;
  src: string;
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
}
export interface CorePillar {
  title: string;
  desc: string;
}
export interface AboutData {
  title: string;
  highlightedTitle: string;
  paragraphs: string[];
  bioTitle: string;
  bioParagraphs: string[];
  badge1: string;
  badge2: string;
  highlights?: string[];
  corePillars: CorePillar[];
}
export interface PersonalData {
  name: string;
  initials: string;
  title: string;
  subtitle: string;
  tagline: string;
  profileImage: string;
  heroImage: string;
  signature?: string;
  highlights?: string[];
}
export interface SocialItem {
  name: string;
  href: string;
  icon: string;
}

export const olive = "#188bf6";
export const gold = "#188bf6";

export const marqueeWords: string[] = [
  "Google Ads",
  "PPC",
  "Lead Generation",
  "E-commerce",
  "SEM",
  "Google AdWords"
];

// Map new structured keys
export const personal: PersonalData = portfolioData.personal;
export const about: AboutData = portfolioData.about;
export const nav: NavItem[] = portfolioData.navigation;
export const socials: SocialItem[] = portfolioData.social;
export const stats: Stat[] = portfolioData.stats;
export const tools: Tool[] = portfolioData.tools;
export const leadGen: string[] = portfolioData.leadGen;
export const ecommerce: string[] = portfolioData.ecommerce;
export const pricing: PricingPlan[] = portfolioData.pricing;
export const faqs: Faq[] = portfolioData.faqs;
export const skillTags: SkillTag[] = portfolioData.skillTags;

// Timeline mapping from JSON array of objects to milestones shape
export const milestones: Milestone[] = portfolioData.timeline.map((item) => ({
  year: item.period,
  title: item.title,
  desc: item.description.join(" ")
}));

// Projects (remain split in projects.json)
const extraMetrics: Record<string, Metric[]> = {
  "big-orange-malaga": [
    { value: "$9.2K", label: "Ad Spend" },
    { value: "157", label: "Leads" },
    { value: "$58.62", label: "Cost / Conv." }
  ],
  "branch-specialist-rochester": [
    { value: "$4,103", label: "Ad Spend" },
    { value: "94", label: "Leads" },
    { value: "$43", label: "Cost / Conv." }
  ],
  "closing-curtain": [
    { value: "118", label: "Conversions" },
    { value: "AED 41.25", label: "Cost / Conv." }
  ],
  "dumpster-rental": [
    { value: "$4.58K", label: "Ad Spend" },
    { value: "297", label: "Conversions" },
    { value: "$15.41", label: "Cost / Conv." }
  ],
  "fabrica-home-llc": [
    { value: "AED 4.51K", label: "Ad Spend" },
    { value: "115", label: "Conversions" },
    { value: "AED 39.22", label: "Cost / Conv." }
  ],
  "google-ads-turnaround-from-58-to-5-79-cpl": [
    { value: "221", label: "Booking Leads" },
    { value: "$5.79", label: "Cost / Conv." }
  ],
  "google-tag-manager": [
    { value: "GTM Setup", label: "Tracking" },
    { value: "Custom", label: "Conversions" }
  ],
  "merchant-center": [
    { value: "76K", label: "Approved Products" },
    { value: "GMC", label: "Feed Setup" }
  ],
  "norwalk-car-service": [
    { value: "221", label: "Conversions" },
    { value: "$200", label: "Rev. / Conversion" }
  ],
  "one-roof-solar": [
    { value: "125", label: "Conversions" },
    { value: "$8,000", label: "Rev. / Conversion" }
  ],
  "packers-movers-service": [
    { value: "40", label: "Phone Calls" },
    { value: "$116", label: "Ad Spend" },
    { value: "$6.12", label: "Cost / Conv." }
  ],
  "paper-event-registration-dubai": [
    { value: "$431", label: "Ad Spend" },
    { value: "116", label: "Conversions" },
    { value: "$3.72", label: "Cost / Conv." }
  ],
  "prime-landscaper": [
    { value: "Rank #1", label: "Local Listing" },
    { value: "14 Days", label: "Campaign Stats" }
  ],
  "soil-n-seed-landscaping": [
    { value: "7 Days", label: "Optimization Time" },
    { value: "Google Ads", label: "Rebuilt & Restructured" }
  ],
  "storage-spot": [
    { value: "$19.6K", label: "Ad Spend" },
    { value: "318", label: "Leads" },
    { value: "$61.51", label: "Cost / Conv." }
  ],
  "tree-soldiers-rochester": [
    { value: "$6.6K", label: "Ad Spend" },
    { value: "865", label: "Conversions" },
    { value: "$7.70", label: "Cost / Conv." }
  ]
};

const enrichProject = (p: any): Project => {
  const metrics = (p.metrics && p.metrics.length > 0)
    ? p.metrics
    : (extraMetrics[p.slug] || []);
  return {
    ...p,
    metrics
  } as Project;
};

export const portfolio: Project[] = projectsData.portfolio.map(enrichProject);
export const projects: Project[] = projectsData.projects.map(enrichProject);

// Services (remain split in services.json)
export const servicesTop: Service[] = servicesData.servicesTop;
export const services: Service[] = servicesData.services;

// Testimonials mapped from portfolio.json!
export const testimonials: Testimonial[] = portfolioData.testimonials.map((t, idx) => ({
  id: `ts-${idx}`,
  img: "",
  name: t.name,
  role: t.role,
  quote: "",
  vimeoId: t.vimeoId,
  aspect: t.aspect
}));
export const homeTestimonials: Testimonial[] = testimonials;

// Re-export contactInfo based on personal & socials configuration for layout backward compatibility
export const contactInfo: ContactItem[] = portfolioData.contactInfo;
