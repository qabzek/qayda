import { MinimumScore } from "@/types";

// Illustrative — reference sourceId "demo". Replace with official
// ҰБТ threshold scores by category before launch.
export const minimumScores: MinimumScore[] = [
  { category: "it", score: 50, year: 2026, sourceId: "demo" },
  { category: "engineering", score: 50, year: 2026, sourceId: "demo" },
  { category: "pedagogy", score: 50, year: 2026, sourceId: "demo" },
  { category: "medicine", score: 65, year: 2026, sourceId: "demo" },
  { category: "business", score: 50, year: 2026, sourceId: "demo" },
  { category: "general", score: 50, year: 2026, sourceId: "demo" },
];

export function getMinimumScore(category: string, year = 2026): MinimumScore | undefined {
  return minimumScores.find((m) => m.category === category && m.year === year);
}
