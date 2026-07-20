import Link from "next/link";

export default function LetsConnect() {
  return (
    <div className="mx-auto mb-10 mt-14 flex max-w-[1120px] flex-col items-start gap-5 px-5 sm:flex-row sm:items-center sm:justify-between md:px-10">
      <h2 className="m-0 text-[24px] md:text-[32px] font-extrabold">
        Let&rsquo;s <span className="italic text-gold">Connect</span> there
      </h2>
      <Link 
        href="#contact"
        className="cta flex items-center gap-2 rounded-[40px] bg-olive py-[7px] pl-6 pr-2"
      >
        <span className="text-[15px] font-semibold text-white">Get in Touch</span>
        <span className="arrow flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-gold font-bold">
          →
        </span>
      </Link>
    </div>
  );
}
