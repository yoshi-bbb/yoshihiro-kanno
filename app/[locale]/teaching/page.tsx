import Link from "next/link";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/locales";
import type { Locale } from "@/lib/locales";
import { teachingItems, futureTeachingIdeas } from "@/data/teaching";

interface TeachingPageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function TeachingPage({ params }: TeachingPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = copy[locale];
  const lecture = teachingItems[0];

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">
          {t.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold">{t.title}</h2>
        <p className="mt-2 max-w-3xl text-white/80">{t.description}</p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="text-xs text-white/60">{lecture.year}</div>
        <h3 className="mt-1 text-2xl font-semibold text-white">
          {lecture.title[locale]}
        </h3>
        <p className="mt-2 text-sm text-white/80">{lecture.context[locale]}</p>
        <p className="mt-2 text-sm text-white/60">{lecture.audience[locale]}</p>
        <ul className="mt-3 space-y-1 text-sm text-white/80">
          {lecture.takeaways[locale].map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="text-xl font-semibold">{t.futureTitle}</h3>
        <p className="mt-2 text-sm text-white/80">{t.futureDescription}</p>
        <ul className="mt-3 space-y-1 text-sm text-white/75">
          {futureTeachingIdeas[locale].map((idea) => (
            <li key={idea}>• {idea}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-dashed border-white/20 p-5 text-sm text-white/70">
        <p>{t.disclaimer}</p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 text-center">
        <p className="text-sm text-white/80">{t.ctaLead}</p>
        <Link
          href={`/${locale}/contact` as Route}
          className="mt-3 inline-flex rounded-full bg-white px-6 py-2 text-sm font-semibold text-black"
        >
          {t.ctaLabel}
        </Link>
      </section>
    </div>
  );
}

const copy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    futureTitle: string;
    futureDescription: string;
    disclaimer: string;
    ctaLead: string;
    ctaLabel: string;
  }
> = {
  ja: {
    eyebrow: "TEACHING",
    title: "講義・ワークショップ",
    description:
      "現在の正式な講義実績は早稲田大学大学院での「AIの活用とその安全性」のみ。誇張はせず、講義内容と提供可能なトピックを整理しています。",
    futureTitle: "今後提供可能なテーマ",
    futureDescription:
      "問い合わせ状況に応じて、企業向けワークショップや追加講義を組み立てます。",
    disclaimer:
      "その他の講演実績は現時点ではありません。依頼内容と守秘義務に合わせて資料を新規作成します。",
    ctaLead: "講義やワークショップのご依頼は Google フォームからお問い合わせください。",
    ctaLabel: "お問い合わせ",
  },
  en: {
    eyebrow: "TEACHING",
    title: "Lectures & workshops",
    description:
      "The current official lecture record is the graduate course “Utilization of AI and its Safety” at Waseda University. No other talks are listed to avoid exaggeration.",
    futureTitle: "Potential topics",
    futureDescription:
      "Available for corporate workshops and new lecture formats depending on demand.",
    disclaimer:
      "No additional public lectures to list at this time. Materials are created per engagement and NDA requirements.",
    ctaLead: "Use the contact form if you'd like to discuss a lecture or workshop.",
    ctaLabel: "Contact",
  },
};
