import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import g1 from "@/assets/gal1.webp";
import g2 from "@/assets/gal2.webp";
import g3 from "@/assets/gal3.webp";
import g4 from "@/assets/gal4.webp";
import g5 from "@/assets/gal5.webp";
import g6 from "@/assets/gal6.webp";
import g7 from "@/assets/gal7.webp";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const images = [
  { src: g1, alt: "Students studying together", span: "row-span-2" },
  { src: g2, alt: "Teacher helping a student with math", span: "" },
  { src: g3, alt: "Bright modern classroom interior", span: "" },
  { src: g4, alt: "Students celebrating academic achievements", span: "row-span-2" },
  { src: g5, alt: "Students working on a science experiment", span: "" },
  { src: g6, alt: "Textbooks and open notebooks on a desk", span: "" },
  { src: g7, alt: "Gallery image 7", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          label="Gallery"
          title="Life at our tuition center"
          description="A glimpse into classrooms, mentoring moments, and student milestones."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-3 md:gap-4">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={i * 60} className={img.span}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-surface"
          >
            See all photos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>


      {active !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
