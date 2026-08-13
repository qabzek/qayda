import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getSpecialty,
  getGroup,
  getGrant,
  getPassingScoresForGroup,
  getPerspective,
  getSalaries,
  getUniversitiesForSpecialty,
  getSource,
  getMinimumScoresForGroup,
} from "@/lib/data";
import { StatCard } from "@/components/StatCard";
import { RatingBadge } from "@/components/RatingBadge";
import { SourceBadge } from "@/components/SourceBadge";
import { UniversityCard } from "@/components/UniversityCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const specialty = await getSpecialty(slug);
  if (!specialty) return {};
  return {
    title: `${specialty.name} — ҰБТ 2026`,
    description: specialty.descriptionKz,
  };
}

function fmt(n?: number) {
  return n !== undefined ? n.toLocaleString("ru-RU") : undefined;
}

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialty = await getSpecialty(slug);
  if (!specialty) notFound();

  const [group, grant, scores, perspective, salaries, universities] = await Promise.all([
    getGroup(specialty.groupCode),
    getGrant(specialty.groupCode),
    getPassingScoresForGroup(specialty.groupCode),
    getPerspective(specialty.id),
    getSalaries(specialty.id),
    getUniversitiesForSpecialty(specialty.slug),
  ]);

  const thresholdScores = await getMinimumScoresForGroup(specialty.groupCode);
  const minThreshold = thresholdScores.length
    ? thresholdScores.reduce((min, t) => Math.min(min, t.score), thresholdScores[0].score)
    : undefined;
  const maxThreshold = thresholdScores.length
    ? thresholdScores.reduce((max, t) => Math.max(max, t.score), thresholdScores[0].score)
    : undefined;
  const bestScore = scores.reduce<typeof scores[number] | undefined>(
    (best, s) => (!best || (s.general ?? 0) > (best.general ?? 0) ? s : best),
    undefined
  );
  const ruralEntries = scores.filter((s) => s.rural !== undefined);
  const grantSource = await getSource(grant?.sourceId);
  const scoreSource = await getSource(bestScore?.sourceId);
  const combinationLabel = group?.subjectCombinationId
    ? group.subjectCombinationId
        .split("-")
        .join(" + ")
    : undefined;

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link
        href={group ? `/subjects/${group.subjectCombinationId}` : "/subjects"}
        className="font-display text-xs font-bold uppercase tracking-widest text-flame"
      >
        ← Мамандықтарға оралу
      </Link>

      {/* HERO */}
      <header className="mt-4 border-b-[3px] border-ink pb-8">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-ink/50">
          {specialty.groupCode}
        </p>
        <h1 className="mt-2 font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
          {specialty.name}
        </h1>
        {group && (
          <p className="mt-3 font-display text-lg font-bold uppercase text-ink/60">
            {group.legacyCode && <span className="mr-2 text-ink/40">({group.legacyCode})</span>}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <RatingBadge perspective={perspective} />
        </div>
      </header>

      {/* KEY INDICATORS */}
      <section className="mt-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard icon="🎓" label={`${grant?.year ?? 2026} грант`} value={fmt(grant?.grants) ?? "Дерек жоқ"} />
          <StatCard icon="📊" label={`${bestScore?.year ?? 2025} өту балы`} value={fmt(bestScore?.general) ?? "Дерек жоқ"} />
          <StatCard
            icon="🎯"
            label="Мақсатты балл"
            value={specialty.targetScore ? `${specialty.targetScore}+` : "Дерек жоқ"}
            accent
          />
          <StatCard
            icon="🌾"
            label="Ауыл квотасы"
            value={ruralEntries[0]?.rural !== undefined ? fmt(ruralEntries[0].rural)! : "Дерек жоқ"}
          />
        </div>
      </section>

      {/* SCORE BREAKDOWN — never mix threshold / actual / target */}
      <section className="mt-8">
        <h2 className="font-display text-xl font-bold uppercase">Балдар</h2>
        <div className="brutal mt-4 divide-y-[3px] divide-ink">
          <ScoreRow
            label="Шекті балл (2026)"
            hint={
              minThreshold !== undefined && maxThreshold !== undefined && minThreshold !== maxThreshold
                ? `ЖОО-ға байланысты ${minThreshold}–${maxThreshold} аралығында өзгереді`
                : "Қатысу үшін қажетті минимум"
            }
            value={minThreshold !== undefined ? String(minThreshold) : undefined}
          />
          <ScoreRow label="2025 өту балы" hint="Өткен жылғы нақты конкурс нәтижесі" value={fmt(bestScore?.general)} />
          <ScoreRow label="🎯 QAYDA мақсаты" hint="Аналитикалық ұсыныс" value={specialty.targetScore ? `${specialty.targetScore}+` : undefined} accent />
        </div>
        {specialty.targetScore && (
          <p className="mt-2 text-xs text-ink/50">Бұл — кепілдік емес. Қауіпсіз мақсат ретінде ұсынылған балл.</p>
        )}
      </section>

      {/* RURAL QUOTA */}
      <section className="mt-8">
        <h2 className="font-display text-xl font-bold uppercase">🌾 Ауыл квотасы</h2>
        {ruralEntries.length > 0 ? (
          <div className="brutal mt-4 grid grid-cols-2 divide-x-[3px] divide-ink">
            <div className="p-5">
              <p className="text-xs text-ink/50">2025 жалпы конкурс</p>
              <p className="font-display text-3xl font-black">{fmt(ruralEntries[0].general)}</p>
            </div>
            <div className="p-5">
              <p className="text-xs text-ink/50">2025 ауыл квотасы</p>
              <p className="font-display text-3xl font-black">{fmt(ruralEntries[0].rural)}</p>
            </div>
          </div>
        ) : (
          <p className="brutal mt-4 p-5 text-ink/60">Ауыл квотасы бойынша дерек жоқ</p>
        )}
        <p className="mt-3 text-sm text-ink/60">
          Ауыл квотасы бойынша конкурс бөлек жүргізіледі. Өту балы жыл сайын конкурсқа байланысты өзгереді.
        </p>
      </section>

      {/* WHAT IS THIS SPECIALTY */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-bold uppercase">Бұл мамандық не?</h2>
        <p className="mt-3 text-base leading-relaxed text-ink/80">{specialty.descriptionKz}</p>
        {combinationLabel && (
          <p className="mt-2 text-sm text-ink/50">Пән комбинациясы: {combinationLabel}</p>
        )}
      </section>

      {/* WHAT YOU STUDY */}
      {specialty.whatYouStudy.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold uppercase">Университетте не үйренесің?</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {specialty.whatYouStudy.map((topic, i) => (
              <div key={topic} className="brutal flex items-center gap-3 p-4">
                <span className="font-display text-2xl font-black text-ink/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm font-bold uppercase">{topic}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CAREERS */}
      {specialty.careers.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold uppercase">Кім бола аласың?</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specialty.careers.map((career) => (
              <div key={career.title} className="brutal p-5">
                <h3 className="font-display text-lg font-bold">{career.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{career.descriptionKz}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SALARY */}
      {salaries.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold uppercase">💰 Жалақы</h2>
          {salaries.map((s) => (
            <div key={s.role} className="brutal mt-4 divide-y-[3px] divide-ink">
              <div className="flex items-center justify-between p-4">
                <span className="font-display text-sm font-bold uppercase">{s.role}</span>
                <SourceBadge sourceId={s.sourceId} />
              </div>
              {s.junior && (
                <SalaryRow label="Junior" value={`${fmt(s.junior)}–${fmt(s.middle ?? s.junior)} ₸`} />
              )}
              {s.middle && <SalaryRow label="Middle" value={`${fmt(s.middle)}–${fmt(s.senior ?? s.middle)} ₸`} />}
              {s.senior && <SalaryRow label="Senior" value={`${fmt(s.senior)} ₸+`} />}
              {s.median && !s.junior && <SalaryRow label="Медиана" value={`${fmt(s.median)} ₸`} />}
            </div>
          ))}
          <p className="mt-2 text-xs text-ink/50">
            Шамамен. Нарықтағы ашық деректер негізінде. Жалақы қаладан, компаниядан, тәжірибеден және мамандануға
            байланысты өзгеруі мүмкін.
          </p>
        </section>
      )}

      {/* COMPANIES */}
      {specialty.companies.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold uppercase">Қайда жұмыс істейсің?</h2>
          <p className="mt-2 text-sm text-ink/60">Осы бағыттағы мамандар жұмыс істей алатын компаниялар.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {specialty.companies.map((c) => (
              <span key={c} className="brutal bg-paper px-4 py-2 font-display text-sm font-bold">
                {c}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* UNIVERSITIES */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-bold uppercase">Қай ЖОО-да оқуға болады?</h2>
        {universities.length > 0 ? (
          <>
            <p className="mt-2 text-sm text-ink/60">
              2026 жылғы шекті балл бойынша сұрыпталды — ең қолжетімдіден бастап.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {universities
                .map((u) => ({
                  u,
                  score: thresholdScores.find((t) => t.universityId === u.id)?.score,
                }))
                .sort((a, b) => (a.score ?? 999) - (b.score ?? 999))
                .map(({ u, score }) => (
                  <UniversityCard
                    key={u.id}
                    slug={u.slug}
                    name={u.name}
                    city={u.city}
                    thresholdScore={score}
                  />
                ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <SourceBadge sourceId="official-mon" organization="ҚР Ғылым және жоғары білім министрлігі" />
            </div>
          </>
        ) : (
          <p className="brutal mt-4 p-5 text-ink/60">Дерек әзірге жоқ</p>
        )}
      </section>

      {/* SOURCES */}
      <section className="mt-10 border-t-[3px] border-ink pt-6">
        <h2 className="font-display text-sm font-bold uppercase tracking-widest text-ink/50">Дереккөздер</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <SourceBadge sourceId={grant?.sourceId} organization={grantSource?.organization} />
          <SourceBadge sourceId={bestScore?.sourceId} organization={scoreSource?.organization} />
        </div>
      </section>
    </article>
  );
}

function ScoreRow({ label, hint, value, accent }: { label: string; hint: string; value?: string; accent?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-4 p-4 ${accent ? "bg-lime" : ""}`}>
      <div>
        <p className="font-display text-sm font-bold uppercase">{label}</p>
        <p className="text-xs text-ink/50">{hint}</p>
      </div>
      <span className="font-display text-2xl font-black">{value ?? "Дерек жоқ"}</span>
    </div>
  );
}

function SalaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between p-4">
      <span className="text-sm text-ink/60">{label}</span>
      <span className="font-display font-bold">{value}</span>
    </div>
  );
}
