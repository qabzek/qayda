export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-[3px] border-ink bg-ink py-3 text-paper">
      <div className="qd-marquee-track flex w-max gap-8 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-sm font-bold uppercase tracking-wide sm:text-base">
            {item} <span className="text-flame">→</span>
          </span>
        ))}
      </div>
    </div>
  );
}
