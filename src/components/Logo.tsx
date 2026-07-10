import logoImg from "@/assets/logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoImg}
        alt="Success Group Tuition logo"
        className="h-9 w-9 rounded-lg object-contain shadow-soft"
      />
      <div className="leading-tight">
        <div className="font-display text-[1.05rem] font-bold tracking-tight text-foreground">Success Group Tuition</div>
        <div className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">A Place of Success</div>
      </div>
    </div>
  );
}
