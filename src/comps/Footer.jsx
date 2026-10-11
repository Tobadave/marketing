import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

import content from "../constants.json";

const { footerDark: f } = content;

const socials = [
  { Icon: FaFacebookF, label: "Facebook", round: true },
  { Icon: FaInstagram, label: "Instagram", round: false },
  { Icon: FaYoutube, label: "YouTube", round: true },
];

const Heading = ({ children }) => (
  <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
    {children}
  </h4>
);

const FooterDark = () => (
  <footer className="bg-black text-white">
    <div className="py-20 flex">
      <p className="mx-auto font-semibold text-4xl">
        Join the Top 1% Engineers today
      </p>
    </div>
    <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-20">
      {/* Top */}
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <h2 className="text-3xl font-normal leading-tight sm:text-4xl lg:text-[44px]">
          {f.tagline[0]}
          <br />
          {f.tagline[1]}
        </h2>

        <div className="md:justify-self-end md:w-full md:max-w-lg">
          <p className="mb-3 text-lg sm:text-xl">{f.touch}</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 rounded-full border border-white/40 p-1.5 pl-5 sm:pl-6"
          >
            <input
              type="email"
              required
              placeholder={f.placeholder}
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/80"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-[#FF4D00] px-5 py-3 text-sm font-medium transition hover:bg-[#e04400] sm:px-7"
            >
              {f.subscribe}
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] lg:mt-16">
        <div className="col-span-2 md:col-span-1">
          <Heading>{f.contactLabel}</Heading>
          <div className="mt-5 space-y-3 text-base">
            <a
              href={`mailto:${f.email}`}
              className="flex items-center gap-3 break-all"
            >
              <FaEnvelope className="shrink-0 text-[#FF4D00]" size={20} />
              {f.email}
            </a>
            <a href={`tel:${f.phone}`} className="flex items-center gap-3">
              <FaPhone className="shrink-0 text-[#FF4D00]" size={18} />
              {f.phone}
            </a>
          </div>
        </div>

        {f.columns.map((col) => (
          <div key={col.title}>
            <Heading>{col.title}</Heading>
            <ul className="mt-5 space-y-4">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition hover:text-[#FF4D00]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <Heading>{f.followLabel}</Heading>
          <div className="mt-5 flex gap-3">
            {socials.map(({ Icon, label, round }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className={`flex h-10 w-10 items-center justify-center bg-white text-black transition hover:bg-[#FF4D00] hover:text-white ${
                  round ? "rounded-full" : "rounded-lg"
                }`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-14 border-t border-white/20 pt-8 lg:mt-16">
        <div className="flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{f.copyright}</p>
          <div className="flex gap-8">
            {f.legal.map((l) => (
              <a key={l} href="#" className="transition hover:text-white">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterDark;
