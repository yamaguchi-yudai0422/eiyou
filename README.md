# 栄養計算アプリ

料理を作る人のための栄養計算ツール。食材と分量を入れると、料理全体と1人前の
栄養価をリアルタイムで計算する。

## いまの方針

Flutter はやめて、**ビルド不要の静的 Web アプリ** に切り替えた。
そのまま GitHub Pages に置ける構成で、ローカル確認にも Flutter SDK は不要。

- 実装: HTML / CSS / JavaScript
- 公開先: GitHub Pages
- データ: `assets/data/foods.csv` と `assets/data/food_overrides.csv`
- 用途: 日付・朝昼夜ごとの料理記録と、1日分の栄養確認

## できること

- 日付と朝・昼・夜ごとに料理を自動保存
- 材料ごとに食材、調理法、数量、単位を設定
- 分量と単位を変えて重量換算
- 料理全体、1人前、1日合計の栄養価を計算
- 摂取量、目標量、達成率、不足・超過量をプログレスバー表示
- 不足栄養素を補う食品量を調理法別に逆算
- 必要量、エネルギー、量の目安つきで食品候補を自動表示
- 前日の同じ食事をコピー
- レシピを保存して再利用
- お気に入り食材をワンタップ追加
- 前日・翌日ボタンで日付移動
- PWAとしてホーム画面へ追加、オフライン起動
- 入力内容を `localStorage` に保存

## 起動方法

`index.html` をダブルクリックすれば、そのまま確認できる。
食品データはWeb用の `assets/data/food-data.js` に同梱している。

### いちばん簡単

```powershell
cd C:\ソフトコード\栄養
.\serve.ps1
```

その後、ブラウザで [http://localhost:8000](http://localhost:8000) を開く。
`py` や `python` が PATH に無くても、Codex の bundled Python があればそのまま動く。

### 手動で起動する場合

`py` があるなら:

```powershell
cd C:\ソフトコード\栄養
py -m http.server 8000
```

`python` コマンドがあるなら:

```powershell
cd C:\ソフトコード\栄養
python -m http.server 8000
```

## GitHub Pages で公開

`.github/workflows/deploy.yml` で静的サイトをそのままデプロイする。
ビルド工程はない。

### 手順

1. GitHub に push する
2. リポジトリの `Settings -> Pages` で `Source` を `GitHub Actions` にする
3. `main` へ push すると自動デプロイされる

workflow は次のファイルを配備する。

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`
- `assets/icon-*.png`
- `assets/data/*.csv`
- `assets/data/*.js`

## ファイル構成

```text
.
├── index.html              画面
├── styles.css              見た目
├── app.js                  検索・計算・保存ロジック
├── manifest.webmanifest    PWA設定
├── sw.js                   オフラインキャッシュ
├── serve.ps1               ローカル確認用サーバー起動
├── assets/
│   ├── icon-192.png        PWAアイコン
│   ├── icon-512.png        PWAアイコン
│   └── data/
│       ├── foods.csv           公式の食品成分データ 2,538件
│       ├── food_overrides.csv  表示名・読み・比重・個数換算などの補助データ
│       └── food-data.js        ブラウザ用の同梱データ
├── tools/build_food_db.py  foods.csv 再生成スクリプト
└── tools/embed_food_data.py food-data.js 再生成スクリプト
```

## 食品データについて

### `assets/data/foods.csv`

文部科学省「日本食品標準成分表（八訂）」の第2章データから機械的に生成した
公式データ。栄養価はすべてこのファイル由来。

再生成:

```powershell
python tools/build_food_db.py 成分表.xlsx -o assets/data/foods.csv
```

### `assets/data/food_overrides.csv`

成分表にない補助情報だけを持つ。

- 短い表示名
- 読み仮名
- 比重 g/mL
- 1個 / 1枚 / 1本あたり重量
- 既定の単位と数量

栄養価はここには書かない。

CSVを更新した場合は、ブラウザ用データも再生成する。

```powershell
python tools/embed_food_data.py
```

## 制約

- データ保存はブラウザごとの `localStorage`
- 別ブラウザや別端末では同期しない
- ブラウザデータを削除すると入力内容も消える
- いまはレシピ保存、食事記録、分析タブなどは未移植

## 以前の Flutter 版について

2026年7月20日に Flutter ベースの構成は撤去した。
今後は静的 Web アプリとして進める前提。
