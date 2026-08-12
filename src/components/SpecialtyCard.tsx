import Link from "next/link";
import { PerspectiveResult } from "@/lib/perspective";
import { RatingBadge } from "./RatingBadge";

export function SpecialtyCard({
  index,
  slug,
  name,
  groupCode,
  perspective,
  grants,
  targetScore,
  salaryRangeLabel,
}: {
  index: number;
  slug: string;
  name: string;
  groupCode: string;
  perspective: PerspectiveResult | undefined;
  grants?: number;
  targetScore?: number;
  salaryRangeLabel?: string;
}) {
  return (
    <Link href={`/specialties/${slug}`} className="block">
      <div className="brutal brutal-hover flex h-full flex-col justify-between gap-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="font-display text-3xl font-black text-ink/20">{String(index).padStart(2, "0")}</span>
          <RatingBadge perspective={perspective} />
        </div>

        <div>
          <p className="font-display text-xs font-bold uppercase tracking-widest text-ink/50">{groupCode}</p>
          <h3 className="font-display text-xl font-bold uppercase leading-snug sm:text-2xl">{name}</h3>
        </div>

        <dl className="grid grid-cols-1 gap-2 border-t-[3px] border-ink pt-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs text-ink/50">🎓 Грант</dt>
            <dd className="font-display font-bold">{grants ? grants.toLocaleString("ru-RU") : "Дерек жоқ"}</dd>
          </div>
          <div>
            <dt className="text-xs text-ink/50">🎯 Мақсатты балл</dt>
            <dd className="font-display font-bold">{targetScore ? `${targetScore}+` : "Дерек жоқ"}</dd>
          </div>
          <div>
            <dt className="text-xs text-ink/50">💰 Жалақы</dt>
            <dd className="font-display font-bold">{salaryRangeLabel ?? "Дерек жоқ"}</dd>
          </div>
        </dl>

        <span className="font-display text-sm font-bold uppercase text-flame">Толығырақ →</span>
      </div>
    </Link>
  );
}
