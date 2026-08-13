// QAYDA — core type definitions
// Data model: Subjects -> SubjectCombination -> EducationGroup -> Specialty -> University
//             -> Grant -> PassingScore -> Career -> Salary

export type SourceType = "official" | "university" | "analytics" | "media";

export interface Source {
  id: string;
  title: string;
  organization: string;
  url: string;
  date?: string;
  type: SourceType;
}

export interface Subject {
  id: string;
  nameKz: string;
}

export interface SubjectCombination {
  id: string; // e.g. "math-informatics"
  subjectIds: [string, string];
  labelKz: [string, string];
}

export type PerspectiveCategory =
  | "it"
  | "engineering"
  | "pedagogy"
  | "business"
  | "medicine"
  | "law"
  | "humanities"
  | "science";

export interface EducationGroup {
  code: string; // e.g. "B057"
  legacyCode?: string; // e.g. "5B070400"
  name: string;
  description?: string;
  subjectCombinationId: string;
  category: PerspectiveCategory;
}

export interface WhatYouStudyItem {
  title: string;
}

export interface CareerRole {
  title: string;
  descriptionKz: string;
  exampleTasksKz?: string[];
}

export interface SalaryRange {
  role: string;
  junior?: number;
  middle?: number;
  senior?: number;
  median?: number;
  currency: "KZT";
  year: number;
  sourceId?: string;
}

export interface Grant {
  groupCode: string;
  year: number;
  grants?: number; // undefined => "Дерек жаңартылуда"
  sourceId?: string;
}

export interface PassingScore {
  year: number;
  universityId: string;
  groupCode: string;
  general?: number;
  rural?: number;
  sourceId?: string;
}

export interface MinimumScore {
  universityId: string;
  groupCode: string;
  score: number;
  year: number;
  sourceId?: string;
}

export interface Specialty {
  id: string;
  groupCode: string;
  name: string;
  slug: string;
  descriptionKz: string; // "Бұл мамандық не?" — simple explanation
  whatYouStudy: string[]; // "Университетте не үйренесің?"
  careers: CareerRole[]; // "Кім бола аласың?"
  companies: string[]; // "Қайда жұмыс істейсің?"
  universityIds: string[];
  targetScore?: number; // QAYDA-recommended safe target ("мақсатты балл")
  aliases?: string[];
}

export interface University {
  id: string;
  slug: string;
  name: string;
  city: "Алматы" | "Астана" | "Шымкент" | "Қарағанды" | "Басқа";
  type?: string;
  website?: string;
  programSlugs: string[]; // specialty slugs offered here
  sourceId?: string;
}

// Perspective index score is computed, never stored/fabricated per-field —
// it returns undefined ("ДЕРЕК ЖЕТКІЛІКСІЗ") when inputs are missing.
export interface PerspectiveInputs {
  demand?: number; // 0-100
  salary?: number; // 0-100
  grantVolume?: number; // 0-100
  jobAvailability?: number; // 0-100
  futureTrend?: number; // 0-100
}
