import Link from "next/link";
import type { Route } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/locales";
import { locales, isLocale } from "@/lib/locales";
import { teachingItems } from "@/data/teaching";
import { snsLinks } from "@/data/sns";
import { projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocaleHomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const hero = heroContent[locale];
  const pillars = pillarContent[locale];
  const mainLecture = teachingItems[0];
  const featuredChannels = snsLinks.slice(0, 3);
  const primepicProject = projects.find((project) => project.slug === "primepic-ai");
  const aiSecurityProject = projects.find((project) => project.slug === "ai-security");

  if (!primepicProject || !aiSecurityProject) {
    throw new Error("Project data is missing");
  }

  const highlightCards: HighlightCard[] = [
    {
      id: primepicProject.slug,
      title: primepicProject.name[locale],
      description: primepicProject.teaser.description[locale],
      tags: primepicProject.teaser.tags[locale],
      href: `/${locale}/projects/${primepicProject.slug}`,
    },
    {
      id: aiSecurityProject.slug,
      title: aiSecurityProject.name[locale],
      description: aiSecurityProject.teaser.description[locale],
      tags: aiSecurityProject.teaser.tags[locale],
      href: `/${locale}/projects/${aiSecurityProject.slug}`,
    },
    {
      id: "waseda",
      title: locale === "ja" ? "早稲田大学大学院講義" : "Waseda graduate lecture",
      description: mainLecture.context[locale],
      tags:
        locale === "ja"
          ? ["Education", "AIガバナンス"]
          : ["Education", "AI Governance"],
      href: `/${locale}/teaching`,
    },
  ];

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-white shadow-lg shadow-black/20">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          {hero.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {hero.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-white/80">{hero.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {hero.ctas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href.replace("{locale}", locale) as Route}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                cta.variant === "primary"
                  ? "bg-[var(--accent-strong)] text-black hover:bg-[#6bbbff]"
                  : "border border-white/30 text-white hover:border-white"
              }`}
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">
          {locale === "ja" ? "ハイライト" : "Highlights"}
        </h3>
        <p className="mt-1 text-sm text-white/70">
          {locale === "ja"
            ? "PrimePic や AIセキュリティ基盤、早稲田の講義まで、一次情報から確認できます。"
            : "PrimePic, my AI security platform, and the Waseda lecture are documented with first-hand evidence."}
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {highlightCards.map((card) => (
            <div key={card.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <h4 className="text-lg font-semibold text-white">{card.title}</h4>
              <p className="mt-2 text-sm text-white/80">{card.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-white/60">
                {card.tags.map((tag) => (
                  <span
                    key={`${card.id}-${tag}`}
                    className="rounded-full border border-white/20 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={card.href as Route}
                className="mt-4 inline-flex text-sm text-[var(--accent)] hover:text-white"
              >
                {locale === "ja" ? "詳細を見る" : "View details"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">{pillars.title}</h3>
        <p className="mt-1 text-sm text-white/70">{pillars.description}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {pillars.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="text-xs uppercase tracking-widest text-white/60">
                {item.eyebrow}
              </p>
              <h4 className="mt-1 text-lg font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-sm text-white/75">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="text-xs text-white/60">{mainLecture.year} ・ Teaching</div>
          <h4 className="mt-1 text-lg font-semibold text-white">
            {mainLecture.title[locale]}
          </h4>
          <p className="mt-2 text-sm text-white/80">{mainLecture.context[locale]}</p>
          <Link
            href={`/${locale}/teaching` as Route}
            className="mt-3 inline-flex text-sm text-[var(--accent)] hover:text-white"
          >
            {locale === "ja" ? "講義内容を見る" : "Read teaching notes"}
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {locale === "ja" ? "SNS" : "Channels"}
          </h3>
          <Link
            href={`/${locale}/sns` as Route}
            className="text-sm text-[var(--accent)] hover:text-white"
          >
            {locale === "ja" ? "一覧を見る" : "View all"}
          </Link>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featuredChannels.map((channel) => (
            <div key={channel.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-wide text-white/60">
                {channel.label[locale]}
              </p>
              <p className="mt-2 text-sm text-white/80">{channel.description[locale]}</p>
              <a
                href={channel.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm text-[var(--accent)] hover:text-white"
              >
                {locale === "ja" ? "開く" : "Open"}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.08] p-5 text-center">
        <p className="text-2xl font-semibold text-white">
          {locale === "ja"
            ? "まずは 30 分のオンライン相談から"
            : "Start with a 30-minute online session"}
        </p>
        <p className="mt-2 text-sm text-white/70">
          {locale === "ja"
            ? "AIガバナンス、受託開発、講義のご相談はフォームからご連絡ください。"
            : "Use the contact form to discuss AI governance, custom development, or lectures."}
        </p>
        <Link
          href={`/${locale}/contact` as Route}
          className="mt-4 inline-flex rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition hover:bg-slate-200"
        >
          {locale === "ja" ? "お問い合わせへ" : "Go to contact"}
        </Link>
      </section>
    </div>
  );
}

const heroContent: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    ctas: { label: string; href: string; variant: "primary" | "secondary" }[];
  }
> = {
  ja: {
    eyebrow: "AI GOVERNANCE / SAFETY",
    title: "AIを安全に動かすための仕組みをつくる",
    description:
      "AIセキュリティ基盤や PrimePic AI、早稲田大学大学院での講義など、個人で手掛けている一次情報を公開しています。",
    ctas: [
      { label: "プロジェクト", href: "/{locale}/projects", variant: "primary" },
      { label: "サービス", href: "/{locale}/services", variant: "secondary" },
      { label: "問い合わせ", href: "/{locale}/contact", variant: "secondary" },
    ],
  },
  en: {
    eyebrow: "AI GOVERNANCE / SAFETY",
    title: "Building infrastructure for safe AI operations",
    description:
      "I surface first-hand outputs from my AI security platform work, PrimePic AI, and the Waseda lecture so you can evaluate without relying on hype.",
    ctas: [
      { label: "Projects", href: "/{locale}/projects", variant: "primary" },
      { label: "Services", href: "/{locale}/services", variant: "secondary" },
      { label: "Contact", href: "/{locale}/contact", variant: "secondary" },
    ],
  },
};

interface HighlightCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

const pillarContent: Record<
  Locale,
  {
    title: string;
    description: string;
    items: { eyebrow: string; title: string; body: string }[];
  }
> = {
  ja: {
    title: "What I Do / 3 つの軸",
    description:
      "一次情報を重視し、できることとまだ実績がないことを明確に分けて掲載しています。",
    items: [
      {
        eyebrow: "GOVERNANCE",
        title: "AIガバナンス・セーフティ設計",
        body:
          "AIの振る舞いを制御できるポリシー設計と、ログ / 監査の仕組みづくりを個人で担っています。",
      },
      {
        eyebrow: "BUILD",
        title: "AI受託開発 / PoC",
        body: "PrimePic AI や Mindy で培った生成・制御パイプラインを活かした開発支援。",
      },
      {
        eyebrow: "TEACHING",
        title: "教育・講義",
        body: "早稲田大学大学院の授業で扱った『AIの活用とその安全性』をベースに、ガバナンスのリアルを共有。",
      },
    ],
  },
  en: {
    title: "How I Operate",
    description:
      "I make a clear distinction between proven capabilities and areas that are still being validated.",
    items: [
      {
        eyebrow: "GOVERNANCE",
        title: "Designing guardrails",
        body: "Designing policy guardrails plus logging / audit layers so AI behavior stays accountable.",
      },
      {
        eyebrow: "BUILD",
        title: "Hands-on AI builds",
        body: "Shipping diffusion, LLM, and physical AI flows inspired by PrimePic and Mindy.",
      },
      {
        eyebrow: "TEACHING",
        title: "Lectures & workshops",
        body: "Graduate-level content around “Utilization of AI and its Safety” delivered at Waseda.",
      },
    ],
  },
};
