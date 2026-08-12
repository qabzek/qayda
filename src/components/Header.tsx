"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SearchBar } from "./SearchBar";

const NAV = [
  { href: "/subjects", label: "Мамандықтар" },
  { href: "/universities", label: "ЖОО" },
  { href: "/compare", label: "Салыстыру" },
  { href: "/test", label: "Тест" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            QAYDA<span className="text-flame">?</span>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wide text-ink/40 sm:text-xs">
            by FizX
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <div className="w-56 lg:w-64">
            <SearchBar />
          </div>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm font-medium uppercase tracking-wide hover:text-flame"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/subjects"
            className="brutal brutal-hover bg-lime px-4 py-2 font-display text-sm font-bold uppercase"
          >
            Бастау →
          </Link>
        </nav>

        <button
          aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
          className="brutal flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t-[3px] border-ink bg-paper md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/20 py-3 font-display text-base font-medium uppercase"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/subjects"
              onClick={() => setOpen(false)}
              className="my-3 inline-block bg-ink px-4 py-3 text-center font-display text-sm font-bold uppercase text-paper"
            >
              Бастау →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
