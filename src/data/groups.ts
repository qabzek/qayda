import { EducationGroup } from "@/types";

// Verification status (as of this research pass, Aug 2026):
// ✅ VERIFIED — code, name, and subject combination cross-checked against
//    univision.kz, which aggregates Ұлттық тестілеу орталығы (testcenter.kz)
//    grant/competition results. See sources.ts → "univision".
// ⚠️ PLACEHOLDER — still illustrative, not yet verified. Do not treat as
//    official. See README.md → "Деректерді жаңарту".
export const groups: EducationGroup[] = [
  {
    // ✅ VERIFIED — univision.kz
    code: "B057",
    name: "Ақпараттық технологиялар",
    subjectCombinationId: "math-informatics",
    category: "it",
  },
  {
    // ✅ VERIFIED — univision.kz (code corrected from an earlier placeholder
    // "B056"; the real official code for this group is B058)
    code: "B058",
    name: "Ақпараттық қауіпсіздік",
    subjectCombinationId: "math-informatics",
    category: "it",
  },
  {
    // ⚠️ PLACEHOLDER — could not confirm a distinct official B-code for
    // "Радиотехника, электроника және телекоммуникациялар" in this pass.
    code: "B073",
    legacyCode: "5B071900",
    name: "Радиотехника, электроника және телекоммуникациялар",
    subjectCombinationId: "math-physics",
    category: "engineering",
  },
  {
    // ✅ VERIFIED — univision.kz (code corrected from an earlier placeholder
    // "B071"; the real official code is B062, officially named
    // "Электр техникасы және энергетика")
    code: "B062",
    name: "Электр техникасы және энергетика",
    subjectCombinationId: "math-physics",
    category: "engineering",
  },
  {
    // ✅ VERIFIED — univision.kz (code corrected from an earlier placeholder
    // "B009"; B009 is actually "Математика мұғалімдерін даярлау" — the real
    // code for physics-teacher training is B010)
    code: "B010",
    name: "Физика мұғалімдерін даярлау",
    subjectCombinationId: "math-physics",
    category: "pedagogy",
  },
  {
    // ✅ VERIFIED — univision.kz (code corrected from an earlier placeholder
    // "B036"; B036 is actually "Аударма ісі" / Translation Studies. The real
    // code for general medicine is B086, officially "Жалпы медицина")
    code: "B086",
    name: "Жалпы медицина",
    subjectCombinationId: "biology-chemistry",
    category: "medicine",
  },
  {
    // ⚠️ PLACEHOLDER — could not confirm the official B-code for
    // "Фармация" in this pass.
    code: "B037",
    legacyCode: "5B110300",
    name: "Фармация",
    subjectCombinationId: "biology-chemistry",
    category: "medicine",
  },
];

export function getGroupsByCombination(combinationId: string): EducationGroup[] {
  return groups.filter((g) => g.subjectCombinationId === combinationId);
}

export function getGroup(code: string): EducationGroup | undefined {
  return groups.find((g) => g.code === code);
}
