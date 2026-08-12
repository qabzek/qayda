import { SalaryRange } from "@/types";

// Illustrative ranges only — reference sourceId "demo". Replace with
// sourced market data (Enbek.kz, hh.kz/enbek salary surveys) before launch.
export const salaries: Record<string, SalaryRange[]> = {
  "information-technologies": [
    { role: "Software Developer", junior: 250000, middle: 450000, senior: 900000, currency: "KZT", year: 2026, sourceId: "demo" },
  ],
  "information-security": [
    { role: "Security Analyst", junior: 280000, middle: 500000, senior: 950000, currency: "KZT", year: 2026, sourceId: "demo" },
  ],
  "radio-electronics": [
    { role: "Telecom Engineer", junior: 220000, middle: 400000, senior: 750000, currency: "KZT", year: 2026, sourceId: "demo" },
  ],
  "electric-power-engineering": [
    { role: "Power Systems Engineer", junior: 230000, middle: 420000, senior: 780000, currency: "KZT", year: 2026, sourceId: "demo" },
  ],
  "physics-teacher": [
    { role: "Физика мұғалімі", junior: 150000, middle: 220000, senior: 320000, currency: "KZT", year: 2026, sourceId: "demo" },
  ],
  "general-medicine": [
    { role: "Дәрігер", junior: 250000, middle: 450000, senior: 900000, currency: "KZT", year: 2026, sourceId: "demo" },
  ],
  pharmacy: [
    { role: "Фармацевт", junior: 180000, middle: 300000, senior: 500000, currency: "KZT", year: 2026, sourceId: "demo" },
  ],
};

export function getSalaries(specialtyId: string): SalaryRange[] {
  return salaries[specialtyId] ?? [];
}
