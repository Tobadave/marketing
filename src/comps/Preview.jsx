import { Search, Bookmark, Bell } from "lucide-react";
import content from "../constants.json";
import Cards from "./Cards";
const { preview } = content;
// Cards

const Preview = () => {
  return (
    <>
      <section className="mx-auto mt-24 max-w-6xl rounded-[30px] bg-neutral-100 p-3 xl:mb-10">
        <div className="rounded-3xl bg-white px-8 py-5">
          <div className="flex flex-wrap items-center justify-between gap-3 md:flex-nowrap">
            <div className="flex items-center gap-4 sm:gap-6 sm:hidden">
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

            {/* searchbar */}
            <div className="order-last mx-auto flex w-full items-center gap-3 rounded-full bg-neutral-100 px-5 py-3 md:order-0 md:w-1/2">
              <Search size={18} className="shrink-0" />
              <input
                placeholder={preview.searchPlaceholder}
                className="w-full min-w-0 bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-4 sm:gap-5 md:hidden">
              <Bookmark size={20} className="hidden sm:block" />
              <Bell size={20} />
              <div className="h-9 w-9 rounded-full bg-neutral-300" />
            </div>
          </div>
          {/* this is the inner box */}
          <div className="h-40 sm:h-52 md:h-72 px-5 pt-10 py-2 md:flex flex-row gap-5 mx-10">
            <section className="flex flex-2 animate-fade-up">
              <Cards />
            </section>
            <section className="flex flex-col flex-4/10 animate-fade-up [animation-delay:200ms]">
              <h2 className="text-2xl font-bold mb-5">
                Build systems that drive real numbers
              </h2>
              <p className="text-[17px]">
                Try out our various architecture systems , and implement the
                best ideas from a few minutes consultation
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
