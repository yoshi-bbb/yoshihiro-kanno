## 菅野吉洋ポータル

株式会社 U-Rec 代表・菅野吉洋の一次情報ポータル。Next.js (App Router) + Tailwind CSS で構築し、`/ja` / `/en` の2言語を静的エクスポートして GitHub Pages などに配置できるようにしています。

### 主な内容

- `/app/[locale]/` 直下に Home / Profile / U-Rec / SNS / Teaching / Services / Contact / Legal を実装
- `data/` にプロフィール・SNS・講義・サービスなどの構造化データを定義し、JA/EN 文言を同居
- Gate Runtime / PrimePic などの一次情報をヒーローや SNS ページから辿れるよう導線を整理
- `/contact` は Google フォームの埋め込み（フォーム URL は `.env` で差し替え可能）
- `/legal/privacy` に Google フォーム運用前提のプライバシーポリシーを掲載
- GitHub Pages 向けに `output: "export"`、`images.unoptimized`、`.nojekyll` を設定

## 開発方法

```bash
npm install
npm run dev
```

ブラウザで <http://localhost:3000/ja> を開くと日本語トップが確認できます。`/en` で英語版。

### コンテンツ更新のポイント

- `data/profile.ts`, `data/sns.ts`, `data/services.ts`, `data/teaching.ts`, `data/company.ts` … JSON に近い構造で文言を管理しています。
- `/public/assets/resume-ja.pdf` / `resume-en.pdf` を配置すれば、Profile ページから直接ダウンロードする導線を作れます（現状は案内テキストのみ）。
- SNS のリンクは `data/sns.ts` を更新し、必要に応じてカード文言を調整してください。

## Contact / Googleフォーム

`CONTACT_FORM_URL` を `.env.local` で指定すると、埋め込みフォームの URL を差し替えできます（既定値は `https://docs.google.com/forms/d/e/1FAIpQLScSwsQX2wNtaIB60kMmHoYRhh0wRVF1DsxHKkgiKuXuj2x7nA/viewform?usp=publish-editor`）。

```bash
echo 'NEXT_PUBLIC_CONTACT_FORM_URL=https://docs.google.com/forms/d/xxxx/viewform?embedded=true' >> .env.local
```

## GitHub Pages へのデプロイ

1. GitHub のプロジェクトページを使う場合はリポジトリ名を `NEXT_PUBLIC_BASE_PATH` にセット（例: `portal-site` → `/portal-site`）。
   ```bash
   echo 'NEXT_PUBLIC_BASE_PATH=portal-site' >> .env.local
   ```
2. ビルド＆エクスポート  
   `npm run build`
3. `out/` ディレクトリが生成され、`scripts/prepare-export.mjs` により `.nojekyll` が自動作成されます。
4. `out/` の内容を GitHub Pages ブランチに配置（`gh-pages` など）。Actions で自動化する場合は `actions/upload-pages-artifact` を利用。

※ ユーザー/Organization ページ（`username.github.io`）に直置きする場合は `NEXT_PUBLIC_BASE_PATH` を空のままにしておいて問題ありません。

## その他

- `npm run type-check` で TypeScript チェック
- `npm run lint` で ESLint
- ビルド結果は完全な静的サイトなので、Cloud Storage + Cloud CDN などにもそのまま配置できます。
