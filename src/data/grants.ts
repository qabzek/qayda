import { Grant } from "@/types";

// ✅ B057 is verified against univision.kz (aggregated testcenter.kz 2025
// competition results) — see data/sources.ts → "univision". "Толық
// күндізгі" (full-time) grant count used.
// ⚠️ Everything else still references sourceId "demo" — see README.md.
// Entries only exist for specialties where at least illustrative figures
// were available; most of the newly added specialties intentionally have
// no entry here, so the UI shows "Дерек жоқ" rather than an invented number.
export const grants: Grant[] = [
  { groupCode: "B057", year: 2025, grants: 4800, sourceId: "univision" },
  { groupCode: "B058", year: 2026, grants: 612, sourceId: "demo" },
  { groupCode: "B062", year: 2026, grants: 1510, sourceId: "demo" },
  { groupCode: "B010", year: 2026, grants: 980, sourceId: "demo" },
  { groupCode: "BM086", year: 2026, grants: 3120, sourceId: "demo" },
  { groupCode: "B085", year: 2026, grants: 540, sourceId: "demo" },
];

export function getGrant(groupCode: string, year?: number): Grant | undefined {
  if (year !== undefined) return grants.find((g) => g.groupCode === groupCode && g.year === year);
  // No year specified: return the most recent entry for this group.
  return grants
    .filter((g) => g.groupCode === groupCode)
    .sort((a, b) => b.year - a.year)[0];
}
