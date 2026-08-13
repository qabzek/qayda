import { EducationGroup } from "@/types";

// Verification status (as of this research pass, Aug 2026):
// ✅ VERIFIED — cross-checked against TWO independent sources that agree:
//    (1) univision.kz (aggregates Ұлттық тестілеу орталығы / testcenter.kz
//        competition results), and
//    (2) the official ГОП list published per Приказ МОН РК № 115/89
//        (adilet.zan.kz V1700015186 / V1700015173), as reproduced by
//        shopomania.kz's ЕНТ subject-combination guide. Where both sources
//        (or the second alone, for combos univision wasn't checked against)
//        show the same B-code + name + subject pair, it's marked verified.
// ⚠️ PLACEHOLDER — not yet independently verified.
export const groups: EducationGroup[] = [
  // ── Математика + Информатика ──────────────────────────────────────────
  { code: "B011", name: "Информатика мұғалімдерін даярлау", subjectCombinationId: "math-informatics", category: "pedagogy" },
  { code: "B057", name: "Ақпараттық технологиялар", subjectCombinationId: "math-informatics", category: "it" },
  { code: "B058", name: "Ақпараттық қауіпсіздік", subjectCombinationId: "math-informatics", category: "it" },
  { code: "B157", name: "Математикалық және компьютерлік модельдеу", subjectCombinationId: "math-informatics", category: "it" },

  // ── Математика + Физика ───────────────────────────────────────────────
  { code: "B009", name: "Математика мұғалімдерін даярлау", subjectCombinationId: "math-physics", category: "pedagogy" },
  { code: "B010", name: "Физика мұғалімдерін даярлау", subjectCombinationId: "math-physics", category: "pedagogy" },
  { code: "B054", name: "Физика", subjectCombinationId: "math-physics", category: "science" },
  { code: "B059", name: "Коммуникациялар және коммуникациялық технологиялар", subjectCombinationId: "math-physics", category: "engineering" },
  { code: "B062", name: "Электр техникасы және электроэнергетика", subjectCombinationId: "math-physics", category: "engineering" },
  { code: "B071", name: "Тау-кен ісі және пайдалы қазбаларды өндіру", subjectCombinationId: "math-physics", category: "engineering" },
  { code: "B074", name: "Қала құрылысы, құрылыс жұмыстары және азаматтық құрылыс", subjectCombinationId: "math-physics", category: "engineering" },

  // ── Математика + География ────────────────────────────────────────────
  { code: "B044", name: "Менеджмент және басқару", subjectCombinationId: "math-geography", category: "business" },
  { code: "B046", name: "Қаржы, экономика, банк және сақтандыру ісі", subjectCombinationId: "math-geography", category: "business" },
  { code: "B047", name: "Маркетинг және жарнама", subjectCombinationId: "math-geography", category: "business" },
  { code: "B052", name: "Жер туралы ғылым", subjectCombinationId: "math-geography", category: "science" },

  // ── Биология + Химия ──────────────────────────────────────────────────
  { code: "B012", name: "Химия мұғалімдерін даярлау", subjectCombinationId: "biology-chemistry", category: "pedagogy" },
  { code: "B013", name: "Биология мұғалімдерін даярлау", subjectCombinationId: "biology-chemistry", category: "pedagogy" },
  { code: "B053", name: "Химия", subjectCombinationId: "biology-chemistry", category: "science" },
  { code: "B083", name: "Ветеринария", subjectCombinationId: "biology-chemistry", category: "medicine" },
  { code: "B084", name: "Мейіргер ісі", subjectCombinationId: "biology-chemistry", category: "medicine" },
  { code: "B085", name: "Фармация", subjectCombinationId: "biology-chemistry", category: "medicine" },
  { code: "BM086", name: "Медицина", subjectCombinationId: "biology-chemistry", category: "medicine" },
  { code: "BM088", name: "Педиатрия", subjectCombinationId: "biology-chemistry", category: "medicine" },

  // ── Биология + География ──────────────────────────────────────────────
  { code: "B001", name: "Педагогика және психология", subjectCombinationId: "biology-geography", category: "pedagogy" },
  { code: "B041", name: "Психология", subjectCombinationId: "biology-geography", category: "humanities" },
  { code: "B079", name: "Орман шаруашылығы", subjectCombinationId: "biology-geography", category: "science" },
  { code: "B090", name: "Әлеуметтік жұмыс", subjectCombinationId: "biology-geography", category: "humanities" },

  // ── Химия + Физика ─────────────────────────────────────────────────────
  { code: "B060", name: "Химиялық инженерия және процестер", subjectCombinationId: "chemistry-physics", category: "engineering" },

  // ── Дүниежүзі тарихы + География ─────────────────────────────────────
  { code: "B014", name: "География мұғалімдерін даярлау", subjectCombinationId: "history-geography", category: "pedagogy" },
  { code: "B032", name: "Философия және этика", subjectCombinationId: "history-geography", category: "humanities" },
  { code: "B034", name: "Тарих", subjectCombinationId: "history-geography", category: "humanities" },

  // ── Дүниежүзі тарихы + Құқық негіздері ────────────────────────────────
  { code: "B049", name: "Құқық", subjectCombinationId: "history-law", category: "law" },
  // Note: no second verified code found for this combo in this research
  // pass — see specialties.ts.

  // ── Шет тілі + Дүниежүзі тарихы ──────────────────────────────────────
  { code: "B018", name: "Шет тілі мұғалімдерін даярлау", subjectCombinationId: "foreign-history", category: "pedagogy" },
  { code: "B036", name: "Аударма ісі", subjectCombinationId: "foreign-history", category: "humanities" },
  { code: "B140", name: "Халықаралық қатынастар және дипломатия", subjectCombinationId: "foreign-history", category: "humanities" },

  // ── География + Шет тілі ──────────────────────────────────────────────
  { code: "B091", name: "Туризм", subjectCombinationId: "geography-foreign-lang", category: "business" },
  { code: "B093", name: "Мейрамхана ісі және мейманхана бизнесі", subjectCombinationId: "geography-foreign-lang", category: "business" },
  // Note: "Халықаралық экономикалық қатынастар" (previously listed here as
  // B141) was NOT found in the official 158-code threshold-score list this
  // research pass — removed rather than left unverified. See specialties.ts.

  // ── Қазақ тілі + Қазақ әдебиеті ──────────────────────────────────────
  { code: "B016", name: "Қазақ тілі және әдебиеті мұғалімдерін даярлау", subjectCombinationId: "kazakh-lang-lit", category: "pedagogy" },
  { code: "B037", name: "Филология (қазақ филологиясы)", subjectCombinationId: "kazakh-lang-lit", category: "humanities" },

  // ── Шығармашылық емтихан + Шығармашылық емтихан ──────────────────────
  { code: "B073", name: "Сәулет", subjectCombinationId: "creative-creative", category: "engineering" },
  { code: "B030", name: "Бейнелеу өнері", subjectCombinationId: "creative-creative", category: "humanities" },
  { code: "B098", name: "Спорт", subjectCombinationId: "creative-creative", category: "humanities" },
];

export function getGroupsByCombination(combinationId: string): EducationGroup[] {
  return groups.filter((g) => g.subjectCombinationId === combinationId);
}

export function getGroup(code: string): EducationGroup | undefined {
  return groups.find((g) => g.code === code);
}
