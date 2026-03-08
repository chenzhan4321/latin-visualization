# on.commentary

古典文学双语注释可视化网站（GitHub Pages）。原名 `latin-visualization`。

## 项目结构

```
index.html          — Ovid《变形记》第一卷（拉丁-中文），JSON 数据驱动
brentano.html       — Brentano《Sprich aus der Ferne》（德-中），单文件自包含
gryphius.html       — Gryphius《Papinianus》I,1（德-中），单文件自包含
js/
  app.js            — Ovid 页面主入口，加载 JSON 渲染双栏
  commentary.js     — 通用 commentary 面板（逐词对照/句法/语法 三 tab）
  tooltip.js        — 词汇悬浮提示
  navigation.js     — 行号跳转
css/style.css       — Ovid 页面样式
data/
  gryphius_s*.js    — Gryphius 各诗节数据（JS 常量）
scripts/            — Python 数据生成流水线（.gitignore 中排除）
```

## 两套 commentary 架构

### 1. Ovid 模式（JSON 数据 + 通用 JS）
- 数据三件套：`data/text.json` + `data/morphology.json` + `data/annotations.json`
- Python 流水线：`prepare_text.py` → `generate_morphology*.py` → `translate_to_chinese.py` → `generate_annotations.py`
- 前端通用组件渲染，commentary 面板 3 个 tab

### 2. 德语诗歌模式（单文件自包含）— 当前主要方式
- 数据写在 `data/xxx_s*.js` 的 JS 常量中，每个 section 包含：
  - `lines`（原文）、`cn`（中文翻译）、`words`（重点词汇注释）
  - `syntax`（还原语序 + 句法分析 HTML）
  - `meaning`（内容解读）、`interpretation`（文学阐释）
  - `translationNote`（翻译说明）、`altTranslation`（押韵中文翻译）
  - `meter`（格律：summary + scansion 音节标注 + note）
- HTML 文件内联完整 CSS + JS 渲染逻辑
- Commentary 面板 6-7 个 tab（词汇/句法/解读/阐释/译注/押韵翻译/格律）

## 新增 commentary 页面的流程

1. 在 `data/` 下创建 `xxx_s*.js`，按诗节编写数据常量
2. 创建 `xxx.html`，内联 CSS + JS，引入数据文件
3. 双栏布局（原文 | 翻译），点击诗节展开 commentary 面板

## 技术要点

- 纯前端静态站，无构建工具，部署在 GitHub Pages
- 字体：Cormorant Garamond（诗歌）+ Inter（UI）
- 配色：暖色调羊皮纸风格（#FAF7F0 底色）
- 巴洛克德语需标注古体拼写与现代对应
