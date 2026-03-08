# Scroll Story Generator

一個自動化的滾動故事生成器，類似於 SBS The Boat 網站的設計。

## 功能特點

- 📱 **手機優先設計**：優化的手機瀏覽體驗，comic 圖片垂直排列
- 🎭 **自動化頁面生成**：只需在 `public/vectors/` 目錄中添加新頁面，系統會自動檢測並生成
- 🖼️ **動態背景適應**：根據背景圖片的高寬比自動調整頁面高度
- 🎨 **桌上相片 3D 效果**：Comic 圖片有微 3D 感，看起來像桌上散落的相片
- 📱 **響應式設計**：支援桌面和移動設備

## 使用方法

### 1. 添加新頁面

在 `public/vectors/` 目錄中創建新的頁面目錄：

```
public/vectors/
├── page1/
│   ├── background.png    # 背景圖片
│   ├── comic1_1.jpg      # 第一張 comic 圖片
│   └── comic1_2.jpg      # 第二張 comic 圖片
├── page2/
│   ├── background.png
│   ├── comic1_1.jpg
│   └── comic1_2.jpg
└── page3/                # 新頁面
    ├── background.png
    ├── comic1_1.jpg
    └── comic1_2.jpg
```

### 2. 生成配置

運行以下命令來自動生成頁面配置：

```bash
npm run generate-pages
```

### 3. 運行開發服務器

```bash
npm run dev
```

打開 `http://localhost:5173/` 查看效果。

## 設計特點

### 📱 手機佈局
- Comic 圖片垂直排列，不會重疊
- 優化的觸控體驗
- 適應小螢幕的圖片大小

### 🎨 3D 效果
- **桌上相片風格**：每張圖片有輕微的傾斜和旋轉
- **滾動動畫**：滑動時圖片會有立體的 3D 變形
- **陰影效果**：增加真實感

### 🖼️ 響應式設計
- **手機**：垂直堆疊佈局
- **桌面**：左右並排佈局
- **動態適應**：根據螢幕大小自動調整

## 技術細節

- **背景圖片適應**：頁面高度根據背景圖片的縱橫比自動計算
- **3D 效果參數**：
  - `translateZ`: 10-50px 的深度變化
  - `rotateX/Y/Z`: 多軸旋轉創造立體感
  - `translateY`: 輕微的浮動動畫
- **Comic 圖片**：手機 65-70vw，桌面 35vw

## 自定義

- 修改 `src/App.css` 來自定義動畫效果
- 編輯 `scripts/generatePages.js` 來改變文件掃描邏輯
- 在 `src/App.jsx` 中調整 3D 效果參數

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
