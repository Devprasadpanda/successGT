import { useState } from "react";
import type { ReactNode } from "react";
import { Trophy, Star, Medal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import stu1 from "@/assets/stu1.jpeg";
import stu2 from "@/assets/stu2.jpeg";
import stu3 from "@/assets/stu3.jpeg";
import stu4 from "@/assets/stu4.jpeg";
import stu5 from "@/assets/stu5.jpeg";

type BadgeKey = "gold" | "silver" | "bronze" | "normal";

interface Performer {
  name: string;
  rank: string;
  photo: string;
  subjects: { name: string; marks: number | string }[];
  badge: BadgeKey;
  highlight?: string;
}

const class12Performers: Performer[] = [
  {
    name: "Harshit Hitendra Gupta",
    rank: "P.R. Rank 98.59",
    photo: stu1,
    subjects: [
      { name: "Physics", marks: 93 },
      { name: "Chemistry", marks: 94 },
      { name: "Maths", marks: 97 },
      { name: "GUJCET", marks: "108/120" },
    ],
    badge: "gold",
  },
  {
    name: "Krish Chaurasiya",
    rank: "P.R. Rank 98.12",
    photo: stu2,
    subjects: [
      { name: "Physics", marks: 92 },
      { name: "Chemistry", marks: 90 },
      { name: "Maths", marks: 91 },
      { name: "GUJCET", marks: "110/120" },
    ],
    badge: "silver",
  },
  {
    name: "Satyam Gupta",
    rank: "P.R. Rank 86.91",
    photo: stu3,
    subjects: [
      { name: "Physics", marks: 84 },
      { name: "Chemistry", marks: 86 },
      { name: "Maths", marks: 87 },
      { name: "GUJCET", marks: "89/120" },
    ],
    badge: "bronze",
  },
];

const class10Performers: Performer[] = [
  {
    name: "Aneeq Sarwar Ali Mirza",
    rank: "A1 Grade",
    photo: stu4,
    subjects: [],
    badge: "gold",
  },
  {
    name: "Sakshi Yogendra Maurya",
    rank: "A1 Grade",
    photo: stu5,
    subjects: [],
    badge: "silver",
  },
];


const badgeStyles: Record<BadgeKey, {
  border: string; bg: string; icon: string; badge: string; rankBg: string; scoreBg: string;
}> = {
  gold: {
    border: "border-yellow-400/60",
    bg: "bg-gradient-to-br from-yellow-50 to-amber-50",
    icon: "text-yellow-500",
    badge: "bg-yellow-100 text-yellow-700 border-yellow-300",
    rankBg: "bg-yellow-500",
    scoreBg: "bg-yellow-500 text-white",
  },
  silver: {
    border: "border-slate-300/60",
    bg: "bg-gradient-to-br from-slate-50 to-gray-50",
    icon: "text-slate-500",
    badge: "bg-slate-100 text-slate-700 border-slate-300",
    rankBg: "bg-slate-400",
    scoreBg: "bg-slate-500 text-white",
  },
  bronze: {
    border: "border-orange-300/60",
    bg: "bg-gradient-to-br from-orange-50 to-amber-50",
    icon: "text-orange-500",
    badge: "bg-orange-100 text-orange-700 border-orange-300",
    rankBg: "bg-orange-500",
    scoreBg: "bg-orange-500 text-white",
  },
  normal: {
    border: "border-border",
    bg: "bg-card",
    icon: "text-accent",
    badge: "bg-accent/10 text-accent border-accent/30",
    rankBg: "bg-accent",
    scoreBg: "bg-accent text-white",
  },
};

const badgeIcon: Record<BadgeKey, ReactNode> = {
  gold: <Trophy className="h-4 w-4" />,
  silver: <Medal className="h-4 w-4" />,
  bronze: <Medal className="h-4 w-4" />,
  normal: <Star className="h-4 w-4" />,
};

function PerformerCard({ performer, index }: { performer: Performer; index: number }) {
  const styles = badgeStyles[performer.badge];
  return (
    <Reveal delay={index * 80}>
      <div
        className={`relative flex h-full flex-col rounded-2xl border ${styles.border} ${styles.bg} p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift`}
      >
        {/* Badge icon top-right */}
        <span
          className={`absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border ${styles.badge} ${styles.icon}`}
        >
          {badgeIcon[performer.badge]}
        </span>

        {/* Avatar photo */}
        <div
          className={`mb-4 h-20 w-20 overflow-hidden rounded-2xl border-2 ${styles.border} shadow-soft`}
        >
          <img
            src={performer.photo}
            alt={`Photo of ${performer.name}`}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>

        <h3 className="text-base font-bold text-foreground">{performer.name}</h3>

        {performer.rank ? (
          <span
            className={`mt-1 inline-block self-start rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles.badge}`}
          >
            {performer.rank}
          </span>
        ) : null}

        {performer.highlight ? (
          <p className="mt-2 text-xs italic leading-snug text-ink-soft">{performer.highlight}</p>
        ) : null}

        {/* Subject scores */}
        <ul className="mt-4 flex flex-col gap-2">
          {performer.subjects.map((s) => (
            <li key={s.name} className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-ink-soft">{s.name}</span>
              <span
                className={`min-w-[36px] rounded-md px-2 py-0.5 text-center text-xs font-bold ${styles.scoreBg}`}
              >
                {s.marks}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function TopPerformers() {
  const [tab, setTab] = useState<"12" | "10">("12");
  const performers = tab === "12" ? class12Performers : class10Performers;

  return (
    <section id="performers" className="py-20 md:py-28 bg-surface/50">
      <div className="container-x">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Results 2025"
            title={
              <>
                Our Top Performers
              </>
            }
            description="Our exceptional students who secured the highest results across Science and Maths."
          />

          {/* Tab switcher */}
          <div className="flex shrink-0 items-center gap-1 rounded-full border border-border bg-card p-1 shadow-soft">
            {(["12", "10"] as const).map((cls) => (
              <button
                key={cls}
                onClick={() => setTab(cls)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  tab === cls
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-ink-soft hover:text-foreground"
                }`}
              >
                Class {cls}th
              </button>
            ))}
          </div>
        </div>

        {/* Quote */}
        <Reveal delay={80}>
          <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 px-5 py-4">
            <p className="text-sm italic text-ink-soft">
              "Our exceptional students from Pandesara, Udhana, Althan, Bhatar, Dindoli, Bhestan, and Godadara
              have secured the highest results — a true symbol of academic pride and excellence."
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {performers.map((p, i) => (
            <PerformerCard key={p.name} performer={p} index={i} />
          ))}
        </div>

        {/* CTA note */}
        <Reveal delay={160}>
          <p className="mt-8 text-center text-sm text-ink-soft">
            <span className="font-semibold text-foreground">Call +91 74051 62060</span> · Don't forget to call us!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
