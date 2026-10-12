import content from "../constants.json";
import { CountUp } from "./components";
const { refferals: r } = content; //access using 'r' not refferals

const Reff = () => (
  <section className="bg-[#111] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
    {/* the main inner box */}
    <div className="mx-auto grid max-w-6xl gap-12 rounded-[30px] bg-[#1c1c1c] px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20">
      {/* Left */}
      <div className="flex animate-fade-up flex-col justify-between gap-10 text-center lg:text-left">
        <h2 className="text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl">
          {r.title[0]}
          <br />
          <span className="italic text-[#FF4D00]">{r.title[1]}</span>
          <br />
          {r.title[2]}
        </h2>

        <div>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-white/60 sm:text-base lg:mx-0">
            {r.body}
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200">
            {r.cta}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-14">
        {r.stats.map((s, i) => (
          <div
            key={s.tag}
            style={{ animationDelay: `${i * 150}ms` }}
            className="animate-fade-up text-center sm:text-left"
          >
            <p className="text-5xl font-semibold tracking-tight text-[#FFFFFF] sm:text-6xl">
              <CountUp value={s.value} />
            </p>
            <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
              {s.tag}
            </span>
            <p className="mx-auto mt-3 max-w-60 text-sm leading-snug text-white/60 sm:mx-0">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reff;
