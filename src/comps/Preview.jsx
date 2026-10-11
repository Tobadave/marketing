import { Search, Bookmark, Bell } from "lucide-react";
import content from "../constants.json";
const { hero, preview } = content;

const Preview = () => {
  return (
    <>
      <section className="mx-auto mt-24 max-w-6xl rounded-t-[48px] bg-neutral-100 px-12 pt-12">
        <div className="rounded-t-3xl bg-white px-8 py-5">
          <div className="flex flex-wrap items-center justify-between gap-3 md:flex-nowrap">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="font-black">{preview.logo}</span>
              {preview.tabs.map((tab, i) => (
                <span
                  key={tab}
                  className={i === 0 ? "font-medium" : "text-neutral-500"}
                >
                  {tab}
                </span>
              ))}
            </div>

            <div className="order-last flex w-full items-center gap-3 rounded-full bg-neutral-100 px-5 py-3 md:order-0 md:w-1/2">
              <Search size={18} className="shrink-0" />
              <input
                placeholder={preview.searchPlaceholder}
                className="w-full min-w-0 bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <Bookmark size={20} className="hidden sm:block" />
              <Bell size={20} />
              <div className="h-9 w-9 rounded-full bg-neutral-300" />
            </div>
          </div>
          {/* this is the inner box */}
          <div className="h-40 sm:h-52 md:h-64 p-5 md:flex flex-col" />
        </div>
      </section>
    </>
  );
};

export default Preview;
