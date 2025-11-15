import Link from "next/link";
import type { Route } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/locales";
import { snsLinks } from "@/data/sns";

interface SnsPageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function SnsPage({ params }: SnsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">CHANNELS</p>
        <h2 className="mt-2 text-3xl font-semibold">
          {locale === "ja" ? "発信チャネル" : "Social channels"}
        </h2>
        <p className="mt-2 max-w-3xl text-white/80">
          {locale === "ja"
            ? "AIガバナンスや PrimePic の進捗は SNS でも随時更新しています。フォローしやすいチャネルからご覧ください。"
            : "Follow these channels for AI governance notes, PrimePic demos, and live updates."}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {snsLinks.map((link) => (
          <div key={link.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{link.label[locale]}</h3>
              <span className="text-xs uppercase tracking-widest text-white/50">
                {locale === "ja" ? "外部リンク" : "External"}
              </span>
            </div>
            <p className="mt-2 text-sm text-white/75">{link.description[locale]}</p>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-white/30 px-4 py-1.5 text-sm font-medium text-white hover:border-white"
            >
              {locale === "ja" ? "開く" : "Open"}
            </a>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 text-center">
        <p className="text-lg text-white/80">
          {locale === "ja"
            ? "サービスや講義のご依頼はフォームからお気軽にご連絡ください。"
            : "For services or lectures, feel free to reach out via the form."}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
          <Link
            href={`/${locale}/services` as Route}
            className="rounded-full border border-white/30 px-5 py-2 text-white hover:border-white"
          >
            {locale === "ja" ? "サービスを見る" : "View services"}
          </Link>
          <Link
            href={`/${locale}/contact` as Route}
            className="rounded-full bg-white px-5 py-2 font-semibold text-black"
          >
            {locale === "ja" ? "問い合わせる" : "Contact"}
          </Link>
        </div>
      </section>
    </div>
  );
}
