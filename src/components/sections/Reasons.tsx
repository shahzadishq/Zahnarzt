import { integrations, reasons } from "@/content/site";
import { AppointmentLink, ReviewBadge } from "../Cta";
import { Rich } from "../Rich";
import { Monogram } from "../Logo";

export function Reasons() {
  return (
    <section
      aria-labelledby="gruende-title"
      className="relative overflow-hidden bg-charcoal-900 py-20 text-white sm:py-24 lg:py-28"
    >
      {/* the brand's Z_O monogram, as a quiet background motif */}
      <Monogram className="pointer-events-none absolute -right-16 -bottom-10 w-[34rem] text-white/[0.04]" />

      <div className="container-page relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow-dark">{reasons.eyebrow}</p>
          <h2 id="gruende-title" className="heading-lg mt-4 text-balance text-white!">
            <Rich text={reasons.title} />
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-white/75">
            {reasons.intro}
          </p>
          <AppointmentLink location="reasons" className="btn-light mt-8" />
        </div>

        <ol className="grid gap-px overflow-hidden rounded-[1.75rem] bg-white/10 sm:grid-cols-2 lg:col-span-7">
          {reasons.items.map((item, i) => (
            <li
              key={item.title}
              className="bg-charcoal-900 p-7 transition-colors duration-300 hover:bg-charcoal-800 sm:p-8"
            >
              <span className="text-sm font-semibold tracking-[0.14em] text-steel-300" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">
                {item.title}
                <ReviewBadge show={integrations.reviewMode && !item.confirmed} />
              </h3>
              <p className="mt-2 leading-relaxed text-white/70">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
