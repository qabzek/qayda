"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { searchSpecialties } from "@/lib/data";
import type { Specialty } from "@/types";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Specialty[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    searchSpecialties(query).then((r) => {
      if (active) setResults(r.slice(0, 6));
    });
    return () => {
      active = false;
    };
  }, [query]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-sm">
      <div className="brutal flex items-center gap-2 bg-paper px-3 py-2">
        <Search size={16} className="shrink-0 text-ink/50" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Мамандықты немесе ЖОО-ны ізде..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40"
          aria-label="Іздеу"
        />
        {query && (
          <button aria-label="Тазарту" onClick={() => setQuery("")}>
            <X size={14} className="text-ink/50" />
          </button>
        )}
      </div>

      {open && query.trim() && (
        <div className="brutal absolute left-0 right-0 top-[calc(100%+8px)] z-50 max-h-80 overflow-y-auto bg-paper">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-ink/60">Ештеңе табылмады. Басқа атаумен іздеп көр.</p>
          ) : (
            <ul>
              {results.map((r) => (
                <li key={r.id} className="border-b border-ink/10 last:border-none">
                  <Link
                    href={`/specialties/${r.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-lime/40"
                  >
                    <span className="font-display text-sm font-bold uppercase">{r.name}</span>
                    <span className="text-xs text-ink/40">{r.groupCode}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
