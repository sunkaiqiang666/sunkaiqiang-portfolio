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
};

const CONTENT = {
  zh: {
    documentTitle: "Yaoyu要的图",
    ui: {
      eyebrow: "Interactive Experience Diagram",
      pageTitle: "Yaoyu要的图",
      pageIntro:
        "根据参考图重建为网页版本，并加入图版切换与中英韩三语切换。左侧标签保持竖向展示，让结构更接近信息图阅读方式。",
      languageLabel: "语言切换",
      imageSelectLabel: "图片切换",
      imageSelectTitle: "更换图片",
      imageSelectHint: "当前先展示这一张图，后续新增图片时可以直接从这里继续扩展。",
      presetSummaryLabel: "当前图片",
      presetSummaryTitle: "图片说明",
      columns: {
        dimension: "用户体验维度",
        need: "需求名称",
        detail: "主要需求内容",
      },
      presets: {
        overview: "需求识别图",
      },
      presetDescriptions: {
        overview: "当前页面对应你提供的需求识别原图，完整展示五类体验维度、需求名称和主要需求内容。",
      },
      sideLabel: {
        mode: "stack",
        tokens: ["需", "求", "识", "别"],
      },
    },
    rows: {
      visual: {
        dimension: "视觉体验",
        need: "视觉体验需求",
        detail:
          "用户希望内饰在色彩搭配、整体色调、材料纹理和材质质感等方面形成自然、协调且舒适的视觉感受。",
      },
      tactile: {
        dimension: "触觉体验",
        need: "触觉体验需求",
        detail: "用户希望材料在接触过程中具有柔软、细腻、舒适且富有层次的触感表现。",
      },
      quality: {
        dimension: "品质感知",
        need: "品质感知需求",
        detail: "用户关注内饰的做工精细度、整体完成度、边缘处理和结构稳定性。",
      },
      eco: {
        dimension: "环保感知",
        need: "环保感知需求",
        detail: "用户希望产品的环保属性能够被识别、被理解，并形成明确的认知判断。",
      },
      overall: {
        dimension: "整体体验",
        need: "整体体验需求",
        detail: "用户关注材料、色彩、工艺和情感表达之间的整体协调性，以及由此形成的综合满意度。",
      },
    },
  },
  en: {
    documentTitle: "Yaoyu要的图",
    ui: {
      eyebrow: "Interactive Experience Diagram",
      pageTitle: "Yaoyu要的图",
      pageIntro:
        "This web version recreates the reference diagram and adds a diagram selector plus Chinese, English, and Korean language switching. The left label stays vertical to preserve the infographic rhythm.",
      languageLabel: "Language",
      imageSelectLabel: "Image Switch",
      imageSelectTitle: "Change Image",
      imageSelectHint: "Only the current image is shown for now. More images can be added here later.",
      presetSummaryLabel: "Current Image",
      presetSummaryTitle: "Image Summary",
      columns: {
        dimension: "User Experience Dimension",
        need: "Need Name",
        detail: "Primary Need Content",
      },
      presets: {
        overview: "Need Recognition Diagram",
      },
      presetDescriptions: {
        overview: "This page maps the reference image into a single interactive diagram with all five experience dimensions intact.",
      },
      sideLabel: {
        mode: "rotate",
        text: "Need Recognition",
      },
    },
    rows: {
      visual: {
        dimension: "Visual Experience",
        need: "Visual Experience Need",
        detail:
          "Users expect the interior to feel natural, coordinated, and comfortable through color matching, overall tonality, material texture, and surface finish.",
      },
      tactile: {
        dimension: "Tactile Experience",
        need: "Tactile Experience Need",
        detail:
          "Users expect materials to feel soft, refined, comfortable, and richly layered during touch.",
      },
      quality: {
        dimension: "Quality Perception",
        need: "Quality Perception Need",
        detail:
          "Users pay attention to craftsmanship details, overall completion, edge finishing, and structural stability.",
      },
      eco: {
        dimension: "Sustainability Perception",
        need: "Sustainability Perception Need",
        detail:
          "Users expect a product's environmental attributes to be recognized, understood, and translated into a clear cognitive judgment.",
      },
      overall: {
        dimension: "Overall Experience",
        need: "Overall Experience Need",
        detail:
          "Users care about the overall harmony among materials, color, process, and emotional expression, and the combined satisfaction created by that harmony.",
      },
    },
  },
  ko: {
    documentTitle: "Yaoyu要的图",
    ui: {
      eyebrow: "Interactive Experience Diagram",
      pageTitle: "Yaoyu要的图",
      pageIntro:
        "참고 이미지를 웹페이지로 재구성하고, 도표 전환과 중국어·영어·한국어 언어 전환을 추가했습니다. 왼쪽 라벨은 세로 배치로 유지해 인포그래픽의 읽기 흐름을 살렸습니다.",
      languageLabel: "언어 전환",
      imageSelectLabel: "이미지 전환",
      imageSelectTitle: "이미지 변경",
      imageSelectHint: "현재는 이 한 장만 표시하며, 이후 다른 이미지를 여기에 추가할 수 있습니다.",
      presetSummaryLabel: "현재 이미지",
      presetSummaryTitle: "이미지 설명",
      columns: {
        dimension: "사용자 경험 차원",
        need: "요구 명칭",
        detail: "주요 요구 내용",
      },
      presets: {
        overview: "요구 인식 도표",
      },
      presetDescriptions: {
        overview: "현재 페이지는 제공된 원본 이미지를 하나의 인터랙티브 도표로 옮긴 버전입니다.",
      },
      sideLabel: {
        mode: "rotate",
        text: "요구 인식",
      },
    },
    rows: {
      visual: {
        dimension: "시각 경험",
        need: "시각 경험 요구",
        detail:
          "사용자는 색채 조합, 전체 톤, 소재 텍스처와 질감이 자연스럽고 조화롭고 편안한 시각 인상을 만들기를 기대합니다.",
      },
      tactile: {
        dimension: "촉각 경험",
        need: "촉각 경험 요구",
        detail:
          "사용자는 소재가 닿을 때 부드럽고 섬세하며 편안하고 층위감 있는 촉감을 제공하기를 기대합니다.",
      },
      quality: {
        dimension: "품질 인지",
        need: "품질 인지 요구",
        detail:
          "사용자는 인테리어의 제작 디테일, 전체 완성도, 가장자리 마감과 구조적 안정성에 주목합니다.",
      },
      eco: {
        dimension: "친환경 인지",
        need: "친환경 인지 요구",
        detail:
          "사용자는 제품의 친환경 속성이 인식되고 이해되어 명확한 판단으로 이어지기를 기대합니다.",
      },
      overall: {
        dimension: "전체 경험",
        need: "전체 경험 요구",
        detail:
          "사용자는 소재, 색채, 공정, 감성 표현 사이의 전반적 조화와 그로 인한 종합 만족도를 중시합니다.",
      },
    },
  },
};

const PRESETS = {
  overview: ["visual", "tactile", "quality", "eco", "overall"],
};

const state = {
  lang: "zh",
  preset: "overview",
};

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

function renderSideLabel(sideLabel) {
  if (sideLabel.mode === "rotate") {
    return `<div class="axis-label axis-label--rotate"><span class="axis-label__rotate-text">${sideLabel.text}</span></div>`;
  }

  return `<div class="axis-label axis-label--stack">${sideLabel.tokens
    .map((token) => `<span>${token}</span>`)
    .join("")}</div>`;
}

function renderDiagram() {
  const copy = CONTENT[state.lang];
  const rows = PRESETS[state.preset];

  diagramBoard.innerHTML = `
    <div class="diagram-grid">
      <div class="column-heading" style="grid-column: 3; grid-row: 1;">${copy.ui.columns.dimension}</div>
      <div class="column-heading" style="grid-column: 5; grid-row: 1;">${copy.ui.columns.need}</div>
      <div class="column-heading" style="grid-column: 7; grid-row: 1;">${copy.ui.columns.detail}</div>

      <div class="axis-zone" style="grid-column: 1; grid-row: 2 / span ${rows.length}; --row-count: ${rows.length};">
        ${renderSideLabel(copy.ui.sideLabel)}
        <div class="axis-spine"></div>
        ${rows
          .map((rowKey, index) => {
            const meta = ROW_META[rowKey];
            return `
              <span
                class="axis-node"
                style="grid-row: ${index + 1}; --accent: ${meta.accent}; --shadow: ${meta.shadow};"
              ></span>
            `;
          })
          .join("")}
      </div>

      ${rows
        .map((rowKey, index) => {
          const row = copy.rows[rowKey];
          const meta = ROW_META[rowKey];
          const gridRow = index + 2;

          return `
            <div class="flow-arrow" style="grid-column: 2; grid-row: ${gridRow}; --accent: ${meta.accent};"></div>

            <article
              class="info-card"
              style="grid-column: 3; grid-row: ${gridRow}; --accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
            >
              <div class="icon-shell">${ICONS[rowKey]}</div>
              <h2 class="card-title">${row.dimension}</h2>
            </article>

            <div class="flow-arrow" style="grid-column: 4; grid-row: ${gridRow}; --accent: ${meta.accent};"></div>

            <article
              class="info-card"
              style="grid-column: 5; grid-row: ${gridRow}; --accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
            >
              <h2 class="card-title">${row.need}</h2>
            </article>

            <div class="flow-arrow" style="grid-column: 6; grid-row: ${gridRow}; --accent: ${meta.accent};"></div>

            <article
              class="detail-card"
              style="grid-column: 7; grid-row: ${gridRow}; --accent: ${meta.accent}; --soft: ${meta.soft}; --shadow: ${meta.shadow};"
            >
              <p>${row.detail}</p>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderPresetOptions() {
  const { presets } = CONTENT[state.lang].ui;

  presetSelect.innerHTML = Object.keys(PRESETS)
    .map(
      (presetKey) => `
        <option value="${presetKey}" ${state.preset === presetKey ? "selected" : ""}>
          ${presets[presetKey]}
        </option>
      `
    )
    .join("");
}

function renderCopy() {
  const copy = CONTENT[state.lang];
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
  presetDescription.textContent = ui.presetDescriptions[state.preset];

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
    renderCopy();
  });
});

presetSelect.addEventListener("change", (event) => {
  state.preset = event.target.value;
  renderCopy();
});

renderCopy();
