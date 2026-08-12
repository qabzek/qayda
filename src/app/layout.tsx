import type { Metadata } from "next";
import "@fontsource/golos-text/400.css";
import "@fontsource/golos-text/500.css";
import "@fontsource/golos-text/600.css";
import "@fontsource/golos-text/700.css";
import "@fontsource/golos-text/800.css";
import "@fontsource/golos-text/900.css";
import "@fontsource/golos-text/cyrillic-ext-400.css";
import "@fontsource/golos-text/cyrillic-ext-500.css";
import "@fontsource/golos-text/cyrillic-ext-600.css";
import "@fontsource/golos-text/cyrillic-ext-700.css";
import "@fontsource/golos-text/cyrillic-ext-800.css";
import "@fontsource/golos-text/cyrillic-ext-900.css";
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
