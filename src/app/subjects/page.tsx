import type { Metadata } from "next";
import { getSubjects, getCombinations } from "@/lib/data";
import { SubjectSelector } from "@/components/SubjectSelector";

export const metadata: Metadata = { title: "Бейіндік пәндеріңді таңда" };

export default async function SubjectsPage() {
  const [subjects, combinations] = await Promise.all([getSubjects(), getCombinations()]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-widest text-flame">Қадам 1</p>
      <h1 className="mt-2 font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
        Бейіндік пәндерің қандай?
      </h1>
      <p className="mt-3 max-w-lg text-ink/70">
        Екі профильдік пәніңді таңда — соларға сәйкес мамандықтарды көрсетеміз.
      </p>

      <div className="mt-10">
        <SubjectSelector subjects={subjects} combinations={combinations} />
      </div>
    </section>
  );
}
