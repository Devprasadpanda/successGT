import { ArrowRight } from "lucide-react";
import { useApply } from "./ApplyContext";
import { Reveal } from "./Reveal";

export function CTASection() {
  const { openModal } = useApply();
  return (
    <section id="apply" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 shadow-soft md:px-14 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 right-[-10%] h-[360px] w-[360px] rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, oklch(0.85 0.08 258 / 0.6), transparent 70%)" }}
            />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[46px]">
                Ready to start your journey towards academic success?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
                Join our learning community and take the next step towards achieving your academic goals.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lift transition-all hover:-translate-y-0.5"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
                >
                  View Courses
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
