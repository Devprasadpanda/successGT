import { BookOpen, Clock, Users, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { useApply } from "./ApplyContext";

type Course = {
  title: string;
  board: string;
  subjects: string[];
  schedule: string;
  batch: string;
  monthly: string;
  yearly: string;
};

const courses: Course[] = [
  {
    title: "Class 6th",
    board: "CBSE & GSEB",
    subjects: ["Mathematics", "Science", "Social Studies", "English", "Gujarati"],
    schedule: "Mon, Wed, Fri · 3:00 PM – 4:00 PM",
    batch: "20–30 students per batch",
    monthly: "₹670",
    yearly: "₹8,000",
  },
  {
    title: "Class 7th",
    board: "CBSE & GSEB",
    subjects: ["Mathematics", "Science", "Social Studies", "English", "Gujarati"],
    schedule: "Mon, Wed, Fri · 4:00 PM – 5:00 PM",
    batch: "20–30 students per batch",
    monthly: "₹800",
    yearly: "₹9,500",
  },
  {
    title: "Class 8th",
    board: "CBSE & GSEB",
    subjects: ["Mathematics", "Science", "Social Studies", "English", "Gujarati"],
    schedule: "Tue, Thu, Sat · 3:00 PM – 4:00 PM",
    batch: "20–30 students per batch",
    monthly: "₹1,000",
    yearly: "₹12,000",
  },
  {
    title: "Class 9th",
    board: "CBSE & GSEB",
    subjects: ["Mathematics", "Science", "Social Studies", "English", "Gujarati"],
    schedule: "Tue, Thu, Sat · 4:00 PM – 5:30 PM",
    batch: "20–30 students per batch",
    monthly: "₹1,250",
    yearly: "₹15,000",
  },
  {
    title: "Class 10th",
    board: "GSEB",
    subjects: ["Mathematics", "Science", "Social Studies", "English", "Gujarati"],
    schedule: "Mon, Wed, Fri · 5:00 PM – 6:30 PM",
    batch: "20–30 students per batch",
    monthly: "₹1,420",
    yearly: "₹17,000",
  },
  {
    title: "Class 10th",
    board: "CBSE",
    subjects: ["Mathematics", "Science", "Social Studies", "English"],
    schedule: "Mon, Wed, Fri · 5:00 PM – 6:30 PM",
    batch: "20–30 students per batch",
    monthly: "₹1,500",
    yearly: "₹18,000",
  },
  {
    title: "Class 11th",
    board: "Science",
    subjects: ["Physics", "Chemistry", "Mathematics/Biology", "English"],
    schedule: "Mon, Wed, Fri · 4:00 PM – 5:30 PM",
    batch: "20–30 students per batch",
    monthly: "₹2,700",
    yearly: "₹32,500",
  },
  {
    title: "Class 12th",
    board: "Science",
    subjects: ["Physics", "Chemistry", "Mathematics/Biology", "English"],
    schedule: "Tue, Thu, Sat · 5:00 PM – 6:30 PM",
    batch: "20–30 students per batch",
    monthly: "₹3,100",
    yearly: "₹37,000",
  },
];

export function Courses() {
  const { openModal } = useApply();
  return (
    <section id="courses" className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          label="Our Courses"
          title="Programs designed for academic success"
          description="Comprehensive courses for Classes 6–12, structured to build strong concepts, discipline, and consistent results."
        />

        <div className="mt-10 -mx-5 overflow-x-auto overflow-y-hidden pb-6 md:-mx-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 px-5 md:px-8">
            {courses.map((c, i) => (
              <Reveal key={`${c.title}-${c.board}`} delay={(i % 3) * 80} className="shrink-0 w-[300px] sm:w-[340px]">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift md:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {c.title}{" "}
                        <span className="ml-1 text-sm font-semibold text-ink-soft">
                          ({c.board})
                        </span>
                      </h3>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/5 text-accent">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                      Subjects
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {c.subjects.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      {c.schedule}
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" />
                      {c.batch}
                    </li>
                  </ul>

                  <div className="mt-5 border-t border-border pt-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                      Fees
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-medium text-ink-soft">Monthly</div>
                        <div className="text-lg font-bold text-foreground">{c.monthly}</div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-ink-soft">Yearly</div>
                        <div className="text-lg font-bold text-foreground">{c.yearly}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={openModal}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lift"
                  >
                    <BookOpen className="h-4 w-4" />
                    Enroll Now
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
