import Image from "next/image";
import { images, team, type TeamMember } from "@/content/site";
import { AppointmentLink } from "../Cta";
import { Rich } from "../Rich";

export function Team() {
  const img = images.team;
  const dentists = team.members.filter((m) => m.role === "Zahnarzt");
  const staff = team.members.filter((m) => m.role !== "Zahnarzt");
  return (
    <section id="team" aria-labelledby="team-title" className="py-20 sm:py-24 lg:py-32">
      <div className="container-page">
        <div className="relative">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading="lazy"
            sizes="(min-width: 1216px) 1136px, 100vw"
            className="aspect-[4/3] h-auto w-full rounded-[1.75rem] object-cover object-[62%_center] shadow-soft sm:aspect-[16/9] lg:rounded-[2.25rem]"
          />
          <div className="relative -mt-16 mx-3 rounded-[1.5rem] border border-line bg-white p-7 shadow-lift sm:mx-8 sm:p-9 lg:absolute lg:bottom-10 lg:left-10 lg:mx-0 lg:mt-0 lg:max-w-md">
            <p className="eyebrow">{team.eyebrow}</p>
            <h2 id="team-title" className="heading-lg mt-3 text-balance">
              <Rich text={team.title} />
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{team.text}</p>
            <AppointmentLink location="team" className="btn-primary mt-6" />
          </div>
        </div>

        {/* Portraits in grayscale like the old site; colour on hover. Dentists first, larger. */}
        <ul className="mt-16 grid gap-x-5 gap-y-8 sm:grid-cols-2">
          {dentists.map((m) => (
            <Member key={m.name} member={m} wide />
          ))}
        </ul>
        <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3">
          {staff.map((m) => (
            <Member key={m.name} member={m} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Member({ member: m, wide = false }: { member: TeamMember; wide?: boolean }) {
  return (
    <li>
      <figure className="group">
        <div className="overflow-hidden rounded-[1.25rem] bg-sand">
          <Image
            src={m.image}
            alt={`${m.name}, ${m.role}`}
            width={600}
            height={wide ? 380 : 600}
            loading="lazy"
            sizes={wide ? "(min-width: 1216px) 560px, (min-width: 640px) 50vw, 100vw" : "(min-width: 1216px) 370px, (min-width: 640px) 33vw, 50vw"}
            className={`h-auto w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0 ${
              wide ? "aspect-[16/10] object-[70%_center]" : "aspect-square object-top"
            }`}
          />
        </div>
        <figcaption className="mt-3">
          <span className="block font-semibold text-charcoal-900">{m.name}</span>
          <span className="block text-sm text-steel-700">{m.role}</span>
        </figcaption>
      </figure>
    </li>
  );
}
