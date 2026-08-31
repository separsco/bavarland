import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "باورلند | مسیر موفقیت اختصاصی",
  description:
    "برنامه‌ریزی روزانه، پایش مستمر و مشاوره تخصصی برای رسیدن به نتیجه واقعی",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} min-h-dvh antialiased`}>
      <body className="flex min-h-dvh flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
