import { personal } from "@/lib/data";

export default function Copyright() {
  return (
    <div className="border-t border-[#e7ebf1] bg-white text-[13px] text-[#5a6474]">
      <div className="mx-auto flex max-w-[1280px] 2xl:max-w-[1600px] flex-col items-center gap-2 px-5 py-[18px] text-center sm:flex-row sm:justify-between sm:text-left md:px-10">
        <span>Copyright © 2024 {personal.name}. All Rights Reserved.</span>
        <span>
          User Terms &amp; Conditions <span className="opacity-40">|</span> Privacy
          Policy
        </span>
      </div>
    </div>
  );
}
