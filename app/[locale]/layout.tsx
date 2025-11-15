import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LocaleLayout } from "@/components/LocaleLayout";
import { isLocale } from "@/lib/locales";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleSegmentLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LocaleLayout locale={locale}>{children}</LocaleLayout>;
}
