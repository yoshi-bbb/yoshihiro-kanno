import type { Locale } from "@/lib/locales";

export interface ProjectSection {
  id: string;
  title: Record<Locale, string>;
  description?: Record<Locale, string>;
  bullets?: Record<Locale, string[]>;
  groupedBullets?: {
    label: Record<Locale, string>;
    items: Record<Locale, string[]>;
  }[];
  disclaimer?: Record<Locale, string>;
}

export interface Project {
  slug: string;
  name: Record<Locale, string>;
  status: Record<Locale, string>;
  summary: {
    eyebrow: Record<Locale, string>;
    title: Record<Locale, string>;
    description: Record<Locale, string[]>;
    externalLink?: {
      label: Record<Locale, string>;
      url: string;
    };
  };
  teaser: {
    description: Record<Locale, string>;
    tags: Record<Locale, string[]>;
  };
  sections: ProjectSection[];
  statusNote?: Record<Locale, string>;
}

export const projects: Project[] = [
  {
    slug: "primepic-ai",
    name: {
      ja: "PrimePic AI",
      en: "PrimePic AI",
    },
    status: {
      ja: "運用中",
      en: "Live",
    },
    summary: {
      eyebrow: {
        ja: "CONSUMER PRODUCT",
        en: "CONSUMER PRODUCT",
      },
      title: {
        ja: "PrimePic AI – 日常写真から“ちょうどいい”一枚をつくる",
        en: "PrimePic AI – turning everyday shots into just-right portraits",
      },
      description: {
        ja: [
          "PrimePic AI は、日常の写真から SNS やプロフィールに使える自然な画像を生成するサービスです。",
          "「別人レベルに盛る」のではなく、本人らしさを残しながら印象を少しだけ良くすることを重視しています。",
          "画像生成モデルをただ叩くのではなく、プロンプト設計・フィルタリング・AIガバナンスを組み合わせたワークフローで、安全なアウトプットを提供します。",
        ],
        en: [
          "PrimePic AI turns everyday photos into natural-looking portraits ready for profiles and social presence.",
          "Rather than over-editing faces, it preserves your identity and lightly improves the overall impression.",
          "Prompt engineering, filtering, and AI governance practices are baked into the workflow to keep generations safe and practical.",
        ],
      },
      externalLink: {
        label: {
          ja: "公式サイトを見る",
          en: "Visit official site",
        },
        url: "https://primepic.u-rec.jp/",
      },
    },
    teaser: {
      description: {
        ja: "本人らしさを損なわずに SNS / プロフィールで使える“ちょうどいい”画像を生成。",
        en: "Generates “just-right” profile photos that keep your identity intact.",
      },
      tags: {
        ja: ["Generative AI", "Consumer"],
        en: ["Generative AI", "Consumer"],
      },
    },
    sections: [
      {
        id: "use-cases",
        title: {
          ja: "ユースケース",
          en: "Use cases",
        },
        bullets: {
          ja: [
            "就活・インターン応募で使うプロフィール写真",
            "LinkedIn などビジネス SNS 向けのアイコン",
            "マッチングアプリ / SNS の「自然だけど少し整えた」写真",
            "クリエイター / フリーランスのライトなポートレート",
          ],
          en: [
            "Profile photos for job hunting or internship applications",
            "Icons for LinkedIn and other professional networks",
            "Natural-but-improved photos for dating apps or casual SNS",
            "Portraits for creators and freelancers",
          ],
        },
      },
      {
        id: "features",
        title: {
          ja: "機能",
          en: "Features",
        },
        groupedBullets: [
          {
            label: {
              ja: "入力",
              en: "Input",
            },
            items: {
              ja: ["ユーザーがアップロードした日常写真を受け付け、顔の向き・背景などのメタ情報を抽出。"],
              en: ["Accepts user-uploaded daily photos and extracts metadata such as pose and background."],
            },
          },
          {
            label: {
              ja: "処理",
              en: "Processing",
            },
            items: {
              ja: [
                "顔の向き・表情・背景を踏まえた画像生成パイプライン。",
                "過度な修正・性的表現・著名人の模倣などを禁止するプロンプト制御。",
                "生成リクエストと出力の監査ログを保持する設計を検討。",
              ],
              en: [
                "Generation pipeline that considers pose, expression, and background.",
                "Prompt controls that block over-editing, sexualized outputs, or impersonation of famous people.",
                "Design keeps audit logs of generation requests and outputs.",
              ],
            },
          },
          {
            label: {
              ja: "出力",
              en: "Output",
            },
            items: {
              ja: [
                "複数の候補画像を提示し、用途に合わせて選択可能。",
                "必要に応じてトリミングやサイズ調整のサポートを追加予定。",
              ],
              en: [
                "Presents multiple candidate images so users can pick what fits the channel.",
                "Lightweight cropping / resizing support is available when needed.",
              ],
            },
          },
        ],
        disclaimer: {
          ja: "モデルやクラウド構成の詳細は公開可能な範囲で別途 Tech Notes に整理予定。",
          en: "Detailed model / cloud stack notes are documented separately where disclosure is possible.",
        },
      },
      {
        id: "architecture",
        title: {
          ja: "アーキテクチャ概要",
          en: "Architecture overview",
        },
        bullets: {
          ja: [
            "フロントエンド：Web フォームから画像アップロード＋進捗表示。",
            "バックエンド：クラウド上の画像生成 API を呼び出し、世代ごとの状態機械で管理。",
            "ストレージ：アップロード画像と生成結果を短期間保持し、自動削除スケジュールを設定。",
            "ガバナンス：NG プロンプト / NG 出力を避ける制御レイヤを設け、将来的に Gate Runtime 連携を前提とする。",
          ],
          en: [
            "Frontend: web form for uploads and progress display.",
            "Backend: calls cloud-based image generation APIs and tracks job states.",
            "Storage: keeps uploads/results for a short retention window with automated deletion.",
            "Governance: control layer to filter NG prompts/outputs with a future path to Gate Runtime integration.",
          ],
        },
      },
      {
        id: "governance",
        title: {
          ja: "ガバナンス / セキュリティへの配慮",
          en: "Governance & safety",
        },
        bullets: {
          ja: [
            "著作権的にグレーな素材や著名人の模倣を扱わないポリシーを明文化。",
            "利用規約・プライバシーポリシーと連動し、アップロードデータの扱いを透明化。",
            "削除申請やログ開示に応じられるよう、生成記録のメタデータを保持。",
          ],
          en: [
            "Written policy prohibiting copyrighted material misuse or impersonation of public figures.",
            "Aligned with ToS / privacy policy to clarify how uploads are processed and deleted.",
            "Keeps metadata so deletion requests or audit disclosures can be honored.",
          ],
        },
      },
      {
        id: "status",
        title: {
          ja: "ステータス",
          en: "Status",
        },
        description: {
          ja: "個人プロダクトとして運用しつつ、AIガバナンスをプロダクトレベルで実装するための実験場に位置付けています。",
          en: "Operated as a personal product and used as a sandbox to implement AI governance at the product level.",
        },
      },
    ],
    statusNote: {
      ja: "一次情報を公開しながら改善を続けるライブサービスです。",
      en: "Live service with ongoing improvements and open build logs.",
    },
  },
  {
    slug: "ai-security",
    name: {
      ja: "AIセキュリティシステム（仮称）",
      en: "AI Security System (working title)",
    },
    status: {
      ja: "開発中",
      en: "In development",
    },
    summary: {
      eyebrow: {
        ja: "AI FIREWALL",
        en: "AI FIREWALL",
      },
      title: {
        ja: "AIセキュリティシステム（AI Firewall / Gate Runtime）",
        en: "AI Security System (AI Firewall / Gate Runtime)",
      },
      description: {
        ja: [
          "LLM や生成 AI、物理 AI（ロボット / ドローン）に門番を置き、安全に運用するためのゲートウェイ / ファイアウォール構想。",
          "入力と出力を監視・制御・記録し、企業が本番環境で AI を扱う際の安心感を高めることを目的としています。",
          "現在はクローズドな検証・開発段階であり、仕様や名称は今後変更される可能性があります。",
        ],
        en: [
          "A gateway / firewall concept that places a guard in front of LLMs, generative models, and physical AI systems.",
          "Monitors, controls, and logs inputs/outputs so organizations can safely run AI in production.",
          "Currently in closed development, and specifications or naming may change as testing progresses.",
        ],
      },
    },
    teaser: {
      description: {
        ja: "LLM や物理 AI の前段に Gate Runtime を挟み、危険操作を制御するための基盤。",
        en: "Gateway that wraps LLMs or physical AI with policy controls and signed logs.",
      },
      tags: {
        ja: ["AI Firewall", "Gate Runtime"],
        en: ["AI Firewall", "Gate Runtime"],
      },
    },
    sections: [
      {
        id: "problems",
        title: {
          ja: "解決したい課題",
          en: "Problems to solve",
        },
        bullets: {
          ja: [
            "LLM / 生成AI による機密情報の漏えい",
            "危険な指示に対する誤応答や暴走",
            "ロボット / ドローンが想定外の危険動作をしてしまうリスク",
            "誰が・いつ・何を判断したかを説明できない監査課題",
          ],
          en: [
            "Leakage of confidential information through LLM / generative AI usage",
            "Dangerous prompts producing unsafe responses or actions",
            "Physical AI (robot arms, drones) executing prohibited movements",
            "Lack of explainability around who approved what and when",
          ],
        },
      },
      {
        id: "concept",
        title: {
          ja: "コンセプト",
          en: "Concept",
        },
        bullets: {
          ja: [
            "ユーザー → [AIセキュリティシステム] → モデル / ロボットという経路で危険リクエストをブロック。",
            "危険操作・NGワード・機密情報をポリシーとして定義し自動判定。",
            "JSONL ログとデジタル署名で改ざん検知を可能にする。",
          ],
          en: [
            "Insert [AI Security System] between users and models/robots to block risky requests.",
            "Define policies for dangerous actions, NG words, or sensitive data for automatic evaluation.",
            "Record JSONL logs with digital signatures to detect tampering.",
          ],
        },
      },
      {
        id: "features",
        title: {
          ja: "想定機能（開発中）",
          en: "Expected features (in progress)",
        },
        groupedBullets: [
          {
            label: {
              ja: "ポリシーエンジン",
              en: "Policy engine",
            },
            items: {
              ja: [
                "Rego / OPA などルールベースの判定で入力・出力を制御。",
                "LLM でリスクスコアリングし、高リスク時は人間レビューに回すフローを検討。",
              ],
              en: [
                "Rego / OPA-style rules to govern inputs and outputs.",
                "LLM-assisted risk scoring that can escalate to human review when needed.",
              ],
            },
          },
          {
            label: {
              ja: "監査ログ",
              en: "Audit logging",
            },
            items: {
              ja: [
                "全リクエスト / レスポンスを一意ID付きで記録。",
                "Ed25519 などの署名とチェーン構造で改ざんを検知。",
              ],
              en: [
                "Log every request/response with unique IDs.",
                "Use signatures such as Ed25519 plus chained hashes for tamper evidence.",
              ],
            },
          },
          {
            label: {
              ja: "物理AI対応",
              en: "Physical AI support",
            },
            items: {
              ja: [
                "速度制限や動作範囲制限などを Gate 側で強制。",
                "緊急停止（kill switch）との連携を前提に設計。",
              ],
              en: [
                "Enforce speed or workspace constraints before commands reach actuators.",
                "Integrate with emergency stop / kill-switch interfaces.",
              ],
            },
          },
          {
            label: {
              ja: "クラウド連携",
              en: "Cloud integration",
            },
            items: {
              ja: [
                "GCP など既存の MLOps パイプラインにゲートウェイとして挿入可能にする。",
                "Cloud Run / Envoy 等との親和性を意識した設計を検証中。",
              ],
              en: [
                "Insert as a gateway in front of existing GCP or other cloud pipelines.",
                "Designing for compatibility with Cloud Run, Envoy, and similar runtimes.",
              ],
            },
          },
        ],
        disclaimer: {
          ja: "リリース時に機能構成が変わる可能性があります。",
          en: "Functionality is subject to change prior to release.",
        },
      },
      {
        id: "targets",
        title: {
          ja: "ターゲットユーザー",
          en: "Target users",
        },
        bullets: {
          ja: [
            "生成 AI / LLM を業務利用したいが、情報漏えいや法的リスクを懸念する企業",
            "ロボット / ドローンなど物理 AI を PoC から本番へ移行したいチーム",
            "金融・医療・公共など、監査対応と説明責任が求められる領域",
          ],
          en: [
            "Organizations that want to adopt LLMs / generative AI but fear leaks or regulatory exposure",
            "Teams moving physical AI (robotics / drones) from PoC to production",
            "Domains like finance, healthcare, or public sector where audits and accountability are mandatory",
          ],
        },
      },
      {
        id: "roadmap",
        title: {
          ja: "ステータス / ロードマップ",
          en: "Status & roadmap",
        },
        groupedBullets: [
          {
            label: {
              ja: "現状",
              en: "Current",
            },
            items: {
              ja: [
                "内部検証用プロトタイプを開発中。",
                "Web API 経由の LLM 利用シナリオで動作を確認中。",
              ],
              en: [
                "Prototype under internal development.",
                "Validating behavior for web-API-based LLM workloads.",
              ],
            },
          },
          {
            label: {
              ja: "今後",
              en: "Next steps",
            },
            items: {
              ja: [
                "PoC パートナー企業との共同検証。",
                "最小機能セットでのクローズドベータ提供。",
                "ログ / 署名 / ダッシュボードなどのガバナンス機能を段階的に拡張。",
              ],
              en: [
                "PoC collaborations with partner companies.",
                "Closed beta launch with a minimal complete feature set.",
                "Gradual expansion of governance features such as dashboards and signed logs.",
              ],
            },
          },
        ],
      },
      {
        id: "disclaimer",
        title: {
          ja: "注意書き",
          en: "Disclaimer",
        },
        description: {
          ja: "未リリースの開発中プロダクトであり、本ページの内容は方向性を示すものです。仕様・名称・提供形態は今後の検証やパートナーとの議論で変更される可能性があります。",
          en: "This is an unreleased product under development. Details describe direction only, and specifications, naming, or delivery model may change through further testing and partner feedback.",
        },
      },
    ],
    statusNote: {
      ja: "Gate Runtime / Sentinel-MCP のエッセンスを外部向けに再構築中。",
      en: "Rebuilding Gate Runtime / Sentinel-MCP concepts into a partner-ready offering.",
    },
  },
];
