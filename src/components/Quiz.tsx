"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { quizQuestions } from "@/data/quiz";
import type { PerspectiveCategory, Specialty } from "@/types";

export function Quiz({ specialties }: { specialties: (Specialty & { category: PerspectiveCategory })[] }) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [step, setStep] = useState(0);
  const done = step >= quizQuestions.length;

  function answer(id: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setStep((s) => s + 1);
  }

  const categoryScores = useMemo(() => {
    const scores: Partial<Record<PerspectiveCategory, number>> = {};
    const maxScores: Partial<Record<PerspectiveCategory, number>> = {};

    quizQuestions.forEach((q) => {
      Object.entries(q.weights).forEach(([cat, weight]) => {
        const c = cat as PerspectiveCategory;
        maxScores[c] = (maxScores[c] ?? 0) + weight;
        if (answers[q.id]) scores[c] = (scores[c] ?? 0) + weight;
      });
    });

    return Object.keys(maxScores).map((cat) => {
      const c = cat as PerspectiveCategory;
      const pct = Math.round(((scores[c] ?? 0) / (maxScores[c] ?? 1)) * 100);
      return { category: c, pct };
    });
  }, [answers]);

  const topMatches = useMemo(() => {
    return categoryScores
      .sort((a, b) => b.pct - a.pct)
      .flatMap(({ category, pct }) =>
        specialties.filter((s) => s.category === category).map((s) => ({ specialty: s, pct }))
      )
      .slice(0, 5);
  }, [categoryScores, specialties]);

  if (!done) {
    const q = quizQuestions[step];
    return (
      <div>
        <div className="mb-6 h-2 w-full border-2 border-ink">
          <div
            className="h-full bg-lime transition-all"
            style={{ width: `${(step / quizQuestions.length) * 100}%` }}
          />
        </div>
        <p className="font-display text-xs font-bold uppercase tracking-widest text-ink/50">
          {step + 1} / {quizQuestions.length}
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-snug sm:text-3xl">{q.textKz}</h2>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button onClick={() => answer(q.id, true)} className="brutal brutal-hover bg-lime py-6 font-display text-lg font-bold uppercase">
            Иә
          </button>
          <button onClick={() => answer(q.id, false)} className="brutal brutal-hover bg-paper py-6 font-display text-lg font-bold uppercase">
            Жоқ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display text-2xl font-bold uppercase sm:text-3xl">Саған сәйкес мамандықтар</h2>

      {topMatches.length === 0 ? (
        <p className="brutal mt-6 p-6 text-ink/60">Дерек жеткіліксіз. Қайта көріп шық.</p>
      ) : (
        <div className="mt-6 space-y-3">
          {topMatches.map(({ specialty, pct }, i) => (
            <Link key={specialty.id} href={`/specialties/${specialty.slug}`} className="block">
              <div className="brutal brutal-hover flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl font-black text-ink/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base font-bold uppercase sm:text-lg">{specialty.name}</span>
                </div>
                <span className="font-display text-lg font-black text-flame">{pct}%</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      <p className="mt-6 max-w-lg text-sm text-ink/50">
        Бұл тест — бағыт таңдауға көмектесетін қарапайым құрал. Бұл психологиялық диагноз емес.
      </p>

      <button
        onClick={() => {
          setAnswers({});
          setStep(0);
        }}
        className="brutal brutal-hover mt-6 bg-paper px-6 py-3 font-display text-sm font-bold uppercase"
      >
        Қайта бастау
      </button>
    </div>
  );
}
