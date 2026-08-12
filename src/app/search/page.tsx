import type { Metadata } from "next";
import { SearchBar } from "@/components/SearchBar";

export const metadata: Metadata = { title: "Іздеу" };

export default function SearchPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">Іздеу</h1>
      <p className="mt-2 text-ink/70">Мамандықты, B-кодты немесе кілт сөзді енгіз.</p>
      <div className="mt-8">
        <SearchBar />
      </div>
    </section>
  );
}
