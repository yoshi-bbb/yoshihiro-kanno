"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/locales";
import { getOppositeLocale, localeLabels } from "@/lib/locales";

interface LanguageSwitcherProps {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "";
  const targetLocale = getOppositeLocale(locale);
  const targetPath = pathname
    ? pathname.replace(/^\/(ja|en)/, `/${targetLocale}`)
    : `/${targetLocale}`;

  return (
    <Link
      href={targetPath as Route}
      className="rounded-full border border-white/20 px-4 py-1 text-sm font-medium text-white/80 transition hover:border-white hover:text-white"
    >
      {localeLabels[targetLocale]}
    </Link>
  );
}
