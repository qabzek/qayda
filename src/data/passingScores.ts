import { PassingScore } from "@/types";

// ✅ B057 rows are verified against univision.kz (2025 Жалпы конкурс / Ауыл
// квотасы tables, aggregating testcenter.kz results). KBTU has no listed
// rural-quota entry for B057, so its `rural` field is correctly left
// undefined ("Дерек жоқ") rather than guessed.
// ⚠️ Everything else still references sourceId "demo" — see README.md.
export const passingScores: PassingScore[] = [
  { year: 2025, universityId: "kbtu", groupCode: "B057", general: 110, sourceId: "univision" },
  { year: 2025, universityId: "satbayev", groupCode: "B057", general: 75, rural: 75, sourceId: "univision" },
  { year: 2025, universityId: "enu", groupCode: "B057", general: 110, sourceId: "univision" },
  { year: 2025, universityId: "kaznu", groupCode: "B057", general: 90, rural: 90, sourceId: "univision" },
  { year: 2025, universityId: "sdu", groupCode: "B057", general: 120, sourceId: "univision" },
  { year: 2025, universityId: "kbtu", groupCode: "B058", general: 104, sourceId: "demo" },
  { year: 2025, universityId: "satbayev", groupCode: "B073", general: 82, sourceId: "demo" },
  { year: 2025, universityId: "kbtu", groupCode: "B062", general: 79, rural: 60, sourceId: "demo" },
  { year: 2025, universityId: "enu", groupCode: "B010", general: 65, sourceId: "demo" },
  { year: 2025, universityId: "kaznu", groupCode: "B086", general: 132, rural: 110, sourceId: "demo" },
  { year: 2025, universityId: "kaznu", groupCode: "B037", general: 91, sourceId: "demo" },
];

export function getPassingScoresForGroup(groupCode: string): PassingScore[] {
  return passingScores.filter((p) => p.groupCode === groupCode);
}
