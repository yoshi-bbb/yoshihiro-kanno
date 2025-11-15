import type { Locale } from "@/lib/locales";
import {
  COMPANY_LOCATION_EN,
  COMPANY_LOCATION_JA,
  COMPANY_NAME_EN,
  COMPANY_NAME_JA,
} from "@/lib/config";

export interface CompanyFact {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const companyProfile = {
  name: {
    ja: COMPANY_NAME_JA,
    en: COMPANY_NAME_EN,
  },
  location: {
    ja: COMPANY_LOCATION_JA,
    en: COMPANY_LOCATION_EN,
  },
  website: "https://u-rec.jp",
  mission: {
    ja: "AIを安全かつ現実的に運用できる社会インフラをつくる。",
    en: "Build infrastructure that lets organizations operate AI safely in the real world.",
  },
};

export const companyFacts: CompanyFact[] = [
  {
    title: {
      ja: "事業領域",
      en: "Business Focus",
    },
    description: {
      ja: "AIガバナンスとAIセーフティの設計、Gate Runtime / Sentinel-MCP などの自社プロダクト開発、PrimePic をはじめとする生成AIサービス。",
      en: "Designing AI governance & safety programs, building Gate Runtime / Sentinel-MCP, and delivering PrimePic and other generative AI services.",
    },
  },
  {
    title: {
      ja: "強み",
      en: "Strength",
    },
    description: {
      ja: "ガバナンス（ポリシー・ログ）と実装（Gate Runtime、LLM/Diffusion アプリ）を代表自身がハンズオンで担う点。",
      en: "Hands-on combination of governance artifacts (policies/logs) and implementation (Gate Runtime, LLM/diffusion apps) led directly by the founder.",
    },
  },
  {
    title: {
      ja: "協業したい人材",
      en: "Looking For",
    },
    description: {
      ja: "ガバナンスと実装の両方に興味があるエンジニア、研究者、Biz 開発者。問い合わせは /contact から。",
      en: "Engineers, researchers, and business leads excited about both governance and implementation. Reach out via /contact.",
    },
  },
];
