import content from "../constants.json";
import { logos } from "../logo";

const { partners } = content;

const Metrics = () => {
  const items = [...partners, ...partners];

  return (
    <section className="bg-black py-10 text-white sm:py-25">
      <p className="mb-8 text-center text-sm font-bold uppercase tracking-[0.2em] text-white/80 sm:text-base">
        Trusted by industry leaders
      </p>

      <div className="relative mx-auto max-w-6xl overflow-hidden">
        {/* Edge fade */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-gray-400 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-gray-400 to-transparent sm:w-32" /> */}

        <div className="flex w-max animate-marquee items-center gap-12 pr-12 hover:[animation-play-state:paused] sm:gap-16 sm:pr-16">
          {items.map((p, i) => (
            <img
              key={i}
              src={logos[p.key]}
              alt={p.name}
              className="h-8 w-auto shrink-0 brightness-0 invert opacity-80 transition hover:opacity-100 sm:h-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
