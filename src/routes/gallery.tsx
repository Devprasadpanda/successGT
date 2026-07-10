import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ApplyProvider } from "@/components/ApplyContext";
import { ApplyModal } from "@/components/ApplyModal";
import { Reveal } from "@/components/Reveal";

import g1 from "@/assets/gal1.webp";
import g2 from "@/assets/gal2.webp";
import g3 from "@/assets/gal3.webp";
import g4 from "@/assets/gal4.webp";
import g5 from "@/assets/gal5.webp";
import g6 from "@/assets/gal6.webp";
import g7 from "@/assets/gal7.webp";
import g8 from "@/assets/gal8.webp";
import g9 from "@/assets/gal9.webp";
import g10 from "@/assets/gal10.webp";
import g11 from "@/assets/gal11.webp";
import g12 from "@/assets/gal12.webp";
import g13 from "@/assets/gal13.webp";
import g14 from "@/assets/gal14.webp";
import g15 from "@/assets/gal15.webp";
import g16 from "@/assets/gal16.webp";
import g17 from "@/assets/gal17.webp";
import g18 from "@/assets/gal18.webp";
import g19 from "@/assets/gal19.webp";
import g20 from "@/assets/gal20.webp";
import g21 from "@/assets/gal21.webp";
import g22 from "@/assets/gal22.webp";
import g23 from "@/assets/gal23.webp";
import g24 from "@/assets/gal24.webp";
import g25 from "@/assets/gal25.webp";

const images = [
  { src: g1, alt: "Students studying together" },
  { src: g2, alt: "Teacher helping a student with math" },
  { src: g3, alt: "Bright modern classroom interior" },
  { src: g4, alt: "Students celebrating academic achievements" },
  { src: g5, alt: "Students working on a science experiment" },
  { src: g6, alt: "Textbooks and open notebooks on a desk" },
  { src: g7, alt: "Gallery image 7" },
  { src: g8, alt: "Gallery image 8" },
  { src: g9, alt: "Gallery image 9" },
  { src: g10, alt: "Gallery image 10" },
  { src: g11, alt: "Gallery image 11" },
  { src: g12, alt: "Gallery image 12" },
  { src: g13, alt: "Gallery image 13" },
  { src: g14, alt: "Gallery image 14" },
  { src: g15, alt: "Gallery image 15" },
  { src: g16, alt: "Gallery image 16" },
  { src: g17, alt: "Gallery image 17" },
  { src: g18, alt: "Gallery image 18" },
  { src: g19, alt: "Gallery image 19" },
  { src: g20, alt: "Gallery image 20" },
  { src: g21, alt: "Gallery image 21" },
  { src: g22, alt: "Gallery image 22" },
  { src: g23, alt: "Gallery image 23" },
  { src: g24, alt: "Gallery image 24" },
  { src: g25, alt: "Gallery image 25" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Success Group Tuition" },
      {
        name: "description",
        content:
          "Explore moments from Success Group Tuition — classrooms, mentoring sessions, events, and student milestones.",
      },
      { property: "og:title", content: "Gallery — Success Group Tuition" },
      {
        property: "og:description",
        content: "Moments from classrooms, events, and student milestones.",
      },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
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
    <ApplyProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 pb-20 md:pt-28 md:pb-28">
          <div className="container-x">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="mt-6 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-px w-6 bg-accent/60" />
                Gallery
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-[52px]">
                Life at Success Group Tuition
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
                A full look inside our classrooms, mentoring moments, events, and
                the milestones that make our students proud.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {images.map((img, i) => (
                <Reveal key={i} delay={(i % 8) * 50}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>
                </Reveal>
              ))}
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
        </main>
        <Footer />
        <ApplyModal />
      </div>
    </ApplyProvider>
  );
}
