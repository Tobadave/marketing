import Navbar from "./Navbar";
import content from "../constants.json";
import Preview from "./Preview";
import Metrics from "./Metrics";

const { hero, preview } = content;

const Icon = ({ src }) => (
  <img
    src={src}
    alt=""
    className="mx-0.5 inline-block h-[0.8em] w-[0.8em] rounded-[22%] align-middle sm:mx-1"
  />
);

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen overflow-x-hidden bg-white font-sans text-neutral-900">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pt-32 text-center">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-7xl">
            {hero.titleStart} {hero.titleMiddle}{" "}
            <text className="italic text-orange-600">{hero.titleEnd}</text>{" "}
            {hero.titleLast}
          </h1>

          <p className="mt-10 text-base text-neutral-500 sm:text-lg">
            {hero.subtitle}
            <br className="hidden sm:block" /> {hero.subtitle2}
          </p>

          <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <button className="hover:cursor-pointer rounded-full bg-neutral-900 px-7 py-4 font-semibold text-white">
              {hero.primaryBtn}
            </button>
            <button className="hover:cursor-pointer rounded-full bg-neutral-100 px-7 py-4 font-semibold">
              {hero.secondaryBtn}
            </button>
          </div>
        </section>

        {/* Preview */}
        <Preview />
        <Metrics />
      </div>
    </>
  );
};

export default LandingPage;
