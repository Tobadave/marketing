import { ArrowUpRight } from "lucide-react";
import content from "../src/constants.json";

const { features } = content;

// Site colors: lime #BBEC00, blue #1a0ee6
const glows = [
  "radial-gradient(60% 100% at 72% 0%, rgba(255,77,0,.6), transparent 70%), radial-gradient(55% 80% at 15% 100%, rgba(255,120,40,.3), transparent 70%)",
  "radial-gradient(55% 90% at 20% 100%, rgba(255,77,0,.5), transparent 70%), radial-gradient(60% 90% at 90% 90%, rgba(26,14,230,.45), transparent 70%)",
  "radial-gradient(60% 100% at 75% 5%, rgba(255,140,60,.5), transparent 70%), radial-gradient(60% 90% at 80% 100%, rgba(255,77,0,.55), transparent 70%)",
];

// even index = muted, odd index = bright
const Rich = ({ parts, muted, bright }) =>
  parts.map((t, i) =>
    t ? (
      <span key={i} className={i % 2 ? bright : muted}>
        {t}
      </span>
    ) : null,
  );

const Features = () => (
  <section className="bg-[#111] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
      {features.map((f, i) => (
        <article
          key={f.title}
          style={{ animationDelay: `${i * 150}ms` }}
          className="group animate-fade-up transition-transform duration-500 hover:-translate-y-1"
        >
          {/* Stat */}
          <div
            style={{ backgroundImage: glows[i] }}
            className="relative flex h-56 flex-col justify-between overflow-hidden rounded-[28px] bg-black px-7 pt-9 pb-14 transition-[filter] duration-500 group-hover:brightness-125 sm:h-60 lg:px-9"
          >
            <div className="flex items-start gap-1.5">
              <span className="text-5xl font-light leading-none tracking-tight text-white sm:text-6xl">
                {f.stat}
              </span>
              {f.arrow && (
                <ArrowUpRight size={18} className="mt-1 text-[#BBEC00]" />
              )}
            </div>
            <p className="max-w-[16rem] text-sm leading-snug">
              <Rich parts={f.label} muted="text-white/60" bright="text-white" />
            </p>
          </div>

          {/* Info */}
          <div className="relative -mt-7 min-h-52 rounded-[28px] bg-black px-7 pt-9 pb-10 lg:px-9">
            <h3 className="text-2xl font-light text-white">{f.title}</h3>
            <p className="mt-6 text-sm leading-relaxed">
              <Rich
                parts={f.body}
                muted="text-white/50"
                bright="font-medium text-white"
              />
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Features;
