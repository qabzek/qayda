import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCombination,
  getSpecialtiesByCombination,
  getGrant,
  getPerspective,
  getSalaries,
  getGroup,
} from "@/lib/data";
import { SpecialtyExplorer, SpecialtyCardData } from "@/components/SpecialtyExplorer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ combo: string }>;
}): Promise<Metadata> {
  const { combo: comboId } = await params;
  const combo = await getCombination(comboId);
  if (!combo) return {};
  return { title: `${combo.labelKz.join(" + ")} — мамандықтар` };
}

function formatSalaryLabel(range?: { junior?: number; senior?: number; median?: number }) {
  if (!range) return undefined;
  if (range.junior && range.senior) {
    return `${range.junior.toLocaleString("ru-RU")}–${range.senior.toLocaleString("ru-RU")}₸`;
  }
  if (range.median) return `~${range.median.toLocaleString("ru-RU")}₸`;
  return undefined;
}

export default async function ComboSpecialtiesPage({
  params,
}: {
  params: Promise<{ combo: string }>;
}) {
  const { combo: comboId } = await params;
  const combo = await getCombination(comboId);
  if (!combo) notFound();

  const specialties = await getSpecialtiesByCombination(comboId);

  const items: SpecialtyCardData[] = await Promise.all(
    specialties.map(async (s) => {
      const [group, grant, perspective, salaries] = await Promise.all([
        getGroup(s.groupCode),
        getGrant(s.groupCode),
        getPerspective(s.id),
        getSalaries(s.id),
      ]);
      const salary = salaries[0];
      return {
        slug: s.slug,
        name: s.name,
        groupCode: s.groupCode,
        category: group?.category ?? "business",
        perspective,
        grants: grant?.grants,
        targetScore: s.targetScore,
        salaryRangeLabel: formatSalaryLabel(salary),
      };
    })
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link href="/subjects" className="font-display text-xs font-bold uppercase tracking-widest text-flame">
        ← Пәндерді өзгерту
      </Link>

      <h1 className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
        {combo.labelKz[0]}
        <br />+ {combo.labelKz[1]}
      </h1>
      <p className="mt-2 font-display text-xl font-bold uppercase text-ink/70">
        саған қандай мамандықтар сәйкес?
      </p>

      <p className="mt-4 text-sm text-ink/60">
        {items.length} бағыт табылды
      </p>

      <div className="mt-8">
        {items.length === 0 ? (
          <div className="brutal p-10 text-center">
            <p className="font-display text-xl font-bold uppercase">Дерек әзірге жоқ</p>
            <p className="mt-2 text-ink/60">Бұл ақпарат жаңартылуда.</p>
          </div>
        ) : (
          <SpecialtyExplorer items={items} />
        )}
      </div>
    </section>
  );
}
