import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  {
    name: "Anjali Verma",
    role: "Parent · Class 8",
    quote:
      "My daughter's confidence in maths has transformed. Teachers are approachable and the weekly reports keep us in the loop.",
    initials: "AV",
  },
  {
    name: "Rohan Kapoor",
    role: "Student · Class 10",
    quote:
      "The doubt-solving sessions before boards were a game-changer. I finally felt prepared instead of anxious.",
    initials: "RK",
  },
  {
    name: "Meera Patel",
    role: "Parent · Class 5",
    quote:
      "Small batches make a real difference. My son actually looks forward to going to class now.",
    initials: "MP",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          align="center"
          label="Testimonials"
          title="Words from students and parents"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs font-medium text-ink-soft">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
