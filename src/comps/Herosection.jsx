import React from "react";
const { hero, preview } = content;
import content from "../constants.json";

const Herosection = () => {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-32 text-center">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-7xl">
          {hero.titleStart} {hero.titleMiddle}{" "}
          <span className="italic text-orange-600">{hero.titleEnd}</span>{" "}
          {hero.titleLast}
        </h1>

        <p className="mt-10 text-base text-neutral-500 sm:text-lg">
          {hero.subtitle}
          <br className="hidden sm:block" /> {hero.subtitle2}
        </p>

        <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <button className="cursor-pointer rounded-full bg-neutral-900 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            {hero.primaryBtn}
          </button>
          <button className="cursor-pointer rounded-full bg-neutral-100 px-7 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            {hero.secondaryBtn}
          </button>
        </div>
      </section>
    </>
  );
};

export default Herosection;
