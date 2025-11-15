import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/locales";
import { localeLabels } from "@/lib/locales";
import {
  COMPANY_LOCATION_EN,
  COMPANY_LOCATION_JA,
  COMPANY_NAME_EN,
  COMPANY_NAME_JA,
  SITE_OWNER_EN,
  SITE_OWNER_JA,
} from "@/lib/config";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LangSetter } from "@/components/LangSetter";

type NavItem = { label: string; href: string; description: string };

const navItems: Record<Locale, NavItem[]> = {
  ja: [
    { label: "ホーム", href: "/ja", description: "トップ" },
    { label: "プロジェクト", href: "/ja/projects", description: "PrimePic / Gate" },
    { label: "プロフィール", href: "/ja/profile", description: "菅野吉洋について" },
    { label: "U-Rec", href: "/ja/u-rec", description: "会社情報" },
    { label: "SNS", href: "/ja/sns", description: "発信チャネル" },
    { label: "Teaching", href: "/ja/teaching", description: "早稲田での授業" },
    { label: "サービス", href: "/ja/services", description: "提供メニュー" },
    { label: "お問い合わせ", href: "/ja/contact", description: "Googleフォームへ" },
    { label: "法務", href: "/ja/legal/privacy", description: "プライバシーポリシー" },
  ],
  en: [
    { label: "Home", href: "/en", description: "Overview" },
    { label: "Projects", href: "/en/projects", description: "PrimePic / Gate" },
    { label: "Profile", href: "/en/profile", description: "About Yoshihiro" },
    { label: "U-Rec", href: "/en/u-rec", description: "Company facts" },
    { label: "SNS", href: "/en/sns", description: "Channels" },
    { label: "Teaching", href: "/en/teaching", description: "Waseda lecture" },
    { label: "Services", href: "/en/services", description: "Offerings" },
    { label: "Contact", href: "/en/contact", description: "Google Form" },
    { label: "Legal", href: "/en/legal/privacy", description: "Privacy policy" },
  ],
};

const strapline: Record<Locale, string> = {
  ja: "AIガバナンス / AIセーフティに特化したエンジニア・起業家。一次情報で判断できるよう、ログとプロダクトを公開しています。",
  en: "Founder-engineer focused on AI governance & safety. This portal surfaces first-hand build logs so you can evaluate without hype.",
};

const companyLocation: Record<Locale, string> = {
  ja: COMPANY_LOCATION_JA,
  en: COMPANY_LOCATION_EN,
};

const companyName: Record<Locale, string> = {
  ja: COMPANY_NAME_JA,
  en: COMPANY_NAME_EN,
};

interface Props {
  locale: Locale;
  children: ReactNode;
}

export function LocaleLayout({ locale, children }: Props) {
  const nav: NavItem[] = navItems[locale];

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(53,87,166,0.35),_transparent_55%),_#02040a] text-white">
      <LangSetter locale={locale} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(130,210,255,0.15),transparent_45%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/60">
                {locale === "ja" ? SITE_OWNER_JA : SITE_OWNER_EN} / {companyName[locale]}
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-white">
                AI Governance & Safety Portal
              </h1>
              <p className="mt-2 max-w-3xl text-sm text-white/80">{strapline[locale]}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm text-white/70">
                {companyLocation[locale]}
              </div>
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
          <nav className="mt-6 grid grid-cols-1 gap-2 text-sm md:grid-cols-2 lg:grid-cols-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href as Route}
                className="pointer-events-auto flex flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:border-white/30 hover:bg-white/[0.08]"
              >
                <span className="text-base font-medium text-white">{item.label}</span>
                <span className="text-xs text-white/70">{item.description}</span>
              </Link>
            ))}
          </nav>
        </header>

        <main className="flex-1">
          <div className="glass-panel w-full px-5 py-6 sm:px-8 sm:py-8">
            {children}
          </div>
        </main>

        <footer className="mt-6 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {locale === "ja" ? SITE_OWNER_JA : SITE_OWNER_EN} /{" "}
            {companyName[locale]} — {localeLabels[locale]} portal.
          </p>
          <p className="mt-1">
            {locale === "ja"
              ? "GitHub Pages で静的ホスティング。問い合わせは Google フォーム経由。"
              : "Hosted as a static export on GitHub Pages. Contact via Google Form."}
          </p>
        </footer>
      </div>
    </div>
  );
}
