import { Specialty } from "@/types";
import { groups } from "./groups";

// Salary ranges reference sourceId "demo" implicitly via the UI badge —
// treat every number in this file as illustrative until replaced with
// sourced market data (Enbek.kz, hh.kz salary reports, etc).
export const specialties: Specialty[] = [
  {
    id: "information-technologies",
    groupCode: "B057",
    name: "Ақпараттық технологиялар",
    slug: "information-technologies",
    descriptionKz:
      "Бұл бағытта компьютерлік бағдарламалар, сайттар, мобильді қосымшалар және цифрлық жүйелер жасауды үйренесің. Логикалық ойлау мен код жазу негізгі дағдыға айналады.",
    whatYouStudy: ["Бағдарламалау", "Алгоритмдер мен деректер құрылымы", "Деректер базасы", "Веб және мобильді әзірлеу"],
    careers: [
      { title: "Software Developer", descriptionKz: "Қосымшалар мен жүйелерге код жазады, тестілейді, қолдау көрсетеді." },
      { title: "Frontend Developer", descriptionKz: "Пайдаланушы көретін интерфейстерді құрастырады." },
      { title: "Backend Developer", descriptionKz: "Сервер жағындағы логика мен деректер базасымен жұмыс істейді." },
      { title: "Data Analyst", descriptionKz: "Деректерді жинап, талдап, бизнеске түсінікті қорытынды шығарады." },
      { title: "AI Engineer / Data Scientist", descriptionKz: "B057 тобында осы бағытқа арналған жеке білім беру бағдарламалары бар (мыс. Data Science, Жасанды интеллект)." },
    ],
    companies: ["Kaspi.kz", "Halyk Bank", "Freedom", "Kolesa Group", "Beeline", "Astana Hub"],
    universityIds: ["kbtu", "satbayev", "enu", "sdu"],
    targetScore: 115,
    aliases: ["IT", "айти", "ақпараттық технология", "бағдарламашы", "программист", "информатика"],
  },
  {
    id: "information-security",
    groupCode: "B058",
    name: "Ақпараттық қауіпсіздік",
    slug: "information-security",
    descriptionKz:
      "Бұл бағыт компаниялардың деректерін, жүйелерін және желілерін хакерлік шабуылдардан қорғауды үйретеді. Қауіпсіздік талдауы мен цифрлық қорғаныс негізгі дағды.",
    whatYouStudy: ["Желілік қауіпсіздік", "Криптография", "Этикалық хакинг", "Киберқауіп талдауы"],
    careers: [
      { title: "Security Analyst", descriptionKz: "Жүйелердегі осалдықтарды тауып, тәуекелді бағалайды." },
      { title: "Penetration Tester", descriptionKz: "Жүйеге рұқсат етілген шабуыл жасап, әлсіз жерлерді анықтайды." },
    ],
    companies: ["Kaspi.kz", "Halyk Bank", "Freedom", "Beeline"],
    universityIds: ["kbtu", "sdu"],
    targetScore: 108,
    aliases: ["кибербезопасность", "қауіпсіздік", "hacking"],
  },
  {
    id: "radio-electronics",
    groupCode: "B073",
    name: "Радиотехника, электроника және телекоммуникациялар",
    slug: "radio-electronics",
    descriptionKz:
      "Бұл бағыт байланыс жүйелерін, электрондық құрылғыларды және телекоммуникация желілерін жобалауды үйретеді.",
    whatYouStudy: ["Электроника негіздері", "Сигналдар теориясы", "Телекоммуникация желілері"],
    careers: [
      { title: "Telecom Engineer", descriptionKz: "Байланыс желілерін жобалайды және қолдайды." },
      { title: "Electronics Engineer", descriptionKz: "Электрондық құрылғыларды жобалайды және тексереді." },
    ],
    companies: ["Beeline", "Kcell", "Air Astana"],
    universityIds: ["satbayev"],
    targetScore: 85,
    aliases: ["телеком", "электроника"],
  },
  {
    id: "electric-power-engineering",
    groupCode: "B062",
    name: "Электр энергетикасы",
    slug: "electric-power-engineering",
    descriptionKz:
      "Бұл бағытта электр станциялары, желілер және энергия жүйелерінің жұмысын үйренесің. Қазақстанның энергетика секторында тұрақты сұранысы бар.",
    whatYouStudy: ["Электротехника негіздері", "Энергия жүйелері", "Электр станциялары"],
    careers: [
      { title: "Power Systems Engineer", descriptionKz: "Электр желілерінің жұмысын жобалайды және қадағалайды." },
    ],
    companies: ["KEGOC", "Samruk-Energy"],
    universityIds: ["kbtu", "satbayev"],
    targetScore: 82,
    aliases: ["энергетика"],
  },
  {
    id: "physics-teacher",
    groupCode: "B010",
    name: "Физика мұғалімін даярлау",
    slug: "physics-teacher",
    descriptionKz:
      "Бұл бағыт мектепте физика пәнінен сабақ беруге дайындайды. Түсіндіру, эксперимент жүргізу және оқушыларды қызықтыру негізгі дағды.",
    whatYouStudy: ["Жалпы физика", "Оқыту әдістемесі", "Педагогика және психология"],
    careers: [{ title: "Физика мұғалімі", descriptionKz: "Мектепте физика пәнінен сабақ береді." }],
    companies: ["Мектептер (МОН жүйесі)"],
    universityIds: ["enu", "kaznu"],
    targetScore: 70,
    aliases: ["педагогика", "мұғалім"],
  },
  {
    id: "general-medicine",
    groupCode: "B086",
    name: "Жалпы медицина",
    slug: "general-medicine",
    descriptionKz:
      "Бұл бағыт дәрігер болуға дайындайды: адам ағзасын, аурулардың себебін және емдеу әдістерін терең үйренесің. Оқу мерзімі ұзақ әрі талапшыл.",
    whatYouStudy: ["Анатомия", "Физиология", "Ішкі аурулар пропедевтикасы"],
    careers: [{ title: "Дәрігер (интернатурадан кейін)", descriptionKz: "Пациенттерді тексереді, диагноз қояды, емдейді." }],
    companies: ["Мемлекеттік және жеке клиникалар"],
    universityIds: ["kaznu", "enu"],
    targetScore: 135,
    aliases: ["медицина", "дәрігер"],
  },
  {
    id: "pharmacy",
    groupCode: "B037",
    name: "Фармация",
    slug: "pharmacy",
    descriptionKz:
      "Бұл бағыт дәрі-дәрмектерді зерттеу, өндіру және дұрыс қолдануды үйретеді. Химия мен биологияны жақсы білу маңызды.",
    whatYouStudy: ["Фармацевтикалық химия", "Дәрі технологиясы", "Токсикология негіздері"],
    careers: [{ title: "Фармацевт", descriptionKz: "Дәріханада немесе өндірісте дәрі-дәрмекпен жұмыс істейді." }],
    companies: ["Дәріхана желілері", "Фармацевтикалық зауыттар"],
    universityIds: ["kaznu"],
    targetScore: 95,
    aliases: ["фармация", "дәріхана"],
  },
];

export function getSpecialty(slug: string): Specialty | undefined {
  return specialties.find((s) => s.slug === slug);
}

export function getSpecialtiesByCombination(combinationId: string): Specialty[] {
  const codes = groups.filter((g) => g.subjectCombinationId === combinationId).map((g) => g.code);
  return specialties.filter((s) => codes.includes(s.groupCode));
}

export function searchSpecialties(query: string): Specialty[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return specialties.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.groupCode.toLowerCase().includes(q) ||
      s.aliases?.some((a) => a.toLowerCase().includes(q))
  );
}
