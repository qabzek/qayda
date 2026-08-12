import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";

const STEPS = [
  {
    n: "01",
    title: "Пәніңді таңда",
    body: "Профильдік пәндер комбинациясын көрсет — біз оған сәйкес мамандықтарды табамыз.",
    href: "/subjects",
    cta: "Пән таңдау →",
  },
  {
    n: "02",
    title: "Мамандығыңды тап",
    body: "Грант, өту балы, мақсатты балл және сұраныс бойынша мамандықтарды сал.",
    href: "/subjects",
    cta: "Мамандықтарды көру →",
  },
  {
    n: "03",
    title: "ЖОО-ны салыстыр",
    body: "Мамандық қай университеттерде бар, қай қалада, қандай өту балымен екенін көр.",
    href: "/universities",
    cta: "ЖОО-ларды көру →",
  },
  {
    n: "04",
    title: "Болашақ кәсібіңді біл",
    body: "Осы мамандықпен кім бола аласың, қай компанияда жұмыс істей аласың, жалақың қандай болады.",
    href: "/subjects",
    cta: "Кәсіптерді көру →",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["ПӘН", "МАМАНДЫҚ", "ЖОО", "ГРАНТ", "ЖҰМЫС", "БОЛАШАҚ"]} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {STEPS.map((step) => (
            <Link key={step.n} href={step.href} className="block">
              <div className="brutal brutal-hover flex h-full flex-col justify-between gap-6 p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-black text-ink/15 sm:text-5xl">{step.n}</span>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">{step.body}</p>
                </div>
                <span className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase text-flame">
                  {step.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="brutal-ink mt-6 flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <span className="font-display text-4xl font-black text-paper/20 sm:text-5xl">05</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">
              Мамандықты әлі білмейсің бе?
            </h2>
            <p className="mt-2 max-w-md text-sm text-paper/70 sm:text-base">
              Қарапайым сұрақтарға жауап бер — саған сәйкес бағыттарды ұсынамыз.
            </p>
          </div>
          <Link
            href="/test"
            className="brutal flex shrink-0 items-center gap-2 bg-lime px-6 py-4 font-display text-sm font-bold uppercase text-ink sm:text-base"
          >
            Тесттен өту <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
