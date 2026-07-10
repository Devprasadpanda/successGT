import aboutImg from "@/assets/gal6.webp";
import { Reveal } from "./Reveal";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: 2500, suffix: "+", label: "Students taught" },
  { value: 10, suffix: "+", label: "Experienced faculty" },
  { value: 98, suffix: "%", label: "Student success rate" },
  { value: 14, suffix: "+", label: "Years of excellence" },
];

const journey = [
  { year: "2012", title: "Foundation", desc: "Success Group Tuition was established with a vision to transform education." },
  { year: "2016", title: "Expansion", desc: "Opened one new branch to serve more students in the region." },
  { year: "2019", title: "Excellence Award", desc: "Recognized as the best tutoring center in the region." },
  { year: "2021", title: "Digital Innovation", desc: "Launched hybrid learning programs." },
  { year: "2025", title: "Smart Learning", desc: "Started delivering lectures using projectors for a more interactive classroom experience." },
];

function Stat({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const n = useCountUp(value, start);
  return (
    <div>
      <div className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {n}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-1.5 text-sm font-medium text-ink-soft">{label}</div>
    </div>
  );
}

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src={aboutImg}
                alt="Teacher guiding students in a bright classroom"
                width={1200}
                height={1400}
                loading="lazy"
                className="h-[420px] w-full object-cover sm:h-[560px]"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent/60" />
            About Us
          </span>
          <Reveal delay={60}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[42px]">
              Inspiring students to learn, grow, and succeed.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
              At Success Group Tuition, we provide high-quality academic guidance rooted in
              experienced teachers, personalized attention, and a positive learning
              environment. Regular assessments and small batches ensure every student
              is understood, supported, and consistently pushed forward.
            </p>
          </Reveal>

          <div
            ref={ref}
            className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4"
          >
            {stats.map((s) => (
              <Stat key={s.label} {...s} start={inView} />
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey timeline */}
      <div className="container-x mt-20 md:mt-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent/60" />
            Our Journey
            <span className="h-px w-6 bg-accent/60" />
          </span>
          <Reveal delay={60}>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A decade of student success stories
            </h3>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div aria-hidden className="absolute left-[68px] top-2 bottom-2 w-px bg-border sm:left-[92px]" />
          <ol className="space-y-10">
            {journey.map((j, i) => (
              <Reveal key={j.year} delay={i * 80}>
                <li className="relative grid grid-cols-[56px_1fr] items-start gap-6 sm:grid-cols-[80px_1fr] sm:gap-10">
                  <div className="pt-1 text-right font-display text-lg font-bold text-accent sm:text-xl">
                    {j.year}
                  </div>
                  <div className="relative pl-6">
                    <span className="absolute left-[-6px] top-2 grid h-3 w-3 place-items-center rounded-full bg-accent ring-4 ring-background" />
                    <h4 className="text-lg font-bold text-foreground">{j.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft md:text-base">{j.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
