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
  <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-25">
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <Reveal className="flex items-center justify-center pb-0 gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          {h.title}
        </h2>
      </Reveal>

      {/* Category cards */}
      <div className="mt-15 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {h.categories.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 120}
            className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
          >
            <a
              href="#"
              className="group relative block aspect-4/5 overflow-hidden rounded-2xl bg-neutral-900 sm:aspect-3/4"
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
                <h3 className="text-[27px] font-semibold text-white transition-transform duration-500 group-hover:-translate-y-1">
                  {c.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/75 sm:text-[14px]">
                  {c.text}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Headline;
