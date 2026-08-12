import Link from "next/link";

export function UniversityCard({
  slug,
  name,
  city,
  programCount,
}: {
  slug: string;
  name: string;
  city: string;
  programCount: number;
}) {
  return (
    <Link href={`/universities/${slug}`} className="block">
      <div className="brutal brutal-hover flex h-full flex-col justify-between gap-4 p-5">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-widest text-flame">{city}</p>
          <h3 className="mt-1 font-display text-lg font-bold uppercase leading-snug">{name}</h3>
        </div>
        <p className="text-sm text-ink/60">{programCount} бағдарлама</p>
      </div>
    </Link>
  );
}
