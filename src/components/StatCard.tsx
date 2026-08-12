export function StatCard({
  icon,
  label,
  value,
  sublabel,
  accent,
}: {
  icon?: string;
  label: string;
  value: string;
  sublabel?: string;
  accent?: boolean;
}) {
  return (
    <div className={`brutal p-5 ${accent ? "bg-lime" : "bg-paper"}`}>
      {icon && <span className="text-xl">{icon}</span>}
      <p className="mt-2 font-display text-xs font-bold uppercase tracking-widest text-ink/60">{label}</p>
      <p className="mt-1 font-display text-3xl font-black leading-none sm:text-4xl">{value}</p>
      {sublabel && <p className="mt-1 text-xs text-ink/50">{sublabel}</p>}
    </div>
  );
}
