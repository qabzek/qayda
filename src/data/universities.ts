import { University } from "@/types";

// University names/cities/websites below are real institutions. Program
// offerings (programSlugs) are illustrative for MVP flow purposes — verify
// each program's actual current offering before launch.
// Entries marked ✅ below were cross-referenced against univision.kz
// (aggregated ҰТО/testcenter.kz data) as real B057 (Ақпараттық
// технологиялар) providers during this research pass.
export const universities: University[] = [
  {
    id: "kbtu",
    slug: "kbtu",
    name: "Қазақстан-Британ техникалық университеті (KBTU)",
    city: "Алматы",
    type: "Мемлекеттік емес",
    website: "https://kbtu.edu.kz",
    programSlugs: ["information-technologies", "information-security", "electric-power-engineering"],
  },
  {
    id: "satbayev",
    slug: "satbayev",
    name: "Satbayev University",
    city: "Алматы",
    type: "Мемлекеттік",
    website: "https://satbayev.university",
    programSlugs: ["information-technologies", "electric-power-engineering", "architecture", "chemical-engineering", "mining", "construction", "telecom-communications"],
  },
  {
    id: "enu",
    slug: "enu",
    name: "Л.Н. Гумилев атындағы Еуразия ұлттық университеті (ЕҰУ)",
    city: "Астана",
    type: "Мемлекеттік",
    website: "https://enu.kz",
    programSlugs: ["information-technologies", "physics-teacher", "general-medicine", "law"],
  },
  {
    id: "kaznu",
    slug: "kaznu",
    name: "Әл-Фараби атындағы Қазақ ұлттық университеті (ҚазҰУ)",
    city: "Алматы",
    type: "Мемлекеттік",
    website: "https://kaznu.kz",
    programSlugs: ["general-medicine", "pharmacy", "physics-teacher", "pediatrics", "information-technologies", "law"],
  },
  {
    id: "sdu",
    slug: "sdu",
    name: "SDU University",
    city: "Басқа",
    type: "Мемлекеттік емес",
    website: "https://sdu.edu.kz",
    programSlugs: ["information-technologies", "information-security"],
  },
  {
    // ✅ verified B057 provider — univision.kz
    id: "iitu",
    slug: "iitu",
    name: "Халықаралық ақпараттық технологиялар университеті (IITU)",
    city: "Алматы",
    type: "Мемлекеттік емес",
    website: "https://iitu.edu.kz",
    programSlugs: ["information-technologies"],
  },
  {
    // ✅ verified B057 provider — univision.kz
    id: "kartu",
    slug: "kartu",
    name: "Әбілқас Сағынов атындағы Қарағанды техникалық университеті",
    city: "Қарағанды",
    type: "Мемлекеттік",
    website: "https://kstu.kz",
    programSlugs: ["information-technologies"],
  },
  {
    // ✅ verified B057 provider — univision.kz
    id: "turan",
    slug: "turan",
    name: "«Тұран» университеті",
    city: "Алматы",
    type: "Мемлекеттік емес",
    website: "https://turan-edu.kz",
    programSlugs: ["information-technologies"],
  },
  {
    // ✅ verified B057 provider — univision.kz
    id: "atyrau-oil-gas",
    slug: "atyrau-oil-gas",
    name: "С.Өтебаев атындағы Атырау мұнай және газ университеті",
    city: "Басқа",
    type: "Мемлекеттік",
    website: "https://aogu.edu.kz",
    programSlugs: ["information-technologies"],
  },
  {
    // ✅ verified B057 provider — univision.kz
    id: "vku",
    slug: "vku",
    name: "Сәрсен Аманжолов атындағы Шығыс Қазақстан университеті",
    city: "Басқа",
    type: "Мемлекеттік",
    website: "https://vku.edu.kz",
    programSlugs: ["information-technologies"],
  },
  {
    // ✅ verified B057 provider — univision.kz
    id: "nku",
    slug: "nku",
    name: "М.Қозыбаев атындағы Солтүстік Қазақстан университеті",
    city: "Басқа",
    type: "Мемлекеттік",
    website: "https://nku.edu.kz",
    programSlugs: ["information-technologies"],
  },
];

export function getUniversity(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}

export function getUniversitiesForSpecialty(specialtySlug: string): University[] {
  return universities.filter((u) => u.programSlugs.includes(specialtySlug));
}
