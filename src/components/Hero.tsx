import { ArrowRight, Sparkles, GraduationCap, Users, Award } from "lucide-react";
import heroImg from "@/assets/gal9.webp";
import { useApply } from "./ApplyContext";
import { Reveal } from "./Reveal";

export function Hero() {
  const { openModal } = useApply();
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-20 md:pt-10 md:pb-28">
      {/* soft decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.85 0.08 258 / 0.5), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.9 0.05 85 / 0.6), transparent 70%)",
        }}
      />

      <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Admissions Open for 2026–27
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[64px]">
              Building strong <br className="hidden sm:inline" />
              foundations for a <br className="hidden sm:inline" />
              <span className="text-accent">brighter future.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              Expert guidance, personalized learning, and a supportive environment
              designed to help every student achieve academic excellence.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-all hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                Explore Courses
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: GraduationCap, label: "Experienced Faculty" },
                { icon: Users, label: "Personalized Attention" },
                { icon: Award, label: "Proven Results" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 text-sm font-medium text-ink-soft"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-surface text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={120}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
                <img
                  src={heroImg}
                  alt="Students learning in a modern classroom at Success Group Tuition"
                  width={1600}
                  height={1200}
                  className="h-[420px] w-full object-cover sm:h-[520px] md:h-[600px]"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-2 hidden w-[240px] rounded-2xl border border-border bg-card p-4 shadow-lift sm:block md:-left-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-2xl font-bold leading-none text-foreground">98%</div>
                    <div className="mt-1 text-xs font-medium text-ink-soft">Student success rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 right-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lift sm:block">
                <div className="flex items-center gap-2 text-xs font-semibold text-ink-soft">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Now enrolling · Classes 6–12
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
