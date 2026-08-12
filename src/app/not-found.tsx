import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="font-display text-8xl font-black text-ink/15 sm:text-9xl">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase sm:text-3xl">Мұнда мамандық жоқ.</h1>
      <Link
        href="/"
        className="brutal brutal-hover mt-8 bg-flame px-6 py-4 font-display text-sm font-bold uppercase text-paper"
      >
        Басты бетке →
      </Link>
    </section>
  );
}
