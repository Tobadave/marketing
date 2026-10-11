export const WindowDots = () => (
  <div className="mb-3 flex items-center gap-1.5">
    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
  </div>
);

export const PrimaryBtn = ({ children, ...props }) => (
  <button
    className="rounded-full bg-neutral-900 px-7 py-3 font-semibold text-white transition hover:bg-neutral-700"
    {...props}
  >
    {children}
  </button>
);

export const SecondaryBtn = ({ children, ...props }) => (
  <button
    className="hover:cursor-pointer rounded-full bg-neutral-100 px-7 py-3 font-semibold transition hover:bg-neutral-200"
    {...props}
  >
    {children}
  </button>
);
