import type { Locale } from "@/lib/locales";

export interface TeachingItem {
  id: string;
  title: Record<Locale, string>;
  context: Record<Locale, string>;
  audience: Record<Locale, string>;
  takeaways: Record<Locale, string[]>;
  year: string;
  resources?: {
    label: Record<Locale, string>;
    href: string;
  }[];
}

export const teachingItems: TeachingItem[] = [
  {
    id: "waseda",
    title: {
      ja: "早稲田大学大学院「AIの活用とその安全性」",
      en: "Waseda University Graduate School – Utilization of AI and its Safety",
    },
    context: {
      ja: "大学院生向け集中講義として、生成AIを活用する際のリスクとログ設計を一次情報ベースで解説。",
      en: "Graduate-level intensive lecture unpacking generative AI risks and logging strategies using first-hand build logs.",
    },
    audience: {
      ja: "大学院生 / 研究者 / 研究支援スタッフ",
      en: "Graduate students, researchers, and program staff",
    },
    takeaways: {
      ja: [
        "AI 導入時のリスク分類ワークショップ",
        "実務で使っているログ設計を題材にしたハンズオン",
        "ガバナンスとアーキテクチャの橋渡し方法",
      ],
      en: [
        "Risk classification workshop for AI deployments",
        "Hands-on session using the log design I use in production",
        "How to connect governance docs with technical architecture",
      ],
    },
    year: "2025",
  },
];

export const futureTeachingIdeas: Record<Locale, string[]> = {
  ja: [
    "企業向け AI ガバナンス入門（30〜60分）",
    "GCP 上での安全な AI 運用手引き",
    "AIセキュリティ基盤を題材にしたログ演習",
  ],
  en: [
    "Corporate primer on AI governance (30–60 min)",
    "Operating AI safely on GCP",
    "Log design workshop using an AI security platform",
  ],
};
