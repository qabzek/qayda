"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function SubjectCard({
  label,
  selected,
  disabled,
  onClick,
}: {
  label: string;
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      className={`brutal ${!disabled ? "brutal-hover" : ""} flex min-h-[110px] w-full flex-col justify-between p-5 text-left transition-colors ${
        selected ? "bg-lime" : disabled ? "opacity-40" : "bg-paper"
      }`}
    >
      <span className="font-display text-lg font-bold uppercase leading-tight sm:text-xl">{label}</span>
      <span className="mt-3 flex h-6 w-6 items-center justify-center border-2 border-ink">
        {selected && <Check size={16} strokeWidth={3} />}
      </span>
    </motion.button>
  );
}
