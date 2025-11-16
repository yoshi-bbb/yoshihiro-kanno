import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/locales";
import type { Locale } from "@/lib/locales";
import { CONTACT_FORM_URL } from "@/lib/config";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = copy[locale];

  return (
    <div className="space-y-6">
      <section>
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">CONTACT</p>
        <h2 className="mt-2 text-3xl font-semibold">{t.title}</h2>
        <p className="mt-2 text-sm text-white/80">{t.description}</p>
        <ul className="mt-3 space-y-1 text-sm text-white/75">
          {t.points.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-4">
        <div className="mb-3 flex justify-end">
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-4 py-1.5 text-sm text-white hover:border-white"
          >
            {locale === "ja" ? "フォームを新しいタブで開く" : "Open form in new tab"}
          </a>
        </div>
        <div className="w-full overflow-hidden rounded-2xl">
          <iframe
            src={CONTACT_FORM_URL}
            className="h-[900px] w-full border-0"
            title="Contact form"
          />
        </div>
        <p className="mt-3 text-xs text-white/60">{t.privacy}</p>
      </section>
    </div>
  );
}

const copy: Record<
  Locale,
  { title: string; description: string; points: string[]; privacy: string }
> = {
  ja: {
    title: "Googleフォームからお気軽にご連絡ください",
    description:
      "AIガバナンス・AIセーフティのご相談、AI受託開発の依頼、早稲田大学で実施したような講義・ワークショップのご依頼などに対応しています。",
      points: [
        "氏名 / メールアドレス / 所属 / ご相談内容をご入力ください。",
        "用途（受託開発 / ガバナンス / PrimePic / AIセキュリティ基盤 / 講義 / その他）を選択できます。",
        "予算感や希望する連絡手段は任意で記載可能です。",
      ],
    privacy:
      "送信内容は Google フォーム + スプレッドシートで管理し、プライバシーポリシーに基づいて取り扱います。",
  },
  en: {
    title: "Use the Google Form to start the conversation",
    description:
      "Available for AI governance / safety engagements, custom AI builds, and lectures similar to the Waseda session.",
      points: [
        "Share your name, email, affiliation, and the context of the project.",
        "Pick the purpose (custom dev, governance, PrimePic, AI security platform, lecture, or other).",
        "Budget and preferred communication channel are optional but helpful.",
      ],
    privacy:
      "Responses are stored in Google Forms + Sheets and handled under the privacy policy listed under /legal/privacy.",
  },
};
