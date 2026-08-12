import { SubjectCombination } from "@/types";

// Official ЕНТ profile-subject combinations. Do not invent additional ones.
export const combinations: SubjectCombination[] = [
  { id: "math-physics", subjectIds: ["math", "physics"], labelKz: ["Математика", "Физика"] },
  { id: "math-informatics", subjectIds: ["math", "informatics"], labelKz: ["Математика", "Информатика"] },
  { id: "math-geography", subjectIds: ["math", "geography"], labelKz: ["Математика", "География"] },
  { id: "biology-chemistry", subjectIds: ["biology", "chemistry"], labelKz: ["Биология", "Химия"] },
  { id: "biology-geography", subjectIds: ["biology", "geography"], labelKz: ["Биология", "География"] },
  { id: "chemistry-physics", subjectIds: ["chemistry", "physics"], labelKz: ["Химия", "Физика"] },
  { id: "history-geography", subjectIds: ["world-history", "geography"], labelKz: ["Дүниежүзі тарихы", "География"] },
  { id: "history-law", subjectIds: ["world-history", "law-basics"], labelKz: ["Дүниежүзі тарихы", "Құқық негіздері"] },
  { id: "foreign-history", subjectIds: ["foreign-lang", "world-history"], labelKz: ["Шет тілі", "Дүниежүзі тарихы"] },
  { id: "kazakh-lang-lit", subjectIds: ["kazakh-lang", "kazakh-lit"], labelKz: ["Қазақ тілі", "Қазақ әдебиеті"] },
  { id: "creative-creative", subjectIds: ["creative-exam", "creative-exam"], labelKz: ["Шығармашылық емтихан", "Шығармашылық емтихан"] },
];

export function getCombination(id: string): SubjectCombination | undefined {
  return combinations.find((c) => c.id === id);
}
