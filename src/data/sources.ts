import { Source } from "@/types";

// IMPORTANT: QAYDA never fabricates official numbers (grants, passing scores,
// rural quota, salaries). Some numeric values below now come from univision.kz
// (source id "univision") — a third-party aggregator of Ұлттық тестілеу
// орталығы (testcenter.kz) competition results, cross-checked during this
// research pass. It is not the primary government source; replace with
// direct testcenter.kz / egov.kz / university-site citations when possible.
// Everything else still points at "demo" and renders the "Үлгі дерек"
// (sample data) badge. See README.md for the full replacement checklist.

export const sources: Source[] = [
  {
    id: "demo",
    title: "Демо/үлгі дерек",
    organization: "QAYDA (MVP)",
    url: "#",
    type: "analytics",
  },
  {
    id: "univision",
    title: "Гранттар мен өту балдары (2025)",
    organization: "Univision.kz — Ұлттық тестілеу орталығы дерегі негізінде",
    url: "https://univision.kz/kk/edu-program/group/",
    date: "2025",
    type: "media",
  },
  {
    id: "taylor-raem",
    title: "IT мамандарының жалақысы (2026)",
    organization: "Taylor.kz / RAEM жалақы шолуы",
    url: "https://taylor.kz/salaries",
    date: "2026",
    type: "media",
  },
];

export function getSource(id?: string): Source | undefined {
  if (!id) return undefined;
  return sources.find((s) => s.id === id);
}
