import { PerspectiveResult } from "@/lib/perspective";

export function RatingBadge({ perspective }: { perspective: PerspectiveResult | undefined }) {
  if (!perspective) {
    return (
      <span className="inline-block border-[3px] border-dashed border-ink/40 px-3 py-1 font-display text-xs font-bold uppercase text-ink/50">
        Дерек жеткіліксіз
      </span>
    );
  }

  return (
    <span className="brutal inline-flex items-baseline gap-2 bg-lime px-3 py-1">
      <span className="font-display text-lg font-black leading-none">{perspective.score}</span>
      <span className="text-xs font-bold leading-none">/100</span>
      <span className="font-display text-[10px] font-bold uppercase tracking-wide">{perspective.label}</span>
    </span>
  );
}
