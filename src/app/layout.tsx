import type { Metadata } from "next";
import "@fontsource/unbounded/500.css";
import "@fontsource/unbounded/700.css";
import "@fontsource/unbounded/800.css";
import "@fontsource/unbounded/900.css";
import "@fontsource/unbounded/cyrillic-ext-500.css";
import "@fontsource/unbounded/cyrillic-ext-700.css";
import "@fontsource/unbounded/cyrillic-ext-800.css";
import "@fontsource/unbounded/cyrillic-ext-900.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/manrope/cyrillic-ext-400.css";
import "@fontsource/manrope/cyrillic-ext-500.css";
import "@fontsource/manrope/cyrillic-ext-700.css";
import "@fontsource/manrope/cyrillic-ext-800.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: {
    default: "QAYDA? — ҰБТ-дан кейін қайда барасың?",
    template: "%s | QAYDA?",
  },
  description:
    "Пәніңді таңда, мамандығыңды тап, болашағыңды көр. ЕНТ пәндер комбинациясы бойынша мамандық, ЖОО, грант және жалақы туралы ақпарат.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="kk" className="h-full antialiased">
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
