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

const PRESET_ORDER = ["overview", "cmfModular"];

const CONTENT = {
  zh: {
    documentTitle: "Yaoyu要的图",
    ui: {
      eyebrow: "Interactive Experience Diagram",
      pageTitle: "Yaoyu要的图",
      pageIntro:
        "根据参考图重建为多页网页版本，并加入图片切换与中英韩三语切换。第一页与第二页共用同一套信息图风格。",
      languageLabel: "语言切换",
      imageSelectLabel: "图片切换",
      imageSelectTitle: "更换图片",
      imageSelectHint: "当前已接入两张图，可在这里切换查看第一页和第二页。",
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
    },
  },
  en: {
    documentTitle: "Yaoyu要的图",
    ui: {
      eyebrow: "Interactive Experience Diagram",
      pageTitle: "Yaoyu要的图",
      pageIntro:
        "This web version recreates the references as a two-page infographic and adds image switching plus Chinese, English, and Korean language support.",
      languageLabel: "Language",
      imageSelectLabel: "Image Switch",
      imageSelectTitle: "Change Image",
      imageSelectHint: "Two diagrams are available now. Use this menu to switch between page one and page two.",
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
    },
  },
  ko: {
    documentTitle: "Yaoyu要的图",
    ui: {
      eyebrow: "Interactive Experience Diagram",
      pageTitle: "Yaoyu要的图",
      pageIntro:
        "참고 이미지를 동일한 인포그래픽 스타일의 2페이지 웹 버전으로 재구성하고, 이미지 전환과 중국어·영어·한국어 전환을 지원합니다.",
      languageLabel: "언어 전환",
      imageSelectLabel: "이미지 전환",
      imageSelectTitle: "이미지 변경",
      imageSelectHint: "현재 두 장의 도표가 연결되어 있으며, 여기서 1페이지와 2페이지를 전환할 수 있습니다.",
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
    },
  },
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

function renderDiagram() {
  const preset = CONTENT[state.lang].diagrams[state.preset];
  const isCmf = preset.layout === "cmf";

  diagramBoard.classList.toggle("diagram-board--cmf", isCmf);
  diagramBoard.classList.toggle("diagram-board--experience", !isCmf);
  diagramBoard.innerHTML = isCmf ? renderCmfDiagram(preset) : renderExperienceDiagram(preset);
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
    renderCopy();
  });
});

presetSelect.addEventListener("change", (event) => {
  state.preset = event.target.value;
  renderCopy();
});

renderCopy();
