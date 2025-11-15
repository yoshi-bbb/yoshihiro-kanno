import { notFound } from "next/navigation";
import Link from "next/link";
import type { Route } from "next";
import { isLocale, locales } from "@/lib/locales";
import type { Locale } from "@/lib/locales";
import { companyProfile, companyFacts } from "@/data/company";
import { uRecRoleSummary } from "@/data/profile";

interface CompanyPageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = copy[locale];
  const leader = uRecRoleSummary[locale];

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">U-REC</p>
        <h2 className="mt-2 text-3xl font-semibold">
          {locale === "ja" ? "株式会社 U-Rec 概要" : "U-Rec Inc. Overview"}
        </h2>
        <p className="mt-2 max-w-3xl text-white/80">{companyProfile.mission[locale]}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <StatCard
          label={locale === "ja" ? "所在地" : "Location"}
          value={companyProfile.location[locale]}
          description="Utsunomiya / Tokyo / Remote"
        />
        <StatCard
          label="Website"
          value={companyProfile.website}
          description={locale === "ja" ? "公式サイト" : "Official site"}
        />
        <StatCard
          label={locale === "ja" ? "ミッション" : "Mission"}
          value={companyProfile.mission[locale]}
        />
      </section>

      <section>
        <h3 className="text-xl font-semibold">{t.businessTitle}</h3>
        <ul className="mt-3 space-y-2 text-sm text-white/80">
          {t.businessItems.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {companyFacts.map((fact) => (
          <div key={fact.title.en} className="rounded-2xl border border-white/10 p-4">
            <p className="text-xs uppercase tracking-wide text-white/60">
              {fact.title[locale]}
            </p>
            <p className="mt-2 text-sm text-white/80">{fact.description[locale]}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="text-xl font-semibold">
          {locale === "ja" ? "代表のロール" : "Founder role"}
        </h3>
        <p className="mt-2 text-sm text-white/80">{leader.role}</p>
        <ul className="mt-3 space-y-1 text-sm text-white/75">
          {leader.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="text-xl font-semibold">{t.collabTitle}</h3>
        <p className="mt-2 text-sm text-white/80">{t.collabDesc}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link
            href={`/${locale}/services` as Route}
            className="rounded-full border border-white/30 px-4 py-2 text-white hover:border-white"
          >
            {t.servicesLabel}
          </Link>
          <Link
            href={`/${locale}/contact` as Route}
            className="rounded-full bg-white px-4 py-2 font-semibold text-black"
          >
            {t.contactLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-4">
      <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
      {description && <p className="mt-1 text-xs text-white/60">{description}</p>}
    </div>
  );
}

const copy: Record<
  Locale,
  {
    businessTitle: string;
    businessItems: string[];
    collabTitle: string;
    collabDesc: string;
    servicesLabel: string;
    contactLabel: string;
  }
> = {
  ja: {
    businessTitle: "事業内容",
    businessItems: [
      "AIガバナンス / AIセーフティ基盤（Gate Runtime, Sentinel-MCP）の設計・開発",
      "生成AI（PrimePic）や LLM アプリケーションの受託開発",
      "AIコンサルティング / 技術顧問 / SES",
      "早稲田大学大学院での講義や企業向けワークショップ",
    ],
    collabTitle: "協業・採用",
    collabDesc:
      "ガバナンスと実装の両輪を支えるエンジニア・研究者・Biz パートナーを募集しています。リモート / 東京で柔軟に連携可能です。",
    servicesLabel: "サービスを見る",
    contactLabel: "問い合わせる",
  },
  en: {
    businessTitle: "Business Lines",
    businessItems: [
      "AI governance / safety infrastructure (Gate Runtime, Sentinel-MCP)",
      "Generative AI builds such as PrimePic and tailored LLM applications",
      "AI advisory, fractional CTO, and SES-style engagements",
      "Graduate lecture at Waseda + corporate workshops",
    ],
    collabTitle: "Collaboration & Hiring",
    collabDesc:
      "Looking for engineers, researchers, and business partners who care about both governance artifacts and implementation. Remote + Tokyo friendly.",
    servicesLabel: "View services",
    contactLabel: "Contact",
  },
};
