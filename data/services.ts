import type { Locale } from "@/lib/locales";

export interface ServiceItem {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  price: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
  notes?: Record<Locale, string>;
}

export const services: ServiceItem[] = [
  {
    id: "governance",
    title: {
      ja: "AIガバナンス設計・PoC支援",
      en: "AI Governance Design & PoC Support",
    },
    description: {
      ja: "危険操作の分類、ポリシー（Rego）化、Gate Runtime を用いた PoC をワンセットで設計。既存システムとの統合も含めたロードマップを定義します。",
      en: "Classify risky operations, encode policies in Rego, and run a Gate Runtime-based PoC with a roadmap for integration into your stack.",
    },
    price: {
      ja: "150万円〜 / 6週間",
      en: "From JPY 1.5M / 6 weeks",
    },
    deliverables: {
      ja: [
        "現状把握ワークショップ",
        "ポリシーカタログ（Rego）",
        "署名付きログ設計書",
        "PoC レポート / ローンチ計画",
      ],
      en: [
        "Current-state workshop",
        "Policy catalog (Rego)",
        "Signed log design doc",
        "PoC report & launch plan",
      ],
    },
  },
  {
    id: "custom-dev",
    title: {
      ja: "AI受託開発（LLM / 拡散モデル / 物理AI）",
      en: "AI Development (LLM / Diffusion / Physical AI)",
    },
    description: {
      ja: "PrimePic や Gate Runtime で培った生成/制御ワークフローを活かし、LLMアプリ、画像生成、物理AI制御までをハンズオンで開発します。",
      en: "Hands-on development for LLM apps, diffusion workflows, and physical AI controllers leveraging the pipelines proven in PrimePic and Gate Runtime.",
    },
    price: {
      ja: "月額 180万円〜（稼働 0.8 FTE 想定）",
      en: "From JPY 1.8M / month (0.8 FTE)",
    },
    deliverables: {
      ja: [
        "要件定義・優先度整理",
        "GCP / GitHub アーキテクチャ設計",
        "実装・テスト・CI",
        "運用マニュアルとハンドオフ",
      ],
      en: [
        "Requirements & prioritization",
        "GCP / GitHub architecture design",
        "Implementation, tests, CI",
        "Runbook and hand-off package",
      ],
    },
  },
  {
    id: "advisory",
    title: {
      ja: "AIコンサルティング / 技術顧問",
      en: "AI Advisory / Fractional CTO",
    },
    description: {
      ja: "アーキレビュー、セキュリティレビュー、投資家 Q&A 対応を月次で伴走。Gate Runtime やログ指針を参考情報として提供します。",
      en: "Monthly engagements covering architecture reviews, security posture checks, and investor Q&A prep with Gate Runtime and logging guidelines as reference implementations.",
    },
    price: {
      ja: "月額 60万円〜（月 2〜3 回セッション）",
      en: "From JPY 0.6M / month (2-3 sessions)",
    },
    deliverables: {
      ja: [
        "月次セッションレポート",
        "リスク一覧と優先度",
        "スプリント単位のフォローアップ",
      ],
      en: [
        "Monthly session report",
        "Prioritized risk list",
        "Sprint-level follow-up",
      ],
    },
  },
  {
    id: "ses",
    title: {
      ja: "SES / 業務委託",
      en: "SES / Contracting",
    },
    description: {
      ja: "短期的に AI 実装をリードする必要がある場合に、週3〜4日の稼働で支援します。プロダクト志向・PoC 志向のどちらにも対応。",
      en: "For teams that need a short-term AI builder, I join 3-4 days a week and ship either PoC or product-ready increments.",
    },
    price: {
      ja: "日額 12万円〜（稼働日数に応じて調整）",
      en: "From JPY 120k / day (adjusted by cadence)",
    },
    deliverables: {
      ja: [
        "デイリーログと成果物リンク",
        "セキュリティ配慮したコードベースへのコントリビュート",
      ],
      en: [
        "Daily logs with artifact links",
        "Contributions directly in your secured repos",
      ],
    },
    notes: {
      ja: "NDA / 個別契約に対応。守備範囲は要件定義〜実装まで一気通貫。",
      en: "Available under NDA / bespoke agreements covering discovery through implementation.",
    },
  },
];
