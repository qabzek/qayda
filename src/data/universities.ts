import { University } from "@/types";

// University names/cities/websites below are real institutions. Program
// offerings (programSlugs) are illustrative for MVP flow purposes — verify
// each program's actual current offering before launch.
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
    programSlugs: ["information-technologies", "electric-power-engineering", "radio-electronics"],
  },
  {
    id: "enu",
    slug: "enu",
    name: "Л.Н. Гумилев атындағы Еуразия ұлттық университеті (ЕҰУ)",
    city: "Астана",
    type: "Мемлекеттік",
    website: "https://enu.kz",
    programSlugs: ["information-technologies", "physics-teacher", "general-medicine"],
  },
  {
    id: "kaznu",
    slug: "kaznu",
    name: "Әл-Фараби атындағы Қазақ ұлттық университеті (ҚазҰУ)",
    city: "Алматы",
    type: "Мемлекеттік",
    website: "https://kaznu.kz",
    programSlugs: ["general-medicine", "pharmacy", "physics-teacher"],
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
];

export function getUniversity(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}

export function getUniversitiesForSpecialty(specialtySlug: string): University[] {
  return universities.filter((u) => u.programSlugs.includes(specialtySlug));
}
