import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-6 bg-accent/60" />
          {label}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[42px]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
