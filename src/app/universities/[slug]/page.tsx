import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getUniversity, getSpecialty, getGrant, getPassingScoresForGroup } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const u = await getUniversity(slug);
  if (!u) return {};
  return { title: u.name };
}

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const university = await getUniversity(slug);
  if (!university) notFound();

  const programs = await Promise.all(
    university.programSlugs.map(async (progSlug) => {
      const specialty = await getSpecialty(progSlug);
      if (!specialty) return null;
      const [grant, scores] = await Promise.all([
        getGrant(specialty.groupCode),
        getPassingScoresForGroup(specialty.groupCode),
      ]);
      const own = scores.find((s) => s.universityId === university.id);
      return { specialty, grant, own };
    })
  );

  const validPrograms = programs.filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/universities" className="font-display text-xs font-bold uppercase tracking-widest text-flame">
        ← ЖОО тізіміне оралу
      </Link>

      <header className="mt-4 border-b-[3px] border-ink pb-8">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-flame">{university.city}</p>
        <h1 className="mt-2 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
          {university.name}
        </h1>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {university.type && <span className="brutal bg-paper px-3 py-1">{university.type}</span>}
          {university.website && (
            <a
              href={university.website}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal flex items-center gap-2 bg-paper px-3 py-1 hover:bg-lime/40"
            >
              Сайты <ExternalLink size={14} />
            </a>
          )}
        </div>
      </header>

      <section className="mt-8">
        <h2 className="font-display text-xl font-bold uppercase">Бағдарламалар</h2>
        {validPrograms.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4">
            {validPrograms.map(({ specialty, grant, own }) => (
              <Link key={specialty.id} href={`/specialties/${specialty.slug}`} className="block">
                <div className="brutal brutal-hover flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-display text-xs font-bold uppercase tracking-widest text-ink/50">
                      {specialty.groupCode}
                    </p>
                    <h3 className="font-display text-lg font-bold uppercase">{specialty.name}</h3>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-xs text-ink/50">2025 өту балы</p>
                      <p className="font-display font-bold">{own?.general ?? "Дерек жоқ"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-ink/50">Ауыл квотасы</p>
                      <p className="font-display font-bold">{own?.rural ?? "Дерек жоқ"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-ink/50">Грант</p>
                      <p className="font-display font-bold">{grant?.grants ?? "Дерек жоқ"}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="brutal mt-4 p-5 text-ink/60">Дерек әзірге жоқ</p>
        )}
      </section>
    </article>
  );
}
