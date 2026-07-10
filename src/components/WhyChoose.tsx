import {
  GraduationCap,
  Users,
  UserRoundCheck,
  ClipboardCheck,
  MessageCircleQuestion,
  BellRing,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  { icon: GraduationCap, title: "Experienced faculty", desc: "Educators with a decade+ of teaching mastery across grades and subjects." },
  { icon: Users, title: "Small batch sizes", desc: "Limited seats per batch to guarantee attention, discussion, and pace." },
  { icon: UserRoundCheck, title: "Personalized attention", desc: "Learning plans shaped around each student's strengths and gaps." },
  { icon: ClipboardCheck, title: "Regular assessments", desc: "Weekly tests, mock exams, and analytics-driven progress reviews." },
  { icon: MessageCircleQuestion, title: "Doubt-solving sessions", desc: "Dedicated one-on-one time to resolve concepts before they pile up." },
  { icon: BellRing, title: "Parent progress updates", desc: "Transparent reports, meetings, and instant updates for every parent." },
];

export function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          align="center"
          label="Why Choose Us"
          title="A learning experience parents and students trust"
          description="Everything about Success Group Tuition is designed to make learning focused, structured, and genuinely enjoyable."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="flex h-full flex-col gap-4 bg-card p-8 transition-colors hover:bg-surface">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
