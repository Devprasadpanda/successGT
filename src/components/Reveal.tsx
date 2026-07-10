import type { ReactNode, CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "span" | "li" | "article";
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
