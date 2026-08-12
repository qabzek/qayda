import { PerspectiveInputs } from "@/types";

// Illustrative inputs to the QAYDA perspective index — not an official
// rating. See lib/perspective.ts and README.md.
export const perspectiveInputs: Record<string, PerspectiveInputs> = {
  "information-technologies": { demand: 96, salary: 88, grantVolume: 92, jobAvailability: 90, futureTrend: 95 },
  "information-security": { demand: 88, salary: 85, grantVolume: 60, jobAvailability: 80, futureTrend: 90 },
  "telecom-communications": { demand: 65, salary: 62, grantVolume: 70, jobAvailability: 68, futureTrend: 55 },
  "electric-power-engineering": { demand: 72, salary: 60, grantVolume: 78, jobAvailability: 75, futureTrend: 60 },
  "physics-teacher": { demand: 70, salary: 30, grantVolume: 65, jobAvailability: 85, futureTrend: 45 },
  "general-medicine": { demand: 85, salary: 70, grantVolume: 88, jobAvailability: 80, futureTrend: 70 },
  pharmacy: { demand: 68, salary: 50, grantVolume: 55, jobAvailability: 70, futureTrend: 55 },
  // Intentionally no entry for the ~30 other newly added specialties — the
  // perspective index needs demand/salary/grant/job/trend inputs QAYDA
  // hasn't estimated for them yet, so their pages correctly show
  // "Дерек жеткіліксіз" instead of a guessed score.
};

export function getPerspectiveInputs(specialtyId: string): PerspectiveInputs | undefined {
  return perspectiveInputs[specialtyId];
}
