import { useState } from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import content from "../constants.json";

const { nav } = content;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative mx-auto max-w-6xl px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black">{nav.logo}</div>
          <div className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => (
              <a key={link} href="#" className="font-medium">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <FaLinkedin size={26} />
          <FaXTwitter size={22} />
          <span className="h-8 w-px bg-neutral-200" />
          <a href="#" className="font-medium">
            {nav.login}
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 flex flex-col gap-4 border-t border-neutral-100 bg-white px-6 py-5 shadow-md md:hidden">
          {nav.links.map((link) => (
            <a key={link} href="#" className="font-medium">
              {link}
            </a>
          ))}
          <a href="#" className="font-medium">
            {nav.login}
          </a>
          <div className="flex gap-5">
            <FaLinkedin size={26} />
            <FaXTwitter size={22} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
