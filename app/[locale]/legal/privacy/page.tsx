import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/locales";
import type { Locale } from "@/lib/locales";
import {
  COMPANY_EMAIL,
  SITE_OWNER_EN,
  SITE_OWNER_JA,
} from "@/lib/config";

const PRIVACY_DOC_URL =
  "https://docs.google.com/document/d/1ahnUTdar62_Vk9_elCf-V1QSsLvNzL_BwMxtAjlphqw/preview";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = copy[locale];

  return (
    <div className="space-y-8 text-sm text-white/80">
      <section>
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">
          {t.eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.title}</h1>
        <p className="mt-2 text-white/80">{t.intro}</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <div className="aspect-[8.5/11] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <iframe
            src={PRIVACY_DOC_URL}
            title="Privacy Policy Document"
            className="h-full w-full border-0"
          />
        </div>
        <p className="mt-3 text-xs text-white/60">
          {locale === "ja" ? (
            <>
              うまく表示されない場合は{" "}
              <a
                href={PRIVACY_DOC_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--accent)] underline"
              >
                Google ドキュメント
              </a>
              から直接ご確認ください。
            </>
          ) : (
            <>
              If the embedded document does not load, open it{" "}
              <a
                href={PRIVACY_DOC_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--accent)] underline"
              >
                on Google Docs
              </a>
              .
            </>
          )}
        </p>
      </section>

      {t.sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-xl font-semibold text-white">{section.title}</h2>
          <p className="mt-2">{section.body}</p>
          {section.items && (
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="rounded-2xl border border-white/15 p-4 text-xs text-white/70">
        <p>
          {t.contact} : {COMPANY_EMAIL}
        </p>
      </section>
    </div>
  );
}

const copy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: ReactNode;
    contact: string;
    sections: { title: string; body: string; items?: string[] }[];
  }
> = {
  ja: {
    eyebrow: "LEGAL",
    title: "プライバシーポリシー",
    intro: (
      <>
        このサイトは {SITE_OWNER_JA}（個人）が運営し、Googleフォームを通じてお問い合わせ内容を収集します。以下の通り、取得情報と利用目的を明示します。
      </>
    ),
    contact: "お問い合わせ窓口",
    sections: [
      {
        title: "収集する情報",
        body: "Googleフォームで入力いただく以下の情報を取得します。",
        items: [
          "氏名、メールアドレス、所属・会社名",
          "相談内容、予算感、希望する連絡手段",
          "個人情報取扱いへの同意状況",
        ],
      },
      {
        title: "利用目的",
        body: "取得した情報は、問い合わせ対応およびサービス提供の可否判断のみに利用します。マーケティング配信や第三者への提供は行いません。",
      },
      {
        title: "保管期間",
        body: "Googleフォーム / Googleスプレッドシート上でお問い合わせから 2 年間を目安に保管し、不要になったデータは削除します。",
      },
      {
        title: "外部サービスの利用",
        body: "Googleフォーム、Googleスプレッドシート、Google Workspace を使用しており、これらのサービス提供者がデータを処理します。",
      },
      {
        title: "個人情報へのアクセス",
        body: "アクセス権限は菅野本人に限定しています。開示・訂正・削除のご要望はメールで承ります。",
      },
    ],
  },
  en: {
    eyebrow: "LEGAL",
    title: "Privacy Policy",
    intro: (
      <>
        {SITE_OWNER_EN} operates this portal personally and collects inquiries via Google Forms. The
        following statements clarify what is collected and how it is used.
      </>
    ),
    contact: "Contact",
    sections: [
      {
        title: "Information collected",
        body: "We collect the information you enter in the Google Form:",
        items: [
          "Name, email address, affiliation/company",
          "Purpose of the inquiry, budget, preferred contact method",
          "Consent to the privacy policy",
        ],
      },
      {
        title: "How we use it",
        body: "Data is used solely to evaluate and respond to your inquiry. It is not repurposed for marketing or shared with third parties.",
      },
      {
        title: "Retention",
        body: "Responses are stored in Google Forms/Sheets for approximately two years and deleted once no longer needed.",
      },
      {
        title: "External services",
        body: "Google Forms, Google Sheets, and Google Workspace are used to process and store the information.",
      },
      {
        title: "Access & requests",
        body: "Only Yoshihiro Kanno can access the stored data. Contact us via email to request disclosure, correction, or deletion.",
      },
    ],
  },
};
