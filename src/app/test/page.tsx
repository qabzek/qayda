import type { Metadata } from "next";
import { getSpecialties, getGroup } from "@/lib/data";
import { Quiz } from "@/components/Quiz";
import type { PerspectiveCategory } from "@/types";

export const metadata: Metadata = { title: "Маған не сәйкес?" };

export default async function TestPage() {
  const specialties = await getSpecialties();
  const withCategory = await Promise.all(
    specialties.map(async (s) => {
      const group = await getGroup(s.groupCode);
      return { ...s, category: (group?.category ?? "business") as PerspectiveCategory };
    })
  );

  return (
    <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
        Маған не
        <br />
        сәйкес?
      </h1>
      <p className="mt-3 text-ink/70">Қарапайым сұрақтарға жауап бер.</p>

      <div className="mt-10">
        <Quiz specialties={withCategory} />
      </div>
    </section>
  );
}
