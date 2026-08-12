"use client";

import { useMemo, useState } from "react";
import { SpecialtyCard } from "./SpecialtyCard";
import type { PerspectiveResult } from "@/lib/perspective";
import type { PerspectiveCategory } from "@/types";

export interface SpecialtyCardData {
  slug: string;
  name: string;
  groupCode: string;
  category: PerspectiveCategory;
  perspective: PerspectiveResult | undefined;
  grants?: number;
  targetScore?: number;
  salaryRangeLabel?: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  all: "Барлығы",
  it: "IT",
  engineering: "Инженерия",
  pedagogy: "Педагогика",
  medicine: "Медицина",
  business: "Бизнес",
};

export function SpecialtyExplorer({ items }: { items: SpecialtyCardData[] }) {
  const [category, setCategory] = useState<string>("all");

  const availableCategories = useMemo(() => {
    const set = new Set(items.map((i) => i.category));
    return ["all", ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(() => {
    const list = category === "all" ? items : items.filter((i) => i.category === category);
    return [...list].sort((a, b) => (b.perspective?.score ?? -1) - (a.perspective?.score ?? -1));
  }, [items, category]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {availableCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`brutal px-4 py-2 font-display text-xs font-bold uppercase tracking-wide transition-colors ${
              category === c ? "bg-ink text-paper" : "bg-paper hover:bg-lime/40"
            }`}
          >
            {CATEGORY_LABELS[c] ?? c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="brutal p-10 text-center">
          <p className="font-display text-xl font-bold uppercase">Ештеңе табылмады</p>
          <p className="mt-2 text-ink/60">Басқа санатты таңдап көр.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <SpecialtyCard key={item.slug} index={i + 1} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
