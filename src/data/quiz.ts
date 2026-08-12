import { PerspectiveCategory } from "@/types";

export interface QuizQuestion {
  id: string;
  textKz: string;
  // score awarded per category if the user answers "Иә" (yes)
  weights: Partial<Record<PerspectiveCategory, number>>;
}

export const quizQuestions: QuizQuestion[] = [
  { id: "q1", textKz: "Компьютермен жұмыс істеу ұнай ма?", weights: { it: 3, engineering: 1 } },
  { id: "q2", textKz: "Математика ұнай ма?", weights: { it: 2, engineering: 2, science: 2 } },
  { id: "q3", textKz: "Адамдармен жұмыс істеу ұнай ма?", weights: { pedagogy: 3, medicine: 2, business: 2 } },
  { id: "q4", textKz: "Зерттеу және эксперимент жүргізу ұнай ма?", weights: { science: 3, medicine: 2, engineering: 1 } },
  { id: "q5", textKz: "Қолмен бір нәрсе жасаған ұнай ма?", weights: { engineering: 3 } },
  { id: "q6", textKz: "Жоғары жалақы маңызды ма?", weights: { it: 2, medicine: 1, business: 1 } },
  { id: "q7", textKz: "Кеңседе жүйелі жұмыс істеу ұнай ма?", weights: { business: 2, it: 1 } },
  { id: "q8", textKz: "Шығармашылық ұнай ма?", weights: { humanities: 3, it: 1 } },
];
