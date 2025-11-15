import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/YoshihiroKanno"),
  title: {
    default: "菅野吉洋 / Yoshihiro Kanno | AI Governance & Safety",
    template: "%s | 菅野吉洋 / Yoshihiro Kanno",
  },
  description:
    "AIガバナンスとAIセーフティに取り組む株式会社 U-Rec 代表・菅野吉洋のポータルサイト。プロジェクト、講義実績、サービス、ログ設計を一次情報で公開。",
  keywords: [
    "菅野吉洋",
    "Yoshihiro Kanno",
    "U-Rec",
    "AIガバナンス",
    "AIセーフティ",
    "Gate Runtime",
    "PrimePic",
  ],
  openGraph: {
    title: "菅野吉洋 / Yoshihiro Kanno | AI Governance & Safety",
    description:
      "AIを安全に運用するための仕組みと一次情報をまとめた公式ポータル。",
    url: "https://github.com/YoshihiroKanno",
    siteName: "菅野吉洋ポータル",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} antialiased bg-[var(--background)] text-[var(--text-primary)]`}
      >
        {children}
      </body>
    </html>
  );
}
