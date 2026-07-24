import { socials, personal } from "@/lib/data";
import Icon from "./Icon";

// Official brand colours for the social row.
const socialBg: Record<string, string> = {
  whatsapp: "#25D366",
  upwork: "#14A800",
  fiverr: "#1DBF73",
  facebook: "#1877F2",
  behance: "#1769FF",
  youtube: "#FF0000",
  x: "#000000",
  linkedin: "#0A66C2",
  instagram:
    "linear-gradient(45deg,#F58529 0%,#DD2A7B 45%,#8134AF 75%,#515BD4 100%)",
};

const footerNav = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Testimonials", href: "/#testimonials" },
];

export default function Footer() {
  return (
    <footer className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 px-5 pb-10 pt-5 sm:grid-cols-2 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
      <div>
        <div className="mb-4 flex items-center gap-[10px]">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gold font-extrabold text-white">
            {personal.initials.charAt(0)}
          </div>
          <span className="text-[19px] font-bold">
            {personal.name.split(" ")[0]}<span className="text-gold">.</span>
          </span>
        </div>
        <p className="mb-[18px] max-w-[250px] text-[13.5px] leading-[1.7] text-[#7a7a6e]">
          {personal.subtitle}
        </p>
        <div className="flex gap-[10px]">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: socialBg[s.icon] ?? "#188bf6" }}
              className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full text-white shadow-sm transition-transform hover:-translate-y-1 hover:text-white"
            >
              <Icon name={s.icon} className="h-[15px] w-[15px] text-white" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h5 className="mb-4 text-[15px] font-bold">Navigation</h5>
        <div className="flex flex-col gap-[11px] text-[13.5px]">
          {footerNav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="w-max text-[#7a7a6e] transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h5 className="mb-4 text-[15px] font-bold">Contact</h5>
        <div className="flex flex-col gap-[11px] text-[13.5px] text-[#7a7a6e]">
          <a href="tel:+923203469521" className="w-max transition-colors hover:text-gold">
            +92 320 3469521
          </a>
          <span>www.example.com</span>
          <span>example@gmail.com</span>
          <span>
            Managing campaigns in
            <br />
            the USA, UK, and Dubai
          </span>
        </div>
      </div>

      <div>
        <h5 className="mb-4 text-[15px] font-bold">Get the latest information</h5>
        <div className="flex items-center rounded-[40px] bg-[#eaf2fd] py-[5px] pl-[18px] pr-[5px]">
          <input
            placeholder="E-mail address"
            className="flex-1 border-none bg-transparent font-sans text-[13.5px] text-[#4a4a3e] outline-none"
          />
          <span className="flex h-[38px] w-[38px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gold text-white transition-transform hover:scale-105">
            →
          </span>
        </div>
      </div>
    </footer>
  );
}
