"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, LayoutGrid, Scale } from "lucide-react";

const ITEMS = [
  { href: "/", label: "Басты бет", icon: Home },
  { href: "/search", label: "Іздеу", icon: Search },
  { href: "/subjects", label: "Мамандықтар", icon: LayoutGrid },
  { href: "/compare", label: "Салыстыру", icon: Scale },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t-[3px] border-ink bg-paper md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-4">
        {ITEMS.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 py-2 text-[10px] font-display uppercase tracking-wide ${
                active ? "text-flame" : "text-ink/70"
              }`}
            >
              <Icon size={20} strokeWidth={2.25} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
