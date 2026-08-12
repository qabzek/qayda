import type { Metadata } from "next";
import { getUniversities } from "@/lib/data";
import { UniversityExplorer } from "@/components/UniversityExplorer";

export const metadata: Metadata = { title: "ЖОО тізімі" };

export default async function UniversitiesPage() {
  const universities = await getUniversities();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
        Қай ЖОО-да
        <br />
        оқуға болады?
      </h1>
      <p className="mt-3 max-w-lg text-ink/70">{universities.length} университет тізімде.</p>

      <div className="mt-10">
        <UniversityExplorer universities={universities} />
      </div>
    </section>
  );
}
