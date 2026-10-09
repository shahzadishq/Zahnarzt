import type { SVGProps } from "react";
import type { ServiceIcon as ServiceIconName } from "@/content/site";

type P = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const PhoneIcon = (p: P) => (
  <Base {...p}>
    <path d="M5 4h3.2l1.6 4-2 1.3a11 11 0 0 0 6.9 6.9l1.3-2 4 1.6V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Base>
);
export const CalendarIcon = (p: P) => (
  <Base {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Base>
);
export const MailIcon = (p: P) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Base>
);
export const PinIcon = (p: P) => (
  <Base {...p}>
    <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Base>
);
export const ClockIcon = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Base>
);
export const ArrowIcon = (p: P) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);
export const CheckIcon = (p: P) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Base>
);
export const PlusIcon = (p: P) => (
  <Base {...p}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);
export const MenuIcon = (p: P) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </Base>
);
export const CloseIcon = (p: P) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);
export const AlertIcon = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5v5.5M12 16.2v.3" />
  </Base>
);

const servicePaths: Record<ServiceIconName, React.ReactNode> = {
  sparkle: (
    <>
      <path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.7l-1.6-5.5L5 10.6 10.4 9 12 3.5Z" />
      <path d="M18.5 16v4M16.5 18h4" />
    </>
  ),
  gum: (
    <>
      <path d="M12 3.5s-6 6.4-6 10.8a6 6 0 0 0 12 0C18 9.9 12 3.5 12 3.5Z" />
      <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v5.5c0 4.3-3 7.6-7 9-4-1.4-7-4.7-7-9V6l7-2.5Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  crown: (
    <>
      <path d="M4.5 8 8 11l4-5.5 4 5.5 3.5-3-1.5 9.5H6L4.5 8Z" />
      <path d="M6.5 20.5h11" />
    </>
  ),
  implant: (
    <>
      <path d="M7 5.5c0-1 .8-1.7 1.8-1.7h6.4c1 0 1.8.8 1.8 1.7V8H7V5.5Z" />
      <path d="M9 8v2.5h6V8M9.5 12.5h5M10 15h4M10.5 17.5h3M12 20.5v-3" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.3 13.5c.9 1.5 2.2 2.3 3.7 2.3s2.8-.8 3.7-2.3M9 9.5v.5M15 9.5v.5" />
    </>
  ),
  root: (
    <path d="M12 6.5c-1.6-1.3-3.4-2-5-1.3C5 6 4.8 8.6 5.6 11c.6 1.8 1 3.5 1.3 6 .3 2.4 1.6 3 2.3 1.2l1.4-4.2c.5-1.2 2.3-1.2 2.8 0l1.4 4.2c.7 1.8 2 1.2 2.3-1.2.3-2.5.7-4.2 1.3-6 .8-2.4.6-5-1.4-5.8-1.6-.7-3.4 0-5 1.3Z" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M6 18l1.4-1.4M16.6 7.4 18 6" />
    </>
  ),
  aligner: (
    <>
      <path d="M4.5 8.5c0 6.5 3.4 11 7.5 11s7.5-4.5 7.5-11" />
      <path d="M8 9c0 4.3 1.8 7 4 7s4-2.7 4-7" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.3a4.2 4.2 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z" />,
  bolt: <path d="M13.2 3.5 6 13.5h5.2l-1 7 7.3-10h-5.3l1-7Z" />,
  scan: (
    <>
      <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
      <path d="M4 12h16" />
    </>
  ),
};

export function ServiceIcon({ name, ...p }: P & { name: ServiceIconName }) {
  return <Base {...p}>{servicePaths[name]}</Base>;
}
