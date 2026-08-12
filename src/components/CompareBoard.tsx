"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import type { Specialty } from "@/types";
import type { PerspectiveResult } from "@/lib/perspective";

export interface CompareRow {
  specialty: Specialty;
  perspective?: PerspectiveResult;
  grants?: number;
  passingScore?: number;
  salaryLabel?: string;
  universityCount: number;
}

export function CompareBoard({ all, initialRows }: { all: Specialty[]; initialRows: CompareRow[] }) {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialRows.map((r) => r.specialty.id).slice(0, 3));
  const rows = useMemo(
    () => selectedIds.map((id) => initialRows.find((r) => r.specialty.id === id)).filter(Boolean) as CompareRow[],
    [selectedIds, initialRows]
  );

  function toggle(id: string) {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  }

  const metrics: { label: string; get: (r: CompareRow) => string }[] = [
    { label: "Грант", get: (r) => (r.grants ? r.grants.toLocaleString("ru-RU") : "Дерек жоқ") },
    { label: "Өту балы", get: (r) => (r.passingScore ? String(r.passingScore) : "Дерек жоқ") },
    { label: "Мақсатты балл", get: (r) => (r.specialty.targetScore ? `${r.specialty.targetScore}+` : "Дерек жоқ") },
    { label: "Жалақы", get: (r) => r.salaryLabel ?? "Дерек жоқ" },
    { label: "Перспективалық индекс", get: (r) => (r.perspective ? `${r.perspective.score}/100` : "Дерек жеткіліксіз") },
    { label: "ЖОО саны", get: (r) => String(r.universityCount) },
  ];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {all.map((s) => {
          const active = selectedIds.includes(s.id);
          const disabled = !active && selectedIds.length >= 3;
          return (
            <button
              key={s.id}
              disabled={disabled}
              onClick={() => toggle(s.id)}
              className={`brutal flex items-center gap-2 px-3 py-2 font-display text-xs font-bold uppercase tracking-wide ${
                active ? "bg-lime" : disabled ? "opacity-40" : "bg-paper hover:bg-lime/30"
              }`}
            >
              {s.name}
              {active && <X size={12} />}
            </button>
          );
        })}
      </div>

      {rows.length === 0 ? (
        <p className="brutal p-8 text-center text-ink/60">Салыстыру үшін кемінде 1 мамандық таңда.</p>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="brutal w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b-[3px] border-ink p-3 text-left font-display text-xs uppercase text-ink/50">
                    Көрсеткіш
                  </th>
                  {rows.map((r) => (
                    <th key={r.specialty.id} className="border-b-[3px] border-l-[3px] border-ink p-3 text-left font-display text-sm uppercase">
                      {r.specialty.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {metrics.map((m) => (
                  <tr key={m.label}>
                    <td className="border-t border-ink/20 p-3 text-sm text-ink/60">{m.label}</td>
                    {rows.map((r) => (
                      <td key={r.specialty.id} className="border-t border-l-[3px] border-ink/20 p-3 font-display font-bold">
                        {m.get(r)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="grid gap-4 md:hidden">
            {rows.map((r) => (
              <div key={r.specialty.id} className="brutal p-4">
                <h3 className="font-display text-lg font-bold uppercase">{r.specialty.name}</h3>
                <dl className="mt-3 space-y-2">
                  {metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between border-t border-ink/10 pt-2 text-sm">
                      <dt className="text-ink/50">{m.label}</dt>
                      <dd className="font-display font-bold">{m.get(r)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
