import type { Metadata } from "next";
import { getSpecialties, getGrant, getPassingScoresForGroup, getPerspective, getSalaries, getUniversitiesForSpecialty } from "@/lib/data";
import { CompareBoard, CompareRow } from "@/components/CompareBoard";

export const metadata: Metadata = { title: "Мамандықтарды салыстыру" };

export default async function ComparePage() {
  const specialties = await getSpecialties();

  const rows: CompareRow[] = await Promise.all(
    specialties.map(async (specialty) => {
      const [grant, scores, perspective, salaries, universities] = await Promise.all([
        getGrant(specialty.groupCode),
        getPassingScoresForGroup(specialty.groupCode),
        getPerspective(specialty.id),
        getSalaries(specialty.id),
        getUniversitiesForSpecialty(specialty.slug),
      ]);
      const bestScore = scores.reduce<number | undefined>(
        (best, s) => (s.general && (!best || s.general > best) ? s.general : best),
        undefined
      );
      const salary = salaries[0];
      return {
        specialty,
        perspective,
        grants: grant?.grants,
        passingScore: bestScore,
        salaryLabel: salary && salary.junior && salary.senior
          ? `${(salary.junior / 1000).toFixed(0)}0000–${(salary.senior / 1000).toFixed(0)}0000₸`
          : undefined,
        universityCount: universities.length,
      };
    })
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
        Мамандықтарды
        <br />
        салыстыр
      </h1>
      <p className="mt-3 max-w-lg text-ink/70">Кемінде 1, көбі 3 мамандықты таңдап салыстыр.</p>

      <div className="mt-10">
        <CompareBoard all={specialties} initialRows={rows} />
      </div>
    </section>
  );
}
