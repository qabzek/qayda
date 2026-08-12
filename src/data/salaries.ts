import { SalaryRange } from "@/types";

// ✅ "information-technologies" figures are sourced from Taylor.kz / RAEM's
// 2026 Kazakhstan IT salary survey (sourceId "taylor-raem") — see
// data/sources.ts. Everything else remains illustrative ("demo").
export const salaries: Record<string, SalaryRange[]> = {
  "information-technologies": [
    { role: "IT маманы", junior: 507000, middle: 1100000, senior: 1500000, currency: "KZT", year: 2026, sourceId: "taylor-raem" },
  ],
  "information-security": [
    { role: "Security Analyst", junior: 280000, middle: 500000, senior: 950000, currency: "KZT", year: 2026, sourceId: "demo" },
  ],
  "telecom-communications": [
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
    { role: "Фармацевт", junior: 200000, middle: 275000, senior: 350000, currency: "KZT", year: 2026, sourceId: "demo" },
  ],
  law: [
    { role: "Заңгер", junior: 250000, middle: 375000, senior: 500000, currency: "KZT", year: 2026, sourceId: "demo" },
  ],
};

export function getSalaries(specialtyId: string): SalaryRange[] {
  return salaries[specialtyId] ?? [];
}
