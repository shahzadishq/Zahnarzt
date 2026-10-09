import { appointmentHref, appointmentIsExternal, contact, practice } from "@/content/site";
import { ContactForm } from "../ContactForm";
import { CalendarIcon, ClockIcon, MailIcon, PhoneIcon } from "../Icons";
import { Rich } from "../Rich";

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="bg-steel-500 py-20 text-charcoal-900 sm:py-24 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="eyebrow-steel">{contact.eyebrow}</p>
          <h2 id="kontakt-title" className="heading-lg mt-4 text-balance">
            <Rich text={contact.title} />
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-charcoal-900/80">{contact.intro}</p>

          <div className="mt-8 grid gap-3">
            {appointmentIsExternal && (
              <a
                href={appointmentHref}
                target="_blank"
                rel="noopener"
                data-track="appointment_cta_click"
                data-track-location="contact"
                className="group flex items-center gap-4 rounded-2xl border border-charcoal-900/10 bg-white/35 p-5 transition-colors hover:border-charcoal-900/30 hover:bg-white/60"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sun text-charcoal-950">
                  <CalendarIcon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span>
                  <span className="block text-sm text-charcoal-900/75">Rund um die Uhr online</span>
                  <span className="block text-xl font-bold">Termin bei Doctolib buchen</span>
                </span>
              </a>
            )}
            <a
              href={practice.phone.href}
              data-track-location="contact"
              className="group flex items-center gap-4 rounded-2xl border border-charcoal-900/10 bg-white/35 p-5 transition-colors hover:border-charcoal-900/30 hover:bg-white/60"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal-900 text-white">
                <PhoneIcon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span>
                <span className="block text-sm text-charcoal-900/75">Am schnellsten per Telefon</span>
                <span className="block text-xl font-bold tracking-wide">{practice.phone.display}</span>
              </span>
            </a>
            <a
              href={`mailto:${practice.email}`}
              data-track-location="contact"
              className="group flex items-center gap-4 rounded-2xl border border-charcoal-900/10 bg-white/35 p-5 transition-colors hover:border-charcoal-900/30 hover:bg-white/60"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-charcoal-900">
                <MailIcon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-charcoal-900/75">Per E-Mail</span>
                <span className="block font-semibold break-all">{practice.email}</span>
              </span>
            </a>
          </div>

          <div className="mt-3 rounded-2xl border border-charcoal-900/10 bg-white/35 p-5">
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-charcoal-900 uppercase">
              <ClockIcon className="h-4 w-4" /> Öffnungszeiten
            </p>
            <table className="mt-3 w-full text-left">
              <caption className="sr-only">Öffnungszeiten</caption>
              <tbody>
                {practice.openingHours.map((row) => (
                  <tr key={row.label} className="border-b border-charcoal-900/10 last:border-0">
                    <th scope="row" className="py-2 pr-4 font-normal text-charcoal-900/75">
                      {row.label}
                    </th>
                    <td className="py-2 text-right font-semibold whitespace-nowrap">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-ink lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
