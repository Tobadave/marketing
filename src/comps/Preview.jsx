import { Search, Bookmark, Bell } from "lucide-react";
import content from "../constants.json";
import { WindowDots, PrimaryBtn, SecondaryBtn } from "./components";
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
          <div className="flex flex-col items-center gap-8 px-2 py-10 sm:px-6 md:flex-row md:gap-12 md:px-10 lg:px-16">
            {/* Demo panel */}
            <section className="w-full animate-fade-up md:w-1/2">
              <WindowDots />
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5">
                <textarea
                  placeholder="Describe your architecture requirements..."
                  className="h-40 w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm outline-none transition focus:border-neutral-900 focus:bg-white sm:h-48"
                />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    No credit card required
                  </span>
                  <button className="hidden border rounded-full px-6 py-2.5 text-sm font-semibold transition hover:bg-neutral-700">
                    Try Out
                  </button>
                </div>
              </div>
            </section>

            {/* Copy */}
            <section className="flex w-full animate-fade-up flex-col text-center [animation-delay:200ms] md:w-1/2 md:text-left">
              <span className="mx-auto mb-4 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-900 md:mx-0">
                Architecture Engine
              </span>
              <h2 className="text-3xl text-gray-800 font-semibold leading-tight tracking-tight sm:text-4xl">
                Build systems that drive real numbers
              </h2>
              <p className="mt-4 text-base text-neutral-500 sm:text-lg">
                Try our architecture systems and implement the best ideas after
                a few minutes of consultation.
              </p>

              <ul className="mt-6 space-y-3 text-left text-neutral-700">
                {[
                  "Instant cost estimates",
                  "Proven reference architectures",
                  "Export-ready proposals",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[11px] text-white">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-start">
                <SecondaryBtn>Start Free Trial</SecondaryBtn>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
