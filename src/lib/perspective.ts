import { PerspectiveInputs } from "@/types";

const WEIGHTS = {
  demand: 0.3,
  salary: 0.25,
  grantVolume: 0.2,
  jobAvailability: 0.15,
  futureTrend: 0.1,
} as const;

export interface PerspectiveResult {
  score: number;
  label: "ТӨМЕН" | "ОРТАША" | "ЖАҚСЫ" | "ЖОҒАРЫ" | "ӨТЕ ЖОҒАРЫ";
}

// QAYDA's own analytics index — explicitly NOT an official government
// rating. Returns undefined ("ДЕРЕК ЖЕТКІЛІКСІЗ" in the UI) rather than
// computing a score from incomplete/fabricated inputs.
export function computePerspective(inputs: PerspectiveInputs): PerspectiveResult | undefined {
  const keys = Object.keys(WEIGHTS) as (keyof typeof WEIGHTS)[];
  if (keys.some((k) => inputs[k] === undefined)) return undefined;

  const score = keys.reduce((sum, k) => sum + (inputs[k] as number) * WEIGHTS[k], 0);
  const rounded = Math.round(score);

  let label: PerspectiveResult["label"];
  if (rounded < 40) label = "ТӨМЕН";
  else if (rounded < 60) label = "ОРТАША";
  else if (rounded < 75) label = "ЖАҚСЫ";
  else if (rounded < 90) label = "ЖОҒАРЫ";
  else label = "ӨТЕ ЖОҒАРЫ";

  return { score: rounded, label };
}
