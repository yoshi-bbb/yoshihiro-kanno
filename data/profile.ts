import type { Locale } from "@/lib/locales";

export interface BasicFact {
  label: string;
  value: string;
  description?: string;
  href?: string;
}

export interface TimelineItem {
  title: string;
  subtitle?: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  items: { label: string; experience: string }[];
}

export interface WorkSummary {
  org: string;
  role: string;
  department?: string;
  description?: string;
  bullets: string[];
}

export interface Certificate {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  image: string;
}

export const profileHero = {
  oneLiner: {
    ja: "AIガバナンスとAIセキュリティに軸足を置きつつ、データ前処理から実装・運用までを一貫して担うエンジニア / 起業家。",
    en: "Founder-engineer focused on AI governance & security with hands-on ownership across the ML lifecycle.",
  },
  intro: {
    ja: "国立大学法人 宇都宮大学で化学工学を学びながら、Gate Runtime / Sentinel-MCP や PrimePic AI といったプロダクトをリード。",
    en: "While studying chemical engineering at Utsunomiya University, I lead products such as Gate Runtime / Sentinel-MCP and PrimePic AI.",
  },
};

export const profileBasics: Record<Locale, BasicFact[]> = {
  ja: [
    { label: "氏名", value: "菅野 吉洋（Yoshihiro Kanno）" },
    { label: "役職", value: "株式会社 U-Rec 代表取締役" },
    { label: "所在地", value: "栃木県宇都宮市" },
    { label: "最終学歴", value: "国立大学法人 宇都宮大学（化学工学系 在学中）" },
    {
      label: "GitHub",
      value: "yoshi-bbb",
      href: "https://github.com/yoshi-bbb",
    },
    {
      label: "得意分野",
      value: "AIガバナンス / AIセキュリティ（ISO/IEC 42001・EU AI Act）× ML実装",
    },
    { label: "得意言語", value: "Python, JavaScript" },
  ],
  en: [
    { label: "Name", value: "Yoshihiro Kanno" },
    { label: "Role", value: "Founder & CEO, U-Rec Inc." },
    { label: "Location", value: "Utsunomiya, Tochigi, Japan" },
    { label: "Education", value: "Utsunomiya University (Chemical Engineering, currently enrolled)" },
    {
      label: "GitHub",
      value: "yoshi-bbb",
      href: "https://github.com/yoshi-bbb",
    },
    {
      label: "Specialties",
      value: "AI governance / AI security (ISO/IEC 42001, EU AI Act) × ML engineering",
    },
    { label: "Languages", value: "Python, JavaScript" },
  ],
};

export const profileTimeline: Record<Locale, TimelineItem[]> = {
  ja: [
    { title: "栃木県立栃木高等学校", description: "卒業" },
    { title: "国立大学法人 宇都宮大学", description: "化学工学系に在学" },
    {
      title: "Gustodevelopment株式会社",
      description: "インターン / 業務委託として事業開発と小規模チームのリードを担当",
    },
    {
      title: "ピットデザイン株式会社",
      description: "情報システム管理部で AI を活用した業務改善に従事",
    },
    {
      title: "株式会社 U-Rec",
      description: "AIガバナンス / AIセキュリティに特化したスタートアップを創業し代表取締役に就任",
    },
    {
      title: "早稲田大学大学院",
      description: "2025年に「AIの活用とその安全性」を担当",
    },
  ],
  en: [
    { title: "Tochigi Prefectural Tochigi High School", description: "Graduated" },
    { title: "Utsunomiya University", description: "Chemical engineering track" },
    {
      title: "Gustodevelopment Inc.",
      description: "Intern / contractor leading small engineering squads and business development",
    },
    {
      title: "Pit Design Inc.",
      description: "Information systems department, improving internal workflows with AI",
    },
    {
      title: "U-Rec Inc.",
      description: "Founded the company and became CEO to build AI governance & security offerings",
    },
    {
      title: "Waseda University Graduate School",
      description: "Delivered the course \"Utilization of AI and its Safety\" in 2025",
    },
  ],
};

export const profileSkills: Record<Locale, SkillCategory[]> = {
  ja: [
    {
      title: "開発言語",
      items: [
        { label: "Python", experience: "約3年" },
        { label: "JavaScript", experience: "約0.6年" },
        { label: "C", experience: "約0.5年" },
        { label: "HTML/CSS", experience: "各 約1年" },
      ],
    },
    {
      title: "機械学習 / データサイエンス",
      items: [
        { label: "PyTorch", experience: "約2年" },
        { label: "TensorFlow", experience: "約2年" },
        { label: "Gymnasium (RL)", experience: "約1.5年" },
        { label: "Dify", experience: "約0.8年" },
      ],
    },
    {
      title: "フロントエンド / Web",
      items: [
        { label: "Next.js", experience: "約0.6年" },
        { label: "React Native", experience: "モバイルUI実装経験" },
      ],
    },
    {
      title: "データベース / ストレージ",
      items: [
        { label: "Firestore / BigQuery", experience: "各 約1年" },
        { label: "kintone アプリDB", experience: "約0.5年" },
        { label: "Vector DB (Postage / Weaviate)", experience: "案件に応じて" },
      ],
    },
    {
      title: "インフラ / サーバ・OS",
      items: [
        { label: "GCP", experience: "約1年" },
        { label: "AWS", experience: "約1年" },
        { label: "エックスサーバー", experience: "約1年" },
        { label: "Docker", experience: "約2年" },
        { label: "WSL", experience: "約2.5年" },
      ],
    },
    {
      title: "業務ツール / ローコード",
      items: [
        { label: "kintone", experience: "業務改善に活用" },
        { label: "Google Apps Script", experience: "自動化ボット開発" },
        { label: "Dify Cloud", experience: "LLM ワークフロー設計" },
      ],
    },
  ],
  en: [
    {
      title: "Programming",
      items: [
        { label: "Python", experience: "~3 yrs" },
        { label: "JavaScript", experience: "~0.6 yrs" },
        { label: "C", experience: "~0.5 yrs" },
        { label: "HTML/CSS", experience: "~1 yr" },
      ],
    },
    {
      title: "ML / Data",
      items: [
        { label: "PyTorch", experience: "~2 yrs" },
        { label: "TensorFlow", experience: "~2 yrs" },
        { label: "Gymnasium (RL)", experience: "~1.5 yrs" },
        { label: "Dify", experience: "~0.8 yrs" },
      ],
    },
    {
      title: "Frontend / Web",
      items: [
        { label: "Next.js", experience: "~0.6 yrs" },
        { label: "React Native", experience: "mobile UI work" },
      ],
    },
    {
      title: "Data Stores",
      items: [
        { label: "Firestore / BigQuery", experience: "~1 yr each" },
        { label: "kintone app DB", experience: "~0.5 yrs" },
        { label: "Vector DBs (Postage / Weaviate)", experience: "project based" },
      ],
    },
    {
      title: "Infra / OS",
      items: [
        { label: "GCP", experience: "~1 yr" },
        { label: "AWS", experience: "~1 yr" },
        { label: "Xserver", experience: "~1 yr" },
        { label: "Docker", experience: "~2 yrs" },
        { label: "WSL", experience: "~2.5 yrs" },
      ],
    },
    {
      title: "Tools & Low-code",
      items: [
        { label: "kintone", experience: "internal workflow builds" },
        { label: "Google Apps Script", experience: "automation bots" },
        { label: "Dify Cloud", experience: "LLM workflow design" },
      ],
    },
  ],
};

export const profileStrengths: Record<Locale, string> = {
  ja: "AIガバナンスに配慮したデータ前処理〜教師あり / 生成 / 強化学習モデル開発〜評価〜実装までを、一貫したポリシーとログ設計のもとで遂行すること。",
  en: "Ability to ship governed ML systems end-to-end—data prep, supervised / generative / RL models, evaluation, deployment—while maintaining consistent policies and logging.",
};

export const profileWorkSummaries: Record<Locale, WorkSummary[]> = {
  ja: [
    {
      org: "ピットデザイン株式会社",
      role: "AIエンジニア / 情報システム管理部",
      bullets: [
        "社内チャットボットやメール自動送信ボットの開発",
        "営業リスト自動生成システム・案件管理GASの実装",
        "コールセンター問い合わせの要約・分類・連絡フロー構築",
        "既存データの kintone への移行と運用",
        "経営層の意思決定を支援する AI 要件定義",
      ],
    },
    {
      org: "Gustodevelopment株式会社",
      role: "エンジニア / 小規模チームリード",
      bullets: [
        "事業開発と要件調整",
        "開発メンバーのチームマネジメント",
        "React Native によるモバイルフロント UI 実装",
        "Node.js バックエンドの保守・修正・コードレビュー",
      ],
    },
    {
      org: "株式会社 U-Rec",
      role: "代表取締役 / プロダクトリード",
      bullets: [
        "PrimePic AI をはじめとするソーシャルアプリ開発",
        "Gate Runtime / Sentinel-MCP など AI セキュリティツールの設計・実装",
        "AIガバナンスコンサルティングおよび AI 受託開発",
        "小規模チームのマネジメントとハンズオン実装の両立",
      ],
    },
  ],
  en: [
    {
      org: "Pit Design Inc.",
      role: "AI engineer / Information Systems Dept.",
      bullets: [
        "Built internal chatbots and automated mail-sending bots",
        "Implemented sales-list automation and project-tracking GAS scripts",
        "Summarized and routed call-center inquiries with AI",
        "Migrated legacy data into kintone and maintained workflows",
        "Defined AI requirements that support executive decision-making",
      ],
    },
    {
      org: "Gustodevelopment Inc.",
      role: "Engineer / small-team lead",
      bullets: [
        "Business development and requirements alignment",
        "Managed compact engineering teams",
        "Built mobile UI with React Native",
        "Maintained and reviewed Node.js backend code",
      ],
    },
    {
      org: "U-Rec Inc.",
      role: "Founder & product lead",
      bullets: [
        "Shipped social applications such as PrimePic AI",
        "Designed and implemented Gate Runtime / Sentinel-MCP (AI security tooling)",
        "Delivered AI governance consulting and custom AI builds",
        "Balanced hands-on implementation with team management",
      ],
    },
  ],
};

export const uRecRoleSummary: Record<Locale, WorkSummary> = {
  ja: profileWorkSummaries.ja.find((w) => w.org === "株式会社 U-Rec")!,
  en: profileWorkSummaries.en.find((w) => w.org === "U-Rec Inc.")!,
};

export const profileCertificates: Certificate[] = [
  {
    id: "dl-basics",
    title: {
      ja: "Deep Learning 基礎講座",
      en: "Deep Learning Foundations",
    },
    description: {
      ja: "松尾研が提供する体系的な DL 基礎カリキュラム修了",
      en: "Completed Matsuo Lab's foundational deep learning curriculum.",
    },
    image: "/images/certificates/deep-learning-foundations.jpg",
  },
  {
    id: "deep-generative",
    title: {
      ja: "深層生成モデル講座",
      en: "Deep Generative Models",
    },
    description: {
      ja: "生成モデルのアーキテクチャと応用をケーススタディで習得",
      en: "Studied architectures and applications of deep generative models.",
    },
    image: "/images/certificates/deep-generative-models.jpg",
  },
  {
    id: "deep-rl",
    title: {
      ja: "深層強化学習講座",
      en: "Deep Reinforcement Learning",
    },
    description: {
      ja: "SAC / PPO などの RL 実装を通じた制御理論の理解",
      en: "Hands-on control theory via SAC, PPO, and other deep RL methods.",
    },
    image: "/images/certificates/deep-reinforcement-learning.jpg",
  },
  {
    id: "ai-semiconductor",
    title: {
      ja: "AIと半導体講座",
      en: "AI & Semiconductor Program",
    },
    description: {
      ja: "AI インフラと半導体設計の最新動向を体系的に学習",
      en: "Covered the intersection of AI infrastructure and semiconductor design trends.",
    },
    image: "/images/certificates/ai-and-semiconductors.jpg",
  },
];
