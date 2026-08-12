import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-bold">
              QAYDA<span className="text-flame">?</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-paper/70">ҰБТ алдындағы навигатор.</p>
          </div>

          <FooterCol
            title="Навигация"
            links={[
              { href: "/subjects", label: "Мамандықтар" },
              { href: "/universities", label: "ЖОО" },
              { href: "/compare", label: "Салыстыру" },
              { href: "/test", label: "Тест" },
            ]}
          />
          <FooterCol title="Ақпарат" links={[{ href: "/#sources", label: "Дереккөздер" }]} />
        </div>

        <p className="mt-10 max-w-3xl border-t border-paper/20 pt-6 text-xs leading-relaxed text-paper/60">
          QAYDA платформасындағы ақпарат анықтамалық және аналитикалық мақсатта берілген. Грант саны, өту
          балдары, қабылдау талаптары және басқа көрсеткіштер жыл сайын өзгеруі мүмкін. Соңғы шешім қабылдамас
          бұрын ресми дереккөздерді тексеріңіз.
        </p>
        <p className="mt-4 text-xs text-paper/40">© 2026 QAYDA · made by Kazbek Koblan</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="font-display text-xs font-bold uppercase tracking-widest text-paper/50">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm hover:text-lime">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
