"use client";

import { useMemo, useState } from "react";
import { UniversityCard } from "@/components/UniversityCard";
import type { University } from "@/types";

const CITIES = ["Барлығы", "Алматы", "Астана", "Шымкент", "Қарағанды", "Басқа"];

export function UniversityExplorer({ universities }: { universities: University[] }) {
  const [city, setCity] = useState("Барлығы");

  const filtered = useMemo(
    () => (city === "Барлығы" ? universities : universities.filter((u) => u.city === city)),
    [universities, city]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {CITIES.map((c) => (
          <button
            key={c}
            onClick={() => setCity(c)}
            className={`brutal px-4 py-2 font-display text-xs font-bold uppercase tracking-wide transition-colors ${
              city === c ? "bg-ink text-paper" : "bg-paper hover:bg-lime/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="brutal p-10 text-center">
          <p className="font-display text-xl font-bold uppercase">Ештеңе табылмады</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((u) => (
            <UniversityCard key={u.id} slug={u.slug} name={u.name} city={u.city} programCount={u.programSlugs.length} />
          ))}
        </div>
      )}
    </div>
  );
}
