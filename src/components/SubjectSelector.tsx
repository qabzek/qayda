"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SubjectCard } from "./SubjectCard";
import type { Subject, SubjectCombination } from "@/types";

export function SubjectSelector({
  subjects,
  combinations,
}: {
  subjects: Subject[];
  combinations: SubjectCombination[];
}) {
  const router = useRouter();
  const [first, setFirst] = useState<string | null>(null);
  const [second, setSecond] = useState<string | null>(null);

  const subjectIdsInUse = useMemo(() => {
    const set = new Set<string>();
    combinations.forEach((c) => c.subjectIds.forEach((id) => set.add(id)));
    return Array.from(set);
  }, [combinations]);

  const firstOptions = subjects.filter((s) => subjectIdsInUse.includes(s.id));

  const secondOptions = useMemo(() => {
    if (!first) return [];
    const partnerIds = new Set<string>();
    combinations.forEach((c) => {
      if (c.subjectIds[0] === first) partnerIds.add(c.subjectIds[1]);
      if (c.subjectIds[1] === first) partnerIds.add(c.subjectIds[0]);
    });
    return subjects.filter((s) => partnerIds.has(s.id));
  }, [first, subjects, combinations]);

  function pickFirst(id: string) {
    setFirst(id);
    setSecond(null);
  }

  function pickSecond(id: string) {
    setSecond(id);
    const combo = combinations.find(
      (c) =>
        (c.subjectIds[0] === first && c.subjectIds[1] === id) ||
        (c.subjectIds[0] === id && c.subjectIds[1] === first)
    );
    if (combo) {
      setTimeout(() => router.push(`/subjects/${combo.id}`), 250);
    }
  }

  return (
    <div className="space-y-10">
      <div>
        <p className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-ink/50">
          1-пән
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {firstOptions.map((s) => (
            <SubjectCard key={s.id} label={s.nameKz} selected={first === s.id} onClick={() => pickFirst(s.id)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {first && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-ink/50">
              2-пән
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {secondOptions.map((s) => (
                <SubjectCard
                  key={s.id}
                  label={s.nameKz}
                  selected={second === s.id}
                  onClick={() => pickSecond(s.id)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
