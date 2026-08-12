// Data access layer. Today this reads from local TypeScript files in
// src/data/. Later, swap each function's body to query Supabase — nothing
// in src/app or src/components should need to change.

import { subjects } from "@/data/subjects";
import { combinations, getCombination as _getCombination } from "@/data/combinations";
import { groups, getGroup as _getGroup } from "@/data/groups";
import {
  specialties,
  getSpecialty as _getSpecialty,
  getSpecialtiesByCombination as _getSpecialtiesByCombination,
  searchSpecialties as _searchSpecialties,
} from "@/data/specialties";
import { universities, getUniversity as _getUniversity, getUniversitiesForSpecialty as _getUniversitiesForSpecialty } from "@/data/universities";
import { getGrant as _getGrant } from "@/data/grants";
import { getPassingScoresForGroup as _getPassingScoresForGroup } from "@/data/passingScores";
import { getSalaries as _getSalaries } from "@/data/salaries";
import { getSource as _getSource } from "@/data/sources";
import { getPerspectiveInputs as _getPerspectiveInputs } from "@/data/perspectiveInputs";
import { getMinimumScore as _getMinimumScore } from "@/data/minimumScores";
import { computePerspective } from "@/lib/perspective";

export async function getSubjects() {
  return subjects;
}

export async function getCombinations() {
  return combinations;
}

export async function getCombination(id: string) {
  return _getCombination(id);
}

export async function getGroups() {
  return groups;
}

export async function getGroup(code: string) {
  return _getGroup(code);
}

export async function getSpecialties() {
  return specialties;
}

export async function getSpecialty(slug: string) {
  return _getSpecialty(slug);
}

export async function getSpecialtiesByCombination(combinationId: string) {
  return _getSpecialtiesByCombination(combinationId);
}

export async function searchSpecialties(query: string) {
  return _searchSpecialties(query);
}

export async function getUniversities() {
  return universities;
}

export async function getUniversity(slug: string) {
  return _getUniversity(slug);
}

export async function getUniversitiesForSpecialty(specialtySlug: string) {
  return _getUniversitiesForSpecialty(specialtySlug);
}

export async function getGrant(groupCode: string, year?: number) {
  return _getGrant(groupCode, year);
}

export async function getPassingScoresForGroup(groupCode: string) {
  return _getPassingScoresForGroup(groupCode);
}

export async function getSalaries(specialtyId: string) {
  return _getSalaries(specialtyId);
}

export async function getMinimumScore(category: string, year?: number) {
  return _getMinimumScore(category, year);
}

export async function getSource(id?: string) {
  return _getSource(id);
}

export async function getPerspective(specialtyId: string) {
  const inputs = _getPerspectiveInputs(specialtyId);
  if (!inputs) return undefined;
  return computePerspective(inputs);
}
