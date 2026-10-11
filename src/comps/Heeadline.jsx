import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import content from "../constants.json";

const { headline: h } = content;

// Fallback backgrounds if an image is missing
const fallbacks = [
  "linear-gradient(160deg,#3a3a3a,#111)",
  "linear-gradient(160deg,#FF4D00,#1a0ee6)",
  "linear-gradient(160deg,#1a0ee6,#111)",
];

// Scroll-triggered reveal
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Headline = () => (
  <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <Reveal className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
          {h.title}
        </h2>
        <a
          href="#"
          className="shrink-0 rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-900 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white sm:text-sm"
        >
          {h.browse}
        </a>
      </Reveal>

      {/* Category cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {h.categories.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 120}
            className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
          >
            <a
              href="#"
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 sm:aspect-[3/4]"
            >
              {/* Image */}
              <div
                style={{
                  backgroundImage: `url(${c.image}), ${fallbacks[i]}`,
                }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

              {/* Arrow */}
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-900 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#FF4D00] group-hover:text-white">
                <ArrowUpRight size={15} />
              </span>

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="text-2xl font-bold text-white transition-transform duration-500 group-hover:-translate-y-1">
                  {c.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/75 sm:text-[13px]">
                  {c.text}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Popular now */}
      <Reveal delay={200} className="mt-14 sm:mt-16">
        <div className="flex items-center gap-6">
          <p className="shrink-0 text-xs font-bold text-neutral-900 sm:text-sm">
            {h.popularLabel}
          </p>
          <span className="h-px flex-1 bg-neutral-100" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
          {h.popular.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className={`group block md:px-6 ${
                i === 0 ? "md:pl-0" : "md:border-l md:border-neutral-100"
              } ${i === h.popular.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="text-[11px] text-neutral-500">
                {p.category} · {p.date}
              </p>
              <h4 className="mt-3 max-w-xs text-sm font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-[#FF4D00]">
                {p.title}
              </h4>
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Headline;
