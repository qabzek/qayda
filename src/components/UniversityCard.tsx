import Link from "next/link";

export function UniversityCard({
  slug,
  name,
  city,
  programCount,
  thresholdScore,
}: {
  slug: string;
  name: string;
  city: string;
  programCount?: number;
  /** Шекті балл для КОНКРЕТНОЙ специальности в этом вузе — показывается,
   * когда карточка используется на странице специальности. */
  thresholdScore?: number;
}) {
  return (
    <Link href={`/universities/${slug}`} className="block">
      <div className="brutal brutal-hover flex h-full flex-col justify-between gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-flame">{city}</p>
            <h3 className="mt-1 font-display text-lg font-bold uppercase leading-snug">{name}</h3>
          </div>
          {thresholdScore !== undefined && (
            <span className="brutal shrink-0 bg-lime px-3 py-1.5 text-center">
              <span className="block font-display text-xl font-black leading-none">{thresholdScore}</span>
              <span className="block text-[9px] font-bold uppercase leading-none text-ink/60">шекті балл</span>
            </span>
          )}
        </div>
        {programCount !== undefined && <p className="text-sm text-ink/60">{programCount} бағдарлама</p>}
      </div>
    </Link>
  );
}
