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
  videoSrc?: string;
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
export const portfolio: Project[] = projectsData.portfolio;
export const projects: Project[] = projectsData.projects;

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
  videoSrc: t.videoSrc
}));
export const homeTestimonials: Testimonial[] = testimonials;

// Re-export contactInfo based on personal & socials configuration for layout backward compatibility
export const contactInfo: ContactItem[] = portfolioData.contactInfo;
