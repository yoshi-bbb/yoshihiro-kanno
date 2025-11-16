import Link from "next/link";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/locales";
import type { Locale } from "@/lib/locales";
import { services } from "@/data/services";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = copy[locale];
  const faqContent = faq[locale];

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">
          {t.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold">{t.title}</h2>
        <p className="mt-2 max-w-3xl text-white/80">{t.description}</p>
      </section>

      <section className="grid gap-4">
        {services.map((service) => (
          <article key={service.id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl font-semibold text-white">
                {service.title[locale]}
              </h3>
              <span className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/80">
                {service.price[locale]}
              </span>
            </div>
            <p className="mt-2 text-sm text-white/80">{service.description[locale]}</p>
            <ul className="mt-3 space-y-1 text-sm text-white/75">
              {service.deliverables[locale].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            {service.notes && (
              <p className="mt-3 text-xs text-white/60">{service.notes[locale]}</p>
            )}
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
        <h3 className="text-xl font-semibold">{faqContent.title}</h3>
        <p className="mt-2 text-sm text-white/80">{faqContent.description}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {faqContent.items.map((item) => (
            <div key={item.question} className="rounded-2xl border border-white/10 p-4">
              <p className="text-sm font-semibold text-white">{item.question}</p>
              <p className="mt-2 text-sm text-white/75">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 text-center">
        <p className="text-sm text-white/80">{t.ctaDescription}</p>
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
    ctaDescription: string;
    ctaLabel: string;
  }
> = {
  ja: {
    eyebrow: "SERVICES",
    title: "提供サービス / 料金レンジ",
    description:
      "すべて菅野本人がハンズオンで対応。自分の AIセキュリティ基盤や生成AIでの経験を踏まえて提案します。詳細なお見積もりはフォームよりご連絡ください。",
    ctaDescription: "NDAや守備範囲、支払い条件は初回相談で詳細にご案内します。",
    ctaLabel: "お問い合わせ",
  },
  en: {
    eyebrow: "SERVICES",
    title: "Services & pricing ranges",
    description:
      "Handled directly by Yoshihiro, drawing on my AI security platform and generative AI experience. Contact me for a detailed proposal.",
    ctaDescription:
      "We can walk through NDA terms, scope boundaries, and billing cadence during the intro call.",
    ctaLabel: "Contact",
  },
};

const faq: Record<
  Locale,
  {
    title: string;
    description: string;
    items: { question: string; answer: string }[];
  }
> = {
  ja: {
    title: "FAQ",
    description: "よくいただくご質問への一次回答です。詳細は個別にご案内します。",
    items: [
      {
        question: "NDAは締結可能ですか？",
        answer: "はい。双方の書式や個別契約に対応します。必要に応じてフォーム送信前でもドラフト共有が可能です。",
      },
      {
        question: "どこまで対応してもらえますか？",
        answer:
          "ポリシー策定・レビューだけでなく、AIセキュリティ基盤の実装まで一気通貫でリードします。スポットレビューも歓迎です。",
      },
      {
        question: "支払い条件は？",
        answer:
          "原則は月末締め翌月末払いです。大型案件では着手金をお願いする場合がありますが、請求書形式や手続きは柔軟に調整します。",
      },
    ],
  },
  en: {
    title: "FAQ",
    description: "Initial answers to common questions. Happy to elaborate during the kick-off conversation.",
    items: [
      {
        question: "Can we sign an NDA?",
        answer:
          "Yes. I can work with your standard form or provide mine, and we can exchange drafts even before sharing sensitive details.",
      },
      {
        question: "What’s the engagement scope?",
        answer:
          "Anything from policy reviews to hands-on builds of AI security platforms. I also support short-term architecture or security reviews.",
      },
      {
        question: "How do payments work?",
        answer:
          "Default terms are net-30 after month end; larger builds may require a kickoff deposit. Invoicing formats are flexible.",
      },
    ],
  },
};
