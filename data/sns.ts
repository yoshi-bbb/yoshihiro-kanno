import type { Locale } from "@/lib/locales";

export interface SocialLink {
  id: string;
  label: Record<Locale, string>;
  description: Record<Locale, string>;
  url: string;
}

export const snsLinks: SocialLink[] = [
  {
    id: "youtube",
    label: { ja: "YouTube", en: "YouTube" },
    description: {
      ja: "PrimePic や AIガバナンスに関する最新デモを公開",
      en: "Video updates covering PrimePic progress and AI governance demos.",
    },
    url: "https://youtube.com/@2-rec?si=ykLGMiOANZ2CBjgo",
  },
  {
    id: "note",
    label: { ja: "Note", en: "Note" },
    description: {
      ja: "リサーチログやフィールドノートをテキストで蓄積",
      en: "Deep-dive articles on governance and product experiments.",
    },
    url: "https://note.com/ai_gov",
  },
  {
    id: "instagram",
    label: { ja: "Instagram", en: "Instagram" },
    description: {
      ja: "開発の舞台裏やイベントの様子をライトに共有",
      en: "Behind-the-scenes snapshots from product work and events.",
    },
    url: "https://www.instagram.com/hiro_urec?igsh=MXZsdWx6bzQ1Y2dtMQ%3D%3D&utm_source=qr",
  },
  {
    id: "facebook",
    label: { ja: "Facebook", en: "Facebook" },
    description: {
      ja: "コミュニティ向けのお知らせや長文ポスト",
      en: "Long-form updates and community announcements.",
    },
    url: "https://www.facebook.com/share/1Bkh1GcGPR/?mibextid=wwXIfr",
  },
  {
    id: "linkedin",
    label: { ja: "LinkedIn", en: "LinkedIn" },
    description: {
      ja: "英語圏向けにビジネスアップデートを発信",
      en: "Business updates for investors and partners.",
    },
    url: "https://www.linkedin.com/in/yoshihiro-kanno-11603230a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];
