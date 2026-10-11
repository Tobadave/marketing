import { FaBehance, FaInstagram, FaLinkedinIn, FaPlay } from "react-icons/fa6";
import content from "../constants.json";

const { footer: f } = content;

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#BBEC00] font-[Arial,Helvetica,sans-serif] text-black">
      {/* Background Dark circle */}
      <div
        saria-hidden
        className="pointer-events-none absolute left-1/2 top-0 aspect-square w-[120%] -translate-x-1/2 rounded-full bg-black/10 sm:w-[75%] md:w-[55%] lg:w[44%]"
      />

      <div className="relative">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 px-6 pt-14 sm:grid-cols-2 sm:px-8 sm:pt-16 md:grid-cols-3 md:items-start lg:px-11 lg:pt-24">
          {/* Contact */}
          <div>
            <p className="text-sm">{f.contact.label}</p>
            <div className="mt-5 space-y-4 text-base font-bold lg:text-[17px]">
              <a href={`mailto:${f.contact.email}`} className="block break-all">
                {f.contact.email}
              </a>
              <a href={`tel:${f.contact.phone}`} className="block">
                {f.contact.phone}
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="order-first flex flex-col items-center text-center sm:col-span-2 md:order-none md:col-span-1">
            <h2 className="text-balance text-xl font-bold leading-tight sm:text-2xl md:text-xl lg:text-2xl xl:text-[26px]">
              {f.heading}
            </h2>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1a0ee6] px-7 py-2.5 text-sm text-white transition hover:bg-[#1409b8]"
            >
              {f.cta}
              <FaPlay size={9} />
            </a>
          </div>

          {/* Locations */}
          <div className="sm:justify-self-end">
            {f.locations.map((loc, i) => (
              <div key={loc.label} className={i > 0 ? "mt-10" : ""}>
                <p className="text-sm">{loc.label}</p>
                <address className="mt-5 text-base font-bold not-italic leading-snug lg:text-[17px]">
                  {loc.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            ))}
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-12 grid grid-cols-1 items-center gap-4 px-6 text-center text-[11px] sm:mt-14 sm:grid-cols-3 sm:px-8 sm:text-left">
          <p>{f.copyright}</p>
          <a href="#" className="sm:text-center">
            {f.terms}
          </a>
          <div className="flex items-center justify-center gap-4 sm:justify-end">
            <a href="#" aria-label="Behance">
              <FaBehance size={16} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={14} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* Giant cropped text */}
        <div className="mt-8 px-6 sm:px-8 lg:px-11">
          <svg
            viewBox="0 0 1200 105"
            className="block w-full"
            role="img"
            aria-label={f.giant}
          >
            <text
              x="0"
              y="145"
              fontSize="190"
              textLength="1200"
              lengthAdjust="spacingAndGlyphs"
              className="fill-black font-display"
            >
              {f.giant}
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
