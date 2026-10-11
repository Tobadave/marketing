import Navbar from "./Navbar";
import Preview from "./Preview";
import Metrics from "./Metrics";
import Hero from "./Herosection";
import Reff from "./Reff";
import FooterDark from "./Footer";
import Headline from "./Heeadline";

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
        <Hero />
        {/* Preview */}
        <Preview />
        <Metrics />
        <Reff />
        <Headline />
        <FooterDark />
      </div>
    </>
  );
};

export default LandingPage;
