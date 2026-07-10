import f1 from "@/assets/guru1.jpeg";
import f2 from "@/assets/guru2.jpeg";
import f3 from "@/assets/guru3.jpeg";
import f4 from "@/assets/guru4.jpeg";
import f5 from "@/assets/guru5.jpeg";
import f6 from "@/assets/guru6.jpeg";
import f7 from "@/assets/guru7.jpeg";
import f8 from "@/assets/guru8.jpeg";
import f9 from "@/assets/guru9.jpeg";
import f10 from "@/assets/guru10.jpeg";


import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const faculty = [
  {
    img: f1,
    name: "Amit Swain",
    subject: "Physics",
    years: "17 years",
    bio: "Founder of Success Group Tuition. M.Sc., B.Ed. with 17 years of teaching experience.",
  },
  {
    img: f2,
    name: "Suraj Swain",
    subject: "Mathematics",
    years: "6 years",
    bio: "M.Sc., B.Ed. with 6 years of teaching experience.",
  },
  {
    img: f3,
    name: "Brijesh Singh",
    subject: "Mathematics",
    years: "25 years",
    bio: "M.Sc., B.Ed. with 25 years of teaching experience.",
  },
  {
    img: f4,
    name: "Dr. Shailesh Kumar Kumawat",
    subject: "Chemistry",
    years: "12 years",
    bio: "M.Sc., B.Ed., PhD with 12 years of teaching experience.",
  },
  {
    img: f5,
    name: "Shreya Singh",
    subject: "Biology",
    years: "5 years",
    bio: "M.Sc. in Biology with 5 years of teaching experience.",
  },
  {
    img: f6,
    name: "Akriti Maurya",
    subject: "Social Studies",
    years: "5 years",
    bio: "M.Com. with 5 years of teaching experience.",
  },
  {
    img: f7,
    name: "Saroj Pandey",
    subject: "Gujarati",
    years: "20+ years",
    bio: "M.A., B.Ed. with over 20 years of teaching experience.",
  },
  {
    img: f8,
    name: "Chirag Mishra",
    subject: "Social Studies",
    years: "4 years",
    bio: "BBA with 4 years of teaching experience.",
  },
  {
    img: f9,
    name: "Amrital Maurya",
    subject: "English",
    years: "35+ years",
    bio: "M.A., B.Ed. with over 35 years of teaching experience.",
  },
  {
    img: f10,
    name: "Atul Rajput",
    subject: "Science",
    years: "3 years",
    bio: "B.Sc. (Maths - B.Ed.), with 3 years of teaching experience.",
  },
];

export function Faculty() {
    return (
        <section id="faculty" className="bg-surface py-20 md:py-28">
            <div className="container-x">
                <SectionHeading
                    label="Our Faculty"
                    title="Learn from experienced educators"
                    description="Handpicked teachers who blend deep subject expertise with genuine warmth for their students."
                />

                <div className="mt-10 -mx-5 overflow-x-auto overflow-y-hidden pb-6 md:-mx-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex gap-5 px-5 md:px-8">
                        {faculty.map((p, i) => (
                            <Reveal key={p.name} delay={(i % 4) * 80} className="shrink-0 w-[260px] sm:w-[280px]">
                                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={p.img}
                                            alt={`${p.name}, ${p.subject} faculty`}
                                            width={800}
                                            height={1000}
                                            loading="lazy"
                                            className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                        />
                                        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-soft backdrop-blur">
                                            {p.years}
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-base font-bold text-foreground">{p.name}</h3>
                                        <div className="mt-0.5 text-sm font-medium text-accent">{p.subject}</div>
                                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.bio}</p>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
