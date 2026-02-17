# Pomodoro Timer

ポモドーロ・テクニックに基づいた集中タイマーアプリです。
React + TypeScript + Vite で構築されています。

## ポモドーロ・テクニックとは

1980年代にフランチェスコ・シリロが考案した時間管理術です。
**25分の作業** と **5分の休憩** を1セットとして繰り返すことで、集中力を維持しながら効率的に作業を進められます。

## 機能

- **タイマー表示** - 残り時間を大きく見やすく表示
- **作業/休憩の自動切り替え** - 25分の作業が終わると自動的に5分の休憩に移行
- **操作ボタン** - Start / Pause / Reset のシンプルな操作
- **セッション数カウント** - 完了した作業セッションの回数を表示
- **ブラウザ通知** - タイマー完了時にデスクトップ通知でお知らせ
- **背景色の切り替え** - 作業中は濃紺、休憩中は深緑に変化し、モードが視覚的にわかる

## 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| React | 19.x | UI ライブラリ |
| TypeScript | 5.9 | 型安全な開発 |
| Vite | 7.x | ビルドツール・開発サーバー |
| CSS Modules | - | スコープ付きスタイリング |

## セットアップ

### 必要環境

- Node.js 20 以上
- npm

### インストール

```bash
git clone https://github.com/ysb3996-blip/pomodoro-timer.git
cd pomodoro-timer
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開くとアプリが表示されます。

### ビルド

```bash
npm run build
```

`dist/` ディレクトリに本番用ファイルが出力されます。

### ビルド結果のプレビュー

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## プロジェクト構成

```
src/
├── App.tsx                  # メインコンポーネント
├── App.css                  # アプリ全体のスタイル
├── index.css                # グローバルスタイル
├── main.tsx                 # エントリーポイント
├── components/
│   ├── Timer.tsx            # タイマー表示コンポーネント
│   ├── Timer.module.css
│   ├── Controls.tsx         # 操作ボタンコンポーネント
│   └── Controls.module.css
└── hooks/
    └── useTimer.ts          # タイマーロジック（カスタムフック）
```

## GitHub 設定

このリポジトリには以下の GitHub 設定が含まれています。

| ファイル | 内容 |
|---------|------|
| `.github/ISSUE_TEMPLATE/bug_report.yml` | バグ報告用のフォームテンプレート |
| `.github/ISSUE_TEMPLATE/feature_request.yml` | 機能要望用のフォームテンプレート |
| `.github/PULL_REQUEST_TEMPLATE.md` | PR 作成時のテンプレート |
| `.github/workflows/ci.yml` | CI（型チェック・Lint・ビルド） |
| `.github/dependabot.yml` | npm / GitHub Actions の依存関係自動更新 |

## ライセンス

MIT
