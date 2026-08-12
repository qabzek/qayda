"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="border-b-[3px] border-ink px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-6 flex flex-wrap items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-ink/50"
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
        >
          <span className="brutal bg-ink px-2 py-1 text-paper">ҰБТ / 2026</span>
          <span className="brutal bg-paper px-2 py-1">ҚАЗАҚСТАН</span>
          <span className="brutal bg-paper px-2 py-1">11-СЫНЫП</span>
        </motion.div>

        <motion.h1
          className="font-display text-[13vw] font-black uppercase leading-[0.92] sm:text-7xl md:text-8xl"
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
        >
          ҰБТ-дан кейін
          <br />
          <span className="text-flame">қайда барасың?</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl font-display text-xl font-bold uppercase leading-snug sm:text-2xl"
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
        >
          Пән таңда. Мамандық тап. Болашағыңды көр.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
        >
          <Link
            href="/subjects"
            className="brutal brutal-hover bg-flame px-6 py-4 font-display text-sm font-bold uppercase text-paper sm:text-base"
          >
            Мамандығымды табу →
          </Link>
          <Link
            href="/test"
            className="brutal brutal-hover bg-paper px-6 py-4 font-display text-sm font-bold uppercase sm:text-base"
          >
            Тесттен өту
          </Link>
        </motion.div>

        <motion.span
          className="mt-14 block font-display text-[22vw] font-black leading-none text-ink/5 sm:text-[10rem]"
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          aria-hidden
        >
          01
        </motion.span>
      </div>
    </section>
  );
}
