export type ArtSubject =
  | "hero-stage"
  | "tuong-huyen-duong"
  | "huyen-duong-court"
  | "epic-dam-san"
  | "dam-san-longhouse"
  | "dam-san-sun-goddess"
  | "exhibit-mask-set"
  | "exhibit-storybox"
  | "exhibit-longhouse"
  | "exhibit-infographic"
  | "exhibit-micro-acting"
  | "exhibit-podcast"
  | "exhibit-handbook";

export interface MuseumWing {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  themeAccent?: "crimson" | "bronze" | "emerald" | "amber";
  workReference: string;
  gradeReference: string;
  shortDescription: string;
  highlights: string[];
  buttonLabel: string;
  artSubject: ArtSubject;
  expectedAssetFile: string;
  assetNote: string;
  detailContent: {
    culturalContext: string;
    literaryExcerptInfo: string;
    artisticFeatures: string[];
    steamConnection: string;
    discussionPrompt: string;
  };
}

export interface CharacterProfile {
  id: string;
  name: string;
  roleTitle: string;
  faceColorMeaning: string;
  paletteHex: string[];
  strokeFeatures: string;
  personalityDecoding: string;
  propsAndGesture: string;
}

export interface LearningTopic {
  id: string;
  topicNumber: string;
  title: string;
  status: "Đang triển khai" | "Dự kiến phát triển";
  summary: string;
  subjectInfo: string;
  lessonInfo: string;
  coreContent: string;
  activities: string[];
  expectedProducts: string;
  buttonLabel: string;
  artSubject: ArtSubject;
  expectedAssetFile: string;
  characters?: CharacterProfile[];
  storyboxLayers?: {
    layerName: string;
    description: string;
    materialSuggestion: string;
  }[];
  projectSteps: {
    phase: string;
    task: string;
    output: string;
  }[];
}

export interface SteamStep {
  stepNumber: number;
  title: string;
  summary: string;
  bullets: string[];
  artifactExample: string;
}

export interface SteamElement {
  letter: "S" | "T" | "E" | "A" | "M";
  englishName: string;
  vietnameseName: string;
  shortExplanation: string;
  huyenDuongExample: string;
  damSanExample: string;
  toolsAndMaterials: string[];
}

export type ExhibitionCategory =
  | "Tất cả"
  | "Sản phẩm thủ công"
  | "Mô hình sân khấu"
  | "Mặt nạ và tạo hình nhân vật"
  | "Hộp kể chuyện"
  | "Video vi diễn"
  | "Podcast và thuyết minh"
  | "Infographic và học liệu số";

export interface ExhibitionItem {
  id: string;
  title: string;
  category: Exclude<ExhibitionCategory, "Tất cả">;
  topicTitle: string;
  topicId: string;
  authorNote: string;
  isIllustrativeSample: boolean;
  ideaDescription: string;
  makingProcess: string[];
  materialsUsed: string[];
  videoStatusNote: string;
  videoUrl?: string;
  videoPoster?: string;
  documentUrl?: string;
  artSubject: ArtSubject;
  expectedAssetFile: string;
}

export interface DiscussionTopicGroup {
  id: string;
  topicName: string;
  guidingQuestions: string[];
  exchangeIssues: string[];
  openResearchQuestions: string[];
}
