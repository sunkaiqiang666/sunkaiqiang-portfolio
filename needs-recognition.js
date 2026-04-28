const ICONS = {
  visual: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M4 24c4.8-7.4 11.5-11 20-11s15.2 3.6 20 11c-4.8 7.4-11.5 11-20 11S8.8 31.4 4 24Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="24" cy="24" r="7.2" stroke="currentColor" stroke-width="3"/>
      <circle cx="24" cy="24" r="2.3" fill="currentColor"/>
    </svg>
  `,
  tactile: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M16 21V7.8a2.8 2.8 0 0 1 5.6 0V20M21.6 20V5.8a2.8 2.8 0 0 1 5.6 0V20M27.2 20V8.8a2.8 2.8 0 1 1 5.6 0v16.3l2.2-1.6a4.7 4.7 0 0 1 6.3 6.8l-4 5.9C33.4 42 30.3 44 25.8 44c-4.4 0-8-1.8-10.9-5.3L8 29.5a5.2 5.2 0 0 1 8-6.6Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  quality: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 5l13 4.8v10.6C37 31.2 30.5 39 24 43c-6.5-4-13-11.8-13-22.6V9.8L24 5Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      <path d="m18.2 24.2 4.4 4.6 7.2-9.6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  eco: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M18 8.5h8.8L23.6 3M30 39.5h-8.8l3.2 5.5M11.2 30.8 7 23.2l-3.2 5.5M36.8 17.2 41 24.8l3.2-5.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m27.4 8.5 8 13.8H29c-3 0-4.8.9-6.3 3.6L18 33.6m12 5.9-15.4.1 3.1-5.6c1.5-2.6 1.7-4.7.2-7.3L13 18.4m-1.7 11.7L19 16.8l3.2 5.5c1.5 2.6 3.1 3.9 6.2 3.9h9.7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  overall: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="m24 6.5 5 10.2 11.3 1.6-8.2 8 1.9 11.2L24 32.3 13.9 37.5l1.9-11.2-8.2-8 11.3-1.6L24 6.5Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="2.6" stroke-dasharray="4.2 5.4"/>
    </svg>
  `,
  ecoLeaf: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="19" stroke="currentColor" stroke-width="3"/>
      <path d="M31.7 13.5c-9.8.5-16.6 5.8-18.4 15.7 1.9 4.1 5.2 6.4 10 6.8 9.2-3.4 13.8-10.6 13.7-22.5-1.6-.2-3.3-.2-5.3 0Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      <path d="M18.3 30.8c3.6-2.9 7-6.5 10.3-11" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,
  overallPerson: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="19" stroke="currentColor" stroke-width="3"/>
      <circle cx="24" cy="18.2" r="5" stroke="currentColor" stroke-width="3"/>
      <path d="M15.2 34.5c1.5-5.4 5-8.1 8.8-8.1s7.3 2.7 8.8 8.1" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M21 18.3c.8.9 1.8 1.3 3 1.3s2.2-.4 3-1.3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
    </svg>
  `,
  visualEmotion: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="19" stroke="currentColor" stroke-width="3"/>
      <path d="M9 24c3.6-5.8 8.6-8.7 15-8.7s11.4 2.9 15 8.7c-3.6 5.8-8.6 8.7-15 8.7S12.6 29.8 9 24Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="24" cy="24" r="4.8" stroke="currentColor" stroke-width="3"/>
      <circle cx="24" cy="24" r="1.9" fill="currentColor"/>
    </svg>
  `,
  tactileEmotion: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="19" stroke="currentColor" stroke-width="3"/>
      <path d="M24.5 14.4a3.3 3.3 0 0 0-3.3 3.3v9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M24.5 14.4a3.3 3.3 0 0 1 3.3 3.3v6.7" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".45"/>
      <path d="M21.2 26.8h-3.8a3.6 3.6 0 0 0-3.6 3.6c0 5.5 4.5 10 10 10h1.3c5.5 0 10-4.5 10-10V28" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28.3 19.8a3.1 3.1 0 0 1 6.2 0v8.2" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,
  sourceTag: `
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M17 22.4v17.7L34.9 58l20.1-20.1V20.2H37.3L28.4 11H17a6 6 0 0 0-6 6v5.4Z" stroke="currentColor" stroke-width="3.4" stroke-linejoin="round"/>
      <path d="M31.2 33.3c4.7-7.2 10.3-10.1 16.8-8.9-.3 8.6-4.1 14.2-11.3 17-3.8-.2-6.4-2-8-5.5 1-1.1 1.8-2 2.5-2.6Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      <path d="M35.1 39.6c2.5-2 5-4.6 7.3-7.9" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
      <circle cx="45.3" cy="18.7" r="3.2" stroke="currentColor" stroke-width="3"/>
    </svg>
  `,
  fingerprint: `
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M36 15.5c-10.4 0-18.8 8.2-18.8 18.2 0 3.7 1.2 7.1 3.2 9.8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M36 21.7c-6.9 0-12.5 5.4-12.5 12.1 0 6.2-1 11.1-3.2 15.9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M36 27.6c-3.5 0-6.4 2.7-6.4 6.1 0 8.8-2 15.6-6 20.9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M36 15.5c10.4 0 18.8 8.2 18.8 18.2 0 9.6-2.8 18.3-8.1 25.2" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M36 21.7c6.9 0 12.5 5.4 12.5 12.1 0 6.7-1.8 12.8-5.4 18.2" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M36 27.6c3.5 0 6.4 2.7 6.4 6.1 0 6.7-1.5 12.1-4.7 16.7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M36 33.5c0 5.2-1 9.4-3.1 13" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,
  documentLeaf: `
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M22 11h20l12 12v38H22a6 6 0 0 1-6-6V17a6 6 0 0 1 6-6Z" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round"/>
      <path d="M42 11v14h14" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round"/>
      <path d="M28 31h16M28 40h16M28 49h12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M43.5 42.8c-6.3.3-10.7 3.8-11.8 10.2 1.2 2.6 3.4 4 6.3 4.3 5.8-2.1 8.8-6.9 8.7-14.6-1-.1-2.1-.1-3.2.1Z" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/>
      <path d="M35.1 54.1c2.1-1.7 4-3.7 5.9-6.2" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    </svg>
  `,
};

const MODULE_ICONS = {
  material: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M35.4 9.2c-7.6.1-13.9 3-18.6 7.8C12 21.8 9 28.2 9 35.7c0 1.8.2 3.5.7 5.1 1.6.5 3.3.7 5 .7 7.5 0 13.9-3 18.7-7.8 4.8-4.8 7.7-11 7.8-18.6-1.6-3.4-2.5-4.3-5.8-5.9Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      <path d="M14.8 33.8 33.2 15.4" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,
  color: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 7C14.6 7 7 14.2 7 23.2 7 29.7 11.1 35.4 17 37.8c2 .8 2.8 2.7 2.1 4.3-.6 1.4.1 2.9 1.9 2.9H24c9.4 0 17-7.2 17-16.2S33.4 7 24 7Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="17" cy="20" r="2.4" fill="currentColor"/>
      <circle cx="23" cy="15.5" r="2.4" fill="currentColor"/>
      <circle cx="29.4" cy="21" r="2.4" fill="currentColor"/>
      <circle cx="20.2" cy="28" r="2.4" fill="currentColor"/>
    </svg>
  `,
  craft: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M20.1 6h7.8l1.2 5a15 15 0 0 1 3.4 1.4l4.5-2.4 5.6 5.6-2.4 4.5c.6 1.1 1 2.2 1.4 3.4l5 1.2v7.8l-5 1.2a15 15 0 0 1-1.4 3.4l2.4 4.5-5.6 5.6-4.5-2.4a15 15 0 0 1-3.4 1.4l-1.2 5h-7.8l-1.2-5a15 15 0 0 1-3.4-1.4l-4.5 2.4-5.6-5.6 2.4-4.5a15 15 0 0 1-1.4-3.4l-5-1.2v-7.8l5-1.2a15 15 0 0 1 1.4-3.4l-2.4-4.5L11 10l4.5 2.4c1.1-.6 2.2-1 3.4-1.4l1.2-5Z" fill="currentColor" fill-opacity=".18" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="24" cy="28" r="5.6" stroke="currentColor" stroke-width="3"/>
    </svg>
  `,
  emotion: `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 39.8 10.3 26.1a9.2 9.2 0 0 1 13-13L24 14l.7-.9a9.2 9.2 0 0 1 13 13L24 39.8Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    </svg>
  `,
};

const ROW_META = {
  visual: {
    accent: "#1d5dff",
    soft: "rgba(29, 93, 255, 0.1)",
    shadow: "rgba(29, 93, 255, 0.16)",
  },
  tactile: {
    accent: "#2f9d27",
    soft: "rgba(47, 157, 39, 0.1)",
    shadow: "rgba(47, 157, 39, 0.16)",
  },
  quality: {
    accent: "#ff6d1a",
    soft: "rgba(255, 109, 26, 0.12)",
    shadow: "rgba(255, 109, 26, 0.15)",
  },
  eco: {
    accent: "#18a7a8",
    soft: "rgba(24, 167, 168, 0.1)",
    shadow: "rgba(24, 167, 168, 0.16)",
  },
  overall: {
    accent: "#214bbf",
    soft: "rgba(33, 75, 191, 0.1)",
    shadow: "rgba(33, 75, 191, 0.16)",
  },
  cmfTeal: {
    accent: "#149cb7",
    soft: "rgba(20, 156, 183, 0.08)",
    shadow: "rgba(20, 156, 183, 0.14)",
  },
  cmfGreen: {
    accent: "#7ca843",
    soft: "rgba(124, 168, 67, 0.08)",
    shadow: "rgba(124, 168, 67, 0.14)",
  },
  cmfOrange: {
    accent: "#ff932e",
    soft: "rgba(255, 147, 46, 0.08)",
    shadow: "rgba(255, 147, 46, 0.14)",
  },
  cmfBlue: {
    accent: "#5a84ff",
    soft: "rgba(90, 132, 255, 0.08)",
    shadow: "rgba(90, 132, 255, 0.14)",
  },
};

const MODULE_META = {
  material: {
    accent: "#f08600",
    soft: "rgba(240, 134, 0, 0.12)",
    shadow: "rgba(240, 134, 0, 0.16)",
  },
  color: {
    accent: "#f4b11e",
    soft: "rgba(244, 177, 30, 0.12)",
    shadow: "rgba(244, 177, 30, 0.16)",
  },
  craft: {
    accent: "#f05a2d",
    soft: "rgba(240, 90, 45, 0.12)",
    shadow: "rgba(240, 90, 45, 0.16)",
  },
  emotion: {
    accent: "#1ea6ab",
    soft: "rgba(30, 166, 171, 0.12)",
    shadow: "rgba(30, 166, 171, 0.16)",
  },
};

const MECHANISM_META = {
  visual: {
    accent: "#ff7a14",
    soft: "rgba(255, 122, 20, 0.12)",
    shadow: "rgba(255, 122, 20, 0.18)",
  },
  eco: {
    accent: "#4d9b39",
    soft: "rgba(77, 155, 57, 0.12)",
    shadow: "rgba(77, 155, 57, 0.18)",
  },
  overall: {
    accent: "#f2a31d",
    soft: "rgba(242, 163, 29, 0.12)",
    shadow: "rgba(242, 163, 29, 0.18)",
  },
};

const EMOTION_META = {
  emotionEco: {
    accent: "#3e9738",
    soft: "rgba(62, 151, 56, 0.12)",
    shadow: "rgba(62, 151, 56, 0.18)",
  },
  emotionOverall: {
    accent: "#ef7416",
    soft: "rgba(239, 116, 22, 0.12)",
    shadow: "rgba(239, 116, 22, 0.18)",
  },
  emotionVisual: {
    accent: "#7a2ab8",
    soft: "rgba(122, 42, 184, 0.12)",
    shadow: "rgba(122, 42, 184, 0.18)",
  },
  emotionTactile: {
    accent: "#1f67c8",
    soft: "rgba(31, 103, 200, 0.12)",
    shadow: "rgba(31, 103, 200, 0.18)",
  },
};

const MECHANISM_CONNECTIONS = {
  dimensionsToIndicators: [
    { fromRow: "visual", indicatorIndices: [0, 1, 2, 3, 4], stroke: "#ff932e", mode: "fork" },
    { fromRow: "eco", indicatorIndices: [0], stroke: "#4d9b39", mode: "single" },
    { fromRow: "overall", indicatorIndices: [0, 1], stroke: "#f2a31d", mode: "fork" },
  ],
  indicatorsToElements: [
    { fromRow: "visual", fromIndicator: 0, toElement: 0, targetY: 0.22, stroke: "#5a84ff" },
    { fromRow: "visual", fromIndicator: 1, toElement: 0, targetY: 0.44, stroke: "#5a84ff" },
    { fromRow: "visual", fromIndicator: 2, toElement: 0, targetY: 0.68, stroke: "#5a84ff" },
    { fromRow: "visual", fromIndicator: 1, toElement: 1, targetY: 0.22, stroke: "#ff932e" },
    { fromRow: "visual", fromIndicator: 3, toElement: 1, targetY: 0.44, stroke: "#5a84ff" },
    { fromRow: "visual", fromIndicator: 4, toElement: 1, targetY: 0.66, stroke: "#7ca843" },
    { fromRow: "eco", fromIndicator: 0, toElement: 1, targetY: 0.78, stroke: "#ff932e" },
    { fromRow: "eco", fromIndicator: 0, toElement: 1, targetY: 0.9, stroke: "#7ca843" },
    { fromRow: "eco", fromIndicator: 0, toElement: 2, targetY: 0.34, stroke: "#ff932e" },
    { fromRow: "overall", fromIndicator: 0, toElement: 2, targetY: 0.56, stroke: "#5a84ff" },
    { fromRow: "overall", fromIndicator: 1, toElement: 2, targetY: 0.72, stroke: "#ff932e" },
    { fromRow: "overall", fromIndicator: 1, toElement: 2, targetY: 0.88, stroke: "#7ca843" },
  ],
  elementsToEffects: [
    { fromElement: 0, toEffect: 0, fromY: 0.24, toY: 0.24 },
    { fromElement: 0, toEffect: 1, fromY: 0.5, toY: 0.44 },
    { fromElement: 0, toEffect: 2, fromY: 0.76, toY: 0.62 },
    { fromElement: 1, toEffect: 0, fromY: 0.26, toY: 0.54 },
    { fromElement: 1, toEffect: 1, fromY: 0.5, toY: 0.56 },
    { fromElement: 1, toEffect: 2, fromY: 0.76, toY: 0.52 },
    { fromElement: 2, toEffect: 0, fromY: 0.32, toY: 0.74 },
    { fromElement: 2, toEffect: 1, fromY: 0.56, toY: 0.72 },
    { fromElement: 2, toEffect: 2, fromY: 0.8, toY: 0.78 },
  ],
};

const EMOTION_CONNECTIONS = {
  dimensionsToIndicators: [
    { fromGroup: "emotionEco", indicatorIndices: [0, 1, 2], stroke: "#3e9738", mode: "fork" },
    { fromGroup: "emotionOverall", indicatorIndices: [0, 1, 2], stroke: "#ef7416", mode: "fork" },
    { fromGroup: "emotionVisual", indicatorIndices: [0, 1], stroke: "#7a2ab8", mode: "fork" },
    { fromGroup: "emotionTactile", indicatorIndices: [0, 1], stroke: "#1f67c8", mode: "fork" },
  ],
  indicatorsToElements: [
    { fromGroup: "emotionEco", fromIndicator: 0, toElement: 0, targetY: 0.24, stroke: "#3e9738" },
    { fromGroup: "emotionEco", fromIndicator: 1, toElement: 0, targetY: 0.42, stroke: "#3e9738" },
    { fromGroup: "emotionEco", fromIndicator: 1, toElement: 1, targetY: 0.2, stroke: "#3e9738" },
    { fromGroup: "emotionEco", fromIndicator: 2, toElement: 0, targetY: 0.64, stroke: "#3e9738" },
    { fromGroup: "emotionEco", fromIndicator: 2, toElement: 1, targetY: 0.44, stroke: "#3e9738" },
    { fromGroup: "emotionOverall", fromIndicator: 0, toElement: 0, targetY: 0.82, stroke: "#ef7416" },
    { fromGroup: "emotionOverall", fromIndicator: 0, toElement: 1, targetY: 0.58, stroke: "#ef7416" },
    { fromGroup: "emotionOverall", fromIndicator: 1, toElement: 0, targetY: 0.94, stroke: "#ef7416" },
    { fromGroup: "emotionOverall", fromIndicator: 1, toElement: 1, targetY: 0.78, stroke: "#ef7416" },
    { fromGroup: "emotionOverall", fromIndicator: 2, toElement: 1, targetY: 0.92, stroke: "#ef7416" },
    { fromGroup: "emotionVisual", fromIndicator: 0, toElement: 1, targetY: 0.9, stroke: "#7a2ab8" },
    { fromGroup: "emotionVisual", fromIndicator: 1, toElement: 2, targetY: 0.18, stroke: "#7a2ab8" },
    { fromGroup: "emotionTactile", fromIndicator: 0, toElement: 1, targetY: 0.98, stroke: "#1f67c8" },
    { fromGroup: "emotionTactile", fromIndicator: 0, toElement: 2, targetY: 0.38, stroke: "#1f67c8" },
    { fromGroup: "emotionTactile", fromIndicator: 1, toElement: 2, targetY: 0.66, stroke: "#1f67c8" },
  ],
  elementsToEffects: [
    { fromElement: 0, toEffect: 0, fromY: 0.44, toY: 0.28 },
    { fromElement: 0, toEffect: 1, fromY: 0.76, toY: 0.34 },
    { fromElement: 1, toEffect: 1, fromY: 0.5, toY: 0.48 },
    { fromElement: 1, toEffect: 2, fromY: 0.76, toY: 0.34 },
    { fromElement: 2, toEffect: 1, fromY: 0.28, toY: 0.74 },
    { fromElement: 2, toEffect: 2, fromY: 0.6, toY: 0.68 },
  ],
};

const PRESET_ORDER = ["overview", "cmfModular", "cmfStrategy", "colorMechanism", "emotionModule"];

const CONTENT = {
  zh: {
    documentTitle: "Yaoyu要的图",
    ui: {
      eyebrow: "Interactive Experience Diagram",
      pageTitle: "Yaoyu要的图",
      pageIntro:
        "根据参考图重建为多页网页版本，并加入图片切换与中英韩三语切换。五张图共用同一套信息图风格与页面结构。",
      languageLabel: "语言切换",
      imageSelectLabel: "图片切换",
      imageSelectTitle: "更换图片",
      imageSelectHint: "当前已接入五张图，可在这里切换查看第一页、第二页、第三页、第四色和第五页。",
      presetSummaryLabel: "当前图片",
      presetSummaryTitle: "图片说明",
    },
    diagrams: {
      overview: {
        name: "需求识别图（第一页）",
        description: "第一页对应需求识别原图，完整展示五类体验维度、需求名称和主要需求内容。",
        layout: "experience",
        columns: {
          first: "用户体验维度",
          second: "需求名称",
          third: "主要需求内容",
        },
        sideLabel: {
          mode: "stack",
          tokens: ["需", "求", "识", "别"],
        },
        rows: [
          {
            key: "visual",
            first: "视觉体验",
            second: "视觉体验需求",
            third: "用户希望内饰在色彩搭配、整体色调、材料纹理和材质质感等方面形成自然、协调且舒适的视觉感受。",
          },
          {
            key: "tactile",
            first: "触觉体验",
            second: "触觉体验需求",
            third: "用户希望材料在接触过程中具有柔软、细腻、舒适且富有层次的触感表现。",
          },
          {
            key: "quality",
            first: "品质感知",
            second: "品质感知需求",
            third: "用户关注内饰的做工精细度、整体完成度、边缘处理和结构稳定性。",
          },
          {
            key: "eco",
            first: "环保感知",
            second: "环保感知需求",
            third: "用户希望产品的环保属性能够被识别、被理解，并形成明确的认知判断。",
          },
          {
            key: "overall",
            first: "整体体验",
            second: "整体体验需求",
            third: "用户关注材料、色彩、工艺和情感表达之间的整体协调性，以及由此形成的综合满意度。",
          },
        ],
      },
      cmfModular: {
        name: "CMF要素的模块化整合（第二页）",
        description: "第二页围绕关键 CMF 要素、用户体验维度和模块化整合方向建立映射关系。",
        layout: "cmf",
        columns: {
          first: "关键CMF要素",
          second: "用户体验维度",
          third: "模块化整合方向",
        },
        rows: [
          {
            key: "cmfTeal",
            first: "再生材料比例提升",
            second: "环保感知",
            third: "强化材料环保属性的可识别性与可感知性",
          },
          {
            key: "cmfTeal",
            first: "生物基材料应用",
            second: "触觉体验、环保感知",
            third: "兼顾环保属性表达与触觉舒适性提升",
          },
          {
            key: "cmfTeal",
            first: "天然纤维复合材料",
            second: "视觉体验、触觉体验",
            third: "强化自然纹理表达与真实触感体验",
          },
          {
            key: "cmfTeal",
            first: "材料真实纹理呈现",
            second: "视觉体验、触觉体验",
            third: "提升材料自然感知与接触真实感",
          },
          {
            key: "cmfGreen",
            first: "材料本色表达",
            second: "视觉体验、环保感知",
            third: "建立自然视觉印象并强化环保联想",
          },
          {
            key: "cmfGreen",
            first: "低饱和度中性色组织",
            second: "视觉体验",
            third: "构建克制、协调的视觉体系",
          },
          {
            key: "cmfGreen",
            first: "自然色调倾向",
            second: "视觉体验、环保感知",
            third: "强化自然审美特征与环保认知",
          },
          {
            key: "cmfOrange",
            first: "可拆解连接结构",
            second: "品质感知",
            third: "提升结构合理性与可持续使用价值",
          },
          {
            key: "cmfOrange",
            first: "模内一体化成型",
            second: "品质感知",
            third: "强化工艺精度、整体感与品质表达",
          },
          {
            key: "cmfOrange",
            first: "低环境负荷涂层",
            second: "环保感知、触觉体验",
            third: "平衡环保制造要求与表面接触体验",
          },
          {
            key: "cmfOrange",
            first: "减少覆膜与表面处理",
            second: "视觉体验、触觉体验",
            third: "减少过度加工，保留材料真实感",
          },
          {
            key: "cmfOrange",
            first: "纤维定向增强设计",
            second: "品质感知",
            third: "提升结构稳定性与工艺可靠性",
          },
          {
            key: "cmfBlue",
            first: "材料来源可视化标识",
            second: "环保感知",
            third: "增强用户对可持续属性的识别与信任",
          },
          {
            key: "cmfBlue",
            first: "自然纹理触感保留",
            second: "视觉体验、触觉体验",
            third: "建立自然、真实的感知联结",
          },
          {
            key: "cmfBlue",
            first: "可持续信息透明度",
            second: "环保感知",
            third: "强化信息传达与环保认知形成",
          },
        ],
      },
      cmfStrategy: {
        name: "整体结构（第三页）",
        description: "第三页以目标层、指标/要素层、模块层和系统层展示面向用户体验的可持续 CMF 策略整体结构。",
        layout: "strategy",
        layers: {
          goal: "目标层",
          indicator: "指标/要素层",
          module: "模块层",
          system: "系统层",
        },
        goalPanel: {
          title: "用户体验目标",
          items: ["视觉体验", "触觉体验", "品质感知", "环保感知", "整体体验"],
        },
        indicatorCards: [
          {
            title: "视觉体验",
            metricsLabel: "关键指标",
            metrics: "色彩协调、整体色调、材料纹理、质感表达",
            factorsLabel: "对应CMF要素",
            factors: "材料、色彩、表面处理",
          },
          {
            title: "触觉体验",
            metricsLabel: "关键指标",
            metrics: "柔软细腻、温感舒适、触觉层次",
            factorsLabel: "对应CMF要素",
            factors: "材料、工艺",
          },
          {
            title: "品质感知",
            metricsLabel: "关键指标",
            metrics: "工艺精度、完成度、边缘细节、结构稳定",
            factorsLabel: "对应CMF要素",
            factors: "工艺、材料",
          },
          {
            title: "环保感知",
            metricsLabel: "关键指标",
            metrics: "环保识别、可持续认知、信息透明",
            factorsLabel: "对应CMF要素",
            factors: "材料、色彩、情感",
          },
          {
            title: "整体体验",
            metricsLabel: "关键指标",
            metrics: "综合协调、一致性、空间满意度",
            factorsLabel: "对应CMF要素",
            factors: "CMF协同整合",
          },
        ],
        modules: [
          {
            key: "material",
            code: "A.",
            title: "材料策略模块",
            lines: ["环保属性表达", "触感基础构建"],
          },
          {
            key: "color",
            code: "B.",
            title: "色彩策略模块",
            lines: ["视觉审美引导", "环保联想建立"],
          },
          {
            key: "craft",
            code: "C.",
            title: "工艺策略模块",
            lines: ["品质保障", "结构实现"],
          },
          {
            key: "emotion",
            code: "D.",
            title: "情感策略模块",
            lines: ["信息传达", "价值认同强化"],
          },
        ],
        systemBanner: ["面向用户体验的", "可持续CMF策略系统"],
      },
      colorMechanism: {
        name: "色彩策略模块的作用机制（第四页）",
        description: "第四色聚焦色彩策略模块，串联作用维度、用户体验指标、关键色彩 CMF 要素与作用机制。",
        layout: "mechanism",
        headers: {
          first: "作用维度",
          second: "对应关键指标（用户体验指标）",
          third: "关键CMF要素（色彩要素）",
          fourth: "色彩策略模块的作用机制",
        },
        rows: [
          {
            key: "visual",
            iconKey: "visual",
            order: "1.",
            title: "视觉体验",
            note: "用户通过色彩协调、色调舒适、自然氛围与质感可见性形成第一视觉印象",
            indicators: [
              { code: "V1", text: "内饰色彩搭配协调统一" },
              { code: "V2", text: "内饰整体色调令人感到舒适" },
              { code: "V3", text: "材料纹理清晰可见，具有自然质感" },
              { code: "V4", text: "表面光泽度适中，不刺眼" },
              { code: "V7", text: "材质质感可见性强" },
            ],
            element: {
              index: "1.",
              title: "材料本色表达",
              visual: "swatches",
            },
            effect: {
              index: "1",
              title: "提升整体视觉舒适性与自然审美感",
              bullets: [
                "通过色彩搭配协调与柔和色调增强视觉舒适性",
                "通过弱化人工修饰痕迹保留材料真实感",
                "通过自然化色彩组织形成平和、克制、统一的视觉氛围",
              ],
            },
          },
          {
            key: "eco",
            iconKey: "eco",
            order: "2.",
            title: "环保感知",
            note: "用户通过自然色调与低干预色彩表达联想到环保设计",
            indicators: [{ code: "E2", text: "内饰色调自然，让我联想到环保设计" }],
            element: {
              index: "2.",
              title: "低饱和度中性色组织",
              visual: "palette",
            },
            effect: {
              index: "2",
              title: "强化环保联想与可持续认知",
              bullets: [
                "材料本色与自然色调更容易引发环保联想",
                "低干预、低饱和表达强化自然与节制感",
                "使可持续理念通过视觉方式被用户直观地感受到",
              ],
            },
          },
          {
            key: "overall",
            iconKey: "overall",
            order: "3.",
            title: "整体体验（延伸）",
            note: "用户通过色彩系统的统一性与空间氛围形成整体协调判断",
            indicators: [
              { text: "整体风格协调统一" },
              { text: "空间氛围自然，与材料特征一致" },
            ],
            element: {
              index: "3.",
              title: "自然色调倾向",
              visual: "ring",
            },
            effect: {
              index: "3",
              title: "增强整体风格协调性与系统一致性",
              bullets: [
                "统一色彩表达可强化空间整体协调性",
                "色彩与材料特征一致可提升设计逻辑认同",
                "色彩系统自然统一有助于提升整体体验评价",
              ],
            },
          },
        ],
      },
      emotionModule: {
        name: "情感策略模块（第五页）",
        description: "第五页围绕情感策略模块，连接作用维度、用户体验指标、关键 CMF 要素与作用机制。",
        layout: "emotion",
        diagramTitle: "情感策略模块",
        headers: {
          first: "作用维度",
          second: "对应关键指标（用户体验指标）",
          third: "关键CMF要素",
          fourth: "情感策略模块的作用机制",
        },
        dimensions: [
          {
            key: "emotionEco",
            iconKey: "ecoLeaf",
            order: "1.",
            title: "环保感知",
            note: "用户通过标识、说明与设计线索识别并理解产品的可持续属性",
          },
          {
            key: "emotionOverall",
            iconKey: "overallPerson",
            order: "2.",
            title: "整体体验",
            note: "用户通过整体满意度、风格认同与协调性形成价值认同",
          },
          {
            key: "emotionVisual",
            iconKey: "visualEmotion",
            order: "3.",
            title: "视觉体验（延伸）",
            note: "用户通过自然纹理与质感可见性形成自然联想与情感共鸣",
          },
          {
            key: "emotionTactile",
            iconKey: "tactileEmotion",
            order: "4.",
            title: "触觉体验（延伸）",
            note: "用户通过真实触感、顺滑感与层次感形成自然、亲近的情感体验",
          },
        ],
        indicatorGroups: [
          {
            key: "emotionEco",
            indicators: [
              { code: "E1", text: "能够看出内饰材料具有环保属性（如再生/天然材料）" },
              { code: "E2", text: "内饰色调自然，让我联想到环保设计" },
              { code: "E3", text: "我能感受到品牌在环保材料上的用心" },
            ],
          },
          {
            key: "emotionOverall",
            indicators: [
              { code: "O1", text: "内饰空间整体感受令人满意" },
              { code: "O2", text: "内饰设计风格独特，符合我对高品质的期待" },
              { code: "O4", text: "内饰整体协调性良好" },
            ],
          },
          {
            key: "emotionVisual",
            indicators: [
              { code: "V3", text: "材料纹理清晰可见，具有自然美感" },
              { code: "V7", text: "材质质感可见性强" },
            ],
          },
          {
            key: "emotionTactile",
            indicators: [
              { code: "T2", text: "表面材质细腻，触感顺滑" },
              { code: "T8", text: "触觉层次感丰富" },
            ],
          },
        ],
        elements: [
          { title: "材料来源\n可视化标识", visual: "sourceTag" },
          { title: "自然纹理\n触感保留", visual: "fingerprint" },
          { title: "可持续信息\n透明度", visual: "documentLeaf" },
        ],
        effects: [
          {
            index: "1",
            title: "强化环保性识别、\n信息理解与品牌信任",
            bullets: [
              "来源标识将再生、天然或生物基特征转化为用户可直接识别的线索",
              "透明信息提升用户对材料来源、品牌投入与设计意图的理解",
              "帮助用户将抽象的环保价值转化为可感知、可判断的认知内容",
            ],
          },
          {
            index: "2",
            title: "增强整体满意度与\n价值认同",
            bullets: [
              "通过清晰的可持续叙事连接材料、品牌态度与设计表达",
              "提升用户对整体风格、空间氛围与设计逻辑的认同",
              "促进整体满意度和可持续价值认同的形成",
            ],
          },
          {
            index: "3",
            title: "借助自然纹理与真实触感\n建立情感联结",
            bullets: [
              "保留自然纹理与真实触感可增强视觉自然美感与质感表达",
              "提升顺滑感、亲近感和触觉层次感",
              "帮助用户在视觉与触觉层面形成对可持续价值的情感理解",
            ],
          },
        ],
      },
    },
  },
  en: {
    documentTitle: "Yaoyu要的图",
    ui: {
      eyebrow: "Interactive Experience Diagram",
      pageTitle: "Yaoyu要的图",
      pageIntro:
        "This web version recreates the references as a multi-page infographic and keeps all five diagrams in one consistent visual system.",
      languageLabel: "Language",
      imageSelectLabel: "Image Switch",
      imageSelectTitle: "Change Image",
      imageSelectHint: "Five diagrams are available now. Use this menu to switch between page one, page two, page three, page four, and page five.",
      presetSummaryLabel: "Current Image",
      presetSummaryTitle: "Image Summary",
    },
    diagrams: {
      overview: {
        name: "Need Recognition Diagram (Page 1)",
        description: "Page one maps the need recognition reference into an interactive infographic with five experience dimensions.",
        layout: "experience",
        columns: {
          first: "User Experience Dimension",
          second: "Need Name",
          third: "Primary Need Content",
        },
        sideLabel: {
          mode: "rotate",
          text: "Need Recognition",
        },
        rows: [
          {
            key: "visual",
            first: "Visual Experience",
            second: "Visual Experience Need",
            third: "Users expect the interior to feel natural, coordinated, and comfortable through color matching, overall tonality, material texture, and surface finish.",
          },
          {
            key: "tactile",
            first: "Tactile Experience",
            second: "Tactile Experience Need",
            third: "Users expect materials to feel soft, refined, comfortable, and richly layered during touch.",
          },
          {
            key: "quality",
            first: "Quality Perception",
            second: "Quality Perception Need",
            third: "Users pay attention to craftsmanship details, overall completion, edge finishing, and structural stability.",
          },
          {
            key: "eco",
            first: "Sustainability Perception",
            second: "Sustainability Perception Need",
            third: "Users expect a product's environmental attributes to be recognized, understood, and translated into a clear cognitive judgment.",
          },
          {
            key: "overall",
            first: "Overall Experience",
            second: "Overall Experience Need",
            third: "Users care about the overall harmony among materials, color, process, and emotional expression, and the combined satisfaction created by that harmony.",
          },
        ],
      },
      cmfModular: {
        name: "Modular Integration of CMF Elements (Page 2)",
        description: "Page two links key CMF elements, experience dimensions, and modular integration directions in the same visual language.",
        layout: "cmf",
        columns: {
          first: "Key CMF Elements",
          second: "User Experience Dimension",
          third: "Modular Integration Direction",
        },
        rows: [
          {
            key: "cmfTeal",
            first: "Increase recycled material ratio",
            second: "Sustainability Perception",
            third: "Strengthen the recognizability and perceptibility of sustainable material attributes",
          },
          {
            key: "cmfTeal",
            first: "Bio-based material application",
            second: "Tactile Experience, Sustainability Perception",
            third: "Balance sustainable expression with improved tactile comfort",
          },
          {
            key: "cmfTeal",
            first: "Natural fiber composite materials",
            second: "Visual Experience, Tactile Experience",
            third: "Strengthen natural texture expression and authentic touch experience",
          },
          {
            key: "cmfTeal",
            first: "Authentic material texture presentation",
            second: "Visual Experience, Tactile Experience",
            third: "Enhance natural material perception and tactile realism",
          },
          {
            key: "cmfGreen",
            first: "Material true-color expression",
            second: "Visual Experience, Sustainability Perception",
            third: "Build a natural visual impression and reinforce sustainability associations",
          },
          {
            key: "cmfGreen",
            first: "Low-saturation neutral color composition",
            second: "Visual Experience",
            third: "Build a restrained and harmonious visual system",
          },
          {
            key: "cmfGreen",
            first: "Natural color-direction preference",
            second: "Visual Experience, Sustainability Perception",
            third: "Reinforce natural aesthetics and sustainability cognition",
          },
          {
            key: "cmfOrange",
            first: "Detachable connection structure",
            second: "Quality Perception",
            third: "Improve structural logic and long-term reusable value",
          },
          {
            key: "cmfOrange",
            first: "In-mold integrated forming",
            second: "Quality Perception",
            third: "Strengthen craft precision, holistic form, and quality expression",
          },
          {
            key: "cmfOrange",
            first: "Low-impact surface coating",
            second: "Sustainability Perception, Tactile Experience",
            third: "Balance low-impact manufacturing requirements with surface touch experience",
          },
          {
            key: "cmfOrange",
            first: "Reduce overlays and surface treatment",
            second: "Visual Experience, Tactile Experience",
            third: "Reduce over-processing and preserve authentic material feel",
          },
          {
            key: "cmfOrange",
            first: "Fiber-oriented reinforcement design",
            second: "Quality Perception",
            third: "Improve structural stability and process reliability",
          },
          {
            key: "cmfBlue",
            first: "Visualized sourcing label",
            second: "Sustainability Perception",
            third: "Increase users' recognition and trust in sustainable attributes",
          },
          {
            key: "cmfBlue",
            first: "Preserve natural texture and touch",
            second: "Visual Experience, Tactile Experience",
            third: "Build a natural and authentic perceptual connection",
          },
          {
            key: "cmfBlue",
            first: "Sustainability information transparency",
            second: "Sustainability Perception",
            third: "Strengthen information delivery and sustainability understanding",
          },
        ],
      },
      cmfStrategy: {
        name: "Overall Structure (Page 3)",
        description: "Page three presents the overall structure of a sustainable CMF strategy system through goal, indicator, module, and system layers.",
        layout: "strategy",
        layers: {
          goal: "Goal Layer",
          indicator: "Indicator / Element Layer",
          module: "Module Layer",
          system: "System Layer",
        },
        goalPanel: {
          title: "User Experience Goals",
          items: [
            "Visual Experience",
            "Tactile Experience",
            "Quality Perception",
            "Sustainability Perception",
            "Overall Experience",
          ],
        },
        indicatorCards: [
          {
            title: "Visual Experience",
            metricsLabel: "Key Indicators",
            metrics: "Color harmony, overall tonality, material texture, and quality expression",
            factorsLabel: "Mapped CMF Elements",
            factors: "Material, color, and surface treatment",
          },
          {
            title: "Tactile Experience",
            metricsLabel: "Key Indicators",
            metrics: "Soft and refined touch, thermal comfort, and tactile layering",
            factorsLabel: "Mapped CMF Elements",
            factors: "Material and craft",
          },
          {
            title: "Quality Perception",
            metricsLabel: "Key Indicators",
            metrics: "Craft precision, completion quality, edge detailing, and structural stability",
            factorsLabel: "Mapped CMF Elements",
            factors: "Craft and material",
          },
          {
            title: "Sustainability Perception",
            metricsLabel: "Key Indicators",
            metrics: "Eco recognition, sustainability awareness, and information transparency",
            factorsLabel: "Mapped CMF Elements",
            factors: "Material, color, and emotion",
          },
          {
            title: "Overall Experience",
            metricsLabel: "Key Indicators",
            metrics: "Integrated harmony, consistency, and spatial satisfaction",
            factorsLabel: "Mapped CMF Elements",
            factors: "Coordinated CMF integration",
          },
        ],
        modules: [
          {
            key: "material",
            code: "A.",
            title: "Material Strategy Module",
            lines: ["Sustainable attribute expression", "Foundational tactile construction"],
          },
          {
            key: "color",
            code: "B.",
            title: "Color Strategy Module",
            lines: ["Visual aesthetic guidance", "Sustainability association building"],
          },
          {
            key: "craft",
            code: "C.",
            title: "Craft Strategy Module",
            lines: ["Quality assurance", "Structural realization"],
          },
          {
            key: "emotion",
            code: "D.",
            title: "Emotion Strategy Module",
            lines: ["Information delivery", "Value identification reinforcement"],
          },
        ],
        systemBanner: ["For User Experience", "Sustainable CMF Strategy System"],
      },
      colorMechanism: {
        name: "Mechanism of the Color Strategy Module (Page 4)",
        description: "Page four links functional dimensions, user-experience indicators, key color-related CMF elements, and the mechanism of the color strategy module.",
        layout: "mechanism",
        headers: {
          first: "Functional Dimension",
          second: "Mapped Key Indicators (User-Experience Indicators)",
          third: "Key CMF Elements (Color Elements)",
          fourth: "Mechanism of the Color Strategy Module",
        },
        rows: [
          {
            key: "visual",
            iconKey: "visual",
            order: "1.",
            title: "Visual Experience",
            note: "Users form a first impression through coordinated color composition, comfortable tonality, natural ambience, and visible material texture.",
            indicators: [
              { code: "V1", text: "Harmonized interior color matching" },
              { code: "V2", text: "A comfortable overall interior tonality" },
              { code: "V3", text: "Material textures are clearly visible with a natural feel" },
              { code: "V4", text: "Moderate surface gloss without glare" },
              { code: "V7", text: "Strong visibility of material quality" },
            ],
            element: {
              index: "1.",
              title: "Material True-Color Expression",
              visual: "swatches",
            },
            effect: {
              index: "1",
              title: "Improve overall visual comfort and natural aesthetics",
              bullets: [
                "Enhance visual comfort through coordinated color matching and softer tonal control",
                "Preserve material authenticity by reducing traces of artificial decoration",
                "Create a calm, restrained, and unified visual atmosphere through naturalized color organization",
              ],
            },
          },
          {
            key: "eco",
            iconKey: "eco",
            order: "2.",
            title: "Sustainability Perception",
            note: "Users associate sustainable design with natural hues and low-intervention color expression.",
            indicators: [{ code: "E2", text: "Natural interior tones make me associate the space with sustainable design" }],
            element: {
              index: "2.",
              title: "Low-Saturation Neutral Composition",
              visual: "palette",
            },
            effect: {
              index: "2",
              title: "Strengthen sustainability associations and eco cognition",
              bullets: [
                "Material true-color and natural hues more easily trigger sustainable associations",
                "Low-intervention and low-saturation expression reinforces naturalness and restraint",
                "Make sustainable values directly perceptible through visual communication",
              ],
            },
          },
          {
            key: "overall",
            iconKey: "overall",
            order: "3.",
            title: "Overall Experience (Extended)",
            note: "Users judge overall harmony through the unity of the color system and the atmosphere of the space.",
            indicators: [
              { text: "Overall style is coordinated and unified" },
              { text: "The spatial atmosphere feels natural and consistent with material traits" },
            ],
            element: {
              index: "3.",
              title: "Natural Hue Direction",
              visual: "ring",
            },
            effect: {
              index: "3",
              title: "Enhance style coordination and systemic consistency",
              bullets: [
                "Unified color expression strengthens spatial coordination",
                "Consistency between color and material characteristics improves design logic recognition",
                "A naturally unified color system helps raise overall experience evaluation",
              ],
            },
          },
        ],
      },
      emotionModule: {
        name: "Emotion Strategy Module (Page 5)",
        description:
          "Page five links functional dimensions, mapped user-experience indicators, key CMF elements, and the mechanism of the emotion strategy module.",
        layout: "emotion",
        diagramTitle: "Emotion Strategy Module",
        headers: {
          first: "Functional Dimension",
          second: "Mapped Key Indicators (User-Experience Indicators)",
          third: "Key CMF Elements",
          fourth: "Mechanism of the Emotion Strategy Module",
        },
        dimensions: [
          {
            key: "emotionEco",
            iconKey: "ecoLeaf",
            order: "1.",
            title: "Sustainability Perception",
            note: "Users identify and understand the product's sustainable attributes through labels, descriptions, and design cues.",
          },
          {
            key: "emotionOverall",
            iconKey: "overallPerson",
            order: "2.",
            title: "Overall Experience",
            note: "Users form value identification through overall satisfaction, style recognition, and perceived harmony.",
          },
          {
            key: "emotionVisual",
            iconKey: "visualEmotion",
            order: "3.",
            title: "Visual Experience (Extended)",
            note: "Users form natural associations and emotional resonance through natural textures and visible material quality.",
          },
          {
            key: "emotionTactile",
            iconKey: "tactileEmotion",
            order: "4.",
            title: "Tactile Experience (Extended)",
            note: "Users build a natural and familiar emotional experience through authentic touch, smoothness, and tactile layering.",
          },
        ],
        indicatorGroups: [
          {
            key: "emotionEco",
            indicators: [
              { code: "E1", text: "I can tell that the interior materials have sustainable attributes such as recycled or natural materials" },
              { code: "E2", text: "Natural interior tones make me associate the space with sustainable design" },
              { code: "E3", text: "I can feel the brand's care in its use of sustainable materials" },
            ],
          },
          {
            key: "emotionOverall",
            indicators: [
              { code: "O1", text: "The overall interior space feels satisfying" },
              { code: "O2", text: "The interior design style is distinctive and matches my expectations of high quality" },
              { code: "O4", text: "The overall interior coordination feels strong" },
            ],
          },
          {
            key: "emotionVisual",
            indicators: [
              { code: "V3", text: "Material textures are clearly visible with a natural beauty" },
              { code: "V7", text: "Strong visibility of material quality" },
            ],
          },
          {
            key: "emotionTactile",
            indicators: [
              { code: "T2", text: "The surface material feels refined and smooth" },
              { code: "T8", text: "The tactile layering feels rich" },
            ],
          },
        ],
        elements: [
          { title: "Visible Labels for\nMaterial Source", visual: "sourceTag" },
          { title: "Preservation of Natural\nTexture and Touch", visual: "fingerprint" },
          { title: "Transparency of\nSustainability Information", visual: "documentLeaf" },
        ],
        effects: [
          {
            index: "1",
            title: "Strengthen eco recognition,\ninformation understanding, and brand trust",
            bullets: [
              "Source labels translate recycled, natural, or bio-based features into cues users can directly recognize",
              "Transparent information improves users' understanding of material origin, brand commitment, and design intent",
              "Help users turn abstract environmental values into perceptible and judgeable knowledge",
            ],
          },
          {
            index: "2",
            title: "Enhance overall satisfaction\nand value identification",
            bullets: [
              "Use clear sustainability narratives to connect materials, brand attitude, and design expression",
              "Increase users' identification with overall style, spatial ambience, and design logic",
              "Support the formation of both overall satisfaction and sustainable value identification",
            ],
          },
          {
            index: "3",
            title: "Build emotional connections\nthrough natural texture and authentic touch",
            bullets: [
              "Preserving natural texture and authentic touch strengthens visual naturalness and quality expression",
              "Improve smoothness, closeness, and tactile layering",
              "Help users form an emotional understanding of sustainable value through both vision and touch",
            ],
          },
        ],
      },
    },
  },
  ko: {
    documentTitle: "Yaoyu要的图",
    ui: {
      eyebrow: "Interactive Experience Diagram",
      pageTitle: "Yaoyu要的图",
      pageIntro:
        "참고 이미지를 동일한 인포그래픽 스타일의 다중 페이지 웹 버전으로 재구성하고, 다섯 장의 도표를 같은 시각 체계 안에서 전환할 수 있습니다.",
      languageLabel: "언어 전환",
      imageSelectLabel: "이미지 전환",
      imageSelectTitle: "이미지 변경",
      imageSelectHint: "현재 다섯 장의 도표가 연결되어 있으며, 여기서 1페이지와 2페이지, 3페이지, 4페이지, 5페이지를 전환할 수 있습니다.",
      presetSummaryLabel: "현재 이미지",
      presetSummaryTitle: "이미지 설명",
    },
    diagrams: {
      overview: {
        name: "요구 인식 도표 (1페이지)",
        description: "1페이지는 요구 인식 원본 이미지를 다섯 가지 경험 차원으로 정리한 인터랙티브 도표입니다.",
        layout: "experience",
        columns: {
          first: "사용자 경험 차원",
          second: "요구 명칭",
          third: "주요 요구 내용",
        },
        sideLabel: {
          mode: "rotate",
          text: "요구 인식",
        },
        rows: [
          {
            key: "visual",
            first: "시각 경험",
            second: "시각 경험 요구",
            third: "사용자는 색채 조합, 전체 톤, 소재 텍스처와 질감이 자연스럽고 조화롭고 편안한 시각 인상을 만들기를 기대합니다.",
          },
          {
            key: "tactile",
            first: "촉각 경험",
            second: "촉각 경험 요구",
            third: "사용자는 소재가 닿을 때 부드럽고 섬세하며 편안하고 층위감 있는 촉감을 제공하기를 기대합니다.",
          },
          {
            key: "quality",
            first: "품질 인지",
            second: "품질 인지 요구",
            third: "사용자는 인테리어의 제작 디테일, 전체 완성도, 가장자리 마감과 구조적 안정성에 주목합니다.",
          },
          {
            key: "eco",
            first: "친환경 인지",
            second: "친환경 인지 요구",
            third: "사용자는 제품의 친환경 속성이 인식되고 이해되어 명확한 판단으로 이어지기를 기대합니다.",
          },
          {
            key: "overall",
            first: "전체 경험",
            second: "전체 경험 요구",
            third: "사용자는 소재, 색채, 공정, 감성 표현 사이의 전반적 조화와 그로 인한 종합 만족도를 중시합니다.",
          },
        ],
      },
      cmfModular: {
        name: "CMF 요소의 모듈형 통합 (2페이지)",
        description: "2페이지는 핵심 CMF 요소, 사용자 경험 차원, 모듈형 통합 방향의 연결 관계를 같은 시각 언어로 정리합니다.",
        layout: "cmf",
        columns: {
          first: "핵심 CMF 요소",
          second: "사용자 경험 차원",
          third: "모듈형 통합 방향",
        },
        rows: [
          {
            key: "cmfTeal",
            first: "재생 소재 비율 향상",
            second: "친환경 인지",
            third: "소재의 친환경 속성이 더 쉽게 인식되고 체감되도록 강화",
          },
          {
            key: "cmfTeal",
            first: "바이오 기반 소재 적용",
            second: "촉각 경험, 친환경 인지",
            third: "친환경 속성 표현과 촉감 편안성 향상을 함께 고려",
          },
          {
            key: "cmfTeal",
            first: "천연 섬유 복합 소재",
            second: "시각 경험, 촉각 경험",
            third: "자연스러운 텍스처 표현과 실제적인 촉감 경험을 강화",
          },
          {
            key: "cmfTeal",
            first: "소재의 실제 질감 표현",
            second: "시각 경험, 촉각 경험",
            third: "소재의 자연스러운 인지와 접촉의 실제감을 높임",
          },
          {
            key: "cmfGreen",
            first: "소재 본색 표현",
            second: "시각 경험, 친환경 인지",
            third: "자연스러운 시각 인상을 만들고 친환경 연상을 강화",
          },
          {
            key: "cmfGreen",
            first: "저채도 중성색 구성",
            second: "시각 경험",
            third: "절제되고 조화로운 시각 체계를 구축",
          },
          {
            key: "cmfGreen",
            first: "자연 색조 지향",
            second: "시각 경험, 친환경 인지",
            third: "자연 친화적 미감과 친환경 인지를 강화",
          },
          {
            key: "cmfOrange",
            first: "분해 가능한 연결 구조",
            second: "품질 인지",
            third: "구조의 합리성과 지속 사용 가치를 높임",
          },
          {
            key: "cmfOrange",
            first: "금형 내 일체형 성형",
            second: "품질 인지",
            third: "공정 정밀도, 일체감, 품질 표현을 강화",
          },
          {
            key: "cmfOrange",
            first: "저환경부하 코팅",
            second: "친환경 인지, 촉각 경험",
            third: "친환경 제조 요구와 표면 촉감 경험의 균형을 맞춤",
          },
          {
            key: "cmfOrange",
            first: "피복 및 표면 처리 최소화",
            second: "시각 경험, 촉각 경험",
            third: "과도한 가공을 줄이고 소재의 실제감을 보존",
          },
          {
            key: "cmfOrange",
            first: "섬유 방향성 보강 설계",
            second: "품질 인지",
            third: "구조 안정성과 공정 신뢰성을 높임",
          },
          {
            key: "cmfBlue",
            first: "소재 출처 가시화 표기",
            second: "친환경 인지",
            third: "지속가능 속성에 대한 사용자 인식과 신뢰를 강화",
          },
          {
            key: "cmfBlue",
            first: "자연 질감과 촉감 보존",
            second: "시각 경험, 촉각 경험",
            third: "자연스럽고 진정성 있는 감각적 연결을 구축",
          },
          {
            key: "cmfBlue",
            first: "지속가능 정보 투명성",
            second: "친환경 인지",
            third: "정보 전달과 친환경 인지 형성을 강화",
          },
        ],
      },
      cmfStrategy: {
        name: "전체 구조 (3페이지)",
        description: "3페이지는 목표층, 지표/요소층, 모듈층, 시스템층을 통해 사용자 경험 중심의 지속가능 CMF 전략 전체 구조를 보여줍니다.",
        layout: "strategy",
        layers: {
          goal: "목표층",
          indicator: "지표/요소층",
          module: "모듈층",
          system: "시스템층",
        },
        goalPanel: {
          title: "사용자 경험 목표",
          items: ["시각 경험", "촉각 경험", "품질 인지", "친환경 인지", "전체 경험"],
        },
        indicatorCards: [
          {
            title: "시각 경험",
            metricsLabel: "핵심 지표",
            metrics: "색채 조화, 전체 톤, 소재 텍스처, 질감 표현",
            factorsLabel: "대응 CMF 요소",
            factors: "소재, 색채, 표면 처리",
          },
          {
            title: "촉각 경험",
            metricsLabel: "핵심 지표",
            metrics: "부드럽고 섬세한 촉감, 온감의 편안함, 촉각 층위",
            factorsLabel: "대응 CMF 요소",
            factors: "소재, 공정",
          },
          {
            title: "품질 인지",
            metricsLabel: "핵심 지표",
            metrics: "공정 정밀도, 완성도, 가장자리 디테일, 구조 안정성",
            factorsLabel: "대응 CMF 요소",
            factors: "공정, 소재",
          },
          {
            title: "친환경 인지",
            metricsLabel: "핵심 지표",
            metrics: "친환경 식별, 지속가능 인지, 정보 투명성",
            factorsLabel: "대응 CMF 요소",
            factors: "소재, 색채, 감성",
          },
          {
            title: "전체 경험",
            metricsLabel: "핵심 지표",
            metrics: "종합 조화, 일관성, 공간 만족도",
            factorsLabel: "대응 CMF 요소",
            factors: "CMF 협업 통합",
          },
        ],
        modules: [
          {
            key: "material",
            code: "A.",
            title: "소재 전략 모듈",
            lines: ["친환경 속성 표현", "촉감 기반 구축"],
          },
          {
            key: "color",
            code: "B.",
            title: "색채 전략 모듈",
            lines: ["시각 미감 유도", "친환경 연상 구축"],
          },
          {
            key: "craft",
            code: "C.",
            title: "공정 전략 모듈",
            lines: ["품질 보장", "구조 구현"],
          },
          {
            key: "emotion",
            code: "D.",
            title: "감성 전략 모듈",
            lines: ["정보 전달", "가치 공감 강화"],
          },
        ],
        systemBanner: ["사용자 경험 지향", "지속가능 CMF 전략 시스템"],
      },
      colorMechanism: {
        name: "색채 전략 모듈의 작용 메커니즘 (4페이지)",
        description: "4페이지는 색채 전략 모듈을 중심으로 작용 차원, 사용자 경험 지표, 핵심 색채 CMF 요소, 전략 메커니즘의 연결을 정리합니다.",
        layout: "mechanism",
        headers: {
          first: "작용 차원",
          second: "대응 핵심 지표 (사용자 경험 지표)",
          third: "핵심 CMF 요소 (색채 요소)",
          fourth: "색채 전략 모듈의 작용 메커니즘",
        },
        rows: [
          {
            key: "visual",
            iconKey: "visual",
            order: "1.",
            title: "시각 경험",
            note: "사용자는 색채 조화, 편안한 톤, 자연스러운 분위기와 질감의 가시성을 통해 첫인상을 형성합니다.",
            indicators: [
              { code: "V1", text: "내장 색채 조합이 조화롭고 통일됨" },
              { code: "V2", text: "내장 전체 색조가 편안함" },
              { code: "V3", text: "소재 질감이 또렷하게 보이고 자연스럽다" },
              { code: "V4", text: "표면 광택이 적당하고 눈부시지 않음" },
              { code: "V7", text: "재질 질감의 가시성이 높음" },
            ],
            element: {
              index: "1.",
              title: "소재 본색 표현",
              visual: "swatches",
            },
            effect: {
              index: "1",
              title: "전반적 시각적 편안함과 자연 미감을 향상",
              bullets: [
                "조화로운 색채 조합과 부드러운 톤 조절로 시각적 편안함을 높임",
                "인공적 장식의 흔적을 줄여 소재의 진정성을 유지",
                "자연스러운 색채 조직으로 차분하고 절제된 통일감을 형성",
              ],
            },
          },
          {
            key: "eco",
            iconKey: "eco",
            order: "2.",
            title: "친환경 인지",
            note: "사용자는 자연 색조와 저개입 색채 표현을 통해 친환경 디자인을 연상합니다.",
            indicators: [{ code: "E2", text: "내장 색조가 자연스러워 친환경 디자인이 떠오른다" }],
            element: {
              index: "2.",
              title: "저채도 중성색 구성",
              visual: "palette",
            },
            effect: {
              index: "2",
              title: "친환경 연상과 지속가능 인지를 강화",
              bullets: [
                "소재 본색과 자연 색조가 친환경 연상을 더 쉽게 유도",
                "저개입·저채도 표현이 자연성과 절제감을 강화",
                "지속가능 가치가 시각적으로 직접 체감되도록 함",
              ],
            },
          },
          {
            key: "overall",
            iconKey: "overall",
            order: "3.",
            title: "전체 경험 (확장)",
            note: "사용자는 색채 시스템의 통일감과 공간 분위기를 통해 전체 조화를 판단합니다.",
            indicators: [
              { text: "전체 스타일이 조화롭고 통일됨" },
              { text: "공간 분위기가 자연스럽고 소재 특성과 일치함" },
            ],
            element: {
              index: "3.",
              title: "자연 색조 지향",
              visual: "ring",
            },
            effect: {
              index: "3",
              title: "전체 스타일 조화와 시스템 일관성을 강화",
              bullets: [
                "통일된 색채 표현이 공간 전체의 조화를 강화",
                "색채와 소재 특성의 일치가 디자인 논리의 공감을 높임",
                "자연스럽게 통일된 색채 체계가 전체 경험 평가를 높이는 데 도움을 줌",
              ],
            },
          },
        ],
      },
      emotionModule: {
        name: "감성 전략 모듈 (5페이지)",
        description: "5페이지는 감성 전략 모듈을 중심으로 작용 차원, 사용자 경험 지표, 핵심 CMF 요소, 작용 메커니즘의 연결을 정리합니다.",
        layout: "emotion",
        diagramTitle: "감성 전략 모듈",
        headers: {
          first: "작용 차원",
          second: "대응 핵심 지표 (사용자 경험 지표)",
          third: "핵심 CMF 요소",
          fourth: "감성 전략 모듈의 작용 메커니즘",
        },
        dimensions: [
          {
            key: "emotionEco",
            iconKey: "ecoLeaf",
            order: "1.",
            title: "친환경 인지",
            note: "사용자는 표기, 설명, 디자인 단서를 통해 제품의 지속가능 속성을 식별하고 이해합니다.",
          },
          {
            key: "emotionOverall",
            iconKey: "overallPerson",
            order: "2.",
            title: "전체 경험",
            note: "사용자는 전체 만족도, 스타일 공감, 조화성을 통해 가치 인식을 형성합니다.",
          },
          {
            key: "emotionVisual",
            iconKey: "visualEmotion",
            order: "3.",
            title: "시각 경험 (확장)",
            note: "사용자는 자연스러운 질감과 재질의 가시성을 통해 자연 연상과 감성 공명을 형성합니다.",
          },
          {
            key: "emotionTactile",
            iconKey: "tactileEmotion",
            order: "4.",
            title: "촉각 경험 (확장)",
            note: "사용자는 실제감, 부드러움, 촉각 층위를 통해 자연스럽고 친근한 감성 경험을 형성합니다.",
          },
        ],
        indicatorGroups: [
          {
            key: "emotionEco",
            indicators: [
              { code: "E1", text: "내장 소재가 친환경 속성(재생/천연 소재 등)을 가진다는 점을 알아볼 수 있다" },
              { code: "E2", text: "내장 색조가 자연스러워 친환경 디자인이 떠오른다" },
              { code: "E3", text: "브랜드가 친환경 소재에 들인 고민이 느껴진다" },
            ],
          },
          {
            key: "emotionOverall",
            indicators: [
              { code: "O1", text: "내장 공간의 전체 인상이 만족스럽다" },
              { code: "O2", text: "내장 디자인 스타일이 독특하고 내가 기대하는 고급감에 부합한다" },
              { code: "O4", text: "내장 전체의 조화성이 좋다" },
            ],
          },
          {
            key: "emotionVisual",
            indicators: [
              { code: "V3", text: "소재 질감이 또렷하게 보이고 자연미가 느껴진다" },
              { code: "V7", text: "재질 질감의 가시성이 높다" },
            ],
          },
          {
            key: "emotionTactile",
            indicators: [
              { code: "T2", text: "표면 재질이 섬세하고 촉감이 매끄럽다" },
              { code: "T8", text: "촉각의 층위감이 풍부하다" },
            ],
          },
        ],
        elements: [
          { title: "소재 출처\n가시화 표기", visual: "sourceTag" },
          { title: "자연 질감\n촉감 보존", visual: "fingerprint" },
          { title: "지속가능 정보\n투명성", visual: "documentLeaf" },
        ],
        effects: [
          {
            index: "1",
            title: "친환경 식별, 정보 이해와\n브랜드 신뢰를 강화",
            bullets: [
              "출처 표기는 재생·천연·바이오 기반 특성을 사용자가 직접 식별할 수 있는 단서로 바꿔 줍니다",
              "투명한 정보는 소재 출처, 브랜드의 투자와 디자인 의도에 대한 이해를 높입니다",
              "추상적인 친환경 가치를 감지 가능하고 판단 가능한 인지 내용으로 전환하도록 돕습니다",
            ],
          },
          {
            index: "2",
            title: "전체 만족도와\n가치 공감을 강화",
            bullets: [
              "명확한 지속가능 서사를 통해 소재, 브랜드 태도, 디자인 표현을 연결합니다",
              "전체 스타일, 공간 분위기, 디자인 논리에 대한 공감을 높입니다",
              "전체 만족도와 지속가능 가치 공감의 형성을 촉진합니다",
            ],
          },
          {
            index: "3",
            title: "자연 질감과 실제 촉감으로\n감성적 연결을 형성",
            bullets: [
              "자연 질감과 실제 촉감을 보존하면 시각적 자연미와 질감 표현이 강화됩니다",
              "매끄러움, 친근감, 촉각의 층위감을 높입니다",
              "시각과 촉각을 통해 지속가능 가치에 대한 감성적 이해를 형성하도록 돕습니다",
            ],
          },
        ],
      },
    },
  },
};

function resolveInitialState() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  const preset = params.get("preset");

  return {
    lang: ["zh", "en", "ko"].includes(lang) ? lang : "zh",
    preset: PRESET_ORDER.includes(preset) ? preset : "overview",
  };
}

const state = resolveInitialState();

const pageEyebrow = document.querySelector("#pageEyebrow");
const pageTitle = document.querySelector("#pageTitle");
const pageIntro = document.querySelector("#pageIntro");
const languageLabel = document.querySelector("#languageLabel");
const imageSelectLabel = document.querySelector("#imageSelectLabel");
const imageSelectTitle = document.querySelector("#imageSelectTitle");
const imageSelectHint = document.querySelector("#imageSelectHint");
const presetSummaryLabel = document.querySelector("#presetSummaryLabel");
const presetSummaryTitle = document.querySelector("#presetSummaryTitle");
const presetDescription = document.querySelector("#presetDescription");
const presetSelect = document.querySelector("#presetSelect");
const diagramBoard = document.querySelector("#diagramBoard");
const langButtons = document.querySelectorAll("[data-lang]");

function syncUrlState() {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", state.lang);
  url.searchParams.set("preset", state.preset);
  window.history.replaceState({}, "", url);
}

function renderSideLabel(sideLabel) {
  if (sideLabel.mode === "rotate") {
    return `<div class="axis-label axis-label--rotate"><span class="axis-label__rotate-text">${sideLabel.text}</span></div>`;
  }

  return `<div class="axis-label axis-label--stack">${sideLabel.tokens
    .map((token) => `<span>${token}</span>`)
    .join("")}</div>`;
}

function renderExperienceDiagram(preset) {
  return `
    <div class="diagram-grid">
      <div class="column-heading" style="grid-column: 3; grid-row: 1;">${preset.columns.first}</div>
      <div class="column-heading" style="grid-column: 5; grid-row: 1;">${preset.columns.second}</div>
      <div class="column-heading" style="grid-column: 7; grid-row: 1;">${preset.columns.third}</div>

      <div class="axis-zone" style="grid-column: 1; grid-row: 2 / span ${preset.rows.length}; --row-count: ${preset.rows.length};">
        ${renderSideLabel(preset.sideLabel)}
        <div class="axis-spine"></div>
        ${preset.rows
          .map((row, index) => {
            const meta = ROW_META[row.key];
            return `
              <span
                class="axis-node"
                style="grid-row: ${index + 1}; --accent: ${meta.accent}; --shadow: ${meta.shadow};"
              ></span>
            `;
          })
          .join("")}
      </div>

      ${preset.rows
        .map((row, index) => {
          const meta = ROW_META[row.key];
          const gridRow = index + 2;

          return `
            <div class="flow-arrow" style="grid-column: 2; grid-row: ${gridRow}; --accent: ${meta.accent};"></div>

            <article
              class="info-card"
              style="grid-column: 3; grid-row: ${gridRow}; --accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
            >
              <div class="icon-shell">${ICONS[row.key]}</div>
              <h2 class="card-title">${row.first}</h2>
            </article>

            <div class="flow-arrow" style="grid-column: 4; grid-row: ${gridRow}; --accent: ${meta.accent};"></div>

            <article
              class="info-card"
              style="grid-column: 5; grid-row: ${gridRow}; --accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
            >
              <h2 class="card-title">${row.second}</h2>
            </article>

            <div class="flow-arrow" style="grid-column: 6; grid-row: ${gridRow}; --accent: ${meta.accent};"></div>

            <article
              class="detail-card"
              style="grid-column: 7; grid-row: ${gridRow}; --accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
            >
              <p>${row.third}</p>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderCmfDiagram(preset) {
  return `
    <div class="cmf-grid">
      <div class="cmf-heading" style="grid-column: 1; grid-row: 1;">${preset.columns.first}</div>
      <div class="cmf-heading" style="grid-column: 3; grid-row: 1;">${preset.columns.second}</div>
      <div class="cmf-heading" style="grid-column: 5; grid-row: 1;">${preset.columns.third}</div>

      ${preset.rows
        .map((row, index) => {
          const meta = ROW_META[row.key];
          const gridRow = index + 2;

          return `
            <article
              class="cmf-card"
              style="grid-column: 1; grid-row: ${gridRow}; --accent: ${meta.accent}; --shadow: ${meta.shadow};"
            >
              <p>${row.first}</p>
            </article>

            <div class="cmf-arrow" style="grid-column: 2; grid-row: ${gridRow}; --accent: ${meta.accent};"></div>

            <article
              class="cmf-card"
              style="grid-column: 3; grid-row: ${gridRow}; --accent: ${meta.accent}; --shadow: ${meta.shadow};"
            >
              <p>${row.second}</p>
            </article>

            <div class="cmf-arrow" style="grid-column: 4; grid-row: ${gridRow}; --accent: ${meta.accent};"></div>

            <article
              class="cmf-card"
              style="grid-column: 5; grid-row: ${gridRow}; --accent: ${meta.accent}; --shadow: ${meta.shadow};"
            >
              <p>${row.third}</p>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderMechanismVisual(type) {
  if (type === "swatches") {
    return `
      <div class="mechanism-visual mechanism-visual--swatches" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
  }

  if (type === "palette") {
    return `
      <div class="mechanism-visual mechanism-visual--palette" aria-hidden="true">
        ${MODULE_ICONS.color}
      </div>
    `;
  }

  return `
    <div class="mechanism-visual mechanism-visual--ring" aria-hidden="true">
      <span></span>
    </div>
  `;
}

function renderMechanismIndicators(indicators) {
  return indicators
    .map((item, index) => {
      if (item.code) {
        return `
          <article class="mechanism-indicator-chip" data-indicator-index="${index}">
            <span class="mechanism-indicator-code">${item.code}</span>
            <p>${item.text}</p>
          </article>
        `;
      }

      return `
        <article class="mechanism-indicator-chip mechanism-indicator-chip--plain" data-indicator-index="${index}">
          <p>${item.text}</p>
        </article>
      `;
    })
    .join("");
}

function renderMechanismDiagram(preset) {
  return `
    <div class="mechanism-layout" id="mechanismLayout">
      <svg class="mechanism-overlay" id="mechanismOverlay" aria-hidden="true"></svg>
      <div class="mechanism-grid">
        <div class="mechanism-heading mechanism-heading--orange" style="grid-column: 1; grid-row: 1;">${preset.headers.first}</div>
        <div class="mechanism-heading mechanism-heading--green" style="grid-column: 3; grid-row: 1;">${preset.headers.second}</div>
        <div class="mechanism-heading mechanism-heading--blue" style="grid-column: 5; grid-row: 1;">${preset.headers.third}</div>
        <div class="mechanism-heading mechanism-heading--blue" style="grid-column: 7; grid-row: 1;">${preset.headers.fourth}</div>

        ${preset.rows
          .map((row, index) => {
            const gridRow = index + 2;
            const meta = MECHANISM_META[row.key];

            return `
              <article
                class="mechanism-dimension-card"
                style="grid-column: 1; grid-row: ${gridRow}; --accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
                data-dimension-row="${row.key}"
              >
                <h2 class="mechanism-dimension-title">${row.order} ${row.title}</h2>
                <div class="mechanism-dimension-icon">${ICONS[row.iconKey]}</div>
                <p class="mechanism-dimension-copy">${row.note}</p>
              </article>

              <div
                class="mechanism-arrow"
                style="grid-column: 2; grid-row: ${gridRow}; --accent: ${meta.accent};"
                aria-hidden="true"
              ></div>

              <section
                class="mechanism-indicator-stack"
                style="grid-column: 3; grid-row: ${gridRow}; --accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
                data-row-key="${row.key}"
              >
                ${renderMechanismIndicators(row.indicators)}
              </section>

              <div
                class="mechanism-arrow mechanism-arrow--dashed"
                style="grid-column: 4; grid-row: ${gridRow}; --accent: ${meta.accent};"
                aria-hidden="true"
              ></div>

              <article class="mechanism-element-card" style="grid-column: 5; grid-row: ${gridRow};" data-element-index="${index}">
                ${renderMechanismVisual(row.element.visual)}
                <h2 class="mechanism-element-title">${row.element.index} ${row.element.title}</h2>
              </article>

              <div
                class="mechanism-arrow mechanism-arrow--blue"
                style="grid-column: 6; grid-row: ${gridRow};"
                aria-hidden="true"
              ></div>

              <article class="mechanism-effect-card" style="grid-column: 7; grid-row: ${gridRow};" data-effect-index="${index}">
                <div class="mechanism-effect-topline">
                  <span class="mechanism-effect-badge">${row.effect.index}</span>
                  <h2 class="mechanism-effect-title">${row.effect.title}</h2>
                </div>
                <ul class="mechanism-effect-list">
                  ${row.effect.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                </ul>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function getRelativeOverlayPoint(element, container, side, yRatio = 0.5) {
  const elementRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    x: side === "right" ? elementRect.right - containerRect.left : elementRect.left - containerRect.left,
    y: elementRect.top - containerRect.top + elementRect.height * yRatio,
  };
}

function getOverlayMarkerSuffix(stroke) {
  if (stroke === "#ff932e" || stroke === "#ef7416") {
    return "Orange";
  }

  if (stroke === "#7ca843" || stroke === "#4d9b39" || stroke === "#3e9738") {
    return "Green";
  }

  if (stroke === "#f2a31d") {
    return "Yellow";
  }

  if (stroke === "#7a2ab8") {
    return "Purple";
  }

  return "LightBlue";
}

function getOverlayMarkerId(prefix, stroke) {
  return `${prefix}Arrow${getOverlayMarkerSuffix(stroke)}`;
}

function renderMechanismConnections() {
  const layout = document.querySelector("#mechanismLayout");
  const overlay = document.querySelector("#mechanismOverlay");

  if (!layout || !overlay) {
    return;
  }

  const width = layout.clientWidth;
  const height = layout.clientHeight;

  overlay.setAttribute("viewBox", `0 0 ${width} ${height}`);
  overlay.setAttribute("width", String(width));
  overlay.setAttribute("height", String(height));

  const defs = `
    <defs>
      <marker id="mechanismArrowBlue" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#2b6df0"></path>
      </marker>
      <marker id="mechanismArrowLightBlue" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#5a84ff"></path>
      </marker>
      <marker id="mechanismArrowOrange" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#ff932e"></path>
      </marker>
      <marker id="mechanismArrowGreen" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#7ca843"></path>
      </marker>
      <marker id="mechanismArrowYellow" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#f2a31d"></path>
      </marker>
    </defs>
  `;

  const dimensionPaths = MECHANISM_CONNECTIONS.dimensionsToIndicators
    .map((connection) => {
      const dimension = layout.querySelector(`[data-dimension-row="${connection.fromRow}"]`);
      const indicatorContainer = layout.querySelector(`[data-row-key="${connection.fromRow}"]`);

      if (!dimension || !indicatorContainer) {
        return "";
      }

      const indicatorPoints = connection.indicatorIndices
        .map((index) => {
          const indicator = indicatorContainer.querySelector(`[data-indicator-index="${index}"]`);
          if (!indicator) {
            return null;
          }

          return getRelativeOverlayPoint(indicator, layout, "left", 0.5);
        })
        .filter(Boolean);

      if (indicatorPoints.length === 0) {
        return "";
      }

      const sourcePoint = getRelativeOverlayPoint(
        dimension,
        layout,
        "right",
        connection.mode === "single" ? 0.5 : 0.5
      );
      const junctionX = sourcePoint.x + 22;
      const minY = Math.min(...indicatorPoints.map((point) => point.y));
      const maxY = Math.max(...indicatorPoints.map((point) => point.y));
      const markerId = getOverlayMarkerId("mechanism", connection.stroke);

      if (connection.mode === "single") {
        const targetPoint = indicatorPoints[0];
        return `
          <path
            class="mechanism-overlay__path mechanism-overlay__path--dimension"
            d="M ${sourcePoint.x} ${sourcePoint.y} L ${targetPoint.x} ${targetPoint.y}"
            stroke="${connection.stroke}"
            marker-end="url(#${markerId})"
          />
        `;
      }

      const trunk = `
        <path
          class="mechanism-overlay__path mechanism-overlay__path--dimension"
          d="M ${sourcePoint.x} ${sourcePoint.y} L ${junctionX} ${sourcePoint.y} L ${junctionX} ${minY} L ${junctionX} ${maxY}"
          stroke="${connection.stroke}"
        />
      `;

      const branches = indicatorPoints
        .map(
          (point) => `
            <path
              class="mechanism-overlay__path mechanism-overlay__path--dimension"
              d="M ${junctionX} ${point.y} L ${point.x} ${point.y}"
              stroke="${connection.stroke}"
              marker-end="url(#${markerId})"
            />
          `
        )
        .join("");

      return trunk + branches;
    })
    .join("");

  const indicatorPaths = MECHANISM_CONNECTIONS.indicatorsToElements
    .map((connection) => {
      const indicator = layout.querySelector(
        `[data-row-key="${connection.fromRow}"] [data-indicator-index="${connection.fromIndicator}"]`
      );
      const element = layout.querySelector(`[data-element-index="${connection.toElement}"]`);

      if (!indicator || !element) {
        return "";
      }

      const startPoint = getRelativeOverlayPoint(indicator, layout, "right", 0.5);
      const endPoint = getRelativeOverlayPoint(element, layout, "left", connection.targetY);
      const stroke = connection.stroke;
      const markerId = getOverlayMarkerId("mechanism", stroke);

      return `
        <path
          class="mechanism-overlay__path mechanism-overlay__path--dashed"
          d="M ${startPoint.x} ${startPoint.y} L ${endPoint.x} ${endPoint.y}"
          stroke="${stroke}"
          marker-end="url(#${markerId})"
        />
      `;
    })
    .join("");

  const effectPaths = MECHANISM_CONNECTIONS.elementsToEffects
    .map((connection) => {
      const element = layout.querySelector(`[data-element-index="${connection.fromElement}"]`);
      const effect = layout.querySelector(`[data-effect-index="${connection.toEffect}"]`);

      if (!element || !effect) {
        return "";
      }

      const startPoint = getRelativeOverlayPoint(element, layout, "right", connection.fromY);
      const endPoint = getRelativeOverlayPoint(effect, layout, "left", connection.toY);

      return `
        <path
          class="mechanism-overlay__path mechanism-overlay__path--solid"
          d="M ${startPoint.x} ${startPoint.y} L ${endPoint.x} ${endPoint.y}"
          stroke="#2b6df0"
          marker-end="url(#mechanismArrowBlue)"
        />
      `;
    })
    .join("");

  overlay.innerHTML = `${defs}${dimensionPaths}${indicatorPaths}${effectPaths}`;
}

function renderEmotionIndicators(indicators) {
  return indicators
    .map(
      (item, index) => `
        <article class="emotion-indicator-chip" data-indicator-index="${index}">
          <span class="emotion-indicator-code">${item.code}</span>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderEmotionVisual(type) {
  if (type === "sourceTag") {
    return `<div class="emotion-visual" aria-hidden="true">${ICONS.sourceTag}</div>`;
  }

  if (type === "fingerprint") {
    return `<div class="emotion-visual" aria-hidden="true">${ICONS.fingerprint}</div>`;
  }

  return `<div class="emotion-visual" aria-hidden="true">${ICONS.documentLeaf}</div>`;
}

function renderEmotionDimensionCard(row) {
  const meta = EMOTION_META[row.key];

  return `
    <article
      class="emotion-dimension-card"
      style="--accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
      data-emotion-dimension-row="${row.key}"
    >
      <h3 class="emotion-dimension-title">${row.order} ${row.title}</h3>
      <div class="emotion-dimension-icon">${ICONS[row.iconKey]}</div>
      <p class="emotion-dimension-copy">${row.note}</p>
    </article>
  `;
}

function renderEmotionIndicatorGroup(group) {
  const meta = EMOTION_META[group.key];

  return `
    <div
      class="emotion-indicator-group"
      style="--accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
      data-emotion-group="${group.key}"
    >
      ${renderEmotionIndicators(group.indicators)}
    </div>
  `;
}

function syncEmotionLayout() {
  const content = document.querySelector("#emotionContent");
  const bandOneNodes = [
    document.querySelector(".emotion-dimension-column > :nth-child(1)"),
    document.querySelector(".emotion-indicator-column > :nth-child(1)"),
    document.querySelector(".emotion-element-column > :nth-child(1)"),
    document.querySelector(".emotion-effect-column > :nth-child(1)"),
  ];
  const bandTwoNodes = [
    document.querySelector(".emotion-dimension-column > :nth-child(2)"),
    document.querySelector(".emotion-indicator-column > :nth-child(2)"),
    document.querySelector(".emotion-element-column > :nth-child(2)"),
    document.querySelector(".emotion-effect-column > :nth-child(2)"),
  ];
  const bandThreeNodes = [
    document.querySelector(".emotion-dimension-column > :nth-child(3)"),
    document.querySelector(".emotion-indicator-column > :nth-child(3)"),
    document.querySelector(".emotion-element-column > :nth-child(3)"),
    document.querySelector(".emotion-effect-column > :nth-child(3)"),
  ];

  if (!content) {
    return;
  }

  const getNodeHeight = (node) => (node ? node.getBoundingClientRect().height : 0);
  const bandOne = Math.max(...bandOneNodes.map(getNodeHeight));
  const bandTwo = Math.max(...bandTwoNodes.map(getNodeHeight));
  const bandThree = Math.max(...bandThreeNodes.map(getNodeHeight));

  content.style.setProperty("--emotion-band-1", `${Math.ceil(bandOne)}px`);
  content.style.setProperty("--emotion-band-2", `${Math.ceil(bandTwo)}px`);
  content.style.setProperty("--emotion-band-3", `${Math.ceil(bandThree)}px`);
}

function renderEmotionDiagram(preset) {
  return `
    <div class="emotion-layout">
      <h2 class="emotion-title">${preset.diagramTitle}</h2>
      <div class="emotion-header-grid">
        <div class="emotion-heading emotion-heading--green" style="grid-column: 1;">${preset.headers.first}</div>
        <div class="emotion-heading emotion-heading--purple" style="grid-column: 3;">${preset.headers.second}</div>
        <div class="emotion-heading emotion-heading--blue" style="grid-column: 5;">${preset.headers.third}</div>
        <div class="emotion-heading emotion-heading--slate" style="grid-column: 7;">${preset.headers.fourth}</div>
      </div>

      <div class="emotion-content" id="emotionContent">
        <svg class="emotion-overlay" id="emotionOverlay" aria-hidden="true"></svg>

        <section class="emotion-dimension-column">
          ${preset.dimensions.slice(0, 2).map(renderEmotionDimensionCard).join("")}
          <div class="emotion-lower-stack emotion-lower-stack--dimension">
            ${preset.dimensions.slice(2).map(renderEmotionDimensionCard).join("")}
          </div>
        </section>

        <section class="emotion-indicator-column">
          ${preset.indicatorGroups.slice(0, 2).map(renderEmotionIndicatorGroup).join("")}
          <div class="emotion-lower-stack emotion-lower-stack--indicator">
            ${preset.indicatorGroups.slice(2).map(renderEmotionIndicatorGroup).join("")}
          </div>
        </section>

        <section class="emotion-element-column">
          ${preset.elements
            .map(
              (element, index) => `
                <article class="emotion-element-card" data-emotion-element-index="${index}">
                  ${renderEmotionVisual(element.visual)}
                  <h3 class="emotion-element-title">${element.title}</h3>
                </article>
              `
            )
            .join("")}
        </section>

        <section class="emotion-effect-column">
          ${preset.effects
            .map(
              (effect, index) => `
                <article class="emotion-effect-card" data-emotion-effect-index="${index}">
                  <div class="emotion-effect-topline">
                    <span class="emotion-effect-badge">${effect.index}</span>
                    <h3 class="emotion-effect-title">${effect.title}</h3>
                  </div>
                  <ul class="emotion-effect-list">
                    ${effect.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                  </ul>
                </article>
              `
            )
            .join("")}
        </section>
      </div>
    </div>
  `;
}

function renderEmotionConnections() {
  const content = document.querySelector("#emotionContent");
  const overlay = document.querySelector("#emotionOverlay");

  if (!content || !overlay) {
    return;
  }

  const width = content.clientWidth;
  const height = content.clientHeight;

  overlay.setAttribute("viewBox", `0 0 ${width} ${height}`);
  overlay.setAttribute("width", String(width));
  overlay.setAttribute("height", String(height));

  const defs = `
    <defs>
      <marker id="emotionArrowBlue" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#2b6df0"></path>
      </marker>
      <marker id="emotionArrowLightBlue" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#5a84ff"></path>
      </marker>
      <marker id="emotionArrowOrange" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#ef7416"></path>
      </marker>
      <marker id="emotionArrowGreen" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#3e9738"></path>
      </marker>
      <marker id="emotionArrowPurple" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L7,3.5 L0,7 Z" fill="#7a2ab8"></path>
      </marker>
    </defs>
  `;

  const dimensionPaths = EMOTION_CONNECTIONS.dimensionsToIndicators
    .map((connection) => {
      const dimension = content.querySelector(`[data-emotion-dimension-row="${connection.fromGroup}"]`);
      const group = content.querySelector(`[data-emotion-group="${connection.fromGroup}"]`);

      if (!dimension || !group) {
        return "";
      }

      const indicatorPoints = connection.indicatorIndices
        .map((index) => {
          const indicator = group.querySelector(`[data-indicator-index="${index}"]`);
          if (!indicator) {
            return null;
          }

          return getRelativeOverlayPoint(indicator, content, "left", 0.5);
        })
        .filter(Boolean);

      if (indicatorPoints.length === 0) {
        return "";
      }

      const sourcePoint = getRelativeOverlayPoint(dimension, content, "right", 0.5);
      const junctionX = sourcePoint.x + 22;
      const minY = Math.min(...indicatorPoints.map((point) => point.y));
      const maxY = Math.max(...indicatorPoints.map((point) => point.y));
      const markerId = getOverlayMarkerId("emotion", connection.stroke);

      const trunk = `
        <path
          class="emotion-overlay__path emotion-overlay__path--dimension"
          d="M ${sourcePoint.x} ${sourcePoint.y} L ${junctionX} ${sourcePoint.y} L ${junctionX} ${minY} L ${junctionX} ${maxY}"
          stroke="${connection.stroke}"
        />
      `;

      const branches = indicatorPoints
        .map(
          (point) => `
            <path
              class="emotion-overlay__path emotion-overlay__path--dimension"
              d="M ${junctionX} ${point.y} L ${point.x} ${point.y}"
              stroke="${connection.stroke}"
              marker-end="url(#${markerId})"
            />
          `
        )
        .join("");

      return trunk + branches;
    })
    .join("");

  const indicatorPaths = EMOTION_CONNECTIONS.indicatorsToElements
    .map((connection) => {
      const indicator = content.querySelector(
        `[data-emotion-group="${connection.fromGroup}"] [data-indicator-index="${connection.fromIndicator}"]`
      );
      const element = content.querySelector(`[data-emotion-element-index="${connection.toElement}"]`);

      if (!indicator || !element) {
        return "";
      }

      const startPoint = getRelativeOverlayPoint(indicator, content, "right", 0.5);
      const endPoint = getRelativeOverlayPoint(element, content, "left", connection.targetY);
      const markerId = getOverlayMarkerId("emotion", connection.stroke);

      return `
        <path
          class="emotion-overlay__path emotion-overlay__path--mapping"
          d="M ${startPoint.x} ${startPoint.y} L ${endPoint.x} ${endPoint.y}"
          stroke="${connection.stroke}"
          marker-end="url(#${markerId})"
        />
      `;
    })
    .join("");

  const effectPaths = EMOTION_CONNECTIONS.elementsToEffects
    .map((connection) => {
      const element = content.querySelector(`[data-emotion-element-index="${connection.fromElement}"]`);
      const effect = content.querySelector(`[data-emotion-effect-index="${connection.toEffect}"]`);

      if (!element || !effect) {
        return "";
      }

      const startPoint = getRelativeOverlayPoint(element, content, "right", connection.fromY);
      const endPoint = getRelativeOverlayPoint(effect, content, "left", connection.toY);

      return `
        <path
          class="emotion-overlay__path emotion-overlay__path--effect"
          d="M ${startPoint.x} ${startPoint.y} L ${endPoint.x} ${endPoint.y}"
          stroke="#1f67c8"
          marker-end="url(#emotionArrowBlue)"
        />
      `;
    })
    .join("");

  overlay.innerHTML = `${defs}${dimensionPaths}${indicatorPaths}${effectPaths}`;
}

function renderStrategyDiagram(preset) {
  return `
    <div class="strategy-layout">
      <div class="strategy-row">
        <div class="strategy-layer-tag strategy-layer-tag--goal">${preset.layers.goal}</div>
        <section class="strategy-goal-panel">
          <h2 class="strategy-panel-title">${preset.goalPanel.title}</h2>
          <div class="strategy-goal-grid">
            ${preset.goalPanel.items
              .map(
                (item) => `
                  <div class="strategy-goal-chip">
                    <span>${item}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>
      </div>

      <div class="strategy-row strategy-row--connector" aria-hidden="true">
        <div></div>
        <div class="strategy-connector"></div>
      </div>

      <div class="strategy-row">
        <div class="strategy-layer-tag strategy-layer-tag--indicator">${preset.layers.indicator}</div>
        <section class="strategy-indicator-grid">
          ${preset.indicatorCards
            .map(
              (card) => `
                <article class="strategy-indicator-card">
                  <h2 class="strategy-indicator-title">${card.title}</h2>
                  <div class="strategy-indicator-section">
                    <h3 class="strategy-section-label">${card.metricsLabel}</h3>
                    <p class="strategy-indicator-text">${card.metrics}</p>
                  </div>
                  <div class="strategy-indicator-section">
                    <h3 class="strategy-section-label">${card.factorsLabel}</h3>
                    <p class="strategy-indicator-text">${card.factors}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </section>
      </div>

      <div class="strategy-row strategy-row--connector" aria-hidden="true">
        <div></div>
        <div class="strategy-connector"></div>
      </div>

      <div class="strategy-row">
        <div class="strategy-layer-tag strategy-layer-tag--module">${preset.layers.module}</div>
        <section class="strategy-module-shell">
          <div class="strategy-module-grid">
            ${preset.modules
              .map((module) => {
                const meta = MODULE_META[module.key];

                return `
                  <article
                    class="strategy-module-card"
                    style="--accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
                  >
                    <div class="strategy-module-icon">${MODULE_ICONS[module.key]}</div>
                    <div class="strategy-module-copy">
                      <h2 class="strategy-module-title">
                        <span class="strategy-module-code">${module.code}</span>
                        ${module.title}
                      </h2>
                      <div class="strategy-module-lines">
                        ${module.lines.map((line) => `<span>${line}</span>`).join("")}
                      </div>
                    </div>
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>
      </div>

      <div class="strategy-row strategy-row--connector" aria-hidden="true">
        <div></div>
        <div class="strategy-connector"></div>
      </div>

      <div class="strategy-row">
        <div class="strategy-layer-tag strategy-layer-tag--system">${preset.layers.system}</div>
        <section class="strategy-system-banner">
          ${preset.systemBanner.map((line) => `<span>${line}</span>`).join("")}
        </section>
      </div>
    </div>
  `;
}

function renderDiagram() {
  const preset = CONTENT[state.lang].diagrams[state.preset];
  diagramBoard.className = `diagram-board diagram-board--${preset.layout}`;
  diagramBoard.dataset.preset = state.preset;

  if (preset.layout === "mechanism") {
    diagramBoard.innerHTML = renderMechanismDiagram(preset);
    renderMechanismConnections();
    return;
  }

  if (preset.layout === "emotion") {
    diagramBoard.innerHTML = renderEmotionDiagram(preset);
    syncEmotionLayout();
    renderEmotionConnections();
    return;
  }

  if (preset.layout === "cmf") {
    diagramBoard.innerHTML = renderCmfDiagram(preset);
    return;
  }

  if (preset.layout === "strategy") {
    diagramBoard.innerHTML = renderStrategyDiagram(preset);
    return;
  }

  diagramBoard.innerHTML = renderExperienceDiagram(preset);
}

function renderPresetOptions() {
  const diagrams = CONTENT[state.lang].diagrams;

  presetSelect.innerHTML = PRESET_ORDER.map(
    (presetKey) => `
      <option value="${presetKey}" ${state.preset === presetKey ? "selected" : ""}>
        ${diagrams[presetKey].name}
      </option>
    `
  ).join("");
}

function renderCopy() {
  const copy = CONTENT[state.lang];
  const preset = copy.diagrams[state.preset];
  const { ui } = copy;

  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : state.lang;
  document.title = copy.documentTitle;

  pageEyebrow.textContent = ui.eyebrow;
  pageTitle.textContent = ui.pageTitle;
  pageIntro.textContent = ui.pageIntro;
  languageLabel.textContent = ui.languageLabel;
  imageSelectLabel.textContent = ui.imageSelectLabel;
  imageSelectTitle.textContent = ui.imageSelectTitle;
  imageSelectHint.textContent = ui.imageSelectHint;
  presetSummaryLabel.textContent = ui.presetSummaryLabel;
  presetSummaryTitle.textContent = ui.presetSummaryTitle;
  presetDescription.textContent = preset.description;

  langButtons.forEach((item) => {
    const isActive = item.dataset.lang === state.lang;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  renderPresetOptions();
  renderDiagram();
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    syncUrlState();
    renderCopy();
  });
});

presetSelect.addEventListener("change", (event) => {
  state.preset = event.target.value;
  syncUrlState();
  renderCopy();
});

window.addEventListener("resize", () => {
  const preset = CONTENT[state.lang].diagrams[state.preset];
  if (preset.layout === "mechanism" || preset.layout === "emotion") {
    renderDiagram();
  }
});

syncUrlState();
renderCopy();
