import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: 98, suffix: "%", label: "Success rate" },
  { value: 2500, suffix: "+", label: "Students" },
  { value: 200, suffix: "+", label: "Top performers" },
  { value: 14, suffix: "+", label: "Years of excellence" },
];

function Item({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const n = useCountUp(value, start);
  return (
    <div className="text-center">
      <div className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
        {n}
        <span className="text-accent-foreground/80">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground/70">
        {label}
      </div>
    </div>
  );
}

export function Results() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground shadow-lift md:px-14 md:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-[380px] w-[380px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(closest-side, oklch(0.65 0.18 258), transparent 70%)" }}
          />
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/80">
              Results
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-[44px]">
              Numbers built on years of consistent student outcomes.
            </h2>
          </div>

          <div className="relative mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s) => (
              <Item key={s.label} {...s} start={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
