# 泰拉學校網站｜AI 開發交接文件

更新日期：2026-08-26  
目前網站：https://terra-school.agilists-8366.chatgpt.site/

## 1. 專案定位

這是「泰拉學校（Terra School）」的品牌首頁。網站的核心任務不是在首頁陳列大量成果，而是：

1. 讓訪客快速理解泰拉學校的理念與學習方式。
2. 建立自然、真實、行動導向的品牌印象。
3. 將有興趣的訪客導向最新活動與報名表單。

正式主辦單位名稱為：**社團法人1221未來教育發展協會**。

另一個主辦單位為：社團法人敏捷專家協會。

## 2. 已確認的內容策略

- 首頁資訊保持精簡，不增加大量案例、數字或成果列表。
- 真實活動內容集中在「最新活動」區塊，首頁主要負責導流。
- 首屏主訊息是「走進真實世界，重新學習。」
- 學習路徑為：自然 → 自我 → 理解 → 行動。
- 三大核心為：體驗自然、覺察自我、理解創造。
- 三個學習場域為：地之校、天之校、海之校。
- 目前主要行動按鈕導向 2027 天之校報名表單。

除非使用者明確要求，請勿擅自增加首頁資訊量、虛構成果數據、學員見證、合作單位或活動內容。

## 3. 現有頁面結構

首頁由以下區塊構成：

1. 固定式導覽列與手機選單
2. Hero 主視覺與主要行動按鈕
3. 泰拉學校簡介
4. 三大核心互動頁籤
5. 地之校、天之校、海之校
6. 2027 天之校最新活動與報名按鈕
7. 主辦單位
8. Footer

目前為單頁網站，導覽使用頁面內錨點。

## 4. 視覺與品牌方向

- 整體氣質：自然、沉靜、開放、可信任，不使用過度商業化的教育廣告風格。
- 主要色彩來自土地、植被、山霧、海水與紙張質感。
- 圖片應保留真實活動感，不建議套用強烈預設濾鏡。
- 地之校：土地、稻田、溫暖綠色與土色。
- 天之校：降低飽和度，以山霧、灰綠與較安靜的色調呈現。
- 海之校：稍微提高對比，加入深青藍色調，與天之校區隔。
- 目前天之校與海之校的色彩處理透過 CSS 完成，原始照片未被破壞。
- 保留足夠留白，避免用更多卡片或文字塞滿首頁。

## 5. 圖片規格與位置

網站實際使用的圖片位於 `public/photos/`，原始素材位於 `assets/photos/`。

| 用途 | 建議方向／比例 | 目前檔案 |
| --- | --- | --- |
| Hero | 橫式，建議 4:3 至 16:9，主體須能安全裁切 | `public/photos/hero-field-walk.webp` |
| 體驗自然 | 直式 4:5，建議 1600 × 2000 px | `public/photos/pillar-experience.webp` |
| 覺察自我 | 直式 4:5，建議 1600 × 2000 px | `public/photos/pillar-awareness.webp` |
| 理解創造 | 直式 4:5，建議 1600 × 2000 px | `public/photos/pillar-create.webp` |
| 地之校 | 橫式 4:3，建議 1600 × 1200 px | `public/photos/school-earth.webp` |
| 天之校 | 橫式 4:3，建議 1600 × 1200 px | `public/photos/school-sky.webp` |
| 海之校 | 橫式 4:3，建議 1600 × 1200 px | `public/photos/school-ocean.webp` |
| 2027 天之校主視覺 | 橫式，建議 3:2 或 16:9 | `public/photos/activity-sky-2027.webp` |
| 社群分享圖 | 橫式 1200 × 630 px | `public/og.png` |

更換圖片時，請同步更新 `app/page.tsx` 中的替代文字（alt），並確認桌面版與手機版的裁切結果。

## 6. 主要檔案

- `app/page.tsx`：首頁內容、資料與互動。
- `app/globals.css`：完整視覺樣式、響應式設計與圖片色調。
- `app/layout.tsx`：網站標題、描述、圖示與社群分享資料。
- `public/`：正式對外使用的圖片與 Logo。
- `assets/`：原始照片及素材備份。
- `terra-home.md`：早期首頁策略與需求脈絡。
- `.openai/hosting.json`：OpenAI Sites 的既有專案設定。
- `package.json`、`package-lock.json`：執行環境及鎖定版本。
- `tests/`：現有測試。

## 7. 技術環境

- Node.js：22.13.0 以上
- 套件管理：npm；請保留並使用 `package-lock.json`
- React 19
- TypeScript
- Vinext / Vite
- 目標執行環境：Cloudflare Worker 相容輸出
- 部署方式：OpenAI Sites

首次接手建議執行：

```bash
npm install
npm run dev
```

正式修改完成後執行：

```bash
npm run build
```

不要在沒有必要的情況下全面升級相依套件、改用其他框架，或刪除 Vinext／Sites 相關設定。

## 8. 外部連結

- 2027 天之校報名表單：
  `https://docs.google.com/forms/d/e/1FAIpQLSe9AM-LzN7eu8j-Yiwv4LAGDlfsu-gGI_K4Gn0m4GL0Y6vw5Q/viewform`
- 地之校活動成果目前導向：
  `https://terrahan.tw/`

在更換或發布這些連結前，應由專案負責人確認。

## 9. 部署交接注意事項

`.openai/hosting.json` 會保留目前 Sites 專案的識別設定，但該檔案本身不授予部署權限。

- 在相同 OpenAI／Codex 工作空間接手時，可以嘗試延續既有 Sites 專案。
- 在不同帳號、不同 AI 工具或不同平台接手時，通常需要重新建立部署與網址。
- 不要把 API Key、登入資訊、臨時部署權杖或 `.env` 檔案加入版本控制或交接 ZIP。
- 若改用 Vercel、Cloudflare Pages 或其他平台，應先評估 Vinext 與 Cloudflare Worker 相容性。

## 10. 修改原則

接手後請遵守：

1. 先閱讀本文件、`terra-home.md`、`app/page.tsx`、`app/globals.css` 與 `app/layout.tsx`。
2. 修改前先說明對需求、現況與修改範圍的理解。
3. 保留手機版、鍵盤操作、替代文字與基本無障礙設計。
4. 不虛構活動日期、成果、合作單位、見證或報名狀態。
5. 不擅自改動正式組織名稱與報名網址。
6. 圖片修改以非破壞性方式進行；保留原始檔。
7. 每次完成修改後至少執行一次正式建置。
8. 若需求會顯著增加首頁資訊量，先向專案負責人確認。

## 11. 建議交給另一個 AI 的起始提示詞

```text
請先完整閱讀本專案的 TERRA-SCHOOL-HANDOFF.md、terra-home.md、app/page.tsx、app/globals.css、app/layout.tsx 和 package.json，不要立刻改動程式。

這是泰拉學校官網首頁，正式主辦單位名稱為「社團法人1221未來教育發展協會」。首頁策略是控制資訊量，以品牌理念建立認知，再把訪客引導到最新活動及報名。

請保留目前的設計語言、響應式版面、圖片裁切邏輯與地／天／海三校的色彩區隔。修改前先說明你對現況、需求與預計修改範圍的理解；完成後執行正式建置驗證。不要擅自更換文案、圖片、報名網址或部署方式。
```

## 12. ZIP 內容說明

交接 ZIP 包含網站原始碼、正式圖片、原始素材、設定、測試、鎖定版本及本交接文件。

ZIP 刻意不包含以下可重新產生或不應轉交的內容：

- `node_modules/`
- `.next/`
- `.vinext/`
- `.wrangler/`
- `dist/`
- `work/`
- `outputs/`
- `.git/`
- `.env*`
- 暫存檔、紀錄檔及私密憑證

